"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/../utils/supabase/client";

export default function SignOutButton({
    className = "",
}: {
    className?: string;
}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        setIsLoading(true);
        try {
            const supabase = createClient();
            await supabase.auth.signOut();
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            disabled={isLoading}
            className={`px-4 py-2 text-white bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 rounded ${className}`}
        >
            {isLoading ? "Signing out..." : "Sign out"}
        </button>
    );
}
