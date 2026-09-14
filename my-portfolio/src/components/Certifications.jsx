import useLanguage from "../hooks/useLanguage";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

const certs = [
        {
            title: "Introduction to Generative AI",
            org: "Google Cloud (Coursera)",
            date: "Issued Oct 2023",
            link: "https://www.coursera.org/account/accomplishments/verify/DPDYZCK5F797",
        },
        {
            title: "Microsoft Certified: Azure AI Fundamentals",
            org: "Microsoft",
            date: "Issued Apr 2023",
        },
    ];

export default function Certifications() {
    const { t } = useLanguage();
    return <section id="certifications" className="section">
        <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">{t("06 / CONTINUED LEARNING")}</p><h2>{t("Certifications")}</h2></div></div>
            <div className="cert-grid">{certs.map(cert => <article className="cert-card" key={cert.title}>
                <BadgeCheck className="cert-icon" size={28} /><div><p className="eyebrow">{cert.org}</p><h3>{t(cert.title)}</h3><p className="muted">{t(cert.date)}</p>
                {cert.link && <a className="text-link" href={cert.link} target="_blank" rel="noopener noreferrer">{t("View Credential")} <ArrowUpRight size={16} /></a>}</div>
            </article>)}</div>
        </div>
    </section>;
}
