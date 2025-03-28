import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="container mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold mb-6">
                Welcome to Your Dashboard
            </h1>
            <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                    Hello, {session.user?.name || "User"}
                </h2>
                <p className="text-slate-600 mb-4">
                    This is your personal dashboard. Here you can manage your
                    account and access your wellness programs.
                </p>

                {/* Dashboard content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                        <h3 className="font-semibold text-teal-700 mb-2">
                            Your Programs
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Access your wellness programs and track your
                            progress.
                        </p>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                        <h3 className="font-semibold text-teal-700 mb-2">
                            Your Profile
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Update your personal information and preferences.
                        </p>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                        <h3 className="font-semibold text-teal-700 mb-2">
                            Support
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Get help from our team and access resources.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
