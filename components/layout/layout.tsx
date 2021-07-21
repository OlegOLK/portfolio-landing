import Navbar from '../nav/navbar';
import Footer from '../footer/footer';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}


export default function Layout({ children }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>IQube {router.pathname.substring(1, router.pathname.length)}</title>
                <link rel="icon" href="/main.ico" />
                <meta name="description" content="Your Crypto-trades and portfolios efficiency" />
                <meta property="og:title" content="Crypto portfolio insights and management." />
                <meta property="og:description" content="Your Crypto-trades and portfolios efficiency" />
                <meta property="og:url" content="https://portfolio-landing-gamma.vercel.app/" />
                <meta property="og:type" content="website" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                className="page-min-height"
            >
                {children}
            </motion.main>
            <Footer />
        </>
    )
}