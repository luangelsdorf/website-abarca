import Button from '../Button';
import styles from './DiscountAlert.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Close from 'public/images/icons/close.svg';
import { useEffect, useState } from 'react';
import PulseDot from 'src/components/illustrations/PulseDot';
import Timer from '../Timer';

export default function DiscountAlert() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    function callback(entries) {
      if (entries.length > 1) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector(`.${styles.alert}`)?.classList.remove('visible');
        } else {
          document.querySelector(`.${styles.alert}`)?.classList.add('visible');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0px' });
    const targets = document.querySelectorAll('#home h1, #contact footer');
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  if (open) {
    return (
      <dialog className={styles.alert} open onClick={e => (e.target.localName !== 'button' || e.target.localName !== 'a') ? window.location.hash = 'contact' : null}>
        <div className={styles.timer}>
          <PulseDot />
          <p>
            <Timer />
          </p>
        </div>
        <span className="d-inline d-lg-none" style={{ color: 'rgb(var(--dark-cyan))' }}>|</span>
        <strong><span className="d-none d-lg-inline">Projetos com</span> até <span>60% OFF</span></strong>
        <Button nativeLink className="d-none d-lg-inline-flex white" href="#faq" link RightIcon={Arrow}>Saiba mais</Button>
        <button className={styles.close} title="Fechar" onClick={() => setOpen(false)}>
          <Close />
        </button>
      </dialog>
    )
  } else {
    return null;
  }
}
