import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="border-b-4 border-blue-300 pb-4 text-center">
            <h2 className="text-4xl font-bold">Socials</h2>
            </div>
            <div className="mt-4 rounded-xl bg-blue-500 p-5 text-center text-white">
                <p>You can find me on social media:</p>
                <div className="mt-4 flex content-center justify-center">
                    <div className="w-2/3">
                        <ul className="flex flex-col justify-center rounded-xl bg-blue-600 p-4 *:rounded-xl *:py-4 hover:*:bg-blue-700">
                            <Link href="https://www.linkedin.com/in/david-brablc-764749225/" target="_blank">LinkedIn</Link>
                            <Link href="https://www.facebook.com/david.brablc.7" target="_blank">Facebook</Link>
                            <Link href="https://www.instagram.com/davidbrablc/" target="_blank">Instagram</Link>
                            <Link href="https://github.com/Darebakdavca" target="_blank">Github</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    );
}