import React from 'react';
import styles from './Picture.module.scss';

export default function Picture({ full, children }) {
  return (
    <div className={styles.section}>
      {
        !full ? (
          <div className="container">
            {children}
          </div>
        ) : (
          <>
            {children}
          </>
        )
      }
    </div>
  )
}
