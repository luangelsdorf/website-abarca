import React from 'react';
import styles from './WordsDiv.module.scss';

export default function WordsDiv({ words }) {
  const content = words.join(' • ') + ' • ';

  return (
    <div className={styles.div}>
      <span>{content}</span>
      <span>{content}</span>
    </div>
  )
}
