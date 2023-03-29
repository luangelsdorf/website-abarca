import { Html, Head, Main, NextScript } from 'next/document'
import GoogleTagManager from 'src/components/scripts/GoogleTagManager'
import { isDev } from 'src/utils/env'

export default function Document() {
  return (
    <Html lang="pt" className={isDev ? undefined : 'no-scroll'}>
      <Head>
        {
          isDev ? null : (
            <>
              <GoogleTagManager />
            </>
          )
        }
        <link rel="shortcut icon" href="/images/icons/favicon.svg" />
        <meta property="og:title" content="Br.Storm Design" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Br.Storm" />
        <meta property="og:image" content="https://brstorm.design/images/preview.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
