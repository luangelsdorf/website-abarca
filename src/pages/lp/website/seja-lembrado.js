import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Section from 'src/components/common/Section';
import Hero from 'src/components/landing-pages/brand/Hero';
import Projects from 'src/components/landing-pages/web/common/Projects';
import styles from 'src/styles/pages/landingpages.module.scss';

export default function Remember() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Title | Abarca</title>
        <meta property="og:title" content="Deixe sua Marca no Mundo | Abarca" />
        <meta name="description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:image" content="https://brstorm.design/images/preview.jpg" />
        <meta property="og:url" content="https://web.brstorm.design" />
      </Head>

      <main>
        <Section>
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
            <h1>
              <span className="h-sans">Quem não é visto,</span>
              <br />
              <span>não é lembrado!</span>
            </h1>
          </Hero>
        </Section>

        <Section pt="160" pb="88">
          <Projects />
        </Section>
      </main>
    </div>
  )
}
