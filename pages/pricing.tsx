import React from "react";
import { MainSection } from "../components/main.section";
import useTranslation from 'next-translate/useTranslation'
import Footer from "../components/footer";

export default function Pricing() {
    const { t } = useTranslation('home')

    return (
        <>
            <MainSection
                header={t('pricingHeading')}
                subHeader={t('pricingSubHeading')}
                imageSrc="./pricing.svg"
                mainCta={t('Get Started')}
                secondaryCta={t('Watch the video')}>
            </MainSection>
            <Footer />
        </>
    )
}