import PublicLayout from '@/components/layouts/PublicLayout';
import { ReactNode } from 'react';

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
