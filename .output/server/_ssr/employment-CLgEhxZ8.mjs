import { t as localizedProgramLabel } from "./program-status-i18n-BCeAns5-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employment-CLgEhxZ8.js
var EMPLOYMENT_DOCUMENT_BUCKET = "employment-documents";
var EMPLOYMENT_DOCUMENT_ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png,image/webp";
var employmentTypeOptions = [
	{
		value: "full_time",
		label: "Full Time"
	},
	{
		value: "part_time",
		label: "Part Time"
	},
	{
		value: "contract",
		label: "Contract"
	},
	{
		value: "internship",
		label: "Internship"
	},
	{
		value: "temporary",
		label: "Temporary"
	},
	{
		value: "remote",
		label: "Remote"
	},
	{
		value: "any",
		label: "Any suitable opportunity"
	}
];
var currentEmploymentStatusOptions = [
	{
		value: "unemployed",
		label: "Unemployed"
	},
	{
		value: "employed",
		label: "Currently Employed"
	},
	{
		value: "self_employed",
		label: "Self Employed"
	},
	{
		value: "student",
		label: "Student"
	},
	{
		value: "fresh_graduate",
		label: "Fresh Graduate"
	},
	{
		value: "seeking_better_opportunity",
		label: "Seeking Better Opportunity"
	}
];
var trainingInterestOptions = [
	{
		value: "computer_skills",
		label: "Computer Skills"
	},
	{
		value: "english_language",
		label: "English Language"
	},
	{
		value: "office_management",
		label: "Office Management"
	},
	{
		value: "technical_skill",
		label: "Technical Skill"
	},
	{
		value: "business_skill",
		label: "Business Skill"
	},
	{
		value: "driving",
		label: "Driving"
	},
	{
		value: "tailoring",
		label: "Tailoring"
	},
	{
		value: "other",
		label: "Other Training"
	},
	{
		value: "not_interested",
		label: "Not Interested"
	}
];
var shortlistStatusOptions = [
	{
		value: "not_shortlisted",
		label: "Not Shortlisted"
	},
	{
		value: "shortlisted",
		label: "Shortlisted"
	},
	{
		value: "interview_scheduled",
		label: "Interview Scheduled"
	},
	{
		value: "recommended",
		label: "Recommended"
	},
	{
		value: "placed",
		label: "Placed / Employed"
	},
	{
		value: "not_selected",
		label: "Not Selected"
	}
];
var employmentDocumentOptions = [
	{
		type: "cv_resume",
		label: "CV / Resume",
		required: true,
		description: "Updated CV in PDF, DOC or DOCX format."
	},
	{
		type: "cnic_copy",
		label: "CNIC Copy",
		required: true,
		description: "Applicant CNIC front/back or clear image/PDF."
	},
	{
		type: "education_certificate",
		label: "Education Certificate",
		required: false,
		description: "Degree, certificate, marksheet or transcript."
	},
	{
		type: "experience_certificate",
		label: "Experience Certificate",
		required: false,
		description: "Previous employment proof, if available."
	},
	{
		type: "skills_certificate",
		label: "Skills Certificate",
		required: false,
		description: "Technical, computer or vocational skill certificate."
	},
	{
		type: "other_document",
		label: "Other Supporting Document",
		required: false,
		description: "Any other document useful for placement review."
	}
];
var employmentRequiredDocumentTypes = employmentDocumentOptions.filter((item) => item.required).map((item) => item.type);
var employmentStatusLabelTranslations = {
	submitted: {
		en: "Registered",
		ur: "رجسٹرڈ",
		sd: "رجسٽرڊ"
	},
	under_review: {
		en: "Under Review",
		ur: "زیر جائزہ",
		sd: "جائزي هيٺ"
	},
	need_more_info: {
		en: "Need More Info",
		ur: "مزید معلومات درکار",
		sd: "وڌيڪ معلومات گهربل"
	},
	approved: {
		en: "Shortlisted",
		ur: "شارٹ لسٹ",
		sd: "شارٽ لسٽ"
	},
	rejected: {
		en: "Rejected",
		ur: "مسترد",
		sd: "رد ٿيل"
	},
	paid_completed: {
		en: "Placed / Employed",
		ur: "پلیسڈ / ملازم",
		sd: "پليسڊ / ملازم"
	},
	completed: {
		en: "Closed",
		ur: "بند",
		sd: "بند"
	}
};
var employmentDocumentStatusLabelTranslations = {
	pending: {
		en: "Pending Review",
		ur: "جائزہ باقی",
		sd: "جائزو باقي"
	},
	verified: {
		en: "Verified",
		ur: "تصدیق شدہ",
		sd: "تصديق ٿيل"
	},
	rejected: {
		en: "Rejected",
		ur: "مسترد",
		sd: "رد ٿيل"
	},
	need_more_info: {
		en: "Need More Info",
		ur: "مزید معلومات درکار",
		sd: "وڌيڪ معلومات گهربل"
	},
	needs_reupload: {
		en: "Needs Re-upload",
		ur: "دوبارہ اپلوڈ درکار",
		sd: "ٻيهر اپلوڊ گهربل"
	}
};
var employmentDocumentLabelTranslations = {
	cv_resume: {
		en: "CV / Resume",
		ur: "CV / ریزیومے",
		sd: "CV / ريزومي"
	},
	cnic_copy: {
		en: "CNIC Copy",
		ur: "CNIC کاپی",
		sd: "CNIC ڪاپي"
	},
	education_certificate: {
		en: "Education Certificate",
		ur: "تعلیمی سرٹیفکیٹ",
		sd: "تعليمي سرٽيفڪيٽ"
	},
	experience_certificate: {
		en: "Experience Certificate",
		ur: "تجربہ سرٹیفکیٹ",
		sd: "تجربي جو سرٽيفڪيٽ"
	},
	skills_certificate: {
		en: "Skills Certificate",
		ur: "اسکلز سرٹیفکیٹ",
		sd: "مهارتن جو سرٽيفڪيٽ"
	},
	other_document: {
		en: "Other Supporting Document",
		ur: "دیگر معاون دستاویز",
		sd: "ٻيو مددگار دستاويز"
	}
};
var shortlistStatusLabelTranslations = {
	not_shortlisted: {
		en: "Not Shortlisted",
		ur: "شارٹ لسٹ نہیں",
		sd: "شارٽ لسٽ نه ٿيل"
	},
	shortlisted: {
		en: "Shortlisted",
		ur: "شارٹ لسٹ",
		sd: "شارٽ لسٽ"
	},
	interview_scheduled: {
		en: "Interview Scheduled",
		ur: "انٹرویو شیڈول",
		sd: "انٽرويو شيڊول"
	},
	recommended: {
		en: "Recommended",
		ur: "سفارش شدہ",
		sd: "سفارش ٿيل"
	},
	placed: {
		en: "Placed / Employed",
		ur: "پلیسڈ / ملازم",
		sd: "پليسڊ / ملازم"
	},
	not_selected: {
		en: "Not Selected",
		ur: "منتخب نہیں",
		sd: "منتخب نه ٿيل"
	}
};
var employmentTypeLabelTranslations = {
	full_time: {
		en: "Full Time",
		ur: "فل ٹائم",
		sd: "فل ٽائيم"
	},
	part_time: {
		en: "Part Time",
		ur: "پارٹ ٹائم",
		sd: "پارٽ ٽائيم"
	},
	contract: {
		en: "Contract",
		ur: "کنٹریکٹ",
		sd: "ڪنٽريڪٽ"
	},
	internship: {
		en: "Internship",
		ur: "انٹرن شپ",
		sd: "انٽرن شپ"
	},
	temporary: {
		en: "Temporary",
		ur: "عارضی",
		sd: "عارضي"
	},
	remote: {
		en: "Remote",
		ur: "ریموٹ",
		sd: "ريموٽ"
	},
	any: {
		en: "Any suitable opportunity",
		ur: "کوئی بھی مناسب موقع",
		sd: "ڪو به مناسب موقعو"
	}
};
var currentEmploymentStatusLabelTranslations = {
	unemployed: {
		en: "Unemployed",
		ur: "بے روزگار",
		sd: "بيروزگار"
	},
	employed: {
		en: "Currently Employed",
		ur: "ملازمت میں",
		sd: "ملازمت ۾"
	},
	self_employed: {
		en: "Self Employed",
		ur: "خود روزگار",
		sd: "خود روزگار"
	},
	student: {
		en: "Student",
		ur: "طالب علم",
		sd: "شاگرد"
	},
	fresh_graduate: {
		en: "Fresh Graduate",
		ur: "فریش گریجویٹ",
		sd: "فريش گريجوئيٽ"
	},
	seeking_better_opportunity: {
		en: "Seeking Better Opportunity",
		ur: "بہتر موقع کی تلاش",
		sd: "بهتر موقعي جي ڳولا"
	}
};
var trainingInterestLabelTranslations = {
	computer_skills: {
		en: "Computer Skills",
		ur: "کمپیوٹر اسکلز",
		sd: "ڪمپيوٽر مهارتون"
	},
	english_language: {
		en: "English Language",
		ur: "انگریزی زبان",
		sd: "انگريزي ٻولي"
	},
	office_management: {
		en: "Office Management",
		ur: "آفس مینجمنٹ",
		sd: "آفيس مينيجمينٽ"
	},
	technical_skill: {
		en: "Technical Skill",
		ur: "ٹیکنیکل اسکل",
		sd: "ٽيڪنيڪل مهارت"
	},
	business_skill: {
		en: "Business Skill",
		ur: "بزنس اسکل",
		sd: "بزنس مهارت"
	},
	driving: {
		en: "Driving",
		ur: "ڈرائیونگ",
		sd: "ڊرائيونگ"
	},
	tailoring: {
		en: "Tailoring",
		ur: "سلائی",
		sd: "سلائي"
	},
	other: {
		en: "Other Training",
		ur: "دیگر ٹریننگ",
		sd: "ٻي ٽريننگ"
	},
	not_interested: {
		en: "Not Interested",
		ur: "دلچسپی نہیں",
		sd: "دلچسپي نه آهي"
	}
};
function getEmploymentStatusLabel(status) {
	return localizedProgramLabel(employmentStatusLabelTranslations[status], status);
}
function getEmploymentStatusClass(status) {
	return {
		submitted: "border-blue-200 bg-blue-50 text-blue-700",
		under_review: "border-amber-200 bg-amber-50 text-amber-700",
		need_more_info: "border-orange-200 bg-orange-50 text-orange-700",
		approved: "border-emerald-200 bg-emerald-50 text-emerald-700",
		rejected: "border-red-200 bg-red-50 text-red-700",
		paid_completed: "border-teal-200 bg-teal-50 text-teal-700",
		completed: "border-slate-200 bg-slate-50 text-slate-700"
	}[status] || "border-slate-200 bg-slate-50 text-slate-700";
}
function getEmploymentDocumentLabel(type) {
	const typedType = type;
	const fallback = employmentDocumentOptions.find((item) => item.type === type)?.label || type;
	return localizedProgramLabel(employmentDocumentLabelTranslations[typedType], fallback);
}
function getShortlistStatusLabel(value) {
	const typedValue = value;
	const fallback = shortlistStatusOptions.find((item) => item.value === value)?.label || "Not Shortlisted";
	return localizedProgramLabel(shortlistStatusLabelTranslations[typedValue], fallback);
}
function getEmploymentTypeLabel(value) {
	const typedValue = value;
	const fallback = employmentTypeOptions.find((item) => item.value === value)?.label || "Any";
	return localizedProgramLabel(employmentTypeLabelTranslations[typedValue], fallback);
}
function getCurrentEmploymentStatusLabel(value) {
	const typedValue = value;
	const fallback = currentEmploymentStatusOptions.find((item) => item.value === value)?.label || "Not provided";
	return localizedProgramLabel(currentEmploymentStatusLabelTranslations[typedValue], fallback);
}
function getTrainingInterestLabel(value) {
	const typedValue = value;
	const fallback = trainingInterestOptions.find((item) => item.value === value)?.label || "Not provided";
	return localizedProgramLabel(trainingInterestLabelTranslations[typedValue], fallback);
}
function getEmploymentDocumentStatusLabel(status) {
	return localizedProgramLabel(employmentDocumentStatusLabelTranslations[status], status);
}
function getEmploymentDocumentStatusClass(status) {
	return {
		pending: "bg-slate-100 text-slate-700",
		verified: "bg-emerald-100 text-emerald-700",
		rejected: "bg-red-100 text-red-700",
		need_more_info: "bg-amber-100 text-amber-700"
	}[status] || "bg-slate-100 text-slate-700";
}
function validateEmploymentDocumentFile(file) {
	if (file.size > 5242880) return `File size 5MB se zyada nahi honi chahiye.`;
	if (![
		"application/pdf",
		"application/msword",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		"image/jpeg",
		"image/png",
		"image/webp"
	].includes(file.type)) return "Sirf PDF, DOC, DOCX, JPG, PNG ya WEBP file upload karen.";
	return "";
}
function createEmploymentDocumentStoragePath({ userId, applicationId, documentType, fileName }) {
	const safeExt = (fileName.includes(".") ? fileName.split(".").pop() : "file")?.toLowerCase().replace(/[^a-z0-9]/g, "") || "file";
	return `${userId}/${applicationId}/${documentType}-${Date.now()}.${safeExt}`;
}
function formatEmploymentFileSize(size) {
	if (!size) return "Unknown size";
	if (size < 1024) return `${size} B`;
	if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
	return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
function normalizeSkills(value) {
	return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function formatSkills(skills) {
	return skills?.length ? skills.join(", ") : "Not provided";
}
function parseVerifyMembershipResult(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return {
		found: false,
		verified: false,
		message: "Invalid membership response."
	};
	return value;
}
//#endregion
export { validateEmploymentDocumentFile as C, trainingInterestOptions as S, getShortlistStatusLabel as _, employmentDocumentOptions as a, parseVerifyMembershipResult as b, formatEmploymentFileSize as c, getEmploymentDocumentLabel as d, getEmploymentDocumentStatusClass as f, getEmploymentTypeLabel as g, getEmploymentStatusLabel as h, currentEmploymentStatusOptions as i, formatSkills as l, getEmploymentStatusClass as m, EMPLOYMENT_DOCUMENT_BUCKET as n, employmentRequiredDocumentTypes as o, getEmploymentDocumentStatusLabel as p, createEmploymentDocumentStoragePath as r, employmentTypeOptions as s, EMPLOYMENT_DOCUMENT_ACCEPT as t, getCurrentEmploymentStatusLabel as u, getTrainingInterestLabel as v, shortlistStatusOptions as x, normalizeSkills as y };
