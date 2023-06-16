import React, { useEffect, useRef } from 'react';
import styles from './FAQ.module.scss';
import Caret from 'public/images/icons/CaretDown.svg';
import Overline from '../Overline';

export default function FAQ({ questions }) {
  const faq = useRef(null);

  let firstHalf = questions.slice(0, Math.ceil(questions.length / 2));
  let secondHalf = questions.slice(Math.ceil(questions.length / 2));

  useEffect(() => {
    require('bootstrap/js/dist/collapse');

    let faqElement = faq.current;

    function handleCollapse(e) {
      if (e.type === 'shown.bs.collapse') {
        e.currentTarget.classList.add(styles.active);
      } else {
        e.currentTarget.classList.remove(styles.active);
      }
    }

    faqElement?.querySelectorAll('article').forEach(q => {
      q.addEventListener('shown.bs.collapse', handleCollapse);
      q.addEventListener('hidden.bs.collapse', handleCollapse);
    });

    return () => {
      faqElement?.querySelectorAll('article').forEach(q => {
        q.removeEventListener('shown.bs.collapse', handleCollapse);
        q.removeEventListener('hidden.bs.collapse', handleCollapse);
      });
    }
  }, []);

  const Question = ({ id, title, text }) => (
    <article className={styles.question} data-bs-toggle="collapse" data-bs-target={`#faq-collapse-${id}`}>
      <header>
        <h3>{title}</h3>
        <div>
          <Caret />
        </div>
      </header>
      <div className="collapse" id={`faq-collapse-${id}`}>
        <div className={styles.answer}>
          <p>{text}</p>
        </div>
      </div>
    </article>
  )

  return (
    <div className={styles.section}>
      <div className="col-12">
        <header>
          <Overline lineLength={336}>Criação de Websites</Overline>
          <h2>Perguntas Frequentes</h2>
        </header>
      </div>

      <div className="container">
        <div className="row" ref={faq}>
          <div className="col-12 col-lg-6" data-reveal-parent={0.2}>
            {
              firstHalf.map((question, index) => (
                <Question {...question} id={'first-' + index} key={index} />
              ))
            }
          </div>

          <div className="col-12 col-lg-6" data-reveal-parent={0.4}>
            {
              secondHalf.map((question, index) => (
                <Question {...question} id={'second-' + index} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
