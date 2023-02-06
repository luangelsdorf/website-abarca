import { Html, Head, Main, NextScript } from 'next/document'
import { isDev } from 'src/utils/env'

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {
          isDev ? null : (
            <>
              <GoogleTagManager />
            </>
          )
        }
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
