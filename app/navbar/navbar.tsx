import Link from 'next/link'
function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <ul className="flex justify-center items-center gap-8 p-4">
                <li>
                    <Link className="text-gray-700 hover:text-blue-600 " href="/">Home</Link>
                </li>
                <li>
                    <Link className="text-gray-700 hover:text-blue-600" href="/about">About</Link>
                </li>
                <li>
                    <Link className="text-gray-700 hover:text-blue-600 " href="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="text-gray-700 hover:text-blue-600 " href="/feedback">Feedback</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar