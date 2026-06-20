//#region node_modules/.nitro/vite/services/ssr/assets/finance-Cn3yAGsy.js
var FINANCE_DOCUMENT_BUCKET = "finance-documents";
var FINANCE_DOCUMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.webp";
var FINANCE_ALLOWED_DOCUMENT_MIME_TYPES = [
	"application/pdf",
	"image/jpeg",
	"image/png",
	"image/webp"
];
var financePaymentMethodOptions = [
	{
		value: "cash",
		label: "Cash"
	},
	{
		value: "bank",
		label: "Bank"
	},
	{
		value: "jazzcash",
		label: "JazzCash"
	},
	{
		value: "easypaisa",
		label: "Easypaisa"
	},
	{
		value: "manual_transfer",
		label: "Manual Transfer"
	}
];
var financePurposeOptions = [
	{
		value: "education",
		label: "Education"
	},
	{
		value: "health",
		label: "Health"
	},
	{
		value: "welfare",
		label: "Welfare"
	},
	{
		value: "general_fund",
		label: "General Fund"
	}
];
var financeExpenseCategoryOptions = [
	{
		value: "education",
		label: "Education"
	},
	{
		value: "health",
		label: "Health"
	},
	{
		value: "welfare",
		label: "Welfare"
	},
	{
		value: "office",
		label: "Office / Admin"
	},
	{
		value: "program",
		label: "Program Expense"
	},
	{
		value: "transport",
		label: "Transport"
	},
	{
		value: "general",
		label: "General"
	}
];
var financeStatusOptions = [
	{
		value: "pending",
		label: "Pending Approval"
	},
	{
		value: "approved",
		label: "Approved"
	},
	{
		value: "rejected",
		label: "Rejected"
	}
];
var expenseStatusOptions = [
	{
		value: "pending",
		label: "Pending Approval"
	},
	{
		value: "approved",
		label: "Approved"
	},
	{
		value: "rejected",
		label: "Rejected"
	},
	{
		value: "paid",
		label: "Paid"
	}
];
function getFinanceStatusLabel(status) {
	if (!status) return "Pending Approval";
	return financeStatusOptions.find((item) => item.value === status)?.label || titleCase(status);
}
function getExpenseStatusLabel(status) {
	if (!status) return "Pending Approval";
	return expenseStatusOptions.find((item) => item.value === status)?.label || titleCase(status);
}
function getPaymentMethodLabel(method) {
	if (!method) return "-";
	return financePaymentMethodOptions.find((item) => item.value === method)?.label || titleCase(method);
}
function getFinancePurposeLabel(purpose) {
	if (!purpose) return "-";
	return financePurposeOptions.find((item) => item.value === purpose)?.label || titleCase(purpose);
}
function getExpenseCategoryLabel(category) {
	if (!category) return "-";
	return financeExpenseCategoryOptions.find((item) => item.value === category)?.label || titleCase(category);
}
function getFinanceStatusClass(status) {
	switch (status) {
		case "approved":
		case "paid": return "border-emerald-200 bg-emerald-50 text-emerald-800";
		case "rejected": return "border-red-200 bg-red-50 text-red-800";
		default: return "border-amber-200 bg-amber-50 text-amber-800";
	}
}
function formatFinanceMoney(value) {
	const amount = Number(value || 0);
	return new Intl.NumberFormat("en-PK", {
		style: "currency",
		currency: "PKR",
		maximumFractionDigits: 0
	}).format(Number.isFinite(amount) ? amount : 0);
}
function createFinanceDocumentStoragePath({ userId, folder, fileName }) {
	const safeName = fileName.trim().toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/-+/g, "-").slice(0, 90);
	return `${userId}/${folder}/${Date.now()}-${safeName || "receipt"}`;
}
function validateFinanceDocumentFile(file) {
	if (!FINANCE_ALLOWED_DOCUMENT_MIME_TYPES.includes(file.type)) return "Only PDF, JPG, PNG or WEBP receipt/document files are allowed.";
	if (file.size > 8388608) return `File size 8MB se kam honi chahiye.`;
	return "";
}
function buildDonationReceiptText(donation) {
	return [
		"Marwardi Bhatti Jamaat Pakistan (MBJP)",
		"Donation Receipt",
		"----------------------------------------",
		`Donation ID: ${donation.donation_no || donation.id}`,
		`Receipt No: ${donation.receipt_no || "-"}`,
		`Donor Name: ${donation.donor_name_snapshot || donation.donor_name}`,
		`Father Name: ${donation.donor_father_name_snapshot || "-"}`,
		`Member ID: ${donation.donor_member_no_snapshot || "-"}`,
		`Phone: ${donation.donor_phone || "-"}`,
		`Amount: ${formatFinanceMoney(donation.amount)}`,
		`Payment Method: ${getPaymentMethodLabel(donation.payment_method)}`,
		`Transaction Reference: ${donation.transaction_reference || "-"}`,
		`Purpose: ${getFinancePurposeLabel(donation.purpose)}`,
		`District/Taluka: ${donation.district || "-"} / ${donation.taluka || "-"}`,
		`Status: ${getFinanceStatusLabel(donation.status)}`,
		`Date: ${new Date(donation.created_at).toLocaleString()}`,
		"----------------------------------------",
		"This is a system-generated internal receipt record."
	].join("\n");
}
function buildExpenseReceiptText(expense) {
	return [
		"Marwardi Bhatti Jamaat Pakistan (MBJP)",
		"Expense / Payment Record",
		"----------------------------------------",
		`Receipt No: ${expense.receipt_no || expense.id}`,
		`Expense Title: ${expense.expense_title}`,
		`Paid To: ${expense.paid_to}`,
		`Amount: ${formatFinanceMoney(expense.amount)}`,
		`Category: ${getExpenseCategoryLabel(expense.category)}`,
		`Payment Method: ${getPaymentMethodLabel(expense.payment_method)}`,
		`District/Taluka: ${expense.district || "-"} / ${expense.taluka || "-"}`,
		`Status: ${getExpenseStatusLabel(expense.status)}`,
		`Date: ${new Date(expense.created_at).toLocaleString()}`,
		"----------------------------------------",
		"This is a system-generated internal expense record."
	].join("\n");
}
function titleCase(value) {
	return value.replace(/_/g, " ").replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}
//#endregion
export { createFinanceDocumentStoragePath as a, financePurposeOptions as c, getExpenseStatusLabel as d, getFinancePurposeLabel as f, validateFinanceDocumentFile as g, getPaymentMethodLabel as h, buildExpenseReceiptText as i, formatFinanceMoney as l, getFinanceStatusLabel as m, FINANCE_DOCUMENT_BUCKET as n, financeExpenseCategoryOptions as o, getFinanceStatusClass as p, buildDonationReceiptText as r, financePaymentMethodOptions as s, FINANCE_DOCUMENT_ACCEPT as t, getExpenseCategoryLabel as u };
