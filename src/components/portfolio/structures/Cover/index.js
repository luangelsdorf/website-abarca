import React from 'react';
import styles from './Cover.module.scss';
import Pin from 'public/images/icons/Pin.svg';
import ProjectInfos from '../ProjectInfos';

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
              <ProjectInfos info={info} className="d-flex d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
