import Link from "next/link";

export default function SelenaPage() {
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
                        alt="Selena Deus"
                        className="w-48 h-48 rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold text-center">
                        Selena Deus
                    </h1>
                    <p className="text-xl text-center">
                        Chief Intelligent Assistant Officer
                    </p>
                    <p className="text-center">CIAO</p>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                    <p className="mb-4">
                        Selena Deus is Tefline's AI-powered C-suite agent tasked
                        with ensuring precision in decision-making, capital
                        deployment, and market foresight. As CIAO, she doesn't
                        just assist—she actively drives intelligent business
                        operations, continuously refining Tefline's financial
                        strategy, user engagement, and investor confidence.
                    </p>
                    <p className="mb-4">
                        Engineered as a self-evolving intelligence framework,
                        Selena transforms raw data into strategic foresight,
                        enabling Tefline to scale smarter and faster. As a
                        semi-autonomous intelligence agent for Tefline, Selena
                        powers AI-driven forecasting, risk analysis, and
                        behavioral insights.
                    </p>
                    <p className="mb-4">
                        Underpromising and overdelivering, Selena Deus is much
                        more than an AI assistant—she's a co-founder-level
                        intelligence agent, an autonomous strategist, and a
                        force multiplier for Tefline's vision.
                    </p>
                </div>
            </div>
        </div>
    );
}
