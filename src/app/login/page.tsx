import { Suspense } from "react";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 to-white p-4">
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
}
