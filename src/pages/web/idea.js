import Head from 'next/head';
import React from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Projects from 'src/components/landing-pages/brand-b/Projects';
import Contact from 'src/components/landing-pages/brand/Contact';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Hero from 'src/components/landing-pages/web/idea/Hero';
import Mobile from 'src/components/landing-pages/web/idea/Mobile';
import Footer from 'src/components/layout/Footer';
import styles from 'src/styles/pages/landingpages.module.scss';

export default function Idea() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Title | Br.Storm</title>
        <meta property="og:title" content="Deixe sua Marca no Mundo | Br.Storm" />
        <meta name="description" content="A Br.Storm é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:description" content="A Br.Storm é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:image" content="https://brstorm.design/images/preview.jpg" />
        <meta property="og:url" content="https://web.brstorm.design" />
      </Head>

      <main>
        <Section>
          <Hero />
        </Section>

        <Section>
          <Mobile pt="96" pb="96" />
        </Section>

        <Section pt="96" pb="80">
          <Projects web />
        </Section>

        <Section pt="120" pb="120">
          <Testimonials />
        </Section>

        <Section id="faq" pt="120" pb="144">
          <FAQ />
        </Section>

        <Section id="contact" pt="120 96" pb="160 0">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
