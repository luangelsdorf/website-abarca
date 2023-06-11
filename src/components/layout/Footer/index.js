import React from 'react';
import styles from './Footer.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import Instagram from 'public/images/icons/Instagram.svg';
import Linkedin from 'public/images/icons/Linkedin.svg';
import Youtube from 'public/images/icons/Youtube.svg';
import Behance from 'public/images/icons/Behance.svg';

export default function Footer({ fullHeight }) {
  return (
    <footer className={`${styles.footer}${fullHeight ? ' ' + styles.fullHeight : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <p className="d-none d-lg-block">
            <Pin />
            <span>Rio Grande do Sul, Brasil</span>
          </p>

          <div className={styles.social}>
            <a href="https://instagram.com/abarca.comunica/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://linkedin.com/company/abarcacomunica/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://youtube.com/@abarcacomunicacaointegrada9702" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
            <a href="https://www.behance.net/abarcacomunica" target="_blank" rel="noopener noreferrer">
              <Behance />
            </a>
          </div>

          <p>Abarca Comunicação Integrada © 2023</p>
        </div>
      </div>
    </footer>
  )
}
