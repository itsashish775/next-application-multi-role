import { ReactNode } from 'react';
import PublicHeader from '../PublicHeader';
import Footer from '../PublicFooter';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white shadow'">
      {/* Shared Header */}
      <PublicHeader />

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* (Optional) Shared Footer */}
      <Footer/>
    </div>
  );
}
