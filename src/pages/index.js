import Head from 'next/head';
import styles from '../styles/pages/landingpages.module.scss';
import Section from 'src/components/common/Section';
import About from 'src/components/landing-pages/brand/About';
import Hero from 'src/components/landing-pages/brand/Hero';
import Projects from 'src/components/landing-pages/brand/Projects';
import Footer from 'src/components/layout/Footer';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Contact from 'src/components/landing-pages/brand/Contact';
import Image from 'next/image';
import AnimatedLogo from 'src/components/common/AnimatedLogo';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Deixe sua Marca no Mundo | Abarca</title>
        <meta property="og:title" content="Deixe sua Marca no Mundo | Abarca" />
        <meta name="description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:description" content="A Abarca é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
        <meta property="og:url" content="https://brand.brstorm.design" />
      </Head>

      <main>
        <Section id="home">
          <Hero
            slot01={<Image priority data-project="casulo" fill src="/images/hero/casulo/Logos-Casulo.gif" alt="" />}
            slot02={<Image priority data-project="casulo" fill src="/images/hero/casulo/banner-hero.jpg" alt="" />}
            slot03={<Image priority data-project="abarca" fill src="/images/hero/abarca/stand.png" alt="" />}
            slot04={<video data-project="abarca" src="/images/hero/abarca/pattern.mp4" loop muted autoPlay />}
            slot05={<video data-project="pegada-neutra" src="/images/hero/pegada-neutra/logo-textures.mp4" loop muted autoPlay />}
            slot06={<Image priority data-project="pegada-neutra" fill src="/images/hero/pegada-neutra/woman.jpg" alt="" />}
            slot07={<video data-project="maptrack" src="/images/hero/maptrack/grid-animation.mp4" loop muted autoPlay />}
            slot08={<Image priority data-project="maptrack" fill src="/images/hero/maptrack/stationery.jpg" alt="" />}
            slot09={<Image priority data-project="bronzo" fill src="/images/hero/bronzo/packing-cropped.jpg" alt="" />}
            slot10={
              <div data-project="bronzo" style={{ backgroundColor: '#CE7A24', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatedLogo />
              </div>
            }>
            <h1>
              <span>Dê vida à sua marca</span>
              <br />
              <span className="h-sans d-none d-lg-inline">e torne-a inesquecível</span>
            </h1>
          </Hero>
        </Section>

        <Section id="about" pt="200 80" pb="200 140">
          <About />
        </Section>

        <Section id="projects" pt="0 120" pb="120 80">
          <Projects />
        </Section>

        <Section id="testimonials" pt="160 80" pb="160 120">
          <Testimonials />
        </Section>

        <Section id="contact" pt="120 96" pb="160 0" style={{ overflow: 'hidden' }}>
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  )
}

Home.floatingHeader = false;