import Head from 'next/head';
import Section from 'src/components/common/Section';
import About from 'src/components/landing-pages/brand/About';
import Contact from 'src/components/home/Contact';
import Hero from 'src/components/landing-pages/brand/Hero';
import Projects from 'src/components/landing-pages/brand/Projects';
import Footer from 'src/components/layout/Footer';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';

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

        <Section id="about" pt="200" pb="200">
          <About />
        </Section>

        <Section id="projects" pt="80" pb="120">
          <Projects />
        </Section>

        <Section id="testimonials" pt="160" pb="160">
          <Testimonials />
        </Section>
      </main>

      <Footer />
    </>
  )
}
