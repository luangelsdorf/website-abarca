import { useEffect } from 'react';
import styles from './CertivaleShield.module.scss';
import Shield from 'public/images/illustrations/Shield.svg';

export default function CertivaleShield({ content }) {

  useEffect(() => {
    document.querySelector('[data-navigation]').style.display = 'none';
    document.body.style.backgroundColor = 'white';
  }, []);

  return (
    <div className={styles.wrapper}>
      <Shield className={styles.shield} />
    </div>
  )
}
