import React from 'react';
import styles from './DoublePicture.module.scss';

export default function DoublePicture({ children }) {
  return (
    <div className={styles.section}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className={styles.firstImage}>
            {children[0]}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.lastImage}>
            {children[1]}
          </div>
        </div>
      </div>
    </div>
  )
}
