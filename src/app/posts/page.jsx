import { Posts } from "./posts";
import {posts} from "./data"


export default function Page() {
    return (
        <div className="text-center">
            <section>
                <div className="border-b-4 border-blue-300 pb-4 text-center">
                    <h1 className="text-4xl font-bold">Posts</h1>
                </div>
                <p className="mt-4 text-lg">Here you can find all the posts posted by me.</p>
            </section>
            <section className="mb-10">
                <Posts posts={posts} />
            </section>
        </div>
    )
}