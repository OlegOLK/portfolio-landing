import styles from '../styles/Section.module.css'
import cx from 'classnames';
import Grid from './gird';
import { ReactNode } from 'react';

type Props = {
    header: string,
    subHeader: string,
    cube: ReactNode,
    imgSrc: string,
    imgAlt: string,
    ltr: boolean,
    index: number,
    verticalCubes?: ReactNode
}


function GridSection({ header, cube, imgAlt, imgSrc, subHeader, ltr, index, verticalCubes }: Props) {
    return (
        <>
            {verticalCubes}           
            <Grid additionalStyles="h-full" >
                <div className={cx(ltr ? 'col-start-1' : 'col-start-8', "col-span-5 self-center z-40")}>
                    <picture>
                        {cube}
                    </picture>
                    <p className={cx("text-h2 text-left", styles.header)}>{header}</p>

                    <p className="text-default text-left mt-8">
                        {subHeader}
                    </p>

                    <figure className="mt-6 bg-color-main h-1 w-22 rounded-sm">
                    </figure>
                </div>

                <picture className={cx(ltr ? 'col-start-8' : 'col-start-1', "col-span-5 self-center")} style={{ gridRow: 1 }}>
                    <img height="455" width="455" alt={imgAlt} src={imgSrc} />
                </picture>
            </Grid >
        </>
    )
}

function FlexSection({ header, cube, imgAlt, imgSrc, subHeader, ltr, index }: Props) {
    return (
        <>
            <div className="w-full bg-gray-100 flex justify-center items-center" style={{ height: "375px" }}>
                <Grid>
                    <picture className="col-start-1 col-span-4 justify-self-center">
                        <img height="300" width="300" alt={imgAlt} src={imgSrc} />
                    </picture>
                </Grid>
            </div>

            <div className="w-full">
                <Grid additionalStyles="mt-11 mb-20">
                    <div className="col-start-1 col-span-4">
                        <picture>
                            {cube}
                        </picture>
                        <p className={cx("text-h2 text-left", styles.header)}>{header}</p>

                        <p className="text-default text-left mt-8">
                            {subHeader}
                        </p>

                        <figure className="mt-6 bg-color-main h-1 w-22 rounded-sm">
                        </figure>
                    </div>
                </Grid>
            </div>
        </>
    )
}


export default function Section({ header, cube, imgAlt, imgSrc, subHeader, ltr, index, verticalCubes }: Props) {
    return (
        <>
            <section className={cx(
                "feature w-full hidden lg:flex justify-center items-center relative",
                styles.section,
                index % 2 === 1 ? styles.featurBg : "")}>
                <GridSection
                    cube={cube}
                    header={header}
                    imgAlt={imgAlt}
                    imgSrc={imgSrc}
                    ltr={ltr}
                    subHeader={subHeader}
                    index={index}
                    verticalCubes={verticalCubes}
                />
            </section>

            <section className="flex lg:hidden w-screen flex-col justify-center items-center relative">
                <FlexSection
                    cube={cube}
                    header={header}
                    imgAlt={imgAlt}
                    imgSrc={imgSrc}
                    ltr={ltr}
                    subHeader={subHeader}
                    index={index}
                />
            </section>
        </>
    )
}

