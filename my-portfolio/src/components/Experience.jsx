import useLanguage from "../hooks/useLanguage";
import { BriefcaseBusiness, GraduationCap, BrainCircuit, Building2, Landmark, MapPin } from "lucide-react";
import experience from "../data/experience.json";
import { TechBadge } from "./Skills";
import { SchoolLogo } from "./Education";

function parseEndDate(value) {
    if (value.includes("Present")) return Infinity;
    const months = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const match = value.match(/[–-]\s*([A-Za-z]{3})\s*(\d{4})/);
    return match ? new Date(Number(match[2]), months[match[1]]).getTime() : 0;
}
const sortedExperience = [...experience].sort((a,b) => parseEndDate(b.date) - parseEndDate(a.date));

export default function Experience() {
    const { t } = useLanguage();
    return <section id="experience" className="section">
        <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">{t("03 / ALONG THE WAY")}</p><h2>{t("Professional Experience")}</h2></div><p>{t("Building, teaching, and learning.")}</p></div>
            <div className="experience-list">{sortedExperience.map(exp => {
                const Icon = exp.role.includes("Teaching") ? GraduationCap : exp.role.includes("Research") ? BrainCircuit : BriefcaseBusiness;
                return <article className="experience-item" key={exp.title}>
                    <div className="experience-meta"><span className="experience-icon"><Icon size={20} /></span><p>{t(exp.date)}</p><span><MapPin size={14} />{t(exp.location)}</span></div>
                    <div className="experience-content"><div className="employer-heading">
                            <div><p className="organization">{t(exp.organization)}</p><h3>{t(exp.role)}</h3></div>
                            <span className={`employer-mark employer-${exp.employer}`}>
                                {exp.employer === "rpi" ? <SchoolLogo school="rpi" className="employer-logo" /> : exp.employer === "haier" ? <Building2 size={20} aria-hidden="true" /> : <Landmark size={20} aria-hidden="true" />}
                            </span>
                        </div>
                        <ul className="detail-list">{exp.details.map(detail => <li key={detail}>{t(detail)}</li>)}</ul>
                        <div className="tech-list">{exp.tech.map(tech => <TechBadge key={tech} name={tech} />)}</div>
                    </div>
                </article>;
            })}</div>
        </div>
    </section>;
}
