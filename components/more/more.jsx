import { ArrowNarrowDownIcon } from '@heroicons/react/outline'

export default function More() {
    return (
        <div className="fixed bottom-4  mx-auto">
            <button
                className="text-xs more-about relative bg-none border-0  py-3 block font-semibold">
                <ArrowNarrowDownIcon className="inline h-3 w-3 mr-2" aria-hidden="true" />
                                    MORE ABOUT THE APP
                                </button>
        </div>
    )
}