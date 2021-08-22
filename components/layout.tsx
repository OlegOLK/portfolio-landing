import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { CONSTANTS } from './constants';
import { AnimateSharedLayout } from 'framer-motion';
import GridNav from './grird.navbar';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({ children }) {
    const router = useRouter();
    const { t } = useTranslation('home')

    return (
        <AnimateSharedLayout>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

                <title>{CONSTANTS.AppName} {router.pathname.substring(1, router.pathname.length)}</title>
                <link rel="icon" href="/main.ico" />
                <meta name="description" content={t('MainHeader')} />
                <meta property="og:title" content={t('MainSubheader')} />
                <meta property="og:description" content={t('MainHeader')} />
                <meta property="og:url" content="https://portfolio-landing-gamma.vercel.app/" />
                <meta property="og:type" content="website" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap" rel="stylesheet" />
            </Head>
            <GridNav />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                className="w-screen"
            >
                {children}
            </motion.main>
        </AnimateSharedLayout>
    )
}