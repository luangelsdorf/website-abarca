import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';
import useLayoutEffect from './useIsomorphicEffect';

export default function useSmoothScroll() {
  function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, { zIndex: 1, overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => content.style.overflow = "visible",
      killScrub = trigger => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
        scrub && scrub.pause();
        trigger.animation.progress(trigger.progress);
      },
      height, isProxyScrolling;

    function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible"
      document.body.style.height = height + "px";
      return height - document.documentElement.clientHeight;
    }

    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    })
    ScrollTrigger.defaults({ scroller: content });

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(content, { y: 0 }, {
        y: () => document.documentElement.clientHeight - height/*  - 24 */,
        ease: "none",
        onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: self => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
  }

  const router = useRouter();

  useLayoutEffect(() => {
    function initScroll() {
      console.log('routeChangeComplete');
      let s = smoothScroll("#content", undefined, 0.8);
      window?.dispatchEvent(new Event('resize'));
      return s;
    }

    gsap.registerPlugin(ScrollTrigger);
    let init = initScroll();
    router.events.on('routeChangeComplete', initScroll);

    return () => {
      router.events.off('routeChangeComplete', initScroll);
      init.kill();
    }
  }, [router.events]);
}