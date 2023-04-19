import React from 'react';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import styles from './Hero.module.scss';
import HeroForm from 'src/components/common/HeroForm';

export default function Hero({ shortForm }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.textContent}>
              <h1>
                <span className="h-sans">Design único&nbsp;</span>
                <br className="d-none d-lg-block" />
                <span>para sua marca</span>
              </h1>
              <p className="d-none d-sm-block">Marque sua presença no mercado com uma marca forte e memorável. Veja abaixo como podemos lhe ajudar nessa jornada. <strong>Fortaleça sua marca conosco!</strong></p>
              <Button href="#pricing" className="sm outline d-none d-sm-inline-flex" RightIcon={Arrow}>Ver Pacotes de Serviços</Button>
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <HeroForm light short={shortForm} />
            <p style={{ marginTop: '24px' }} className="d-sm-none">Preencha o formulário acima e deixe sua <br /> marca se destacar no mercado.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
