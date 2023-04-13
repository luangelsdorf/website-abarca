import React, { useEffect } from 'react';
import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Logo from 'public/images/brstorm.svg';
import Link from 'next/link';
import MenuMobile from '../MenuMobile';

export default function Header({ floating = false, scroll, links }) {
  
  function handleClick(e) {
    e.currentTarget.classList.toggle(styles.floating);
    document.querySelector('[data-menu]').classList.toggle('active');
    document.querySelector('#viewport').classList.toggle('active');
    document.documentElement.classList.toggle('no-scroll');
  }

  useEffect(() => {
    if (!scroll) return;
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add(styles.floating);
        } else {
          target.classList.remove(styles.floating);
        }
      })
    }

    const observer = new IntersectionObserver(callback);
    const sentinel = document.querySelector(`.${styles.sentinel}`);
    const target = document.querySelector(`.${styles.navigation}`);
    observer.observe(sentinel);

    return () => observer.unobserve(sentinel);
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
      {scroll && <div className={styles.sentinel} />}
      <div className={`${styles.navigation}${floating ? ' ' + styles.floating : ''}${scroll ? ' ' + styles.floating : ''}`} data-navigation>

        <div className={`container ${styles.header}`}>
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
                <Button className="sm d-none d-lg-flex" id="header-contact" href="/#contact">Começar Projeto</Button>
                <Button className={`${scroll ? 'd-none' : 'd-flex d-lg-none'}`} onClick={handleClick} type="button" floating btnElement />
              </div>
            </nav>
          </header>
        </div>

        <div className={`container ${styles.floatingWrapper} ${scroll ? 'd-none' : 'd-block'}`}>
          <Button btnElement onClick={handleClick} floating type="button" className={`${styles.floatingBtn}`} />
        </div>
      </div>
    </>
  )
}
