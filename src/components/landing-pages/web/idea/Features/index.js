import React, { useEffect } from 'react';
import styles from './Features.module.scss';
import Computer from 'public/images/icons/features/Computer.svg'
import Infographic from 'public/images/icons/features/Infographic.svg'
import Pen from 'public/images/icons/features/Pen.svg'
import Physics from 'public/images/icons/features/Physics.svg'
import Research from 'public/images/icons/features/Research.svg'
import Security from 'public/images/icons/features/Security.svg'
import SocialMedia from 'public/images/icons/features/SocialMedia.svg'
import Target from 'public/images/icons/features/Target.svg'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import HeroForm from 'src/components/common/HeroForm';
import Overline from 'src/components/common/Overline';

export default function Features({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(`[data-trigger]`, {
        x: (index, target) => -(target.scrollWidth - target.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: `[data-trigger]`,
          start: 'top 24',
          end: self => `top ${-(self.trigger.scrollWidth - self.trigger.clientWidth)}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.create({
        trigger: `.${styles.section} header`,
        start: 'top 24',
        end: () => `top ${-(document.querySelector('[data-trigger]').scrollWidth - document.querySelector('[data-trigger]').clientWidth)}`,
        pin: true,
        pinSpacer: false,
      });
    });

    return () => ctx.revert();
  }, []);

  const data = [
    {
      icon: <Pen />,
      title: 'Personalização Completa',
      text: 'Deixe sua marca única com um site personalizado, criado especialmente para o seu negócio.',
    },
    {
      icon: <Infographic />,
      title: 'Estratégia',
      text: 'Avaliamos profundamente cada detalhe do seu negócio para criar um site que se alinhe à sua estratégia.',
    },
    {
      icon: <SocialMedia />,
      title: 'Conexão com \nseus Clientes',
      text: 'Integramos seu site com diversas plataformas, como Email Marketing, Redes Sociais e WhatsApp.',
    },
    {
      icon: <Research />,
      title: 'Monitore seu Desempenho',
      text: 'Acompanhe o resultado do seu site com o Google Analytics.',
    },
    {
      icon: <Physics />,
      title: 'Intuitivo e Veloz',
      text: 'Trabalhamos com tecnologia de ponta que garante maior velocidade e fluidez na navegação.',
    },
    {
      icon: <Target />,
      title: 'Melhores Resultados \nnas Buscas',
      text: 'Otimizamos seu site para que ele apareça nos primeiros resultados do Google e alcance mais clientes.',
    },
    {
      icon: <Computer />,
      title: 'Experiência \ndo Usuário',
      text: 'Nossos projetos são fáceis de navegar e utilizam as melhores práticas de usabilidade.',
    },
    {
      icon: <Security />,
      title: 'Segurança e Estabilidade',
      text: 'Seu site será protegido por tecnologia avançada e atualizado constantemente para evitar problemas e invasões.',
    },
  ];

  const Card = ({ icon, title, text }) => (
    <article className={styles.card}>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="col-12 p-0">
          <header>
            <Overline lineLength={390}>Recursos e Vantagens</Overline>
            <h2>
              <span className="h-sans">Tudo que seu <br className="d-block d-lg-none" />negócio </span>
              <br className="d-none d-lg-block" />
              <span>precisa <br className="d-block d-lg-none" />em um só lugar</span>
            </h2>
          </header>
        </div>
        <div className={styles.rowWrapper} data-trigger>
          <div className="row container flex-nowrap" data-reveal-parent={0.1}>
            {
              data.map((feature, index) => (
                <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4" key={index}>
                  <Card {...feature} />
                </div>
              ))
            }
            <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
              <div className={styles.formCard}>
                <h3>Vamos Iniciar <br className="d-block d-lg-none" /> seu Projeto</h3>
                <p>Preencha o formulário abaixo, retornaremos em breve.</p>
                <HeroForm light short />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
