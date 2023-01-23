import React from 'react';
import styles from './Hero.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <header>
        <h1 className="sans-after">{'Dê vida à sua marca \ne torne-a inesquecível'}</h1>
        <p>{'Marque sua presença no mercado com uma marca forte e memorável. \nVeja abaixo como podemos lhe ajudar nessa jornada.'}</p>
        <Button className="outline sm" href="#" RightIcon={Arrow}>Ver Projetos</Button>
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
