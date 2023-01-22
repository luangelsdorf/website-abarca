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
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </main>
    </>
  )
}
