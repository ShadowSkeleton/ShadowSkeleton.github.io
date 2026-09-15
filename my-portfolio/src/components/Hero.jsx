import useLanguage from "../hooks/useLanguage";
import { ArrowDown, ArrowUpRight, MapPin, Code2 } from "./Icons";

export default function Hero() {
    const { t } = useLanguage();
    return <section id="hero" className="hero">
        <div className="shell hero-grid">
            <div className="hero-copy">
                <p className="eyebrow"><Code2 size={16} /> {t("Software Developer")}</p>
                <p className="hero-greeting">{t("Hello, I’m")}</p>
                <h1>Jingrui <span>Feng.</span></h1>
                <p className="hero-subtitle">{t("Building useful software, from web platforms to native iOS apps.")}</p>
                <div className="button-row">
                    <a href="#projects" className="button button-primary"><span className="button-content">{t("View My Work")} <span className="button-arrow"><ArrowUpRight size={18} /></span></span></a>
                    <a href="#contact" className="button button-secondary"><span className="button-content">{t("Get In Touch")}</span></a>
                </div>
                <p className="hero-location"><span className="hero-location-place"><MapPin size={15} /> {t("Jersey City, NJ")}</span><span className="hero-location-divider">·</span><span>{t("M.S. in Information Systems at NYU")}</span></p>
            </div>
            <div className="portrait-composition">
                <div className="portrait-frame">
                    <img src="/profile-portrait.jpg" alt="Jingrui Feng" width="800" height="1200" fetchPriority="high" decoding="async" />
                </div>
                <div className="portrait-caption"><span>{t("Curiosity, in practice.")}</span><Code2 size={18} /></div>
            </div>
        </div>
        <div className="shell hero-bottom"><span>{t("Code. Create. Keep learning.")}</span><a href="#about">{t("Explore the portfolio")} <ArrowDown size={15} /></a></div>
    </section>;
}
