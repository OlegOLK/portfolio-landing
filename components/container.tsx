import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className="inset-0 mx-2 lg:mx-72 h-full flex justify-between flex-wrap">
            {children}
        </div>
    )
}