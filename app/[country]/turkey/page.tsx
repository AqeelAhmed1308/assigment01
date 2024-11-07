import Link from 'next/link';

export default function Turkey() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
                <header className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-blue-600" aria-label="Turkey">Turkey</h1>
                </header>
                <section className="space-y-4">
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Name:</span> Turkey
                    </div>
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Population:</span> 87,473,805
                    </div>
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Capital:</span> Ankara
                    </div>
                </section>
                <div className="mt-6 text-center">
                    <Link href="/" aria-label="Go back to countries list" className="inline-block text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-50"> Go Back to Countries List
                    </Link>
                </div>
            </div>
        </div>
    );
}
