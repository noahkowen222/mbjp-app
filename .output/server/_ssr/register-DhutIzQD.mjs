import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { a as isPakistaniMobile, c as normalizeMobile, i as formatMobileInput, l as optionalText, n as formatCnicInput, u as todayDate } from "./formatters-BY4KepB2.mjs";
import { a as MEMBERSHIP_RECEIPT_BUCKET, i as MEMBERSHIP_RECEIPT_ALLOWED_TYPES, o as createPendingMembershipPaymentPayload, r as MEMBERSHIP_PAYMENT_QR_IMAGE_PATH, s as formatMembershipMoney, t as MEMBERSHIP_MANUAL_PAYMENT_DETAILS } from "./membership-fee-MCDC6IES.mjs";
import "./router-b_4MKZ_c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DhutIzQD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAX_PHOTO_SIZE_BYTES = 2 * 1024 * 1024;
var ALLOWED_PHOTO_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp"
];
var REGISTER_DRAFT_VERSION = 1;
var sindhDistricts = [
	"Badin",
	"Dadu",
	"Ghotki",
	"Hyderabad",
	"Jacobabad",
	"Jamshoro",
	"Karachi Central",
	"Karachi East",
	"Karachi South",
	"Karachi West",
	"Kashmore",
	"Keamari",
	"Khairpur",
	"Korangi",
	"Larkana",
	"Malir",
	"Matiari",
	"Mirpur Khas",
	"Naushahro Firoze",
	"Qambar Shahdadkot",
	"Sanghar",
	"Shaheed Benazirabad",
	"Shikarpur",
	"Sujawal",
	"Sukkur",
	"Tando Allahyar",
	"Tando Muhammad Khan",
	"Tharparkar",
	"Thatta",
	"Umerkot"
];
var talukasByDistrict = {
	Badin: [
		"Badin",
		"Matli",
		"Shaheed Fazil Rahu (Golarchi)",
		"Talhar",
		"Tando Bago"
	],
	Sujawal: [
		"Jati",
		"Kharo Chan",
		"Mirpur Bathoro",
		"Shah Bunder",
		"Sujawal"
	],
	Thatta: [
		"Ghorabari",
		"Keti Bunder",
		"Mirpur Sakro",
		"Thatta"
	],
	Dadu: [
		"Dadu",
		"Johi",
		"Khairpur Nathan Shah",
		"Mehar"
	],
	Hyderabad: [
		"Hyderabad City",
		"Hyderabad Rural",
		"Latifabad",
		"Qasimabad"
	],
	Jamshoro: [
		"Kotri",
		"Manjhand",
		"Sehwan Sharif",
		"Thano Bula Khan"
	],
	Matiari: [
		"Hala",
		"Matiari",
		"Saeedabad"
	],
	"Tando Allahyar": [
		"Chamber",
		"Jhando Mari",
		"Tando Allahyar"
	],
	"Tando Muhammad Khan": [
		"Bulri Shah Karim",
		"Tando Ghulam Hyder",
		"Tando Muhammad Khan"
	],
	"Karachi Central": [
		"Gulberg",
		"Liaquatabad",
		"Nazimabad",
		"New Karachi",
		"North Nazimabad"
	],
	"Karachi East": [
		"Ferozabad",
		"Gulshan-e-Iqbal",
		"Gulzar-e-Hijri",
		"Jamshed Quarters"
	],
	"Karachi South": [
		"Aram Bagh",
		"Civil Line",
		"Garden",
		"Lyari",
		"Saddar"
	],
	"Karachi West": [
		"Mango Pir",
		"Mominabad",
		"Orangi"
	],
	Keamari: [
		"Baldia",
		"Harbour",
		"Mauripur",
		"SITE"
	],
	Korangi: [
		"Korangi",
		"Landhi",
		"Model Colony",
		"Shah Faisal"
	],
	Malir: [
		"Airport",
		"Bin Qasim",
		"Gadap",
		"Ibrahim Hyderi",
		"Murad Memon",
		"Shah Murad"
	],
	Jacobabad: [
		"Garhi Khairo",
		"Jacobabad",
		"Thul"
	],
	Kashmore: [
		"Kandhkot",
		"Kashmore",
		"Tangwani"
	],
	Larkana: [
		"Bakrani",
		"Dokri",
		"Larkana",
		"Ratodero"
	],
	"Qambar Shahdadkot": [
		"Mirokhan",
		"Nasirabad",
		"Qambar",
		"Qubo Saeed Khan",
		"Shahdadkot",
		"Sijawal Junejo",
		"Warah"
	],
	Shikarpur: [
		"Garhi Yasin",
		"Khanpur",
		"Lakhi Ghulam Shah",
		"Shikarpur"
	],
	"Mirpur Khas": [
		"Digri",
		"Hussain Bux Mari",
		"Jhuddo",
		"Kot Ghulam Muhammad",
		"Mirpur Khas",
		"Shujabad",
		"Sindhri"
	],
	Tharparkar: [
		"Chachro",
		"Dahli",
		"Diplo",
		"Islamkot",
		"Kaloi",
		"Mithi",
		"Nagarparkar"
	],
	Umerkot: [
		"Kunri",
		"Pithoro",
		"Samaro",
		"Umerkot"
	],
	"Naushahro Firoze": [
		"Bhiria",
		"Kandiaro",
		"Mehrabpur",
		"Moro",
		"Naushahro Firoze"
	],
	Sanghar: [
		"Jam Nawaz Ali",
		"Khipro",
		"Sanghar",
		"Shahdadpur",
		"Sinjhoro",
		"Tando Adam"
	],
	"Shaheed Benazirabad": [
		"Daur",
		"Nawabshah",
		"Qazi Ahmed",
		"Sakrand"
	],
	Ghotki: [
		"Daharki",
		"Ghotki",
		"Khangarh",
		"Mirpur Mathelo",
		"Ubauro"
	],
	Khairpur: [
		"Faiz Ganj",
		"Gambat",
		"Khairpur",
		"Kingri",
		"Kot Diji",
		"Mirwah",
		"Nara",
		"Sobhodero"
	],
	Sukkur: [
		"New Sukkur",
		"Pano Aqil",
		"Rohri",
		"Salehpat",
		"Sukkur City"
	]
};
var genderOptions = [
	"Male",
	"Female",
	"Other",
	"Prefer not to say"
];
var bloodGroupOptions = [
	"A+",
	"A-",
	"B+",
	"B-",
	"AB+",
	"AB-",
	"O+",
	"O-"
];
var initialForm = {
	fullName: "",
	fatherName: "",
	cnic: "",
	mobile: "",
	district: "",
	taluka: "",
	profession: "",
	casteBranch: "",
	address: "",
	dateOfBirth: "",
	gender: "",
	education: "",
	bloodGroup: "",
	emergencyContactName: "",
	emergencyContactRelation: "",
	emergencyContactMobile: "",
	declarationAccepted: false
};
var formSteps = [
	{
		titleKey: "register.step.identity.title",
		shortTitleKey: "register.step.identity.short",
		descriptionKey: "register.step.identity.desc",
		fields: [
			"fullName",
			"fatherName",
			"cnic",
			"mobile"
		]
	},
	{
		titleKey: "register.step.location.title",
		shortTitleKey: "register.step.location.short",
		descriptionKey: "register.step.location.desc",
		fields: [
			"district",
			"taluka",
			"address"
		]
	},
	{
		titleKey: "register.step.profile.title",
		shortTitleKey: "register.step.profile.short",
		descriptionKey: "register.step.profile.desc",
		fields: [
			"profession",
			"casteBranch",
			"dateOfBirth",
			"gender",
			"education",
			"bloodGroup"
		]
	},
	{
		titleKey: "register.step.emergency.title",
		shortTitleKey: "register.step.emergency.short",
		descriptionKey: "register.step.emergency.desc",
		fields: [
			"emergencyContactName",
			"emergencyContactRelation",
			"emergencyContactMobile"
		]
	},
	{
		titleKey: "register.step.submit.title",
		shortTitleKey: "register.step.submit.short",
		descriptionKey: "register.step.submit.desc",
		fields: [
			"photo",
			"paymentReceipt",
			"declarationAccepted"
		]
	}
];
function RegisterPage() {
	const navigate = useNavigate();
	const { t, direction } = useI18n();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [userId, setUserId] = (0, import_react.useState)("");
	const [existingMember, setExistingMember] = (0, import_react.useState)(null);
	const [existingMembershipPayment, setExistingMembershipPayment] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
	const [photo, setPhoto] = (0, import_react.useState)(null);
	const [photoPreview, setPhotoPreview] = (0, import_react.useState)(null);
	const [existingPhotoSignedUrl, setExistingPhotoSignedUrl] = (0, import_react.useState)(null);
	const [paymentReceipt, setPaymentReceipt] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const [draftSavedAt, setDraftSavedAt] = (0, import_react.useState)("");
	const locked = existingMember?.status === "approved";
	const isPendingEdit = existingMember?.status === "pending";
	const isRejected = existingMember?.status === "rejected";
	const paymentReceiptLocked = existingMembershipPayment?.status === "paid" || existingMembershipPayment?.status === "waived";
	const isLastStep = currentStep === formSteps.length - 1;
	const localizedSteps = (0, import_react.useMemo)(() => formSteps.map((step) => ({
		...step,
		title: t(step.titleKey),
		shortTitle: t(step.shortTitleKey),
		description: t(step.descriptionKey)
	})), [t]);
	const currentStepData = localizedSteps[currentStep];
	const progressPercent = Math.round((currentStep + 1) / formSteps.length * 100);
	const talukaOptions = (0, import_react.useMemo)(() => {
		return form.district ? talukasByDistrict[form.district] || [] : [];
	}, [form.district]);
	const photoSrc = photoPreview || existingPhotoSignedUrl;
	(0, import_react.useEffect)(() => {
		loadExisting();
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (photoPreview?.startsWith("blob:")) URL.revokeObjectURL(photoPreview);
		};
	}, [photoPreview]);
	async function loadExisting() {
		setLoading(true);
		setError("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			navigate({ to: "/login" });
			return;
		}
		setUserId(user.id);
		const { data: rawData, error: memberError } = await supabase.from("members").select([
			"id",
			"status",
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
			"photo_url"
		].join(", ")).eq("user_id", user.id).maybeSingle();
		if (memberError) {
			setError(memberError.message);
			setLoading(false);
			return;
		}
		const data = rawData;
		if (data) {
			setExistingMember(data);
			setForm(memberToForm(data));
			const { data: paymentData } = await supabase.from("membership_payments").select("*").eq("member_id", data.id).maybeSingle().returns();
			setExistingMembershipPayment(paymentData ?? null);
			if (data.photo_url) {
				const { data: signed } = await supabase.storage.from("member-photos").createSignedUrl(data.photo_url, 3600);
				setExistingPhotoSignedUrl(signed?.signedUrl ?? null);
			}
		} else {
			const draft = readDraft(user.id);
			if (draft) {
				setForm({
					...initialForm,
					...draft.form
				});
				setDraftSavedAt(draft.savedAt);
			}
		}
		setLoading(false);
	}
	function updateField(field, value) {
		setForm((current) => ({
			...current,
			[field]: value
		}));
		if (fieldErrors[field]) setFieldErrors((current) => {
			const next = { ...current };
			delete next[field];
			return next;
		});
		setError("");
		setSuccess("");
	}
	function handleDistrictChange(value) {
		setForm((current) => ({
			...current,
			district: value,
			taluka: ""
		}));
		setFieldErrors((current) => {
			const next = { ...current };
			delete next.district;
			delete next.taluka;
			return next;
		});
		setError("");
		setSuccess("");
	}
	function handlePhotoChange(event) {
		setError("");
		setSuccess("");
		const file = event.target.files?.[0] ?? null;
		setPhoto(null);
		if (photoPreview?.startsWith("blob:")) {
			URL.revokeObjectURL(photoPreview);
			setPhotoPreview(null);
		}
		if (!file) return;
		if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
			setFieldErrors((current) => ({
				...current,
				photo: t("register.photo.hint")
			}));
			event.target.value = "";
			return;
		}
		if (file.size > MAX_PHOTO_SIZE_BYTES) {
			setFieldErrors((current) => ({
				...current,
				photo: t("register.photo.hint")
			}));
			event.target.value = "";
			return;
		}
		setPhoto(file);
		setPhotoPreview(URL.createObjectURL(file));
		setFieldErrors((current) => {
			const next = { ...current };
			delete next.photo;
			return next;
		});
	}
	function handlePaymentReceiptChange(event) {
		setError("");
		setSuccess("");
		if (paymentReceiptLocked) {
			setError(t("register.payment.receiptLocked"));
			event.target.value = "";
			return;
		}
		const file = event.target.files?.[0] ?? null;
		setPaymentReceipt(null);
		if (!file) return;
		if (!MEMBERSHIP_RECEIPT_ALLOWED_TYPES.includes(file.type)) {
			setFieldErrors((current) => ({
				...current,
				paymentReceipt: t("register.payment.receiptHint").replace("{size}", "5MB")
			}));
			event.target.value = "";
			return;
		}
		if (file.size > 5242880) {
			setFieldErrors((current) => ({
				...current,
				paymentReceipt: t("register.payment.receiptHint").replace("{size}", "5MB")
			}));
			event.target.value = "";
			return;
		}
		setPaymentReceipt(file);
		setFieldErrors((current) => {
			const next = { ...current };
			delete next.paymentReceipt;
			return next;
		});
	}
	function validateStep(stepIndex) {
		const step = formSteps[stepIndex];
		const errors = validateForm();
		const stepErrors = {};
		step.fields.forEach((field) => {
			if (errors[field]) stepErrors[field] = errors[field];
		});
		setFieldErrors((current) => ({
			...current,
			...stepErrors
		}));
		return stepErrors;
	}
	function handleNextStep() {
		const stepErrors = validateStep(currentStep);
		if (Object.keys(stepErrors).length > 0) {
			setError(t("register.error.fixHighlightedContinue"));
			focusFirstInvalidField();
			return;
		}
		setError("");
		setSuccess("");
		setCurrentStep((step) => Math.min(step + 1, formSteps.length - 1));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function handlePreviousStep() {
		setError("");
		setSuccess("");
		setCurrentStep((step) => Math.max(step - 1, 0));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function handleStepClick(targetStep) {
		if (targetStep <= currentStep) {
			setCurrentStep(targetStep);
			setError("");
			setSuccess("");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		const stepErrors = validateStep(currentStep);
		if (Object.keys(stepErrors).length > 0) {
			setError(t("register.error.completeCurrentStep"));
			focusFirstInvalidField();
			return;
		}
		setCurrentStep(targetStep);
		setError("");
		setSuccess("");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function saveDraft() {
		if (!userId || locked) return;
		try {
			const savedAt = (/* @__PURE__ */ new Date()).toISOString();
			localStorage.setItem(draftKey(userId), JSON.stringify({
				version: REGISTER_DRAFT_VERSION,
				savedAt,
				form
			}));
			setDraftSavedAt(savedAt);
			setSuccess(t("register.draftSaved"));
			setError("");
		} catch {
			setError(t("register.draftSaveFailed"));
		}
	}
	function clearDraft() {
		if (!userId) return;
		localStorage.removeItem(draftKey(userId));
		setDraftSavedAt("");
		setSuccess(t("register.draftCleared"));
		setError("");
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setSuccess("");
		if (!userId) {
			setError(t("register.error.loginRequired"));
			return;
		}
		if (existingMember?.status === "approved") {
			setError(t("register.error.approvedLocked"));
			return;
		}
		const allErrors = validateForm();
		setFieldErrors(allErrors);
		if (Object.keys(allErrors).length > 0) {
			const firstField = Object.keys(allErrors)[0];
			const targetStep = formSteps.findIndex((step) => firstField && step.fields.includes(firstField));
			if (targetStep >= 0) setCurrentStep(targetStep);
			setError(t("register.error.fixHighlightedSubmit"));
			focusFirstInvalidField();
			return;
		}
		setSubmitting(true);
		let photoPath = existingMember?.photo_url ?? "";
		if (photo) {
			const extension = photo.name.split(".").pop()?.toLowerCase() || "jpg";
			photoPath = `${userId}/photo-${Date.now()}.${extension}`;
			const { error: uploadError } = await supabase.storage.from("member-photos").upload(photoPath, photo, {
				upsert: true,
				contentType: photo.type || "image/jpeg"
			});
			if (uploadError) {
				setError(uploadError.message);
				setSubmitting(false);
				return;
			}
		}
		let receiptPath = existingMembershipPayment?.receipt_path ?? null;
		let receiptFileName = existingMembershipPayment?.receipt_file_name ?? null;
		let receiptMimeType = existingMembershipPayment?.receipt_mime_type ?? null;
		let receiptSizeBytes = existingMembershipPayment?.receipt_size_bytes ?? null;
		let receiptUploadedAt = existingMembershipPayment?.receipt_uploaded_at ?? null;
		if (paymentReceipt && paymentReceiptLocked) {
			setError(t("register.payment.receiptLocked"));
			setSubmitting(false);
			return;
		}
		if (paymentReceipt) {
			const extension = paymentReceipt.name.split(".").pop()?.toLowerCase() || "jpg";
			receiptPath = `${userId}/receipt-${Date.now()}.${extension}`;
			receiptFileName = paymentReceipt.name;
			receiptMimeType = paymentReceipt.type || "application/octet-stream";
			receiptSizeBytes = paymentReceipt.size;
			receiptUploadedAt = (/* @__PURE__ */ new Date()).toISOString();
			const { error: receiptUploadError } = await supabase.storage.from(MEMBERSHIP_RECEIPT_BUCKET).upload(receiptPath, paymentReceipt, {
				upsert: true,
				contentType: receiptMimeType
			});
			if (receiptUploadError) {
				setError(receiptUploadError.message);
				setSubmitting(false);
				return;
			}
		}
		const normalizedMobile = normalizeMobile(form.mobile);
		const normalizedEmergencyMobile = normalizeMobile(form.emergencyContactMobile);
		const payload = {
			full_name: form.fullName.trim(),
			father_name: form.fatherName.trim(),
			cnic: form.cnic.trim(),
			mobile: normalizedMobile,
			district: form.district,
			taluka: form.taluka,
			profession: optionalText(form.profession),
			caste_branch: optionalText(form.casteBranch),
			address: form.address.trim(),
			date_of_birth: form.dateOfBirth || null,
			gender: optionalText(form.gender),
			education: optionalText(form.education),
			blood_group: optionalText(form.bloodGroup),
			emergency_contact_name: optionalText(form.emergencyContactName),
			emergency_contact_relation: optionalText(form.emergencyContactRelation),
			emergency_contact_mobile: normalizedEmergencyMobile || null,
			declaration_accepted: form.declarationAccepted,
			photo_url: photoPath
		};
		let savedMemberId = existingMember?.id ?? "";
		if (existingMember) {
			const updatePayload = existingMember.status === "rejected" ? {
				...payload,
				status: "pending",
				rejection_reason: null
			} : payload;
			const { error: updateError } = await supabase.from("members").update(updatePayload).eq("id", existingMember.id);
			if (updateError) {
				setError(updateError.message);
				setSubmitting(false);
				return;
			}
		} else {
			const { data: insertedMember, error: insertError } = await supabase.from("members").insert({
				user_id: userId,
				...payload,
				status: "pending"
			}).select("id, user_id").single();
			if (insertError) {
				setError(insertError.message);
				setSubmitting(false);
				return;
			}
			savedMemberId = insertedMember.id;
		}
		if (savedMemberId) {
			if (!(existingMembershipPayment?.status === "paid" || existingMembershipPayment?.status === "waived")) {
				const paymentPayload = createPendingMembershipPaymentPayload(savedMemberId, userId, {
					receipt_path: receiptPath,
					receipt_file_name: receiptFileName,
					receipt_mime_type: receiptMimeType,
					receipt_size_bytes: receiptSizeBytes,
					receipt_uploaded_at: receiptUploadedAt
				});
				const { error: paymentError } = await supabase.from("membership_payments").upsert(paymentPayload, { onConflict: "member_id" });
				if (paymentError) {
					setError(paymentError.message);
					setSubmitting(false);
					return;
				}
			}
		}
		localStorage.removeItem(draftKey(userId));
		setDraftSavedAt("");
		setSubmitting(false);
		setSuccess(existingMember ? t("register.success.updated") : t("register.success.submitted"));
		window.setTimeout(() => {
			navigate({ to: "/dashboard" });
		}, 650);
	}
	function validateForm() {
		const errors = {};
		const normalizedMobile = normalizeMobile(form.mobile);
		const normalizedEmergencyMobile = normalizeMobile(form.emergencyContactMobile);
		if (!form.fullName.trim()) errors.fullName = t("register.error.fullNameRequired");
		else if (form.fullName.trim().length < 3) errors.fullName = t("register.error.fullNameShort");
		if (!form.fatherName.trim()) errors.fatherName = t("register.error.fatherRequired");
		else if (form.fatherName.trim().length < 3) errors.fatherName = t("register.error.fullNameShort");
		if (!/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(form.cnic.trim())) errors.cnic = t("register.error.cnicInvalid");
		if (!isPakistaniMobile(normalizedMobile)) errors.mobile = t("register.error.mobileInvalid");
		if (!form.district) errors.district = t("register.error.districtRequired");
		if (!form.taluka) errors.taluka = t("register.error.talukaRequired");
		if (!form.address.trim()) errors.address = t("register.error.addressRequired");
		else if (form.address.trim().length < 10) errors.address = t("register.error.addressRequired");
		const requiredMessage = "This field is required.";
		if (!form.profession.trim()) errors.profession = requiredMessage;
		if (!form.casteBranch.trim()) errors.casteBranch = requiredMessage;
		if (!form.dateOfBirth) errors.dateOfBirth = requiredMessage;
		else if (form.dateOfBirth > todayDate()) errors.dateOfBirth = t("register.error.dobFuture");
		if (!form.gender) errors.gender = requiredMessage;
		if (!form.education.trim()) errors.education = requiredMessage;
		if (!form.bloodGroup) errors.bloodGroup = requiredMessage;
		if (!form.emergencyContactName.trim()) errors.emergencyContactName = requiredMessage;
		if (!form.emergencyContactRelation.trim()) errors.emergencyContactRelation = requiredMessage;
		if (!normalizedEmergencyMobile) errors.emergencyContactMobile = requiredMessage;
		else if (!isPakistaniMobile(normalizedEmergencyMobile)) errors.emergencyContactMobile = t("register.error.emergencyMobileInvalid");
		if (!photo && !existingMember?.photo_url) errors.photo = t("register.error.photoRequired");
		if (!paymentReceiptLocked && !paymentReceipt && !existingMembershipPayment?.receipt_path) errors.paymentReceipt = t("register.error.receiptRequired");
		if (!form.declarationAccepted) errors.declarationAccepted = t("register.error.declarationRequired");
		return errors;
	}
	function getDescriptionIds(field, hasHint = false) {
		const ids = [];
		if (hasHint) ids.push(`${field}-hint`);
		if (fieldErrors[field]) ids.push(`${field}-error`);
		return ids.length ? ids.join(" ") : void 0;
	}
	function renderCurrentStep() {
		if (currentStep === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
			title: currentStepData.title,
			description: currentStepData.description,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reg-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "fullName",
						label: t("register.field.fullName"),
						required: true,
						error: fieldErrors.fullName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fullName",
							value: form.fullName,
							onChange: (event) => updateField("fullName", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: "Enter full name",
							autoComplete: "name",
							"aria-invalid": Boolean(fieldErrors.fullName),
							"aria-describedby": getDescriptionIds("fullName")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "fatherName",
						label: t("register.field.fatherName"),
						required: true,
						error: fieldErrors.fatherName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fatherName",
							value: form.fatherName,
							onChange: (event) => updateField("fatherName", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: "Enter father's name",
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.fatherName),
							"aria-describedby": getDescriptionIds("fatherName")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "cnic",
						label: t("register.field.cnic"),
						required: true,
						hint: t("register.hint.cnic"),
						error: fieldErrors.cnic,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "cnic",
							value: form.cnic,
							onChange: (event) => updateField("cnic", formatCnicInput(event.target.value)),
							disabled: locked,
							className: "reg-input",
							placeholder: "12345-1234567-1",
							inputMode: "numeric",
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.cnic),
							"aria-describedby": getDescriptionIds("cnic", true)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "mobile",
						label: t("register.field.mobile"),
						required: true,
						hint: t("register.hint.mobile"),
						error: fieldErrors.mobile,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "mobile",
							value: form.mobile,
							onChange: (event) => updateField("mobile", formatMobileInput(event.target.value)),
							disabled: locked,
							className: "reg-input",
							placeholder: "03001234567",
							inputMode: "tel",
							autoComplete: "tel",
							"aria-invalid": Boolean(fieldErrors.mobile),
							"aria-describedby": getDescriptionIds("mobile", true)
						})
					})
				]
			})
		});
		if (currentStep === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
			title: currentStepData.title,
			description: currentStepData.description,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reg-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "district",
						label: t("register.field.district"),
						required: true,
						error: fieldErrors.district,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "district",
							value: form.district,
							onChange: (event) => handleDistrictChange(event.target.value),
							disabled: locked,
							className: "reg-input reg-select",
							"aria-invalid": Boolean(fieldErrors.district),
							"aria-describedby": getDescriptionIds("district"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select district"
							}), sindhDistricts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "taluka",
						label: t("register.field.taluka"),
						required: true,
						error: fieldErrors.taluka,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "taluka",
							value: form.taluka,
							onChange: (event) => updateField("taluka", event.target.value),
							disabled: locked || !form.district,
							className: "reg-input reg-select",
							"aria-invalid": Boolean(fieldErrors.taluka),
							"aria-describedby": getDescriptionIds("taluka"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: form.district ? "Select taluka" : "Select district first"
							}), talukaOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "address",
						label: t("register.field.address"),
						required: true,
						error: fieldErrors.address,
						className: "span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "address",
							value: form.address,
							onChange: (event) => updateField("address", event.target.value),
							disabled: locked,
							className: "reg-input reg-textarea",
							placeholder: "House no., street, area, taluka, district",
							autoComplete: "street-address",
							"aria-invalid": Boolean(fieldErrors.address),
							"aria-describedby": getDescriptionIds("address")
						})
					})
				]
			})
		});
		if (currentStep === 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
			title: currentStepData.title,
			description: currentStepData.description,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reg-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "profession",
						label: t("register.field.profession"),
						required: true,
						error: fieldErrors.profession,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "profession",
							value: form.profession,
							onChange: (event) => updateField("profession", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: t("register.placeholder.profession"),
							autoComplete: "organization-title",
							"aria-invalid": Boolean(fieldErrors.profession),
							"aria-describedby": getDescriptionIds("profession")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "casteBranch",
						label: t("register.field.casteBranch"),
						required: true,
						error: fieldErrors.casteBranch,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "casteBranch",
							value: form.casteBranch,
							onChange: (event) => updateField("casteBranch", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: "Enter caste branch",
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.casteBranch),
							"aria-describedby": getDescriptionIds("casteBranch")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "dateOfBirth",
						label: t("register.field.dateOfBirth"),
						required: true,
						error: fieldErrors.dateOfBirth,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "dateOfBirth",
							type: "date",
							value: form.dateOfBirth,
							onChange: (event) => updateField("dateOfBirth", event.target.value),
							disabled: locked,
							className: "reg-input",
							max: todayDate(),
							"aria-invalid": Boolean(fieldErrors.dateOfBirth),
							"aria-describedby": getDescriptionIds("dateOfBirth")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gender",
						label: t("register.field.gender"),
						required: true,
						error: fieldErrors.gender,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "gender",
							value: form.gender,
							onChange: (event) => updateField("gender", event.target.value),
							disabled: locked,
							className: "reg-input reg-select",
							"aria-invalid": Boolean(fieldErrors.gender),
							"aria-describedby": getDescriptionIds("gender"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select gender"
							}), genderOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "education",
						label: t("register.field.education"),
						required: true,
						error: fieldErrors.education,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "education",
							value: form.education,
							onChange: (event) => updateField("education", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: t("register.placeholder.education"),
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.education),
							"aria-describedby": getDescriptionIds("education")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "bloodGroup",
						label: t("register.field.bloodGroup"),
						required: true,
						error: fieldErrors.bloodGroup,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "bloodGroup",
							value: form.bloodGroup,
							onChange: (event) => updateField("bloodGroup", event.target.value),
							disabled: locked,
							className: "reg-input reg-select",
							"aria-invalid": Boolean(fieldErrors.bloodGroup),
							"aria-describedby": getDescriptionIds("bloodGroup"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select blood group"
							}), bloodGroupOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))]
						})
					})
				]
			})
		});
		if (currentStep === 3) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
			title: currentStepData.title,
			description: currentStepData.description,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reg-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "emergencyContactName",
						label: t("register.field.contactName"),
						required: true,
						error: fieldErrors.emergencyContactName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "emergencyContactName",
							value: form.emergencyContactName,
							onChange: (event) => updateField("emergencyContactName", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: "Full name",
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.emergencyContactName),
							"aria-describedby": getDescriptionIds("emergencyContactName")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "emergencyContactRelation",
						label: t("register.field.relation"),
						required: true,
						error: fieldErrors.emergencyContactRelation,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "emergencyContactRelation",
							value: form.emergencyContactRelation,
							onChange: (event) => updateField("emergencyContactRelation", event.target.value),
							disabled: locked,
							className: "reg-input",
							placeholder: t("register.placeholder.relation"),
							autoComplete: "off",
							"aria-invalid": Boolean(fieldErrors.emergencyContactRelation),
							"aria-describedby": getDescriptionIds("emergencyContactRelation")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "emergencyContactMobile",
						label: t("register.field.contactMobile"),
						required: true,
						hint: t("register.hint.emergencyMobile"),
						error: fieldErrors.emergencyContactMobile,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "emergencyContactMobile",
							value: form.emergencyContactMobile,
							onChange: (event) => updateField("emergencyContactMobile", formatMobileInput(event.target.value)),
							disabled: locked,
							className: "reg-input",
							placeholder: "03001234567",
							inputMode: "tel",
							autoComplete: "tel",
							"aria-invalid": Boolean(fieldErrors.emergencyContactMobile),
							"aria-describedby": getDescriptionIds("emergencyContactMobile", true)
						})
					})
				]
			})
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormSection, {
			title: currentStepData.title,
			description: currentStepData.description,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-photo-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reg-photo-preview",
						children: photoSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photoSrc,
							alt: t("register.photo.alt"),
							className: "reg-photo-img"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reg-photo-placeholder",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "32",
								height: "32",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "8",
									r: "4"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("register.photo.none") })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reg-photo-upload",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `reg-upload-btn ${locked ? "is-disabled" : "cursor-pointer"}`,
								htmlFor: "photo",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "17 8 12 3 7 8" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "12",
											y1: "3",
											x2: "12",
											y2: "15"
										})
									]
								}), photo ? photo.name : t("register.photo.choose")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "photo",
								type: "file",
								accept: "image/png,image/jpeg,image/webp",
								onChange: handlePhotoChange,
								disabled: locked,
								className: "reg-sr-only",
								"aria-invalid": Boolean(fieldErrors.photo),
								"aria-describedby": getDescriptionIds("photo", true)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "photo-hint",
								className: "reg-upload-hint",
								children: t("register.photo.hint")
							}),
							fieldErrors.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "photo-error",
								className: "reg-error-text",
								children: fieldErrors.photo
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-payment-panel rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reg-payment-title font-black",
							children: t("register.fee.notice").replace("{amount}", formatMembershipMoney(600)).replace("{charges}", t("signup.fee.processingCharges"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reg-payment-instruction mt-1 text-amber-800",
							children: t("register.fee.manualInstruction").replace("{bank}", MEMBERSHIP_MANUAL_PAYMENT_DETAILS.bankName).replace("{account}", MEMBERSHIP_MANUAL_PAYMENT_DETAILS.accountNumber)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reg-payment-layout mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,340px)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reg-payment-details grid gap-3 rounded-2xl bg-white/80 p-4 text-slate-900 ring-1 ring-amber-100 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.bankName")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.bankName
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.accountTitle")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.accountTitle
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.accountNo")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.accountNumber
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.iban")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 break-all font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.iban
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.network")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.paymentNetwork
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reg-payment-detail",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
											children: t("register.payment.tillId")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-black",
											children: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.tillId
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reg-payment-qr overflow-hidden rounded-2xl border border-amber-200 bg-white p-3 text-center shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: MEMBERSHIP_PAYMENT_QR_IMAGE_PATH,
										alt: "Membership fee payment QR code",
										className: "reg-payment-qr-img mx-auto w-full max-w-[300px] rounded-xl object-contain",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm font-bold text-slate-900",
										children: t("register.payment.qrHelp").replace("{network}", MEMBERSHIP_MANUAL_PAYMENT_DETAILS.paymentNetwork).replace("{tillId}", MEMBERSHIP_MANUAL_PAYMENT_DETAILS.tillId)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-5 text-slate-600",
										children: t("register.payment.afterPayment")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `reg-upload-btn reg-payment-upload ${paymentReceiptLocked ? "is-disabled" : "cursor-pointer"}`,
									htmlFor: "paymentReceipt",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "17 8 12 3 7 8" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "12",
												y1: "3",
												x2: "12",
												y2: "15"
											})
										]
									}), paymentReceipt ? paymentReceipt.name : existingMembershipPayment?.receipt_file_name || (existingMembershipPayment?.receipt_path ? t("register.payment.receiptUploaded") : t("register.payment.uploadReceipt"))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "paymentReceipt",
									type: "file",
									accept: "image/png,image/jpeg,image/webp,application/pdf",
									onChange: handlePaymentReceiptChange,
									disabled: paymentReceiptLocked,
									className: "reg-sr-only",
									"aria-invalid": Boolean(fieldErrors.paymentReceipt),
									"aria-describedby": getDescriptionIds("paymentReceipt", true)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "paymentReceipt-hint",
									className: "reg-upload-hint mt-2",
									children: t("register.payment.receiptHint").replace("{size}", "5MB")
								}),
								paymentReceiptLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800",
									children: t("register.payment.receiptLocked")
								}) : null,
								fieldErrors.paymentReceipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "paymentReceipt-error",
									className: "reg-error-text",
									children: fieldErrors.paymentReceipt
								}) : null
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `reg-declaration ${form.declarationAccepted ? "reg-declaration--checked" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.declarationAccepted,
						onChange: (event) => updateField("declarationAccepted", event.target.checked),
						disabled: locked,
						className: "reg-checkbox",
						"aria-invalid": Boolean(fieldErrors.declarationAccepted),
						"aria-describedby": getDescriptionIds("declarationAccepted")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("register.declaration") })]
				}),
				fieldErrors.declarationAccepted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "declarationAccepted-error",
					className: "reg-error-text",
					children: fieldErrors.declarationAccepted
				}) : null
			]
		});
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "reg-page",
		dir: direction,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "reg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reg-loading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "reg-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("register.loading") })]
			})
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "reg-page",
		dir: direction,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "reg-bg-pattern",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reg-header-badge",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 17l10 5 10-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12l10 5 10-5" })
								]
							}), t("register.brand")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "reg-title",
							children: t("register.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reg-subtitle",
							children: t("register.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipFeeSummary, { t }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "reg-title-line" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-progress-wrap",
					"aria-label": t("register.progressLabel"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reg-progress-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("register.stepOf").replace("{current}", String(currentStep + 1)).replace("{total}", String(formSteps.length)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("register.complete").replace("{percent}", String(progressPercent)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reg-progress-track",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reg-progress-fill",
								style: { width: `${progressPercent}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reg-step-tabs",
							children: localizedSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: `reg-step-tab ${index === currentStep ? "is-active" : ""} ${index < currentStep ? "is-done" : ""}`,
								onClick: () => handleStepClick(index),
								disabled: locked && index !== currentStep,
								"aria-current": index === currentStep ? "step" : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index + 1 }), step.shortTitle]
							}, step.titleKey))
						})
					]
				}),
				existingMember?.status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--success",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "✓"
					}), t("register.approvedBanner")]
				}) : null,
				isPendingEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--info",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "i"
					}), t("register.pendingEditBanner")]
				}) : null,
				isRejected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--warning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "!"
					}), t("register.rejectedBanner")]
				}) : null,
				draftSavedAt && !existingMember ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--info",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "i"
					}), t("register.draftAvailable")]
				}) : null,
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--error",
					role: "alert",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "!"
					}), error]
				}) : null,
				success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reg-banner reg-banner--success",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reg-banner-icon",
						children: "✓"
					}), success]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "reg-form",
					noValidate: true,
					children: [renderCurrentStep(), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reg-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reg-actions-left",
							children: [
								currentStep > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handlePreviousStep,
									className: "reg-btn-secondary",
									children: ["← ", t("register.previous")]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => navigate({ to: "/dashboard" }),
									className: "reg-btn-secondary",
									children: ["← ", t("register.backDashboard")]
								}),
								!locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: saveDraft,
									className: "reg-btn-soft",
									children: t("register.saveDraft")
								}) : null,
								draftSavedAt && !locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: clearDraft,
									className: "reg-btn-soft reg-btn-soft--danger",
									children: t("register.clearDraft")
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reg-actions-right",
							children: !isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleNextStep,
								disabled: locked,
								className: "reg-btn-primary",
								children: [t("register.nextStep"), " →"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting || locked,
								className: "reg-btn-primary",
								children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "reg-spinner reg-spinner--sm" }), t("register.saving")] }) : isRejected ? t("register.resubmit") : existingMember ? t("register.updateForm") : t("register.submitApplication")
							})
						})]
					})]
				})
			]
		})]
	}) });
}
function MembershipFeeSummary({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-left text-sm text-amber-950 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.16em] text-amber-700",
				children: t("signup.fee.label")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-base font-black text-amber-950",
				children: [
					formatMembershipMoney(600),
					" + ",
					t("signup.fee.processingCharges")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 leading-6 text-amber-800",
				children: t("register.fee.payVia").replace("{bank}", MEMBERSHIP_MANUAL_PAYMENT_DETAILS.bankName)
			})
		]
	});
}
function FormSection({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "reg-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "reg-section-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "reg-section-title",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "reg-section-desc",
				children: description
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "reg-section-body",
			children
		})]
	});
}
function Field({ name, label, children, required, hint, error, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `reg-field ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: name,
				className: "reg-label",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "reg-required",
					"aria-hidden": "true",
					children: [" ", "*"]
				}) : null]
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: `${name}-hint`,
				className: "reg-hint",
				children: hint
			}) : null,
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${name}-error`,
				className: "reg-error-text",
				children: error
			}) : null
		]
	});
}
function memberToForm(data) {
	return {
		fullName: data.full_name,
		fatherName: data.father_name,
		cnic: data.cnic,
		mobile: data.mobile,
		district: data.district,
		taluka: data.taluka ?? "",
		profession: data.profession ?? "",
		casteBranch: data.caste_branch ?? "",
		address: data.address ?? "",
		dateOfBirth: data.date_of_birth ?? "",
		gender: data.gender ?? "",
		education: data.education ?? "",
		bloodGroup: data.blood_group ?? "",
		emergencyContactName: data.emergency_contact_name ?? "",
		emergencyContactRelation: data.emergency_contact_relation ?? "",
		emergencyContactMobile: data.emergency_contact_mobile ?? "",
		declarationAccepted: data.declaration_accepted
	};
}
function draftKey(userId) {
	return `mbjp-register-draft:${REGISTER_DRAFT_VERSION}:${userId}`;
}
function readDraft(userId) {
	try {
		const raw = localStorage.getItem(draftKey(userId));
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed.version !== REGISTER_DRAFT_VERSION || !parsed.form) return null;
		return {
			savedAt: parsed.savedAt ?? "",
			form: parsed.form
		};
	} catch {
		return null;
	}
}
function focusFirstInvalidField() {
	window.setTimeout(() => {
		document.querySelector("[aria-invalid=\"true\"]")?.focus();
	}, 50);
}
//#endregion
export { RegisterPage as component };
