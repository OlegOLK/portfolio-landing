import cx from 'classnames';

type Props = {
    src: string;
    alt: string;
}

export default function FeatureImage(props: Props) {

    return (
        <div className={cx("flex items-start")}>
            <img
                className="w-auto h-auto"
                src={props.src}
                alt={props.alt} />
        </div>
    )
}