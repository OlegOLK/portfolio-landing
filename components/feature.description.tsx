import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from "next/image";
import cx from 'classnames';
import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";

export enum TextToImagePosition {
    Start,
    End,
}

type Props = {
    header: string;
    subHeader: string;
    textPosition: TextToImagePosition;
    cubeSrc: string;
    children?: ReactNode;
    notLink?: boolean;
}

export default function FeatureDescription(props: Props) {
    const { t } = useTranslation('home')

    return (
        <div className={cx("flex flex-col justify-center self-end", props.textPosition == TextToImagePosition.End ? 'items-center' : 'items-start')} style={{ flex: "1 1 0" }}>
            <div className="space-y-5">
                <motion.div layoutId="image">
                    <img src={props.cubeSrc} alt="cube" className="inline" />
                </motion.div>
                <motion.div
                    layoutId="featureHeader"
                    className="feature-header">
                    <span className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap">{props.header}</span>
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
        // <div className={cx('flex relative  z-10', position())}>
        //     {/* {props.children} */}
        //     <div className="flex justify-items-start z-10">

        //         <div className="space-y-4">
        //             <motion.div layoutId="image">
        //                 <img src="/cube_1.svg" alt="cube" className="inline" />
        //             </motion.div>
        //             <motion.div
        //                 layoutId="featureHeader"
        //                 className="feature-header">
        //                 <span className="break-words text-4xl font-extrabold whitespace-pre-wrap">{props.header}</span>
        //             </motion.div>
        //             <motion.div
        //                 layoutId="featureSubHeader"
        //                 className="feature-subheader mt-4 whitespace-pre-wrap">
        //                 {props.subHeader}
        //             </motion.div>
        //             {
        //                 !props.notLink ?
        //                     (
        //                         <div>
        //                             <Link href="/features/1" passHref>
        //                                 <a className="relative font-main bg-none border-0 text-left cursor-pointer  py-3 block text-base font-semibold main-color ml-0">
        //                                     {t('LearnMore')}
        //                                     <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
        //                                 </a>
        //                             </Link>
        //                         </div>
        //                     ) : <></>
        //             }

        //         </div>
        //     </div>
        // </div>
    )
}