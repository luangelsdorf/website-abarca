import Link from 'next/link';
import React from 'react';
import styles from './Contact.module.scss';
import ArrowLarge from 'public/images/icons/ArrowLarge.svg';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from 'src/components/common/Button';
import ArrowCircle from 'src/components/common/ArrowCircle';

export default function Contact({ noLinks }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-10 offset-xxl-1">
            <div className={styles.learnMore} style={noLinks ? { marginBottom: 0 } : undefined}>
              <h2>
                <span className="d-none d-lg-inline">Vamos Iniciar <br />seu Projeto</span>
                <span className="d-inline d-lg-none">Inicie seu <br />Projeto</span>
              </h2>
              <p>Quer saber mais sobre como podemos lhe ajudar ou sanar alguma dúvida? <strong>Marque uma reunião</strong>, será um prazer lhe atender.</p>
              <Link href="/#contact" className={`d-none d-lg-flex ${styles.circleButton}`}>
                <ArrowCircle id="projectfooter" />
              </Link>
              <Button RightIcon={Arrow} className="outline large d-flex d-lg-none">Solicite uma Proposta</Button>
            </div>
            <div className={`${styles.links} ${noLinks ? 'd-none' : 'd-none d-lg-flex'}`}>
              <div>
                <h3>Contatos</h3>
                <address>
                  <Button link nativeLink className="left" href="tel:+5551989836186">+55 51 98983.6186</Button>
                  <Button link nativeLink className="left" href="mailto:contact@brstorm.design">contact@brstorm.design</Button>
                </address>
              </div>
              <div>
                <h3>Brand Design</h3>
                <Button link className="bottom">{'Sua Marca Muito \nAlém do Visual'}</Button>
              </div>
              <div>
                <h3>Digital Design</h3>
                <Button link className="bottom">{'Tenha uma Vitrine \n24/7 do seu Negócio'}</Button>
              </div>
              <div>
                <h3>Outros Links</h3>
                <Button link className="right">Termos de Uso</Button>
                <Button link className="right">Política de Privacidade</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
