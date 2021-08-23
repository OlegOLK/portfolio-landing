import React from "react"
import { GridAccordion } from "../grid.accordion"
import useTranslation from 'next-translate/useTranslation';
import Grid from "../grid";

export default function FaqSection() {
    const { t } = useTranslation('home')

    return (
        <section className="relative flex justify-center pb-24 pt-28">
            <div className="absolute h-full z-0 hidden lg:block">
                <Grid>
                    <figure
                        className="rounded absolute col-span-1"
                        style={{ marginTop: "354px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                    <figure
                        className="rounded absolute col-start-2 col-span-1"
                        style={{ marginTop: "274px", left: "-20px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                    
                    <figure
                        className="rounded absolute col-start-3 col-span-1"
                        style={{marginTop: "-72px",boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                    <figure
                        className="rounded absolute col-start-12 col-span-1"
                        style={{marginTop: "0px", right: "-150px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                </Grid>
            </div>
            <Grid>
                <div className="col-span-4 mb-4 lg:mb-0 lg:col-span-3 mx-4 lg:mx-0">
                    <img alt="cube" src="/assets/cubes/cube_faq.png" className="block" />
                    <p className="feature-header mt-4">
                        {t('FAQs')}
                    </p>
                    <p className="feature-subheader mt-6">
                        {t('FAQsubheader')}
                    </p>
                </div>

                <div className="col-start-1 col-span-4 lg:col-start-5 lg:col-span-8 space-y-5 mx-4 lg:mx-0">
                    <GridAccordion header={t('question1')} subHeader={t('answer1')} />
                    <GridAccordion header={t('question2')} subHeader={t('answer2')} />
                    <GridAccordion header={t('question3')} subHeader={t('answer3')} />
                    <GridAccordion header={t('question4')} subHeader={t('answer4')} />
                </div>
            </Grid>

            
        </section>
    )
}