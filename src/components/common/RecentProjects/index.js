import React from 'react';
import ProjectCard from '../ProjectCard';
import styles from './RecentProjects.module.scss';

export default function RecentProjects({ content }) {
  const petsvida = {
    client: 'PetsVida',
    segment: 'Pet Shop E-commerce',
    services: 'Identidade Visual',
    local: "São Paulo | Brasil",
  }

  const maptrack = {
    client: 'Maptrack',
    segment: 'Startup de Rastreamento',
    services: 'Identidade Visual',
    local: "Brisbane | Austrália",
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div>
          <p className="overline">Projetos Recentes</p>
        </div>
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <ProjectCard {...petsvida} />
          </div>
          <div className="col-12 col-lg-6">
            <ProjectCard {...maptrack} />
          </div>
        </div>
      </div>
    </div>
  )
}
