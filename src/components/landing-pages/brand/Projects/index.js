import React, { useEffect } from 'react';
import styles from './Projects.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';

export default function Projects({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('.horizontal', {
        x: (index, target) => -(target.scrollWidth - innerWidth + 250),
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal',
          start: '-22% top',
          end: self => `top ${-(self.trigger.scrollWidth - innerWidth + 250)}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    })

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section}>
      <header>
        <p className="overline">
          <Pin />
          <span>Projetos em Todo o Mundo</span>
        </p>
        <h2>Conheça <span className="h-serif">o que criamos</span> por aqui</h2>
      </header>
      <div className="container">
        <div className="row flex-nowrap horizontal">
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.project} />
          </div>
          <div className={`col-12 col-lg-8 ${styles.cta}`}>
            <div className={styles.project}>
              <h3 className="sans-before">{'Veja como podemos \ntransformar sua marca'}</h3>
              <Button RightIcon={Arrow}>Solicite uma Proposta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
