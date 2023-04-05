import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Logo from 'public/images/brstorm.svg';
import HeroForm from 'src/components/common/HeroForm';
import Image from 'next/image';

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
    {
      name: "arca",
      size: "lg",
    },
    {
      name: "rodrigo-carvalho",
      size: "lg",
    },
    {
      name: "grana",
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
      name: "util",
      size: "sm",
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
      name: "rossi-dorneles",
      size: "lg",
    },
  ];

  const shuffledPortfolio = useRef([shuffle(portfolio), shuffle(portfolio), shuffle(portfolio)]);

  useEffect(() => {
    document.querySelector('[data-navigation]').style.visibility = 'hidden';
  }, []);


  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row flex-nowrap" style={{position: 'relative'}}>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <Link href="#">
                <Logo />
              </Link>
              <h1>
                <span className="h-sans">Quem não é visto,</span>
                <br />
                <span>não é lembrado!</span>
              </h1>
              <p>{'Criamos websites marcantes feitos para gerar \nresultados para seu negócio.'} <strong>Solicite sua proposta!</strong></p>
              <HeroForm short />
            </div>
          </div>
          {
            shuffledPortfolio.current.map((column, index) => (
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
