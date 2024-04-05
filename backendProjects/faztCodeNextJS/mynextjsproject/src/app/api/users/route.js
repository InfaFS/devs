import { NextResponse } from "next/server"

console.log(process.env.TOKEN)

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + process.env.TOKEN)
    const data = await res.json()
    return NextResponse.json(data)

}


export async function POST(request) {
    //const {nombre,apellido} = await request.json()
    //console.log(nombre,apellido)
    const data = await request.json()
    console.log(data)
    return NextResponse.json({message: "Creando datos!"})

}


export function PUT() {
    return NextResponse.json({message: "actualizando datos"})

}


export function DELETE() {
    return NextResponse.json({message: "eliminando datos!"})

}