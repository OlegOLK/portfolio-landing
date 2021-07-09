import { ArrowNarrowDownIcon } from '@heroicons/react/outline'

export default function More() {
    return (
        <div className="absolute bottom-20  mx-auto">
            <a href="#features"
                className="text-xs more-about relative bg-none border-0  py-3 block font-semibold">
                <ArrowNarrowDownIcon className="inline h-3 w-3 mr-2" aria-hidden="true" />
                                    MORE ABOUT THE APP
                                </a>
        </div>
    )
}