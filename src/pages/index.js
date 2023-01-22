import Head from 'next/head';
import Hero from 'src/components/landing-pages/brand/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brand | Br.Storm</title>
      </Head>

      <main>
        <Hero />
      </main>
    </>
  )
}
