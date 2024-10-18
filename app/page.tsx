import Link from 'next/link'
export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center mt-10 bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-blue-600 shadow-lg p-6 mb-4 bg-white rounded-lg">Countries</h1>
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li >
            <Link className="text-gray-800 hover:text-blue-800 " href="/country/pakistan">Pakistan</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-blue-800" href="/country/turkey">Turkey</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-blue-800" href="/country/iran">Iran</Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-blue-800" href="/country/iraq">Iraq</Link>
          </li>
        </ul>


      </div>
    </div>
  );
}