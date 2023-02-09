import React from 'react';
import Button from 'src/components/common/Button';
import styles from './About.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';

export default function About({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.intro}>
              <h2>
                <span className="h-sans">Sua marca muito </span>
                <span>além<br className="d-block d-lg-none" /> do visual</span>
              </h2>
              <Button href="#" className="outline lg d-none d-lg-flex" RightIcon={Arrow}>Comece seu Projeto Agora</Button>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.aboutUs}>
              <p>A <span>Br.Storm</span> é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais.</p>
              <p>Criamos marcas fortes e memoráveis que refletem a essência da sua empresa. Elaboramos desde a ideia até as mais diversas aplicações do seu projeto.</p>
            </div>
            <Button href="#" className="lg d-flex d-lg-none justify-content-center" RightIcon={Arrow}>Comece seu Projeto</Button>
          </div>
          <div className="col-lg-10 offset-lg-1 d-none d-lg-block">
            <div className={styles.details}>
              <article>
                <div>
                  <h3>{'Feito Sob Medida \npara o seu Negócio'}</h3>
                  <p>{'Design exclusivo, criado \nespecialmente para o seu negócio.'}</p>
                </div>
              </article>
              <article>
                <div>
                  <h3>{'Equipe Experiente \ne Especializada'}</h3>
                  <p>{'Garantia de qualidade e eficácia \nna entrega do seu projeto.'}</p>
                </div>
              </article>
              <article>
                <div>
                  <h3>{'Abordagem Estratégica \npara Soluções Assertivas'}</h3>
                  <p>{'Mapeamos a essência do seu \nnegócio para criar algo singular.'}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
