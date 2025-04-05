"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/../utils/supabase/client";
import { SupabaseUser } from "@/types/supabase";

type AuthContextType = {
    user: SupabaseUser | null;
    isLoading: boolean;
    signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function SupabaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<SupabaseUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        // Set user if there's an active session
        const getUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user as SupabaseUser | null);
            setIsLoading(false);
        };

        // Listen for auth state changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user as SupabaseUser | null);
            setIsLoading(false);
        });

        getUser();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const signOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a SupabaseAuthProvider");
    }
    return context;
}
