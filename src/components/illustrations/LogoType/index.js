import { useEffect } from 'react';
import styles from './LogoType.module.scss';
import Logo from 'public/images/illustrations/Primary.svg';
import gsap from 'gsap';

export default function LogoType({ content }) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ delay: 2 });
      tl.to('.type path', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
      });

      tl.to('.shield', {
        autoAlpha: 1,
      });

      tl.to('.tagline', {
        y: 0,
        autoAlpha: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
    </div>
  )
}
