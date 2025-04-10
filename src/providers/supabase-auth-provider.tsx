"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type SupabaseUser = {
    id: string;
    email?: string;
    user_metadata: {
        name?: string;
    };
};

type AuthContextType = {
    user: SupabaseUser | null;
    isLoading: boolean;
    signUp: (email: string, password: string, name: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
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

    const signUp = async (email: string, password: string, name: string) => {
        const supabase = createClient();
        await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                },
            },
        });
    };

    const signIn = async (email: string, password: string) => {
        const supabase = createClient();
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
    };

    const signOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider
            value={{ user, isLoading, signUp, signIn, signOut }}
        >
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
