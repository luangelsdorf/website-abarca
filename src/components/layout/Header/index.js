import React, { useEffect } from 'react';
import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import Logo from 'public/images/icons/favicon.svg';
import Link from 'next/link';
import MenuMobile from '../MenuMobile';
import Arrow from 'public/images/icons/Arrow.svg';

export default function Header({ floating = false, scroll, links }) {
  
  function handleClick(e) {
    e.currentTarget.classList.toggle('floatingHeader');
    document.querySelector('[data-menu]').classList.toggle('active');
    document.querySelector('#viewport').classList.toggle('active');
    document.documentElement.classList.toggle('no-scroll');
  }

  useEffect(() => {
    if (!scroll) return;
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('floatingHeader');
        } else {
          target.classList.remove('floatingHeader');
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
      <div className={`${styles.navigation}${floating ? ' ' + 'floatingHeader' : ''}${scroll ? ' ' + 'floatingHeader' : ''}`} data-navigation>

        <div className={styles.header}>
          <header>
            <nav>
              <Link id="logo" href="#">
                <Logo />
              </Link>
              <div>
                <Button className="sm d-none d-lg-flex" id="header-contact" href="/#contact" RightIcon={Arrow}>Iniciar Projeto</Button>
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
