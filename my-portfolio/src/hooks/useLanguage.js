import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

export default function useLanguage() {
    return useContext(LanguageContext);
}
