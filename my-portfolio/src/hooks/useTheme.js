import { useEffect, useRef, useState } from "react";

function storedTheme() {
    try { const theme = localStorage.getItem("theme"); return theme === "dark" || theme === "light" ? theme : null; }
    catch { return null; }
}
const systemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function useTheme() {
    const manual = useRef(storedTheme() !== null);
    const [theme, setTheme] = useState(() => storedTheme() ?? systemTheme());
    const appliedTheme = useRef(theme);
    useEffect(() => {
        const root = document.documentElement;
        const animate = appliedTheme.current !== theme && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (animate) root.classList.add("theme-transition");
        root.classList.toggle("dark", theme === "dark");
        appliedTheme.current = theme;
        const timer = animate ? window.setTimeout(() => root.classList.remove("theme-transition"), 900) : null;
        return () => {
            window.clearTimeout(timer);
            root.classList.remove("theme-transition");
        };
    }, [theme]);
    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const systemChange = () => { if (!manual.current) setTheme(systemTheme()); };
        const storageChange = event => {
            if (event.key !== "theme" && event.key !== null) return;
            const saved = storedTheme();
            manual.current = saved !== null;
            setTheme(saved ?? systemTheme());
        };
        media.addEventListener("change", systemChange);
        window.addEventListener("storage", storageChange);
        return () => { media.removeEventListener("change", systemChange); window.removeEventListener("storage", storageChange); };
    }, []);
    const toggleTheme = () => {
        manual.current = true;
        const next = theme === "dark" ? "light" : "dark";
        try { localStorage.setItem("theme", next); } catch { /* Theme still works without storage. */ }
        setTheme(next);
    };
    return { theme, toggleTheme };
}
