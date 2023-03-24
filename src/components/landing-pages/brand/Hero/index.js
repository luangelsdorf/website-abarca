import React from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import Image from 'next/image';
import AnimatedLogo from 'src/components/common/AnimatedLogo';
import ShortForm from 'src/components/common/ShortForm';
import { useRouter } from 'next/router';

export default function Hero({ content }) {
  const router = useRouter();
  const referrer = router.route.split('/').at(-1);

  const handleClick = project => router.push(`/portfolio/${project}?referrer=${referrer}`, `/portfolio/${project}`);

  return (
    <div className={styles.section}>
      <div className="col-12">
        <header>
          <h1>
            <span>Dê vida à sua marca</span>
            <br />
            <span className="h-sans d-none d-lg-inline">e torne-a inesquecível</span>
          </h1>
          <div className="col-12 col-sm-8 col-lg-6 mx-auto p-0">
            <ShortForm />
          </div>
          <p>{'Preencha o formulário acima e deixe sua \nmarca se destacar no mercado. '}</p>
          <Button id="hero-projects" className="outline sm" href="#projects" RightIcon={Arrow} />
        </header>
      </div>

      <div className={styles.mosaic}>
        <div>
          <div className={styles.lg} onClick={() => handleClick('casulo')}>
            <Image fill src="/images/hero/casulo/Logos-Casulo.gif" alt="" />
          </div>
          <div className={styles.lg} onClick={() => handleClick('casulo')}>
            <Image fill src="/images/hero/casulo/banner-hero.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className={styles.lg} onClick={() => handleClick('abarca')}>
            <Image fill src="/images/hero/abarca/stand.png" alt="" />
          </div>
          <div className={styles.sm} onClick={() => handleClick('abarca')}>
            <video src="/images/hero/abarca/pattern.mp4" loop muted autoPlay />
          </div>
        </div>
        <div>
          <div className={styles.sm} data-no-link>
            <video src="/images/hero/pegada/logo-textures.mp4" loop muted autoPlay />
          </div>
          <div className={styles.lg} data-no-link>
            <Image fill src="/images/hero/pegada/woman.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className={styles.sm} onClick={() => handleClick('maptrack')}>
            <video src="/images/hero/maptrack/grid-animation.mp4" loop muted autoPlay />
          </div>
          <div className={styles.lg} onClick={() => handleClick('maptrack')}>
            <Image fill src="/images/hero/maptrack/stationery.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className={styles.lg} onClick={() => handleClick('bronzo')}>
            <Image fill src="/images/hero/bronzo/packing-cropped.jpg" alt="" />
          </div>
          <div className={styles.sm} style={{ backgroundColor: '#CE7A24' }} onClick={() => handleClick('bronzo')}>
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </div>
  )
}
