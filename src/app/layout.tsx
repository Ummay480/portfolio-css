import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/customRootLayout.css'; // Import the custom layout-specific CSS
import '../styles/globals.css'; // Import the global styles (if not already included)

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container">
          <Navbar />
          {children}
          <div className="footer-wrapper">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
