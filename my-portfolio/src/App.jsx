import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold components for faster initial load
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

// Minimal loading fallback (invisible, just to prevent layout shift)
const LazyLoadFallback = () => null;

function App() {
    return (
        <div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-950 scroll-smooth min-h-screen">
            <Navbar />
            <Hero />
            <Suspense fallback={<LazyLoadFallback />}>
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skills />
                <Certifications />
                <Contact />
            </Suspense>
        </div>
    );
}

export default App;
