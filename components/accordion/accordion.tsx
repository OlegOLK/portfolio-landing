import { FunctionComponent, useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'
import { Collapse } from 'react-collapse';
import cx from 'classnames';
export type AccordtionProps = {
    header: string;
    subHeader: string;
    isToggled?: boolean;
}

export const Accordion: FunctionComponent<AccordtionProps> = ({ header, subHeader, isToggled }) => {
    const [toggled, setToggled] = useState<boolean>(isToggled);

    const handleClick = () => {
        setToggled(!toggled);
    }

    return (
        <div className="flex justify-start w-full h-full cursor-pointer" onClick={handleClick}>
            <div className="flex flex-wrap py-5 items-center bg-main-color flex-grow  rounded-md align-middle" >
                <p className="text-white ml-12 font-bold text-2xl">{header}</p>

                <Collapse isOpened={toggled}>
                    <div className="text-white ml-12 mt-5 mr-16 font-semibold text-base">
                        <p >{subHeader}</p>
                    </div>
                </Collapse>
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