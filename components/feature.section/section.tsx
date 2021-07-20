import FeatureImage from './feature.image/feature.image';
import FeatureDescription, { TextToImagePosition } from './feature.description/feature.description';
import { CubeProps } from './feature.abstract.cubes/cubes';

export interface SectionProps {
    header: string;
    subHeader: string;
    imageSrc: string;
    ltr: boolean;
    textPosition: TextToImagePosition;
    cubeProps: CubeProps
}

export default function Section(props: SectionProps) {
    return (
        <section className="grid grid-cols-2 w-full col-span-2 gap-x-4 gap-y-44">
            {
                props.ltr ? (
                    <>
                        <FeatureDescription
                            textPosition={props.textPosition}
                            header={props.header}
                            subHeader={props.subHeader}
                            cubeProps={props.cubeProps} />

                        <FeatureImage src={props.imageSrc} />
                    </>
                ) :
                    (
                        <>
                            <FeatureImage src={props.imageSrc} />

                            <FeatureDescription
                                textPosition={props.textPosition}
                                header={props.header}
                                subHeader={props.subHeader}
                                cubeProps={props.cubeProps} />
                        </>
                    )
            }

        </section>
    )
}

