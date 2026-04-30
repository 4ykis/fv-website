import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = { title: 'FanVox UA', description: 'Аніме переклад та озвучення' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body><Header /><main>{children}</main><Footer /></body></html>;
}
