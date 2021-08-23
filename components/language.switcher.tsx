import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/outline';

import i18nConfig from '../i18n.json';
const locales = i18nConfig.locales.map(lc => lc.toUpperCase());

export default function LanguageSwitcher() {
    const { t, lang } = useTranslation();
    const [selected, setSelected] = useState(lang.toUpperCase())
    const router = useRouter();
    const { locale } = router;

    function handleChange(value: string) {
        setSelected(value)
        router.push('/', null, ({ locale: value.toLowerCase() }));
    }

    return (
        // flex items-center justify-center
            <Listbox value={selected} onChange={handleChange}>
                {/* <div className="relative mt-1"> */}
                    <Listbox.Button className="flex justify-end items-center w-full text-right bg-none border-0 text-base font-semibold main-color">
                        <img
                            src="/assets/test/globe.svg"
                            className="text-gray-400 main-color"
                            height={16}
                            width={16}
                            aria-hidden="true"
                        />
                        <span className="block ml-2 right-0 uppercase">{selected}</span>

                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full w-16 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {locales.map((locale, localeIdx) => (
                                <Listbox.Option
                                    key={localeIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                        cursor-default hover:bg-gray-100 select-none relative text-center main-color`
                                    }
                                    value={locale}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium bg-main-color text-white' : 'font-normal'
                                                    } block truncate py-2`}
                                            >
                                                {locale}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                {/* </div> */}
            </Listbox>
    )
}