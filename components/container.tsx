import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    outer: ReactNode
}

export default function Container({ children, outer }: Props) {
    return (
        <div className="w-full relative">
            {outer}
            <div className="flex justify-center w-full relative">
                {children}
            </div>
        </div>
        
    )
}