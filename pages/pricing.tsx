import React from "react";
import Container from "../components/container";
import GridFooter from "../components/footer.grid";
import Hero from "../components/hero/hero";
import useTranslation from 'next-translate/useTranslation'
import HeroCta from '../components/hero/hero.cta.text';

export default function Pricing() {
    const { t } = useTranslation('home')

    return (
        <>
            <Container>

                <Hero
                    fullScreen={false}
                    text={<HeroCta
                        header={t('pricingHeading')}
                        subHeader={t('pricingSubHeading')}
                        mainCta={t('Get Started')}
                    />}
                >
                </Hero>

            </Container>

            <div style={{ height: "200px" }} className="w-full">
                &nbsp;
            </div>

            <GridFooter />
        </>
    )
}