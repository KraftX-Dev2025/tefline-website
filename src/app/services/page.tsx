export default function ServicesPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg mb-8">
                Comprehensive wellness solutions for individuals and
                organizations.
            </p>

            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                    INDIVIDUAL SERVICES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="/placeholder.webp"
                            alt="Wellness Assessment"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                Personalized Wellness Assessment
                            </h3>
                            <p className="mb-4">
                                Our comprehensive assessment analyzes your
                                current lifestyle, health metrics, and wellness
                                goals to create a personalized baseline.
                            </p>
                            <ul className="mb-4 space-y-2">
                                <li>• Multi-factor health evaluation</li>
                                <li>• Biological age calculation</li>
                                <li>• Personalized improvement roadmap</li>
                            </ul>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="/placeholder.webp"
                            alt="AI Coaching"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                AI-Guided Wellness Coaching
                            </h3>
                            <p className="mb-4">
                                Experience the power of Wellness Intelligence™
                                with our AI-driven coaching platform.
                            </p>
                            <ul className="mb-4 space-y-2">
                                <li>• Personalized daily recommendations</li>
                                <li>• Behavioral pattern recognition</li>
                                <li>• Adaptive intervention strategies</li>
                            </ul>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
                                Explore Coaching
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12 bg-teal-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-8">
                    ENTERPRISE SOLUTIONS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            Corporate Wellness Programs
                        </h3>
                        <p>
                            Comprehensive wellness initiatives designed to
                            improve employee health, reduce healthcare costs,
                            and boost productivity.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            Healthcare Provider Integration
                        </h3>
                        <p>
                            Tools and protocols that enable healthcare providers
                            to incorporate lifestyle medicine into their
                            practice.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
