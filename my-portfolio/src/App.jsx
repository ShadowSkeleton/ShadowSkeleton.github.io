import useLanguage from "./hooks/useLanguage";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Hobbies = lazy(() => import("./components/Hobbies"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
    const { t } = useLanguage();
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        const observer = new MutationObserver(scrollToSection);
        function scrollToSection() {
            if (window.location.hash !== hash) { observer.disconnect(); return; }
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: "instant" });
                observer.disconnect();
            }
        }
        observer.observe(document.getElementById("main"), { childList: true, subtree: true });
        scrollToSection();
        return () => observer.disconnect();
    }, []);

    return <>
        <a className="skip-link" href="#main">{t("Skip to content")}</a>
        <Navbar />
        <main id="main" tabIndex={-1}>
            <Hero />
            <Suspense fallback={<div className="section shell" role="status">{t("Loading portfolio…")}</div>}>
                <About /><Education /><Experience /><Projects /><Skills /><Certifications /><Hobbies /><Contact />
            </Suspense>
        </main>
    </>;
}
