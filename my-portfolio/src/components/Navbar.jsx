import useLanguage from "../hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
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
        const main = document.getElementById("main");
        const observed = new Set();
        const update = () => {
            const sections = [...main.querySelectorAll("section[id]")];
            const current = sections.filter(section => section.getBoundingClientRect().top <= 161).at(-1);
            if (current) setActive(current.id);
        };
        // Observe a narrow reading band just below the floating toolbar.
        // A tall section must trigger when its start crosses that band.
        const createObserver = () => new IntersectionObserver(update, {
            rootMargin: `-108px 0px -${Math.max(0, window.innerHeight - 160)}px 0px`,
        });
        let observer = createObserver();
        const footerObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) setActive("contact");
            else update();
        });
        const observeSections = () => {
            main.querySelectorAll("section[id], .site-footer").forEach(element => {
                if (observed.has(element)) return;
                observed.add(element);
                if (element.matches(".site-footer")) footerObserver.observe(element);
                else observer.observe(element);
            });
            update();
        };
        const mutations = new MutationObserver(observeSections);
        mutations.observe(main, { childList: true, subtree: true });
        observeSections();
        const resize = () => {
            observer.disconnect();
            observer = createObserver();
            observed.forEach(element => {
                if (element.matches("section[id]")) observer.observe(element);
            });
            update();
        };
        window.addEventListener("resize", resize);
        return () => { observer.disconnect(); footerObserver.disconnect(); mutations.disconnect(); window.removeEventListener("resize", resize); };
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
            <a href="#hero" className="brand" aria-label={t("Jingrui Feng — home")} onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true"><img src="/favicon.svg" alt="" width="38" height="38" /></span><span className="brand-name">Jingrui Feng</span></a>
            <div className="nav-actions">
                {/* Parked, not deleted. Re-enable in src/config/features.js. */}
                {TRANSLATION_ENABLED && <LanguageToggle />}
                <ThemeToggle />
                <button ref={menuRef} className="icon-button menu-toggle" aria-label={t(open ? "Close navigation" : "Open navigation")} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(value => !value)}><span className="menu-glyph" aria-hidden="true" /></button>
            </div>
            <ul id="navigation-links" className={`nav-links ${open ? "is-open" : ""}`}>
                {links.map((label, index) => <li key={label} style={{ "--menu-index": index }}><a href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? "location" : undefined} onClick={() => setOpen(false)}>{t(label)}</a></li>)}
            </ul>
        </nav>
    </header>;
}
