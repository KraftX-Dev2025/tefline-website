import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    // Define which routes are public (don't require authentication)
    const publicPaths = [
        "/",
        "/login",
        "/about",
        "/contact",
        "/vision-mission",
        "/press",
        "/team",
        "/services",
        "/invest",
    ];
    const isPublicPath = publicPaths.some(
        (publicPath) => path === publicPath || path.startsWith("/api/auth/")
    );

    // If the path is public, don't require authentication
    if (isPublicPath) {
        return NextResponse.next();
    }

    // Check if the user is authenticated
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    // If the user is not authenticated, redirect to login
    if (!session) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
    }

    // If they are authenticated, proceed
    return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
    matcher: [
        // Apply to all paths except static files, images, etc.
        "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
    ],
};
