import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'GorkhaBuds | Best wireless earbuds in Nepal',
  description: 'Gorkha Buds are designed to provide you with the ultimate audio experience, whether you are on the go or relaxing at home. Our earbuds are also incredibly durable, so you can trust that they will last for years to come. They are perfect for use during workouts, travel, or any other activity where you need high-quality sound.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
