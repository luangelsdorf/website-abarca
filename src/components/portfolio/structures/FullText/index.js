import React from 'react';
import styles from './FullText.module.scss';

export default function FullText({ title, children }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className={styles.heading}>
              <h2>
                {
                  title.split('\\n').map((line, index) => (
                    <div key={index}>
                      <span>{line}</span>
                    </div>
                  ))
                }
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.text}>
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
