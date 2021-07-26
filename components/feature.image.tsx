import cx from 'classnames';

type Props = {
    src: string;
    alt: string;
}

export default function FeatureImage(props: Props) {

    return (
        <div className={cx("flex items-start  z-10")}>
            <img
                className="w-auto h-auto"
                src={props.src}
                alt={props.alt} />
        </div>
    )
}