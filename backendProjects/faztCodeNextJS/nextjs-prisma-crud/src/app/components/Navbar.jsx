const { default: Link } = require("next/link");
export default function Navbar() {
    return (
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center py-3">
            <h3 className="font-bold text-3xl hover:text-pink-200">
                NextCRUD
            </h3>

            <ul className="flex gap-x-2 text-lg font-bold">
                <li>
                    <Link href="/" className="text-slate-500 hover:text-slate-100">
                    Tasks
                    </Link>
                </li>

                <li>
                    <Link href="/new" className="text-slate-500 hover:text-slate-100">
                    New
                    </Link>
                </li>

                <li>
                    <Link href="/about" className="text-slate-500 hover:text-slate-100">
                    About
                    </Link>
                </li>
            </ul>

            </div>
           
        </nav>
    )
}
