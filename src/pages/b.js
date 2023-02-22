import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import Hero from 'src/components/landing-pages/brand-b/Hero';
import Projects from 'src/components/landing-pages/brand-b/Projects';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';

export default function B() {
  return (
    <>
      <Head>
        <title>Deixe sua Marca no Mundo | Br.Storm</title>
      </Head>

      <Section pt="184 128" pb="80" id="home">
        <Hero />
      </Section>

      <Section pt="96" pb="136" id="projects">
        <Projects />
      </Section>

      <Section id="testimonials" pt="160 80" pb="160 120">
        <Testimonials />
      </Section>
    </>
  )
}

B.floatingHeader = false;