import React from 'react';
import Button from '../Button';
import styles from './Modal.module.scss';

export default function Modal({ children, label, noButton, ...props }) {

  function handleClick(e) {
    e.target.previousElementSibling.showModal();
  }

  return (
    <>
      <dialog className={styles.dialog}>
        {
          children
        }
      </dialog>

      {
        !noButton && (
          <Button onClick={handleClick} btnElement {...props}>{label}</Button>
        )
      }
    </>
  )
}
