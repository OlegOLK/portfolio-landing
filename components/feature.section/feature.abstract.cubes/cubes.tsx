export enum CubePosition {
    None,
    Vertical,
    HorizontalLeft,
    HorizontalRigh
}

export interface CubeProps {
    position: CubePosition;
}

export default function Cube(props: CubeProps) {
    return (
        <>
            {
                props.position == CubePosition.None ? <></> :
                    props.position == CubePosition.HorizontalLeft ?
                        (
                            <div className="absolute -bottom-14 -left-48">
                                <figure className="cube inline-block mr-4 "></figure>
                                <figure className="cube inline-block"></figure>
                            </div>
                        ) :
                        props.position == CubePosition.HorizontalRigh ?
                            (
                                <div className="absolute -bottom-14 -right-44">
                                    <figure className="cube inline-block mr-4 "></figure>
                                    <figure className="cube inline-block"></figure>
                                </div>
                            ) :
                            (
                                <div className="absolute top-0 -right-36">
                                    <figure className="cube-vertical"></figure>
                                    <figure className="cube-vertical"></figure>
                                </div>
                            )
            }
        </>
    )

}