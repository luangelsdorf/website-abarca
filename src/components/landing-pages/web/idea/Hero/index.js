import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import Logo from 'public/images/logo.svg';
import HeroForm from 'src/components/common/HeroForm';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Hero() {
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    let newArr = array.slice();


    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex], newArr[currentIndex]];
    }

    return newArr;
  }

  const portfolio = [
    [
      {
        name: "certivale",
        size: "sm",
      },
      {
        name: "brc",
        size: "lg",
      },
      {
        name: "rodrigo-carvalho",
        size: "lg",
      },
      {
        name: "arca",
        size: "lg",
      },
      {
        name: "grana",
        size: "lg",
      },
      {
        name: "pegada-neutra",
        size: "sm",
      },
      {
        name: "util",
        size: "sm",
      },
      {
        name: "nefrosinos",
        size: "sm",
      },
      {
        name: "robtec",
        size: "lg",
      },
      {
        name: "rossi-dorneles",
        size: "lg",
      },
    ],
    [
      {
        name: "arca",
        size: "lg",
      },
      {
        name: "brc",
        size: "lg",
      },
      {
        name: "certivale",
        size: "sm",
      },
      {
        name: "rodrigo-carvalho",
        size: "lg",
      },
      {
        name: "rossi-dorneles",
        size: "lg",
      },
      {
        name: "pegada-neutra",
        size: "sm",
      },
      {
        name: "nefrosinos",
        size: "sm",
      },
      {
        name: "robtec",
        size: "lg",
      },
      {
        name: "util",
        size: "sm",
      },
      {
        name: "grana",
        size: "lg",
      },
    ],
    [
      {
        name: "pegada-neutra",
        size: "sm",
      },
      {
        name: "nefrosinos",
        size: "sm",
      },
      {
        name: "robtec",
        size: "lg",
      },
      {
        name: "rossi-dorneles",
        size: "lg",
      },
      {
        name: "brc",
        size: "lg",
      },
      {
        name: "certivale",
        size: "sm",
      },
      {
        name: "arca",
        size: "lg",
      },
      {
        name: "rodrigo-carvalho",
        size: "lg",
      },
      {
        name: "util",
        size: "sm",
      },
      {
        name: "grana",
        size: "lg",
      },
    ]
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        onComplete: () => {
          if (tl._dur <= 0) return;
          document.querySelectorAll(`.${styles.column}`).forEach(el => {
            el.classList.add(styles.animated);
          })
        }
      });

      tl.from('#logo2 > path', {
        yPercent: 150,
        ease: 'power2.out',
        autoAlpha: 0,
        stagger: 0.04,
      });

      tl.from('h1 > span', {
        yPercent: 100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'cubic-bezier(0.25, 0.1, 0.06, 0.99)'
      }, '-=0.25');
      
      tl.from('p', {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.35,
      });
      
      tl.from('p + div', {
        yPercent: 50,
        autoAlpha: 0,
        duration: 0.35,
      });

      tl.from(`.${styles.column}:nth-child(even)`, {
        y: (index, target) => ((-target.clientHeight + window.innerHeight) + 150),
        autoAlpha: 0,
        duration: 0.35,
        stagger: 0.25,
      });

      tl.from(`.${styles.column}:nth-child(odd)`, {
        y: -150,
        autoAlpha: 0,
        duration: 0.35,
        stagger: 0.25,
      });
    }, '#home');

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row flex-nowrap" style={{ position: 'relative' }}>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <Link href="#">
                <Logo id="logo2" />
              </Link>
              <h1>
                <span className="h-sans">Quem não é visto,</span>
                <br />
                <span>não é lembrado!</span>
              </h1>
              <p>{'Criamos websites marcantes feitos para gerar \nresultados para seu negócio.'} <strong>Solicite sua proposta!</strong></p>
              <HeroForm light short />
            </div>
          </div>
          {
            portfolio.map((column, index) => (
              <div className={`col-12 col-lg-3 ${styles.column}`} key={index}>
                {
                  column.map(project => (
                    <div className={styles[project.size]} key={project.name}>
                      <Image fill src={`/images/hero/${project.name}/cover.jpg`} alt="" />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}