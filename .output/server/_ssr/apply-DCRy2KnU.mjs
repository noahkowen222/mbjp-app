import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, Y as HeartPulse, _ as ShieldCheck, et as FileHeart, f as TriangleAlert, ht as CircleCheck, p as Trash2, u as Upload } from "../_libs/lucide-react.mjs";
import { E as validateHealthDocumentFile, S as relationshipOptions, T as treatmentTypeOptions, _ as healthDocumentOptions, i as formatHealthFileSize, n as HEALTH_DOCUMENT_BUCKET, r as createHealthDocumentStoragePath, t as HEALTH_DOCUMENT_ACCEPT, x as patientGenderOptions, y as healthRequiredDocumentTypes } from "./health-BJr3C9Mk.mjs";
import { t as useProgramApplyCopy } from "./program-apply-i18n-DItTV5G8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-DCRy2KnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialForm = {
	membershipNo: "",
	relationshipToMember: "self",
	patientName: "",
	guardianName: "",
	patientCnic: "",
	patientAge: "",
	patientGender: "Male",
	phone: "",
	email: "",
	district: "",
	taluka: "",
	address: "",
	diseaseName: "",
	treatmentType: "Medicine Support",
	hospitalName: "",
	doctorName: "",
	doctorContact: "",
	estimatedCost: "",
	requiredAmount: "",
	emergency: false,
	caseSummary: ""
};
function HealthApplyPage() {
	const { copy, textDir, textAlignClass, iconBeforeClass } = useProgramApplyCopy("health");
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [documentFiles, setDocumentFiles] = (0, import_react.useState)({});
	const [verifiedMember, setVerifiedMember] = (0, import_react.useState)(null);
	const [verifying, setVerifying] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	function updateField(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function updateDocumentFile(documentType, file) {
		setDocumentFiles((prev) => ({
			...prev,
			[documentType]: file
		}));
	}
	function handleDocumentChange(documentType, event) {
		setMessage("");
		const file = event.currentTarget.files?.[0] ?? null;
		if (!file) {
			updateDocumentFile(documentType, null);
			return;
		}
		const validation = validateHealthDocumentFile(file);
		if (!validation.ok) {
			setMessage(validation.message);
			event.currentTarget.value = "";
			updateDocumentFile(documentType, null);
			return;
		}
		updateDocumentFile(documentType, file);
	}
	async function verifyMembershipNo() {
		setMessage("");
		setVerifiedMember(null);
		if (!form.membershipNo.trim()) {
			setMessage("Membership number required hai.");
			return;
		}
		setVerifying(true);
		const { data, error } = await supabase.rpc("verify_membership_no", { _membership_no: form.membershipNo.trim() });
		setVerifying(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		const result = data;
		if (!result.valid) {
			setVerifiedMember(result);
			setMessage(result.reason || "Membership verification failed.");
			return;
		}
		setVerifiedMember(result);
		setForm((prev) => ({
			...prev,
			membershipNo: result.membership_no || prev.membershipNo,
			district: prev.district || result.district || "",
			taluka: prev.taluka || result.taluka || ""
		}));
		setMessage("Membership verified successfully.");
	}
	function validateRequiredDocuments() {
		const missingDocuments = healthRequiredDocumentTypes.filter((documentType) => !documentFiles[documentType]);
		if (missingDocuments.length > 0) return `Required documents upload karen: ${missingDocuments.map((documentType) => healthDocumentOptions.find((item) => item.type === documentType)?.label ?? documentType).join(", ")}`;
		return "";
	}
	async function uploadApplicationDocuments({ userId, applicationId }) {
		const selectedDocuments = healthDocumentOptions.filter((document) => documentFiles[document.type]);
		for (const document of selectedDocuments) {
			const file = documentFiles[document.type];
			if (!file) continue;
			const validation = validateHealthDocumentFile(file);
			if (!validation.ok) throw new Error(`${document.label}: ${validation.message}`);
			const filePath = createHealthDocumentStoragePath({
				userId,
				applicationId,
				documentType: document.type,
				fileName: file.name
			});
			const { error: uploadError } = await supabase.storage.from(HEALTH_DOCUMENT_BUCKET).upload(filePath, file, {
				cacheControl: "3600",
				contentType: file.type || void 0,
				upsert: false
			});
			if (uploadError) throw new Error(`${document.label}: ${uploadError.message}`);
			const { error: documentError } = await supabase.from("program_documents").insert({
				application_id: applicationId,
				program_key: "health",
				uploaded_by: userId,
				document_type: document.type,
				file_path: filePath,
				file_name: file.name,
				mime_type: file.type || null,
				file_size: file.size,
				verification_status: "pending",
				is_verified: false
			});
			if (documentError) throw new Error(`${document.label}: ${documentError.message}`);
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Application submit karne ke liye pehle login/signup karen.");
			return;
		}
		if (!verifiedMember?.valid) {
			setMessage("Pehle membership number verify karen.");
			return;
		}
		if (!form.patientName.trim()) {
			setMessage("Patient full name required hai.");
			return;
		}
		if (!form.phone.trim()) {
			setMessage("Phone number required hai.");
			return;
		}
		if (!form.diseaseName.trim()) {
			setMessage("Disease / medical condition required hai.");
			return;
		}
		if (!form.caseSummary.trim()) {
			setMessage("Case summary required hai.");
			return;
		}
		const documentError = validateRequiredDocuments();
		if (documentError) {
			setMessage(documentError);
			return;
		}
		setSubmitting(true);
		const details = {
			patient_age: form.patientAge.trim(),
			patient_gender: form.patientGender,
			guardian_name: form.guardianName.trim(),
			disease_name: form.diseaseName.trim(),
			treatment_type: form.treatmentType,
			hospital_name: form.hospitalName.trim(),
			doctor_name: form.doctorName.trim(),
			doctor_contact: form.doctorContact.trim(),
			estimated_cost: form.estimatedCost.trim(),
			required_amount: form.requiredAmount.trim(),
			emergency: form.emergency,
			case_priority: form.emergency ? "emergency" : "normal",
			case_summary: form.caseSummary.trim(),
			payment_status: "not_started"
		};
		const { data: applicationRow, error: applicationError } = await supabase.from("program_applications").insert({
			program_key: "health",
			applicant_user_id: user.id,
			membership_no: form.membershipNo.trim(),
			relationship_to_member: form.relationshipToMember,
			applicant_name: form.patientName.trim(),
			applicant_cnic: form.patientCnic.trim() || null,
			phone: form.phone.trim(),
			email: form.email.trim() || user.email || null,
			district: form.district.trim() || null,
			taluka: form.taluka.trim() || null,
			address: form.address.trim() || null,
			details,
			status: "submitted"
		}).select("id").single();
		if (applicationError || !applicationRow?.id) {
			setSubmitting(false);
			setMessage(applicationError?.message || "Application submit nahi ho saki.");
			return;
		}
		try {
			await uploadApplicationDocuments({
				userId: user.id,
				applicationId: applicationRow.id
			});
		} catch (error) {
			setSubmitting(false);
			setMessage(error instanceof Error ? `Application submit ho gayi, lekin document upload me issue aya: ${error.message}` : "Application submit ho gayi, lekin document upload me issue aya.");
			return;
		}
		setSubmitting(false);
		await navigate({ to: "/programs/health/my-applications" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "program-apply-page min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-14 text-white md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `max-w-3xl space-y-5 ${textAlignClass}`,
					dir: textDir,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-red-300" }), copy.program.badge]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-black md:text-6xl",
							children: copy.program.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-8 text-white/75",
							children: copy.program.description
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "program-apply-form mx-auto grid max-w-6xl gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormCard, {
						title: copy.common.membershipVerification,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-7 text-slate-600",
								children: copy.common.verifyMembershipText
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-[1fr_auto]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.membershipNo,
									onChange: (event) => updateField("membershipNo", event.target.value),
									placeholder: copy.common.membershipPlaceholder,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: verifyMembershipNo,
									disabled: verifying,
									className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-6 py-3 font-black no-underline transition disabled:opacity-60",
									children: [verifying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: `${iconBeforeClass} h-4 w-4 animate-spin` }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `${iconBeforeClass} h-4 w-4` }), copy.common.verify]
								})]
							}),
							verifiedMember?.valid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800",
								children: [
									copy.common.verified,
									": ",
									verifiedMember.full_name || copy.common.approvedMember,
									" —",
									" ",
									verifiedMember.district || copy.common.district,
									" /",
									" ",
									verifiedMember.taluka || copy.common.taluka
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCard, {
						title: copy.program.patientDetails,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.patientName,
									onChange: (value) => updateField("patientName", value),
									placeholder: copy.program.patientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.guardianName,
									onChange: (value) => updateField("guardianName", value),
									placeholder: copy.program.guardianName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.relationshipToMember,
									onChange: (event) => updateField("relationshipToMember", event.target.value),
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500",
									children: relationshipOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: option.value,
										children: [
											copy.common.relationship,
											": ",
											option.label
										]
									}, option.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.patientCnic,
									onChange: (value) => updateField("patientCnic", value),
									placeholder: copy.program.patientCnic
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.patientAge,
									onChange: (value) => updateField("patientAge", value),
									placeholder: copy.program.patientAge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.patientGender,
									onChange: (event) => updateField("patientGender", event.target.value),
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500",
									children: patientGenderOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: option,
										children: option
									}, option))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.phone,
									onChange: (value) => updateField("phone", value),
									placeholder: copy.common.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.email,
									onChange: (value) => updateField("email", value),
									placeholder: copy.common.emailOptional
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.district,
									onChange: (value) => updateField("district", value),
									placeholder: copy.common.district
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.taluka,
									onChange: (value) => updateField("taluka", value),
									placeholder: copy.common.taluka
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.address,
									onChange: (event) => updateField("address", event.target.value),
									placeholder: copy.common.address,
									rows: 3,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500 md:col-span-2"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCard, {
						title: copy.program.caseDetails,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.diseaseName,
									onChange: (value) => updateField("diseaseName", value),
									placeholder: copy.program.diseaseName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.treatmentType,
									onChange: (event) => updateField("treatmentType", event.target.value),
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500",
									children: treatmentTypeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: option,
										children: option
									}, option))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.hospitalName,
									onChange: (value) => updateField("hospitalName", value),
									placeholder: copy.program.hospitalName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.doctorName,
									onChange: (value) => updateField("doctorName", value),
									placeholder: copy.program.doctorName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.doctorContact,
									onChange: (value) => updateField("doctorContact", value),
									placeholder: copy.program.doctorContact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.estimatedCost,
									onChange: (value) => updateField("estimatedCost", value),
									placeholder: copy.program.estimatedCost
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: form.requiredAmount,
									onChange: (value) => updateField("requiredAmount", value),
									placeholder: copy.program.requiredAmount
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: form.emergency,
										onChange: (event) => updateField("emergency", event.target.checked),
										className: "h-4 w-4"
									}), "Emergency case"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.caseSummary,
									onChange: (event) => updateField("caseSummary", event.target.value),
									placeholder: copy.program.caseSummary,
									rows: 5,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500 md:col-span-2"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormCard, {
						title: copy.program.documentsTitle,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold leading-6",
									children: "Medical documents private hain. Sirf applicant aur authorized health admin/committee in documents ko open kar sakte hain."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: healthDocumentOptions.map((document) => {
									const file = documentFiles[document.type];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
													className: "font-black text-slate-950",
													children: [
														document.label,
														" ",
														document.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-red-600",
															children: "*"
														}) : null
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm leading-6 text-slate-600",
													children: document.description
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileHeart, { className: "h-5 w-5 flex-shrink-0 text-red-500" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "mt-4 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-4 py-4 text-sm font-black text-slate-700 transition hover:border-red-400 hover:text-red-700",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: `${iconBeforeClass} h-4 w-4` }),
													"Upload Document",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: HEALTH_DOCUMENT_ACCEPT,
														onChange: (event) => handleDocumentChange(document.type, event),
														className: "sr-only"
													})
												]
											}),
											file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex items-center justify-between gap-3 rounded-xl bg-white p-3 text-sm shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate font-black text-slate-800",
														children: file.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-slate-500",
														children: formatHealthFileSize(file.size)
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => updateDocumentFile(document.type, null),
													className: "rounded-lg p-2 text-red-600 transition hover:bg-red-50",
													"aria-label": `Remove ${document.label}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
												})]
											}) : null
										]
									}, document.type);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-slate-500",
								children: copy.common.uploadHint8
							})
						]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900",
						children: message
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-black text-slate-950",
							children: copy.common.submitApplication
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-slate-500",
							children: copy.program.description
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/health",
								className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 no-underline transition hover:bg-slate-50",
								children: copy.common.back
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: submitting,
								className: "inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-black text-slate-950 transition hover:bg-red-400 disabled:opacity-60",
								children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: `${iconBeforeClass} h-4 w-4 animate-spin` }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: `${iconBeforeClass} h-4 w-4` }), submitting ? copy.common.submitting : copy.common.submitApplication]
							})]
						})]
					})
				]
			})
		})]
	});
}
function FormCard({ children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-5 text-2xl font-black text-slate-950",
			children: title
		}), children]
	});
}
function TextInput({ value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		value,
		onChange: (event) => onChange(event.target.value),
		placeholder,
		className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500"
	});
}
//#endregion
export { HealthApplyPage as component };
