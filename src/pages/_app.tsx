import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/common.css';
import Footer from '@/components/layout/Footer';
import StackHeader from '@/components/StackHeader';
import { Open_Sans } from '@next/font/google';
const opensans = Open_Sans({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={opensans.className}>
      <StackHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;
