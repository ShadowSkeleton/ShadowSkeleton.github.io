import useLanguage from "../hooks/useLanguage";
import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
    const { t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    return <button type="button" className="theme-toggle" data-theme={theme} onClick={toggleTheme} aria-label={t(theme === "dark" ? "Switch to light mode" : "Switch to dark mode")} title={t(theme === "dark" ? "Switch to light mode" : "Switch to dark mode")}>
        <span className="theme-track" aria-hidden="true">
            <Sun className="theme-track-sun" size={15} />
            <Moon className="theme-track-moon" size={15} />
            <span className="theme-thumb">
                <Sun className="theme-thumb-sun" size={17} />
                <Moon className="theme-thumb-moon" size={17} />
            </span>
        </span>
    </button>;
}
