import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import { Open_Sans } from '@next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { WebviewProvider } from '@/contexts/WebviewContext';
const opensans = Open_Sans({ subsets: ['latin'] });
import { initGTM, logPageView } from '../utils/tracking';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const [isWebview, setIsWebview] = useState(false);

  useEffect(() => {
    if (query.is_webview === 'true') {
      setIsWebview(query.is_webview === 'true');
    }
  }, [query.is_webview]);

  useEffect(() => {
    if (!window.dataLayer) {
      initGTM();
    }

    logPageView();
  }, []);

  return (
    <div className={opensans.className}>
      <WebviewProvider value={isWebview}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WebviewProvider>
    </div>
  );
}

export default MyApp;
