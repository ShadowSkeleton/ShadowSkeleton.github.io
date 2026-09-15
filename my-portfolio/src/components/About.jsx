import useLanguage from "../hooks/useLanguage";
import { Code2, Users } from "./Icons";

export default function About() {
    const { t, language } = useLanguage();
    return <section id="about" className="section">
        <div className="shell about-grid">
            <div><p className="eyebrow">{t("A little about me")}</p><h2>{t("About Me")}</h2><div className="about-interests"><span><Code2 size={17} />{t("Full-stack development")}</span><span><Users size={17} />{t("Human-computer interaction")}</span></div></div>
            <div className="about-copy">
                <p>{language === "zh" ? <>我是 <strong>Jingrui Feng</strong>，毕业于<strong>伦斯勒理工学院</strong>信息技术与 Web 科学专业，目前在<strong>纽约大学</strong>攻读信息系统硕士学位，现居<strong>新泽西州泽西市</strong>。</> : <>I’m <strong>Jingrui Feng</strong>, a software developer based in <strong>{t("Jersey City, NJ")}</strong>. I earned my B.S. in Information Technology and Web Science at <strong>{t("Rensselaer Polytechnic Institute")}</strong> and am now pursuing an M.S. in Information Systems at <strong>{t("New York University")}</strong>.</>}</p>
                <p>{t("I build full-stack applications and native iOS apps, with a focus on clear interfaces, reliable systems, and maintainable code. My work spans personal finance, order management, and robotics workflows.")}</p>
                <p>{language === "zh" ? <>我关注<strong>人机交互</strong>，也关心技术决策如何影响日常体验。我喜欢把复杂的工作流程转化为直观易用的工具。</> : <>I’m interested in <strong>{t("human-computer interaction")}</strong> and how technical decisions shape everyday experiences. I like turning complex workflows into tools that feel straightforward to use.</>}</p>
            </div>
        </div>
    </section>;
}
