import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from 'src/components/layout/Footer';
import CallToAction from 'src/components/success/CallToAction';

export default function Success() {
  useEffect(() => {
    document.querySelector('#content').classList.add('success');
    return () => document.querySelector('#content').classList.remove('success');
  }, []);

  return (
    <>
      <Head>
        <title>Muito Obrigado | Br.Storm</title>
      </Head>

      <main>
        <CallToAction />
      </main>

      <Footer fullHeight />
    </>
  )
}
