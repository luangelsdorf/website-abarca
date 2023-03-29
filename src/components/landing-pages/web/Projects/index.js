import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import ProjectCard from 'src/components/common/ProjectCard';

export default function Projects() {
  const portfolio = [
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'Maptrack.jpg',
      hover: 'Maptrack.jpg',
      slug: 'maptrack',
    },
  ];

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
    <section className={styles.section} id="slider">
      <div className={`row gy-4 ${styles.row1}`}>
        <Swiper
          ref={topSwiper}
          spaceBetween={24}
          slidesPerView={'auto'}
          modules={[Autoplay, FreeMode]}
          loop
          speed={1800}
          freeMode
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
                <SwiperSlide key={`top-row-${index}`}>
                  <ProjectCard {...project} />
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
          modules={[Autoplay, FreeMode]}
          loop
          speed={1800}
          freeMode
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
        >
          {
            portfolio.map((project, index) => {
              return (
                <SwiperSlide key={`bottom-row-${index}`}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}