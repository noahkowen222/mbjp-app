import { t as supabase } from "./client-DuVlf4XG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-DMLItrc4.js
var cmsLanguageOptions = [
	{
		value: "en",
		label: "English",
		nativeLabel: "English",
		shortLabel: "EN"
	},
	{
		value: "ur",
		label: "Urdu",
		nativeLabel: "اردو",
		shortLabel: "UR"
	},
	{
		value: "sd",
		label: "Sindhi",
		nativeLabel: "سنڌي",
		shortLabel: "SD"
	}
];
function normalizeCmsLanguage(value) {
	if (value === "ur" || value === "roman_ur") return "ur";
	if (value === "sd") return "sd";
	return "en";
}
function getCmsLanguageLabel(value) {
	const normalized = normalizeCmsLanguage(value);
	return cmsLanguageOptions.find((item) => item.value === normalized)?.label ?? "English";
}
var supabaseAny = supabase;
var cmsPublicPages = [
	{
		slug: "about",
		eyebrow: "About MBJP",
		fallbackTitle: "About Marwardi Bhatti Jamaat Pakistan",
		fallbackSubtitle: "A non-political, welfare-focused and member-verified community platform for Marwardi Bhatti families across Pakistan.",
		fallbackContent: "Marwardi Bhatti Jamaat Pakistan (MBJP) is a community welfare platform created to organize membership, education support, health assistance, welfare cases, employment support, donations and verified public service records.\n\nThe organization is designed to work through transparent membership verification, responsible admin review, district/taluka coordination and digital records.\n\nThis page can be updated from the Admin CMS panel."
	},
	{
		slug: "vision-mission",
		eyebrow: "Vision & Mission",
		fallbackTitle: "Vision and Mission",
		fallbackSubtitle: "To build an organized, educated, self-reliant and service-oriented Marwardi Bhatti community across Sindh.",
		fallbackContent: "Vision:\nTo make the Marwardi Bhatti community living across Sindh educationally, economically, socially, morally and organizationally strong, dignified, self-reliant and united.\n\nMission:\nTo establish an organized system of membership, education, health, employment, welfare, donations and mutual cooperation for deserving and talented members of the community.\n\nThis page can be updated from the Admin CMS panel."
	},
	{
		slug: "manifesto",
		eyebrow: "Manifesto / Manshoor",
		fallbackTitle: "Manifesto / Manshoor",
		fallbackSubtitle: "The guiding principles and public commitment of Marwardi Bhatti Jamaat Pakistan.",
		fallbackContent: "Marwardi Bhatti Jamaat Pakistan works for education, health, employment, welfare, social support, representation, unity, dignity and service.\n\nCore manifesto points include:\n- Education support and scholarships\n- Health assistance and emergency help\n- Employment and skills support\n- Welfare cases for deserving families\n- Transparent donations and finance records\n- Community unity and verified membership\n\nThis page can be updated from the Admin CMS panel."
	},
	{
		slug: "constitution",
		eyebrow: "Constitution",
		fallbackTitle: "MBJP Constitution",
		fallbackSubtitle: "The constitutional structure, roles, responsibilities and organizational rules of MBJP.",
		fallbackContent: "The constitution defines MBJP membership, organizational structure, Central Executive Committee, Central Advisory Committee, provincial, divisional, district and taluka units, duties of office bearers, program management, finance rules, discipline, records and reporting.\n\nCurrent hierarchy:\nCEC → Advisory → Provincial → Divisional → District → Taluka\n\nThis page can be updated from the Admin CMS panel."
	},
	{
		slug: "cwc",
		eyebrow: "Central Working Committee",
		fallbackTitle: "Central Working Committee",
		fallbackSubtitle: "The top-level governing and executive body responsible for day-to-day decisions and policy implementation.",
		fallbackContent: "The Central Working Committee (CWC) is the top-level governing and executive body of Marwardi Bhatti Jamaat Pakistan.\n\nCentral Cabinet designations include:\n- Chairman\n- Senior Vice Chairman\n- Vice Chairman\n- General Secretary\n- Information Secretary\n\nAdditional committees, wings and advisory boards may be created as needed.\n\nThis page can be updated from the Admin CMS panel."
	},
	{
		slug: "contact",
		eyebrow: "Contact",
		fallbackTitle: "Contact Marwardi Bhatti Jamaat Pakistan",
		fallbackSubtitle: "For membership, program support, donations, verification and committee coordination.",
		fallbackContent: "Contact information can be updated from the Admin CMS panel.\n\nSuggested fields:\n- WhatsApp number\n- Office address\n- Email\n- District coordination contacts\n- Donation account information\n- Social media links"
	}
];
function getCmsConfig(slug) {
	return cmsPublicPages.find((page) => page.slug === slug) ?? cmsPublicPages[0];
}
async function fetchPublishedCmsPage(slug, language = "en") {
	const selectedLanguage = normalizeCmsLanguage(language);
	const { data, error } = await supabaseAny.from("cms_pages").select("*").eq("slug", slug).eq("language", selectedLanguage).eq("status", "published").maybeSingle();
	if (error) {
		console.warn(`CMS page load failed for ${slug} (${selectedLanguage}):`, error.message);
		return null;
	}
	return data ?? null;
}
async function fetchCmsPageForAdmin(slug, language = "en") {
	const selectedLanguage = normalizeCmsLanguage(language);
	const { data, error } = await supabaseAny.from("cms_pages").select("*").eq("slug", slug).eq("language", selectedLanguage).maybeSingle();
	if (error) throw error;
	return data ?? null;
}
async function fetchAllCmsPagesForAdmin() {
	const { data, error } = await supabaseAny.from("cms_pages").select("*").order("slug", { ascending: true }).order("language", { ascending: true });
	if (error) throw error;
	return data ?? [];
}
async function saveCmsPage(input) {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) throw new Error("You must be logged in to update CMS content.");
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const language = normalizeCmsLanguage(input.language);
	const { error } = await supabaseAny.from("cms_pages").upsert({
		slug: input.slug,
		language,
		title: input.title.trim(),
		subtitle: input.subtitle?.trim() || null,
		content: input.content.trim(),
		status: input.status,
		published_at: input.status === "published" ? now : null,
		updated_by: user.id,
		updated_at: now
	}, { onConflict: "slug,language" });
	if (error) throw error;
}
async function currentUserCanManageCms() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return false;
	const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", ["admin", "super_admin"]).limit(1);
	if (error) return false;
	return Boolean(data?.length);
}
function formatCmsContent(content) {
	return content.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
}
function getCmsStatusClass(status) {
	if (status === "published") return "bg-emerald-50 text-emerald-800 ring-emerald-200";
	if (status === "draft") return "bg-amber-50 text-amber-800 ring-amber-200";
	return "bg-slate-100 text-slate-700 ring-slate-200";
}
//#endregion
export { fetchCmsPageForAdmin as a, getCmsConfig as c, normalizeCmsLanguage as d, saveCmsPage as f, fetchAllCmsPagesForAdmin as i, getCmsLanguageLabel as l, cmsPublicPages as n, fetchPublishedCmsPage as o, currentUserCanManageCms as r, formatCmsContent as s, cmsLanguageOptions as t, getCmsStatusClass as u };
