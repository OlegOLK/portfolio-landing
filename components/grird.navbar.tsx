import { FingerPrintIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CONSTANTS } from './constants';
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from './language.switcher';
import Container from './container';

export default function GridNav() {
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
                <div className="grid grid-cols-12 gap-5 h-full mx-auto lg:mx-40 2xl:mx-72 my-auto justify-items-start">
                    <a href="/" className="col-span-2 space-x-4  self-center">
                        <img
                            className="lg:inline-block h-full w-8 justify-self-start"
                            style={{verticalAlign: "middle"}}
                            src="/main.svg"
                            alt="logo"
                        />
                        <span className="logo  self-center" style={{verticalAlign: "middle"}}>{CONSTANTS.AppName}</span>
                    </a>
                    <a href="/features" className="col-start-3 secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                    <a href="/pricing" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                    <a href="/contacts" className="secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>

                    <div className="col-start-8 col-span-1 self-center">
                        <LanguageSwitcher />
                    </div>

                    <div className="col-start-10 col-span-1 self-center relative">
                        <a
                            href="/signin"
                            className="relative hover:opacity-90 hover:scale-105 bg-none border-0  w-26 py-3 text-base font-semibold main-color">
                            <FingerPrintIcon className="absolute -left-6 inline h-5 w-5 mr-2" aria-hidden="true" />
                            {t('Sign in')}
                        </a>

                    </div>
                    <a
                        href="/signup"
                        className="self-center col-span-2 ripple shadow-lg w-full py-3 text-center text-base font-semibold bg-main-color rounded-lg text-white ">
                        {t('Get Started')}
                    </a>
                </div>



                {/*               
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
                </div> */}

            </div>
        </nav >
    )
}