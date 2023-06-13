import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ProjectCard from 'src/components/common/ProjectCard';
import PresentationModal from 'src/components/common/PresentationModal';
import ModalWrapper from 'src/components/portfolio/structures/ModalWrapper';
import { useRouter } from 'next/router';
import Overline from 'src/components/common/Overline';

export default function Projects() {
  const portfolio = [
    {
      client: 'Arca',
      slug: 'arca',
      segment: 'ONG de Proteção Animal',
      services: 'Website',
      local: 'Campo Bom | Brasil',
      cover: 'Cover-Arca.jpg',
      hover: 'Cover-Arca.jpg',
    },
    {
      client: 'Rodrigo Carvalho',
      slug: 'rodrigo-carvalho',
      segment: 'Barbearia',
      services: 'Website',
      local: 'Bristol | Inglaterra',
      cover: 'Cover-Rodrigo-Carvalho.png',
      hover: 'Cover-Rodrigo-Carvalho.png',
    },
    {
      client: 'Grana Capital',
      slug: 'grana',
      segment: 'Fintech',
      services: 'Website',
      local: 'Rio de Janeiro | Brasil',
      cover: 'Cover-Grana.jpg',
      hover: 'Cover-Grana.jpg',
    },
    {
      client: 'BRC',
      slug: 'brc',
      segment: 'Escritório de Advocacia',
      services: 'Website',
      local: 'São Paulo | Brasil',
      cover: 'Cover-BRC.jpg',
      hover: 'Cover-BRC.jpg',
    },
    {
      client: 'Certivale',
      slug: 'certivale',
      segment: 'Certificação Digital',
      services: 'Website',
      local: 'São Leopoldo | Brasil',
      cover: 'Certivale.jpg',
      hover: 'Certivale.jpg',
    },
    {
      client: 'Útil Facilities',
      slug: 'util',
      segment: 'Facilities',
      services: 'Website',
      local: 'Rio de Janeiro | Brasil',
      cover: 'Cover-Util-Facilities.jpg',
      hover: 'Cover-Util-Facilities.jpg',
    },
    {
      client: 'Pegada Neutra',
      slug: 'pegada-neutra',
      segment: 'Compensação Ambiental',
      services: 'Website',
      local: 'Novo Hamburgo | Brasil',
      cover: 'Cover-Pegada-Neutra.jpg',
      hover: 'Cover-Pegada-Neutra.jpg',
    },
    {
      client: 'NefroSinos',
      slug: 'nefrosinos',
      segment: 'Clínica de Nefrologia',
      services: 'Website',
      local: 'Novo Hamburgo | Brasil',
      cover: 'Cover-Nefrosinos.jpg',
      hover: 'Cover-Nefrosinos.jpg',
    },
    {
      client: 'RobTec',
      slug: 'robtec',
      segment: 'Tecnologia da Informação',
      services: 'Website',
      local: 'São Paulo | Brasil',
      cover: 'Cover-Robtec.jpg',
      hover: 'Cover-Robtec.jpg',
    },
    {
      client: 'Rossi & Dorneles',
      slug: 'rossi-dorneles',
      segment: 'Escritório de Advocacia',
      services: 'Website',
      local: 'Canoas | Brasil',
      cover: 'Cover-RD.jpg',
      hover: 'Cover-RD.jpg',
    },
  ];

  const router = useRouter();
  const topSwiper = useRef(null);

  useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0% 0% -60% 0%' });
    const targets = document.querySelectorAll(`.${styles.section}`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <section className={styles.section} id="slider">
      <div className="col-12">
        <header>
          <Overline lineLength={440} icon>
            <tspan className="d-none d-lg-inline">Projetos em Todo o Mundo</tspan>
            <tspan className="d-inline d-lg-none">Nossos Projetos</tspan>
          </Overline>
          <h2>
            <span>Conheça o que </span>
            <span>criamos por aqui</span>
          </h2>
        </header>
      </div>

      <div className="container">
        <div className={`row gy-4 ${styles.row1}`}>
          <Swiper
            ref={topSwiper}
            spaceBetween={24}
            slidesPerView={'auto'}
            modules={[Autoplay]}
            speed={1800}
            centeredSlides
            autoplay={{
              delay: 200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
          >
            {
              portfolio.map((project, index) => {
                return (
                  <SwiperSlide key={`top-row-${index}`} className="col-md-8 col-xl-6">
                    <ProjectCard modal {...project} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className={`row gy-4 flex-nowrap ${styles.row2}`}>
          <Swiper
            initialSlide={4}
            spaceBetween={24}
            slidesPerView={'auto'}
            modules={[Autoplay]}
            loop
            speed={1800}
            centeredSlides
            autoplay={{
              delay: 200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
          >
            {
              portfolio.map((project, index) => {
                return (
                  <SwiperSlide key={`bottom-row-${index}`} className="col-md-8 col-xl-6">
                    <ProjectCard modal {...project} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>

      <PresentationModal open={!!router.query.project} toggleOpen={() => router.push(router.pathname, router.asPath, { scroll: false })}>
        {router.query.project && <ModalWrapper project={portfolio.find(p => p.slug === router.query.project)} />}
      </PresentationModal>
    </section>
  )
}