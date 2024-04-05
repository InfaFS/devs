"use client"
import { useRouter } from "next/navigation"
import { useEffect,useState} from "react"
export default function NewPage({params}){
    const router = useRouter()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    useEffect(() => {
        if(params.id) {
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDescription(data.description)
            })
        }
     
    },[])



    const onSubmit = async (e) => {
        e.preventDefault()

        if (params.id) {
         const res = await fetch(`/api/tasks/${params.id}`, {
                method:"PUT",
                body: JSON.stringify({title,description}),
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
         const data = await res.json()
         console.log(data)
        } else {

        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({title,description}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
          const data = await res.json()
        }
        
        router.push('/')
        router.refresh()
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="bg-slate-400 p-10 rounded-md lg:w-1/4 md:w-1/2"
            onSubmit={onSubmit} >
                <label htmlFor="title" className="font-bold text-sm">
                    Titulo de tarea
                </label>
                <input className="border border-gray-400 p-2 mb-4 w-full text-black"
                type="text"
                placeholder="Titulo"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                ></input>

                <label htmlFor="description" className="font-bold text-sm">
                    Descripcion de la tarea
                </label>

                <textarea rows="3"
                className="border border-gray-400 p-2 mb-4 w-full text-black" type="text"
                placeholder="Contenido"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                ></textarea>

                <div className="flex justify-between">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"> Crear
                </button>

                <button
                className="bg-violet-500 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded "
                type="button"
                onClick={() => {router.push('/')
                router.refresh()}}> Home
                </button>

                {
                    params.id && (
                        <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                        type="button"
                        onClick={async () => { const res = await
                            fetch(`/api/tasks/${params.id}`,{
                                method: "DELETE",
                            })
                            const data = await res.json
                            console.log(data)
                            router.push('/')
                            router.refresh()}

                        }> Delete
                        </button>
                    )
                }

                </div>
            
            </form>
        </div>
    )
}
