import React from 'react';
import styles from './Spinner.module.scss';

export default function Spinner({...props}) {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
