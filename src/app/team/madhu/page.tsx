import Link from "next/link";

export default function MadhuPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <Link
                href="/team"
                className="text-teal-600 hover:underline mb-6 inline-block"
            >
                &larr; Back to Team
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-gradient-to-b from-teal-900 to-teal-700 text-white p-8 rounded-lg">
                    <img
                        src="/placeholder.webp"
                        alt="Madhu Damodaran"
                        className="w-48 h-48 rounded-full mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold text-center">
                        Madhu Damodaran
                    </h1>
                    <p className="text-xl text-center">
                        Strategic Founder & CTO
                    </p>
                    <p className="text-center">Chief Talent Officer</p>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                    <p className="mb-4">
                        Madhu Damodaran, in a reimagined role that extends far
                        beyond traditional HR oversight, is pioneering the
                        integration of human potential, digital intelligence,
                        and workforce well-being. He is the architect of talent
                        ecosystems, seamlessly blending corporate workforce
                        engagement, subscriber experience, and AI-driven talent
                        intelligence.
                    </p>
                    <p className="mb-4">
                        In his client-facing capacity, he collaborates directly
                        with Chief HR Officers (CHROs) and corporate leadership,
                        helping enterprises embed wellness intelligence into
                        their organizational DNA. By aligning lifestyle medicine
                        with workforce strategy, he ensures companies cultivate
                        not just employees—but high-performance, resilient
                        talent.
                    </p>
                    <p className="mb-4">
                        A seasoned business development leader, Madhu has played
                        a pivotal role in scaling corporate HR practices across
                        India and the Asia-Pacific, earning recognition as a
                        thought leader in human capital and compliance.
                    </p>
                </div>
            </div>
        </div>
    );
}
