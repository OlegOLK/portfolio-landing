import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { AnimateSharedLayout } from 'framer-motion';
import Navbar from './navbar';

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
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                <title>iQube {router.pathname.substring(1, router.pathname.length)}</title>
                <link rel="icon" href="/main.ico" />
                <meta name="description" content={t('SocialSubheader')} />
                <meta property="og:title" content={t('SocialHeader')} />
                <meta property="og:description" content={t('SocialSubheader')} />
                <meta property="og:url" content="https://iQube.app/" />
                <meta property="og:image" content="/assets/featured_image.png" />
                <meta property="og:type" content="website" />
            </Head>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KDKKWL" height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe>

            <Navbar />
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