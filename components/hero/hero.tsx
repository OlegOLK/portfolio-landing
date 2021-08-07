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
            <div className="col-span-6 lg:mt-44 2xl:mt-56">
                {text}
            </div>

            <div className="col-start-8 lg:mt-36 2xl:mt-52 col-span-5 relative z-40">
                {image}
            </div>
            {children}
        </Grid>
    )
}