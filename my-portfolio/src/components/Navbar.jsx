import { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useTheme from "../hooks/useTheme";

export default function NavBar() {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const scrollTimeoutRef = useRef(null);

    // Throttled scroll handler for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeoutRef.current) {
                cancelAnimationFrame(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20);
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) {
                cancelAnimationFrame(scrollTimeoutRef.current);
            }
        };
    }, []);

    // Observe which section is active with throttled updates
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        let rafId = null;
        const observer = new IntersectionObserver(
            (entries) => {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(entry.target.id);
                        }
                    });
                });
            },
            { threshold: 0.2, rootMargin: "-80px 0px -60% 0px" }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const links = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "certifications", label: "Certifications" },
        { id: "hobbies", label: "Hobbies" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 w-full backdrop-blur-xl z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/90 dark:bg-slate-900/90 shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
                    : "bg-white/70 dark:bg-slate-900/70 border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">
                {/* Logo/Brand */}
                <motion.a
                    href="#hero"
                    className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        JF
                    </span>
                </motion.a>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {links.map((link, index) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                                    hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg
                                    group"
                            >
                                {active === link.id && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-blue-50 dark:bg-blue-950/30 rounded-lg"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme Toggle */}
                <motion.button
                    onClick={toggleTheme}
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center
                     bg-gray-100 dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     hover:bg-gray-200 dark:hover:bg-gray-700
                     transition-all duration-200 group
                     ml-2"
                    aria-label="Toggle theme"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {theme === "light" ? (
                            <motion.div
                                key="light"
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 180, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Moon className="w-5 h-5 text-blue-600" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="dark"
                                initial={{ rotate: 180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -180, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-5 h-5 text-yellow-500" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </motion.nav>
    );
}
