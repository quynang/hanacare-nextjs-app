import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppearingOnScroll from '@/components/AppearingOnScroll';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <div id="anchor-header" />
      <AppearingOnScroll anchor='anchor-header'>
        {(isShow: any) => <Header className={`${isShow ? "mt-0" : '-mt-100'} header-sticky`} />}
      </AppearingOnScroll>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
