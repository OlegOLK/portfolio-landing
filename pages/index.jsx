import Head from 'next/head'
import Navbar from './../components/nav/nav';
import MyNav from '../components/nav/navbar';
import DisctordPopup from '../components/discord/discord'
import More from '../components/more/more'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
      </Head>
      <MyNav></MyNav>
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> */}
      <div className="container mx-auto grid w-full h-full grid-cols-2 gap-4 relative">
        <DisctordPopup></DisctordPopup>
        <More></More>
        <div className="mt-28">
          <p className="text-6xl font-bold	leading-snug	">
            Your Crypto-trades <br />
            and portfolios <br />
            efficiency
            </p>

          <p className="mt-8">
            Track your investments based on the matematically perfect analytics. <br />
            Get a clear overview of your profits on multiple levels.
          </p>
          <div className="mt-16">
            <button
              className="inline relative shadow-lg w-44 py-3 text-base font-semibold bg-main-color rounded-lg text-white ">
              Get Started
                            </button>

            <button
              className="relative bg-none border-0  w-44 py-3 inline text-base font-semibold main-color">
              Watch the video
            </button>
          </div>
        </div>
        <div className="flex justify-end items-start">
          <img
            className="w-auto -mt-16"
            src="./test.svg">
          </img>


        </div>
      </div>
<div className="h-screen">
    <video controls className="w-full h-full mt-16">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.

    </video>
</div>

<div className="h-screen container mx-auto grid w-full grid-cols-2 gap-4 relative">
  <div>
  Enjoy automatic updates 
of your wallets
  </div>
<div className="flex justify-end items-start">
          <img
            className="w-auto -mt-16"
            src="./test.svg">
          </img>


        </div>
</div>
      {/* </main> */}

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  )
}
