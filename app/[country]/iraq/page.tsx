import Link from 'next/link';

export default function Iraq() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Iraq</h1>
        </header>
        <section className="space-y-4">
          <div className="font-semibold text-gray-800">
            <span className="font-medium">Name:</span> Iraq
          </div>
          <div className="font-semibold text-gray-800">
            <span className="font-medium">Population:</span> 46,328,593
          </div>
          <div className="font-semibold text-gray-800">
            <span className="font-medium">Capital:</span> Baghdad
          </div>
        </section>

        {/* Back to Countries Link */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Go Back to Countries List
          </Link>
        </div>
      </div>
    </div>
  );
}
