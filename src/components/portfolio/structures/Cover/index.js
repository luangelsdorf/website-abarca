import React from 'react';
import styles from './Cover.module.scss';
import Pin from 'public/images/icons/Pin.svg';

export default function Cover({ title, local, info, children }) {
  return (
    <div className={styles.section}>
      {children}

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 offset-lg-1">
            <div className={styles.content}>
              <div className={`d-none d-lg-flex ${styles.localTag}`}>
                <Pin />
                <span>{local}</span>
              </div>
              <h1>{title}</h1>
              <div className={`d-flex d-lg-none ${styles.info}`}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
