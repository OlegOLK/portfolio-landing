import { ArrowRightIcon } from '@heroicons/react/outline'
import cx from 'classnames';
import Cube, { CubeProps } from '../feature.abstract.cubes/cubes';
import useTranslation from 'next-translate/useTranslation'

export enum TextToImagePosition {
    Top,
    Middle,
    Bottom
}

export interface FeatureDescriptionProps {
    header: string;
    subHeader: string;
    textPosition: TextToImagePosition;
    cubeProps: CubeProps
}

export default function FeatureDescription(props: FeatureDescriptionProps) {
    const { t } = useTranslation('home')

    const position = () => {
        return props.textPosition == TextToImagePosition.Bottom ? 'items-end' :
            props.textPosition == TextToImagePosition.Top ? 'items-start' :
                'items-center';
    }
    return (
        <div className={cx('flex relative', position())}>
            <Cube position={props.cubeProps.position} />

            <div className="flex justify-items-start">
                <div>
                    <img src="cube_1.svg" className="inline" />
                </div>
                <div>
                    <div className="feature-header ml-1">
                        <span className="break-words text-4xl font-extrabold whitespace-pre-wrap">{props.header}</span>
                    </div>
                    <div className="feature-subheader mt-4 whitespace-pre-wrap">
                        {props.subHeader}
                    </div>
                    <div>
                        <button
                            className="relative font-main bg-none border-0 text-left  py-3 block text-base font-semibold main-color ml-0">
                            {t('Learn more')}
                            <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}