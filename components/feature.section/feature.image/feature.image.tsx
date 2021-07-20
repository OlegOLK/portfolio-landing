import cx from 'classnames';

export interface FeatureImageProps{
    src: string;
}

export default function FeatureImage(props: FeatureImageProps) {

    return (
        // ,  position()
        <div className={cx("flex items-start")}>
            <img
                className="w-auto"
                src={props.src}>
            </img>
        </div>
    )
}