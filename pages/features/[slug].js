import { motion } from 'framer-motion';
import FeatureImage from '../../components/feature.image';
import FeatureDescription, { TextToImagePosition } from '../../components/feature.description';
import useTranslation from 'next-translate/useTranslation'

function FeatureItem({ title, subtitle, icon, isLeftAligned, color }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.3,
            }}
            className={`${isLeftAligned ? "text-left" : "text-right"
                } mb-6`}
        >
            <div className={`icon has-text-${color || "primary"} is-large mb-2`}>
                <i className={`fas ${icon} fa-3x`} />
            </div>
            <h3 className="title font-bold text-2xl is-spaced is-5">{title}</h3>
            <p className="subtitle is-6 has-text-grey">{subtitle}</p>
        </motion.div>
    );
}


export default function FeatureSlug() {
    const { t } = useTranslation('home')

    return (
        <div className="container mx-auto h-screen mt-20 flex justify-center items-center">
            <div className="grid gap-5 grid-cols-3">
                <div className="flex flex-col justify-center items-end">
                    <FeatureItem
                        title="Powerful"
                        subtitle="Todo like you've never done before"
                        icon="fa-check-double"
                        color="danger"
                    />
                    <FeatureItem
                        title="Organized"
                        subtitle="Never miss anything"
                        icon="fa-list-ol"
                    />
                    <FeatureItem
                        title="Watertight"
                        subtitle="Todo where you do best"
                        icon="fa-bath"
                        color="info"
                    />
                </div>

                <div className="space-y-4 flex-col items-center flex justify-center">
                    <FeatureDescription
                        textPosition={TextToImagePosition.Middle}
                        header={t('feature3header')}
                        subHeader={t('feature3subheader')}
                        notLink={true}
                    >
                    </FeatureDescription>

                    <FeatureImage alt={t('feature3header')} src={'/feature_3.svg'} />
                    <a
                        href="/signup"
                        className="ripple shadow-lg w-80 py-3 text-center block text-base font-semibold bg-main-color rounded-lg text-white ">
                        {t('Get Started')}
                    </a>

                    <a
                        href="/#features"
                        className="border-1 shadow-lg w-80 py-3 text-center block text-base font-semibold bg-white rounded-lg  ">
                        {"Browse more"}
                    </a>
                </div>


                <div className="flex flex-col justify-center">
                    <FeatureItem
                        isLeftAligned
                        title="Easy"
                        subtitle="Anyone can do it"
                        icon="fa-baby"
                    />
                    <FeatureItem
                        isLeftAligned
                        title="Goodbye paper"
                        subtitle="Don't write anything down, todo it!"
                        icon="fa-book-dead"
                        color="danger"
                    />
                    <FeatureItem
                        isLeftAligned
                        title="Intelligent"
                        subtitle="It knows what's to be done so you can to do"
                        icon="fa-brain"
                        color="warning"
                    />
                </div>
            </div>





        </div>
    )
}