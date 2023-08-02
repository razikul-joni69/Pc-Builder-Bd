import Herosection from '@/components/Herosection/Herosection'
import Login from '@/components/Login/Login'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Herosection />
      <Login />

    </main>
  )
}
