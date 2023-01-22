import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/icons/favicon.svg" />
        <meta name="description" content="A Br.Storm é um estúdio de design especializado na criação e perpetuação de marcas e produtos digitais." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
