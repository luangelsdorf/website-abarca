import React from 'react';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import HeroForm from 'src/components/common/HeroForm';

export default function Hero({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <h1>
                <span className="h-sans">Design único</span>
                <br />
                <span>para sua marca</span>
              </h1>
              <p>Marque sua presença no mercado com uma marca forte e memorável. Veja abaixo como podemos lhe ajudar nessa jornada. <strong>Fortaleça sua marca conosco!</strong></p>
              <Button href="#pricing" className="sm outline" RightIcon={Arrow}>Ver Pacotes de Serviços</Button>
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <HeroForm />
          </div>
        </div>
      </div>
    </div>
  )
}
