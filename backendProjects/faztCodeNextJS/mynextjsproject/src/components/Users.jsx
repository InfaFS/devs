"use client"
import { useEffect } from "react"

 function Users(){

    useEffect(() => {
        console.log('loaded! :D')
       // alert('loaded!')
    },[])

    return (
        <div>Users</div>
    )
}
export default Users