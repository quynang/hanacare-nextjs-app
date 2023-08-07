import Footer from '@/components/layout/Footer';
import FooterDark from '@/components/layout/FooterDark';
import StackHeader from '@/components/StackHeader';
import { useWebview } from '@/contexts/WebviewContext';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isWebview = useWebview();
  const { pathname } = useRouter();
  const useDarkFooter = ['/buoc-vui-song-khoe'].includes(pathname);
  return (
    <div>
      {!isWebview && <StackHeader />}
      {children}
      {!isWebview && useDarkFooter ? <FooterDark /> : <Footer />}
    </div>
  );
}
