import { MainSection } from '../components/main.section'
import FaqSection from '../components/faq.section';
import useTranslation from 'next-translate/useTranslation'
import Section from '../components/section';
import FeatureDescription, { TextToImagePosition } from '../components/feature.description';
import Cube, { CubePosition } from '../components/cubes';
import VideoSection from '../components/video.section';
import React from 'react';
import FeatureImage from '../components/feature.image';
import Footer from '../components/footer';
import DisctordPopup from '../components/discord';
import More from '../components/more';

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <div>
      <MainSection
        header={t('MainHeader')}
        subHeader={t('MainSubheader')}
        imageSrc="./main-feature.svg"
        mainCta={t('Get Started')}
        secondaryCta={t('Watch the video')}>
        <DisctordPopup></DisctordPopup>
        <More></More>
      </MainSection>

      <VideoSection />

      <div id="features"></div>
      <div className="container z-10 mx-0 lg:mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-36 pl-0 lg:pl-12	 relative mt-8">

        {/* Feature #1 r->l */}
        <Section>
          <FeatureDescription
            textPosition={TextToImagePosition.Middle}
            header={t('feature1header')}
            subHeader={t('feature1subheader')}
          />
          <FeatureImage alt={t('feature1header')} src={'./feature_1.svg'} />
        </Section>

        {/* Feature #2 l->r */}
        <Section>
          <FeatureImage alt={t('feature2header')} src={'./feature_2.svg'} />
          <FeatureDescription
            textPosition={TextToImagePosition.Middle}
            header={t('feature2header')}
            subHeader={t('feature2subheader')}
          >
            <Cube position={CubePosition.Vertical} />
          </FeatureDescription>
        </Section>

        {/* feature #3 r->l */}
        <Section>

          <FeatureDescription
            textPosition={TextToImagePosition.Middle}
            header={t('feature3header')}
            subHeader={t('feature3subheader')}
          >
            <Cube position={CubePosition.HorizontalLeft} />
          </FeatureDescription>
          <FeatureImage alt={t('feature3header')} src={'./feature_3.svg'} />
        </Section>

        {/* Feature #4 l->r */}
        <Section>
          <FeatureImage alt={t('feature4header')} src={'./feature_4.svg'} />
          <FeatureDescription
            textPosition={TextToImagePosition.Middle}
            header={t('feature4header')}
            subHeader={t('feature4subheader')}
          >
            <Cube position={CubePosition.HorizontalRigh} />
          </FeatureDescription>
        </Section>

        {/* Excanges */}
        <div className="col-span-2 text-left lg:text-center">
          <div className="flex justify-center items-center">
            <img alt="cube" src="cube_1.svg" className="inline" />
            <p className="inline feature-header ml-4 self-center">{t('connectExchange')}</p>

          </div>
          <div className="flex justify-between mt-20 space-x-20 mx-24">
            <img alt="binance" src="binance.png" />
            <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
            <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
            <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
            <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
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
