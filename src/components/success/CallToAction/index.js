import React from 'react';
import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import WhatsApp from 'public/images/icons/Whatsapp.svg';
import Overline from 'src/components/common/Overline';
import { useRouter } from 'next/router';

export default function CallToAction() {
  return (
    <div className="col-12">
      <section className={styles.section}>
        <header>
          <Overline>Muito Obrigado!</Overline>
          <h1 className="h-sans">
            <span>Nos chame no</span>
            <br className="d-none d-md-block" />
            <span className="h-serif"> <a href={`https://wa.me/send?phone=5551985109049`}>WhatsApp</a></span><span> agora!</span>
          </h1>
        </header>
        <p>Adiante o seu atendimento nos<br className="d-block d-md-none" /> chamando<br className="d-none d-md-block" /> agora no WhatsApp.<br className="d-block d-md-none" /> <strong>Fale conosco!</strong></p>
        <Button href={`https://wa.me/send?phone=5551985109049`} className="lg" LeftIcon={WhatsApp}>Nosso WhatsApp</Button>
      </section>
    </div>
  )
}
