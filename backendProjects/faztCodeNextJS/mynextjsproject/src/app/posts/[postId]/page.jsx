import { Suspense } from "react"
import Posts from "../page"
async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json(res)
    console.log(data)
    return data   
}
async function Page({params}) {
   const print = await loadPost(params.postId)
    return (
        <div>
           <h1>Post page {params.postId}</h1> 
           <h3>{print.title}</h3>
            <p>{print.body}</p>
            
            <hr></hr>
            <h3>Otras publicaciones</h3>
            <Suspense fallback={<div>Cargando Publicaciones... </div>}>
                <Posts/>   
            </Suspense>
        </div>
    )
}

export default Page