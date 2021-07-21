export default function VideSection() {

    return (
        <div className="h-screen z-40 relative">
            <div className="relative w-full video bg-gray-400 mt-16">
                <div className="absolute inset-y-1/2 play-button bg-red-500 flex items-center justify-center">
                    <div className="playIcon -ml-1">
                        <svg width="64" height="62" viewBox="0 0 64 62" fill="#7DC7A8" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1933 16.6405C19.1933 13.1764 22.9433 11.0113 25.9433 12.7434L58.9433 31.7959C61.9433 33.528 61.9433 37.8581 58.9433 39.5902L25.9433 58.6427C22.9433 60.3748 19.1933 58.2097 19.1933 54.7456L19.1933 16.6405Z" fill="#7DC7A8" stroke="#F3F3F3" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}