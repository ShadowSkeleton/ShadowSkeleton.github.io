import { useEffect, useState, useRef } from "react";

export default function useTheme() {
    const hasUserToggled = useRef(false);
    
    const [theme, setTheme] = useState(() => {
        // Default to system preference unless user has explicitly set a preference
        // This should match the inline script in index.html
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored !== null) {
                hasUserToggled.current = true;
                return stored;
            }
            // Use system preference as default
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        // Apply theme class to match current theme state
        const root = window.document.documentElement;
        
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        
        // Only save to localStorage if user has manually toggled
        // This preserves the default system preference behavior
        if (hasUserToggled.current) {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    // Also listen to system preference changes when no manual preference is set
    useEffect(() => {
        if (hasUserToggled.current) return; // Don't listen if user has manually set preference
        
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        
        const handleChange = (e) => {
            // Only update if theme actually changed
            const newTheme = e.matches ? "dark" : "light";
            setTheme((prev) => prev !== newTheme ? newTheme : prev);
        };
        
        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    const toggleTheme = () => {
        hasUserToggled.current = true;
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return { theme, toggleTheme };
}
