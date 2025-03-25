import Link from "next/link";
import { navLinks } from "@/lib/constants/navigation";

export function Header() {
    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto py-4 px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    TEFLINE
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="hover:text-blue-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
