import React, { useEffect, useRef } from 'react';
import styles from './ArrowCircle.module.scss';
import ArrowRound from 'public/images/icons/ArrowRound.svg';
import gsap from 'gsap';
import Link from 'next/link';

export default function ArrowCircle({ id }) {
  const intervalRef = useRef(0);

  useEffect(() => {
    let interval;
    let currentDirecton = 'reverse';

    function drawButton(direction) {
      document.querySelector(`#${id} .white-circle`).animate({ strokeDashoffset: [1, 0] }, {
        duration: 2400,
        fill: 'both',
        easing: 'ease-in-out',
        direction: direction,
      });

      document.querySelector(`#${id} .big-arrow-shaft`).animate({ strokeDashoffset: [1, 0] }, {
        duration: 800,
        delay: 1600,
        fill: 'both',
        easing: 'ease-in-out',
        direction: direction,
      });

      document.querySelectorAll(`#${id} .big-arrow-tip`).forEach(el => {
        el.animate({ strokeDashoffset: [-1, 0] }, {
          duration: 800,
          delay: 2400,
          fill: 'both',
          easing: 'ease-in-out',
          direction: direction,
        }).finished.then(() => {

        });
      });
    }

    interval = setInterval(() => {
      currentDirecton = currentDirecton === 'normal' ? 'reverse' : 'normal';
      drawButton(currentDirecton);
    }, 4000);
    /* console.log(`set interval %c${interval}`, 'color:lime'); */

    return () => {
      /* console.log(`clear interval %c${interval}`, 'color:tomato'); */
      clearInterval(interval);
    }
  }, []);

  return (
    <ArrowRound id={id} className={styles.arrow} />
  )
}
