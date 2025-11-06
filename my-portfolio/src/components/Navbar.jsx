import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
    const [active, setActive] = useState("");
    // Default to light mode first; remember user’s last choice
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");


    // observe which section is active
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { threshold: 0.5 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // apply / persist theme
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    const links = [
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
    ];

    return (
        <nav
            className="fixed top-0 w-full backdrop-blur-md
                 bg-white/80 dark:bg-[#1e293b]/90
                 border-b border-gray-200 dark:border-blue-900/40
                 shadow-sm dark:shadow-[0_2px_10px_rgba(30,64,175,0.15)]
                 transition-all duration-300 z-50"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
                {/* left side: name or logo */}
                <a
                    href="#hero"
                    className="text-xl font-semibold
                     text-gray-900 dark:text-blue-400 tracking-tight"
                >
                    Jingrui Feng
                </a>

                {/* center nav links */}
                <ul className="hidden md:flex justify-center space-x-8
                       text-gray-700 dark:text-gray-200 font-medium">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`transition-colors ${
                                    active === link.id
                                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                                        : "hover:text-blue-500 dark:hover:text-blue-300"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* right side: theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="relative w-10 h-10 rounded-full flex items-center justify-center
                     bg-gray-100 dark:bg-blue-600/20
                     shadow-md hover:scale-105 hover:shadow-lg
                     transition-transform duration-200 border border-gray-200 dark:border-blue-800/50"
                    aria-label="Toggle theme"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {theme === "light" ? (
                            <motion.div
                                key="light"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Moon className="w-5 h-5 text-blue-700" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="dark"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_4px_#facc15]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </nav>
    );
}
