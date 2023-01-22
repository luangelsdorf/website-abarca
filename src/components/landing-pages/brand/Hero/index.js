import Link from 'next/link';
import React from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <header>
        <h1 className="sans-after">{'Dê vida à sua marca \ne torne-a inesquecível'}</h1>
        <p>{'Marque sua presença no mercado com uma marca forte e memorável. \nVeja abaixo como podemos lhe ajudar nessa jornada.'}</p>
        <Link href="#" className="btn outline sm">
          <span>Ver Projetos</span>
          <Arrow />
        </Link>
      </header>

      <div className={styles.mosaic}>
        <div>
          <div style={{ height: '480px', backgroundColor: 'rgb(var(--shadow))' }} />
          <div style={{ height: '480px', backgroundColor: 'rgb(var(--shadow))' }} />
        </div>
        <div>
          <div style={{ height: '320px', backgroundColor: 'rgb(var(--shadow))' }} />
          <div style={{ height: '400px', backgroundColor: 'rgb(var(--shadow))' }} />
        </div>
        <div>
          <div style={{ height: '480px', backgroundColor: 'rgb(var(--shadow))' }} />
          <div style={{ height: '320px', backgroundColor: 'rgb(var(--shadow))' }} />
        </div>
        <div>
          <div style={{ height: '480px', backgroundColor: 'rgb(var(--shadow))' }} />
          <div style={{ height: '320px', backgroundColor: 'rgb(var(--shadow))' }} />
        </div>
        <div>
          <div style={{ height: '480px', backgroundColor: 'rgb(var(--shadow))' }} />
          <div style={{ height: '320px', backgroundColor: 'rgb(var(--shadow))' }} />
        </div>
      </div>
    </div>
  )
}
