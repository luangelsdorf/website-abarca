import React from 'react';
import ProjectCard from '../ProjectCard';
import styles from './RecentProjects.module.scss';

export default function RecentProjects({ content }) {
  const casulo = {
    client: 'Casulo',
    segment: 'Centro Canino',
    services: 'Website\nIdentidade Visual',
    local: "Araricá | Brasil",
    cover: 'cover.jpg',
    hover: 'hover.jpg',
    slug: 'casulo',
  };

  const abarca = {
    client: 'Abarca',
    segment: 'Escritório de Relações Públicas',
    services: 'Identidade Visual',
    local: "Campo Bom | Brasil",
    cover: 'cover.png',
    hover: 'hover.png',
    slug: 'abarca',
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <div>
          <p className="overline">Projetos Recentes</p>
        </div>
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <ProjectCard {...casulo} />
          </div>
          <div className="col-12 col-lg-6">
            <ProjectCard {...abarca} />
          </div>
        </div>
      </div>
    </div>
  )
}
