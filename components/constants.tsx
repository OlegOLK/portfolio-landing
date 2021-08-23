
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
            <>
                <img src="assets/test/f1.png" alt="automated wallets update picture" className="block w-full h-auto relative z-10" />
                {/* <img className="block absolute z-0 -left-10 -top-12" src="assets/test/f1_left_pattern.png" />
                <img className="block absolute z-0 -right-10 top-36" src="assets/test/f1_right_pattern.png" /> */}
            </>
        ),
        figures: (
            <>
                <div className="absolute h-full">
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
                <div className="w-full h-full absolute z-40">
                    <div style={{ bottom: "-266px", right: "-250px" }} className="absolute grid grid-cols-3 gap-2">
                        {
                            Array(9).fill(0).map((v,i) => {
                                return (
                                    <figure
                                        key={i+"feature-1"}
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
            <>
                <img className="block w-full h-auto relative z-10" src="assets/test/f2.png" />
                {/* <img className="block absolute z-0 -left-12 top-12" src="assets/test/f2_left_pattern.png" />
                <img className="block absolute z-0 -right-12 -top-12" src="assets/test/f2_right_pattern.png" /> */}
            </>
        ),
        cubePart: (
            <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "-10px", left: "-10px" }
            }> </figure>
        )
    },
    {
        prefix: 3,
        img: (
            <>
                <img className="block w-full h-auto relative z-10" src="assets/test/f3.png" />
                {/* <img className="block absolute z-0 left-0 bottom-4" src="assets/test/f3_left_pattern.png" />
                <img className="block absolute z-0 right-8 top-44" src="assets/test/f3_right_pattern.png" /> */}
            </>
        ),
        figures: (
            <>
                <div className="absolute h-full">
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
                            style={{ marginTop:"155px", right: "-150px", boxShadow: "0px 4px 8px rgba(137, 160, 172, 0.16)", height: "75px", width: "75px" }}></figure>
                    </Grid>
                </div>
                <div className="w-full h-full absolute z-40">
                    <div style={{ bottom: "-266px", left: "-250px" }} className="absolute grid grid-cols-3 gap-2">
                        {
                            Array(9).fill(0).map((v,i) => {
                                return (
                                    <figure
                                    key={i+"feature-3"}
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
            <>
                <img className="block w-full h-auto relative z-10" src="assets/test/f4.png" />
                {/* <img className="block absolute z-0 -left-12 top-72" src="assets/test/f4_left_pattern.png" />
                <img className="block absolute z-0 -right-8 top-24" src="assets/test/f4_right_pattern.png" /> */}
            </>
        ),
        cubePart: (
            <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "30px", left: "-10px" }
            }> </figure>
        )
    },
    {
        prefix: 5,
        img: (
            <>
                <img src="assets/test/f3.png" alt="automated wallets update picture" className="block w-full h-auto relative z-10" />
                {/* <img className="block absolute z-0 -left-10 -top-12" src="assets/test/f1_left_pattern.png" />
                <img className="block absolute z-0 -right-10 top-36" src="assets/test/f1_right_pattern.png" /> */}
            </>
        ),
        figures: (
            <>
                <div className="absolute h-full">
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
                <div className="w-full h-full absolute z-40">
                    <div style={{ bottom: "-266px", right: "-250px" }} className="absolute grid grid-cols-3 gap-2">
                        {
                            Array(9).fill(0).map((v,i) => {
                                return (
                                    <figure
                                        key={i+"feature-1"}
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
]


export const CONSTANTS = {
    'AppName': 'iQube'
}
