import React, { useEffect, useRef, useState } from 'react';
import letters from './letters';
import styles from './Type.module.scss';

export default function Type({ single = false }) {
  const wrapper = useRef(null);
  let combination = Array(5).fill(0).map(() => getRandomInt(4));

  const word = ['S', 'T', 'O', 'R', 'M'];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function updateLetter(charToChange, nextVariantIndex) {
    const charElement = wrapper.current.querySelectorAll('[data-letter]')[charToChange];
    const currentVariant = charElement.querySelector(`.${styles.visible}`);
    const nextVariant = charElement.children[nextVariantIndex];

    currentVariant?.classList.remove(styles.visible);
    nextVariant?.classList.add(styles.visible);
  }

  useEffect(() => {
    let letterChangeTimeout;
    let prevIndex;

    function changeLetter() {
      let randomIndex = getRandomInt(combination.length);
      while (prevIndex === randomIndex) randomIndex = getRandomInt(combination.length);
      prevIndex = randomIndex;
      const charToChange = word[randomIndex];
      const letterVariantArray = letters[charToChange];
      const nextCombination = combination.map((item, i) => getRandomInt(letters[word[i]].length));

      if (single) {
        updateLetter(randomIndex, getRandomInt(letterVariantArray.length), true);
      } else {
        nextCombination.forEach((variant, index) => {
          updateLetter(index, variant, true);
        });
      }

      letterChangeTimeout = setTimeout(changeLetter, 50);
    }

    letterChangeTimeout = setTimeout(changeLetter, 50);

    wrapper.current.start = () => letterChangeTimeout = setTimeout(changeLetter, 50);
    wrapper.current.stop = () => clearTimeout(letterChangeTimeout);

    return () => clearTimeout(letterChangeTimeout);
  }, []);

  return (
    <div>
      <div className={styles.logotype} ref={wrapper}>
        {
          word.map((char, charIndex) => {
            return (
              <div id={`${charIndex}_${char}`} key={`char-${charIndex}`} className={styles.char} data-letter>
                {
                  letters[char].map((letter, index) => {
                    const LetterVariant = letter;
                    return (
                      <div key={`letter-${index}`} className={index === 0 ? styles.visible : ''}>
                        <LetterVariant />
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
