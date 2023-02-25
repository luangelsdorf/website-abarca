import React from 'react';
import styles from './MenuMobile.module.scss';
import Arrow from 'public/images/icons/Arrow.svg'
import Pin from 'public/images/icons/Pin.svg';
import Button from 'src/components/common/Button';

export default function MenuMobile({ links }) {

  function handleClick() {
    document.querySelector(`.${styles.menu}`).classList.toggle('active');
    document.querySelector('#viewport').classList.toggle('active');
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
    <div className={`d-flex d-lg-none ${styles.menu}`} data-menu>
      <ul>
        {
          mobileLinks.map((link, index) => (
            <li key={index}>
              <Button className="left large" link onClick={handleClick} href={link.href}>{link.name}</Button>
            </li>
          ))
        }
      </ul>
      <Button onClick={handleClick} href="/#contact" RightIcon={Arrow} className="outline" id="menu-contact">Começar Projeto</Button>

      <div className={styles.footer}>
        <Pin />
        <span>Rio Grande do Sul, Brasil</span>
      </div>
    </div>
  )
}
