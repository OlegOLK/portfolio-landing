import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from "next/image";
import cx from 'classnames';
import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";

export enum TextToImagePosition {
    Top,
    Middle,
    Bottom
}

type Props = {
    header: string;
    subHeader: string;
    textPosition: TextToImagePosition;
    children?: ReactNode;
    notLink?: boolean;
}

export default function FeatureDescription(props: Props) {
    const { t } = useTranslation('home')

    const position = () => {
        return props.textPosition == TextToImagePosition.Bottom ? 'items-end' :
            props.textPosition == TextToImagePosition.Top ? 'items-start' :
                'items-center';
    }
    return (
        <div className={cx('flex relative  z-10', position())}>
            {props.children}
            <div className="flex justify-items-start z-10">
                <motion.div layoutId="image">
                    <img src="/cube_1.svg" alt="cube" className="inline" />
                </motion.div>
                <div>
                    <motion.div
                        layoutId="featureHeader"
                        className="feature-header ml-1">
                        <span className="break-words text-4xl font-extrabold whitespace-pre-wrap">{props.header}</span>
                    </motion.div>
                    <motion.div
                        layoutId="featureSubHeader"
                        className="feature-subheader mt-4 whitespace-pre-wrap">
                        {props.subHeader}
                    </motion.div>
                    {
                        !props.notLink ?
                            (
                                <div>
                                    <Link href="/features/1" passHref>
                                        <a className="relative font-main bg-none border-0 text-left cursor-pointer  py-3 block text-base font-semibold main-color ml-0">
                                            {t('LearnMore')}
                                            <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
                                        </a>
                                    </Link>
                                </div>
                            ) : <></>
                    }

                </div>
            </div>
        </div>
    )
}