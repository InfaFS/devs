"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
//es un react client component por el 'use client'
function PostCard({post}) {
    const params = useParams()
    console.log({params})
    return(
        <div className="bg-gray-950 p-10">
        <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold">
            {post.id}. {post.title}</h3>
        </Link>
        <p className="text-slate-300">{post.body}</p>  
        <button onClick={() => {
            alert(`usted esta en el post ${post.id}`)
        }}>
            Click
        </button>
        </div>
    )

}

export default PostCard