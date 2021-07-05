import { BadgeCheckIcon } from '@heroicons/react/outline'

export default function DisctordPopup() {
    return (
        <div className="fixed bottom-6 right-44 flex justify-end">
            <button
                className="shadow-lg py-3 block text-base font-semibold rounded-lg h-16 w-72 ">
                <BadgeCheckIcon className="inline h-6 w-6 mr-2"></BadgeCheckIcon>

                Get Started
            </button>
        </div>
    )
}