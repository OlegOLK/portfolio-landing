import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Grid from '../components/gird'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Section from '../components/section'
import Faq from '../components/faq'
import Cta from '../components/cta'
import Footer from '../components/footer';
import Disctord from '../components/lib/discord.button'

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <>
      <div className="fixed lg:bottom-2 2xl:bottom-12 right-24 z-50 hidden lg:block">
        <Disctord />
      </div>

      <Main
        header={t('MainHeader')}
        subHeader={t('MainSubheader')} />

      <div id="features"></div>
      {/* Features */}
      <Section
        index={1}
        header={t(`feature1header`)}
        subHeader={t(`feature1subheader`)}
        ltr={true}
        imgSrc="./assets/features/security_first_approach.png"
        imgAlt="Security-First Approach image"
        cube={
          <div className="relative">
            <img height="42" width="42" src="./assets/features/security_first_approach_cube.png" />
          </div>
        }
        verticalCubes={
          <div className="absolute hidden lg:block w-full h-full">
            <img src="assets/patterns/vertical_3_cubes.png" width="160" height="500" className="absolute"
              style={{ bottom: "-250px", left: "-80px", height: "500px", width: "160px" }} />
          </div>
        } />

      <Section
        index={2}
        header={t(`feature2header`)}
        subHeader={t(`feature2subheader`)}
        ltr={false}
        imgSrc="./assets/features/multi_currency_support.png"
        imgAlt="Multi-Currency Support image"
        cube={
          <div className="relative">
            <figure className="absolute bg-color-main"
              style={{ height: "10px", width: "10px", top: "-10px", left: "-10px" }}>
            </figure>
            <img height="32" width="32" src="./assets/features/multi_currency_support_cube.png" />
          </div>
        } />


      <Section
        index={3}
        header={t(`feature3header`)}
        subHeader={t(`feature3subheader`)}
        ltr={true}
        imgSrc="./assets/features/every_statoshi_counts.png"
        imgAlt="Every Satoshi Counts image"
        cube={
          <div className="relative">
            <img height="42" width="32" src="./assets/features/every_statoshi_counts_cube.png" />
          </div>
        }
        verticalCubes={
          <div className="w-full h-full absolute hidden lg:block">
            <img src="assets/patterns/vertical_3_cube_right.png" width="160" height="500" className="absolute"
              style={{ bottom: "-250px", right: "-80px", height: "500px", width: "160px" }} />
          </div>
        } />


      <Section
        index={4}
        header={t(`feature4header`)}
        subHeader={t(`feature4subheader`)}
        ltr={false}
        imgSrc="/assets/features/data_driven.png"
        imgAlt="Data-Driven Decisions image"
        cube={
          <div className="relative">
            <img height="32" width="32" src="./assets/features/data_driven_cube.png" />
            <figure className="absolute bg-color-main"
              style={{ borderRadius: "1px", top: "32px", left: "-10px", height: "10px", width: "10px" }}>
            </figure>
          </div>
        } />


      <Section
        index={5}
        header={t(`feature5header`)}
        subHeader={t(`feature5subheader`)}
        ltr={true}
        imgSrc="./assets/features/share_portfolio.png"
        imgAlt="Share Your Portfolio image"
        cube={
          <img height="32" width="42" src="./assets/features/share_portfolio_cube.png" />
        }
        verticalCubes={
          <div className="absolute hidden lg:block w-full h-full">
            <img src="assets/patterns/vertical_3_cubes.png" width="160" height="500" className="absolute"
              style={{ bottom: "-250px", left: "-80px", height: "500px", width: "160px" }} />
          </div>
        } />

      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
