import { FingerPrintIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CONSTANTS } from './constants';
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from './language.switcher';
import Container from './container';

export default function MyNav() {
    const { t } = useTranslation('home')
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={classNames("bg-white h-28 top-0 z-50 fixed w-full",
            scrollPosition != 0 ? "shadow-lg" : '')}>
            <div className="hidden lg:block h-full">
                <Container>
                    <div className="flex justify-start align-top space-x-12 items-center flex-1">
                        {/* <div className="flex justify-start align-top space-x-12 items-center"> */}
                        <a href="/" className="space-x-4 flex self-center">
                            <img
                                className="lg:inline-block h-8 w-auto"
                                src="/main.svg"
                                alt="logo"
                            />
                            <span className="logo">{CONSTANTS.AppName}</span>
                        </a>
                        {/* </div> */}

                        <a href="/features" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                        <a href="/pricing" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                        <a href="/contacts" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>
                    </div>

                    <div className="flex items-center justify-center">
                        <LanguageSwitcher />
                        <a
                            href="/signin"
                            className="hover:opacity-90 hover:scale-105 bg-none border-0  w-26 mr-12 py-3 block text-base font-semibold main-color">
                            <FingerPrintIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
                            {t('Sign in')}
                        </a>
                        <a
                            href="/signup"
                            className="ripple shadow-lg w-44 py-3 block text-center text-base font-semibold bg-main-color rounded-lg text-white ">
                            {t('Get Started')}
                        </a>
                    </div>

                    {/* <div className="flex items-center justify-start h-28">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">

                        <div className="flex-shrink-0 flex lg:items-center cursor-pointer">
                            <a href="/">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="/main.svg"
                                    alt="logo"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="/main.svg"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="hidden sm:block sm:ml-6 cursor-pointer">
                            <div className="flex items-center space-x-8 text-center">
                                <div className="relative md:mr-2 z-10">
                                    <a href="/" className="text-black logo z-10">{CONSTANTS.AppName}</a>
                                    <span style={{backgroundColor: "#515DF6"}} className="absolute top-0 -right-2
                                     inline-flex text-white items-center justify-center 
                                     px-2 py-1 text-xs font-semibold 
                                     leading-none z-0
                                     transform translate-x-3/4 -translate-y-1/2 rounded">beta</span>
                                </div>
                                <a href="/features" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                                <a href="/pricing" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                                <a href="/contacts" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <LanguageSwitcher />
                        <a
                            href="/signin"
                            className="hover:opacity-90 hover:scale-105 bg-none border-0  w-26 mr-12 py-3 block text-base font-semibold main-color">
                            <FingerPrintIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
                            {t('Sign in')}
                        </a>
                        <a
                            href="/signup"
                            className="ripple shadow-lg w-44 py-3 block text-center text-base font-semibold bg-main-color rounded-lg text-white ">
                            {t('Get Started')}
                        </a>
                    </div>

                </div> */}

                </Container>
            </div>
        </nav >
    )
}