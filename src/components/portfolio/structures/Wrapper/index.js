import React from 'react';
import styles from './Wrapper.module.scss';

export default function Wrapper({ children, light, style }) {
  return (
    <article className={`${styles.presentation}${light ? ' ' + styles.light : ''}`} style={style}>
      {
        children
      }
    </article>
  )
}
