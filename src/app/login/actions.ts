"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { FormData } from "@/types/forms";

/**
 * Server action to handle user login
 */
export async function login(formData: FormData): Promise<void> {
    const supabase = await createClient();
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) redirect("/error");
    redirect("/account");
}

/**
 * Server action to handle user signup
 */
export async function signup(formData: FormData): Promise<void> {
    const supabase = await createClient();
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signUp(data);
    if (error) redirect("/error");
    redirect("/account");
}
