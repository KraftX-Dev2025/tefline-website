import Link from "next/link";
import { teamMembers } from "@/lib/constants/team";

export default function TeamPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">TEAM TEFLINE</h1>
            <p className="text-lg mb-8">
                Meet the visionaries behind Tefline's mission to redefine
                healthcare through lifestyle medicine and AI intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {teamMembers.map((member) => (
                    <Link href={`/team/${member.slug}`} key={member.slug}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="/placeholder.webp"
                                alt={member.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {member.name}
                                </h3>
                                <p className="text-blue-800">{member.role}</p>
                                <p className="text-gray-600 mb-4">
                                    {member.secondaryRole}
                                </p>
                                <p className="text-sm">{member.shortBio}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <section className="bg-blue-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold mb-6">Team Dynamics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Human-AI Collaboration
                        </h3>
                        <p>
                            At Tefline, we pioneer a unique approach to
                            leadership where human expertise and AI intelligence
                            work in perfect harmony. Our collaborative model
                            leverages the strategic vision of our human leaders
                            with the data-driven insights of our AI executive.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Our Core Values
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                • Evidence-Informed Excellence: We ground our
                                approach in scientific rigor and validated
                                methodologies.
                            </li>
                            <li>
                                • Intelligent Wellness: We leverage AI to
                                personalize and optimize health journeys.
                            </li>
                            <li>
                                • Community Empowerment: We believe in the power
                                of social connection to drive lasting change.
                            </li>
                            <li>
                                • Visionary Innovation: We anticipate the future
                                of healthcare rather than simply react to it.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
