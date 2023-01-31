import React, { useEffect } from 'react';
import Arrow from 'public/images/icons/Arrow.svg'
import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Logo from 'public/images/brstorm.svg';
import Link from 'next/link';
import Open from 'public/images/icons/Open.svg';
import Pin from 'public/images/icons/Pin.svg';

export default function Header({ floating }) {

  const MenuMobile = () => (
    <div className={`d-flex d-lg-none ${styles.menu}`}>
      <ul>
        <li>
          <Link href="#">Sobre</Link>
        </li>
        <li>
          <Link href="#">Projetos</Link>
        </li>
        <li>
          <Link href="#">Clientes</Link>
        </li>
        <li>
          <Link href="#">Contato</Link>
        </li>
      </ul>
      <Button href="#" RightIcon={Arrow} className="outline">Começar Projeto</Button>

      <div className={styles.footer}>
        <Pin />
        <span>Rio Grande do Sul, Brasil</span>
      </div>
    </div>
  );

  function handleClick() {
    document.querySelector(`.${styles.menu}`).classList.toggle(styles.active);
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

  return (
    <>
      <MenuMobile />
      <div className={`container ${styles.header} ${floating ? styles.floating : ''}`}>
        <header>
          <nav>
            <Link href="/" style={{ color: 'rgb(var(--white))' }}>
              <Logo />
            </Link>
            <ul className="collapse d-none d-lg-flex" id="links">
              <li>
                <Link href="#">Sobre</Link>
              </li>
              <li>
                <Link href="#">Projetos</Link>
              </li>
              <li>
                <Link href="#">Detalhes</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ul>
            <div>
              <Link href="#" className="btn sm d-none d-lg-flex">Começar Projeto</Link>
              <button onClick={handleClick} type="button" className="btn d-flex d-lg-none">
                <Open />
              </button>
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
