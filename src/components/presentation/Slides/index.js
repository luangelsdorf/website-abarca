import { useEffect } from 'react';
import styles from './Slides.module.scss';
import Head from 'next/head';

export default function Slides({ children }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.querySelector('[data-navigation]').style.display = 'none';
  }, []);

  return (
    <>
      <Head>
        <title>Apresentação | Abaraca</title>
      </Head>

      <div className={styles.slides}>
        {children}
      </div>
    </>
  )
}
