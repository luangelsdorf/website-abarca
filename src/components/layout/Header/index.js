import React, { useEffect } from 'react';
import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Logo from 'public/images/brstorm.svg';
import Link from 'next/link';
import Open from 'public/images/icons/open.svg';
import MenuMobile from '../MenuMobile';

export default function Header({ floating, links }) {
  function handleClick() {
    document.querySelector('[data-menu]').classList.toggle('active');
    document.querySelector('#viewport').classList.toggle('active');
  }

  function floatingClick(e) {
    e.target.closest(`.${styles.header}`).classList.toggle(styles.floating);
  }

  useEffect(() => {
    if (!floating) return;

    function onScroll() {
      document.querySelector(`.${styles.header}`).classList.add(styles.floating);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const desktopLinks = links ?? [
    {
      name: 'Sobre',
      href: '/#about',
    },
    {
      name: 'Projetos',
      href: '/#projects',
    },
    {
      name: 'Depoimentos',
      href: '/#testimonials',
    },
    {
      name: 'Contato',
      href: '/#contact',
    },
  ];

  return (
    <>
      <MenuMobile links={desktopLinks} />
      <div className={`container ${styles.header} ${floating ? styles.floating : ''}`}>
        <header>
          <nav>
            <Link id="logo" href="#" style={{ color: 'rgb(var(--white))' }}>
              <Logo />
            </Link>
            <ul className="collapse d-none d-lg-flex" id="links">
              {
                desktopLinks.map((link, index) => (
                  <li key={index}>
                    <Button link className="bottom" href={link.href}>{link.name}</Button>
                  </li>
                ))
              }
            </ul>
            <div>
              <Button id="header-contact" href="/#contact" className="sm d-none d-lg-flex">Começar Projeto</Button>
              <Button id="menu-expand" className="d-flex d-lg-none" onClick={handleClick} type="button" floating btnElement />
              {
                floating ? (
                  <button onClick={floatingClick} type="button" className={`btn d-none d-lg-flex ${styles.floatingBtn}`}>
                    <Open />
                  </button>
                ) : null
              }
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
