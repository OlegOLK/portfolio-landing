import React, { ReactNode } from "react";

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
        <div className="grid-cols-1 pl-14 inset-0 lg:mt-16 lg:grid-cols-2 container mx-auto
        grid w-auto min-h-screen gap-4 box-border ">
            {children}
            <div className="flex items-center mt-32 lg:-mt-24">
                <div>
                    <p className="text-5xl lg:text-6xl font-bold leading-snug whitespace-pre-wrap break-word text-center lg:text-left">
                        {header}
                    </p>

                    <p className="mt-9 whitespace-pre-wrap text-base opacity-70	text-center lg:text-left leading-8 font-semibold">
                        {subHeader}
                    </p>
                    <div className="mt-16 flex items-center justify-center lg:justify-start">
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
            <div className="hidden lg:flex items-center mt-0 lg:-mt-44">
                <img
                    alt="main-image"
                    className="w-auto h-full"
                    src={imageSrc} />
            </div>
        </div>
    )
}