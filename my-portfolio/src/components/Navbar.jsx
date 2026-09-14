import useLanguage from "../hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { TRANSLATION_ENABLED } from "../config/features";

const links = ["About", "Education", "Experience", "Projects", "Skills", "Certifications", "Hobbies", "Contact"];

export default function Navbar() {
    const { t } = useLanguage();
    const [active, setActive] = useState("hero");
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    useEffect(() => {
        let frame;
        const update = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const sections = [...document.querySelectorAll("main section[id]")];
                if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
                    if (sections.length > 1) setActive(sections.at(-1).id);
                    return;
                }
                const current = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
                if (current) setActive(current.id);
            });
        };
        // Query on scroll so lazily mounted sections are included.
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();
        return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
    }, []);
    useEffect(() => {
        if (!open) return;
        const dismiss = event => { if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); } };
        const outside = event => { if (!navRef.current?.contains(event.target)) setOpen(false); };
        const media = window.matchMedia("(min-width: 1100px)");
        const resize = event => { if (event.matches) setOpen(false); };
        document.addEventListener("keydown", dismiss);
        document.addEventListener("pointerdown", outside);
        media.addEventListener("change", resize);
        return () => { document.removeEventListener("keydown", dismiss); document.removeEventListener("pointerdown", outside); media.removeEventListener("change", resize); };
    }, [open]);
    return <header className="site-header" ref={navRef}
        onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
        <nav className="shell nav-inner" aria-label={t("Main navigation")}>
            <a href="#hero" className="brand" aria-label={t("Jingrui Feng — home")} onClick={() => setOpen(false)}>jf<span>.</span></a>
            <div className="nav-actions">
                {/* Parked, not deleted. Re-enable in src/config/features.js. */}
                {TRANSLATION_ENABLED && <LanguageToggle />}
                <ThemeToggle />
                <button ref={menuRef} className="icon-button menu-toggle" aria-label={t(open ? "Close navigation" : "Open navigation")} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(value => !value)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
            </div>
            <ul id="navigation-links" className={`nav-links ${open ? "is-open" : ""}`}>
                {links.map(label => <li key={label}><a href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? "location" : undefined} onClick={() => setOpen(false)}>{t(label)}</a></li>)}
            </ul>
        </nav>
    </header>;
}
