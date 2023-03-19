import gsap from 'gsap';
import React, { useEffect } from 'react';
import Type from 'src/components/illustrations/Type';
import styles from './Loader.module.scss';

export default function Loader({ content }) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        onComplete: () => {
          document.querySelector('#type-animation').stop();
          document.documentElement.classList.remove('o-hidden');
        }
      });
      tl.to('#viewport', { opacity: 0, duration: 0.2 });

      tl.fromTo('#white', { opacity: 0 }, { opacity: 1 });
      tl.fromTo('#white', { yPercent: 100 }, { yPercent: 0, delay: 3, onComplete: () => gsap.to('#viewport', { opacity: 1, duration: 0.1 }) });

      tl.fromTo('#loader', { yPercent: 0 }, { yPercent: -100, duration: 0.4 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.loader} id="loader">
      <div className={styles.text}>
        <div>WE ARE</div>
        <div>
          <Type single />
        </div>
      </div>

      <div className={styles.white} id="white" />
    </div>
  )
}
