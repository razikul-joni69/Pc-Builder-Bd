import Contact from '@/components/Contact/Contact'
import Herosection from '@/components/Herosection/Herosection'
import ProductCard from '@/components/Products/ProductCard'
import ProductsCategoryCard from '@/components/Products/ProductsCategoryCard'
import Title from '@/components/Title/Title'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ data }) => {
  const processor = data?.processors[0]
  const motherboard = data?.motherboards[0]
  const ram = data?.rams[0]
  const powerSupplie = data?.powerSupplies[0]
  const monitor = data?.monitors[0]
  const storageDevices = data?.storageDevices[0]
  const accessories = data?.accessories[0]

  const featuredProducts = [processor, motherboard, ram, powerSupplie, monitor, storageDevices]
  const featuredCategorys = [processor, motherboard, ram, powerSupplie, monitor, accessories]

  return (
    <main
      className={`${inter.className}`}
    >
      <Herosection />
      <div className='pt-5'>
        <Title title="Featured Products" subTitle="See Our Featured Products" />
      </div>
      <ProductCard products={featuredProducts} />
      <div className='pt-10'>
        <Title title="Featured Categories" subTitle="Our Featured products categories" />
      </div>
      <ProductsCategoryCard featuredCategorys={featuredCategorys} />
      <div className='pt-10'>
        <Title title="Contact Us" subTitle="Contact with Us. Or come to our office." />
      </div>
      <Contact />
    </main>
  )
}

export default Home

export const getStaticProps = async (ctx) => {

  const res = await fetch(`${process.env.BASE_URL}/api/products`)
  const data = await res.json()

  return {
    props: {
      data: data?.data
    }
  }
}

