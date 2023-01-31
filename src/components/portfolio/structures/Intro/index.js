import React from 'react';
import ProjectInfos from '../ProjectInfos';
import styles from './Intro.module.scss';

export default function Intro({ info, children }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className={styles.text}>
              <p>
                {children}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 offset-lg-2">
            <ProjectInfos info={info} className="d-none d-lg-flex" />
          </div>
        </div>
      </div>
    </div>
  )
}
