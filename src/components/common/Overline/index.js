import React, { useEffect, useRef } from 'react';
import styles from './Overline.module.scss';

export default function Overline({ lineLength, children }) {
  const text = useRef(null);

  useEffect(() => {
    let textWidth = text.current.getComputedTextLength() + 48;
    text.current.previousElementSibling.style.width = textWidth + 'px';
    text.current.parentElement.style.width = textWidth + 'px';
    text.current.parentElement.viewBox.baseVal.width = Math.ceil(textWidth) + 1;

    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0% 0% -25% 0%' });
    const targets = document.querySelectorAll('[data-overline');
    targets.forEach(el => observer.observe(el));
    
    return () => targets.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <style jsx>
        {`
          p::before {
            width: ${lineLength}px;
          }
        `}
      </style>

      <p className={styles.p} data-overline>
        <svg xmlns="http://www.w3.org/2000/svg" width="212" height="50" viewBox="0 0 212 50" fill="none">
          <rect x="1" y="1" height="48" rx="24" pathLength="1" />
          <text ref={text} x="25.4559" y="30.8182">{children}</text>
        </svg>
      </p>
    </>
  )
}
