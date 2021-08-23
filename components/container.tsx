import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className="w-full relative">
            <div className="flex justify-center lg:mx-0 w-full relative">
                {children}
            </div>
        </div>
        
    )
}