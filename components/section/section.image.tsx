import { ReactNode } from "react"
import cx from 'classnames';

type Props = {
    children: ReactNode,
    alignRight?: boolean,
    imgSrc: string,
    alt: string
}

export function SectionImage({ alignRight, children, imgSrc, alt }: Props) {
    return (
        <div className={cx("col-span-5 relative z-10", alignRight ? "col-start-8" : "")}>
            <img src={imgSrc} alt={alt} className="block w-full h-auto relative z-10"/>
            {children}
        </div>
    )
}