import Grid from "../grid";
import cx from 'classnames';
import { ReactNode } from "react";

type Props = {
    left: ReactNode,
    right: ReactNode,
    textRight?: boolean,
    children?: ReactNode
}

export default function SectionWrapper({ left, right, textRight, children }: Props) {
    return (
        <section className="relative flex justify-center feature-section section-heigh">
            {children}
            <Grid>
                <div className={cx("relative z-10", textRight ? "col-span-4 lg:col-span-5 self-center" : "mx-4 mt-10 lg:mt-0 lg:mx-0 self-center col-span-4 lg:col-span-6")}>
                    {left}
                </div>
                <div className={cx("relative z-10", textRight ? "mt-10 lg:mt-0 mx-4 lg:mx-0 col-start-1 lg:col-start-8 self-center col-span-4 lg:col-span-5" : "grid-row-1 self-center col-span-4 lg:col-span-5 col-start-1 lg:col-start-8")}>
                    {right}
                </div>
            </Grid>
        </section>
    )
}