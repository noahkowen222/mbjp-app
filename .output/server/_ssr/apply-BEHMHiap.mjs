import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, I as LoaderCircle, Ot as ArrowRight, _ as ShieldCheck, ht as CircleCheck, p as Trash2, u as Upload } from "../_libs/lucide-react.mjs";
import { a as educationRequiredDocumentTypes, f as instituteTypeOptions, h as validateEducationDocumentFile, i as educationDocumentOptions, m as supportTypeOptions, n as EDUCATION_DOCUMENT_BUCKET, o as formatEducationFileSize, p as relationshipOptions, r as createEducationDocumentStoragePath, t as EDUCATION_DOCUMENT_ACCEPT } from "./education-BvnDNjVw.mjs";
import { t as useProgramApplyCopy } from "./program-apply-i18n-DItTV5G8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-BEHMHiap.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialForm = {
	membershipNo: "",
	relationshipToMember: "self",
	studentName: "",
	guardianName: "",
	studentCnic: "",
	phone: "",
	email: "",
	district: "",
	taluka: "",
	address: "",
	instituteName: "",
	instituteType: "School",
	classDegree: "",
	boardUniversity: "",
	academicYear: "",
	lastExam: "",
	totalMarks: "",
	obtainedMarks: "",
	percentage: "",
	supportType: "Admission Fee",
	requiredAmount: "",
	reason: ""
};
function EducationApplyPage() {
	const navigate = useNavigate();
	const { copy, textDir, textAlignClass, arrowClass, iconBeforeClass } = useProgramApplyCopy("education");
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
		const validation = validateEducationDocumentFile(file);
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
		const missingDocuments = educationRequiredDocumentTypes.filter((documentType) => !documentFiles[documentType]);
		if (missingDocuments.length > 0) return `Required documents upload karen: ${missingDocuments.map((documentType) => educationDocumentOptions.find((item) => item.type === documentType)?.label ?? documentType).join(", ")}`;
		return "";
	}
	async function uploadApplicationDocuments({ userId, applicationId }) {
		const selectedDocuments = educationDocumentOptions.filter((document) => documentFiles[document.type]);
		for (const document of selectedDocuments) {
			const file = documentFiles[document.type];
			if (!file) continue;
			const validation = validateEducationDocumentFile(file);
			if (!validation.ok) throw new Error(`${document.label}: ${validation.message}`);
			const filePath = createEducationDocumentStoragePath({
				userId,
				applicationId,
				documentType: document.type,
				fileName: file.name
			});
			const { error: uploadError } = await supabase.storage.from(EDUCATION_DOCUMENT_BUCKET).upload(filePath, file, {
				cacheControl: "3600",
				contentType: file.type || void 0,
				upsert: false
			});
			if (uploadError) throw new Error(`${document.label}: ${uploadError.message}`);
			const { error: documentError } = await supabase.from("program_documents").insert({
				application_id: applicationId,
				program_key: "education",
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
		if (!form.studentName.trim()) {
			setMessage("Student full name required hai.");
			return;
		}
		if (!form.phone.trim()) {
			setMessage("Phone number required hai.");
			return;
		}
		if (!form.reason.trim()) {
			setMessage("Reason / need details required hain.");
			return;
		}
		const documentError = validateRequiredDocuments();
		if (documentError) {
			setMessage(documentError);
			return;
		}
		setSubmitting(true);
		const details = {
			guardian_name: form.guardianName.trim(),
			institute_name: form.instituteName.trim(),
			institute_type: form.instituteType,
			class_degree: form.classDegree.trim(),
			board_university: form.boardUniversity.trim(),
			academic_year: form.academicYear.trim(),
			last_exam: form.lastExam.trim(),
			total_marks: form.totalMarks.trim(),
			obtained_marks: form.obtainedMarks.trim(),
			percentage: form.percentage.trim(),
			support_type: form.supportType,
			required_amount: form.requiredAmount.trim(),
			reason: form.reason.trim()
		};
		const { data: applicationRow, error: applicationError } = await supabase.from("program_applications").insert({
			program_key: "education",
			applicant_user_id: user.id,
			membership_no: form.membershipNo.trim(),
			relationship_to_member: form.relationshipToMember,
			applicant_name: form.studentName.trim(),
			applicant_cnic: form.studentCnic.trim() || null,
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
		navigate({ to: "/programs/education/my-applications" });
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-amber-300" }), copy.program.badge]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: copy.common.membershipVerification
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-slate-600",
								children: copy.common.verifyMembershipText
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-[1fr_auto]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.membershipNo,
									onChange: (event) => updateField("membershipNo", event.target.value),
									placeholder: copy.common.membershipPlaceholder,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: verifyMembershipNo,
									disabled: verifying,
									className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-slate-800 disabled:opacity-60",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: copy.program.applicantDetails
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.studentName,
										onChange: (event) => updateField("studentName", event.target.value),
										placeholder: copy.program.studentName,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.guardianName,
										onChange: (event) => updateField("guardianName", event.target.value),
										placeholder: copy.program.guardianName,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: form.relationshipToMember,
										onChange: (event) => updateField("relationshipToMember", event.target.value),
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500",
										children: relationshipOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: option.value,
											children: [
												copy.common.relationship,
												": ",
												option.label
											]
										}, option.value))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.studentCnic,
										onChange: (event) => updateField("studentCnic", event.target.value),
										placeholder: copy.program.studentCnic,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.phone,
										onChange: (event) => updateField("phone", event.target.value),
										placeholder: copy.common.phone,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.email,
										onChange: (event) => updateField("email", event.target.value),
										placeholder: copy.common.emailOptional,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.district,
										onChange: (event) => updateField("district", event.target.value),
										placeholder: copy.common.district,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.taluka,
										onChange: (event) => updateField("taluka", event.target.value),
										placeholder: copy.common.taluka,
										className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.address,
								onChange: (event) => updateField("address", event.target.value),
								placeholder: copy.program.fullAddress,
								rows: 3,
								className: "mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: copy.program.academicDetails
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.instituteName,
									onChange: (event) => updateField("instituteName", event.target.value),
									placeholder: copy.program.instituteName,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.instituteType,
									onChange: (event) => updateField("instituteType", event.target.value),
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500",
									children: instituteTypeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item,
										children: item
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.classDegree,
									onChange: (event) => updateField("classDegree", event.target.value),
									placeholder: copy.program.classDegree,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.boardUniversity,
									onChange: (event) => updateField("boardUniversity", event.target.value),
									placeholder: copy.program.boardUniversity,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.academicYear,
									onChange: (event) => updateField("academicYear", event.target.value),
									placeholder: copy.program.academicYear,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.lastExam,
									onChange: (event) => updateField("lastExam", event.target.value),
									placeholder: copy.program.lastExam,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.totalMarks,
									onChange: (event) => updateField("totalMarks", event.target.value),
									placeholder: copy.program.totalMarks,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.obtainedMarks,
									onChange: (event) => updateField("obtainedMarks", event.target.value),
									placeholder: copy.program.obtainedMarks,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.percentage,
									onChange: (event) => updateField("percentage", event.target.value),
									placeholder: copy.program.percentage,
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: copy.program.supportRequest
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.supportType,
									onChange: (event) => updateField("supportType", event.target.value),
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500",
									children: supportTypeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item,
										children: item
									}, item))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.requiredAmount,
									onChange: (event) => updateField("requiredAmount", event.target.value),
									placeholder: copy.program.requiredAmount,
									type: "number",
									className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.reason,
								onChange: (event) => updateField("reason", event.target.value),
								placeholder: copy.program.reason,
								rows: 5,
								className: "mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-apply-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-4 md:flex-row md:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: copy.program.documentsTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm leading-7 text-slate-600",
								children: copy.common.uploadHint5
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-800",
								children: copy.common.documentsRequired
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4",
							children: educationDocumentOptions.map((document) => {
								const selectedFile = documentFiles[document.type];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-black text-slate-950",
													children: document.label
												}), document.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-red-700",
													children: copy.common.required
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-slate-600",
													children: copy.common.optional
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-6 text-slate-600",
												children: document.description
											}),
											selectedFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 flex-shrink-0" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold",
														children: selectedFile.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-emerald-700",
														children: formatEducationFileSize(selectedFile.size)
													})
												]
											}) : null
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2 sm:flex-row lg:flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "inline-flex cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: `${iconBeforeClass} h-4 w-4` }),
													selectedFile ? copy.common.changeFile : copy.common.uploadFile,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: EDUCATION_DOCUMENT_ACCEPT,
														className: "hidden",
														onChange: (event) => handleDocumentChange(document.type, event)
													})
												]
											}), selectedFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => updateDocumentFile(document.type, null),
												className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: `${iconBeforeClass} h-4 w-4` }), copy.common.remove]
											}) : null]
										})]
									})
								}, document.type);
							})
						})]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700",
						children: message
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-end gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/education",
							className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-800 no-underline",
							children: copy.common.back
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: submitting,
							className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
							children: [
								submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: `${iconBeforeClass} h-4 w-4 animate-spin` }) : null,
								submitting ? copy.common.submitting : copy.common.submitApplication,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })
							]
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { EducationApplyPage as component };
