import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Here you would check credentials against your database
                if (!credentials?.email || !credentials?.password) return null;

                // Example logic (replace with actual database query):
                // const user = await db.user.findUnique({ where: { email: credentials.email } });
                // const passwordValid = await comparePassword(credentials.password, user.password);

                // For now, let's use a simple example:
                if (
                    credentials.email === "admin@tefline.com" &&
                    credentials.password === "lifestyle"
                ) {
                    return {
                        id: "1",
                        name: "Admin",
                        email: "admin@tefline.com",
                    };
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/",
        error: "/login", // Error code passed in query string as ?error=
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            // Add user ID to the token right after signin
            if (user) {
                token.userId = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Add user ID to the session
            if (session.user) {
                session.user.id = token.userId as string;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };
