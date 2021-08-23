import { ReactNode } from 'react';
import Grid from '../grid';

type Props = {
    text: ReactNode,
    children: ReactNode,
    fullScreen?: boolean
}

export default function Hero({ text, children, fullScreen }: Props) {
    return (
        <Grid fullScreen={fullScreen}>

            <div className="col-start-1 col-span-4 lg:col-start-4 lg:col-span-6 text-center z-40" style={{ marginTop: "212px" }}>
                {text}
            </div>
            {children}
        </Grid>
    )
}