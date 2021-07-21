import Navbar from '../nav/navbar';
import Footer from '../footer/footer';
import React from 'react';
import Head from 'next/head';
import { Router, useRouter } from 'next/router'


export default function Layout({ children }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>IQube {router.pathname.substring(1, router.pathname.length)}</title>
                <link rel="icon" href="/main.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}