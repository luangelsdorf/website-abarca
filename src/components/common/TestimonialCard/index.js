import React from 'react';
import styles from './TestimonialCard.module.scss';
import Quote from 'public/images/icons/Quote.svg';

export default function TestimonialCard({ quote, client, business }) {
  return (
    <article className={styles.card}>
      <Quote />
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>
          <p>{client}</p>
          <p>{business}</p>
        </figcaption>
      </figure>
    </article>
  )
}
