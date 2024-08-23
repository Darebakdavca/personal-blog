export default function Page() {
    return (
        <>
            <div className="border-b-4 border-blue-300 pb-4 text-center">
            <h2 className="text-2xl">Socials</h2>
            </div>
            <div className="mt-4 rounded-xl bg-blue-500 p-5 text-center text-white">
                <p>You can find me on social media:</p>
                <div className="mt-4 flex content-center justify-center">
                    <div className="w-2/3">
                        <ul className="flex flex-col justify-center rounded-xl bg-blue-600 p-4 *:rounded-xl *:py-4 hover:*:bg-blue-700">
                            <li><a  href="https://www.linkedin.com/in/david-brablc-764749225/" target="_blank">LinkedIn</a></li>
                            <li><a  href="https://www.facebook.com/david.brablc.7" target="_blank">Facebook</a></li>
                            <li><a  href="https://www.instagram.com/davidbrablc/" target="_blank">Instagram</a></li>
                            <li><a  href="https://github.com/Darebakdavca" target="_blank">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    );
}