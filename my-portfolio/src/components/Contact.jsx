import useLanguage from "../hooks/useLanguage";
import { Mail, Linkedin, Github, ArrowUpRight, ArrowUp } from "lucide-react";

const links = [
    { label: "Email Me", href: "mailto:jacksonfeng0130@yahoo.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jingrui-feng/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/shadowskeleton", icon: Github },
];

export default function Contact() {
    const { t } = useLanguage();
    return <section id="contact" className="section contact-section">
        <div className="shell">
            <div className="contact-panel"><p className="eyebrow">{t("08 / LET’S CONNECT")}</p><h2>{t("Get In Touch")}<span>.</span></h2><p>{t("Have a software role, a project, or an idea to discuss? I’d be glad to hear from you.")}</p>
                <div className="button-row">{links.map((link, index) => { const {label,href,icon: Icon} = link; return <a className={`button ${index === 0 ? "button-primary" : "button-secondary"}`} key={label} href={href} {...(href.startsWith("https:") ? {target:"_blank", rel:"noopener noreferrer", "aria-label": t("{label} (opens in a new tab)", { label: t(label) })} : {})}><span className="button-content"><Icon size={18} />{t(label)}<ArrowUpRight size={16} /></span></a>; })}</div>
            </div>
            <footer className="site-footer"><span>© {new Date().getFullYear()} {t("Jingrui Feng. All rights reserved.")}</span><a href="#hero">{t("Back to top")} <ArrowUp size={15} /></a></footer>
        </div>
    </section>;
}
