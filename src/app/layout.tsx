import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import clsx from 'clsx';
import { MainCard } from '@/components/MainCard';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moviola',
  description: 'Movie Tierlists',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col md:px-0 border">
          <MainCard>{children}</MainCard>
        </main>
      </body>
    </html>
  );
}
