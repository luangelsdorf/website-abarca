import React, { useEffect } from 'react';
import styles from './Support.module.scss';
import Seal from 'public/images/illustrations/seal.svg';
import Image from 'next/image';
import macbook from 'public/images/macbook.png';
import HeroForm from 'src/components/common/HeroForm';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Overline from 'src/components/common/Overline';

export default function Support() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.fromTo('#line1',
        {
          xPercent: -50,
        },
        {
          xPercent: 0,

          ease: 'none',
          scrollTrigger: {
            trigger: '.supportHeading',
            scrub: 1,
            end: 'top 25%'
          }
        }
      );
      gsap.fromTo('#line2',
        {
          xPercent: 50,
        },
        {
          xPercent: 0,

          ease: 'none',
          scrollTrigger: {
            trigger: '.supportHeading',
            scrub: 1,
            end: 'top 25%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="col-12 col-lg-10 mx-auto">
          <header>
            <Overline lineLength={390}>Suporte Br.Storm</Overline>
            <div>
              <div className={styles.seal}>
                <Seal />
              </div>
              <h2 className="supportHeading">
                <span id="line1">Sempre prontos</span>
                <br />
                <span id="line2">para lhe ajudar</span>
              </h2>
            </div>
          </header>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        <div className="col-12 offset-xxl-1">
          <div className={styles.formWrapper} data-reveal>
            <HeroForm light short />
          </div>
        </div>
      </div>

      <div className={styles.mockup}>
        <video src="/videos/video-mockup.mp4" muted loop autoPlay />
        <Image quality={100} src={macbook} width="1126" height="735" alt="" />
      </div>
    </div>
  )
}
