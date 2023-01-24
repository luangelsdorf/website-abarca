import Link from 'next/link';
import React from 'react';
import styles from './Contact.module.scss';
import ArrowLarge from 'public/images/icons/ArrowLarge.svg';

export default function Contact({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-10 offset-xxl-1">
            <div className={styles.learnMore}>
              <h2>{'Vamos Iniciar \nseu Projeto'}</h2>
              <p>Quer saber mais sobre como podemos lhe ajudar ou sanar alguma dúvida? <strong>Marque uma reunião</strong>, será um prazer lhe atender.</p>
              <Link href="#" className={styles.circleButton}>
                <ArrowLarge />
              </Link>
            </div>
            <div className={styles.links}>
              <div>
                <h3>Contatos</h3>
                <address>
                  <a href="tel:+5551989836186">+55 51 98983.6186</a>
                  <a href="mailto:contact@brstorm.design">contact@brstorm.design</a>
                </address>
              </div>
              <div>
                <h3>Brand Design</h3>
                <Link href="#">{'Sua Marca Muito \nAlém do Visual'}</Link>
              </div>
              <div>
                <h3>Digital Design</h3>
                <Link href="#">{'Tenha uma Vitrine \n24/7 do seu Negócio'}</Link>
              </div>
              <div>
                <h3>Outros Links</h3>
                <Link href="#">Termos de Uso</Link>
                <Link href="#">Política de Privacidade</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
