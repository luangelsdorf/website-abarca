import { Html, Head, Main, NextScript } from 'next/document'
import GoogleTagManager from 'src/components/scripts/GoogleTagManager'
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abarca" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
