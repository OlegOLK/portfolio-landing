import { ArrowNarrowDownIcon } from '@heroicons/react/outline'
import useTranslation from 'next-translate/useTranslation'

export default function More() {
    const { t } = useTranslation('home')
    return (
        <div className="absolute bottom-20 mx-auto hidden lg:block">
            <a href="#features"
                className="text-xs more-about relative bg-none border-0  py-3 block font-semibold">
                <ArrowNarrowDownIcon className="inline h-3 w-3 mr-2" aria-hidden="true" />
                {t('MORE ABOUT THE APP')}
            </a>
        </div>
    )
}