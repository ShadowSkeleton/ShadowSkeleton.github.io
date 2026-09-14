import { Languages } from "lucide-react";
import useLanguage from "../hooks/useLanguage";

export default function LanguageToggle() {
    const { language, changeLanguage, t } = useLanguage();
    const label = language === "en" ? "切换为中文" : "Switch to English";
    return <>
        <button type="button" className="language-toggle" onClick={() => changeLanguage(language === "en" ? "zh" : "en")}
            aria-label={label} title={label} lang={language === "en" ? "zh-CN" : "en"}>
            <Languages size={17} aria-hidden="true" /><span>{language === "en" ? "中文" : "EN"}</span>
        </button>
        <span className="sr-only" role="status" aria-live="polite">{t("Page language: English")}</span>
    </>;
}
