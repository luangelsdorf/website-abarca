import Head from 'next/head';
import React, { useEffect } from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Pricing from 'src/components/landing-pages/brand-b/Pricing';
import Projects from 'src/components/landing-pages/brand-b/Projects';
import Contact from 'src/components/landing-pages/brand/Contact';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Features from 'src/components/landing-pages/web/idea/Features';
import Hero from 'src/components/landing-pages/web/idea/Hero';
import Mobile from 'src/components/landing-pages/web/idea/Mobile';
import Support from 'src/components/landing-pages/web/idea/Support';

export default function Idea() {
  return (
    <>
      <Head>
        <title>Title | Abarca</title>
        <meta property="og:title" content="Deixe sua Marca no Mundo | Abarca" />
        <meta name="description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
        <meta property="og:url" content="https://web.brstorm.design" />
      </Head>

      <main>
        <Section id="home" pb="0 80">
          <Hero />
        </Section>

        <Section id="mobile" pt="120 80" pb="120 80">
          <Mobile />
        </Section>

        <Section id="projects" pt="120 80" pb="120 80">
          <Projects web />
        </Section>

        <Section id="testimonials" pt="120 80" pb="120 80">
          <Testimonials />
        </Section>

        <Section id="features" pt="120 80" pb="120 80">
          <Features />
        </Section>

        <Section id="support" pt="120 80" pb="120 80">
          <Support />
        </Section>

        <Section id="pricing" pt="120 80" pb="146 80">
          <Pricing />
        </Section>

        <Section id="faq" pt="120 80" pb="200 80">
          <FAQ />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

    </>
  )
}

Idea.scrollHeader = true;