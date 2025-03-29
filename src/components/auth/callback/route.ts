import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/../utils/supabase/server";

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (code) {
        const supabase = await createClient();
        await supabase.auth.exchangeCodeForSession(code);
    }

    // Redirect after authentication
    const redirectTo =
        requestUrl.searchParams.get("redirectTo") || "/dashboard";
    return NextResponse.redirect(new URL(redirectTo, request.url));
}
