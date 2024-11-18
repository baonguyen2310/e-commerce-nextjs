import './globals.css'
import { UserProvider } from '@/context/UserContext'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'E-commerce NextJs',
  description: 'E-commerce NextJs',
  openGraph: {
    title: 'E-commerce NextJs',
    description: 'E-commerce NextJs',
    url: 'http://localhost:3000',
    siteName: 'E-commerce NextJs',
    images: [
      {
        url: 'https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-boy-flat-icon-illustration-vector-png-image_12650662.png',
        width: 1200,
        height: 630,
        alt: 'og image',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className='root-layout'>
          <UserProvider>
            {children}
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
