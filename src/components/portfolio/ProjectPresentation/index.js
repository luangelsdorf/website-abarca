import React from 'react';
import styles from './ProjectPresentation.module.scss';

export default function ProjectPresentation({ children, light, style }) {
  return (
    <article className={`${styles.presentation}${light ? ' ' + styles.light : ''}`} style={style}>
      {
        children
      }
    </article>
  )
}
