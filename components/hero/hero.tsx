import { ReactNode } from 'react';
import Grid from '../grid';

type Props = {
    text: ReactNode,
    image: ReactNode,
    children: ReactNode,
    fullScreen?: boolean
}

export default function Hero({ text, image, children, fullScreen }: Props) {
    return (
        <Grid fullScreen={fullScreen}>

            <div className="col-start-4 col-span-6 text-center z-40" style={{ marginTop: "212px" }}>
                {text}
            </div>
            {children}
        </Grid>
    )
}