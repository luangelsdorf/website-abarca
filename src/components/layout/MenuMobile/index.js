import React from 'react';
import styles from './MenuMobile.module.scss';
import Arrow from 'public/images/icons/Arrow.svg'
import Pin from 'public/images/icons/Pin.svg';
import Button from 'src/components/common/Button';
import Link from 'next/link';
import ArrowCircle from 'src/components/common/ArrowCircle';
import { useRouter } from 'next/router';

export default function MenuMobile({ links }) {

  function handleClick() {
    document.querySelector(`.${styles.menu}`).classList.toggle('active');
    document.querySelector('#viewport').classList.toggle('active');
    document.documentElement.classList.remove('no-scroll');
  }

  const mobileLinks = links ?? [
    {
      name: 'Sobre',
      href: '/#about',
    },
    {
      name: 'Projetos',
      href: '/#projects',
    },
    {
      name: 'Clientes',
      href: '/#testimonials',
    },
    {
      name: 'Contato',
      href: '/#contact',
    },
  ];

  return (
    <div className={`${styles.menu}`} data-menu>
      <div className="container" style={{ height: '100%' }}>
        <div className={styles.leftBg} />
        <div className={styles.rightBg} />
        <div className="row">
          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.firstHalf}>
              <h2>Vamos Iniciar seu Projeto</h2>
              <p>Quer saber mais sobre como podemos lhe ajudar ou sanar alguma dúvida? <strong>Marque uma reunião</strong>, será um prazer lhe atender.</p>
              <Button link href="/#contact">
                <ArrowCircle id="menu" />
              </Button>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-3" style={{ height: '100%' }}>
            <div className={styles.secondHalf}>
              <div className={styles.local}>
                <Pin />
                <span>Rio Grande do Sul, Brasil</span>
              </div>
              <div className={styles.links}>
                <ul>
                  {
                    mobileLinks.map((link, index) => (
                      <li key={index}>
                        <Button className="left large" link href={link.href}>{link.name}</Button>
                      </li>
                    ))
                  }
                </ul>
                <Button href="/#contact" RightIcon={Arrow} className="d-inline-flex d-lg-none outline" id="menu-contact">Começar Projeto</Button>
              </div>
              <small className="d-none d-lg-block">Br.Storm Design © 2023</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
