import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import useMediaQuery from 'src/hooks/useMediaQuery';
import styles from './Pricing.module.scss';
import Overline from 'src/components/common/Overline';
import Button from 'src/components/common/Button';

export default function Pricing({ content }) {
  const packages = [
    {
      name: 'Básico',
      value: '1.490',
      hosting: '65',
      shortText: 'Website Onepage',
      longText: 'Apresente sua empresa em uma página única com visual moderno e dinâmico.',
      mostSold: false,
      included: [
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        { name: 'Otimização de SEO para Google' },
      ],
    },

    {
      name: 'Essencial',
      fromValue: '4.890',
      value: '1.580',
      hosting: '95',
      shortText: 'Website Pro',
      longText: 'Alcance o reconhecimento e fortaleça sua empresa com website completo.',
      mostSold: true,
      included: [
        {
          name: 'Múltiplas Páginas',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
        {
          name: 'Formulários e Integrações',
        },
      ],
    },

    {
      name: 'Comercial',
      value: '4.890',
      hosting: '145',
      shortText: 'E-commerce',
      longText: 'Venda produtos online através de uma plataforma feita para gerar resultados.',
      mostSold: false,
      included: [
        {
          name: 'Páginas de Produtos',
        },
        {
          name: 'Integração com Correios',
        },
        {
          name: 'Carrinho de Compras Avançado',
        },
        {
          name: 'Área do Cliente e Suporte',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
      ],
    },
  ];

  const isMobile = useMediaQuery('lg');

  function toggleStyle() {
    document.querySelectorAll(`.${styles.pack}`)[1].classList.toggle(styles.active);
  }


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    mm.add('(max-width: 992px)', () => {
      gsap.utils.toArray(`.${styles.pack}`).forEach(pack => {
        ScrollTrigger.create({
          trigger: pack,
          start: 'top 20%',
          onEnter: e => e.trigger.classList.add(styles.active),
          onLeaveBack: e => e.trigger.classList.remove(styles.active),
        })
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className={styles.section}>
      <div className="col-12 col-lg-4 mx-lg-auto">
        <header>
          <Overline lineLength={336}>Nossos Pacotes de Serviços</Overline>
          <h2>
            <span>A melhor escolha</span>
            <br className="d-none d-lg-block" />
            <span className="h-sans"> para o seu negócio</span>
          </h2>
          {/* <p>Não importa o tamanho ou a fase do seu negócio, <strong>nós certamente podemos lhe ajudar</strong>, escolha o <br className="d-none d-lg-block" />pacote que lhe atende.</p> */}
        </header>
      </div>
      <div className="container">
        <div className="row align-items-center" data-reveal-parent={0.4}>
          {
            packages.map((pack, packIndex) => {
              return (
                <div className="col-12 col-lg-4" key={`pack-${packIndex}`}>
                  <article className={`${styles.pack} ${packIndex === 1 && !isMobile ? styles.active : ''} ${pack.mostSold ? styles.mostSold : ''}`}
                    onMouseEnter={isMobile ? null : toggleStyle}
                    onMouseLeave={isMobile ? null : toggleStyle}
                    
                  >
                    <header>
                      <h3>{pack.name}</h3>
                      <p>{pack.shortText}</p>
                    </header>
                    <div>
                      <p>{pack.longText}</p>
                      <ul>
                        {
                          pack.included.map((included, includedIndex) => (
                            <li key={includedIndex}>
                              <span>
                                {included.name}
                                {included.note && <span> ({included.note})</span>}
                              </span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <footer>
                      <div className={styles.price}>
                        <span>{'Investimento \nà partir de:'}</span>
                        <div>
                          {pack.fromValue && <s>De {pack.fromValue} por</s>}
                          <div>
                            <span>R$</span>
                            <span>{pack.value}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="btn outline">Contratar Agora</Button>
                      <small>
                        <div>Hospedagem e Suporte - R${pack.hosting}/mês</div>
                        <div>Para saber mais sobre nossos prazos e condições de pagamento entre em contato conosco.</div>
                      </small>
                    </footer>
                  </article>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
