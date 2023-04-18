import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import useMediaQuery from 'src/hooks/useMediaQuery';
import styles from './Pricing.module.scss';
import Overline from 'src/components/common/Overline';

export default function Pricing({ content }) {
  const packages = [
    {
      "name": "Básico",
      "value": "R$980,00",
      "shortText": "Somente a Marca",
      "longText": "Tudo que é indispensável para dar início ao seu negócio. De vida à sua marca.",
      "investmentText": "Investimento a partir de:",
      "included": [
        {
          "name": "Desenho Exclusivo da Marca",
          "expand": true,
          "items": [
            "JPG de Alta Qualidade e PNG Transparentes",
            "Versões em Preto e Branco",
            "Arquivos Vetoriais para Impressão"
          ]
        },
        {
          "name": "Identidade Visual",
          "expand": true,
          "items": [
            "Paleta de Cores",
            "Tipografia",
            "Grafismos"
          ]
        }
      ]
    },
    {
      "name": "Essencial",
      "value": "R$1580,00",
      "shortText": "Marca & Materiais",
      "longText": "Tenha uma marca profissional e materiais iniciais que impulsionem seu negócio.",
      "investmentText": "Investimento a partir de:",
      "included": [
        {
          "name": "Desenho Exclusivo da Marca",
          "expand": true,
          "items": [
            "JPG de Alta Qualidade e PNG Transparentes",
            "Versões em Preto e Branco",
            "Arquivos Vetoriais para Impressão"
          ]
        },
        {
          "name": "Identidade Visual",
          "expand": true,
          "items": [
            "Paleta de Cores",
            "Tipografia",
            "Fotografia",
            "Grafismos"
          ]
        },
        {
          "name": "Redes Sociais",
          "expand": true,
          "items": [
            "Perfil e Capas",
            "Destaques",
            "Modelo de Post"
          ]
        },
        {
          "name": "Papelaria Básica",
          "expand": false,
          "items": [
            "Cartões de Visitas",
            "Timbrado",
            "Envelope"
          ]
        },
        {
          "name": "Manual de Uso da Marca",
          "expand": false,
          "items": [
            "Manual de uso da marca com todas as diretrizes visuais."
          ]
        }
      ]
    },
    {
      "name": "Crescer",
      "value": "Sob Consulta",
      "shortText": "Marca & Website",
      "longText": "Marca forte, presença online poderosa. O pacote ideal para o seu negócio crescer.",
      "investmentText": "Investimento:",
      "included": [
        {
          "name": "Website Institucional",
          "expand": true,
          "items": [
            "Página Inicial",
            "Sobre Nós",
            "Serviços / Produtos",
            "Contatos"
          ]
        },
        {
          "name": "Desenho Exclusivo da Marca",
          "expand": false,
          "items": [
            "JPG de Alta Qualidade e PNG Transparentes",
            "Versões em Preto e Branco",
            "Arquivos Vetoriais para Impressão"
          ]
        },
        {
          "name": "Identidade Visual",
          "expand": false,
          "items": [
            "Paleta de Cores",
            "Tipografia",
            "Grafismos"
          ]
        },
        {
          "name": "Redes Sociais",
          "expand": false,
          "items": [
            "Perfil",
            "Capa",
            "Destaques"
          ]
        },
        {
          "name": "Papelaria Básica",
          "expand": false,
          "items": [
            "Cartões de Visitas",
            "Timbrado",
            "Envelope"
          ]
        },
        {
          "name": "Manual de Uso da Marca",
          "expand": false,
          "items": [
            "Manual de uso da marca com todas as diretrizes visuais."
          ]
        }
      ]
    }
  ];

  const isMobile = useMediaQuery('lg');

  function toggleStyle() {
    document.querySelectorAll(`.${styles.pack}`)[1].classList.toggle(styles.active);
  }

  useEffect(() => {
    require('bootstrap/js/dist/collapse');
  }, []);


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
      <div className="col-12">
        <header>
          <Overline lineLength={336}>Nossos pacotes de Serviços</Overline>
          <h2>
            <span>A melhor escolha</span>
            <br className="d-none d-lg-block" />
            <span className="h-sans"> para o seu negócio</span>
          </h2>
          <p>Não importa o tamanho ou a fase do seu negócio, <strong>nós certamente podemos lhe ajudar</strong>, escolha o <br className="d-none d-lg-block" />pacote que lhe atende.</p>
        </header>
      </div>
      <div className="container">
        <div className="row" data-reveal-parent={0.4}>
          {/* loop dos pacotes */}
          {
            packages.map((pack, packIndex) => {
              return (
                <div className="col-12 col-lg-4" key={`pack-${packIndex}`}>
                  <div className={`${styles.pack} ${packIndex === 1 && !isMobile ? styles.active : ''}`}
                    onMouseEnter={isMobile ? null : toggleStyle}
                    onMouseLeave={isMobile ? null : toggleStyle}
                  >
                    <div className={styles.title}>
                      <h3>{pack.name}</h3>
                      <p>{pack.shortText}</p>
                    </div>
                    <div>
                      <p>{pack.longText}</p>
                      <ul>

                        {/* loop dos itens inclusos */}
                        {
                          pack.included.map((included, includedIndex) => {
                            return (
                              <li key={`inc-${includedIndex}`} data-bs-target={`#item-${includedIndex}-${packIndex}`} data-bs-toggle="collapse">
                                <p>{included.name}</p>
                                <div id={`item-${includedIndex}-${packIndex}`} className={`collapse ${included.expand ? 'show' : ''}`}>
                                  <ul>
                                    {/* loop dos sub-itens */}
                                    {
                                      included.items.map((item, index) => {
                                        return (
                                          <li key={`detail-${index}`}>
                                            {item}
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div>
                      <p>{pack.investmentText}</p>
                      <div>
                        {
                          packIndex === 1 ? (
                            <span>De&nbsp;<s>R$2280,00</s>&nbsp;por</span>
                          ) : null
                        }
                        <p className={styles.value}>{pack.value}</p>
                      </div>
                    </div>
                    <small>Observação: Para saber mais sobre nossos prazos e condições de pagamento entre em contato conosco.</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
