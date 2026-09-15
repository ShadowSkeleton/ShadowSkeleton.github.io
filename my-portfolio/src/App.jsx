import useLanguage from "./hooks/useLanguage";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useReveal from "./hooks/useReveal";
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
    useReveal();
    useEffect(() => {
        let pendingHash = window.location.hash;
        let initial = true;
        const observer = new MutationObserver(scrollToSection);
        function scrollToSection() {
            if (!pendingHash) return;
            const target = document.getElementById(pendingHash.slice(1));
            if (target) {
                const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                target.scrollIntoView({ behavior: initial || reduce ? "instant" : "smooth" });
                pendingHash = "";
            }
        }
        const followHash = () => {
            initial = false;
            pendingHash = window.location.hash;
            scrollToSection();
        };
        observer.observe(document.getElementById("main"), { childList: true, subtree: true });
        window.addEventListener("hashchange", followHash);
        scrollToSection();
        return () => { observer.disconnect(); window.removeEventListener("hashchange", followHash); };
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
