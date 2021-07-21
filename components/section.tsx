import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export default function Section(props: Props) {
    return (
        <section className="grid grid-cols-2 w-full col-span-2 gap-x-4 gap-y-44">
            {props.children}
            {/* {
                props.ltr ? (
                    <>
                        <FeatureDescription
                            textPosition={props.textPosition}
                            header={props.header}
                            subHeader={props.subHeader}
                            cubeProps={props.cubeProps} />

                        <FeatureImage alt={props.header} src={props.imageSrc} />
                    </>
                ) :
                    (
                        <>
                            <FeatureImage alt={props.header} src={props.imageSrc} />

                            <FeatureDescription
                                textPosition={props.textPosition}
                                header={props.header}
                                subHeader={props.subHeader}
                                cubeProps={props.cubeProps} />
                        </>
                    )
            } */}

        </section>
    )
}

