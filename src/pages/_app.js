import 'bootstrap/dist/css/bootstrap-grid.css';
import '../styles/styles.scss';
import { Merriweather } from '@next/font/google';
import { Inter } from '@next/font/google';
import Header from 'src/components/layout/Header';
import useSmoothScroll from 'src/hooks/useSmoothScroll';

const merriweather = Merriweather({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  style: 'italic',
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const scroller = useSmoothScroll();

  return (
    <>
      <style jsx global>{`
        html {
          --merriweather: ${merriweather.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}
      </style>

      <Header />

      <div id="viewport">
        <div id="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
