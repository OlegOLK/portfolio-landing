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
import Grid from '../components/grid';
import Link from 'next/link';

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
          />}
        >

          <div className="w-full lg:w-auto absolute bottom-0 lg:bottom-12 left-0 z-40">
            <FeaturesAnchor />
          </div>

          <div className="fixed bottom-12 right-12 z-50 hidden lg:block">
            <DisctordPopup />
          </div>

          <div className="absolute">
            <Grid fullScreen={true}>
              <div className="col-span-1 relative">
                <img src="./assets/patterns/main/BTC.png" className="w-auto absolute -left-4 h-auto mt-52" />
                <img src="./assets/patterns/main_left_pattern.png" height={500} width={500} style={{ top: "248px", height: "500px", width: "500px", left: "-550%", maxWidth: "500px" }} className="hidden lg:block z-40 relative" />
              </div>

              <div className="col-start-3 col-span-1 text-center relative">
                <figure className="rounded" style={{ marginTop: "173px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                <p className="font-extrabold" style={{ color: "#EFF0F3", marginTop: "53px", fontSize: "44px", lineHeight: "44px" }}>$</p>
                <img src="./assets/patterns/main/chart.png" style={{ marginTop: "285px" }} className="absolute -right-4 w-auto h-auto" />
              </div>
              <img src="./assets/patterns/main/plus.png" className="col-start-6 col-span-1 w-auto h-auto mt-32" />
              <div className="col-start-8 col-span-1 text-center relative">
                <img src="./assets/patterns/main/BTC.png" className="w-auto h-auto absolute -left-2" style={{ marginTop: "693px" }} />
              </div>
              <div className="col-start-11 col-span-1 relative">
                <img src="./assets/patterns/main/plus_big.png" className="absolute w-auto h-auto mt-48 -left-8" />
                <figure className="rounded" style={{ marginTop: "588px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
              </div>
              <div className="col-start-12 col-span-1 relative">
                <img src="./assets/patterns/main_right_pattern.png" height={532} width={491} style={{ height: "532px", width: "491px", left: "-20%", maxWidth: "491px" }} className="hidden lg:block top-24 z-40 relative" />
                <img src="./assets/patterns/main/symbol.png" className="w-auto h-auto absolute" style={{ marginTop: "-61px" }} />

              </div>

            </Grid>
          </div>
        </Hero>

      </Container>

      <div className="min-h-screen space-y-20 lg:space-y-10 mt-10">
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

                children={
                  feature.figures
                }
              />)
          })
        }

        {/* <ExchangesSection /> */}
        <FaqSection />
      </div>

      <div className="w-full bg-main-color h-full mt-12 lg:mt-24 py-24">
        <div className="flex flex-wrap justify-center items-center h-full w-full">
          <div className="w-full mx-4 lg:mx-0">
            <p className="text-white bottom-cta mt-10 lg:mt-32	text-center whitespace-pre-wrap">{t('mainCTA')}</p>
            <p className="text-white text-center mt-8 text-base	whitespace-pre-wrap">{t('secondaryCTA')}</p>


          </div>
          <Link href="/signup">
            <button
              className="mt-16 shadow-lg w-44 py-3 block text-base font-semibold bg-white rounded-lg ">
              {t('Start for free')}
            </button>
          </Link>
        </div>
      </div>
      <Footer />


    </>
  )
}
