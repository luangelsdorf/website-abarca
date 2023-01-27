import React from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/brstorm.svg';
import Link from 'next/link';
import Open from 'public/images/icons/Open.svg';

export default function Header({ content }) {
  return (
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
            <button type="button" className="btn d-flex d-lg-none"><Open /></button>
          </div>
        </nav>
      </header>
    </div>
  )
}
