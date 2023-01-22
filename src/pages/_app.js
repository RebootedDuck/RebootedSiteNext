import '@/styles/globals.css'
import { Roboto } from '@next/font/google'
import Layout from '../components/layout.js'

const roboto = Roboto({ 
  weight: '300',
  subsets: ['latin'],
 })

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </main>
  )
}
