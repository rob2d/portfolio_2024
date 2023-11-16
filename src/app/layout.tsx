import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppTitle from './components/AppTitle';
import AppHeader from './components/AppHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rob's Portfolio",
  description: 'Insert a description here'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <AppTitle />
      </head>
      <body className={inter.className}>
        <AppHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
