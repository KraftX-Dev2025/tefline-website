import Link from "next/link";

export default function KulkarniPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <Link
                href="/team"
                className="text-blue-600 hover:underline mb-6 inline-block"
            >
                &larr; Back to Team
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-8 rounded-lg">
                    <img
                        src="/placeholder.webp"
                        alt="Dr. Kulkarni Adarsh"
                        className="w-48 h-48 rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold text-center">
                        Dr. Kulkarni Adarsh
                    </h1>
                    <p className="text-xl text-center">
                        Chairman, Advisory Board
                    </p>
                    <p className="text-center">Medical Advisory Council</p>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                    <p className="mb-4">
                        Dr. Kulkarni Adarsh is a distinguished UK-trained
                        physician and a prominent critical care consultant at
                        the Manipal Hospitals, the flagship hub of India's
                        largest healthcare network.
                    </p>
                    <p className="mb-4">
                        After building a flourishing practice in London, Dr.
                        Kulkarni returned to India, receiving recognition for
                        his gravitas and catalytic contributions to health and
                        wellness science.
                    </p>
                    <p className="mb-4">
                        At Tefline, Dr. Kulkarni provides tactical guidance and
                        clinical oversight as Chairman of the Medical Advisory
                        Council, upholding the highest standards of excellence.
                        His role is exclusively consultative, maintaining
                        complete alignment with his professional commitments at
                        the Manipal Hospitals.
                    </p>
                    <p className="text-sm italic">
                        Note: Dr. Kulkarni serves in a strictly advisory
                        capacity and is not formally employed as an officer,
                        director or other member in Tefline's organizational
                        structure.
                    </p>
                </div>
            </div>
        </div>
    );
}
