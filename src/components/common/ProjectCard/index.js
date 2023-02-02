import Image from 'next/image';
import Link from 'next/link';
import Pin from 'public/images/icons/Pin.svg';
import React from 'react';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ client, segment, services, local }) {
  return (
    <div className={styles.project}>
      <Link href="#">
        <Image sizes="100vw" src={`/images/portfolio/hover/${client}.jpg`} width="200" height="200" alt="" />
        <Image sizes="100vw" src={`/images/portfolio/${client}.jpg`} width="200" height="200" alt="" />
      </Link>
      <div className={styles.infos}>
        <div>
          <h3>{client}</h3>
          <p>{segment}</p>
        </div>
        <p>{services}</p>
      </div>
      <div className={styles.localTag}>
        <div><span>{local}</span></div>
        <Pin />
      </div>
    </div>
  )
}
