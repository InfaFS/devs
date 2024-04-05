import Link from "next/link"
export default function Categorias () {
    return (
        <>
        <div>
            <h1>Categoria 1</h1>
            <lu>
                <li>
                    <Link href="/tienda/categorias/computadoras">Computadoras</Link>
                </li>
            </lu>
        </div>
        </>
    )
}