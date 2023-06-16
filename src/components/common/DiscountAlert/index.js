import Button from '../Button';
import styles from './DiscountAlert.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Close from 'public/images/icons/close.svg';
import { useState } from 'react';
import PulseDot from 'src/components/illustrations/PulseDot';
import Timer from '../Timer';

export default function DiscountAlert({ content, timer }) {
  const [open, setOpen] = useState(true);

  if (open) {
    return (
      <dialog className={styles.alert} open>
        <div className={styles.timer}>
          <PulseDot />
          <p>
            <Timer />
          </p>
        </div>
        <span className="d-inline d-lg-none" style={{ color: 'rgb(var(--dark-cyan))' }}>|</span>
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
