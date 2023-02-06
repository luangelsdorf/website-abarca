import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Merriweather } from '@next/font/google';
import { Inter } from '@next/font/google';
import Header from 'src/components/layout/Header';
import gsap from 'gsap';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from 'src/components/common/Loader';
import { isDev } from 'src/utils/env';

const merriweather = Merriweather({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  style: 'italic',
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const scroller = useSmoothScroll();

  const router = useRouter();

  /* useEffect(() => {
    const onRouteStart = () => {
      let tl = gsap.timeline();
      tl.to('#viewport', { opacity: 0, duration: 0.2 });
      tl.fromTo('#loader', { yPercent: 100 }, { yPercent: 0, duration: 0.4 });
      tl.fromTo('#white', { yPercent: 100 }, { yPercent: 0, delay: 3, onComplete: () => gsap.to('#viewport', { opacity: 1, duration: 0.1 }) });
      tl.fromTo('#loader', { yPercent: 0 }, { yPercent: -100, duration: 0.4 });
    }

    router.events.on('routeChangeStart', onRouteStart);

    return () => {
      router.events.off('routeChangeStart', onRouteStart);
    }
  }, []); */

  return (
    <>
      <style jsx global>{`
        html {
          --merriweather: ${merriweather.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}
      </style>

      <Header floating={Component.floatingHeader} />

      {isDev ? null : <Loader />}

      <div id="viewport">
        <div id="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
