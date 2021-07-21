import { ArrowRightIcon } from "@heroicons/react/solid";
import { CONSTANTS } from './constants'
import React from "react";
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {
    const { t } = useTranslation('home')

    return (
        <footer className="footer-bg w-full h-80 relative bottom-0">
            <div className="flex justify-around items-baseline container mx-auto pt-20">
                <div >
                    <img
                        className="inline-block h-8 w-auto -mt-2"
                        src="/main.svg"
                        alt="cube"
                    />
                    <p className="text-white text-2xl font-extrabold inline-block ml-4">{CONSTANTS.AppName}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-400 capitalize">{t('PRODUCT')}</p>
                    <p className="text-white text-sm">{t('Features')}</p>
                    <p className="text-white text-sm"> {t('How it works')}</p>
                    <p className="text-white text-sm">{t('Pricing')}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-400 capitalize">{t('COMPANY')}</p>
                    <p className="text-white text-sm">{t('Our team')}</p>
                    <p className="text-white text-sm"> {t('Policies')} </p>
                    <p className="text-white text-sm">{t('Terms and conditions')}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-400 capitalize">{t('CONTACTS')}</p>
                    <p className="text-white text-sm">info@form.com</p>
                    <p className="text-white text-sm">882-587-3025 </p>
                    <p className="text-white text-sm">6116 Willa River 610</p>
                </div>

                <div className="space-y-2 items-baseline">
                    <p className="text-gray-400 capitalize">{t('Mobile')}</p>
                    <div>
                        <div className="inline-block">
                            <a href="#" className="cursor-pointer">
                                <img alt="google play" className="h-8 w-auto main-color" src="./google-play-badge.png" />
                            </a>
                        </div>
                        {/* <div className="inline-block text-white">
              <p className="text-xs">Get it on</p>
              <p>Google Play</p>
            </div> */}
                    </div>

                    <div>
                        <div className="inline-block">
                            <a href="#" className="cursor-pointer">
                                <img alt="google play" className="h-8 w-auto main-color" src="./Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
                            </a>
                            {/* <PlayIcon className="h-7 w-7 main-color"/> */}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-400 capitalize">{t('Newsletter')}</p>
                    {/* <p className="text-white text-sm">{t('Join our mailing list')}</p> */}
                    <div className="flex flex-wrap justify-start space-x-0 space-y-2">
                        <label htmlFor="sub-email" className="text-white flex-grow block w-full text-sm">{t('Join our mailing list')}</label>
                        <input type="email" id="sub-email" name="sub-email" className="h-10 w-44 rounded-l-md px-2 inline-block" />
                        <button aria-label="subscribe-mail"
                            className="inline-block text-xs w-10 rounded-r-md h-10 bg-none border-0 font-semibold bg-main-color">
                            <ArrowRightIcon className="text-white inline h-5 w-5 mr-2" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-9 border-t-2 bottom-0 absolute w-full border-gray-500 items-center flex justify-center">
                <span className="text-gray-500 text-sm">©{new Date().getFullYear()} - {CONSTANTS.AppName}  |   All rights reserved</span>
            </div>
        </footer>
    )
}