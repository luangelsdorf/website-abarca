import Head from 'next/head';
import Header from 'src/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brand | Br.Storm</title>
        <meta name="description" content="A Br.Storm é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
      </Head>

      <Header />
      
      <main>
        Home
      </main>
    </>
  )
}
