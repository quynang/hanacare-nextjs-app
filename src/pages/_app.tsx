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
import Head from 'next/head';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const [isWebview, setIsWebview] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K887RQV3');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K887RQV3"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <script
          id='ultra_embed'
          type='text/javascript'
          src='https://salekit.io/embed/goal?id=65586803f1435736f42a541d3a924595'
          async
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <WebviewProvider value={isWebview}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WebviewProvider>
        </Hydrate>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
