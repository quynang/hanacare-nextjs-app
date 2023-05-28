import Footer from '@/components/layout/Footer';
import StackHeader from '@/components/StackHeader';
import { useWebview } from '@/contexts/WebviewContext';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isWebview = useWebview();
  return (
    <div>
      {!isWebview && <StackHeader />}
      {children}
      {!isWebview && <Footer />}
    </div>
  );
}
