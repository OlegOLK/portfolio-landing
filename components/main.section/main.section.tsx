import React from "react";
import DisctordPopup from "../discord/discord";
import More from "../more/more";
import useTranslation from 'next-translate/useTranslation'

export default function MainSection() {
    const { t } = useTranslation('home')

    return (
        <main className="container mx-auto grid w-full h-screen grid-cols-2 gap-4 relative box-border mt-16">
            <DisctordPopup></DisctordPopup>
            <More></More>
            <div className="flex items-center -mt-24">
                <div>
                    <p className="text-6xl font-bold leading-snug whitespace-pre-wrap">
                        {t('MainHeader')}
                    </p>

                    <p className="mt-9 whitespace-pre-wrap">
                        {t('MainSubheader')}
                    </p>
                    <div className="mt-16">
                        <button
                            className="inline relative shadow-lg w-44 py-3 text-base font-semibold bg-main-color rounded-lg text-white ">
                            {t('Get Started')}
                        </button>

                        <button
                            className="relative bg-none border-0  w-44 py-3 inline text-base font-semibold main-color">
                            {t('Watch the video')}
                        </button>
                    </div>
                </div>

            </div>
            <div className="flex items-center -mt-44">
                <img
                    className="w-auto h-full"
                    src="./test.svg">
                </img>
            </div>
        </main>
    )
}