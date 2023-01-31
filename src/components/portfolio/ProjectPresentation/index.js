import React from 'react';
import styles from './ProjectPresentation.module.scss';

export default function ProjectPresentation({ children }) {
  return (
    <article className={styles.presentation}>
      {
        children
      }
    </article>
  )
}
