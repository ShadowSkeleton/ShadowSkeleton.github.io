import useLanguage from "../hooks/useLanguage";
import { ArrowUpRight, Github, Wallet, ShoppingBag, Bot, IceCreamBowl, Orbit, Utensils } from "lucide-react";
import projects from "../data/projects.json";
import { TechBadge } from "./Skills";

const projectIcons = { Wallet, ShoppingBag, Bot, IceCreamBowl, Orbit, Utensils };

export default function Projects() {
    const { t } = useLanguage();
    return <section id="projects" className="section">
        <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">{t("04 / BUILT WITH PURPOSE")}</p><h2>{t("Projects")}</h2></div><p>{t("From personal ideas to real-world systems.")}</p></div>
            <div className="projects-grid">{projects.map((project, index) => {
                const Icon = projectIcons[project.icon] || Wallet;
                return <article className="project-card" key={project.title}>
                    <div className="project-top"><div className="project-symbol"><Icon size={24} aria-hidden="true" /></div><span>{t(project.category)}</span><span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
                    <h3>{t(project.title)}</h3><p className="project-role">{t(project.role)}</p>
                    <p className="project-summary">{t(project.summary)}</p>
                    <ul className="detail-list">{project.details.map(detail => <li key={detail}>{t(detail)}</li>)}</ul>
                    <div className="project-footer"><div className="tech-list">{project.tech.map(tech => <TechBadge key={tech} name={tech} />)}</div>
                    {project.github && <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={t("View {project} on GitHub (opens in a new tab)", { project: t(project.title) })}><Github size={17} />{t("View on GitHub")}<ArrowUpRight size={16} /></a>}</div>
                </article>;
            })}</div>
        </div>
    </section>;
}
