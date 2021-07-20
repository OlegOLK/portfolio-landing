import Head from 'next/head'
import Nav from '../components/nav/navbar';
import MainSection from '../components/main.section/main.section'
import FaqSection from '../components/faq.section/faq.section';
import useTranslation from 'next-translate/useTranslation'
import Section from '../components/feature.section/section';
import { TextToImagePosition } from '../components/feature.section/feature.description/feature.description';
import { CubePosition } from '../components/feature.section/feature.abstract.cubes/cubes';
import VideoSection from './../components/video.section/video.section';
import React from 'react';
import Footer from '../components/footer/footer';

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
      </Head>
      <Nav></Nav>

      <MainSection />

      <VideoSection />

      <div id="features"></div>
      <div className="container mx-auto w-full grid  grid-cols-2 gap-x-8 gap-y-36 pl-12	 relative z-0 mt-8">
        {/* Feature #1 r->l */}
        <Section
          header={t('feature1header')}
          subHeader={t('feature1subheader')}
          imageSrc='./feature_1.png'
          textPosition={TextToImagePosition.Middle}
          ltr={true}
          cubeProps={({ position: CubePosition.None })}
        ></Section>

        {/* Feature #2 l->r */}
        <Section
          header={t('feature2header')}
          subHeader={t('feature2subheader')}
          imageSrc='./feature_2.png'
          textPosition={TextToImagePosition.Middle}
          ltr={false}
          cubeProps={({ position: CubePosition.Vertical })}
        ></Section>

        {/* feature #3 r->l */}
        <Section
          header={t('feature3header')}
          subHeader={t('feature3subheader')}
          imageSrc='./feature_3.svg'
          textPosition={TextToImagePosition.Middle}
          ltr={true}
          cubeProps={({ position: CubePosition.HorizontalLeft })}
        ></Section>

        {/* Feature #4 l->r */}
        <Section
          header={t('feature4header')}
          subHeader={t('feature4subheader')}
          imageSrc='./feature_4.png'
          textPosition={TextToImagePosition.Middle}
          ltr={false}
          cubeProps={({ position: CubePosition.HorizontalRigh })}
        ></Section>

        {/* Excanges */}
        <div className="col-span-2  text-center">
          <div className="flex justify-center items-center">
            <img src="cube_1.svg" className="inline" />
            <p className="inline feature-header ml-4 self-center">{t('connectExchange')}</p>

          </div>
          <div className="flex justify-between mt-20 space-x-20 mx-24">
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
            <img src="binance.png" />
          </div>

        </div>



      </div>

      {/* FAQ */}
      <FaqSection />

      <div className="w-full bg-main-color h-full mt-24 py-24">
        <div className="flex flex-wrap justify-center items-center h-full w-full">
          <div className="w-full">
            <p className="text-white bottom-cta mt-32	text-center whitespace-pre-wrap">{t('mainCTA')}</p>
            <p className="text-white text-center mt-8 text-base	whitespace-pre-wrap">{t('secondaryCTA')}</p>


          </div>
          <button
            className="mt-16 shadow-lg w-44 py-3 block text-base font-semibold bg-white rounded-lg ">
            {t('Start for free')}
          </button></div>
      </div>


      <Footer />
    </div>
  )
}
