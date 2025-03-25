export default function Home() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">
                TEFLINE - The Epicenter For Lifestyle Medicine
            </h1>
            <p className="text-lg mb-8">
                Redefining modern healthcare by blending evidence-informed
                wellness with agentic intelligence.
            </p>

            {/* Placeholder for home page sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        YOUR LIFELINE
                    </h2>
                    <p>
                        Tefline is a healthtech startup that is redefining
                        modern healthcare.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        LIFESTYLE MEDICINE
                    </h2>
                    <p>
                        Tefline's flagship initiative, RxLifeMed, is your
                        lifelong companion.
                    </p>
                </div>
            </div>
        </div>
    );
}
