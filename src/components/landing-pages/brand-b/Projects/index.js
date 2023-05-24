import React, { useEffect } from 'react';
import Pin from 'public/images/icons/Pin.svg';
import styles from './Projects.module.scss';
import ProjectCard from 'src/components/common/ProjectCard';
import PresentationModal from 'src/components/common/PresentationModal';
import ModalWrapper from 'src/components/portfolio/structures/ModalWrapper';
import { useRouter } from 'next/router';
import Overline from 'src/components/common/Overline';

export default function Projects({ web }) {
  let data;

  web ? data = [
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
  ] : data = [
    {
      client: 'Maptrack',
      segment: 'Startup de Rastreamento',
      services: 'Identidade Visual',
      local: "Brisbane | Austrália",
      cover: 'cover.jpg',
      hover: 'hover.jpg',
      slug: 'maptrack',
    },
    {
      client: 'Bronzo',
      segment: 'Restaurante Italiano',
      services: 'Website\nIdentidade Visual',
      local: "Londres | Inglaterra",
      cover: 'cover.png',
      hover: 'hover.jpg',
      slug: 'bronzo',
    },
    {
      client: 'Abarca',
      segment: 'Escritório de Relações Públicas',
      services: 'Identidade Visual',
      local: "Campo Bom | Brasil",
      cover: 'cover.png',
      hover: 'hover.png',
      slug: 'abarca',
    },
    {
      client: 'Casulo',
      segment: 'Centro Canino',
      services: 'Website\nIdentidade Visual',
      local: "Araricá | Brasil",
      cover: 'cover.jpg',
      hover: 'hover.jpg',
      slug: 'casulo',
    },
  ];

  const router = useRouter();

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
    <div className={styles.section}>
      <div className="col-12">
        <header>
          <Overline lineLength={440} icon>
            <tspan className="d-none d-lg-inline">Projetos em Todo o Mundo</tspan>
            <tspan className="d-inline d-lg-none">Nossos Projetos</tspan>
          </Overline>
          <h2><span>Conheça </span><span className="h-serif">o que criamos</span><span> por aqui</span></h2>
        </header>
      </div>
      <div className="container">
        <div className="row gy-4">
          {
            data.map((project, index) => (
              <div className={`col-12 col-lg-6 ${styles.project}`} key={index}>
                <ProjectCard modal data-small data-reveal {...project} />
              </div>
            ))
          }
        </div>
      </div>
      {
        web ? (
          <PresentationModal open={!!router.query.project} toggleOpen={() => router.push(router.pathname, router.asPath, { scroll: false })}>
            {router.query.project && <ModalWrapper project={data.find(p => p.slug === router.query.project)} />}
          </PresentationModal>
        ) : null
      }
    </div>
  )
}
