import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Testimonials.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import TestimonialCard from 'src/components/common/TestimonialCard';

export default function Testimonials({ content }) {

  const data = [
    {
      quote: 'O processo deles realmente nos ajudou a trazer a alma do nosso negócio à tona, mas foi a execução que nos surpreendeu de verdade. Não poderíamos estar mais felizes!',
      client: 'Sara & Fabio',
      business: 'Bronzo',
    },
    {
      quote: 'O melhor time com quem já trabalhei, entendem muito sobre design e cuidaram de cada detalhe para que o resultado ficasse único como eu queria.',
      client: 'Kétlin Pacheco',
      business: 'Abarca',
    },
    {
      quote: 'Vocês são incríveis! A gente não pode mensurar a alegria dessa parceria, sabemos que estamos amparadas na caminhada pra chegar onde queremos. Obrigada!',
      client: 'Thabata & Denise',
      business: 'Casulo',
    },
    {
      quote: 'Eles entregaram um projeto que atendeu e superou nossas expectativas, de primeira. A marca que nos foi apresentada foi simples (da melhor forma possível) e capturou quem somos como empresa. Com certeza recomendo!',
      client: 'Jarrod Milford',
      business: 'Maptrack',
    },
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header data-reveal-parent={0.35}>
              <h2>
                <span>O seu sucesso </span>
                <br className="d-none d-lg-block" />
                <span>é o </span>
                <span className="h-sans">nosso sucesso</span>
              </h2>
              <p>
                Veja depoimentos de como a <span>Abarca</span> tem
                <br className="d-none d-lg-block" />
                ajudado empresas em todo mundo a se destacar
                <br className="d-none d-lg-block" />
                no mercado e se conectar com seus clientes.
              </p>
              <Button id="testimonials-contact" href="#contact" className="lg d-none d-lg-flex" RightIcon={Arrow} >Iniciar um Projeto</Button>
            </header>
          </div>

          <Swiper
            data-reveal-parent={0.1}
            slidesPerView="auto"
            spaceBetween={24}
            grabCursor
            centeredSlides
            loop
            speed={1500}
            onTransitionEnd={self => self.params.speed = 1500}
            onTouchStart={self => self.params.speed = 300}
            modules={[Autoplay]}
            autoplay={{
              delay: 300,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
          >
            {
              data.map((card, index) => (
                <SwiperSlide key={index} className="col-lg-5">
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
