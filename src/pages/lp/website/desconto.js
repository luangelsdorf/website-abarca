import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import DiscountAlert from 'src/components/common/DiscountAlert';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Timer from 'src/components/common/Timer';
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

  const packages = [
    {
      name: 'Básico',
      fromValue: '1.490',
      value: '1.090',
      hosting: '65',
      shortText: 'Website Onepage',
      longText: 'Apresente sua empresa em uma página única com visual moderno e dinâmico.',
      mostSold: false,
      included: [
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        { name: 'Otimização de SEO para Google' },
      ],
    },

    {
      name: 'Essencial',
      fromValue: '4.980',
      value: '1.980',
      hosting: '95',
      shortText: 'Website Pro',
      longText: 'Alcance o reconhecimento e fortaleça sua empresa com website completo.',
      mostSold: true,
      included: [
        {
          name: 'Múltiplas Páginas',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
        {
          name: 'Formulários e Integrações',
        },
      ],
    },

    {
      name: 'Comercial',
      fromValue: '6.980',
      value: '4.980',
      hosting: '145',
      shortText: 'E-commerce',
      longText: 'Venda produtos online através de uma plataforma feita para gerar resultados.',
      mostSold: false,
      included: [
        {
          name: 'Páginas de Produtos',
        },
        {
          name: 'Integração com Correios',
        },
        {
          name: 'Carrinho de Compras Avançado',
        },
        {
          name: 'Área do Cliente e Suporte',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
      ],
    },
  ];

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
        <DiscountAlert />

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
              <Timer />
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
          <Support discount />
        </Section>

        <Section id="pricing" pt="120 80" pb="120 80">
          <Pricing packages={packages} />
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
