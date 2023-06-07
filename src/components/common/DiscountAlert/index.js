import Button from '../Button';
import styles from './DiscountAlert.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Close from 'public/images/icons/close.svg';
import { useEffect, useState } from 'react';
import PulseDot from 'src/components/illustrations/PulseDot';

export default function DiscountAlert({ content }) {
  const [open, setOpen] = useState(true);
  /* const [timer, setTimer] = useState(60);

  useEffect(() => {
    const TimerInt = timer > 0 && setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(TimerInt)
    }
  }, [timer]); */

  if (open) {
    return (
      <dialog className={styles.alert} open>
        <div className={styles.timer}>
          <PulseDot />
          <p>0h 59min 28s</p>
        </div>
        <strong>Projetos com até <span>60% OFF</span></strong>
        <Button className="white" link RightIcon={Arrow}>Saiba mais</Button>
        <button className={styles.close} title="Fechar" onClick={() => setOpen(false)}>
          <Close />
        </button>
      </dialog>
    )
  } else {
    return null;
  }
}
