import useTranslation from 'next-translate/useTranslation'

export default function FeaturesAnchor() {
    const { t } = useTranslation('home')
        
    return (
        <a href="#features"
            className="text-xs more-about relative bg-none border-0  py-3 block font-semibold uppercase">
            <img src="/assets/test/Subtract.svg" className="inline self-center" />
            <span className="self-center ml-3">{t('MORE ABOUT THE APP')}</span>
        </a>
    )
}