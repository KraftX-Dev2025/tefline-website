export interface UserMetadata {
    full_name?: string;
}

export interface SupabaseUser {
    // You can add more properties as needed based on Supabase's user object structure
    id: string;
    user_metadata: UserMetadata;
    aud: string;
    email?: string;
    email_confirmed_at?: string;
    phone?: string;
    confirmed_at?: string;
    last_sign_in_at?: string;
    role?: string;
    created_at: string;
    updated_at?: string;
}
