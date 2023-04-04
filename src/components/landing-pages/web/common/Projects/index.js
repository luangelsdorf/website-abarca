import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ProjectCard from 'src/components/common/ProjectCard';
import PresentationModal from 'src/components/common/PresentationModal';
import ModalWrapper from 'src/components/portfolio/structures/ModalWrapper';
import { useRouter } from 'next/router';

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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    let mobile = window.matchMedia('(max-width: 992px)').matches;
    setIsMobile(mobile);

    if (mobile) {
      topSwiper.current.swiper.destroy();
    }
  }, []);

  return (
    <section className={styles.section} id='slider'>
      <div className={`row gy-4 ${styles.row1}`}>
        <Swiper
          ref={topSwiper}
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
            reverseDirection: false,
          }}
        >
          {
            portfolio.map((project, index) => {
              return (
                <SwiperSlide key={`top-row-${index}`} className="col-12 col-lg-8">
                  <ProjectCard modal {...project} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div style={{ display: isMobile ? 'none' : 'flex' }} className={`row gy-4 flex-nowrap ${styles.row2}`}>
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
                <SwiperSlide key={`bottom-row-${index}`} className="col-12 col-lg-8">
                  <ProjectCard modal {...project} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <PresentationModal open={!!router.query.project} toggleOpen={() => router.push(router.asPath, undefined, { scroll: false })}>
        {router.query.project && <ModalWrapper project={portfolio.find(p => p.slug === router.query.project)} />}
      </PresentationModal>
    </section>
  )
}