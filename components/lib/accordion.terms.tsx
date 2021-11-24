import { FunctionComponent, useState, useRef } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'
import cx from 'classnames';
import terms from '../../styles/Terms.module.css';

export type AccordtionProps = {
    header: string;
    subHeader?: string;
    isToggled?: boolean;
    subHeaders?: React.ReactNode
}

export const AccordionTerms: FunctionComponent<AccordtionProps> = ({ header, subHeader, isToggled, subHeaders }) => {
    const [toggled, setToggled] = useState<boolean>(false);
    const subHeaderRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setToggled(!toggled);
    }

    const growSize = () => {
        var growDiv = subHeaderRef.current;
        if (!toggled || !growDiv || growDiv.clientHeight) {
            return 0;
        } else {

            return growDiv.scrollHeight + "px";
        }
    }

    return (
        <>
            <div className="col-span-9 col-start-2 mb-10 border-t border-solid border-gray-300"></div>
            <div className={cx('col-start-2 col-span-8 flex-grow pb-10')}>
                <p className={cx('col-start-2 col-span-8 ', terms.termHeader)}>{header}</p>

                <div id="collapse" ref={subHeaderRef}
                    aria-hidden={toggled}
                    style={{ height: growSize() }} className={cx(
                        !toggled ?
                            "h-0 overflow-hidden" :
                            "overflow-visible")}>
                    <div className={cx("text-black mt-5")}>
                        {subHeaders ? (
                            subHeaders
                        ) : (
                            <p className={terms.termText}>{subHeader}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="col-start-10 col-span-1">
                <button aria-label="expand-accordion" className="accordion-toggle-btn relative border-0 bg-transparent flex items-center w-10 h-10"
                    onClick={handleClick}>

                    <MinusIcon className={cx("absolute icon-minus inline-block color-main", toggled ? 'toggle' : 'untogle')} />
                    <PlusIcon className={cx("absolute icon-plus inline-block color-main", toggled ? 'toggle' : 'untogle')} />
                </button>
            </div>
        </>

    )
}