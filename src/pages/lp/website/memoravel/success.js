import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from 'src/components/layout/Footer';
import CallToAction from 'src/components/success/CallToAction';

export default function SuccessMemorable() {
  useEffect(() => {
    document.querySelectorAll('#content, #viewport').forEach(el => el.classList.add('success'));
    return () => document.querySelectorAll('#content, #viewport').forEach(el => el.classList.remove('success'));
  }, []);

  return (
    <>
      <Head>
        <title>Muito Obrigado | Abarca</title>
      </Head>

      <main>
        <CallToAction />
      </main>

      <Footer fullHeight />
    </>
  )
}
