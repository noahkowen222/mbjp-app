import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-page-i18n-CE-YD7oi.js
function useLocalizedProgramCopy(translations) {
	const { language } = useI18n();
	const selectedLanguage = language in translations ? language : "en";
	const textDir = selectedLanguage === "en" ? "ltr" : "rtl";
	const isRtl = textDir === "rtl";
	const textAlignClass = isRtl ? "text-right" : "text-left";
	const arrowClass = isRtl ? "mr-2 rotate-180" : "ml-2";
	return {
		copy: translations[selectedLanguage],
		language: selectedLanguage,
		isRtl,
		textDir,
		textAlignClass,
		arrowClass
	};
}
//#endregion
export { useLocalizedProgramCopy as t };
