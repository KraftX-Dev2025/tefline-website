"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/../utils/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

export default function SignOutButton({
    className = "",
    variant = "default",
}: {
    className?: string;
    variant?: "default" | "outline" | "secondary" | "ghost";
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
        <Button
            onClick={handleSignOut}
            disabled={isLoading}
            variant={variant}
            className={`${
                variant === "default"
                    ? "bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700"
                    : ""
            } ${className}`}
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing out...
                </>
            ) : (
                <>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                </>
            )}
        </Button>
    );
}
