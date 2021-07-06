import Head from 'next/head'
import Navbar from './../components/nav/nav';
import MyNav from '../components/nav/navbar';
import DisctordPopup from '../components/discord/discord'
import More from '../components/more/more'
import { ArrowRightIcon, UserIcon, FingerPrintIcon } from '@heroicons/react/outline'

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
      <div className="h-screen z-40 relative">
        <div className="relative w-full video bg-gray-400 mt-32">
          <div className="absolute inset-y-1/2 play-button bg-red-500 flex items-center justify-center">
            <div className="playIcon -ml-1">
              <svg width="64" cheight="62" viewBox="0 0 64 62" fill="#7DC7A8" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1933 16.6405C19.1933 13.1764 22.9433 11.0113 25.9433 12.7434L58.9433 31.7959C61.9433 33.528 61.9433 37.8581 58.9433 39.5902L25.9433 58.6427C22.9433 60.3748 19.1933 58.2097 19.1933 54.7456L19.1933 16.6405Z" fill="#7DC7A8" stroke="#F3F3F3" />
              </svg>

            </div>
          </div>
        </div>
        {/* <video controls className="w-full h-full mt-16">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
        </video> */}
      </div>

      <div className="h-screen container mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-44	 relative z-0 mt-8">
        <div className="flex justify-items-start space-x-2 mt-20">
          <div>
            <img src="cube_1.svg" className="inline" />

          </div>
          <div>


            <div className="feature-header">
              Enjoy automatic updates <br />
          of your wallets
  </div>
            <div className="feature-subheader mt-4">
              Track your investments based on the <br />
  matematically perfect analytics. Get a clear <br />
   overview of your profits on multiple levels.
  </div>
            <div>
              <button
                className="relative font-main bg-none border-0 text-left  py-3 block text-base font-semibold main-color ml-0">

                Learn more
                                    <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-start">
          <img
            className="w-auto -mt-12"
            src="./feature_1.png">
          </img>


        </div>
        
        <div className="mt-16">
          <div className="flex justify-start items-start">
            <img
              className="w-auto -mt-12"
              src="./feature_2.png">
            </img>


          </div>
        </div>
        <div className="flex items-end">
        <div className="flex justify-items-start space-x-2">
          <div>
            <img src="cube_1.svg" className="inline" />

          </div>
          <div>


            <div className="feature-header">
            Get a multi currency  <br/>
support
  </div>
            <div className="feature-subheader mt-4">
            Track your trades performance not only in USD and <br/>
            BTC! - TradeFo calculates  profits in many <br/>
            currencies. Choose any 2 base currencies you <br/>
            want and switch between them on the fly! 
  </div>
            <div>
              <button
                className="relative font-main bg-none border-0 text-left  py-3 block text-base font-semibold main-color ml-0">

                Learn more
                                    <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        </div>


        <div className="flex items-center relative">
          <div className="absolute -bottom-12 -left-44">
          <figure className="cube inline-block mr-4 ">

</figure>
           <figure className="cube inline-block">

           </figure>
          </div>
        <div className="flex justify-items-start space-x-2">
          <div>
            <img src="cube_1.svg" className="inline" />

          </div>
          <div>


            <div className="feature-header">
            Set your cost basis
  </div>
            <div className="feature-subheader mt-4">
            Specify the initial cost of each asset in your <br/>
            Portfolio and enjoy precise overview.
  </div>
            <div>
              <button
                className="relative font-main bg-none border-0 text-left  py-3 block text-base font-semibold main-color ml-0">

                Learn more
                                    <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        </div>


        <div className="mt-16">
          <div className="flex justify-start items-start">
            <img
              className="w-auto -mt-12"
              src="./feature_3.png">
            </img>


          </div>
        </div>
      
      </div>

    </div>
  )
}
