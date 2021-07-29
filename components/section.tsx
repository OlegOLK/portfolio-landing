import { ReactNode } from 'react';
import cx from 'classnames';

type Props = {
    children: ReactNode
    reverseOnMd?: boolean;
}

export default function Section(props: Props) {
    return (
        // <section className="z-10 flex justify-start w-full col-span-2 ml-96 mr-96">
        <section className={cx("flex lg:flex-row flex-wrap inset-0 my-10 gap-y-6 lg:gap-y-0 lg:my-24", props.reverseOnMd ? 'flex-col-reverse' : 'flex-col ')} style={{ flexBasis: "100%" }}>
            {props.children}
        </section>
    )
}

