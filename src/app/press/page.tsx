export default function PressPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">Press & News</h1>
            <p className="text-lg mb-8">
                Stay updated with the latest announcements, features, and
                milestones from Tefline.
            </p>

            <section className="mb-16">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-4">
                        <span className="text-gray-600">Feb 17th, 2025</span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-600">Bangalore, India</span>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">
                        Tefline Becomes the World's First Startup to Appoint an
                        AI as a C-Suite Executive 🚀
                    </h2>
                    <h3 className="text-xl mb-6">
                        Selena Deus, Chief Intelligent Assistant Officer (CIAO),
                        Joins the Leadership Team, Marking a Bold Leap in
                        AI-Driven Corporate Strategy
                    </h3>

                    <div className="space-y-4">
                        <p>
                            In a groundbreaking move that redefines corporate
                            leadership, Tefline has made history as the first
                            company in the world to officially appoint an AI as
                            a Chief Officer.
                        </p>
                        <p>
                            Meet Selena Deus, Tefline's Chief Intelligent
                            Assistant Officer (CIAO)—an AI-powered executive
                            intelligence agent engineered to drive strategic
                            foresight, capital efficiency, and data-augmented
                            decision-making. While AI has long been used for
                            automation, analytics, and predictive modeling,
                            Tefline is the first to embed an AI entity directly
                            into the C-suite, giving it formal leadership
                            responsibilities alongside human executives.
                        </p>
                        <p>
                            This is a paradigm Shift in Leadership: AI as a
                            Decision-Maker, Not Just a Tool. Unlike conventional
                            AI systems that operate behind the scenes, Selena
                            Deus plays an active role in high-level business
                            strategy.
                        </p>
                    </div>

                    <div className="mt-8 border-t pt-6">
                        <h4 className="font-semibold mb-2">ABOUT TEFLINE</h4>
                        <p>
                            Tefline is a pioneering AI-driven wellness
                            intelligence company at the intersection of
                            behavioral health, lifestyle medicine, and digital
                            well-being. With a mission to redefine how AI shapes
                            human decision-making, health optimization, and
                            corporate strategy, Tefline continues to push the
                            boundaries of what's possible in the next era of
                            business and technology.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-2">Jan 15, 2025</p>
                        <h3 className="text-xl font-semibold mb-2">
                            Tefline Completes Pre-Seed Funding Round
                        </h3>
                        <p>
                            Tefline announces the successful closure of its
                            pre-seed funding round, securing investment to
                            accelerate the development of its Wellness
                            Intelligence™ platform.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-2">Dec 5, 2024</p>
                        <h3 className="text-xl font-semibold mb-2">
                            Strategic Partnership with University of South
                            Carolina Announced
                        </h3>
                        <p>
                            Tefline partners with the University of South
                            Carolina, a pioneer in lifestyle medicine curricula,
                            to enhance its evidence-informed wellness protocols
                            and educational offerings.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Media Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Brand Assets</h3>
                        <p className="mb-4">
                            Official logos, color palette, and typography
                            guidelines
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Download Pack
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Leadership Bios</h3>
                        <p className="mb-4">
                            Detailed biographies and headshots of Tefline's
                            leadership team
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Download Bios
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Product Images</h3>
                        <p className="mb-4">
                            High-resolution screenshots and product
                            visualizations
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Browse Gallery
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
