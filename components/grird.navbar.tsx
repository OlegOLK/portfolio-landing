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
        <nav className={classNames("bg-white h-28 top-0 z-50 fixed w-screen",
            scrollPosition != 0 ? "shadow-lg" : '')}>
            <div className="flex justify-center items-center w-full h-full">
            
                <div className="grid grid-cols-12 gap-5 relative my-auto justify-items-start" style={{ width: "1120px" }}>

                    <a href="/" className="col-span-2 space-x-4 relative self-center">
                        <img
                            className="lg:inline-block h-full w-8 justify-self-start"
                            style={{ verticalAlign: "middle" }}
                            src="/main.svg"
                            alt="logo"
                        />
                        <span className="logo relative self-center" style={{ verticalAlign: "middle" }}>
                        {CONSTANTS.AppName}
                              <span 
                            style={{backgroundColor: "#592FFF",borderRadius: "2px", fontSize: "10px", lineHeight: "14px"}} 
                            className="text-white py-0.5 px-2 font-extralight absolute -right-9 -top-2">
                                beta
                            </span>
                        </span>
                    
                    </a>
                    <a href="/features" className="col-start-3 justify-self-center secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                    <a href="/pricing" className="secondary-menu justify-self-center cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                    <a href="/contacts" className="secondary-menu justify-self-center cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>
                    {/*col-start-9 w-full */}
                    <div className="col-start-9 col-span-1 self-center justify-self-end">
                        <LanguageSwitcher />
                    </div>

                    <div className="col-start-10 col-span-1 flex items-center h-full">
                        <a
                            href="/signin"
                            className="relative  hover:opacity-90 hover:scale-105 bg-none border-0  w-26 text-base font-semibold main-color">
                            <img src="/assets/test/user.svg" className=" h-full inline mr-2" width={14} height={16} aria-hidden="true" />
                            {t('Sign in')}
                        </a>

                    </div>
                    <a
                        href="/signup"
                        className="self-center col-span-2 ripple shadow-lg w-full py-3 text-center text-base font-semibold bg-main-color rounded-lg text-white ">
                        {t('Get Started')}
                    </a>
                </div>

            </div>
        </nav >
    )
}