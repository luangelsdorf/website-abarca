import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Pricing from 'src/components/landing-pages/brand-b/Pricing';
import Contact from 'src/components/landing-pages/brand/Contact';
import Hero from 'src/components/landing-pages/brand/Hero';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Projects from 'src/components/landing-pages/web/common/Projects';
import Features from 'src/components/landing-pages/web/idea/Features';
import Mobile from 'src/components/landing-pages/web/idea/Mobile';
import Support from 'src/components/landing-pages/web/idea/Support';
import styles from 'src/styles/pages/landingpages.module.scss';

export default function Remember() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Title | Abarca</title>
        <meta property="og:title" content="Deixe sua Marca no Mundo | Abarca" />
        <meta name="description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
        <meta property="og:url" content="https://web.brstorm.design" />
      </Head>

      <main>
        <Section pt="72 80">
          <Hero
            web
            slot01={<Image data-project="rodrigo-carvalho" fill src="/images/hero/rodrigo-carvalho/cover.jpg" alt="" />}
            slot02={<Image data-project="grana" fill src="/images/hero/grana/cover.jpg" alt="" />}
            slot03={<Image data-project="rossi-dorneles" fill src="/images/hero/rossi-dorneles/cover.jpg" alt="" />}
            slot04={<Image data-project="certivale" fill src="/images/hero/certivale/cover.jpg" alt="" />}
            slot05={<Image data-project="nefrosinos" fill src="/images/hero/nefrosinos/cover.jpg" alt="" />}
            slot06={<Image data-project="arca" fill src="/images/hero/arca/cover.jpg" alt="" />}
            slot07={<Image data-project="pegada-neutra" fill src="/images/hero/pegada-neutra/cover.jpg" alt="" />}
            slot08={<Image data-project="brc" fill src="/images/hero/brc/cover.jpg" alt="" />}
            slot09={<Image data-project="robtec" fill src="/images/hero/robtec/cover.jpg" alt="" />}
            slot10={<Image data-project="util" fill src="/images/hero/util/cover.jpg" alt="" />}
          >
            <p>
              <span className="d-none d-lg-inline">Oferta por tempo limitado: </span>
              <span className="d-inline d-lg-none">Oferta termina em: </span>
              <span>0h 59min 28s</span>
            </p>
            <h1>
              <span>Seu website com </span>
              <br className="d-none d-sm-block" />
              <span className="h-sans">até 60% de desconto</span>
            </h1>
          </Hero>
        </Section>

        <Section id="mobile" pt="120 80" pb="120 80">
          <Mobile />
        </Section>

        <Section pt="120 80" pb="120 80">
          <Projects />
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
    </div>
  )
}
