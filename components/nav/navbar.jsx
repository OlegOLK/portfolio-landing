import { FingerPrintIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CONSTANTS } from './../constants';
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from './../language.switcher/language.switcher';

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
        <nav className={classNames("bg-white top-0 z-50 fixed w-full", 
        scrollPosition != 0 ? "shadow-lg" : '')}>
            <div className="container mx-auto ">
                <div className="relative flex items-center  justify-between h-28">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
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
                            <div className="flex space-x-8 text-center">
                                <div className=" md:mr-24">
                                    <a href="/" className="text-black logo">{CONSTANTS.AppName}</a>
                                </div>
                                <a href="/features" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                                <a className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                                <a className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>

                                <div className="absolute right-0 flex items-center justify-center">
                                    <LanguageSwitcher/>
                                    <button
                                        className="relative hover:opacity-90 hover:scale-105 bg-none border-0  w-26 mr-12 py-3 block text-base font-semibold main-color">
                                        <FingerPrintIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
                                        {t('Sign in')}
                                </button>
                                    <button
                                        className="relative hover:opacity-90 hover:scale-105 shadow-lg w-44 py-3 block text-base font-semibold bg-main-color rounded-lg text-white ">
                                        {t('Get Started')}
                            </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}