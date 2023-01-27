import React, { useEffect } from 'react';
import styles from './Projects.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('.horizontal', {
        x: (index, target) => -(target.scrollWidth - innerWidth + 250),
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal',
          start: '-22% top',
          end: self => `top ${-(self.trigger.scrollWidth - innerWidth + 250)}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    })

    return () => ctx.revert();
  }, []);

  const data = [
    {
      client: 'PetsVida',
      segment: 'Pet Shop E-commerce',
      services: 'Identidade Visual',
      local: "São Paulo | Brasil",
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
    },
    {
      client: 'M2',
      segment: 'Empreendimentos',
      services: 'Identidade Visual',
      local: "Araricá | Brasil",
    },
    {
      client: 'Bronzo',
      segment: 'Restaurante Italiano',
      services: 'Website\nIdentidade Visual',
      local: "Londres | Inglaterra",
    },
    {
      client: 'Abarca',
      segment: 'Escritório de Relações Públicas',
      services: 'Identidade Visual',
      local: "Campo Bom | Brasil",
    },
    {
      client: 'Rivana',
      segment: 'E-commerce de Vestuário',
      services: 'Identidade Visual',
      local: "Doha | Catar",
    },
    {
      client: 'Casulo',
      segment: 'Centro Canino',
      services: 'Website\nIdentidade Visual',
      local: "Araricá | Brasil",
    },
  ]

  return (
    <div className={styles.section}>
      <header>
        <p className="overline">
          <Pin className="d-none d-lg-block" />
          <span className="d-none d-lg-inline">Projetos em Todo o Mundo</span>
          <span className="d-inline d-lg-none">Nossos Projetos</span>
        </p>
        <h2>Conheça <span className="h-serif">o que criamos</span> por aqui</h2>
      </header>
      <div className="container">
        <div className="row flex-nowrap horizontal">

          {
            data.map((project, index) => (
              <div className="col-12 col-lg-8" key={index}>
                <div className={styles.project}>
                  <Link href="#">
                    <Image sizes="100vw" src={`/images/portfolio/hover/${project.client}.jpg`} fill alt="" />
                    <Image sizes="100vw" src={`/images/portfolio/${project.client}.jpg`} fill alt="" />
                  </Link>
                  <div className={styles.infos}>
                    <div>
                      <h3>{project.client}</h3>
                      <p>{project.segment}</p>
                    </div>
                    <p>{project.services}</p>
                  </div>
                  <div className={styles.localTag}>
                    <div><span>{project.local}</span></div>
                    <Pin />
                  </div>
                </div>
              </div>
            ))
          }

          <div className={`col-12 col-lg-8 ${styles.cta}`}>
            <div className={styles.project}>
              <h3 className="sans-before">
                <span className="h-sans">Veja como podemos </span>
                <span>transformar sua marca</span>
              </h3>
              <Button RightIcon={Arrow}>Solicite uma Proposta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
