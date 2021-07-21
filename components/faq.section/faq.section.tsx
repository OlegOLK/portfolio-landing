import React from "react";
import { Accordion } from "../accordion/accordion";
import useTranslation from 'next-translate/useTranslation'

export default function FaqSection() {
    const { t } = useTranslation('home')

    return (
        <div className="w-full mt-40 container mx-auto flex space-x-32">

            <div className="flex items-start relative flex-none">
                <div className="absolute -bottom-12 -left-44">
                    <figure className="cube-vertical"></figure>
                    <figure className="cube-vertical"></figure>
                </div>
                <div className="flex justify-items-start space-x-2">
                    <div>
                        <img  alt="cube" src="cube_1.svg" className="inline" />
                    </div>
                    <div>
                        <div className="feature-header">
                            {t('FAQs')}
                        </div>
                        <div className="feature-subheader mt-4">
                            {t('FAQsubheader')}
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex-grow">
                <div className="flex flex-wrap space-y-6 justify-start items-start mx-32">
                    <Accordion header={t('question1')} subHeader={t('answer1')} />
                    <Accordion header={t('question2')} subHeader={t('answer2')} />
                    <Accordion header={t('question3')} subHeader={t('answer3')} />
                    <Accordion header={t('question4')} subHeader={t('answer4')} />
                </div>
            </div>
        </div>
    )
}