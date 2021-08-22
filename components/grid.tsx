import { ReactNode } from "react"
import cx from 'classnames';

type Props = {
    children: ReactNode,
    fullScreen?: boolean,
}

export default function Grid({ children, fullScreen }: Props) {
    return (
        <div className={cx("grid grid-cols-12 gap-5 relative")} style={{ width: "1120px", minHeight: fullScreen ? "90vh" : "100%" }}>
            {children}
        </div>
    )
}