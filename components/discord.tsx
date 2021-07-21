import useTranslation from 'next-translate/useTranslation'

export default function DisctordPopup() {
    const { t } = useTranslation('home')

    return (
        <div className="fixed bottom-4 right-6 z-10">
            <a
            href="https://discord.gg/SWzBKHEB" target="_blank" rel="noreferrer" 
                className="shadow-lg cursor-pointer py-3 px-3 flex bg-white items-center justify-start text-base font-semibold rounded-lg h-16 w-72 ">
                <img  alt="discord" src="./discord.svg" className="inline"/>
                <div className="text-left ml-2">
                    <p className="discord-header">{t('getSupport')} </p>
                    <p className="discord-sub">{t('joinDiscord')}</p>
                </div>
            </a>
        </div>
    )
}
