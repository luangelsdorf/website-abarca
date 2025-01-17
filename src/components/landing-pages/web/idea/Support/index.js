import React, { useEffect } from 'react';
import styles from './Support.module.scss';
import Seal from 'public/images/illustrations/seal.svg';
import Image from 'next/image';
import macbook from 'public/images/mac.png';
import HeroForm from 'src/components/common/HeroForm';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Overline from 'src/components/common/Overline';

export default function Support({ discount }) {

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
            end: 'top 25%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '-40% 0% -60% 0%' });
    const targets = document.querySelectorAll(`#support`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="col-12 col-lg-10 mx-auto">
          <header>
            <Overline lineLength={390}>{discount ? 'Condições de Pagamento' : 'Suporte Abarca'}</Overline>
            <div>
              <div className={styles.seal}>
                <Seal />
              </div>
              <h2 className="supportHeading">
                <span id="line1">{discount ? 'Pague em até' : 'Sempre prontos'}</span>
                <br />
                <span id="line2">{discount ? '12x sem juros' : 'para lhe ajudar'}</span>
              </h2>
            </div>
          </header>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        <div className="offset-xxl-1">
          <div className={styles.formWrapper} data-reveal>
            <div>
              <strong>Quer ter um site incrível?</strong>
              <span> Preencha o formulário e deixe-nos cuidar do resto!</span>
            </div>
            <HeroForm light short />
          </div>
        </div>

        <div className={styles.mockup}>
          <video src="/videos/animation.mp4" muted loop autoPlay />
          <Image quality={100} src={macbook} width="1126" height="735" alt="" />
        </div>
      </div>
    </div>
  )
}
