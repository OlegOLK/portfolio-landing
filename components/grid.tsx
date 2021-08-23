import { ReactNode } from "react"
import cx from 'classnames';

type Props = {
    children: ReactNode,
    fullScreen?: boolean,
    textRight?: boolean
}

export default function Grid({ children, fullScreen, textRight }: Props) {
    return (
        <div className={cx("grid grid-cols-4 lg:grid-cols-12 gap-1 lg:gap-5 relative grid-width")} style={{ minHeight: fullScreen ? "100vh" : "100%" }}>
            {children}
        </div>
    )
}