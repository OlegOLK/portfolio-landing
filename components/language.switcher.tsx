import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/outline';

import i18nConfig from '../i18n.json';
const locales = i18nConfig.locales.map(lc=> lc.toUpperCase());

export default function LanguageSwitcher() {
    const { t, lang } = useTranslation();
    const [selected, setSelected] = useState(lang)
    const router = useRouter();
    const { locale } = router;

    function handleChange(value: string) {
        setSelected(value)
        router.push('/', null, ({ locale: value.toLowerCase() }));
    }

    return (
        <div className="w-26">
            <Listbox value={selected} onChange={handleChange}>
                <div className="relative mt-1">
                    <Listbox.Button className="flex justify-end items-center relative w-full py-2 pl-3 pr-10 text-right  bg-none border-0 text-base font-semibold main-color">
                        <span className="inset-y-0 left-0 flex items-center pr-2 pointer-events-none main-color">
                            <GlobeIcon
                                className="w-5 h-5 text-gray-400 main-color"
                                aria-hidden="true"
                            />
                        </span>
                        <span className="block truncate right-0 uppercase">{selected}</span>

                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {locales.map((locale, localeIdx) => (
                                <Listbox.Option
                                    key={localeIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                        cursor-default hover:bg-gray-100 select-none relative py-2 pl-10 pr-4 main-color`
                                    }
                                    value={locale}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {locale}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                        }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}