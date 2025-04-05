import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Define public paths that don't require authentication
const publicPaths = [
    "/",
    "/login",
    "/register",
    "/about",
    "/contact",
    "/vision-mission",
    "/press",
    "/team",
    "/services",
    "/invest",
    "/auth/callback", // Allow callback access
];

// Define paths that require authentication
const protectedPathPrefixes = ["/profile", "/settings"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the path is protected
    const isProtectedPath = protectedPathPrefixes.some((prefix) =>
        pathname.startsWith(prefix)
    );

    // If the path is explicitly public or it's not a protected path, allow access
    if (publicPaths.includes(pathname) || !isProtectedPath) {
        return NextResponse.next();
    }

    const response = NextResponse.next();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get: (name: string) => request.cookies.get(name)?.value,
                set: (name: string, value: string, options: CookieOptions) => {
                    response.cookies.set({ name, value, ...options });
                },
                remove: (name: string, options: CookieOptions) => {
                    response.cookies.set({ name, value: "", ...options });
                },
            },
        }
    );

    const {
        data: { session },
    } = await supabase.auth.getSession();

    // If no session and trying to access protected route, redirect to login
    if (!session && isProtectedPath) {
        const redirectUrl = new URL("/login", request.url);
        // Save the original URL to redirect back after login
        redirectUrl.searchParams.set("redirectTo", pathname);
        return NextResponse.redirect(redirectUrl);
    }

    return response;
}

// Configure the middleware to run on all paths except static files
export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - Static files (css, js, images, etc.)
         * - API routes that don't require authentication
         */
        "/((?!_next/static|_next/image|favicon.ico|public/|api/public/).*)",
    ],
};
