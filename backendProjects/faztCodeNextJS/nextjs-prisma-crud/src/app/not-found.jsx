import Link from "next/link"

function NotFound() {
    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    404 | NOT FOUND
                </h1>
                <Link className="font-bold text-slate-500 hover:text-slate-100" href="/"> HOME </Link>
            </div>
        </section>
    )
}

export default NotFound