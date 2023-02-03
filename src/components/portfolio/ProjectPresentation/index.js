import React from 'react';
import styles from './ProjectPresentation.module.scss';

export default function ProjectPresentation({ children, style }) {
  return (
    <article className={styles.presentation} style={style}>
      {
        children
      }
    </article>
  )
}
