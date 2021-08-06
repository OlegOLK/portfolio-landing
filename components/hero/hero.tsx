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
            <div className="col-span-6" style={{ marginTop: "231px" }}>
                {text}
            </div>

            <div className="col-start-8 col-span-5 relative z-40" style={{ marginTop: "186px" }}>
                {image}
            </div>
            {children}
        </Grid>
    )
}