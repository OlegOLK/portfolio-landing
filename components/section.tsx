import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export default function Section(props: Props) {
    return (
        <section className="grid z-10  grid-cols-1 lg:grid-cols-2 w-full col-span-2 gap-x-0 lg:gap-x-4 gap-y-12 lg:gap-y-44">
            {props.children}
        </section>
    )
}

