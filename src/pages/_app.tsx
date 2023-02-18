import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import Footer from '@/components/layout/Footer';
import StackHeader from '@/components/StackHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StackHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
