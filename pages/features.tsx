import useTranslation from 'next-translate/useTranslation'
import { GridAccordion } from '../components/grid.accordion';
import Footer from '../components/footer';
import Navbar from '../components/grird.navbar';
export default function Features() {
    const { t } = useTranslation('home')
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-12 gap-5 mx-auto lg:mx-40 2xl:mx-72 min-h-screen relative" >
                <div className="col-span-6" style={{ marginTop: "13rem" }}>
                    <h1 className="hero-header whitespace-pre-wrap break-word">
                        {t('MainHeader')}
                    </h1>
                    <h5 className="mt-9 whitespace-pre-wrap opacity-70 hero-sub-header">
                        {t('MainSubheader')}
                    </h5>
                    <div className="mt-16">
                        <a
                            href="/signup"
                            className="ripple inline-block text-center relative shadow-lg w-44 py-3 text-base font-semibold bg-main-color rounded-lg text-white ">
                            {t('Get Started')}
                        </a>
                        <button
                            className="relative bg-none border-0  w-44 py-3 inline text-base font-semibold main-color">
                            {t('Watch the video')}
                        </button>
                    </div>
                </div>

                <div className="col-start-8 col-span-5 relative z-40" style={{ marginTop: "12rem" }}>
                    <div className="relative">
                        <img src="./assets/test/main_pattern.svg" className="w-full h-auto z-40 relative" />
                        <img src="./assets/test/main_left_pattern.png" className="absolute z-0 -top-2 -left-4 w-auto h-auto" />
                        <img src="./assets/test/main_right_pattern.png" className="absolute z-0 -bottom-5 -right-4 w-auto h-auto" />
                        <img src="./assets/test/main_left_line.png" className="absolute -bottom-12 z-0 -left-20" height={150} width={295.5} />
                        <img src="./assets/test/main_right_line.png" className="absolute z-50 top-0 right-28 w-auto h-auto" />
                    </div>

                </div>

                <div className="absolute bottom-12 left-0">
                    <a href="#features"
                        className="text-xs more-about relative bg-none border-0  py-3 block font-semibold uppercase">
                        <img src="/assets/test/Subtract.svg" className="inline self-center" />
                        <span className="self-center ml-3">{t('MORE ABOUT THE APP')}</span>
                    </a>
                </div>

                <div className="fixed bottom-12 right-24 z-20 hidden lg:block">
                    <a
                        href="https://discord.gg/SWzBKHEB" target="_blank" rel="noreferrer"
                        className="shadow-lg cursor-pointer py-3 px-3 flex bg-white items-center justify-start text-base font-semibold rounded-lg h-16 w-72 ">
                        <img alt="discord" src="./discord.svg" className="inline" />
                        <div className="text-left ml-2">
                            <p className="discord-header">{t('getSupport')} </p>
                            <p className="discord-sub">{t('joinDiscord')}</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-screen left-0 bg-gray-400 relative z-40" style={{ height: "721px" }}>+
                <div className="absolute inset-y-1/2 play-button bg-red-500 flex items-center justify-center">
                    <div className="playIcon -ml-1">
                        <svg width="64" height="62" viewBox="0 0 64 62" fill="#7DC7A8" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1933 16.6405C19.1933 13.1764 22.9433 11.0113 25.9433 12.7434L58.9433 31.7959C61.9433 33.528 61.9433 37.8581 58.9433 39.5902L25.9433 58.6427C22.9433 60.3748 19.1933 58.2097 19.1933 54.7456L19.1933 16.6405Z" fill="#7DC7A8" stroke="#F3F3F3" />
                        </svg>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-5 min-h-screen mx-auto lg:mx-40 2xl:mx-72 mt-40 space-y-40">
                <div id="features" className="grid grid-cols-12 gap-5 col-span-12">
                    <div className="col-span-6">
                        <img src="/assets/cubes/cube_feature_1.svg" className="block" />
                        <h4 className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap" style={{ marginTop: "16px" }}>{t('feature1header')}</h4>
                        <h6 className="feature-subheader mt-4 whitespace-pre-wrap" style={{ marginTop: "32px" }}>{t('feature1subheader')}</h6>
                        <div className="bg-main-color rounded-md"
                            style={{ marginTop: "24px", width: "84px", height: "4px" }}> </div>
                    </div>
                    <div className="col-start-8 col-span-5 relative z-10">
                        <img className="block w-full h-auto relative z-10" src="assets/test/f1.png" />
                        <img className="block absolute z-0 -left-10 -top-12" src="assets/test/f1_left_pattern.png" />
                        <img className="block absolute z-0 -right-10 top-36" src="assets/test/f1_right_pattern.png" />
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-5 col-span-12">
                    <div className="col-span-5 relative z-10">
                        <img className="block w-full h-auto relative z-10" src="assets/test/f2.png" />
                        <img className="block absolute z-0 -left-12 top-12" src="assets/test/f2_left_pattern.png" />
                        <img className="block absolute z-0 -right-12 -top-12" src="assets/test/f2_right_pattern.png" />

                    </div>
                    <div className="col-start-8 col-span-5 relative">
                        <img src="assets/test/f2_cube.png" className="block" />
                        <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "-10px", left: "-10px" }}></figure>
                        <h4 className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap" style={{ marginTop: "16px" }}>{t('feature2header')}</h4>
                        <h6 className="feature-subheader mt-4 whitespace-pre-wrap" style={{ marginTop: "32px" }}>{t('feature2subheader')}</h6>
                        <div className="bg-main-color rounded-md"
                            style={{ marginTop: "24px", width: "84px", height: "4px" }}> </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5 col-span-12">
                    <div className="col-span-6 self-center">
                        <img src="/assets/cubes/cube_feature_3.png" className="block" />
                        <h4 className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap" style={{ marginTop: "16px" }}>{t('feature1header')}</h4>
                        <h6 className="feature-subheader mt-4 whitespace-pre-wrap" style={{ marginTop: "32px" }}>{t('feature1subheader')}</h6>
                        <div className="bg-main-color rounded-md"
                            style={{ marginTop: "24px", width: "84px", height: "4px" }}> </div>
                    </div>
                    <div className="col-start-8 col-span-5 relative z-10">
                        <img className="block w-full h-auto relative z-10" src="assets/test/f3.png" />
                        <img className="block absolute z-0 left-0 bottom-4" src="assets/test/f3_left_pattern.png" />
                        <img className="block absolute z-0 right-8 top-44" src="assets/test/f3_right_pattern.png" />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5 col-span-12">
                    <div className="col-span-5 relative z-10">
                        <img className="block w-full h-auto relative z-10" src="assets/test/f4_1.png" />
                        <img className="block absolute z-0 -left-12 top-72" src="assets/test/f4_left_pattern.png" />
                        <img className="block absolute z-0 -right-8 top-24" src="assets/test/f4_right_pattern.png" />

                    </div>
                    <div className="col-start-8 col-span-5 relative self-center">
                        <img src="/assets/test/f4_cube.png" className="block" />
                        <figure className="bg-main-color absolute" style={{ width: "10px", height: "10px", top: "30px", left: "-10px" }}></figure>
                        <h4 className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap" style={{ marginTop: "16px" }}>{t('feature2header')}</h4>
                        <h6 className="feature-subheader mt-4 whitespace-pre-wrap" style={{ marginTop: "32px" }}>{t('feature2subheader')}</h6>
                        <div className="bg-main-color rounded-md"
                            style={{ marginTop: "24px", width: "84px", height: "4px" }}> </div>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-5 col-span-12 ">
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
                </div>
                <div className="grid grid-cols-12 gap-5 col-span-12 ">
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
                </div>
            </div>

            <div className="w-full bg-main-color h-full mt-24 py-24">
                <div className="flex flex-wrap justify-center items-center h-full w-full">
                    <div className="w-full">
                        <p className="text-white bottom-cta mt-32	text-center whitespace-pre-wrap">{t('mainCTA')}</p>
                        <p className="text-white text-center mt-8 text-base	whitespace-pre-wrap">{t('secondaryCTA')}</p>


                    </div>
                    <button
                        className="mt-16 shadow-lg w-44 py-3 block text-base font-semibold bg-white rounded-lg ">
                        {t('Start for free')}
                    </button></div>
            </div>
            <Footer />
        </>
    )
}