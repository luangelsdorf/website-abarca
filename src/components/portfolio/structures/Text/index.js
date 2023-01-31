import React from 'react';
import styles from './Text.module.scss';

export default function Text({ children }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <p>
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
