// src/components/theme/theme-toggle.tsx
"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-blue-200" />
            ) : (
                <Moon className="h-5 w-5 text-blue-600" />
            )}
        </button>
    );
}
