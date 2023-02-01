import React from 'react';
import styles from './PictureAndText.module.scss';

export default function PictureAndText({ title, flipped, children }) {
  let [first, ...rest] = children;
  return (
    <div className={`${styles.section}${flipped ? ' ' + styles.flipped : ''}`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-6" /* style={{ order: flipped ? 1 : 0 }} */>
            <div className={styles.first}>
              {first}
            </div>
          </div>
          <div className="col-12 col-lg-5" /* style={{ order: flipped ? 0 : 1 }} */>
            <div className={styles.last}>
              <h2>
                {
                  title.split('\\n').map((line, index) => (
                    <span key={index}>
                      <span>{line}</span>
                      <br />
                    </span>
                  ))
                }
              </h2>
              <p>
                {rest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
