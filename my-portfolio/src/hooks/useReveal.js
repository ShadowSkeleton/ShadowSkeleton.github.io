import { useEffect } from "react";

export default function useReveal() {
    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const main = document.getElementById("main");
        const observed = new Set();
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (!media.matches) entry.target.classList.add("reveal-enter");
                observer.unobserve(entry.target);
            });
        }, { threshold: .08 });
        const observeContent = () => {
            main.querySelectorAll(".section-heading, .about-grid, .surface-shell, .experience-item").forEach(element => {
                if (observed.has(element)) return;
                observed.add(element);
                observer.observe(element);
            });
        };
        const mutations = new MutationObserver(observeContent);
        mutations.observe(main, { childList: true, subtree: true });
        observeContent();
        return () => {
            observer.disconnect();
            mutations.disconnect();
            observed.forEach(element => element.classList.remove("reveal-enter"));
        };
    }, []);
}
