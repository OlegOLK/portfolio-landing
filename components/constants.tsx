
import React, { ReactNode } from 'react'


export type Feature = {
    cubePart?: ReactNode;
    img: ReactNode;
    prefix: number;
}

export const FEATURES: Feature[] = [
    {
        prefix: 1,
        img: (
            <>
                <img src="assets/test/f1.png" alt="automated wallets update picture" className="block w-full h-auto relative z-10" />
                <img className="block absolute z-0 -left-10 -top-12" src="assets/test/f1_left_pattern.png" />
                <img className="block absolute z-0 -right-10 top-36" src="assets/test/f1_right_pattern.png" />
            </>
        )
    },
    {
        prefix: 2,
        img: (
            <>
                <img className="block w-full h-auto relative z-10" src="assets/test/f2.png" />
                <img className="block absolute z-0 -left-12 top-12" src="assets/test/f2_left_pattern.png" />
                <img className="block absolute z-0 -right-12 -top-12" src="assets/test/f2_right_pattern.png" />
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
                <img className="block absolute z-0 left-0 bottom-4" src="assets/test/f3_left_pattern.png" />
                <img className="block absolute z-0 right-8 top-44" src="assets/test/f3_right_pattern.png" />
            </>
        )
    },
    {
        prefix: 4,
        img: (
            <>
                <img className="block w-full h-auto relative z-10" src="assets/test/f4_1.png" />
                <img className="block absolute z-0 -left-12 top-72" src="assets/test/f4_left_pattern.png" />
                <img className="block absolute z-0 -right-8 top-24" src="assets/test/f4_right_pattern.png" />
            </>
        ),
        cubePart: (
            <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "30px", left: "-10px" }
            }> </figure>
        )
    },
]


export const CONSTANTS = {
    'AppName': 'iQube'
}
