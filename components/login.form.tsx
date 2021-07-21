type Props = {
    heading: string;
    google: string;
    apple: string;
    terms: string;
}

export const LoginForm = ({ apple, google, heading, terms }: Props) => {
    return (
        <div className="h-screen flex items-center justify-center align-middle">
            <div className="w-96 flex space-y-6 flex-col items-center justify-center align-middle">
                <p className="text-4xl w-full font-extrabold text-center">{heading}</p>
                <button className="ripple hover:opacity-90 hover:scale-105 shadow-lg w-full py-3 block text-base font-semibold bg-main-color rounded-lg text-white">
                    {google}</button>
                <button className="ripple hover:opacity-90 hover:scale-105 shadow-lg w-full py-3 block text-base font-semibold bg-main-color rounded-lg text-white">
                    {apple}</button>
                <p className="break-words w-full text-center font-medium text-sm leading-7">
                    {terms}
                </p>
            </div>
        </div>
    )
}