export default function Page() {
    return (
        <>
            <div className="border-b-4 border-blue-300 pb-4 text-center">
                <h2 className="text-4xl font-bold">About Me</h2>
            </div>
            <div className="mt-4 rounded-md bg-blue-500 p-6">
                <p className="text-white">
                    I am a software developer with a passion for web development. 
                    I have created this website as my freetime project, because I wanted
                    to broaden my knowledge in the React javascript library.
                </p>
            </div>
            <div className="mt-4 rounded-md bg-blue-500 p-6">
                <h2 className="mb-2">I have skills in these technologies:</h2>
                <ul className="ml-3 *:mb-2">
                    <li>
                        CSS
                        <ul className="ml-5 *:list-disc">
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        Programming languages:
                        <ul className="ml-5 *:list-disc">
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </li>
                    <li>
                        Frameworks/Libraries:
                        <ul className="ml-5 *:list-disc">
                            <li>React</li>
                            <li>Nextjs</li>
                            <li>Flask</li>
                            <li>Django</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}