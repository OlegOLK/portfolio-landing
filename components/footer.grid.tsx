import { ArrowRightIcon } from "@heroicons/react/solid";
import { CONSTANTS } from './constants'
import React from "react";
import useTranslation from 'next-translate/useTranslation'
import Grid from "./grid";

export default function GridFooter() {
    const { t } = useTranslation('home')

    return (
        <footer className="footer-bg relative w-full h-full lg:h-80 pb-12 lg:pb-0  bottom-0 flex justify-center">
            <div className="mt-14">
                <Grid>
                    {/* <div className="flex flex-col col-span-12 lg:flex-row flex-wrap justify-center lg:justify-between items-baseline pt-20"> */}
                    <a href="/" className="col-span-2 space-x-4 relative self-start text-white">
                        <img
                            className="lg:inline-block h-full w-8 justify-self-start"
                            style={{ verticalAlign: "middle" }}
                            src="/main.svg"
                            alt="logo"
                        />
                        <span className="logo relative self-center" style={{ verticalAlign: "middle" }}>
                            {CONSTANTS.AppName}
                            <span
                                style={{ backgroundColor: "#592FFF", borderRadius: "2px", fontSize: "10px", lineHeight: "14px" }}
                                className="text-white p-1 font-extralight absolute -right-8 -top-2">
                                beta
                            </span>
                        </span>

                    </a>

                    <div className="space-y-2 mt-2 col-start-3 col-span-2">
                        <p className="text-gray-400 capitalize">{t('PRODUCT')}</p>
                        <p className="text-white text-sm">{t('Features')}</p>
                        <p className="text-white text-sm"> {t('How it works')}</p>
                        <p className="text-white text-sm">{t('Pricing')}</p>
                    </div>

                    <div className="space-y-2 mt-2 col-start-5 col-span-2">
                        <p className="text-gray-400 capitalize">{t('COMPANY')}</p>
                        <p className="text-white text-sm">{t('Our team')}</p>
                        <p className="text-white text-sm"> {t('Policies')} </p>
                        <p className="text-white text-sm">{t('Terms and conditions')}</p>
                    </div>

                    <div className="space-y-2 mt-2 col-start-7 col-span-2">
                        <p className="text-gray-400 capitalize">{t('CONTACTS')}</p>
                        <p className="text-white text-sm">info@form.com</p>
                        <p className="text-white text-sm">882-587-3025 </p>
                        <p className="text-white text-sm">6116 Willa River 610</p>
                    </div>

                    <div className="space-y-2 mt-2 items-baseline col-start-9 col-span-2">
                        <p className="text-gray-400 capitalize">{t('Mobile')}</p>
                        <div>
                            <div className="inline-block">
                                <a href="#" className="cursor-pointer">
                                    <img alt="google play" width={105} className="h-auto main-color" src="./google-play-badge.png" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block">
                                <a href="#" className="cursor-pointer">
                                    <img alt="google play" width={105} className="h-auto main-color" src="./app_Store_Badge.svg" />
                                </a>
                            </div>
                        </div>
                    </div>

                        <div className="space-y-2 mt-2 col-start-11 col-span-2">
                            <p className="text-gray-400 capitalize">{t('Newsletter')}</p>
                            <div className="flex flex-wrap flex-col justify-start space-x-0 space-y-2">
                                <label htmlFor="sub-email" className="text-white  block flex-grow text-sm">{t('Join our mailing list')}</label>
                                <div className="relative">
                                    <input placeholder="Add your email" type="email" id="sub-email" name="sub-email" className=" rounded-r-md relative h-10 w-44 rounded-l-md px-2 inline-block" />
                                    <button aria-label="subscribe-mail"
                                        className="absolute text-xs w-10 rounded-r-md h-10 right-0  bg-none border-0 font-semibold bg-main-color">
                                        <ArrowRightIcon className="text-white inline h-5 w-5 " aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </Grid>
            </div>

            <div className="h-9 border-t-2 bottom-0 absolute w-full border-gray-500 items-center flex justify-center">
                <span className="text-gray-500 text-sm">©{new Date().getFullYear()} - {CONSTANTS.AppName}  |   All rights reserved</span>
            </div>
        </footer>
    )
}