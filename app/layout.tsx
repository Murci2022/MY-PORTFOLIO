'use client';
import '../styles/globals.css';
import NavBar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import Home from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='dark:bg-dblue bg-light'>
        <ThemeProvider
          enableSystem={true}
          attribute='class'
          defaultTheme='dark'
        >
          <NavBar />
          <Home />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
