import React from "react";
import { Accordion } from "./accordion";
import useTranslation from 'next-translate/useTranslation'
import Section from "./section";
import FeatureDescription, { TextToImagePosition } from "./feature.description";

export default function FaqSection() {
    const { t } = useTranslation('home')

    return (
        // <div className="w-full mt-20 lg:mt-40 container mx-auto flex space-x-0 lg:space-x-32 flex-wrap">
        //     <div className="absolute -bottom-12 -left-44">
        //     <figure className="cube-vertical"></figure>
        //     <figure className="cube-vertical"></figure>
        // </div>
        <Section>
            <div className="flex items-start relative flex-none" style={{ flex: "1 1 0" }}>
                <div className="flex justify-items-start space-x-2">
                    <div className="space-y-5">
                        <img alt="cube" src="/assets/cubes/cube_faq.png" className="block" />

                        <div className="feature-header">
                            {t('FAQs')}
                        </div>
                        <div className="feature-subheader mt-4">
                            {t('FAQsubheader')}
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex-1" style={{ flex: "1 1 0" }}>
                <div className="flex flex-wrap space-y-6 justify-start items-start mx-2 lg:mx-auto">
                    <Accordion header={t('question1')} subHeader={t('answer1')} />
                    <Accordion header={t('question2')} subHeader={t('answer2')} />
                    <Accordion header={t('question3')} subHeader={t('answer3')} />
                    <Accordion header={t('question4')} subHeader={t('answer4')} />
                </div>
            </div>
        </Section>
    )
}