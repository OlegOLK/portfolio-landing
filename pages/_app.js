import 'tailwindcss/tailwind.css'
import './global.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Layout from '../components/layout';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default App
