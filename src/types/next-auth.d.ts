import { DefaultSession, DefaultUser } from "next-auth";

// Extend the User type
declare module "next-auth" {
    interface User extends DefaultUser {
        role?: string;
        // Add any other fields you want to include
    }

    interface Session {
        user?: {
            id?: string;
            role?: string;
        } & DefaultSession["user"];
    }
}

// Extend the JWT type
declare module "next-auth/jwt" {
    interface JWT {
        userId?: string;
        role?: string;
        // Add any other fields you want to include
    }
}
