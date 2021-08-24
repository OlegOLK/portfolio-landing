
import React, { ReactNode } from 'react'
import Grid from './grid'


export type Feature = {
    cubePart?: ReactNode;
    img: ReactNode;
    prefix: number;
    figures?: ReactNode;
}

export const FEATURES: Feature[] = [
    {
        prefix: 1,
        img: (
            <img src="assets/test/f1.png" alt="automated wallets update picture" width={455} height={455} className="block relative z-10 rounded-none lg:rounded-2xl" />
        ),
        figures: (
            <>
                <div className="absolute h-full hidden lg:block">
                    <Grid>
                        <figure
                            className="rounded absolute col-span-1"
                            style={{ marginTop: "43px", left: "-75px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                        <div className="col-start-5 col-span-1 relative">
                            <figure
                                className="rounded absolute"
                                style={{ boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                            <figure
                                className="rounded absolute"
                                style={{ marginTop: "496px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                        </div>

                        <figure
                            className="rounded absolute col-start-6 col-span-1"
                            style={{ marginTop: "75px", left: "-20px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                    </Grid>
                </div>
                <div className="w-full h-full absolute z-40 hidden lg:block">
                    <div className="absolute grid grid-cols-3 gap-2 
                    lg:-bottom-72 lg:-right-96 
                    2xl:-bottom-72 2xl:-right-64">
                        {
                            Array(9).fill(0).map((v, i) => {
                                return (
                                    <figure
                                        key={i + "feature-1"}
                                        className="z-40 bg-white"
                                        style={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "160px", width: "160px" }}></figure>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    },
    {
        prefix: 2,
        img: (
            <img className="block w-full h-auto relative z-10 rounded-none lg:rounded-2xl" width={455} height={455} src="assets/test/f2.png" />
        ),
        cubePart: (
            <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "-10px", left: "-10px" }
            } />
        )
    },
    {
        prefix: 3,
        img: (
            <img className="block w-full h-auto relative z-10 rounded-none lg:rounded-2xl" width={455} height={455} src="assets/test/f3.png" />
        ),
        figures: (
            <>
                <div className="absolute h-full z-0 hidden lg:block">
                    <Grid>
                        <figure
                            className="rounded absolute col-start-4 col-span-1"
                            style={{ marginTop: "496px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                        <figure
                            className="rounded absolute col-start-5 col-span-1"
                            style={{ marginTop: "80px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                        <figure
                            className="rounded absolute col-start-6 col-span-1"
                            style={{ left: "-20px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                        <figure
                            className="rounded absolute col-start-12 col-span-1"
                            style={{ marginTop: "155px", right: "-150px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                    </Grid>
                </div>
                <div className="w-full h-full absolute z-40 hidden lg:block">
                    <div className="absolute grid grid-cols-3 gap-2
                                    lg:-bottom-72 lg:-left-96 
                                    2xl:-bottom-72 2xl:-left-64">
                        {
                            Array(9).fill(0).map((v, i) => {
                                return (
                                    <figure
                                        key={i + "feature-3"}
                                        className="z-40 bg-white"
                                        style={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "160px", width: "160px" }}></figure>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    },
    {
        prefix: 4,
        img: (
            <img className="block w-full h-auto relative z-10 rounded-none lg:rounded-2xl" width={455} height={455} src="assets/test/f4.png" />
        ),
        cubePart: (
            <figure className="bg-main-color absolute"
                style={{ width: "10px", height: "10px", top: "30px", left: "-10px" }} />
        )
    },
    {
        prefix: 5,
        img: (
            <img src="assets/test/f3.png" width={455} height={455} alt="automated wallets update picture" className="block w-full h-auto relative z-10 rounded-none lg:rounded-2xl" />
        ),
        figures: (
            <>
                <div className="absolute h-full hidden lg:block">
                    <Grid>
                        <figure
                            className="rounded absolute col-span-1"
                            style={{ marginTop: "43px", left: "-75px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>

                        <div className="col-start-5 col-span-1 relative">
                            <figure
                                className="rounded absolute"
                                style={{ boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                            <figure
                                className="rounded absolute"
                                style={{ marginTop: "496px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                        </div>

                        <figure
                            className="rounded absolute col-start-6 col-span-1"
                            style={{ marginTop: "75px", left: "-20px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                    </Grid>
                </div>
            </>
        )
    },
]


export const CONSTANTS = {
    'AppName': 'iQube'
}
