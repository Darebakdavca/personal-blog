export function Posts({posts}) {
    return (
        <div className="mt-8 flex flex-col items-center justify-center *:w-1/2 *:rounded-md *:bg-blue-500 *:p-3 *:shadow-lg">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

function Post({post}) {
    return (
        <article className="mb-4">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
        </article>
    );
}