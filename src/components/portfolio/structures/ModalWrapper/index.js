import React from 'react';
import Section from 'src/components/common/Section';
import Contact from 'src/components/home/Contact';
import ProjectPresentation from '../../ProjectPresentation';
import Header from '../Header';
import styles from './ModalWrapper.module.scss';

export default function ModalWrapper({ project }) {
  return (
    <div className={styles.wrapper}>
      <Header {...project} />
      <ProjectPresentation project={project} />
      <Section pt="120" pb="120" style={{ backgroundColor: 'rgb(var(--black))', borderRadius: '0 0 24px 24px', border: '1px solid rgb(var(--white), 0.3)' }}>
        <Contact noLinks />
      </Section>
    </div>
  )
}
