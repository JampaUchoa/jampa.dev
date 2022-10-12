import { AppProps } from 'next/app'
import '../styles/index.scss'
import Layout from '../components/layout'
import Hotjar from '@hotjar/browser';
import ReactGA from "react-ga4";

Hotjar.init(3197895, 6);
ReactGA.initialize("G-W5SECKPKSP");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
