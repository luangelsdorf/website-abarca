import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './PresentationModal.module.scss';
import Close from 'public/images/icons/close.svg';
import { useRouter } from 'next/router';

export default function PresentationModal({ children, open, toggleOpen }) {
  const [animation, setAnimation] = useState(null);
  const modalElement = useRef(null);

  /*** create and set animation ***/
  useEffect(() => {
    const ani = modalElement.current.animate(
      [
        {
          opacity: '0',
          transform: 'translateY(50%)',
        },
        {
          opacity: '1',
          transform: 'translateY(0%)',
        }
      ],
      {
        duration: 350,
        easing: 'ease',
        fill: 'forwards',
      })

    ani.onfinish = handleFinish;
    setAnimation(ani);
  }, []);

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') {
      animation.reverse();
    }
  }, [animation]);

  useEffect(() => {
    if (animation && animation.startTime) {
      if (open) {
        modalElement.current.style.display = 'flex';
        document.documentElement.classList.add('no-scroll');
        document.addEventListener('keydown', handleKeyDown, false);
        document.querySelector('[data-navigation]').classList.add('floatingHeader');
        animation.play();
      } else {
        document.removeEventListener('keydown', handleKeyDown, false);
      }
    }
  }, [open]);

  function handleFinish(playback) {
    if (playback.currentTime === 0) {
      toggleOpen();
      modalElement.current.scrollTop = 0;
      modalElement.current.style.display = 'none';
      document.querySelector('[data-navigation]').classList.remove('floatingHeader');
      playback.currentTarget.playbackRate = 1;
      document.documentElement.classList.remove('no-scroll');
    }
  }

  return (
    <div ref={modalElement} className={styles.modal} role="dialog">
      <div className={styles.button} onClick={() => animation.reverse()}>
        <Close />
      </div>

      <div className={styles.wrapper} style={{ marginTop: '-16px' }}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>

    </div>
  )
}