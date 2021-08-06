type Props = {
    header: string,
    subHeader: string,
    mainCta: string,
    secondaryCta: string
}

export default function HeroCtaText({ header, subHeader, mainCta, secondaryCta }: Props) {
    return (
        <>
            <h1 className="hero-header whitespace-pre-wrap break-word">
                {header}
            </h1>
            <h5 className="mt-9 whitespace-pre-wrap opacity-70 hero-sub-header">
                {subHeader}
            </h5>
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
        </>
    )
}