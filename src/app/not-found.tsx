import Link from "next/link";

export default function NotFound(){
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl">Not Found</h1>
            <p>Could not find requested resource</p>
            <Link className="mt-10 underline text-xl" href="/">Return Home</Link>
        </div>
    )
}