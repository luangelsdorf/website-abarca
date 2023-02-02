import React from 'react';
import styles from './Picture.module.scss';

export default function Picture({ full, noMargin, children }) {
  return (
    <div className={`${styles.section}${full ? ' ' + styles.full : ''}${noMargin ? ' ' + styles.noMargin : ''}`}>
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
