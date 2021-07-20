import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function LanguageSwitcher() {
    const { t, lang } = useTranslation()
    const router = useRouter();
    const { locale } = router;

    function handleChange(value) {
        router.push('/', null, ({ locale: value }));
    }

    return (
        <>
            <select id="pet-select" onChange={event => handleChange(event.target.value)}>

                <option value="en">

                    English
                </option>
                <option value="ru">

                    Russian
                </option>

            </select>
        </>
    )
}