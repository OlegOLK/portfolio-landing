import Head from 'next/head'
import Navbar from '../components/nav/nav';
import MyNav from '../components/nav/navbar';
import DisctordPopup from '../components/discord/discord'
import More from '../components/more/more'
import { ArrowRightIcon, FingerPrintIcon } from '@heroicons/react/outline'
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/solid'
import { Accordion } from '../components/accordion/accordion'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
      </Head>
      <MyNav></MyNav>
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> */}
      <main className="container mx-auto grid w-full h-screen grid-cols-2 gap-4 relative box-border mt-16">
        <DisctordPopup></DisctordPopup>
        <More></More>
        <div className="flex items-center -mt-24">
          <div>
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

        </div>
        <div className="flex items-center -mt-44">
          <img
            className="w-auto h-full"
            src="./test.svg">
          </img>


        </div>
      </main>



      <div className="h-screen z-40 relative">
        <div className="relative w-full video bg-gray-400 mt-16">
          <div className="absolute inset-y-1/2 play-button bg-red-500 flex items-center justify-center">
            <div className="playIcon -ml-1">
              <svg width="64" height="62" viewBox="0 0 64 62" fill="#7DC7A8" xmlns="http://www.w3.org/2000/svg">
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

      <div className="container mx-auto w-full grid  grid-cols-2 gap-x-4 gap-y-44	 relative z-0 mt-8">
        {/* Feature #1 r->l */}
        <div className="flex justify-items-start space-x-2 mt-20">
          <div >
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
        {/* Feature #2 l->r */}
        <div className="mt-16">
          <div className="flex justify-start items-start">
            <img
              className="w-auto -mt-12"
              src="./feature_2.png">
            </img>


          </div>
        </div>
        <div className="flex items-end relative">
          <div className="absolute side-figure top-0">
            <figure className="cube-vertical"></figure>
            <figure className="cube-vertical"></figure>
          </div>
          <div className="flex justify-items-start space-x-2">
            <div>
              <img src="cube_1.svg" className="inline" />

            </div>
            <div>


              <div className="feature-header">
                Get a multi currency  <br />
support
  </div>
              <div className="feature-subheader mt-4">
                Track your trades performance not only in USD and <br />
            BTC! - TradeFo calculates  profits in many <br />
            currencies. Choose any 2 base currencies you <br />
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

        {/* feature #3 r->l */}
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
                Specify the initial cost of each asset in your <br />
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

        {/* Feature #4 l->r */}
        <div className="mt-2">
          <div className="flex justify-start items-start">
            <img
              className="w-auto -mt-12"
              src="./feature_4.png">
            </img>


          </div>
        </div>
        <div className="flex items-center relative">
          <div className="absolute -bottom-12 -right-44">
            <figure className="cube inline-block mr-4 "></figure>
            <figure className="cube inline-block"></figure>
          </div>
          <div className="flex justify-items-start space-x-2">
            <div>
              <img src="cube_1.svg" className="inline" />

            </div>
            <div>


              <div className="feature-header">
                Share your trade   <br />
            performance
  </div>
              <div className="feature-subheader mt-4">
                You can generate a link to  your portfolios or <br />
            wallets statistics. You decide what to share!
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

        {/* Excanges */}
        <div className="col-span-2  text-center">
          <div className="flex justify-center items-center">
            <img src="cube_1.svg" className="inline" />
            <p className="inline feature-header ml-4 self-center">Connect to your favorite exchanges</p>

          </div>
          <div className="flex justify-between mt-16 space-x-20 mx-24">
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
            <ChevronRightIcon className="inline h-5 w-5 main-color self-center" aria-hidden="true" />
          </div>

        </div>



      </div>
      {/* FAQ */}
      <div className="w-full mt-40 container mx-auto flex space-x-32">

        <div className="flex items-start relative flex-none">
          <div className="absolute -bottom-12 -left-44">
            <figure className="cube-vertical"></figure>
            <figure className="cube-vertical"></figure>
          </div>
          <div className="flex justify-items-start space-x-2">
            <div>
              <img src="cube_1.svg" className="inline" />

            </div>
            <div>


              <div className="feature-header">
                FAQs
  </div>
              <div className="feature-subheader mt-4">
                You might be wondering
  </div>

            </div>
          </div>

        </div>
        <div className="flex-grow">
          <div className="flex flex-wrap space-y-6 justify-start items-start mx-32">

            <Accordion isToggled={true} header="How does the exchange integration works?" subHeader="You will be asked to provide  Read-Only API keys. Keys would be used for constant sync of your trades" > </Accordion>
            <Accordion header="What is the Portfolio?" subHeader="You will be asked to provide  Read-Only API keys. Keys would be used for constant sync of your trades" > </Accordion>
            <Accordion header="Can I edit trades that were imported?" subHeader="You will be asked to provide  Read-Only API keys. Keys would be used for constant sync of your trades" > </Accordion>
            <Accordion header="What is the cost base setting?" subHeader="You will be asked to provide  Read-Only API keys. Keys would be used for constant sync of your trades" > </Accordion>
          </div>
        </div>


      </div>

      <div className="w-full bg-main-color h-full mt-24 py-24">
        <div className="flex flex-wrap justify-center items-center h-full w-full">
          <div className="w-full">
            <p className="text-white bottom-cta mt-32				text-center">Start tracking your <br />crypto-trades for free now</p>
            <p className="text-white text-center mt-8 text-base	">Join TradeFo to track your positive/negative profits  <br />
and assets statistics according to portfolios and wallets.</p>


          </div>
          <button
            className="mt-16 shadow-lg w-44 py-3 block text-base font-semibold bg-white rounded-lg ">
            Start for free
                            </button></div>
      </div>


      <footer className="footer-bg w-full h-80 relative">
        <div className="flex justify-around items-baseline container mx-auto pt-20">
          <div>
            <img
              className="inline-block h-8 w-auto"
              src="/main.svg"
              alt="Workflow"
            />
            <p className="text-white text-2xl font-extrabold inline-block ml-4">TradeFo</p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 capitalize">PRODUCT</p>
            <p className="text-white text-sm">Features</p>
            <p className="text-white text-sm"> How it works </p>
            <p className="text-white text-sm">Pricing</p>
          </div>

          <div className="space-y-2">
          <p className="text-gray-400 capitalize">COMPANY</p>
            <p className="text-white text-sm">Our team</p>
            <p className="text-white text-sm"> Policies </p>
            <p className="text-white text-sm">Terms and conditions</p>
          </div>

          <div className="space-y-2">
          <p className="text-gray-400 capitalize">CONTACTS</p>
            <p className="text-white text-sm">info@form.com</p>
            <p className="text-white text-sm">882-587-3025 </p>
            <p className="text-white text-sm">6116 Willa River 610</p>
          </div>

          <div className="space-y-2 items-baseline">
          <p className="text-gray-400 capitalize">Mobile</p>
          <div>
            <div className="inline-block">
              <PlayIcon className="h-7 w-7 main-color"/>
            </div>
            <div className="inline-block text-white">
              <p className="text-xs">Get it on</p>
              <p>Google Play</p>
            </div>
            </div>

            <div>
            <div className="inline-block">
              <PlayIcon className="h-7 w-7 main-color"/>
            </div>
            <div className="inline-block text-white">
              <p className="text-xs">Download on the</p>
              <p>App Store</p>
            </div>
            </div>
          </div>

          <div className="space-y-2">
          <p className="text-gray-400 capitalize">Newsletter</p>
            <p className="text-white text-sm">Join our mailing list</p>
    <div className="flex flex-nowrap space-0">
      <input type="email" className="h-10 w-44 rounded-l-md px-2 inline-block" />
      <button
                                        className="inline-block text-xs w-10 rounded-r-md h-10 bg-none border-0 font-semibold bg-main-color">
                                        <ArrowRightIcon className="text-white inline h-5 w-5 mr-2" aria-hidden="true" />
                                </button>
     </div>
          </div>
        </div>

<div className="h-9 border-t-2 bottom-0 absolute w-full border-gray-500 items-center flex justify-center">
 <span className="text-gray-500 text-sm">©2021 - TradeFo  |   All rights reserved</span>
</div>
      </footer>
    </div>
  )
}
