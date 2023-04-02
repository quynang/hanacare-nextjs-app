import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import Footer from '@/components/layout/Footer';
import StackHeader from '@/components/StackHeader';
import { Open_Sans } from '@next/font/google';
import { useRouter } from 'next/router';
const opensans = Open_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const isWebViewMode = query?.is_webview === 'true';

  return (
    <div className={opensans.className}>
      {!isWebViewMode && <StackHeader />}
      <Component {...pageProps} />
      {!isWebViewMode && <Footer />}
    </div>
  );
}

export default MyApp;
