import useLanguage from "../hooks/useLanguage";
import { ArrowUpRight, Github, Wallet, ShoppingBag, Bot, IceCreamBowl, Orbit, Utensils } from "./Icons";
import projects from "../data/projects.json";
import { TechBadge } from "./Skills";

const projectIcons = { Wallet, ShoppingBag, Bot, IceCreamBowl, Orbit, Utensils };

export default function Projects() {
    const { t } = useLanguage();
    return <section id="projects" className="section">
        <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">{t("Built with purpose")}</p><h2>{t("Projects")}</h2></div><p>{t("From personal ideas to real-world systems.")}</p></div>
            <div className="projects-grid">{projects.map(project => {
                const Icon = projectIcons[project.icon] || Wallet;
                return <article className="project-card surface-shell" key={project.title}><div className="surface-body project-body">
                    <div className="project-top"><div className="project-symbol"><Icon size={24} aria-hidden="true" /></div><span>{t(project.category)}</span></div>
                    <h3>{t(project.title)}</h3><p className="project-role">{t(project.role)}</p>
                    <p className="project-summary">{t(project.summary)}</p>
                    <ul className="detail-list">{project.details.map(detail => <li key={detail}>{t(detail)}</li>)}</ul>
                    <div className="project-footer"><div className="tech-list">{project.tech.map(tech => <TechBadge key={tech} name={tech} />)}</div>
                    {project.github && <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={t("{label} (opens in a new tab)", { label: `${t("View on GitHub")}: ${t(project.title)}` })}><Github size={17} />{t("View on GitHub")}<ArrowUpRight size={16} /></a>}</div>
                </div></article>;
            })}</div>
        </div>
    </section>;
}
