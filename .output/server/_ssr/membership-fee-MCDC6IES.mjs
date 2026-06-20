//#region node_modules/.nitro/vite/services/ssr/assets/membership-fee-MCDC6IES.js
var MEMBERSHIP_PAYMENT_COMING_SOON_TEXT = "Manual payment receipt verification pending.";
var MEMBERSHIP_RECEIPT_BUCKET = "membership-receipts";
var MEMBERSHIP_RECEIPT_ALLOWED_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp",
	"application/pdf"
];
var MEMBERSHIP_PAYMENT_QR_IMAGE_PATH = "/mbjp/membership-payment-qr.jpg";
var MEMBERSHIP_MANUAL_PAYMENT_DETAILS = {
	bankName: "Mobilink Microfinance Bank",
	accountTitle: "Abdur shop",
	accountNumber: "01333300393",
	iban: "PK08JCMA1905921333300393",
	paymentNetwork: "JazzCash / Raast",
	tillId: "983365478"
};
function formatMembershipMoney(value) {
	const amount = Number(value ?? 0);
	return `Rs. ${amount.toLocaleString("en-PK", {
		maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
		minimumFractionDigits: 0
	})}`;
}
function getMembershipFeeSubtext() {
	return "Final payable amount will be shown before payment.";
}
function getMembershipPaymentQrHelpText() {
	return `You can pay through ${MEMBERSHIP_MANUAL_PAYMENT_DETAILS.paymentNetwork} by scanning the QR code or using Till ID ${MEMBERSHIP_MANUAL_PAYMENT_DETAILS.tillId}.`;
}
function getMembershipPaymentStatusLabel(status) {
	switch (status) {
		case "paid": return "Paid";
		case "failed": return "Failed";
		case "cancelled": return "Cancelled";
		case "refunded": return "Refunded";
		case "waived": return "Waived";
		default: return "Pending";
	}
}
function getMembershipPaymentStatusClass(status) {
	switch (status) {
		case "paid": return "border-emerald-200 bg-emerald-50 text-emerald-800";
		case "waived": return "border-sky-200 bg-sky-50 text-sky-800";
		case "failed":
		case "cancelled": return "border-red-200 bg-red-50 text-red-800";
		case "refunded": return "border-purple-200 bg-purple-50 text-purple-800";
		default: return "border-amber-200 bg-amber-50 text-amber-800";
	}
}
function getMembershipPaymentDisplayStatus(payment) {
	return payment?.status ?? "pending";
}
function createPendingMembershipPaymentPayload(memberId, userId, receipt) {
	return {
		member_id: memberId,
		user_id: userId,
		base_amount: 600,
		tax_amount: 0,
		total_amount: 600,
		currency: "PKR",
		status: "pending",
		payment_method: "bank",
		gateway_provider: "manual_mobilink_microfinance_bank",
		gateway_reference: null,
		receipt_path: receipt?.receipt_path ?? null,
		receipt_file_name: receipt?.receipt_file_name ?? null,
		receipt_mime_type: receipt?.receipt_mime_type ?? null,
		receipt_size_bytes: receipt?.receipt_size_bytes ?? null,
		receipt_uploaded_at: receipt?.receipt_uploaded_at ?? null
	};
}
//#endregion
export { MEMBERSHIP_RECEIPT_BUCKET as a, getMembershipFeeSubtext as c, getMembershipPaymentStatusClass as d, getMembershipPaymentStatusLabel as f, MEMBERSHIP_RECEIPT_ALLOWED_TYPES as i, getMembershipPaymentDisplayStatus as l, MEMBERSHIP_PAYMENT_COMING_SOON_TEXT as n, createPendingMembershipPaymentPayload as o, MEMBERSHIP_PAYMENT_QR_IMAGE_PATH as r, formatMembershipMoney as s, MEMBERSHIP_MANUAL_PAYMENT_DETAILS as t, getMembershipPaymentQrHelpText as u };
