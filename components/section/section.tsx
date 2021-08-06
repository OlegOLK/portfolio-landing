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
        <section className="relative flex justify-center">
            <Grid>
                <div className={cx("col-span-6 relative z-10", textRight ? "col-span-5 " : "self-center col-span-6")}>
                    {left}
                </div>
                <div className={cx("relative z-10", textRight ? "col-start-8 self-center col-span-6" : "col-span-5  col-start-8")}>
                    {right}
                </div>
            </Grid>
            {children}
        </section>
    )
}