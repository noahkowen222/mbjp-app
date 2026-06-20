import { t as localizedProgramLabel } from "./program-status-i18n-BCeAns5-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/welfare-ytsTeUG3.js
var WELFARE_DOCUMENT_BUCKET = "welfare-documents";
var WELFARE_DOCUMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
var WELFARE_ALLOWED_DOCUMENT_MIME_TYPES = [
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
var welfareCaseTypeOptions = [
	"Financial Help",
	"Ration Support",
	"Widow Support",
	"Orphan Support",
	"Emergency Help",
	"Marriage Support",
	"Disaster Relief",
	"Legal Help",
	"Family Support",
	"Other"
];
var welfarePaymentStatusOptions = [
	{
		value: "not_started",
		label: "Not Started"
	},
	{
		value: "pending",
		label: "Fund Pending"
	},
	{
		value: "approved",
		label: "Fund Approved"
	},
	{
		value: "partially_released",
		label: "Partially Released"
	},
	{
		value: "released",
		label: "Fund Released"
	},
	{
		value: "completed",
		label: "Completed"
	}
];
var welfareCommitteeDecisionOptions = [
	{
		value: "pending",
		label: "Pending Welfare Committee"
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
var welfareDocumentOptions = [
	{
		type: "applicant_cnic",
		label: "Applicant CNIC / B-form",
		description: "Upload applicant CNIC, B-form or identity document copy.",
		required: true
	},
	{
		type: "member_cnic",
		label: "Member CNIC",
		description: "Upload approved MBJP member CNIC copy.",
		required: true
	},
	{
		type: "income_proof",
		label: "Income / Need Proof",
		description: "Upload income proof, poverty certificate, salary slip, or need proof if available.",
		required: false
	},
	{
		type: "case_proof",
		label: "Case Proof",
		description: "Upload proof related to the case, such as bill, ration slip, disaster proof, legal notice, or support request.",
		required: true
	},
	{
		type: "family_document",
		label: "Family / Dependency Document",
		description: "Upload widow/orphan/family dependency proof if relevant.",
		required: false
	},
	{
		type: "expense_estimate",
		label: "Expense Estimate / Challan",
		description: "Upload estimated cost, challan, bill, or written estimate.",
		required: false
	},
	{
		type: "other",
		label: "Other Supporting Document",
		description: "Upload any other supporting welfare document if needed.",
		required: false
	}
];
var welfareRequiredDocumentTypes = welfareDocumentOptions.filter((item) => item.required).map((item) => item.type);
var welfareStatusLabels = {
	submitted: "New",
	under_review: "Under Verification",
	need_more_info: "Need More Info",
	approved: "Approved",
	rejected: "Rejected",
	paid_completed: "Fund Released",
	completed: "Closed"
};
var welfareDocumentStatusLabels = {
	pending: "Pending Verification",
	verified: "Verified",
	rejected: "Rejected",
	needs_reupload: "Needs Re-upload"
};
var welfareStatusLabelTranslations = {
	submitted: {
		en: "New",
		ur: "نیا",
		sd: "نئون"
	},
	under_review: {
		en: "Under Verification",
		ur: "تصدیق جاری",
		sd: "تصديق جاري"
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
		en: "Fund Released",
		ur: "فنڈ جاری",
		sd: "فنڊ جاري"
	},
	completed: {
		en: "Closed",
		ur: "بند",
		sd: "بند"
	}
};
var welfareDocumentStatusLabelTranslations = {
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
var welfarePaymentStatusLabelTranslations = {
	not_started: {
		en: "Not Started",
		ur: "شروع نہیں ہوا",
		sd: "شروع نه ٿيو"
	},
	pending: {
		en: "Fund Pending",
		ur: "فنڈ باقی",
		sd: "فنڊ باقي"
	},
	approved: {
		en: "Fund Approved",
		ur: "فنڈ منظور",
		sd: "فنڊ منظور"
	},
	partially_released: {
		en: "Partially Released",
		ur: "جزوی جاری",
		sd: "جزوي جاري"
	},
	released: {
		en: "Fund Released",
		ur: "فنڈ جاری",
		sd: "فنڊ جاري"
	},
	completed: {
		en: "Completed",
		ur: "مکمل",
		sd: "مڪمل"
	}
};
var welfareCommitteeDecisionLabelTranslations = {
	pending: {
		en: "Pending Welfare Committee",
		ur: "ویلفیئر کمیٹی جائزہ باقی",
		sd: "ويلفيئر ڪميٽي جائزو باقي"
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
var welfareCasePriorityLabelTranslations = {
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
var welfareDocumentLabelTranslations = {
	applicant_cnic: {
		en: "Applicant CNIC / B-form",
		ur: "درخواست گزار CNIC / ب فارم",
		sd: "درخواست ڏيندڙ CNIC / ب فارم"
	},
	member_cnic: {
		en: "Member CNIC",
		ur: "ممبر CNIC",
		sd: "ميمبر CNIC"
	},
	income_proof: {
		en: "Income / Need Proof",
		ur: "آمدنی / ضرورت کا ثبوت",
		sd: "آمدني / ضرورت جو ثبوت"
	},
	case_proof: {
		en: "Case Proof",
		ur: "کیس ثبوت",
		sd: "ڪيس ثبوت"
	},
	family_document: {
		en: "Family / Dependency Document",
		ur: "خاندان / زیر کفالت دستاویز",
		sd: "خاندان / زير ڪفالت دستاويز"
	},
	expense_estimate: {
		en: "Expense Estimate / Challan",
		ur: "خرچ تخمینہ / چالان",
		sd: "خرچ تخمينو / چالان"
	},
	other: {
		en: "Other Supporting Document",
		ur: "دیگر معاون دستاویز",
		sd: "ٻيو مددگار دستاويز"
	}
};
function getWelfareStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(welfareStatusLabelTranslations[typedStatus], welfareStatusLabels[typedStatus] ?? status);
}
function getWelfareStatusClass(status) {
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
function getWelfareDocumentConfig(type) {
	return welfareDocumentOptions.find((item) => item.type === type);
}
function getWelfareDocumentLabel(type) {
	const typedType = type;
	const fallback = getWelfareDocumentConfig(type)?.label ?? type;
	return localizedProgramLabel(welfareDocumentLabelTranslations[typedType], fallback);
}
function getWelfareDocumentStatusLabel(status) {
	const typedStatus = status;
	return localizedProgramLabel(welfareDocumentStatusLabelTranslations[typedStatus], welfareDocumentStatusLabels[typedStatus] ?? status);
}
function getWelfareDocumentStatusClass(status) {
	switch (status) {
		case "verified": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected": return "bg-red-100 text-red-800 border-red-200";
		case "needs_reupload": return "bg-amber-100 text-amber-800 border-amber-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function getWelfarePaymentStatusLabel(status) {
	if (!status) return localizedProgramLabel(welfarePaymentStatusLabelTranslations.not_started, "Not Started");
	const typedStatus = status;
	const fallback = welfarePaymentStatusOptions.find((item) => item.value === status)?.label ?? status;
	return localizedProgramLabel(welfarePaymentStatusLabelTranslations[typedStatus], fallback);
}
function validateWelfareDocumentFile(file) {
	if (file.size > 8388608) return {
		ok: false,
		message: `File size 8MB se kam honi chahiye.`
	};
	if (file.type && !WELFARE_ALLOWED_DOCUMENT_MIME_TYPES.includes(file.type)) return {
		ok: false,
		message: "Sirf PDF, JPG, PNG ya WEBP document upload karen."
	};
	return {
		ok: true,
		message: ""
	};
}
function createWelfareDocumentStoragePath({ userId, applicationId, documentType, fileName }) {
	const extension = fileName.split(".").pop()?.toLowerCase() || "file";
	return `${userId}/${applicationId}/${documentType.replace(/[^a-z0-9_-]/gi, "-")}-${Date.now()}.${extension}`;
}
function formatWelfareFileSize(size) {
	if (!size) return "Unknown size";
	const kb = size / 1024;
	if (kb < 1024) return `${kb.toFixed(1)} KB`;
	return `${(kb / 1024).toFixed(2)} MB`;
}
function isWelfareEmergency(details) {
	return Boolean(details?.emergency);
}
function getWelfareCommitteeDecisionLabel(status) {
	if (!status) return localizedProgramLabel(welfareCommitteeDecisionLabelTranslations.pending, "Pending Welfare Committee");
	const typedStatus = status;
	const fallback = welfareCommitteeDecisionOptions.find((item) => item.value === status)?.label ?? status;
	return localizedProgramLabel(welfareCommitteeDecisionLabelTranslations[typedStatus], fallback);
}
function getWelfareCommitteeDecisionClass(status) {
	switch (status) {
		case "approved":
		case "recommended": return "bg-emerald-100 text-emerald-800 border-emerald-200";
		case "rejected":
		case "not_recommended": return "bg-red-100 text-red-800 border-red-200";
		case "deferred": return "bg-amber-100 text-amber-800 border-amber-200";
		default: return "bg-slate-100 text-slate-800 border-slate-200";
	}
}
function getWelfareCasePriority(details) {
	if (details?.case_priority) return details.case_priority;
	return isWelfareEmergency(details) ? "emergency" : "normal";
}
function getWelfareCasePriorityLabel(details) {
	const priority = getWelfareCasePriority(details);
	return localizedProgramLabel(welfareCasePriorityLabelTranslations[priority], priority === "emergency" ? "Emergency" : priority === "urgent" ? "Urgent" : "Normal");
}
function getWelfareCasePriorityClass(details) {
	const priority = getWelfareCasePriority(details);
	if (priority === "emergency") return "bg-red-100 text-red-800 border-red-200";
	if (priority === "urgent") return "bg-amber-100 text-amber-800 border-amber-200";
	return "bg-slate-100 text-slate-800 border-slate-200";
}
function sortWelfareCasesByPriority(items) {
	const priorityWeight = (details) => {
		const priority = getWelfareCasePriority(details);
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
function formatWelfareMoney(value) {
	if (value === null || value === void 0 || value === "") return "-";
	const amount = Number(value);
	if (Number.isNaN(amount)) return String(value);
	return `Rs. ${amount.toLocaleString("en-PK")}`;
}
function sanitizeWelfareReportText(value) {
	if (value === null || value === void 0 || value === "") return "-";
	return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
//#endregion
export { welfareDocumentOptions as C, welfareCommitteeDecisionOptions as S, welfareRequiredDocumentTypes as T, relationshipOptions as _, formatWelfareMoney as a, validateWelfareDocumentFile as b, getWelfareCommitteeDecisionClass as c, getWelfareDocumentStatusClass as d, getWelfareDocumentStatusLabel as f, isWelfareEmergency as g, getWelfareStatusLabel as h, formatWelfareFileSize as i, getWelfareCommitteeDecisionLabel as l, getWelfareStatusClass as m, WELFARE_DOCUMENT_BUCKET as n, getWelfareCasePriorityClass as o, getWelfarePaymentStatusLabel as p, createWelfareDocumentStoragePath as r, getWelfareCasePriorityLabel as s, WELFARE_DOCUMENT_ACCEPT as t, getWelfareDocumentLabel as u, sanitizeWelfareReportText as v, welfarePaymentStatusOptions as w, welfareCaseTypeOptions as x, sortWelfareCasesByPriority as y };
