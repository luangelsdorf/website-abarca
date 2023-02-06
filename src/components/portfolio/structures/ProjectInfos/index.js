import React from 'react';
import styles from './ProjectInfos.module.scss';

export default function ProjectInfos({ info, className }) {
  return (
    <div className={`${className} ${styles.info} infos`}>
      <div>
        <h2>Cliente</h2>
        <p>{info.client}</p>
      </div>
      <div>
        <h2>Segmento</h2>
        <p>{info.segment}</p>
      </div>
      <div>
        <h2>Serviços</h2>
        <ul>
          {
            info.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
