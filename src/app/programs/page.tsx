export default function ProgramsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">RxLifeMed Programs</h1>
            <p className="text-lg mb-8">
                Your lifelong companion offering curated content spanning twelve
                evolving monthly modules in lifestyle medicine.
            </p>

            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                    LIFELONG LEARNING: THE EVOLVING MONTHLY MODULES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">January</h3>
                        <p className="text-teal-800">Stability Foundation</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">February</h3>
                        <p className="text-teal-800">Strength Conditioning</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">March</h3>
                        <p className="text-teal-800">Movement Nutrition</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">April</h3>
                        <p className="text-teal-800">Athletic Vitality</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">May</h3>
                        <p className="text-teal-800">Culinary Medicine</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">June</h3>
                        <p className="text-teal-800">Social Health</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">July</h3>
                        <p className="text-teal-800">Resilience Quotient</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">August</h3>
                        <p className="text-teal-800">Restorative Resurgence</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">September</h3>
                        <p className="text-teal-800">Behavioral Science</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">October</h3>
                        <p className="text-teal-800">Aesthetic Wellness</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">November</h3>
                        <p className="text-teal-800">Emotional Intelligence</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
                        <h3 className="font-semibold">December</h3>
                        <p className="text-teal-800">Longevity Blueprint</p>
                    </div>
                </div>
            </section>

            <section className="mb-12 bg-teal-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">
                    FILM CERTIFICATION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Fellowship In Lifestyle Medicine
                        </h3>
                        <p className="mb-4">
                            Tefline has entered into a strategic partnership
                            with the University of South Carolina, which
                            pioneered the lifestyle medicine curricula for
                            medical schools across America, as well as the
                            prestigious NextGenU, that has been endorsed by the
                            World Health Organization.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Program Benefits
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                • Evidence-based lifestyle medicine education
                            </li>
                            <li>
                                • WHO-endorsed curriculum with practical
                                applications
                            </li>
                            <li>
                                • Specialized tracks for medical professionals
                            </li>
                            <li>
                                • Access to cutting-edge research and protocols
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
