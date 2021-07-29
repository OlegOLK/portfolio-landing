import cx from 'classnames';
import { TextToImagePosition } from './feature.description';

type Props = {
    src: string;
    alt: string;
    textPosition: TextToImagePosition;
}

export default function FeatureImage(props: Props) {

    return (

        <div className={cx("flex flex-col justify-center z-10 self-start",
            props.textPosition == TextToImagePosition.End ? 'items-center' : 'items-start')} style={{ flex: "1 1 0" }}>
            <img
                className="w-auto h-auto block"
                src={props.src}
                alt={props.alt} />
        </div>
    )
}