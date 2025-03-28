import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white p-4">
            <div className="text-center max-w-md">
                <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-3 rounded-lg inline-flex mb-6">
                    <BrainCircuit className="h-10 w-10 text-white" />
                </div>

                <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Page Not Found
                </h2>
                <p className="text-slate-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Button
                    asChild
                    className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700"
                >
                    <Link href="/">Go back home</Link>
                </Button>
            </div>
        </div>
    );
}
