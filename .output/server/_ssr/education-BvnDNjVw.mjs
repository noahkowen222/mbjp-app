import { t as localizedProgramLabel } from "./program-status-i18n-BCeAns5-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-BvnDNjVw.js
var EDUCATION_DOCUMENT_BUCKET = "program-documents";
var EDUCATION_DOCUMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
var EDUCATION_ALLOWED_DOCUMENT_MIME_TYPES = [
	"application/pdf",
	"image/jpeg",
	"image/png",
	"image/webp"
];
var relationshipOptions = [
	{
		value: "self",
		label: "Self"
	},
	{
		value: "son",
		label: "Son"
	},
	{
		value: "daughter",
		label: "Daughter"
	},
	{
		value: "father",
		label: "Father"
	},
	{
		value: "mother",
		label: "Mother"
	},
	{
		value: "brother",
		label: "Brother"
	},
	{
		value: "sister",
		label: "Sister"
	},
	{
		value: "wife",
		label: "Wife"
	},
	{
		value: "husband",
		label: "Husband"
	},
	{
		value: "guardian",
		label: "Guardian"
	},
	{
		value: "other",
		label: "Other"
	}
];
var instituteTypeOptions = [
	"School",
	"College",
	"University",
	"Madrasa",
	"Technical Institute",
	"Other"
];
var supportTypeOptions = [
	"Admission Fee",
	"Monthly Fee",
	"Exam Fee",
	"Books",
	"Uniform",
	"Hostel",
	"Transport",
	"Full Scholarship",
	"Skills Training",
	"Other"
];
var educationDocumentOptions = [
	{
		type: "student_cnic_bform",
		label: "Student CNIC / B-form",
		description: "Upload student CNIC or B-form copy.",
		required: true
	},
	{
		type: "guardian_cnic",
		label: "Guardian CNIC",
		description: "Upload father / guardian CNIC copy.",
		required: true
	},
	{
		type: "marksheet",
		label: "Latest Marksheet",
		description: "Upload latest marksheet or result card.",
		required: true
	},
	{
		type: "admission_proof",
		label: "Admission Proof",
		description: "Upload admission letter, enrollment proof or institute slip.",
		required: true
	},
	{
		type: "fee_challan",
		label: "Fee Challan",
		description: "Upload current fee challan or fee demand slip.",
		required: true
	},
	{
		type: "institute_card",
		label: "Institute Card / Enrollment Proof",
		description: "Upload student card or enrollment proof if available.",
		required: false
	},
	{
		type: "other",
		label: "Other Supporting Document",
		description: "Upload any other supporting document if needed.",
		required: false
	}
];
var educationRequiredDocumentTypes = educationDocumentOptions.filter((item) => item.required).map((item) => item.type);
var educationStatusLabels = {
	submitted: "Submitted",
	under_review: "Under Review",
	need_more_info: "Need More Info",
	approved: "Approved",
	rejected: "Rejected",
	paid_completed: "Paid / Completed",
	completed: "Completed"
};
var educationDocumentStatusLabels = {
	pending: "Pending Verification",
	verified: "Verified",
	rejected: "Rejected",
	needs_reupload: "Needs Re-upload"
};
var educationStatusLabelTranslations = {
	submitted: {
		en: "Submitted",
		ur: "جمع شدہ",
		sd: "جمع ٿيل"
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
		en: "Approved",
		ur: "منظور شدہ",
		sd: "منظور ٿيل"
	},
	rejected: {
		en: "Rejected",
		ur: "مسترد",
		sd: "رد ٿيل"
	},
	paid_completed: {
		en: "Paid / Completed",
		ur: "ادائیگی مکمل",
		sd: "ادائيگي مڪمل"
	},
	completed: {
		en: "Completed",
		ur: "مکمل",
		sd: "مڪمل"
	}
};
var educationDocumentStatusLabelTranslations = {
	pending: {
		en: "Pending Verification",
		ur: "تصدیق باقی",
		sd: "تصديق باقي"
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
	needs_reupload: {
		en: "Needs Re-upload",
		ur: "دوبارہ اپلوڈ درکار",
		sd: "ٻيهر اپلوڊ گهربل"
	}
};
var educationDocumentLabelTranslations = {
	student_cnic_bform: {
		en: "Student CNIC / B-form",
		ur: "طالب علم CNIC / ب فارم",
		sd: "شاگرد جو CNIC / ب فارم"
	},
	guardian_cnic: {
		en: "Guardian CNIC",
		ur: "سرپرست CNIC",
		sd: "سرپرست CNIC"
	},
	marksheet: {
		en: "Marksheet",
		ur: "مارک شیٹ",
		sd: "مارڪ شيٽ"
	},
	admission_proof: {
		en: "Admission Proof",
		ur: "داخلہ ثبوت",
		sd: "داخلا ثبوت"
	},
	fee_challan: {
		en: "Fee Challan",
		ur: "فیس چالان",
		sd: "في چالان"
	},
	institute_card: {
		en: "Institute Card",
		ur: "ادارہ کارڈ",
		sd: "اداري جو ڪارڊ"
	},
	other: {
		en: "Other Supporting Document",
		ur: "دیگر معاون دستاویز",
		sd: "ٻيو مددگار دستاويز"
	}
};
function getEducationStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(educationStatusLabelTranslations[typedStatus], educationStatusLabels[typedStatus] ?? status);
}
function getEducationStatusClass(status) {
	switch (status) {
		case "approved":
		case "paid_completed":
		case "completed": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected": return "bg-red-100 text-red-800 border-red-200";
		case "need_more_info": return "bg-amber-100 text-amber-800 border-amber-200";
		case "under_review": return "bg-blue-100 text-blue-800 border-blue-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function getEducationDocumentConfig(type) {
	return educationDocumentOptions.find((item) => item.type === type);
}
function getEducationDocumentLabel(type) {
	const typedType = type;
	const fallback = getEducationDocumentConfig(type)?.label ?? type;
	return localizedProgramLabel(educationDocumentLabelTranslations[typedType], fallback);
}
function getEducationDocumentStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(educationDocumentStatusLabelTranslations[typedStatus], educationDocumentStatusLabels[typedStatus] ?? status);
}
function getEducationDocumentStatusClass(status) {
	switch (status) {
		case "verified": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected": return "bg-red-100 text-red-800 border-red-200";
		case "needs_reupload": return "bg-amber-100 text-amber-800 border-amber-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function formatEducationFileSize(bytes) {
	if (!bytes || bytes <= 0) return "Unknown size";
	const kb = bytes / 1024;
	if (kb < 1024) return `${kb.toFixed(1)} KB`;
	return `${(kb / 1024).toFixed(2)} MB`;
}
function validateEducationDocumentFile(file) {
	if (file.size > 5242880) return {
		ok: false,
		message: `File size 5MB se zyada nahi honi chahiye.`
	};
	if (file.type && !EDUCATION_ALLOWED_DOCUMENT_MIME_TYPES.includes(file.type)) return {
		ok: false,
		message: "Only PDF, JPG, PNG ya WEBP documents allowed hain."
	};
	return {
		ok: true,
		message: ""
	};
}
function createEducationDocumentStoragePath({ userId, applicationId, documentType, fileName }) {
	const extension = getSafeFileExtension(fileName);
	const random = Math.random().toString(36).slice(2, 10);
	return `${userId}/${applicationId}/${documentType}-${Date.now()}-${random}.${extension}`;
}
function getSafeFileExtension(fileName) {
	const extension = fileName.split(".").pop()?.toLowerCase().trim();
	if (extension && /^[a-z0-9]+$/.test(extension)) return extension;
	return "bin";
}
//#endregion
export { educationRequiredDocumentTypes as a, getEducationDocumentStatusClass as c, getEducationStatusLabel as d, instituteTypeOptions as f, validateEducationDocumentFile as h, educationDocumentOptions as i, getEducationDocumentStatusLabel as l, supportTypeOptions as m, EDUCATION_DOCUMENT_BUCKET as n, formatEducationFileSize as o, relationshipOptions as p, createEducationDocumentStoragePath as r, getEducationDocumentLabel as s, EDUCATION_DOCUMENT_ACCEPT as t, getEducationStatusClass as u };
