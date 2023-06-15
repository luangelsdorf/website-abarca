import Button from '../Button';
import styles from './DiscountAlert.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Close from 'public/images/icons/close.svg';
import { useEffect, useState } from 'react';
import PulseDot from 'src/components/illustrations/PulseDot';

export default function DiscountAlert({ content }) {
  const [open, setOpen] = useState(true);

  const now = new Date();
  const end = new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${getClosest(now.getHours())}:00`);
  const diff = new Date(end.getTime() - now.getTime());

  const [timer, setTimer] = useState(parseInt((diff.getTime() / 1000).toFixed()));
  const [timerString, setTimerString] = useState('0h 0min 0s');

  function getClosest(hour) {
    let targetHours = [0, 6, 12, 18];
    for (let h of targetHours) {
      if (h >= hour) {
        return h;
      }
    }
    return 0;
  }

  useEffect(() => {
    const timerId = timer > 0 && setInterval(() => {
      setTimer((time) => time - 1);
      setTimerString(`${diff.getUTCHours()}h ${diff.getUTCMinutes()}min ${diff.getUTCSeconds()}s`);
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  }, [timer]);

  if (open) {
    return (
      <dialog className={styles.alert} open>
        <div className={styles.timer}>
          <PulseDot />
          <p>{timerString}</p>
        </div>
        <span className="d-inline d-lg-none" style={{color: 'rgb(var(--dark-cyan))'}}>|</span>
        <strong><span className="d-none d-lg-inline">Projetos com</span> até <span>60% OFF</span></strong>
        <Button className="d-none d-lg-inline-flex white" link RightIcon={Arrow}>Saiba mais</Button>
        <button className={styles.close} title="Fechar" onClick={() => setOpen(false)}>
          <Close />
        </button>
      </dialog>
    )
  } else {
    return null;
  }
}
