import { Fragment } from "react"

export enum CubePosition {
    None,
    Vertical,
    HorizontalLeft,
    HorizontalRigh
}

type CubeProps = {
    position: CubePosition;
}

export default function Cube(props: CubeProps) {
    return (
        <>
            {
                props.position == CubePosition.None ? <></> :
                    props.position == CubePosition.HorizontalLeft ?
                        (
                            <div className="hidden lg:block absolute -bottom-14 -left-48 z-0">
                                <figure className="cube inline-block mr-4 "></figure>
                                <figure className="cube inline-block"></figure>
                            </div>
                        ) :
                        props.position == CubePosition.HorizontalRigh ?
                            (
                                <div className="hidden lg:block absolute -bottom-14 -right-44 z-0">
                                    <figure className="cube inline-block mr-4 "></figure>
                                    <figure className="cube inline-block"></figure>
                                </div>
                            ) :
                            (
                                <div className="hidden lg:block absolute top-0 -right-36 z-0">
                                    <figure className="cube-vertical"></figure>
                                    <figure className="cube-vertical"></figure>
                                </div>
                            )
            }
        </>
    )

}