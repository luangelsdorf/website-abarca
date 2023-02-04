import React from 'react';
import RecentProjects from 'src/components/common/RecentProjects';
import Section from 'src/components/common/Section';
import Contact from 'src/components/home/Contact';
import styles from './ProjectFooter.module.scss';

export default function ProjectFooter({ content }) {
  return (
    <div className={styles.section}>
      <Section pt="120 96" pb="120 80">
        <RecentProjects />
      </Section>

      <Section pt="120 96" pb="96 120">
        <Contact noLinks />
      </Section>
    </div>
  )
}
