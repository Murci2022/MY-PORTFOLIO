"use client"
import '../styles/globals.css'
import NavBar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'
import Home from './page'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className='dark:bg-dblue bg-light' >

                <ThemeProvider enableSystem={true} attribute='class'>
                    <NavBar />
                    <Home />
                    <Footer />
                </ThemeProvider>




            </body>
        </html>
    )
}
