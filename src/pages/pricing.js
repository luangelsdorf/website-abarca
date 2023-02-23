import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import Contact from 'src/components/landing-pages/brand/Contact';
import Hero from 'src/components/landing-pages/brand-b/Hero';
import Pricing from 'src/components/landing-pages/brand-b/Pricing';
import Projects from 'src/components/landing-pages/brand-b/Projects';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Footer from 'src/components/layout/Footer';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Deixe sua Marca no Mundo | Br.Storm</title>
      </Head>

      <main>
        <Section pt="184 128" pb="80" id="home">
          <Hero />
        </Section>

        <Section pt="96" pb="136" id="projects">
          <Projects />
        </Section>

        <Section id="testimonials" pt="160 80" pb="160 120">
          <Testimonials />
        </Section>

        <Section id="pricing" pt="120" pb="96">
          <Pricing />
        </Section>

        <Section id="contact" pt="120 96" pb="160 0">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  )
}

PricingPage.floatingHeader = false;