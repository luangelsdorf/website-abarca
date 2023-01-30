import React from 'react';
import Arrow from 'public/images/icons/Arrow.svg'
import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Logo from 'public/images/brstorm.svg';
import Link from 'next/link';
import Open from 'public/images/icons/Open.svg';
import Pin from 'public/images/icons/Pin.svg';

export default function Header({ content }) {

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
  }

  return (
    <>
      <MenuMobile />
      <div className={`container ${styles.header}`}>
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
              <button onClick={handleClick} type="button" className="btn d-flex d-lg-none"><Open /></button>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}
