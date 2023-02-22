import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import Hero from 'src/components/landing-pages/brand-b/Hero';

export default function B() {
  return (
    <>
      <Head>
        <title>Deixe sua Marca no Mundo | Br.Storm</title>
      </Head>

      <Section pt="184 128" id="home">
        <Hero />
      </Section>
    </>
  )
}

B.floatingHeader = false;