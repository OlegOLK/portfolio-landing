import cx from 'classnames';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    alignRight?: boolean,
    header: string,
    subHeader: string
}

export default function SectionText({ children, alignRight, header, subHeader }: Props) {
    return (
        <>
            {children}
            <h4 className="break-words text-xl lg:text-4xl font-extrabold whitespace-pre-wrap" style={{ marginTop: "16px" }}>
                {header}
            </h4>
            <h6 className="feature-subheader mt-4 whitespace-pre-wrap" style={{ marginTop: "32px" }}>
                {subHeader}
            </h6>
            <div className="bg-main-color rounded-md"
                style={{ marginTop: "24px", width: "84px", height: "4px" }}> </div>
        </>
    )
}