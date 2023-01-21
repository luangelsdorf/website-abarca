import 'bootstrap/dist/css/bootstrap-grid.css';
import '../styles/styles.scss';
import { Merriweather } from '@next/font/google';
import { Inter } from '@next/font/google';

const merriweather = Merriweather({
  display: 'swap',
  subsets: ['latin'],
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --merriweather: ${merriweather.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}
      </style>

      <Component {...pageProps} />
    </>
  )
}
