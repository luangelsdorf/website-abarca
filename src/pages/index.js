import Head from 'next/head';
import Section from 'src/components/common/Section';
import About from 'src/components/landing-pages/brand/About';
import Hero from 'src/components/landing-pages/brand/Hero';
import Projects from 'src/components/landing-pages/brand/Projects';
import Footer from 'src/components/layout/Footer';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Contact from 'src/components/landing-pages/brand/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brand | Br.Storm</title>
      </Head>

      <main>
        <Section id="home">
          <Hero />
        </Section>

        <Section id="about" pt="200 80" pb="200 140">
          <About />
        </Section>

        <Section id="projects" pt="80 120" pb="120 80">
          <Projects />
        </Section>

        <Section id="testimonials" pt="160 80" pb="160 96">
          <Testimonials />
        </Section>

        <Section id="contact" pt="120 96" pb="160 96">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  )
}

Home.floatingHeader = false;