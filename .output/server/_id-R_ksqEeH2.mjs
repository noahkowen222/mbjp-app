import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./_ssr/i18n-XdhEhh6o.mjs";
import { C as RefreshCw, Et as BadgeCheck, G as IdCard, I as LoaderCircle, W as ImageOff, _ as ShieldCheck, at as ExternalLink, bt as CalendarDays, ct as CreditCard, gt as CircleAlert, ht as CircleCheck, kt as ArrowLeft, l as UserCheck, mt as CircleX, nt as FileCheckCorner, q as Hourglass, ut as Clock, v as ShieldAlert, xt as BriefcaseBusiness } from "./_libs/lucide-react.mjs";
import { d as formatCommitteeDate, f as getCommitteeLocationLabel, h as getCommitteeTypeLabel, l as fetchCommitteesForAdmin, m as getCommitteeStatusLabel, o as currentUserCanManageCommittees, p as getCommitteeStatusClass, t as addCommitteeMember, u as fetchDesignations } from "./_ssr/committees-BBqoo4Av.mjs";
import { t as AdminShell } from "./_ssr/AdminShell-DksluTlX.mjs";
import { r as createServerFn, t as createSsrRpc } from "./_ssr/ssr.mjs";
import { t as Route } from "./_id-DXVILamk.mjs";
import { a as isPakistaniMobile, c as normalizeMobile, i as formatMobileInput, l as optionalText, n as formatCnicInput, u as todayDate } from "./_ssr/formatters-BY4KepB2.mjs";
import { a as MEMBERSHIP_RECEIPT_BUCKET, d as getMembershipPaymentStatusClass, f as getMembershipPaymentStatusLabel, i as MEMBERSHIP_RECEIPT_ALLOWED_TYPES, l as getMembershipPaymentDisplayStatus, o as createPendingMembershipPaymentPayload, s as formatMembershipMoney, u as getMembershipPaymentQrHelpText } from "./_ssr/membership-fee-MCDC6IES.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-R_ksqEeH2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MIN_REJECTION_REASON_LENGTH$1 = 10;
var MAX_REJECTION_REASON_LENGTH = 500;
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function readString(data, fieldName) {
	const value = data[fieldName];
	if (typeof value !== "string") throw new Error(`${fieldName} must be a string.`);
	const normalized = value.trim();
	if (!normalized) throw new Error(`${fieldName} is required.`);
	return normalized;
}
function requireUuid(value, fieldName) {
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) throw new Error(`${fieldName} is not valid.`);
	return value;
}
function normalizeRejectionReason(value) {
	const normalized = value.trim().replace(/\s+/g, " ");
	if (normalized.length < MIN_REJECTION_REASON_LENGTH$1) throw new Error(`Rejection reason must be at least ${MIN_REJECTION_REASON_LENGTH$1} characters.`);
	if (normalized.length > MAX_REJECTION_REASON_LENGTH) throw new Error(`Rejection reason must be less than ${MAX_REJECTION_REASON_LENGTH} characters.`);
	return normalized;
}
function validateApproveInput(data) {
	if (!isRecord(data)) throw new Error("Invalid approval request.");
	return {
		memberId: requireUuid(readString(data, "memberId"), "Member ID"),
		accessToken: readString(data, "accessToken")
	};
}
function validateRejectInput(data) {
	if (!isRecord(data)) throw new Error("Invalid rejection request.");
	return {
		memberId: requireUuid(readString(data, "memberId"), "Member ID"),
		accessToken: readString(data, "accessToken"),
		rejectionReason: normalizeRejectionReason(readString(data, "rejectionReason"))
	};
}
var approveMemberAction = createServerFn({ method: "POST" }).inputValidator(validateApproveInput).handler(createSsrRpc("8d72772939d2efcea0f543551b5454ed6075fec6aa84dd749340cafe6bae0527"));
var rejectMemberAction = createServerFn({ method: "POST" }).inputValidator(validateRejectInput).handler(createSsrRpc("73c760414c7686e70393c1092eaef38e2a1b78b359d5e498e947b787e69554e9"));
var copy = {
	en: {
		loading: "Loading member application...",
		memberNotFound: "Member not found",
		memberNotFoundText: "This member record could not be loaded.",
		backToAdmin: "Back to Admin",
		pageEyebrow: "Member Application",
		cnic: "CNIC",
		district: "District",
		memberNo: "Member No",
		notIssuedYet: "Not issued yet",
		notIssued: "Not issued",
		notProvided: "Not provided",
		notReviewed: "Not reviewed",
		refresh: "Refresh",
		viewCard: "View Card",
		officeBearerCard: "Office Bearer Card",
		officeCard: "Office Card",
		openCard: "Open Card",
		digitalCardUnavailable: "Digital card will be available after approval and membership number issuance.",
		summary: {
			status: "Status",
			memberNo: "Member No",
			submitted: "Submitted",
			reviewed: "Reviewed"
		},
		sidebar: {
			quickContact: "Quick Contact",
			verificationNotice: "Admin verification view shows full CNIC and contact details for review purposes.",
			noPhoto: "No photo"
		},
		details: {
			title: "Member Details",
			subtitle: "Personal and membership information submitted by the member.",
			identity: "Identity",
			fullName: "Full Name",
			fatherName: "Father Name",
			mobile: "Mobile",
			location: "Location",
			taluka: "Taluka",
			address: "Address",
			profile: "Profile",
			dateOfBirth: "Date of Birth",
			gender: "Gender",
			education: "Education",
			bloodGroup: "Blood Group",
			profession: "Profession",
			casteBranch: "Caste Branch",
			emergencyContact: "Emergency Contact",
			emergencyContactName: "Emergency Contact Name",
			emergencyContactRelation: "Emergency Contact Relation",
			emergencyContactMobile: "Emergency Contact Mobile",
			declarationAccepted: "Declaration Accepted",
			reviewRecord: "Review Record",
			approvedAt: "Approved At",
			reviewedAt: "Reviewed At",
			yes: "Yes",
			no: "No",
			rejectionReason: "Rejection Reason"
		},
		review: {
			title: "Review Application",
			subtitle: "Approve this member if details are correct. Reject only with a clear reason so the member can update and resubmit.",
			approve: "Approve Member",
			reject: "Reject Application",
			processing: "Processing...",
			rejectionReason: "Rejection Reason",
			rejectionPlaceholder: "Example: CNIC format/photo/address is unclear. Please update and resubmit.",
			minimum: "Minimum",
			charactersRequired: "characters required.",
			current: "Current",
			completedTitle: "Review Completed",
			completedText: "This application is currently marked as",
			backToAdminList: "Back to Admin List"
		},
		status: {
			pending: "Pending",
			approved: "Approved",
			rejected: "Rejected",
			pendingTitle: "Pending admin review",
			pendingText: "Please verify CNIC, mobile, address, district/taluka, photo quality, and declaration before approval.",
			approvedTitle: "Application approved",
			approvedTextIssued: "Membership number {{memberNo}} is issued. The digital card is available.",
			approvedTextMissing: "Application is approved, but member number is not available yet.",
			rejectedTitle: "Application rejected",
			rejectedText: "Application was rejected. No rejection reason is available."
		}
	},
	ur: {
		loading: "ممبر درخواست لوڈ ہو رہی ہے...",
		memberNotFound: "ممبر نہیں ملا",
		memberNotFoundText: "یہ ممبر ریکارڈ لوڈ نہیں ہو سکا۔",
		backToAdmin: "ایڈمن پر واپس",
		pageEyebrow: "ممبر درخواست",
		cnic: "CNIC",
		district: "ضلع",
		memberNo: "ممبر نمبر",
		notIssuedYet: "ابھی جاری نہیں ہوا",
		notIssued: "جاری نہیں ہوا",
		notProvided: "فراہم نہیں کیا گیا",
		notReviewed: "جائزہ نہیں ہوا",
		refresh: "ریفریش",
		viewCard: "کارڈ دیکھیں",
		officeBearerCard: "عہدیدار کارڈ",
		officeCard: "آفس کارڈ",
		openCard: "کارڈ کھولیں",
		digitalCardUnavailable: "منظوری اور ممبرشپ نمبر جاری ہونے کے بعد ڈیجیٹل کارڈ دستیاب ہوگا۔",
		summary: {
			status: "اسٹیٹس",
			memberNo: "ممبر نمبر",
			submitted: "جمع شدہ",
			reviewed: "جائزہ"
		},
		sidebar: {
			quickContact: "فوری رابطہ",
			verificationNotice: "ایڈمن تصدیق ویو میں جائزہ کے لیے مکمل CNIC اور رابطہ تفصیلات دکھائی جاتی ہیں۔",
			noPhoto: "تصویر نہیں"
		},
		details: {
			title: "ممبر تفصیلات",
			subtitle: "ممبر کی طرف سے جمع کرائی گئی ذاتی اور ممبرشپ معلومات۔",
			identity: "شناخت",
			fullName: "مکمل نام",
			fatherName: "والد کا نام",
			mobile: "موبائل",
			location: "مقام",
			taluka: "تعلقہ",
			address: "پتہ",
			profile: "پروفائل",
			dateOfBirth: "تاریخ پیدائش",
			gender: "جنس",
			education: "تعلیم",
			bloodGroup: "بلڈ گروپ",
			profession: "پیشہ",
			casteBranch: "ذات / برانچ",
			emergencyContact: "ایمرجنسی رابطہ",
			emergencyContactName: "ایمرجنسی رابطہ نام",
			emergencyContactRelation: "ایمرجنسی رابطہ رشتہ",
			emergencyContactMobile: "ایمرجنسی رابطہ موبائل",
			declarationAccepted: "اعلامیہ قبول کیا",
			reviewRecord: "جائزہ ریکارڈ",
			approvedAt: "منظوری وقت",
			reviewedAt: "جائزہ وقت",
			yes: "ہاں",
			no: "نہیں",
			rejectionReason: "رد کرنے کی وجہ"
		},
		review: {
			title: "درخواست کا جائزہ",
			subtitle: "اگر تفصیلات درست ہیں تو ممبر کو منظور کریں۔ صرف واضح وجہ کے ساتھ رد کریں تاکہ ممبر اپڈیٹ کر کے دوبارہ جمع کرا سکے۔",
			approve: "ممبر منظور کریں",
			reject: "درخواست رد کریں",
			processing: "پروسیسنگ...",
			rejectionReason: "رد کرنے کی وجہ",
			rejectionPlaceholder: "مثال: CNIC فارمیٹ/تصویر/پتہ واضح نہیں۔ براہ کرم اپڈیٹ کر کے دوبارہ جمع کریں۔",
			minimum: "کم از کم",
			charactersRequired: "حروف ضروری ہیں۔",
			current: "موجودہ",
			completedTitle: "جائزہ مکمل",
			completedText: "یہ درخواست اس وقت اس اسٹیٹس پر ہے",
			backToAdminList: "ایڈمن فہرست پر واپس"
		},
		status: {
			pending: "زیر التواء",
			approved: "منظور شدہ",
			rejected: "مسترد",
			pendingTitle: "ایڈمن جائزہ باقی",
			pendingText: "منظوری سے پہلے CNIC، موبائل، پتہ، ضلع/تعلقہ، تصویر کی کوالٹی اور اعلامیہ کی تصدیق کریں۔",
			approvedTitle: "درخواست منظور شدہ",
			approvedTextIssued: "ممبرشپ نمبر {{memberNo}} جاری ہو چکا ہے۔ ڈیجیٹل کارڈ دستیاب ہے۔",
			approvedTextMissing: "درخواست منظور ہے، لیکن ممبر نمبر ابھی دستیاب نہیں۔",
			rejectedTitle: "درخواست مسترد",
			rejectedText: "درخواست مسترد کی گئی۔ رد کرنے کی وجہ دستیاب نہیں۔"
		}
	},
	sd: {
		loading: "ميمبر درخواست لوڊ ٿي رهي آهي...",
		memberNotFound: "ميمبر نه مليو",
		memberNotFoundText: "هي ميمبر رڪارڊ لوڊ نه ٿي سگهيو.",
		backToAdmin: "ايڊمن ڏانهن واپس",
		pageEyebrow: "ميمبر درخواست",
		cnic: "CNIC",
		district: "ضلعو",
		memberNo: "ميمبر نمبر",
		notIssuedYet: "اڃا جاري نه ٿيو",
		notIssued: "جاري نه ٿيو",
		notProvided: "فراهم نه ڪيو ويو",
		notReviewed: "جائزو نه ٿيو",
		refresh: "ريفريش",
		viewCard: "ڪارڊ ڏسو",
		officeBearerCard: "عهديدار ڪارڊ",
		officeCard: "آفيس ڪارڊ",
		openCard: "ڪارڊ کوليو",
		digitalCardUnavailable: "منظوري ۽ ميمبرشپ نمبر جاري ٿيڻ کان پوءِ ڊجيٽل ڪارڊ موجود ٿيندو.",
		summary: {
			status: "اسٽيٽس",
			memberNo: "ميمبر نمبر",
			submitted: "جمع ٿيل",
			reviewed: "جائزو"
		},
		sidebar: {
			quickContact: "فوري رابطو",
			verificationNotice: "ايڊمن تصديق ويؤ ۾ جائزي لاءِ مڪمل CNIC ۽ رابطا تفصيل ڏيکاريا وڃن ٿا.",
			noPhoto: "تصوير ناهي"
		},
		details: {
			title: "ميمبر تفصيل",
			subtitle: "ميمبر طرفان جمع ڪرايل ذاتي ۽ ميمبرشپ معلومات.",
			identity: "سڃاڻپ",
			fullName: "مڪمل نالو",
			fatherName: "والد جو نالو",
			mobile: "موبائل",
			location: "جڳهه",
			taluka: "تعلقو",
			address: "پتو",
			profile: "پروفائل",
			dateOfBirth: "ڄمڻ جي تاريخ",
			gender: "جنس",
			education: "تعليم",
			bloodGroup: "بلڊ گروپ",
			profession: "پيشو",
			casteBranch: "ذات / برانچ",
			emergencyContact: "ايمرجنسي رابطو",
			emergencyContactName: "ايمرجنسي رابطو نالو",
			emergencyContactRelation: "ايمرجنسي رابطو رشتو",
			emergencyContactMobile: "ايمرجنسي رابطو موبائل",
			declarationAccepted: "اعلان قبول ڪيو",
			reviewRecord: "جائزو رڪارڊ",
			approvedAt: "منظوري وقت",
			reviewedAt: "جائزو وقت",
			yes: "ها",
			no: "نه",
			rejectionReason: "رد ڪرڻ جو سبب"
		},
		review: {
			title: "درخواست جو جائزو",
			subtitle: "جيڪڏهن تفصيل صحيح آهن ته ميمبر منظور ڪريو. صرف واضح سبب سان رد ڪريو ته جيئن ميمبر اپڊيٽ ڪري ٻيهر جمع ڪرائي.",
			approve: "ميمبر منظور ڪريو",
			reject: "درخواست رد ڪريو",
			processing: "پروسيسنگ...",
			rejectionReason: "رد ڪرڻ جو سبب",
			rejectionPlaceholder: "مثال: CNIC فارميٽ/تصوير/پتو واضح ناهي. مهرباني ڪري اپڊيٽ ڪري ٻيهر جمع ڪريو.",
			minimum: "گهٽ ۾ گهٽ",
			charactersRequired: "اکر ضروري آهن.",
			current: "موجوده",
			completedTitle: "جائزو مڪمل",
			completedText: "هي درخواست هن وقت هن اسٽيٽس تي آهي",
			backToAdminList: "ايڊمن فهرست ڏانهن واپس"
		},
		status: {
			pending: "زير التوا",
			approved: "منظور ٿيل",
			rejected: "رد ٿيل",
			pendingTitle: "ايڊمن جائزو باقي",
			pendingText: "منظوري کان اڳ CNIC، موبائل، پتو، ضلعو/تعلقو، تصوير جي ڪوالٽي ۽ اعلان جي تصديق ڪريو.",
			approvedTitle: "درخواست منظور ٿيل",
			approvedTextIssued: "ميمبرشپ نمبر {{memberNo}} جاري ٿي چڪو آهي. ڊجيٽل ڪارڊ موجود آهي.",
			approvedTextMissing: "درخواست منظور آهي، پر ميمبر نمبر اڃا موجود ناهي.",
			rejectedTitle: "درخواست رد ٿيل",
			rejectedText: "درخواست رد ڪئي وئي. رد ڪرڻ جو سبب موجود ناهي."
		}
	}
};
function useAdminMemberDetailCopy() {
	const { language } = useI18n();
	const textDir = language === "en" ? "ltr" : "rtl";
	return {
		copy: copy[language],
		language,
		textDir,
		isRtl: textDir === "rtl",
		textAlignClass: textDir === "rtl" ? "text-right" : "text-left",
		iconBeforeClass: textDir === "rtl" ? "ml-2" : "mr-2"
	};
}
var designationAssignmentLevelOptions = [
	{
		value: "central-executive",
		label: "Central Executive Committee"
	},
	{
		value: "central-advisory",
		label: "Central Advisory Committee"
	},
	{
		value: "provincial",
		label: "Provincial"
	},
	{
		value: "divisional",
		label: "Divisional"
	},
	{
		value: "district",
		label: "District"
	},
	{
		value: "taluka",
		label: "Taluka"
	}
];
var recommendedDesignationsByLevel = {
	"central-executive": [
		"Chairman",
		"Senior Vice Chairman",
		"Vice Chairman",
		"General Secretary",
		"Information Secretary",
		"Finance Secretary",
		"Joint Secretary",
		"Deputy General Secretary",
		"Office Secretary",
		"Media Coordinator"
	],
	"central-advisory": [
		"Chief Patron",
		"Patron",
		"Senior Advisor",
		"Advisor",
		"Legal Advisor",
		"Media Advisor",
		"Policy Advisor",
		"Advisory Board Member"
	],
	provincial: [
		"Provincial President",
		"Provincial Senior Vice President",
		"Provincial Vice President",
		"Provincial General Secretary",
		"Provincial Information Secretary",
		"Provincial Finance Secretary",
		"Provincial Joint Secretary",
		"Provincial Coordinator"
	],
	divisional: [
		"Divisional President",
		"Divisional Senior Vice President",
		"Divisional Vice President",
		"Divisional General Secretary",
		"Divisional Information Secretary",
		"Divisional Finance Secretary",
		"Divisional Joint Secretary",
		"Divisional Coordinator"
	],
	district: [
		"District President",
		"District Senior Vice President",
		"District Vice President",
		"District General Secretary",
		"District Information Secretary",
		"District Finance Secretary",
		"District Joint Secretary",
		"District Coordinator"
	],
	taluka: [
		"Taluka President",
		"Taluka Senior Vice President",
		"Taluka Vice President",
		"Taluka General Secretary",
		"Taluka Information Secretary",
		"Taluka Finance Secretary",
		"Taluka Joint Secretary",
		"Taluka Coordinator"
	]
};
var MEMBER_PHOTO_BUCKET = "member-photos";
var MEMBER_PHOTO_MAX_SIZE_BYTES = 2 * 1024 * 1024;
var MEMBER_PHOTO_ALLOWED_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp"
];
var SIGNED_URL_TTL_SECONDS = 3600;
var RECEIPT_SIGNED_URL_TTL_SECONDS = 3600;
var MIN_REJECTION_REASON_LENGTH = 10;
var MEMBERSHIP_REVIEW_ROLES = [
	"admin",
	"super_admin",
	"membership_admin"
];
var initialOfficeBearerIssueForm = {
	committeeId: "",
	designationId: "",
	designationTitle: "",
	status: "active",
	sortOrder: "10",
	tenureStart: todayDate(),
	tenureEnd: "",
	appointmentNotes: ""
};
var MEMBER_SELECT_COLUMNS = [
	"id",
	"user_id",
	"member_no",
	"address",
	"date_of_birth",
	"gender",
	"education",
	"blood_group",
	"emergency_contact_name",
	"emergency_contact_relation",
	"emergency_contact_mobile",
	"declaration_accepted",
	"full_name",
	"father_name",
	"cnic",
	"mobile",
	"district",
	"taluka",
	"profession",
	"caste_branch",
	"photo_url",
	"status",
	"rejection_reason",
	"reviewed_at",
	"approved_at",
	"created_at"
].join(", ");
function AdminMemberDetailPage() {
	const { id } = Route.useParams();
	const normalizedPathname = useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "");
	if (normalizedPathname === `/admin/members/${id}/card` || normalizedPathname === `/admin/members/${id}/designation-card`) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMemberApplicationPage, { id });
}
function AdminMemberApplicationPage({ id }) {
	const navigate = useNavigate();
	const { copy, textDir, textAlignClass } = useAdminMemberDetailCopy();
	const [member, setMember] = (0, import_react.useState)(null);
	const [photoUrl, setPhotoUrl] = (0, import_react.useState)(null);
	const [membershipPayment, setMembershipPayment] = (0, import_react.useState)(null);
	const [receiptSignedUrl, setReceiptSignedUrl] = (0, import_react.useState)(null);
	const [paymentAdminNote, setPaymentAdminNote] = (0, import_react.useState)("");
	const [paymentActionLoading, setPaymentActionLoading] = (0, import_react.useState)(false);
	const [paymentLoadError, setPaymentLoadError] = (0, import_react.useState)("");
	const [rejectionReason, setRejectionReason] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [actionLoading, setActionLoading] = (0, import_react.useState)(false);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const [editSaving, setEditSaving] = (0, import_react.useState)(false);
	const [editForm, setEditForm] = (0, import_react.useState)(null);
	const [editErrors, setEditErrors] = (0, import_react.useState)({});
	const [editPhoto, setEditPhoto] = (0, import_react.useState)(null);
	const [editPhotoPreview, setEditPhotoPreview] = (0, import_react.useState)(null);
	const [receiptUploading, setReceiptUploading] = (0, import_react.useState)(false);
	const [officeBearerAssignments, setOfficeBearerAssignments] = (0, import_react.useState)([]);
	const [officeBearerCommittees, setOfficeBearerCommittees] = (0, import_react.useState)([]);
	const [officeBearerDesignations, setOfficeBearerDesignations] = (0, import_react.useState)([]);
	const [officeBearerForm, setOfficeBearerForm] = (0, import_react.useState)(initialOfficeBearerIssueForm);
	const [officeBearerPanelOpen, setOfficeBearerPanelOpen] = (0, import_react.useState)(false);
	const [officeBearerLoading, setOfficeBearerLoading] = (0, import_react.useState)(false);
	const [officeBearerSaving, setOfficeBearerSaving] = (0, import_react.useState)(false);
	const [officeBearerError, setOfficeBearerError] = (0, import_react.useState)("");
	const [canManageOrganization, setCanManageOrganization] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const trimmedRejectionReason = (0, import_react.useMemo)(() => rejectionReason.trim(), [rejectionReason]);
	const canViewCard = member?.status === "approved" && Boolean(member.member_no);
	const canIssueOfficeBearer = canViewCard && canManageOrganization;
	const hasActiveOfficeBearer = officeBearerAssignments.some((assignment) => assignment.status === "active");
	const selectedOfficeBearerCommittee = officeBearerCommittees.find((committee) => committee.id === officeBearerForm.committeeId);
	const scopedOfficeBearerDesignations = officeBearerDesignations.filter((designation) => designation.is_active && (!selectedOfficeBearerCommittee || designation.scope === selectedOfficeBearerCommittee.committee_type));
	const canEditApplication = Boolean(member);
	const canEditPaymentReceipt = member?.status === "pending" || member?.status === "rejected";
	const reasonTooShort = trimmedRejectionReason.length > 0 && trimmedRejectionReason.length < MIN_REJECTION_REASON_LENGTH;
	const loadMember = (0, import_react.useCallback)(async (cancelledRef, options) => {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setError("");
		setPaymentLoadError("");
		try {
			const access = await ensureAdminAccess();
			if (!access.ok) {
				if (!cancelledRef?.current) await navigate({ to: access.redirectTo });
				return;
			}
			const canManageOrg = await currentUserCanManageCommittees().catch(() => false);
			if (!cancelledRef?.current) setCanManageOrganization(canManageOrg);
			const safeMember = await fetchMemberById(id);
			if (!safeMember) throw new Error(copy.memberNotFound);
			const [signedPhotoUrl, paymentResult] = await Promise.all([createSignedPhotoUrl(safeMember.photo_url), fetchMembershipPaymentWithReceiptUrl(safeMember.id)]);
			if (cancelledRef?.current) return;
			setMember(safeMember);
			setEditForm(memberToAdminEditForm(safeMember));
			setEditErrors({});
			setEditPhoto(null);
			if (editPhotoPreview?.startsWith("blob:")) URL.revokeObjectURL(editPhotoPreview);
			setEditPhotoPreview(null);
			if (!safeMember.status) setEditMode(false);
			setPhotoUrl(signedPhotoUrl);
			setMembershipPayment(paymentResult.payment);
			setReceiptSignedUrl(paymentResult.receiptSignedUrl);
			setPaymentAdminNote(paymentResult.payment?.admin_note ?? "");
			setPaymentLoadError(paymentResult.errorMessage ?? "");
		} catch (err) {
			if (!cancelledRef?.current) {
				setError(err instanceof Error ? err.message : "Failed to load member.");
				setMember(null);
				setPhotoUrl(null);
				setMembershipPayment(null);
				setReceiptSignedUrl(null);
				setPaymentAdminNote("");
				setPaymentLoadError("");
				setCanManageOrganization(false);
			}
		} finally {
			if (!cancelledRef?.current) {
				setLoading(false);
				setRefreshing(false);
			}
		}
	}, [id, navigate]);
	(0, import_react.useEffect)(() => {
		const cancelledRef = { current: false };
		loadMember(cancelledRef);
		return () => {
			cancelledRef.current = true;
		};
	}, [loadMember]);
	(0, import_react.useEffect)(() => {
		if (!member?.id || !canIssueOfficeBearer) {
			setOfficeBearerAssignments([]);
			return;
		}
		loadOfficeBearerIssueData(member.id);
	}, [member?.id, canIssueOfficeBearer]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (editPhotoPreview?.startsWith("blob:")) URL.revokeObjectURL(editPhotoPreview);
		};
	}, [editPhotoPreview]);
	function startEditMode() {
		if (!member || !canEditApplication) return;
		setEditForm(memberToAdminEditForm(member));
		setEditErrors({});
		setEditPhoto(null);
		if (editPhotoPreview?.startsWith("blob:")) URL.revokeObjectURL(editPhotoPreview);
		setEditPhotoPreview(null);
		setError("");
		setSuccess("");
		setEditMode(true);
	}
	function cancelEditMode() {
		if (editPhotoPreview?.startsWith("blob:")) URL.revokeObjectURL(editPhotoPreview);
		setEditForm(member ? memberToAdminEditForm(member) : null);
		setEditErrors({});
		setEditPhoto(null);
		setEditPhotoPreview(null);
		setEditMode(false);
		setError("");
	}
	function updateEditField(field, value) {
		setEditForm((current) => current ? {
			...current,
			[field]: value
		} : current);
		setEditErrors((current) => {
			const next = { ...current };
			delete next[field];
			return next;
		});
		setError("");
		setSuccess("");
	}
	function handleAdminPhotoChange(event) {
		setError("");
		setSuccess("");
		setEditPhoto(null);
		if (editPhotoPreview?.startsWith("blob:")) {
			URL.revokeObjectURL(editPhotoPreview);
			setEditPhotoPreview(null);
		}
		const file = event.target.files?.[0] ?? null;
		if (!file) return;
		if (!MEMBER_PHOTO_ALLOWED_TYPES.includes(file.type)) {
			setEditErrors((current) => ({
				...current,
				photo: "Upload PNG, JPG or WebP image only."
			}));
			event.target.value = "";
			return;
		}
		if (file.size > MEMBER_PHOTO_MAX_SIZE_BYTES) {
			setEditErrors((current) => ({
				...current,
				photo: "Profile photo must be 2MB or smaller."
			}));
			event.target.value = "";
			return;
		}
		setEditPhoto(file);
		setEditPhotoPreview(URL.createObjectURL(file));
		setEditErrors((current) => {
			const next = { ...current };
			delete next.photo;
			return next;
		});
	}
	async function handleAdminEditSubmit(event) {
		event.preventDefault();
		if (!member || !editForm || !canEditApplication || editSaving) return;
		const validationErrors = validateAdminEditForm(editForm);
		setEditErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) {
			setError("Please fix the highlighted application fields before saving.");
			return;
		}
		setEditSaving(true);
		setError("");
		setSuccess("");
		try {
			let photoPath = member.photo_url;
			if (editPhoto) {
				const extension = editPhoto.name.split(".").pop()?.toLowerCase() || "jpg";
				photoPath = `${member.user_id}/admin-photo-${Date.now()}.${extension}`;
				const { error: uploadError } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).upload(photoPath, editPhoto, {
					upsert: true,
					contentType: editPhoto.type || "image/jpeg"
				});
				if (uploadError) throw uploadError;
			}
			const payload = {
				full_name: editForm.fullName.trim(),
				father_name: editForm.fatherName.trim(),
				cnic: editForm.cnic.trim(),
				mobile: normalizeMobile(editForm.mobile),
				district: editForm.district.trim(),
				taluka: optionalText(editForm.taluka),
				address: editForm.address.trim(),
				date_of_birth: editForm.dateOfBirth || null,
				gender: optionalText(editForm.gender),
				education: optionalText(editForm.education),
				blood_group: optionalText(editForm.bloodGroup),
				profession: optionalText(editForm.profession),
				caste_branch: optionalText(editForm.casteBranch),
				emergency_contact_name: optionalText(editForm.emergencyContactName),
				emergency_contact_relation: optionalText(editForm.emergencyContactRelation),
				emergency_contact_mobile: normalizeMobile(editForm.emergencyContactMobile) || null,
				declaration_accepted: editForm.declarationAccepted,
				photo_url: photoPath ?? ""
			};
			const { data: updatedMember, error: updateError } = await supabase.from("members").update(payload).eq("id", member.id).select(MEMBER_SELECT_COLUMNS).maybeSingle();
			if (updateError) throw updateError;
			if (!updatedMember) throw new Error("Application could not be updated. Please refresh and try again.");
			const nextMember = updatedMember;
			const signedPhotoUrl = await createSignedPhotoUrl(nextMember.photo_url);
			if (editPhotoPreview?.startsWith("blob:")) URL.revokeObjectURL(editPhotoPreview);
			setMember(nextMember);
			setEditForm(memberToAdminEditForm(nextMember));
			setPhotoUrl(signedPhotoUrl);
			setEditPhoto(null);
			setEditPhotoPreview(null);
			setEditErrors({});
			setEditMode(false);
			setSuccess("Application details updated successfully.");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to update application details.");
		} finally {
			setEditSaving(false);
		}
	}
	function openOfficeBearerPanel() {
		if (!canIssueOfficeBearer) return;
		setOfficeBearerPanelOpen(true);
		window.setTimeout(() => {
			document.getElementById("office-bearer-issue-panel")?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 100);
	}
	async function loadOfficeBearerIssueData(memberId) {
		setOfficeBearerLoading(true);
		setOfficeBearerError("");
		try {
			const [committees, designations, assignments] = await Promise.all([
				fetchCommitteesForAdmin(),
				fetchDesignations(),
				fetchOfficeBearerAssignments(memberId)
			]);
			setOfficeBearerCommittees(committees);
			setOfficeBearerDesignations(designations);
			setOfficeBearerAssignments(assignments);
		} catch (err) {
			setOfficeBearerError(err instanceof Error ? err.message : "Unable to load designation assignment data.");
		} finally {
			setOfficeBearerLoading(false);
		}
	}
	function updateOfficeBearerForm(fields) {
		setOfficeBearerForm((current) => ({
			...current,
			...fields
		}));
		setOfficeBearerError("");
		setSuccess("");
	}
	function handleOfficeBearerCommitteeChange(committeeId) {
		const committee = officeBearerCommittees.find((item) => item.id === committeeId);
		setOfficeBearerForm((current) => ({
			...current,
			committeeId,
			designationId: "",
			designationTitle: "",
			tenureStart: committee?.tenure_start ?? (current.tenureStart || todayDate()),
			tenureEnd: committee?.tenure_end ?? ""
		}));
		setOfficeBearerError("");
		setSuccess("");
	}
	function handleOfficeBearerDesignationChange(designationId) {
		const designation = officeBearerDesignations.find((item) => item.id === designationId);
		setOfficeBearerForm((current) => ({
			...current,
			designationId,
			designationTitle: designation?.title ?? current.designationTitle
		}));
		setOfficeBearerError("");
		setSuccess("");
	}
	async function handleIssueOfficeBearerSubmit(event) {
		event.preventDefault();
		if (!member || !canIssueOfficeBearer || officeBearerSaving) return;
		const selectedCommittee = officeBearerCommittees.find((committee) => committee.id === officeBearerForm.committeeId);
		const designationTitle = officeBearerForm.designationTitle.trim();
		const sortOrder = Number.parseInt(officeBearerForm.sortOrder, 10);
		if (!selectedCommittee) {
			setOfficeBearerError("Select a level first.");
			return;
		}
		if (selectedCommittee.status !== "active") {
			setOfficeBearerError("Designation can only be assigned from an active level.");
			return;
		}
		if (!designationTitle) {
			setOfficeBearerError("Designation title is required.");
			return;
		}
		if (!Number.isFinite(sortOrder) || sortOrder < 0) {
			setOfficeBearerError("Display order must be a valid positive number.");
			return;
		}
		const duplicateActiveCommitteeRole = officeBearerAssignments.find((assignment) => assignment.committee_id === selectedCommittee.id && assignment.status === "active");
		if (duplicateActiveCommitteeRole) {
			setOfficeBearerError(`This member already has an active ${duplicateActiveCommitteeRole.designation_title} role in this committee. Open the committee detail page to edit the existing role.`);
			return;
		}
		setOfficeBearerSaving(true);
		setOfficeBearerError("");
		setError("");
		setSuccess("");
		try {
			await addCommitteeMember({
				committee_id: selectedCommittee.id,
				member: memberToCommitteeSearchResult(member),
				designation_id: officeBearerForm.designationId || null,
				designation_title: designationTitle,
				status: officeBearerForm.status,
				sort_order: sortOrder,
				tenure_start: officeBearerForm.tenureStart || null,
				tenure_end: officeBearerForm.tenureEnd || null,
				appointment_notes: officeBearerForm.appointmentNotes.trim() || null
			});
			await loadOfficeBearerIssueData(member.id);
			setOfficeBearerForm({
				...initialOfficeBearerIssueForm,
				tenureStart: todayDate()
			});
			setOfficeBearerPanelOpen(false);
			setSuccess("Designation assigned successfully. It will now appear on the member’s membership card.");
		} catch (err) {
			setOfficeBearerError(err instanceof Error ? err.message : "Failed to assign designation.");
		} finally {
			setOfficeBearerSaving(false);
		}
	}
	async function handlePaymentReceiptUpload(file) {
		if (!member || receiptUploading) return;
		if (membershipPayment?.status === "paid" || membershipPayment?.status === "waived") {
			setError("Paid or waived payment records are locked. Receipt changes are not allowed.");
			return;
		}
		if (!canEditPaymentReceipt) {
			setError("Receipt replacement is available only before approval. Use payment status controls for approved members.");
			return;
		}
		if (!MEMBERSHIP_RECEIPT_ALLOWED_TYPES.includes(file.type)) {
			setError(`Receipt must be PNG, JPG, WebP or PDF and 5MB or smaller.`);
			return;
		}
		if (file.size > 5242880) {
			setError(`Receipt file must be 5MB or smaller.`);
			return;
		}
		if (membershipPayment && membershipPayment.status !== "pending" && membershipPayment.status !== "failed") {
			setError("Only pending or failed payment records can receive replacement receipts.");
			return;
		}
		setReceiptUploading(true);
		setError("");
		setSuccess("");
		try {
			const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
			const receiptPath = `${member.user_id}/admin-receipt-${Date.now()}.${extension}`;
			const receiptMimeType = file.type || "application/octet-stream";
			const receiptUploadedAt = (/* @__PURE__ */ new Date()).toISOString();
			const { error: uploadError } = await supabase.storage.from(MEMBERSHIP_RECEIPT_BUCKET).upload(receiptPath, file, {
				upsert: true,
				contentType: receiptMimeType
			});
			if (uploadError) throw uploadError;
			const receiptPayload = {
				receipt_path: receiptPath,
				receipt_file_name: file.name,
				receipt_mime_type: receiptMimeType,
				receipt_size_bytes: file.size,
				receipt_uploaded_at: receiptUploadedAt
			};
			let savedPayment = null;
			if (membershipPayment) {
				const { data, error: updateError } = await supabase.from("membership_payments").update({
					...receiptPayload,
					status: membershipPayment.status === "failed" ? "pending" : membershipPayment.status,
					updated_at: receiptUploadedAt
				}).eq("id", membershipPayment.id).in("status", ["pending", "failed"]).select("*").maybeSingle().returns();
				if (updateError) throw updateError;
				if (!data) throw new Error("Payment record could not be updated.");
				savedPayment = data;
			} else {
				const { data, error: insertError } = await supabase.from("membership_payments").insert(createPendingMembershipPaymentPayload(member.id, member.user_id, receiptPayload)).select("*").maybeSingle().returns();
				if (insertError) throw insertError;
				if (!data) throw new Error("Payment record could not be created.");
				savedPayment = data;
			}
			const signedReceiptUrl = await createSignedReceiptUrl(savedPayment.receipt_path);
			setMembershipPayment(savedPayment);
			setReceiptSignedUrl(signedReceiptUrl);
			setPaymentAdminNote(savedPayment.admin_note ?? "");
			setPaymentLoadError(savedPayment.receipt_path && !signedReceiptUrl ? "Receipt file not available." : "");
			setSuccess("Payment receipt updated successfully.");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to upload receipt.");
		} finally {
			setReceiptUploading(false);
		}
	}
	async function handleApprove() {
		if (!member || actionLoading) return;
		if (!window.confirm(`Approve ${member.full_name}? This will issue/activate membership and enable the digital card when member number is available.`)) return;
		setActionLoading(true);
		setError("");
		setSuccess("");
		try {
			const accessToken = await getAccessToken();
			await approveMemberAction({ data: {
				memberId: member.id,
				accessToken
			} });
			setSuccess("Member approved successfully.");
			await loadMember(void 0, { silent: true });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to approve member.");
		} finally {
			setActionLoading(false);
		}
	}
	async function handleReject() {
		if (!member || actionLoading || trimmedRejectionReason.length < MIN_REJECTION_REASON_LENGTH) return;
		if (!window.confirm(`Reject ${member.full_name}? The member will need to update and resubmit the application.`)) return;
		setActionLoading(true);
		setError("");
		setSuccess("");
		try {
			const accessToken = await getAccessToken();
			await rejectMemberAction({ data: {
				memberId: member.id,
				rejectionReason: trimmedRejectionReason,
				accessToken
			} });
			setRejectionReason("");
			setSuccess("Application rejected with reason.");
			await loadMember(void 0, { silent: true });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to reject member.");
		} finally {
			setActionLoading(false);
		}
	}
	async function handlePaymentStatusUpdate(status) {
		if (!member || !membershipPayment || paymentActionLoading) return;
		if (!window.confirm(`Update membership fee status to ${getMembershipPaymentStatusLabel(status)}?`)) return;
		setPaymentActionLoading(true);
		setError("");
		setSuccess("");
		try {
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const nextPaidAt = status === "paid" || status === "waived" ? membershipPayment.paid_at ?? now : null;
			const { data, error: updateError } = await supabase.from("membership_payments").update({
				status,
				admin_note: paymentAdminNote.trim() || null,
				paid_at: nextPaidAt,
				updated_at: now
			}).eq("id", membershipPayment.id).select("*").maybeSingle().returns();
			if (updateError) throw updateError;
			if (!data) throw new Error("Payment record could not be updated.");
			const signedReceiptUrl = await createSignedReceiptUrl(data.receipt_path);
			setMembershipPayment(data);
			setReceiptSignedUrl(signedReceiptUrl);
			setPaymentAdminNote(data.admin_note ?? "");
			setPaymentLoadError(data.receipt_path && !signedReceiptUrl ? "Receipt file not available." : "");
			setSuccess(`Membership fee marked as ${getMembershipPaymentStatusLabel(status)}.`);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to update membership fee status.");
		} finally {
			setPaymentActionLoading(false);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Member Detail",
		subtitle: "Review membership application, payment receipt, profile data and digital card status.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm font-bold text-slate-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), copy.loading]
				})
			})
		})
	});
	if (!member) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Member Detail",
		subtitle: "Review membership application, payment receipt, profile data and digital card status.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToAdmin, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-red-50 p-5 ring-1 ring-red-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-red-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-black text-red-900",
							children: copy.memberNotFound
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-red-700",
							children: error || copy.memberNotFoundText
						})] })]
					})
				})]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Member Detail",
		subtitle: "Review membership application, payment receipt, profile data and digital card status.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToAdmin, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `min-w-0 ${textAlignClass}`,
									dir: textDir,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
											children: copy.pageEyebrow
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "mt-2 break-words text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
											children: member.full_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm leading-6 text-slate-600",
											children: [
												copy.cnic,
												":",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-800",
													children: formatCnic(member.cnic)
												}),
												" ",
												"· ",
												copy.district,
												":",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-slate-800",
													children: [member.district, member.taluka ? ` / ${member.taluka}` : ""]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-slate-500",
											children: [
												copy.memberNo,
												":",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-slate-900",
													children: member.member_no || copy.notIssuedYet
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-start gap-3 lg:items-end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: member.status }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid w-full gap-2 sm:grid-cols-2 xl:flex xl:w-auto",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => void loadMember(void 0, { silent: true }),
													disabled: refreshing,
													className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), copy.refresh]
												}),
												canEditApplication ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: startEditMode,
													className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" }), "Edit Application"]
												}) : null,
												canViewCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/admin/members/$id/card",
													params: { id: member.id },
													className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
													style: { color: "#ffffff" },
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), copy.viewCard]
												}), canIssueOfficeBearer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: openOfficeBearerPanel,
													className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-5 py-2 text-sm font-bold text-amber-950 shadow-sm transition hover:bg-amber-100",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }), "Assign Designation"]
												}) : null] }) : null
											]
										}),
										!canViewCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-xs text-left text-xs leading-5 text-slate-500 lg:text-right",
											children: copy.digitalCardUnavailable
										}) : null
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
									label: copy.summary.status,
									value: getStatusLabel(member.status, copy),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
									label: copy.summary.memberNo,
									value: member.member_no || copy.notIssued,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
									label: copy.summary.submitted,
									value: formatDate(member.created_at, true) || copy.notProvided,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
									label: copy.summary.reviewed,
									value: formatDate(member.reviewed_at || member.approved_at, true) || copy.notReviewed,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
								})
							]
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBox, {
						tone: "error",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5" }),
						children: error
					}) : null,
					success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBox, {
						tone: "success",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }),
						children: success
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPanel, { member }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipPaymentPanel, {
						payment: membershipPayment,
						receiptSignedUrl,
						loadError: paymentLoadError,
						adminNote: paymentAdminNote,
						onAdminNoteChange: setPaymentAdminNote,
						onStatusUpdate: handlePaymentStatusUpdate,
						onReceiptUpload: handlePaymentReceiptUpload,
						actionLoading: paymentActionLoading,
						receiptUploading,
						canEditReceipt: canEditPaymentReceipt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "space-y-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPhoto, {
										src: photoUrl,
										alt: member.full_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold uppercase tracking-wide text-slate-500",
												children: copy.sidebar.quickContact
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 break-all text-sm font-black text-slate-950",
												children: formatMobile(member.mobile)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm text-slate-600",
												children: [member.district, member.taluka ? `, ${member.taluka}` : ""]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "leading-6",
												children: copy.sidebar.verificationNotice
											})]
										})
									})
								]
							}),
							editMode && editForm && canEditApplication ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMemberEditPanel, {
								form: editForm,
								errors: editErrors,
								photoPreview: editPhotoPreview || photoUrl,
								selectedPhotoName: editPhoto?.name ?? "",
								saving: editSaving,
								onChange: updateEditField,
								onPhotoChange: handleAdminPhotoChange,
								onSubmit: handleAdminEditSubmit,
								onCancel: cancelEditMode
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6 md:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-black text-slate-950",
											children: copy.details.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-slate-500",
											children: copy.details.subtitle
										})] }), canViewCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid w-full gap-2 sm:w-auto sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/admin/members/$id/card",
												params: { id: member.id },
												className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
												style: { color: "#ffffff" },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), copy.openCard]
											}), canIssueOfficeBearer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: openOfficeBearerPanel,
												className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 text-sm font-bold text-amber-950 shadow-sm transition hover:bg-amber-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }), "Assign Designation"]
											}) : null]
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGroup, {
												title: copy.details.identity,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.fullName,
														value: member.full_name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.fatherName,
														value: member.father_name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.cnic,
														value: formatCnic(member.cnic)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.mobile,
														value: formatMobile(member.mobile)
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGroup, {
												title: copy.details.location,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.district,
														value: member.district
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.taluka,
														value: member.taluka
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.address,
														value: member.address,
														wide: true
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGroup, {
												title: copy.details.profile,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.dateOfBirth,
														value: formatDate(member.date_of_birth)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.gender,
														value: member.gender
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.education,
														value: member.education
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.bloodGroup,
														value: member.blood_group
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.profession,
														value: member.profession
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.casteBranch,
														value: member.caste_branch
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGroup, {
												title: copy.details.emergencyContact,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.emergencyContactName,
														value: member.emergency_contact_name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.emergencyContactRelation,
														value: member.emergency_contact_relation
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.emergencyContactMobile,
														value: formatMobile(member.emergency_contact_mobile)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.declarationAccepted,
														value: member.declaration_accepted ? copy.details.yes : copy.details.no
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGroup, {
												title: copy.details.reviewRecord,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.summary.memberNo,
														value: member.member_no
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.summary.submitted,
														value: formatDate(member.created_at, true)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.approvedAt,
														value: formatDate(member.approved_at, true)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
														label: copy.details.reviewedAt,
														value: formatDate(member.reviewed_at, true)
													})
												]
											})
										]
									}),
									member.rejection_reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-black",
												children: copy.details.rejectionReason
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 leading-6",
												children: member.rejection_reason
											})] })]
										})
									}) : null
								]
							})
						]
					}),
					canIssueOfficeBearer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeBearerIssuePanel, {
						member,
						assignments: officeBearerAssignments,
						committees: officeBearerCommittees,
						designations: scopedOfficeBearerDesignations,
						selectedCommittee: selectedOfficeBearerCommittee ?? null,
						form: officeBearerForm,
						loading: officeBearerLoading,
						saving: officeBearerSaving,
						error: officeBearerError,
						isOpen: officeBearerPanelOpen,
						hasActiveOfficeBearer,
						onOpenChange: setOfficeBearerPanelOpen,
						onRefresh: () => void loadOfficeBearerIssueData(member.id),
						onCommitteeChange: handleOfficeBearerCommitteeChange,
						onDesignationChange: handleOfficeBearerDesignationChange,
						onFormChange: updateOfficeBearerForm,
						onSubmit: handleIssueOfficeBearerSubmit
					}) : null,
					member.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "admin-member-review-panel rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black text-slate-950",
									children: copy.review.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-2xl text-sm leading-6 text-slate-500",
									children: copy.review.subtitle
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleApprove,
									disabled: actionLoading,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
									children: [actionLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-4 w-4" }), actionLoading ? copy.review.processing : copy.review.approve]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewChecklist, { member }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "admin-member-rejection-box mt-6 max-w-2xl rounded-2xl border border-red-100 bg-red-50/60 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-bold text-red-900",
										children: copy.details.rejectionReason
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: rejectionReason,
										onChange: (event) => setRejectionReason(event.target.value),
										className: "min-h-28 w-full rounded-xl border border-red-200 bg-white px-3 py-2 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:text-sm",
										placeholder: copy.review.rejectionPlaceholder
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: `text-xs font-medium ${reasonTooShort ? "text-red-700" : "text-slate-500"}`,
										children: [
											copy.review.minimum,
											" ",
											MIN_REJECTION_REASON_LENGTH,
											" ",
											copy.review.charactersRequired,
											copy.review.current,
											": ",
											trimmedRejectionReason.length
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleReject,
										disabled: actionLoading || trimmedRejectionReason.length < MIN_REJECTION_REASON_LENGTH,
										className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60",
										children: [actionLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), actionLoading ? copy.review.processing : copy.review.reject]
									})]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-black text-slate-950",
								children: copy.review.completedTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm leading-6 text-slate-500",
								children: [
									copy.review.completedText,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: getStatusLabel(member.status, copy) }),
									"."
								]
							})] }), canViewCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid w-full gap-2 sm:w-auto sm:grid-cols-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/admin/members/$id/card",
									params: { id: member.id },
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
									style: { color: "#ffffff" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), copy.viewCard]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-slate-800 no-underline shadow-sm transition hover:bg-slate-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), copy.review.backToAdminList]
							})]
						})
					})
				]
			})
		})
	});
}
function normalizeDesignationLevelText(value) {
	return String(value ?? "").trim().toLowerCase();
}
function sameTextValue(a, b) {
	const left = normalizeDesignationLevelText(a);
	const right = normalizeDesignationLevelText(b);
	return Boolean(left && right && left === right);
}
function scoreCommitteeForMember(committee, member) {
	let score = 0;
	if (sameTextValue(committee.district, member.district)) score += 4;
	if (sameTextValue(committee.taluka, member.taluka)) score += 6;
	return score;
}
function isCentralExecutiveCommittee(committee) {
	const name = normalizeDesignationLevelText(committee.name);
	return committee.committee_type === "central" && (name.includes("central executive") || name.includes("central working") || name.includes("cwc") || name.includes("cec") || name.includes("markaz"));
}
function isCentralAdvisoryCommittee(committee) {
	const name = normalizeDesignationLevelText(committee.name);
	return committee.committee_type === "central_advisory" || committee.committee_type === "central" && (name.includes("central advisory") || name.includes("advisory committee") || name.includes("advisory board") || name.includes("advisor"));
}
function isProvincialCommittee(committee) {
	const name = normalizeDesignationLevelText(committee.name);
	return committee.committee_type === "provincial" || committee.committee_type === "central" && (name.includes("provincial") || name.includes("province") || name.includes("sindh"));
}
function pickBestCommittee(candidates, member) {
	return [...candidates].sort((a, b) => {
		const scoreDifference = scoreCommitteeForMember(b, member) - scoreCommitteeForMember(a, member);
		if (scoreDifference !== 0) return scoreDifference;
		return a.name.localeCompare(b.name);
	})[0] ?? null;
}
function findCommitteeForDesignationLevel(level, activeCommittees, member) {
	if (!level) return null;
	if (level === "central-executive") return pickBestCommittee(activeCommittees.filter(isCentralExecutiveCommittee), member);
	if (level === "central-advisory") return pickBestCommittee(activeCommittees.filter(isCentralAdvisoryCommittee), member);
	if (level === "provincial") return pickBestCommittee(activeCommittees.filter(isProvincialCommittee), member);
	if (level === "divisional") return pickBestCommittee(activeCommittees.filter((committee) => committee.committee_type === "divisional"), member);
	if (level === "district") return pickBestCommittee(activeCommittees.filter((committee) => committee.committee_type === "district"), member);
	return pickBestCommittee(activeCommittees.filter((committee) => committee.committee_type === "taluka"), member);
}
function getSelectedDesignationLevel(selectedCommittee, activeCommittees, member) {
	if (!selectedCommittee) return "";
	return designationAssignmentLevelOptions.find((level) => {
		return findCommitteeForDesignationLevel(level.value, activeCommittees, member)?.id === selectedCommittee.id;
	})?.value ?? "";
}
function getRecommendedDesignationOptions(level) {
	if (!level) return [];
	return recommendedDesignationsByLevel[level].map((title) => ({
		value: `recommended:${level}:${title}`,
		label: title,
		source: "recommended"
	}));
}
function getConfiguredDesignationOptions(designations) {
	return designations.filter((designation) => designation.is_active).map((designation) => ({
		value: `configured:${designation.id}`,
		label: designation.title,
		source: "configured",
		designationId: designation.id
	}));
}
function getDesignationDropdownOptions(level, designations) {
	const optionMap = /* @__PURE__ */ new Map();
	for (const option of getRecommendedDesignationOptions(level)) optionMap.set(option.label.toLowerCase(), option);
	for (const option of getConfiguredDesignationOptions(designations)) {
		const key = option.label.toLowerCase();
		if (!optionMap.has(key)) optionMap.set(key, option);
	}
	return Array.from(optionMap.values());
}
function OfficeBearerIssuePanel({ member, assignments, committees, designations, selectedCommittee, form, loading, saving, error, isOpen, hasActiveOfficeBearer, onOpenChange, onRefresh, onCommitteeChange, onDesignationChange, onFormChange, onSubmit }) {
	const activeCommittees = committees.filter((committee) => committee.status === "active");
	const selectedActiveCommittee = selectedCommittee?.status === "active" ? selectedCommittee : null;
	const selectedLevel = getSelectedDesignationLevel(selectedActiveCommittee, activeCommittees, member);
	const designationDropdownOptions = getDesignationDropdownOptions(selectedLevel, designations);
	const selectedDesignationValue = designationDropdownOptions.find((option) => option.designationId && option.designationId === form.designationId || option.label === form.designationTitle)?.value ?? "";
	const canSubmit = Boolean(selectedActiveCommittee) && Boolean(form.designationTitle.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "office-bearer-issue-panel",
		className: "scroll-mt-24 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
						children: "Member Designation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-lg font-black text-slate-950",
						children: "Assign designation to membership card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-3xl text-sm leading-6 text-slate-500",
						children: "Select a level for this approved member. After saving, the designation will appear on the standard MBJP membership card and membership QR verification page."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full gap-2 sm:grid-cols-2 lg:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onRefresh,
							disabled: loading,
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${loading ? "animate-spin" : ""}` }), "Refresh"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/members/$id/card",
							params: { id: member.id },
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-950 px-4 text-sm font-bold !text-white no-underline shadow-sm ring-1 ring-amber-300/40 transition hover:bg-emerald-900 hover:!text-white",
							style: { color: "#ffffff" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-amber-300" }), "Open Membership Card"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpenChange(!isOpen),
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 text-sm font-bold text-amber-950 shadow-sm transition hover:bg-amber-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }), isOpen ? "Close Form" : "Assign Designation"]
						})
					]
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-800",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-black uppercase tracking-wide text-slate-700",
							children: "Current member designations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-5 text-slate-500",
							children: "Active designation will be printed on the standard membership card."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex rounded-full px-3 py-1 text-xs font-black ring-1 ${hasActiveOfficeBearer ? "bg-emerald-50 text-emerald-800 ring-emerald-200" : "bg-amber-50 text-amber-900 ring-amber-200"}`,
							children: hasActiveOfficeBearer ? "Active Designation" : "No Active Designation"
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 rounded-xl bg-white p-4 text-sm font-bold text-slate-600 ring-1 ring-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-emerald-700" }), "Loading designation assignments..."]
					}) : assignments.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3",
						children: assignments.map((assignment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base font-black text-slate-950",
											children: assignment.designation_title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold text-slate-600",
											children: assignment.committee?.name ?? "Committee not found"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-5 text-slate-500",
											children: assignment.committee ? `${getCommitteeTypeLabel(assignment.committee.committee_type)} · ${getCommitteeLocationLabel(assignment.committee)}` : "Committee details unavailable"
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex w-fit rounded-full px-3 py-1 text-xs font-black ring-1 ${getCommitteeStatusClass(assignment.status)}`,
										children: getCommitteeStatusLabel(assignment.status)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-2 text-xs font-semibold text-slate-600 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Start: ", formatCommitteeDate(assignment.tenure_start)] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["End: ", formatCommitteeDate(assignment.tenure_end)] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Order: ", assignment.sort_order] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [assignment.committee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/committees/$id",
										params: { id: assignment.committee.id },
										className: "inline-flex h-9 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-xs font-black text-slate-700 no-underline shadow-sm transition hover:bg-slate-50",
										children: "Manage Committee"
									}) : null, assignment.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/members/$id/card",
										params: { id: member.id },
										className: "inline-flex h-9 items-center justify-center rounded-xl bg-emerald-900 px-3 text-xs font-black !text-white no-underline shadow-sm transition hover:bg-emerald-800",
										style: { color: "#ffffff" },
										children: "Open Membership Card"
									}) : null]
								})
							]
						}, assignment.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-slate-600 ring-1 ring-slate-200",
						children: "No designation has been assigned to this approved member yet. Use the quick form to assign one."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-black",
							children: "Designation assignment process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-2 list-decimal space-y-1 pl-5 font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Select a level." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Select or type the designation title." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Save to show the designation on the standard membership card." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs font-semibold text-amber-800",
							children: "Member must remain approved and the assigned level/designation must stay active for QR verification to remain valid."
						})
					]
				})]
			}),
			isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Level",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: selectedLevel,
									onChange: (event) => {
										onCommitteeChange(findCommitteeForDesignationLevel(event.target.value, activeCommittees, member)?.id ?? "");
									},
									className: "admin-edit-input",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select level"
									}), designationAssignmentLevelOptions.map((level) => {
										const committee = findCommitteeForDesignationLevel(level.value, activeCommittees, member);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: level.value,
											disabled: !committee,
											children: [level.label, committee ? "" : " — not configured"]
										}, level.value);
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Designation",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: selectedDesignationValue,
									onChange: (event) => {
										const option = designationDropdownOptions.find((item) => item.value === event.target.value);
										if (!option) {
											onFormChange({
												designationId: "",
												designationTitle: ""
											});
											return;
										}
										if (option.designationId) {
											onDesignationChange(option.designationId);
											return;
										}
										onFormChange({
											designationId: "",
											designationTitle: option.label
										});
									},
									className: "admin-edit-input",
									disabled: !selectedActiveCommittee,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select designation"
									}), designationDropdownOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: option.value,
										children: [option.label, option.source === "configured" ? " — configured" : ""]
									}, option.value))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Final card title",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.designationTitle,
									onChange: (event) => onFormChange({ designationTitle: event.target.value }),
									className: "admin-edit-input",
									placeholder: selectedLevel ? `e.g. ${recommendedDesignationsByLevel[selectedLevel][0]}` : "Select level first"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Status",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.status,
									onChange: (event) => onFormChange({ status: event.target.value }),
									className: "admin-edit-input",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "active",
											children: "Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "suspended",
											children: "Suspended"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "completed",
											children: "Completed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "resigned",
											children: "Resigned"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Display order",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									value: form.sortOrder,
									onChange: (event) => onFormChange({ sortOrder: event.target.value }),
									className: "admin-edit-input"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Tenure start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: form.tenureStart,
									onChange: (event) => onFormChange({ tenureStart: event.target.value }),
									className: "admin-edit-input"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Tenure end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: form.tenureEnd,
									onChange: (event) => onFormChange({ tenureEnd: event.target.value }),
									className: "admin-edit-input"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
								label: "Appointment notes",
								wide: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.appointmentNotes,
									onChange: (event) => onFormChange({ appointmentNotes: event.target.value }),
									className: "admin-edit-input min-h-24",
									placeholder: "Optional CWC/committee approval note."
								})
							})
						]
					}),
					activeCommittees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold text-amber-900",
						children: "No active level is available. Create or activate the required level first from Committees & Designations."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onOpenChange(false),
							className: "inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: saving || !canSubmit || activeCommittees.length === 0,
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
							children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" }), saving ? "Assigning..." : "Assign Designation"]
						})]
					})
				]
			}) : null
		]
	});
}
function AdminMemberEditPanel({ form, errors, photoPreview, selectedPhotoName, saving, onChange, onPhotoChange, onSubmit, onCancel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "admin-member-edit-panel",
		className: "scroll-mt-24 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-amber-200 sm:p-6 md:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.22em] text-amber-700",
					children: "Admin Edit Mode"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-lg font-black text-slate-950",
					children: "Edit member application"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-2xl text-sm leading-6 text-slate-500",
					children: "Update member details when a correction is needed. Member number, review status and approval fields remain controlled by the existing review workflow."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onCancel,
				className: "inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
				children: "Cancel"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mt-6 space-y-6",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-[140px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-slate-200 bg-slate-100",
						children: photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photoPreview,
							alt: "Profile preview",
							className: "aspect-[4/5] w-full object-contain bg-slate-50"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[4/5] items-center justify-center text-slate-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "h-8 w-8" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wide text-slate-500",
									children: "Replace profile photo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/png,image/jpeg,image/webp",
									onChange: onPhotoChange,
									className: "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs leading-5 text-slate-500",
								children: ["PNG, JPG or WebP only. Maximum 2MB. ", selectedPhotoName ? `Selected: ${selectedPhotoName}` : ""]
							}),
							errors.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-bold text-red-700",
								children: errors.photo
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminEditGroup, {
					title: "Identity",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Full name",
							error: errors.fullName,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.fullName,
								onChange: (event) => onChange("fullName", event.target.value),
								className: "admin-edit-input",
								"aria-invalid": Boolean(errors.fullName)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Father name",
							error: errors.fatherName,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.fatherName,
								onChange: (event) => onChange("fatherName", event.target.value),
								className: "admin-edit-input",
								"aria-invalid": Boolean(errors.fatherName)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "CNIC",
							error: errors.cnic,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.cnic,
								onChange: (event) => onChange("cnic", formatCnicInput(event.target.value)),
								className: "admin-edit-input",
								inputMode: "numeric",
								"aria-invalid": Boolean(errors.cnic)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Mobile",
							error: errors.mobile,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.mobile,
								onChange: (event) => onChange("mobile", formatMobileInput(event.target.value)),
								className: "admin-edit-input",
								inputMode: "tel",
								"aria-invalid": Boolean(errors.mobile)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminEditGroup, {
					title: "Location",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "District",
							error: errors.district,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.district,
								onChange: (event) => onChange("district", event.target.value),
								className: "admin-edit-input",
								"aria-invalid": Boolean(errors.district)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Taluka",
							error: errors.taluka,
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.taluka,
								onChange: (event) => onChange("taluka", event.target.value),
								className: "admin-edit-input",
								"aria-invalid": Boolean(errors.taluka)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Address",
							error: errors.address,
							required: true,
							wide: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.address,
								onChange: (event) => onChange("address", event.target.value),
								className: "admin-edit-input min-h-24",
								"aria-invalid": Boolean(errors.address)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminEditGroup, {
					title: "Profile",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Date of birth",
							error: errors.dateOfBirth,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.dateOfBirth,
								onChange: (event) => onChange("dateOfBirth", event.target.value),
								className: "admin-edit-input",
								max: todayDate(),
								"aria-invalid": Boolean(errors.dateOfBirth)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Gender",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.gender,
								onChange: (event) => onChange("gender", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Education",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.education,
								onChange: (event) => onChange("education", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Blood group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.bloodGroup,
								onChange: (event) => onChange("bloodGroup", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Profession",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.profession,
								onChange: (event) => onChange("profession", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Caste / branch",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.casteBranch,
								onChange: (event) => onChange("casteBranch", event.target.value),
								className: "admin-edit-input"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminEditGroup, {
					title: "Emergency contact",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Contact name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.emergencyContactName,
								onChange: (event) => onChange("emergencyContactName", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Relation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.emergencyContactRelation,
								onChange: (event) => onChange("emergencyContactRelation", event.target.value),
								className: "admin-edit-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditInput, {
							label: "Contact mobile",
							error: errors.emergencyContactMobile,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.emergencyContactMobile,
								onChange: (event) => onChange("emergencyContactMobile", formatMobileInput(event.target.value)),
								className: "admin-edit-input",
								inputMode: "tel",
								"aria-invalid": Boolean(errors.emergencyContactMobile)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.declarationAccepted,
						onChange: (event) => onChange("declarationAccepted", event.target.checked),
						className: "mt-1 h-4 w-4 accent-emerald-700"
					}), "Declaration accepted by the member / verified by admin."]
				}),
				errors.declarationAccepted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-red-700",
					children: errors.declarationAccepted
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCancel,
						className: "inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: saving,
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
						children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), saving ? "Saving..." : "Save Application"]
					})]
				})
			]
		})]
	});
}
function AdminEditGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-3 text-sm font-black uppercase tracking-wide text-slate-700",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children
	})] });
}
function AdminEditInput({ label, children, error, required, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${wide ? "md:col-span-2" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mb-1 block text-xs font-black uppercase tracking-wide text-slate-500",
				children: [label, required ? " *" : ""]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs font-bold text-red-700",
				children: error
			}) : null
		]
	});
}
function BackToAdmin() {
	const { copy, iconBeforeClass } = useAdminMemberDetailCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin",
		className: "inline-flex items-center gap-2 text-sm font-bold text-emerald-700 no-underline hover:text-emerald-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: `h-4 w-4 ${iconBeforeClass}` }), copy.backToAdmin]
	});
}
function MemberPhoto({ src, alt }) {
	const { copy } = useAdminMemberDetailCopy();
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex aspect-square w-full items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-500 ring-1 ring-slate-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "mx-auto h-8 w-8 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: copy.sidebar.noPhoto
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: `${alt} profile photo`,
		className: "aspect-square w-full rounded-2xl object-contain bg-slate-50 ring-1 ring-slate-200"
	});
}
function StatusPanel({ member }) {
	const { copy } = useAdminMemberDetailCopy();
	const item = {
		pending: {
			title: copy.status.pendingTitle,
			text: copy.status.pendingText,
			className: "bg-amber-50 text-amber-900 ring-amber-100",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hourglass, { className: "h-5 w-5 text-amber-700" })
		},
		approved: {
			title: copy.status.approvedTitle,
			text: member.member_no ? copy.status.approvedTextIssued.replace("{{memberNo}}", member.member_no) : copy.status.approvedTextMissing,
			className: "bg-emerald-50 text-emerald-900 ring-emerald-100",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-5 w-5 text-emerald-700" })
		},
		rejected: {
			title: copy.status.rejectedTitle,
			text: member.rejection_reason || copy.status.rejectedText,
			className: "bg-red-50 text-red-900 ring-red-100",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5 text-red-700" })
		}
	}[member.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `rounded-3xl p-5 ring-1 ${item.className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-white/70 p-3 shadow-sm",
				children: item.icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-black",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-6",
				children: item.text
			})] })]
		})
	});
}
function ReviewChecklist({ member }) {
	const checks = [
		{
			label: "Photo",
			ready: Boolean(member.photo_url),
			text: member.photo_url ? "Photo uploaded." : "Photo is missing."
		},
		{
			label: "CNIC & mobile",
			ready: Boolean(member.cnic && member.mobile),
			text: "CNIC and mobile number should be verified before approval."
		},
		{
			label: "Area",
			ready: Boolean(member.district && member.taluka),
			text: member.taluka ? `${member.district} / ${member.taluka}` : "Taluka is missing or not selected."
		},
		{
			label: "Declaration",
			ready: member.declaration_accepted,
			text: member.declaration_accepted ? "Member accepted declaration." : "Declaration is not accepted."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-member-checklist mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-black text-emerald-950",
					children: "Approval verification checklist"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-6 text-emerald-900/75",
					children: "Review profile details, payment receipt and identity information before approval."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-emerald-800 shadow-sm ring-1 ring-emerald-100",
					children: "Manual Review"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-white p-3 shadow-sm ring-1 ring-emerald-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl ${check.ready ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
							children: check.ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-black text-slate-950",
								children: check.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-slate-500",
								children: check.text
							})]
						})]
					})
				}, check.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-member-payment-note mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Payment receipt/status should be confirmed from the membership payment record before final approval." })]
				})
			})
		]
	});
}
function MembershipPaymentPanel({ payment, receiptSignedUrl, loadError, adminNote, onAdminNoteChange, onStatusUpdate, onReceiptUpload, actionLoading, receiptUploading, canEditReceipt }) {
	const status = getMembershipPaymentDisplayStatus(payment);
	const paymentFinal = status === "paid" || status === "waived";
	const canUpdate = Boolean(payment) && !actionLoading;
	const canUploadReceipt = canEditReceipt && !receiptUploading && (!payment || payment.status === "pending" || payment.status === "failed") && !paymentFinal;
	const receiptLabel = payment?.receipt_file_name || (payment?.receipt_path ? "Uploaded" : "Not uploaded");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "admin-member-payment-panel rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
						children: "Membership Fee"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-lg font-black text-slate-950",
						children: "Payment Receipt & Verification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-2xl text-sm leading-6 text-slate-500",
						children: "Confirm the manual payment record and receipt before final approval."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `inline-flex w-fit rounded-full border px-3 py-1 text-xs font-black ${getMembershipPaymentStatusClass(status)}`,
					children: getMembershipPaymentStatusLabel(status)
				})]
			}),
			loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-900",
				children: loadError
			}) : null,
			!payment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-600",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No membership payment record found for this application." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `mt-4 inline-flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-bold shadow-sm transition ${canUploadReceipt ? "cursor-pointer border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100" : "cursor-not-allowed border-slate-200 bg-white text-slate-400"}`,
					children: [receiptUploading ? "Uploading..." : "Upload Receipt & Create Pending Payment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/png,image/jpeg,image/webp,application/pdf",
						disabled: !canUploadReceipt,
						onChange: (event) => {
							const file = event.target.files?.[0];
							event.target.value = "";
							if (file) onReceiptUpload(file);
						},
						className: "sr-only"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Base Fee",
							value: formatMembershipMoney(payment.base_amount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Tax / Charges",
							value: formatMembershipMoney(payment.tax_amount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Total Amount",
							value: `${formatMembershipMoney(payment.total_amount)} ${payment.currency}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Payment Method",
							value: formatPaymentMethod(payment)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Gateway / Account",
							value: formatGatewayProvider(payment)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Gateway Reference",
							value: payment.gateway_reference
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Receipt File",
							value: receiptLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Receipt Uploaded",
							value: formatDate(payment.receipt_uploaded_at, true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Paid At",
							value: formatDate(payment.paid_at, true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							label: "Last Updated",
							value: formatDate(payment.updated_at, true)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.45fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block rounded-2xl border border-slate-200 bg-slate-50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black uppercase tracking-wide text-slate-500",
							children: "Admin Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: adminNote,
							onChange: (event) => onAdminNoteChange(event.target.value),
							className: "mt-2 min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
							placeholder: "Optional note about payment verification."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: getMembershipPaymentQrHelpText() })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-black text-slate-950",
						children: "Payment Receipt"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-5 text-slate-500",
						children: payment.receipt_path ? receiptSignedUrl ? "Private receipt link is ready for admin review." : "Receipt file not available." : "No receipt was uploaded with this payment record."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `inline-flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-bold shadow-sm transition ${canUploadReceipt ? "cursor-pointer border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100" : "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"}`,
								children: [receiptUploading ? "Uploading..." : payment?.receipt_path ? "Replace Receipt" : "Upload Receipt", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/png,image/jpeg,image/webp,application/pdf",
									disabled: !canUploadReceipt,
									onChange: (event) => {
										const file = event.target.files?.[0];
										event.target.value = "";
										if (file) onReceiptUpload(file);
									},
									className: "sr-only"
								})]
							}),
							!canUploadReceipt && paymentFinal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex min-h-11 items-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-bold text-emerald-800",
								children: "Final payment locked"
							}) : null,
							receiptSignedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: receiptSignedUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
								style: { color: "#ffffff" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), "Open Receipt"]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onStatusUpdate("pending"),
								disabled: !canUpdate || status === "pending",
								className: "inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 text-sm font-bold text-amber-900 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50",
								children: "Mark Pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onStatusUpdate("paid"),
								disabled: !canUpdate || status === "paid",
								className: "inline-flex h-11 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50",
								children: actionLoading ? "Updating..." : "Mark Paid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onStatusUpdate("waived"),
								disabled: !canUpdate || status === "waived",
								className: "inline-flex h-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 text-sm font-bold text-sky-900 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-50",
								children: "Mark Waived"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onStatusUpdate("failed"),
								disabled: !canUpdate || status === "failed",
								className: "inline-flex h-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-bold text-red-900 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50",
								children: "Mark Failed"
							})
						]
					})]
				})
			] })
		]
	});
}
function AlertBox({ tone, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-start gap-3 rounded-2xl p-4 text-sm font-medium ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-emerald-50 text-emerald-700 ring-emerald-100"}`,
		role: tone === "error" ? "alert" : "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 shrink-0",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function SummaryItem({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-wide text-slate-500",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-all text-sm font-black text-slate-950",
					children: value
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-emerald-700",
				children: icon
			})]
		})
	});
}
function DetailGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
		className: "mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-700",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-4 w-4 text-emerald-700" }), title]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children
	})] });
}
function InfoItem({ label, value, wide = false }) {
	const { copy } = useAdminMemberDetailCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 ${wide ? "md:col-span-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words text-sm font-semibold text-slate-950",
			children: value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-slate-400",
				children: copy.notProvided
			})
		})]
	});
}
function StatusBadge({ status }) {
	const { copy } = useAdminMemberDetailCopy();
	const item = {
		pending: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hourglass, { className: "h-3.5 w-3.5" }),
			className: "bg-amber-50 text-amber-700 ring-amber-200",
			text: copy.status.pending
		},
		approved: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }),
			className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
			text: copy.status.approved
		},
		rejected: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }),
			className: "bg-red-50 text-red-700 ring-red-200",
			text: copy.status.rejected
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${item.className}`,
		children: [item.icon, item.text]
	});
}
async function ensureAdminAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		redirectTo: "/login"
	};
	const { data: roles, error: roleError } = await supabase.from("user_roles").select("id, role").eq("user_id", user.id).in("role", MEMBERSHIP_REVIEW_ROLES).limit(1);
	if (roleError || !roles?.length) return {
		ok: false,
		redirectTo: "/dashboard"
	};
	return { ok: true };
}
async function getAccessToken() {
	const { data: { session }, error } = await supabase.auth.getSession();
	if (error || !session?.access_token) throw new Error("Unable to get access token.");
	return session.access_token;
}
async function createSignedPhotoUrl(photoPath) {
	if (!photoPath) return null;
	const { data, error } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).createSignedUrl(photoPath, SIGNED_URL_TTL_SECONDS);
	if (error || !data?.signedUrl) return null;
	return data.signedUrl;
}
async function createSignedReceiptUrl(receiptPath) {
	if (!receiptPath) return null;
	const { data, error } = await supabase.storage.from(MEMBERSHIP_RECEIPT_BUCKET).createSignedUrl(receiptPath, RECEIPT_SIGNED_URL_TTL_SECONDS);
	if (error || !data?.signedUrl) return null;
	return data.signedUrl;
}
async function fetchMembershipPaymentByMemberId(memberId) {
	const { data, error } = await supabase.from("membership_payments").select("*").eq("member_id", memberId).order("created_at", { ascending: false }).limit(1).maybeSingle().returns();
	if (error) throw error;
	return data;
}
async function fetchMembershipPaymentWithReceiptUrl(memberId) {
	try {
		const payment = await fetchMembershipPaymentByMemberId(memberId);
		const receiptSignedUrl = await createSignedReceiptUrl(payment?.receipt_path);
		return {
			payment,
			receiptSignedUrl,
			errorMessage: payment?.receipt_path && !receiptSignedUrl ? "Receipt file not available." : void 0
		};
	} catch (err) {
		return {
			payment: null,
			receiptSignedUrl: null,
			errorMessage: err instanceof Error ? `Payment record could not be loaded: ${err.message}` : "Payment record could not be loaded."
		};
	}
}
async function fetchOfficeBearerAssignments(memberId) {
	const { data, error } = await supabase.from("organization_committee_members").select([
		"id",
		"committee_id",
		"member_id",
		"designation_id",
		"designation_title",
		"status",
		"sort_order",
		"tenure_start",
		"tenure_end",
		"appointment_notes",
		"member_no_snapshot",
		"full_name_snapshot",
		"father_name_snapshot",
		"district_snapshot",
		"taluka_snapshot",
		"created_at",
		"updated_at"
	].join(", ")).eq("member_id", memberId).order("status", { ascending: true }).order("sort_order", { ascending: true }).order("created_at", { ascending: false });
	if (error) throw error;
	const assignments = data ?? [];
	const committeeIds = Array.from(new Set(assignments.map((item) => item.committee_id)));
	if (!committeeIds.length) return [];
	const { data: committeeData, error: committeeError } = await supabase.from("organization_committees").select([
		"id",
		"committee_type",
		"name",
		"division",
		"district",
		"taluka",
		"tenure_start",
		"tenure_end",
		"status",
		"public_display",
		"notes",
		"created_by",
		"updated_by",
		"created_at",
		"updated_at"
	].join(", ")).in("id", committeeIds);
	if (committeeError) throw committeeError;
	const committeeMap = new Map((committeeData ?? []).map((committee) => [committee.id, committee]));
	return assignments.map((assignment) => ({
		...assignment,
		committee: committeeMap.get(assignment.committee_id) ?? null
	}));
}
function memberToCommitteeSearchResult(member) {
	return {
		id: member.id,
		full_name: member.full_name,
		father_name: member.father_name,
		member_no: member.member_no,
		district: member.district,
		taluka: member.taluka,
		mobile: member.mobile,
		status: member.status
	};
}
async function fetchMemberById(id) {
	const { data, error } = await supabase.from("members").select(MEMBER_SELECT_COLUMNS).eq("id", id).maybeSingle();
	if (error) throw error;
	return data;
}
function memberToAdminEditForm(member) {
	return {
		fullName: member.full_name,
		fatherName: member.father_name,
		cnic: member.cnic,
		mobile: member.mobile,
		district: member.district,
		taluka: member.taluka ?? "",
		address: member.address ?? "",
		dateOfBirth: member.date_of_birth ?? "",
		gender: member.gender ?? "",
		education: member.education ?? "",
		bloodGroup: member.blood_group ?? "",
		profession: member.profession ?? "",
		casteBranch: member.caste_branch ?? "",
		emergencyContactName: member.emergency_contact_name ?? "",
		emergencyContactRelation: member.emergency_contact_relation ?? "",
		emergencyContactMobile: member.emergency_contact_mobile ?? "",
		declarationAccepted: member.declaration_accepted
	};
}
function validateAdminEditForm(form) {
	const errors = {};
	const normalizedMobile = normalizeMobile(form.mobile);
	const normalizedEmergencyMobile = normalizeMobile(form.emergencyContactMobile);
	if (!form.fullName.trim() || form.fullName.trim().length < 3) errors.fullName = "Full name must be at least 3 characters.";
	if (!form.fatherName.trim() || form.fatherName.trim().length < 3) errors.fatherName = "Father name must be at least 3 characters.";
	if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(form.cnic.trim())) errors.cnic = "CNIC must use 12345-1234567-1 format.";
	if (!isPakistaniMobile(normalizedMobile)) errors.mobile = "Enter a valid Pakistani mobile number.";
	if (!form.district.trim()) errors.district = "District is required.";
	if (!form.taluka.trim()) errors.taluka = "Taluka is required.";
	if (!form.address.trim() || form.address.trim().length < 10) errors.address = "Address must be at least 10 characters.";
	if (form.dateOfBirth && form.dateOfBirth > todayDate()) errors.dateOfBirth = "Date of birth cannot be in the future.";
	if (normalizedEmergencyMobile && !isPakistaniMobile(normalizedEmergencyMobile)) errors.emergencyContactMobile = "Enter a valid emergency mobile number.";
	if (!form.declarationAccepted) errors.declarationAccepted = "Declaration must be accepted before approval.";
	return errors;
}
function getStatusLabel(status, copy) {
	switch (status) {
		case "approved": return copy?.status.approved ?? "Approved";
		case "rejected": return copy?.status.rejected ?? "Rejected";
		default: return copy?.status.pending ?? "Pending";
	}
}
function formatDate(value, withTime = false) {
	if (!value) return null;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return null;
	return withTime ? date.toLocaleString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	}) : date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function formatCnic(value) {
	if (!value) return "N/A";
	const digits = value.replace(/\D/g, "");
	if (digits.length === 13) return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
	return value;
}
function formatMobile(value) {
	if (!value) return "N/A";
	const digits = value.replace(/\D/g, "");
	if (digits.startsWith("92") && digits.length === 12) return `+${digits}`;
	if (digits.startsWith("0") && digits.length === 11) return digits;
	if (digits.startsWith("3") && digits.length === 10) return `0${digits}`;
	return value;
}
function formatPaymentMethod(payment) {
	return prettifyPaymentValue(payment.payment_method);
}
function formatGatewayProvider(payment) {
	return prettifyPaymentValue(payment.gateway_provider || payment.payment_method);
}
function prettifyPaymentValue(value) {
	if (!value) return null;
	return value.split("_").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
//#endregion
export { AdminMemberDetailPage as component };
