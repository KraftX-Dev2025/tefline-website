"use client";

import { useEffect } from "react";
import { useAuth } from "@/providers/supabase-auth-provider";
import SignOutButton from "@/components/auth/signout-button";
import { redirect } from "next/navigation";

export default function ProfilePage() {
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !user) {
            redirect("/login");
        }
    }, [user, isLoading]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-r-transparent"></div>
                    <p className="mt-2 text-gray-700">
                        Loading your profile...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Profile
                    </h1>
                    <SignOutButton />
                </div>

                <div className="space-y-6">
                    <div className="bg-teal-50 p-6 rounded-lg">
                        <h2 className="font-semibold text-xl mb-4 text-teal-700">
                            Account Info
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{user?.email}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Account ID
                                </p>
                                <p className="font-medium">{user?.id}</p>
                            </div>

                            {user?.user_metadata?.full_name && (
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Full Name
                                    </p>
                                    <p className="font-medium">
                                        {user.user_metadata.full_name}
                                    </p>
                                </div>
                            )}

                            <div>
                                <p className="text-sm text-gray-500">
                                    Email Verified
                                </p>
                                <p className="font-medium">
                                    {user?.email_confirmed_at ? (
                                        <span className="text-green-600">
                                            Verified
                                        </span>
                                    ) : (
                                        <span className="text-red-600">
                                            Not verified
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="font-semibold text-xl mb-4">
                            Account Actions
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                Update Profile
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                Change Password
                            </button>
                            <button className="px-4 py-2 border border-red-300 rounded-md text-red-700 hover:bg-red-50">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
