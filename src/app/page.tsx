import Link from "next/link";
import { Posts } from "./posts/posts";
import { posts } from "./posts/data"

export default function Home() {
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="mt-10 text-center">
      <section className="mb-10">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4 text-lg">Hi, I'm David. I am not a blogger, this is just a small personal blog project
           to try out Frontend technologies.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Recent Posts</h2>
        <Posts posts={recentPosts}/>
        <Link className="text-blue-600" href="/posts">See all posts...</Link>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">Do you want to know more about me? Checkout the <Link className="text-blue-600" href="/about-me">about me page</Link> <br></br> 
        or download my CV <Link href="/cv" className="text-blue-600">here.</Link></p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4">Feel free to <Link href="/socials" className="text-blue-600">get in touch</Link> with me.</p>
      </section>
    </div>
  );
}