import { BellIcon, UserIcon, FingerPrintIcon } from '@heroicons/react/outline'

export default function MyNav() {
    return (
        <nav className="bg-white  top-0 z-50 fixed w-full">
            <div className="container mx-auto ">
                <div className="relative flex items-center  justify-between h-28">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="/main.svg"
                                alt="logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="/main.svg"
                                alt="logo"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6 cursor-pointer">
                            <div className="flex space-x-8 text-center">
                                <div className=" md:mr-24">
                                    <a className="text-black logo">TradeFo</a>
                                </div>
                                <a className="secondary-menu cursor-pointer self-center">Features</a>
                                <a className="secondary-menu cursor-pointer self-center">Pricing</a>
                                <a className="secondary-menu cursor-pointer self-center">Contact</a>

                                <div className="absolute right-0 flex items-center justify-center">
                                    <button
                                        className="relative hover:opacity-90 hover:scale-105 bg-none border-0  w-44 py-3 block text-base font-semibold main-color">
                                        <FingerPrintIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
                                    Sign in
                                </button>
                                    <button
                                        className="relative hover:opacity-90 hover:scale-105 shadow-lg w-44 py-3 block text-base font-semibold bg-main-color rounded-lg text-white ">
                                        Get Started
                            </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}