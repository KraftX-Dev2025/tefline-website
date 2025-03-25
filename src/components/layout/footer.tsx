// src/components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-blue-900 dark:bg-blue-950 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            The Epicenter For Lifestyle Medicine
                        </h3>
                        <p>
                            Redefining modern healthcare with evidence-informed
                            wellness.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            Connect With Us
                        </h3>
                        <p>
                            Embassy Golf Links Business Park, Cinnabar Hills,
                            Bangalore - 560071
                        </p>
                        <p>team@tefline.org</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-200"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/team"
                                    className="hover:text-blue-200"
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-blue-200"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-blue-800 dark:border-blue-700 text-center">
                    <p>Copyright © 2025 Tefline</p>
                </div>
            </div>
        </footer>
    );
}
