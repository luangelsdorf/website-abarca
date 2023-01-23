import Head from 'next/head';
import Section from 'src/components/common/Section';
import About from 'src/components/landing-pages/brand/About';
import Hero from 'src/components/landing-pages/brand/Hero';
import Projects from 'src/components/landing-pages/brand/Projects';

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

        <Section id="projects" pt="80" pt="120">
          <Projects />
        </Section>
        
        <Section id="contact" pt="120" pb="96">
          
        </Section>
      </main>
    </>
  )
}
