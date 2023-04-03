import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pin from 'public/images/icons/Pin.svg';
import React from 'react';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ client, segment, services, local, cover, hover, slug, modal, ...rest }) {
  const router = useRouter();
  const referrer = router.route.split('/').at(-1);

  return (
    <div className={styles.project} {...rest}>
      <Link
        as={`/portfolio/${slug}`}
        href={modal ? `?project=${slug}` : `/portfolio/${slug}?referrer=${referrer}`}
        scroll={modal ? false : true}
      >
        <Image loading="eager" sizes="100vw" src={`/images/portfolio/${slug}/${hover}`} width="200" height="200" alt="" />
        <Image loading="eager" sizes="100vw" src={`/images/portfolio/${slug}/${cover}`} width="200" height="200" alt="" />
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
