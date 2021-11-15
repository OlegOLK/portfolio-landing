import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/layout';

const App = ({ Component, pageProps }) => {
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default App
