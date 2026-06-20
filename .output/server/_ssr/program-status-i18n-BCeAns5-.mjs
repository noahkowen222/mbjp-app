//#region node_modules/.nitro/vite/services/ssr/assets/program-status-i18n-BCeAns5-.js
var STORAGE_KEY = "mbjp_language";
function getStoredProgramLanguage() {
	if (typeof window === "undefined") return "en";
	const value = window.localStorage.getItem(STORAGE_KEY);
	if (value === "ur" || value === "sd" || value === "en") return value;
	return "en";
}
function localizedProgramLabel(labels, fallback, language = getStoredProgramLanguage()) {
	return labels?.[language] ?? labels?.en ?? fallback;
}
//#endregion
export { localizedProgramLabel as t };
