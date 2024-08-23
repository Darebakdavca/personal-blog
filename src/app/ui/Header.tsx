import Link from "next/link";

export default function Header() {
    return (
        <header className="row-span-1 flex w-full items-center justify-between bg-blue-500 px-8 py-5">
            <h1 id="main-title-of-page" className="text-3xl"><Link href="/">David Brablc</Link></h1>
            <nav id="nav-bar" className="flex items-center gap-4 text-xl">
                <div className="hover:text-white">
                    <Link href="/posts">Posts</Link>
                </div>
                <div className="hover:text-white">
                    <Link href="/about-me">About me</Link>
                </div>
                <div className="hover:text-white">
                    <Link href="/cv">CV</Link>
                    </div>
                <div className="hover:text-white">
                    <Link href="/socials">Socials</Link>
                    </div>
                <Link className="block rounded-3xl bg-gray-400 px-5 py-2 text-white hover:bg-gray-500" href="/">Return to home page</Link>
            </nav>
        </header>
    );
}