import React from "react";
import Grid from "../grid";
import useTranslation from 'next-translate/useTranslation';

export default function ExchangesSection() {
    
    
    const { t } = useTranslation('home')
    return (
        <section className="relative flex justify-center">
            <Grid>
                <div className="grid justify-items-center col-span-12">
                    <div>
                        <img alt="cube" src="/assets/cubes/cube_exchanges.png" className="inline align-middle" />
                        <p className="inline align-middle feature-header ml-4 self-center">{t('connectExchange')}</p>
                    </div>

                </div>

                <div className="col-span-12 ">
                    <div className="flex w-full justify-center lg:justify-between mt-16 space-x-20">
                        <img alt="binance" src="binance.png" className="inline" />
                        <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
                        <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
                        <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
                        <img alt="binance" className="hidden lg:inline-block" src="binance.png" />
                    </div>
                </div>
            </Grid>

        </section>
    )
}