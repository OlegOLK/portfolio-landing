import { FunctionComponent, useState, useRef } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'
import cx from 'classnames';

export type AccordtionProps = {
    header: string;
    subHeader: string;
    isToggled?: boolean;
}

export const Accordion: FunctionComponent<AccordtionProps> = ({ header, subHeader, isToggled }) => {
    const [toggled, setToggled] = useState<boolean>(isToggled);
    const subHeaderRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setToggled(!toggled);
    }

    const growSize = () => {
        var growDiv = subHeaderRef.current;
        if (!growDiv || growDiv.clientHeight) {
            return 0;
        } else {

            return growDiv.scrollHeight + "px";
        }
    }

    return (
        <div className="flex justify-start w-full h-full cursor-pointer" onClick={handleClick}>
            <div className="flex flex-wrap py-5 items-center bg-main-color flex-grow  rounded-md align-middle" >
                <div>
                    <p className="text-white ml-12 font-bold text-2xl">{header}</p>

                </div>
                <div id="collapse" ref={subHeaderRef} aria-hidden={toggled} style={{height: growSize()}} className={cx(!toggled ?
                    "h-0 overflow-hidden" :
                    "overflow-visible")}>
                    <div className="text-white ml-12 mt-5 mr-16 font-semibold text-base">
                        <p >{subHeader}</p>
                    </div>
                </div>
            </div>

            <div className="flex-none">
                <button id="accordion-toggle-btn" className="relative border-0 bg-transparent flex items-center w-10 h-10 mt-5  "
                    onClick={handleClick}>

                    <MinusIcon className={cx("absolute icon-minus inline-block main-color", toggled ? 'toggle' : 'untogle')} />
                    <PlusIcon className={cx("absolute icon-plus inline-block main-color", toggled ? 'toggle' : 'untogle')} />
                </button>
            </div>
        </div>

    )
}