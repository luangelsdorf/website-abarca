import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import ShortForm from 'src/components/common/ShortForm';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import HeroForm from 'src/components/common/HeroForm';

export default function Hero({
  children,
  web,
  slot01,
  slot02,
  slot03,
  slot04,
  slot05,
  slot06,
  slot07,
  slot08,
  slot09,
  slot10,
}) {

  const router = useRouter();
  const referrer = router.route.split('/').at(-1);

  const handleClick = project => router.push(`/portfolio/${project}?referrer=${referrer}`, `/portfolio/${project}`);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      gsap.fromTo(`.${styles.mosaic} > div:nth-child(odd):not(:nth-child(3))`,
        {
          yPercent: -8,
        },
        {
          yPercent: 16,
          scrollTrigger: {
            trigger: `.${styles.mosaic}`,
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(`.${styles.mosaic} > div:nth-child(even):not(:nth-child(3))`,
        {
          yPercent: 4,
        },
        {
          yPercent: -12,
          scrollTrigger: {
            trigger: `.${styles.mosaic}`,
            scrub: 0.8,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              {children}
              <div className="col-12 col-sm-8 col-xl-6 mx-auto p-0 d-none d-lg-block">
                <ShortForm light />
              </div>
              <div className="d-block d-lg-none">
                <HeroForm short />
              </div>
              <p>{`Preencha o formulário acima e deixe sua \n${web ? 'empresa' : 'marca'} se destacar no mercado.`}</p>
              <Button nativeLink id="hero-projects" className="outline white sm" href="#projects" RightIcon={Arrow} />
            </header>
          </div>
        </div>
      </div>

      <div className={styles.mosaic} id="mosaic">
        <div>
          <div className={styles.lg} onClick={() => handleClick(slot01.props['data-project'])}>
            {slot01}
          </div>
          <div className={styles.lg} onClick={() => handleClick(slot02.props['data-project'])}>
            {slot02}
          </div>
        </div>
        <div>
          <div className={styles.lg} onClick={() => handleClick(slot03.props['data-project'])}>
            {slot03}
          </div>
          <div className={styles.sm} onClick={() => handleClick(slot04.props['data-project'])}>
            {slot04}
          </div>
        </div>
        <div>
          <div className={styles.sm} data-no-link>
            {slot05}
          </div>
          <div className={styles.lg} data-no-link>
            {slot06}
          </div>
        </div>
        <div>
          <div className={styles.sm} onClick={() => handleClick(slot07.props['data-project'])}>
            {slot07}
          </div>
          <div className={styles.lg} onClick={() => handleClick(slot08.props['data-project'])}>
            {slot08}
          </div>
        </div>
        <div>
          <div className={styles.lg} onClick={() => handleClick(slot09.props['data-project'])}>
            {slot09}
          </div>
          <div className={styles.sm} onClick={() => handleClick(slot10.props['data-project'])}>
            {slot10}
          </div>
        </div>
      </div>
    </div>
  )
}
