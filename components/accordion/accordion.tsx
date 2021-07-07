import { FunctionComponent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid'

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
            <div className="flex justify-start w-full h-full">
                <div className="flex flex-wrap py-5 items-center bg-main-color flex-grow  rounded-md align-middle" >
                    <p className="text-white ml-12 font-bold text-2xl	">{header}</p>

                    <div hidden={!toggled} className="w-full text-white ml-12 mt-6 mr-16 font-semibold	text-base	">
                        <p >{subHeader}</p>
                    </div>
                </div>
                <div className="flex-none">
                    <button className="border-0 bg-transparent flex items-center w-10 h-10 mt-5  "
                        onClick={handleClick}>
                        <PlusIcon className="inline-block main-color " />
                    </button>
                </div>
            </div>

        )
}