import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        // check localStorage first, otherwise use system preference
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored) return stored;
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return { theme, toggleTheme };
}
