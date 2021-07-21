import cx from 'classnames';

export interface FeatureImageProps {
    src: string;
    alt: string;
}

export default function FeatureImage(props: FeatureImageProps) {

    return (
        <div className={cx("flex items-start")}>
            <img
                className="w-auto h-auto"
                src={props.src}
                alt={props.alt} />
        </div>
    )
}