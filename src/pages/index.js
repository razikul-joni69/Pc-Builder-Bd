import Contact from '@/components/Contact/Contact'
import Herosection from '@/components/Herosection/Herosection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Herosection />
      <Contact />

    </main>
  )
}
