import { t as localizedProgramLabel } from "./program-status-i18n-BCeAns5-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-BJr3C9Mk.js
var HEALTH_DOCUMENT_BUCKET = "health-documents";
var HEALTH_DOCUMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
var HEALTH_ALLOWED_DOCUMENT_MIME_TYPES = [
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
var patientGenderOptions = [
	"Male",
	"Female",
	"Other"
];
var treatmentTypeOptions = [
	"Emergency Treatment",
	"Surgery",
	"Medicine Support",
	"Lab Tests",
	"Hospital Admission",
	"Follow-up Treatment",
	"Chronic Disease Support",
	"Other"
];
var healthPaymentStatusOptions = [
	{
		value: "not_started",
		label: "Not Started"
	},
	{
		value: "pending",
		label: "Payment Pending"
	},
	{
		value: "approved",
		label: "Payment Approved"
	},
	{
		value: "partially_released",
		label: "Partially Released"
	},
	{
		value: "released",
		label: "Released"
	},
	{
		value: "completed",
		label: "Completed"
	}
];
var healthCommitteeDecisionOptions = [
	{
		value: "pending",
		label: "Pending Committee Review"
	},
	{
		value: "recommended",
		label: "Recommended"
	},
	{
		value: "not_recommended",
		label: "Not Recommended"
	},
	{
		value: "approved",
		label: "Committee Approved"
	},
	{
		value: "rejected",
		label: "Committee Rejected"
	},
	{
		value: "deferred",
		label: "Deferred / More Info Needed"
	}
];
var healthDocumentOptions = [
	{
		type: "patient_cnic_bform",
		label: "Patient CNIC / B-form",
		description: "Upload patient CNIC, B-form or identity document copy.",
		required: true
	},
	{
		type: "member_cnic",
		label: "Member CNIC",
		description: "Upload approved MBJP member CNIC copy.",
		required: true
	},
	{
		type: "medical_reports",
		label: "Medical Reports",
		description: "Upload diagnosis report, discharge summary or case report.",
		required: true
	},
	{
		type: "doctor_prescription",
		label: "Doctor Prescription",
		description: "Upload doctor prescription or treatment advice.",
		required: true
	},
	{
		type: "hospital_estimate",
		label: "Hospital Estimate",
		description: "Upload hospital estimate, bill or treatment cost proof.",
		required: true
	},
	{
		type: "lab_reports",
		label: "Lab Reports",
		description: "Upload lab reports if available.",
		required: false
	},
	{
		type: "other",
		label: "Other Supporting Document",
		description: "Upload any other supporting medical document if needed.",
		required: false
	}
];
var healthRequiredDocumentTypes = healthDocumentOptions.filter((item) => item.required).map((item) => item.type);
var healthStatusLabels = {
	submitted: "Submitted",
	under_review: "Under Medical Review",
	need_more_info: "Need More Info",
	approved: "Approved",
	rejected: "Rejected",
	paid_completed: "Payment Released",
	completed: "Case Closed"
};
var healthDocumentStatusLabels = {
	pending: "Pending Verification",
	verified: "Verified",
	rejected: "Rejected",
	needs_reupload: "Needs Re-upload"
};
var healthStatusLabelTranslations = {
	submitted: {
		en: "Submitted",
		ur: "جمع شدہ",
		sd: "جمع ٿيل"
	},
	under_review: {
		en: "Under Medical Review",
		ur: "طبی جائزہ جاری",
		sd: "طبي جائزو جاري"
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
		en: "Payment Released",
		ur: "ادائیگی جاری",
		sd: "ادائيگي جاري"
	},
	completed: {
		en: "Closed",
		ur: "بند",
		sd: "بند"
	}
};
var healthDocumentStatusLabelTranslations = {
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
var healthPaymentStatusLabelTranslations = {
	not_started: {
		en: "Not Started",
		ur: "شروع نہیں ہوا",
		sd: "شروع نه ٿيو"
	},
	pending: {
		en: "Payment Pending",
		ur: "ادائیگی باقی",
		sd: "ادائيگي باقي"
	},
	approved: {
		en: "Payment Approved",
		ur: "ادائیگی منظور",
		sd: "ادائيگي منظور"
	},
	partially_released: {
		en: "Partially Released",
		ur: "جزوی جاری",
		sd: "جزوي جاري"
	},
	released: {
		en: "Payment Released",
		ur: "ادائیگی جاری",
		sd: "ادائيگي جاري"
	},
	completed: {
		en: "Completed",
		ur: "مکمل",
		sd: "مڪمل"
	}
};
var healthCommitteeDecisionLabelTranslations = {
	pending: {
		en: "Pending Committee Review",
		ur: "کمیٹی جائزہ باقی",
		sd: "ڪميٽي جائزو باقي"
	},
	recommended: {
		en: "Recommended",
		ur: "سفارش شدہ",
		sd: "سفارش ٿيل"
	},
	not_recommended: {
		en: "Not Recommended",
		ur: "سفارش نہیں ہوئی",
		sd: "سفارش نه ٿيل"
	},
	approved: {
		en: "Committee Approved",
		ur: "کمیٹی سے منظور",
		sd: "ڪميٽي منظور ٿيل"
	},
	rejected: {
		en: "Committee Rejected",
		ur: "کمیٹی سے مسترد",
		sd: "ڪميٽي رد ٿيل"
	},
	deferred: {
		en: "Deferred / More Info Needed",
		ur: "موخر / مزید معلومات درکار",
		sd: "ملتوي / وڌيڪ معلومات گهربل"
	}
};
var healthCasePriorityLabelTranslations = {
	emergency: {
		en: "Emergency",
		ur: "ایمرجنسی",
		sd: "ايمرجنسي"
	},
	urgent: {
		en: "Urgent",
		ur: "فوری",
		sd: "تڪڙو"
	},
	normal: {
		en: "Normal",
		ur: "نارمل",
		sd: "نارمل"
	}
};
var healthDocumentLabelTranslations = {
	patient_cnic_bform: {
		en: "Patient CNIC / B-form",
		ur: "مریض CNIC / ب فارم",
		sd: "مريض CNIC / ب فارم"
	},
	member_cnic: {
		en: "Member CNIC",
		ur: "ممبر CNIC",
		sd: "ميمبر CNIC"
	},
	medical_reports: {
		en: "Medical Reports",
		ur: "میڈیکل رپورٹس",
		sd: "ميڊيڪل رپورٽون"
	},
	doctor_prescription: {
		en: "Doctor Prescription",
		ur: "ڈاکٹر نسخہ",
		sd: "ڊاڪٽر نسخو"
	},
	hospital_estimate: {
		en: "Hospital Estimate",
		ur: "ہسپتال تخمینہ",
		sd: "اسپتال تخمينو"
	},
	lab_reports: {
		en: "Lab Reports",
		ur: "لیب رپورٹس",
		sd: "ليب رپورٽون"
	},
	other: {
		en: "Other Supporting Document",
		ur: "دیگر معاون دستاویز",
		sd: "ٻيو مددگار دستاويز"
	}
};
function getHealthStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(healthStatusLabelTranslations[typedStatus], healthStatusLabels[typedStatus] ?? status);
}
function getHealthStatusClass(status) {
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
function getHealthDocumentConfig(type) {
	return healthDocumentOptions.find((item) => item.type === type);
}
function getHealthDocumentLabel(type) {
	const typedType = type;
	const fallback = getHealthDocumentConfig(type)?.label ?? type;
	return localizedProgramLabel(healthDocumentLabelTranslations[typedType], fallback);
}
function getHealthDocumentStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(healthDocumentStatusLabelTranslations[typedStatus], healthDocumentStatusLabels[typedStatus] ?? status);
}
function getHealthDocumentStatusClass(status) {
	switch (status) {
		case "verified": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected": return "bg-red-100 text-red-800 border-red-200";
		case "needs_reupload": return "bg-amber-100 text-amber-800 border-amber-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function getHealthPaymentStatusLabel(status) {
	if (!status) return localizedProgramLabel(healthPaymentStatusLabelTranslations.not_started, "Not Started");
	const typedStatus = status;
	const fallback = healthPaymentStatusOptions.find((item) => item.value === status)?.label ?? status;
	return localizedProgramLabel(healthPaymentStatusLabelTranslations[typedStatus], fallback);
}
function validateHealthDocumentFile(file) {
	if (file.size > 8388608) return {
		ok: false,
		message: `File size 8MB se kam honi chahiye.`
	};
	if (file.type && !HEALTH_ALLOWED_DOCUMENT_MIME_TYPES.includes(file.type)) return {
		ok: false,
		message: "Sirf PDF, JPG, PNG ya WEBP document upload karen."
	};
	return {
		ok: true,
		message: ""
	};
}
function createHealthDocumentStoragePath({ userId, applicationId, documentType, fileName }) {
	const extension = fileName.split(".").pop()?.toLowerCase() || "file";
	return `${userId}/${applicationId}/${documentType.replace(/[^a-z0-9_-]/gi, "-")}-${Date.now()}.${extension}`;
}
function formatHealthFileSize(size) {
	if (!size) return "Unknown size";
	const kb = size / 1024;
	if (kb < 1024) return `${kb.toFixed(1)} KB`;
	return `${(kb / 1024).toFixed(2)} MB`;
}
function isHealthEmergency(details) {
	return Boolean(details?.emergency);
}
function getHealthCommitteeDecisionLabel(status) {
	if (!status) return localizedProgramLabel(healthCommitteeDecisionLabelTranslations.pending, "Pending Committee Review");
	const typedStatus = status;
	const fallback = healthCommitteeDecisionOptions.find((item) => item.value === status)?.label ?? status;
	return localizedProgramLabel(healthCommitteeDecisionLabelTranslations[typedStatus], fallback);
}
function getHealthCommitteeDecisionClass(status) {
	switch (status) {
		case "approved":
		case "recommended": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected":
		case "not_recommended": return "bg-red-100 text-red-800 border-red-200";
		case "deferred": return "bg-amber-100 text-amber-800 border-amber-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function getHealthCasePriority(details) {
	if (details?.case_priority) return details.case_priority;
	return isHealthEmergency(details) ? "emergency" : "normal";
}
function getHealthCasePriorityLabel(details) {
	const priority = getHealthCasePriority(details);
	return localizedProgramLabel(healthCasePriorityLabelTranslations[priority], priority === "emergency" ? "Emergency" : priority === "urgent" ? "Urgent" : "Normal");
}
function getHealthCasePriorityClass(details) {
	const priority = getHealthCasePriority(details);
	if (priority === "emergency") return "bg-red-100 text-red-800 border-red-200";
	if (priority === "urgent") return "bg-amber-100 text-amber-800 border-amber-200";
	return "bg-slate-100 text-slate-800 border-slate-200";
}
function sortHealthCasesByPriority(items) {
	const priorityWeight = (details) => {
		const priority = getHealthCasePriority(details);
		if (priority === "emergency") return 0;
		if (priority === "urgent") return 1;
		return 2;
	};
	return [...items].sort((a, b) => {
		const byPriority = priorityWeight(a.details) - priorityWeight(b.details);
		if (byPriority !== 0) return byPriority;
		return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
	});
}
function formatHealthMoney(value) {
	if (value === null || value === void 0 || value === "") return "-";
	const amount = Number(value);
	if (Number.isNaN(amount)) return String(value);
	return `Rs. ${amount.toLocaleString("en-PK")}`;
}
function sanitizeHealthReportText(value) {
	if (value === null || value === void 0 || value === "") return "-";
	return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
//#endregion
export { sanitizeHealthReportText as C, validateHealthDocumentFile as E, relationshipOptions as S, treatmentTypeOptions as T, healthDocumentOptions as _, formatHealthMoney as a, isHealthEmergency as b, getHealthCommitteeDecisionClass as c, getHealthDocumentStatusClass as d, getHealthDocumentStatusLabel as f, healthCommitteeDecisionOptions as g, getHealthStatusLabel as h, formatHealthFileSize as i, getHealthCommitteeDecisionLabel as l, getHealthStatusClass as m, HEALTH_DOCUMENT_BUCKET as n, getHealthCasePriorityClass as o, getHealthPaymentStatusLabel as p, createHealthDocumentStoragePath as r, getHealthCasePriorityLabel as s, HEALTH_DOCUMENT_ACCEPT as t, getHealthDocumentLabel as u, healthPaymentStatusOptions as v, sortHealthCasesByPriority as w, patientGenderOptions as x, healthRequiredDocumentTypes as y };
