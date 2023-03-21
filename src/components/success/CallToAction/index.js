import React, { useEffect } from 'react';
import Button from 'src/components/common/Button';
import styles from './CallToAction.module.scss';
import WhatsApp from 'public/images/icons/Whatsapp.svg';

export default function CallToAction() {
  return (
    <div className="col-12">
      <section className={styles.section}>
        <header>
          <p className="overline">Muito Obrigado!</p>
          <h1 className="h-sans">
            Nos chame no
            <br className="d-none d-md-block" />
            <span className="h-serif"> WhatsApp</span> agora!
          </h1>
        </header>
        <p>Adiante o seu atendimento nos<br className="d-block d-md-none" /> chamando<br className="d-none d-md-block" /> agora no WhatsApp.<br className="d-block d-md-none" /> <strong>Fale conosco!</strong></p>
        <Button href={`https://wa.me/send?phone=555195604623`} className="lg" LeftIcon={WhatsApp}>Nosso WhatsApp</Button>
      </section>
    </div>
  )
}
