import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 shadow-md hover:scale-105 transition-transform duration-200"
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
                        <Moon className="w-5 h-5 text-gray-800" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
