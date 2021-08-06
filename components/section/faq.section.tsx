import React from "react"
import { GridAccordion } from "../grid.accordion"
import useTranslation from 'next-translate/useTranslation';
import Grid from "../grid";

export default function FaqSection() {
    const { t } = useTranslation('home')

    return (
        <section className="relative flex justify-center pb-24">
            <Grid>
                <div className="col-span-3">
                    <img alt="cube" src="/assets/cubes/cube_faq.png" className="block" />
                    <p className="feature-header mt-4">
                        {t('FAQs')}
                    </p>
                    <p className="feature-subheader mt-6">
                        {t('FAQsubheader')}
                    </p>
                </div>

                <div className="col-start-5 col-span-8 space-y-5">
                    <GridAccordion header={t('question1')} subHeader={t('answer1')} />
                    <GridAccordion header={t('question2')} subHeader={t('answer2')} />
                    <GridAccordion header={t('question3')} subHeader={t('answer3')} />
                    <GridAccordion header={t('question4')} subHeader={t('answer4')} />
                </div>
            </Grid>

            <div className="absolute flex flex-col space-y-5" style={{ top: "150px", left: "-50px" }}>
                <figure className="cube shadow-xl inline-block z-0"></figure>
                <figure className="cube shadow-xl inline-block z-0"></figure>
            </div>
        </section>
    )
}