import { FingerPrintIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CONSTANTS } from './constants';
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from './language.switcher';

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
        <nav className={classNames("bg-white top-0 z-50 fixed w-screen lg:w-full",
            scrollPosition != 0 ? "shadow-lg" : '')}>
            <div className="container mx-auto ">
                <div className="relative flex items-center justify-between h-28">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
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
                                <div className="relative md:mr-24 z-10">
                                    <a href="/" className="text-black logo z-10">{CONSTANTS.AppName}</a>
                                    <span className="absolute top-1 -right-2
                                     inline-flex items-center justify-center 
                                     px-2 py-1 text-xs font-bold 
                                     leading-none z-0
                                     transform translate-x-1/2 -translate-y-1/2 
                                     bg-yellow-400 rounded-full">Beta</span>
                                </div>
                                <a href="/features" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                                <a href="/pricing" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                                <a href="/contacts" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>

                                <div className="absolute right-0 flex items-center justify-center">
                                    <LanguageSwitcher />
                                    <a
                                        href="/signin"
                                        className="hover:opacity-90 hover:scale-105 bg-none border-0  w-26 mr-12 py-3 block text-base font-semibold main-color">
                                        <FingerPrintIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
                                        {t('Sign in')}
                                    </a>
                                    <a
                                        href="/signup"
                                        className="ripple shadow-lg w-44 py-3 block text-base font-semibold bg-main-color rounded-lg text-white ">
                                        {t('Get Started')}
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}