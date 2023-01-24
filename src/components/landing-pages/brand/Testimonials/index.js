import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Testimonials.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import TestimonialCard from 'src/components/common/TestimonialCard';

export default function Testimonials({ content }) {

  const data = [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      client: 'Client Name',
      business: 'Business',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      client: 'Client Name',
      business: 'Business',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      client: 'Client Name',
      business: 'Business',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      client: 'Client Name',
      business: 'Business',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      client: 'Client Name',
      business: 'Business',
    },
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <h2 className="sans-after">{'O seu sucesso é o \nnosso sucesso'}</h2>
              <p>{'Veja depoimentos de como a Br.Storm tem \najudado empresas em todo mundo a se destacar \nno mercado e se conectar com seus clientes.'}</p>
              <Button className="lg" RightIcon={Arrow} >Iniciar um Projeto</Button>
            </header>
          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={24}
            grabCursor
            centeredSlides
            loop
            speed={1500}
            modules={[Autoplay, FreeMode]}
            freeMode
            autoplay={{
              delay: 200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {
              data.map((card, index) => (
                <SwiperSlide key={index} className="col-12 col-lg-5">
                  <TestimonialCard {...card} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
