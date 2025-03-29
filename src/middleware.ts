import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Define public paths that don't require authentication
const publicPaths = [
    "/",
    "/login",
    "/about",
    "/contact",
    "/vision-mission",
    "/press",
    "/team", // Note: only the main team page is public
    "/services",
    "/invest",
];

// Define paths that require authentication
const protectedPathPrefixes = [
    "/dashboard",
    "/team/", // Any specific team member page requires auth
];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Check if the path is protected
    const isProtectedPath = protectedPathPrefixes.some((prefix) =>
        path.startsWith(prefix)
    );

    // Check if the path is explicitly public
    const isExplicitlyPublic = publicPaths.some(
        (publicPath) => path === publicPath
    );

    // If the path is not protected and not an API route, allow access
    if (!isProtectedPath || path.startsWith("/api/auth/")) {
        return NextResponse.next();
    }

    // For protected routes, set up response and Supabase client
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: any) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    });
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    });
                },
                remove(name: string, options: any) {
                    request.cookies.set({
                        name,
                        value: "",
                        ...options,
                        maxAge: 0,
                    });
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    response.cookies.set({
                        name,
                        value: "",
                        ...options,
                        maxAge: 0,
                    });
                },
            },
        }
    );

    // Check if the user is authenticated
    const {
        data: { session },
    } = await supabase.auth.getSession();

    // If no session and trying to access protected route, redirect to login
    if (!session && isProtectedPath) {
        const redirectUrl = new URL("/login", request.url);
        // Save the original URL to redirect back after login
        redirectUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    }

    return response;
}

// Configure which paths the middleware should run on
export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
