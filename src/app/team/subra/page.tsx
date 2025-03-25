import Link from "next/link";

export default function SubraPage() {
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
                        alt="Subra Maniun"
                        className="w-48 h-48 rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold text-center">
                        Subra Maniun
                    </h1>
                    <p className="text-xl text-center">
                        Principal Founder & CEO
                    </p>
                    <p className="text-center">Chief AI Officer</p>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                    <p className="mb-4">
                        Subra Maniun is a visionary technologist, AI strategist,
                        and category creator who built a career of identifying
                        white spaces, shaping market perception, and pioneering
                        industries before they exist. His leadership is
                        surgical—cutting through market noise, uncovering
                        high-impact opportunities, and architecting blue-ocean
                        strategies that redefine industries. In a world of
                        incremental innovation, Subra is designing
                        category-defining moves.
                    </p>
                    <p className="mb-4">
                        A computer scientist from IIT Kanpur, often likened to
                        the Stanford of the Subcontinent, Subra spent close to a
                        decade in senior executive roles across the US, before
                        returning to forge new frontiers in AI-driven wellness
                        intelligence.
                    </p>
                    <p className="mb-4">
                        A published author and 4x founder, Subra has built
                        global brand authority, mastering digital positioning
                        long before it became an industry obsession. His ability
                        to dominate search rankings worldwide, command
                        high-value networks, and craft compelling brand
                        narratives has made him a force in business and
                        technology circles.
                    </p>
                </div>
            </div>
        </div>
    );
}
