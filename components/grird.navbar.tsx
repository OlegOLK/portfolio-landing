import { ChevronDownIcon, FingerPrintIcon, MenuIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CONSTANTS } from './constants';
import useTranslation from 'next-translate/useTranslation'
import LanguageSwitcher from './language.switcher';
import Container from './container';
import Grid from './grid';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default function GridNav() {
    const { t } = useTranslation('home')
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={classNames("bg-white h-11 lg:h-28 top-0 z-50 fixed w-screen",
            scrollPosition != 0 ? "shadow-lg" : '')}>
            <div className="flex justify-center items-center w-full h-full">

                <div className="hidden lg:grid grid-cols-12 gap-5 relative my-auto justify-items-start" style={{ width: "1120px" }}>

                    <a href="/" className="col-span-2 space-x-4 relative self-center">
                        <img
                            className="lg:inline-block h-full w-8 justify-self-start"
                            style={{ verticalAlign: "middle" }}
                            src="/main.svg"
                            alt="logo"
                        />
                        <span className="logo relative self-center" style={{ verticalAlign: "middle" }}>
                            {CONSTANTS.AppName}
                            <span
                                style={{ backgroundColor: "#592FFF", borderRadius: "2px", fontSize: "10px", lineHeight: "14px" }}
                                className="text-white py-0.5 px-2 font-extralight absolute -right-9 -top-2">
                                beta
                            </span>
                        </span>

                    </a>
                    <a href="/features" className="col-start-3 justify-self-center secondary-menu cursor-pointer self-center no-underline hover:underline">{t('Features')}</a>
                    <a href="/pricing" className="secondary-menu justify-self-center cursor-pointer self-center no-underline hover:underline">{t('Pricing')}</a>
                    <a href="/contacts" className="secondary-menu justify-self-center cursor-pointer self-center no-underline hover:underline">{t('Contact')}</a>
                    {/*col-start-9 w-full */}
                    <div className="col-start-9 col-span-1 self-center justify-self-end">
                        <LanguageSwitcher />
                    </div>

                    <a
                        href="/signin"
                        className="col-start-10 col-span-1 flex items-center relative bg-none border-0  w-26 text-base font-semibold main-color">
                        <img src="/assets/test/user.svg" className="h-full inline mr-2" width={14} height={16} aria-hidden="true" />
                        {t('Sign in')}
                    </a>

                    <a
                        href="/signup"
                        className="self-center col-span-2 ripple shadow-lg w-full py-3 text-center text-base font-semibold bg-main-color rounded-lg text-white ">
                        {t('Get Started')}
                    </a>
                </div>

                <Popover className="block lg:hidden">
                    <Grid>
                        <a href="/" className="mx-4 col-span-3 space-x-4 relative self-center">
                            <img
                                className="inline-block h-full w-8 justify-self-start"
                                style={{ verticalAlign: "middle" }}
                                src="/main.svg"
                                alt="logo"
                            />
                            <span className="logo relative self-center" style={{ verticalAlign: "middle" }}>
                                {CONSTANTS.AppName}
                                <span
                                    style={{ backgroundColor: "#592FFF", borderRadius: "2px", fontSize: "10px", lineHeight: "14px" }}
                                    className="text-white py-0.5 px-2 font-extralight absolute -right-9 -top-1">
                                    beta
                                </span>
                            </span>

                        </a>

                        <Popover.Button className="bg-none rounded-md p-2 inline-flex items-center justify-center main-color">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </Grid>


                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-100"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel style={{ height: "570px" }} className="absolute bg-main-color  top-11 inset-x-0 transition transform origin-top-right md:hidden">
                            {
                                <div className="flex flex-col items-center mt-28 text-white space-y-8" >
                                    <a href="/features" className="secondary-menu cursor-pointer no-underline hover:underline">{t('Features')}</a>
                                    <a href="/pricing" className="secondary-menu cursor-pointer no-underline hover:underline">{t('Pricing')}</a>
                                    <a href="/contacts" className="secondary-menu cursor-pointer no-underline hover:underline">{t('Contact')}</a>

                                    <div className="col-start-9 col-span-1 self-center justify-self-end">
                                        <LanguageSwitcher reverseColor={true} />
                                    </div>

                                    <a
                                        href="/signup"
                                        className="self-center col-span-2 ripple shadow-lg w-44 py-3 text-center text-base font-semibold bg-white rounded-lg main-color ">
                                        {t('Get Started')}
                                    </a>
                                </div>
                            }
                        </Popover.Panel>
                    </Transition>
                </Popover >
            </div>
        </nav >
    )
}