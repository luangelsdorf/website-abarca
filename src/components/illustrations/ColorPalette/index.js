import { useEffect } from 'react';
import styles from './ColorPalette.module.scss';
import gsap from 'gsap';
import { Manrope } from '@next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function ColorPalette({ content }) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ delay: 5 });

      tl.fromTo(`.${styles.deepBlue}`,
        {
          xPercent: -100,
        },
        {
          xPercent: 0,
        },
      );

      tl.fromTo(`.${styles.white} > div`,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          stagger: 0.3,
        },
      );

      tl.fromTo(`.${styles.wrapper}`,
        {
          '--pos': 'translateX(100%)',
        },
        {
          '--pos': 'translateX(0%)',
        },
      );

      tl.fromTo(`h4, small`,
        {
          autoAlpha: 0,
          yPercent: 100,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.04,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.deepBlue}>
        <h4>Deep Blue</h4>
        <div>
          <div>
            <small>CMYK</small>
            <small>100, 90, 50, 70</small>
          </div>
          <div>
            <small>RGB</small>
            <small>14, 21, 48</small>
          </div>
          <div>
            <small>HEX</small>
            <small>#0E1530</small>
          </div>
        </div>
      </div>

      <div className={styles.whiteBlue}>
        <div className={styles.skyBlue}>
          <h4>Sky Blue</h4>
          <div>
            <div>
              <small>CMYK</small>
              <small>100, 47, 0, 0</small>
            </div>
            <div>
              <small>RGB</small>
              <small>0, 134, 255</small>
            </div>
            <div>
              <small>HEX</small>
              <small>#0086FF</small>
            </div>
          </div>
        </div>

        <div className={styles.white}>
          <div>
            <h4>Catskill White</h4>
            <div>
              <div>
                <small>CMYK</small>
                <small>15, 10, 0, 0</small>
              </div>
              <div>
                <small>RGB</small>
                <small>239, 243, 251</small>
              </div>
              <div>
                <small>HEX</small>
                <small>#EFF3FB</small>
              </div>
            </div>
          </div>

          <div>
            <h4>White</h4>
            <div>
              <div>
                <small>CMYK</small>
                <small>0, 0, 0, 0</small>
              </div>
              <div>
                <small>RGB</small>
                <small>255, 255, 255</small>
              </div>
              <div>
                <small>HEX</small>
                <small>#FFFFFF</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .${styles.wrapper} h4, small {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
    </div>
  )
}
