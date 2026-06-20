//#region node_modules/.nitro/vite/services/ssr/assets/formatters-BY4KepB2.js
function formatDisplayDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function maskCnic(value) {
	if (!value) return "N/A";
	const digits = value.replace(/\D/g, "");
	if (digits.length !== 13) return "*****-*******-*";
	return `${digits.slice(0, 5)}-*****${digits.slice(10, 12)}-${digits.slice(12)}`;
}
function maskMobile(value) {
	if (!value) return "N/A";
	const clean = value.replace(/[^\d+]/g, "");
	if (clean.startsWith("+92") && clean.length >= 13) return `${clean.slice(0, 6)}*****${clean.slice(-2)}`;
	if (clean.startsWith("03") && clean.length >= 11) return `${clean.slice(0, 4)}*****${clean.slice(-2)}`;
	return "***********";
}
function csvCell(value) {
	return `"${String(value ?? "").replace(/"/g, "\"\"")}"`;
}
function uniqueSorted(values) {
	return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}
function normalizeMobile(value) {
	let normalized = value.trim().replace(/[^\d+]/g, "");
	if (normalized.startsWith("0092")) normalized = `+92${normalized.slice(4)}`;
	if (normalized.startsWith("92")) normalized = `+${normalized}`;
	return normalized;
}
function formatMobileInput(value) {
	const cleaned = value.replace(/[^\d+]/g, "");
	if (cleaned.startsWith("+92")) return cleaned.slice(0, 13);
	if (cleaned.startsWith("92")) return `+${cleaned.slice(0, 12)}`;
	if (cleaned.startsWith("0092")) return `+92${cleaned.slice(4, 14)}`;
	return cleaned.slice(0, 11);
}
function formatCnicInput(value) {
	const digits = value.replace(/\D/g, "").slice(0, 13);
	if (digits.length <= 5) return digits;
	if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
	return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
}
function optionalText(value) {
	const trimmed = value.trim();
	return trimmed ? trimmed : null;
}
function isPakistaniMobile(value) {
	const normalized = normalizeMobile(value);
	return /^(\+92|0)3[0-9]{9}$/.test(normalized);
}
function todayDate() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
//#endregion
export { isPakistaniMobile as a, normalizeMobile as c, uniqueSorted as d, formatMobileInput as i, optionalText as l, formatCnicInput as n, maskCnic as o, formatDisplayDate as r, maskMobile as s, csvCell as t, todayDate as u };
