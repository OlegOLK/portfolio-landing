import React from 'react';
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/grird.navbar';
import Container from '../components/container';
import Hero from '../components/hero/hero';
import HeroCta from '../components/hero/hero.cta.text';
import FeaturesAnchor from '../components/features.anchor';
import DisctordPopup from '../components/discord';
import VideSection from '../components/video.section';
import SectionWrapper from '../components/section/section';
import SectionText from '../components/section/section.text';
import ExchangesSection from '../components/section/exchanges.section';
import { Feature, FEATURES } from '../components/constants';
import FaqSection from '../components/section/faq.section';
import Footer from '../components/footer.grid';

function formatTextSection(feature: Feature, t) {
  return (
    <SectionText
      header={t(`feature${feature.prefix}header`)}
      subHeader={t(`feature${feature.prefix}subheader`)}>
      <img src={`/assets/cubes/feature_${feature.prefix}_cube.svg`} className="block" />
      {feature.cubePart}
    </SectionText>
  )
}

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <>

      <Container>

        <Hero
          fullScreen={true}
          text={<HeroCta
            header={t('MainHeader')}
            subHeader={t('MainSubheader')}
            mainCta={t('Get Started')}
            secondaryCta={t('Watch the video')}
          />}
          image={
            <div className="relative">
              <picture>  <img src="./assets/test/main_pattern.svg" className="w-auto h-auto z-40 relative" /></picture>
              <picture>  <img src="./assets/test/main_left_pattern.png" className="absolute z-0 -top-2 -left-4 w-auto h-auto" /></picture>
              <picture>  <img src="./assets/test/main_right_pattern.png" className="absolute z-0 -bottom-5 -right-4 w-auto h-auto" /></picture>
              <picture>  <img src="./assets/test/main_left_line.png" className="absolute -bottom-12 z-0 -left-20" height={150} width={295.5} /></picture>
              <picture>  <img src="./assets/test/main_right_line.png" className="absolute z-50 -top-12 right-9 w-auto h-auto" /></picture>
            </div>
          }
        >
          <div className="absolute bottom-12 left-0">
            <FeaturesAnchor />
          </div>

          <div className="fixed bottom-12 right-24 z-20 hidden lg:block">
            <DisctordPopup />
          </div>
        </Hero>

      </Container>

      <VideSection />

      <div className="min-h-screen space-y-40 mt-40">
        <div id="features"></div>
        {
          FEATURES.map((feature) => {
            return (
              <SectionWrapper
                key={"feature#" + feature.prefix}
                left={
                  feature.prefix % 2 == 1 ?
                    formatTextSection(feature, t) :
                    feature.img
                }
                right={
                  feature.prefix % 2 != 1 ?
                    formatTextSection(feature, t) :
                    feature.img
                }
                textRight={feature.prefix % 2 != 1}
              >
              </SectionWrapper>)
          })
        }

        <ExchangesSection />
        <FaqSection />
      </div>

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


    </>
  )
}
