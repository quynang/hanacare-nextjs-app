import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import Footer from '@/components/layout/Footer';
import StackHeader from '@/components/StackHeader';
import { Open_Sans } from '@next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const opensans = Open_Sans({ subsets: ['latin'] });
import { initGTM, logPageView } from '../utils/tracking';

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const isWebViewMode = query?.is_webview === 'true';

  useEffect(() => {
    if (!window.dataLayer) {
      initGTM();
    }
    
    logPageView();
  }, []);

  return (
    <div className={opensans.className}>
      {!isWebViewMode && <StackHeader />}
      <Component {...pageProps} />
      {!isWebViewMode && <Footer />}
    </div>
  );
}

export default MyApp;
