import React, { useEffect } from 'react';
import styles from './ArrowCircle.module.scss';
import ArrowRound from 'public/images/icons/ArrowRound.svg';
import gsap from 'gsap';
import Link from 'next/link';

export default function ArrowCircle({ content }) {

  useEffect(() => {
    let timeout;
    let currentDirecton = 'reverse';

    function drawButton(direction) {
      document.querySelector('.white-circle').animate({ strokeDashoffset: [1, 0] }, {
        duration: 2400,
        fill: 'both',
        easing: 'ease-in-out',
        direction: direction,
      });

      document.querySelector('.big-arrow-shaft').animate({ strokeDashoffset: [1, 0] }, {
        duration: 800,
        delay: 1600,
        fill: 'both',
        easing: 'ease-in-out',
        direction: direction,
      });

      document.querySelectorAll('.big-arrow-tip').forEach(el => {
        el.animate({ strokeDashoffset: [-1, 0] }, {
          duration: 800,
          delay: 2400,
          fill: 'both',
          easing: 'ease-in-out',
          direction: direction,
        }).finished.then(() => timeout = setTimeout(() => {
          clearTimeout(timeout);
          drawButton(currentDirecton);
          currentDirecton = currentDirecton === 'normal' ? 'reverse' : 'normal';
        }, 800));
      });
    }

    drawButton();

    return () => {
      clearTimeout(timeout);
    };

  }, []);

  return (
    <ArrowRound className={styles.arrow} />
  )
}
