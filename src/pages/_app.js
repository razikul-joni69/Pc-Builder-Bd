import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import '@smastrom/react-rating/style.css'

export default function App({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>

}
