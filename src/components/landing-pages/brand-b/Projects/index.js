import React from 'react';
import Pin from 'public/images/icons/Pin.svg';
import styles from './Projects.module.scss';
import ProjectCard from 'src/components/common/ProjectCard';

export default function Projects({ content }) {
  const data = [
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

  return (
    <div className={styles.section}>
      <div className="col-12">
        <header>
          <p className="overline">
            <Pin className="d-none d-lg-block" />
            <span className="d-none d-lg-inline">Projetos em Todo o Mundo</span>
            <span className="d-inline d-lg-none">Nossos Projetos</span>
          </p>
          <h2>Conheça <span className="h-serif">o que criamos</span> por aqui</h2>
        </header>
      </div>
      <div className="container">
        <div className="row gy-4">
          {
            data.map((project, index) => (
              <div className={`col-12 col-lg-6 ${styles.project}`} key={index}>
                <ProjectCard data-small {...project} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
