import React from 'react';
import styles from './Header.module.scss';
import Pin from 'public/images/icons/Pin.svg';

export default function Header({ client = 'Project Name', segment = 'Segment', local = 'Local Tag' }) {
  return (
    <div className={styles.header}>
      <div>
        <h3>{client}</h3>
        <p>{segment}</p>
      </div>
      <div className={styles.localTag}>
        <span>{local}</span>
        <Pin />
      </div>
    </div>
  )
}
