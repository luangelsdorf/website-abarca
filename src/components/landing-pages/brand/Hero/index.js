import React from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <header>
        {/* <h1 className="sans-after">{'Dê vida à sua marca \ne torne-a inesquecível'}</h1> */}
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
          <div className={styles.sm} />
          <div className={styles.md} />
        </div>
        <div>
          <div className={styles.lg} />
          <div className={styles.sm} />
        </div>
        <div>
          <div className={styles.lg} />
          <div className={styles.sm} />
        </div>
        <div>
          <div className={styles.lg} />
          <div className={styles.sm} />
        </div>
      </div>
    </div>
  )
}
