import React, { ReactNode } from "react";
import DisctordPopup from "./discord";
import More from "./more";

type Props = {
    header: string;
    subHeader: string;
    imageSrc: string;
    mainCta: string;
    secondaryCta: string;
    children: ReactNode;
}

export const MainSection = ({ header, imageSrc, subHeader, mainCta, secondaryCta, children }: Props) => {

    return (
        <div className="lg:container lg:mx-auto grid w-full h-screen lg:grid-cols-2 gap-4 relative box-border lg:mt-16
        sm:grid-cols-1 md:w-96 md:inset-0">
            {children}
            <div className="flex items-center lg:-mt-24">
                <div>
                    <p className="text-6xl font-bold leading-snug whitespace-pre-wrap">
                        {header}
                    </p>

                    <p className="mt-9 whitespace-pre-wrap text-base opacity-70	 leading-8 font-semibold">
                        {subHeader}
                    </p>
                    <div className="mt-16">
                        <a
                            href="/signup"
                            className="ripple inline-block text-center relative shadow-lg w-44 py-3 text-base font-semibold bg-main-color rounded-lg text-white ">
                            {mainCta}
                        </a>

                        <button
                            className="relative bg-none border-0  w-44 py-3 inline text-base font-semibold main-color">
                            {secondaryCta}
                        </button>
                    </div>
                </div>

            </div>
            <div className="flex items-center -mt-44">
                <img
                    alt="main-image"
                    className="w-auto h-full"
                    src={imageSrc} />
            </div>
        </div>
    )
}