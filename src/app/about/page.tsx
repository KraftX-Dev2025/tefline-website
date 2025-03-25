export default function AboutPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">About Tefline</h1>
            <p className="text-lg mb-8">
                Transforming healthcare through evidence-informed wellness and
                agentic intelligence.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">OUR STORY</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src="/placeholder.webp"
                            alt="Our Story"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <p className="mb-4">
                            Tefline was founded in 2023 by a team of visionaries
                            who recognized a fundamental gap in modern
                            healthcare. While tremendous resources were being
                            directed toward managing illness, the vast potential
                            of proactive wellness remained largely untapped.
                        </p>
                        <p>
                            Our founders, with backgrounds spanning AI
                            technology, behavioral science, and lifestyle
                            medicine, came together with a shared mission: to
                            create an intelligent ecosystem that could transform
                            how people approach their health and well-being.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12 bg-teal-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">OUR APPROACH</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            Evidence-Informed Protocols
                        </h3>
                        <p>
                            We filter through the noise of wellness trends to
                            deliver only what's backed by rigorous scientific
                            evidence.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            Agentic Intelligence
                        </h3>
                        <p>
                            Beyond passive tracking, our AI systems actively
                            think alongside you, creating a truly intelligent
                            wellness partnership.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            Community Accountability
                        </h3>
                        <p>
                            Sustainable change happens in community. Our
                            platform connects you with accountability partners
                            and like-minded individuals.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
