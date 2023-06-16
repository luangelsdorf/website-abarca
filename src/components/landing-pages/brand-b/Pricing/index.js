import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import useMediaQuery from 'src/hooks/useMediaQuery';
import styles from './Pricing.module.scss';
import Overline from 'src/components/common/Overline';
import Button from 'src/components/common/Button';

export default function Pricing({ packages }) {

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
          start: '-148px 20%',
          end: '70% 20%',
          onEnter: e => e.trigger.classList.add(styles.active),
          onLeave: e => e.trigger.classList.remove(styles.active),
          onEnterBack: e => e.trigger.classList.add(styles.active),
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
                <div className="col-12 col-xl-4" key={`pack-${packIndex}`}>
                  <article className={`${styles.pack} ${packIndex === 1 && !isMobile ? styles.active : ''} ${pack.mostSold ? styles.mostSold : ''}`}
                    onMouseEnter={toggleStyle}
                    onMouseLeave={toggleStyle}
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
