import Layout from '@/components/Layout/Layout'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import '@smastrom/react-rating/style.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}
