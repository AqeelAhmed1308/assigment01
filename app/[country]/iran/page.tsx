import Link from 'next/link';

export default function Iran() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
                <header className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-blue-600">Iran</h1>
                </header>
                <section className="space-y-4">
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Name:</span> Iran
                    </div>
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Population:</span> 91,820,398
                    </div>
                    <div className="font-semibold text-gray-800">
                        <span className="font-medium">Capital:</span> Tehran
                    </div>
                </section>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold"> Go Back to Countries List</Link>
                </div>
            </div>
        </div>
    );
}
