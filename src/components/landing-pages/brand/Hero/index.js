import React from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import Image from 'next/image';
import AnimatedLogo from 'src/components/common/AnimatedLogo';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <header>
        <h1>
          <span>Dê vida à sua marca</span>
          <br />
          <span className="h-sans d-none d-lg-inline">e torne-a inesquecível</span>
        </h1>
        <p>{'Marque sua presença no mercado com uma marca forte e memorável. \nVeja abaixo como podemos lhe ajudar nessa jornada.'}</p>
        <Button className="outline sm" href="#" RightIcon={Arrow}>
          <span className="d-none d-lg-inline">Ver Projetos</span>
        </Button>
      </header>

      <div className={styles.mosaic}>
        <div>
          <div className={styles.lg} />
          <div className={styles.lg} />
        </div>
        <div>
          <div className={styles.lg}>
            <Image fill src="/images/hero/abarca/stand.png" alt="" />
          </div>
          <div className={styles.sm}>
            {/* <Image fill src="/images/hero/abarca/Pattern.gif" alt="" /> */}
          </div>
        </div>
        <div>
          <div className={styles.lg} />
          <div className={styles.sm} />
        </div>
        <div>
          <div className={styles.sm}>
            <video src="/images/hero/maptrack/grid-animation.mp4" loop muted autoPlay />
          </div>
          <div className={styles.lg}>
            <Image fill src="/images/hero/maptrack/stationery.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className={styles.lg}>
            <Image fill src="/images/hero/bronzo/packing-cropped.jpg" alt="" />
          </div>
          <div className={styles.sm} style={{ backgroundColor: '#CE7A24' }}>
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </div>
  )
}
