import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import zh from "./zh.json";
import { TRANSLATION_ENABLED } from "../config/features";

// English-only mode retains every t(...) call without activating translation,
// storage listeners, or locale changes. The complete bilingual code stays below.
const englishOnly = {
    language: "en",
    changeLanguage: () => {},
    t: (text, values = {}) => text.replace(/\{(\w+)\}/g, (token, key) => values[key] ?? token),
};

export default function LanguageProvider({ children }) {
    return TRANSLATION_ENABLED
        ? <BilingualLanguageProvider>{children}</BilingualLanguageProvider>
        : <LanguageContext.Provider value={englishOnly}>{children}</LanguageContext.Provider>;
}

const storageKey = "portfolio-language";
function savedLanguage() {
    try { return localStorage.getItem(storageKey) === "zh" ? "zh" : "en"; }
    catch { return "en"; }
}

function BilingualLanguageProvider({ children }) {
    const [language, setLanguage] = useState(savedLanguage);
    const anchor = useRef(null);
    const changeLanguage = useCallback(next => {
        // Preserve the reader's place when translated paragraphs change height.
        const blocks = [...document.querySelectorAll("main section[id], main h2, main h3, main p, main li")];
        const block = blocks.filter(item => {
            const rect = item.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom > 105;
        }).at(-1);
        anchor.current = block ? { element: block, top: block.getBoundingClientRect().top } : null;
        setLanguage(next);
        try { localStorage.setItem(storageKey, next); } catch { /* Works in memory when storage is blocked. */ }
    }, []);
    const t = useCallback((text, values = {}) => {
        const translated = language === "zh" ? (zh[text] ?? text) : text;
        return translated.replace(/\{(\w+)\}/g, (token, key) => values[key] ?? token);
    }, [language]);

    useLayoutEffect(() => {
        document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
        document.title = t("Jingrui Feng | Software Developer");
        document.querySelector('meta[name="description"]')?.setAttribute("content", t("Jingrui Feng’s software development portfolio: full-stack web applications, native iOS apps, and a focus on usable, reliable systems."));
        if (anchor.current) {
            const { element, top } = anchor.current;
            if (element.isConnected) window.scrollBy({ top: element.getBoundingClientRect().top - top, behavior: "instant" });
            anchor.current = null;
        }
    }, [language, t]);
    useEffect(() => {
        const sync = event => { if (event.key === storageKey || event.key === null) setLanguage(savedLanguage()); };
        window.addEventListener("storage", sync);
        return () => window.removeEventListener("storage", sync);
    }, []);

    const value = useMemo(() => ({ language, changeLanguage, t }), [language, changeLanguage, t]);
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
