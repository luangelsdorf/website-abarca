import styles from './PulseDot.module.scss';
import Dot from 'public/images/illustrations/PulseDot.svg';

export default function PulseDot({ content }) {
  return (
    <div className={styles.dot}>
      <div className={styles.wrapper}>
        <Dot />
      </div>
    </div>
  )
}
