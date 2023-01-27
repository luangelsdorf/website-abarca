import React from 'react';
import styles from './Footer.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import Dribbble from 'public/images/icons/Dribbble.svg';
import Instagram from 'public/images/icons/Instagram.svg';
import Behance from 'public/images/icons/Behance.svg';

export default function Footer({ content }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className="d-none d-lg-block">
            <Pin />
            <span>Rio Grande do Sul, Brasil</span>
          </p>

          <div className={`d-none d-lg-block ${styles.social}`}>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Behance />
            </a>
            <a href="#">
              <Dribbble />
            </a>
          </div>

          <p>Br.Storm Design © 2023</p>
        </div>
      </div>
    </footer>
  )
}
