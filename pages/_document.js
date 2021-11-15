import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID, HJ_TRACKING_ID, OPT_TRACKING_ID } from '../lib/gtag'



export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>          
          {/* Google tag manager */}
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KDKKWL')`}} />


          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />

        </Head>
        <body className="min-h-screen">
          {/* Google Tag Manager (noscript) */}
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KDKKWL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
