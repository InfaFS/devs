"use client"
import { useParams } from "next/navigation"
export default function UserPage(){
    const params = useParams()
    return(
        <div>
            <button onClick={() => {
                console.log(params)
            }}>
                Click
            </button>
        </div>
        
    )
}