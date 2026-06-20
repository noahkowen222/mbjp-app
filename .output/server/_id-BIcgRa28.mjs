import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_id-C3WM87D5.mjs";
import { t as useAdminProgramsCopy } from "./_ssr/admin-programs-i18n-C30wBAvA.mjs";
import { _ as getShortlistStatusLabel, c as formatEmploymentFileSize, d as getEmploymentDocumentLabel, f as getEmploymentDocumentStatusClass, h as getEmploymentStatusLabel, l as formatSkills, m as getEmploymentStatusClass, n as EMPLOYMENT_DOCUMENT_BUCKET, p as getEmploymentDocumentStatusLabel, u as getCurrentEmploymentStatusLabel, v as getTrainingInterestLabel, x as shortlistStatusOptions } from "./_ssr/employment-CLgEhxZ8.mjs";
import { $ as FileText, I as LoaderCircle, S as Save, at as ExternalLink, kt as ArrowLeft, xt as BriefcaseBusiness } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-BIcgRa28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminEmploymentApplicationDetailPage() {
	const { copy } = useAdminProgramsCopy("employment");
	const { id } = Route.useParams();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [documentUrls, setDocumentUrls] = (0, import_react.useState)({});
	const [review, setReview] = (0, import_react.useState)({
		status: "under_review",
		adminRemarks: "",
		shortlistStatus: "not_shortlisted",
		placementStatus: "not_placed",
		employerName: "",
		jobTitle: "",
		interviewNotes: "",
		placementNotes: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplication();
	}, [id]);
	async function ensureAccess() {
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) return {
			ok: false,
			userId: ""
		};
		const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", [
			"admin",
			"super_admin",
			"employment_admin"
		]).limit(1);
		if (error || !data?.length) return {
			ok: false,
			userId: user.id
		};
		return {
			ok: true,
			userId: user.id
		};
	}
	async function loadApplication() {
		setLoading(true);
		setMessage("");
		if (!(await ensureAccess()).ok) {
			setMessage("Employment admin access required.");
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, applicant_cnic, phone, district, taluka, address, details, status, assigned_admin_id, admin_remarks, created_at").eq("id", id).eq("program_key", "employment").single();
		if (error || !data) {
			setMessage(error?.message || "Employment profile not found.");
			setLoading(false);
			return;
		}
		const app = data;
		const details = app.details || {};
		setApplication(app);
		setReview({
			status: app.status,
			adminRemarks: app.admin_remarks || "",
			shortlistStatus: details.shortlist_status || "not_shortlisted",
			placementStatus: details.placement_status || "not_placed",
			employerName: details.employer_name || "",
			jobTitle: details.job_title || "",
			interviewNotes: details.interview_notes || "",
			placementNotes: details.placement_notes || ""
		});
		const { data: docs } = await supabase.from("program_documents").select("*").eq("application_id", id).eq("program_key", "employment").order("created_at", { ascending: true });
		const typedDocs = docs || [];
		const urls = {};
		for (const doc of typedDocs) {
			const { data: signed } = await supabase.storage.from(EMPLOYMENT_DOCUMENT_BUCKET).createSignedUrl(doc.file_path, 3600);
			if (signed?.signedUrl) urls[doc.id] = signed.signedUrl;
		}
		setDocuments(typedDocs);
		setDocumentUrls(urls);
		setLoading(false);
	}
	async function saveReview(event) {
		event.preventDefault();
		if (!application) return;
		setSaving(true);
		setMessage("");
		const access = await ensureAccess();
		if (!access.ok) {
			setMessage("Employment admin access required.");
			setSaving(false);
			return;
		}
		const nextDetails = {
			...application.details || {},
			shortlist_status: review.shortlistStatus,
			placement_status: review.placementStatus,
			employer_name: review.employerName.trim(),
			job_title: review.jobTitle.trim(),
			interview_notes: review.interviewNotes.trim(),
			placement_notes: review.placementNotes.trim()
		};
		const { error } = await supabase.from("program_applications").update({
			status: review.status,
			admin_remarks: review.adminRemarks.trim() || null,
			assigned_admin_id: access.userId,
			reviewed_at: (/* @__PURE__ */ new Date()).toISOString(),
			completed_at: review.status === "completed" || review.status === "paid_completed" ? (/* @__PURE__ */ new Date()).toISOString() : null,
			details: nextDetails
		}).eq("id", application.id).eq("program_key", "employment");
		if (error) setMessage(error.message);
		else {
			setMessage("Employment review saved successfully.");
			await loadApplication();
		}
		setSaving(false);
	}
	async function updateDocumentStatus(doc, status) {
		const access = await ensureAccess();
		if (!access.ok) {
			setMessage("Employment admin access required.");
			return;
		}
		const { error } = await supabase.from("program_documents").update({
			verification_status: status,
			is_verified: status === "verified",
			verified_by: access.userId,
			verified_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", doc.id);
		if (error) setMessage(error.message);
		else await loadApplication();
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-emerald-600" })
	});
	if (!application) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm",
			children: message || "Not found"
		})
	});
	const details = application.details || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/programs/employment",
					className: "inline-flex items-center text-sm font-black text-emerald-700 no-underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }),
						" ",
						copy.program.detailBack
					]
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-800",
					children: message
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-700",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }),
										" ",
										copy.program.detailBadge
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 text-3xl font-black text-slate-950",
									children: application.applicant_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-semibold text-slate-500",
									children: [
										copy.common.memberId,
										": ",
										application.membership_no
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-4 py-2 text-sm font-black ${getEmploymentStatusClass(application.status)}`,
								children: getEmploymentStatusLabel(application.status)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.phone,
									value: application.phone || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.common.cnic,
									value: application.applicant_cnic || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.common.district,
									value: application.district || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.common.taluka,
									value: application.taluka || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.education,
									value: details.education_level || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.candidateInfo,
									value: details.field_of_study || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.skills,
									value: formatSkills(details.skills)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.experience,
									value: details.experience_years || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.preferredLocation,
									value: details.preferred_job_location || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.expectedSalary,
									value: details.expected_salary || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.currentStatus,
									value: getCurrentEmploymentStatusLabel(details.current_employment_status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.training,
									value: getTrainingInterestLabel(details.training_interest)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.shortlist,
									value: getShortlistStatusLabel(details.shortlist_status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.employer,
									value: details.employer_name || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.jobTitle,
									value: details.job_title || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.common.submitted,
									value: new Date(application.created_at).toLocaleDateString()
								})
							]
						}),
						details.experience_summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.program.experience,
							text: details.experience_summary
						}) : null,
						details.skill_development_request ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.program.skills,
							text: details.skill_development_request
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-6 lg:grid-cols-[1fr_420px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: copy.common.documents
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-4 md:grid-cols-2",
							children: documents.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-black text-slate-950",
											children: getEmploymentDocumentLabel(doc.document_type)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-slate-500",
											children: [
												doc.file_name || "Document",
												" · ",
												formatEmploymentFileSize(doc.file_size)
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-emerald-700" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-3 py-1 text-xs font-black ${getEmploymentDocumentStatusClass(doc.verification_status)}`,
											children: getEmploymentDocumentStatusLabel(doc.verification_status)
										}), documentUrls[doc.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: documentUrls[doc.id],
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1 text-sm font-black text-emerald-700",
											children: ["Open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => updateDocumentStatus(doc, "verified"),
												className: "rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white",
												children: "Verify"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => updateDocumentStatus(doc, "need_more_info"),
												className: "rounded-xl bg-amber-500 px-3 py-2 text-xs font-black text-slate-950",
												children: "Need Info"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => updateDocumentStatus(doc, "rejected"),
												className: "rounded-xl bg-red-600 px-3 py-2 text-xs font-black text-white",
												children: "Reject"
											})
										]
									})
								]
							}, doc.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveReview,
						className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: "Review & Placement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Application Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: review.status,
										onChange: (event) => setReview((current) => ({
											...current,
											status: event.target.value
										})),
										className: "input-clean",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "submitted",
												children: "Registered"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "under_review",
												children: "Under Review"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "need_more_info",
												children: "Need More Info"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "approved",
												children: "Shortlisted"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "rejected",
												children: "Rejected"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "paid_completed",
												children: "Placed / Employed"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "completed",
												children: "Closed"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Shortlist Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: review.shortlistStatus,
										onChange: (event) => setReview((current) => ({
											...current,
											shortlistStatus: event.target.value
										})),
										className: "input-clean",
										children: shortlistStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: item.value,
											children: item.label
										}, item.value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Placement Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: review.placementStatus,
										onChange: (event) => setReview((current) => ({
											...current,
											placementStatus: event.target.value
										})),
										className: "input-clean",
										placeholder: "not_placed / placed / follow_up"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Employer Name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: review.employerName,
										onChange: (event) => setReview((current) => ({
											...current,
											employerName: event.target.value
										})),
										className: "input-clean"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: copy.program.jobTitle,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: review.jobTitle,
										onChange: (event) => setReview((current) => ({
											...current,
											jobTitle: event.target.value
										})),
										className: "input-clean"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Interview Notes",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: review.interviewNotes,
										onChange: (event) => setReview((current) => ({
											...current,
											interviewNotes: event.target.value
										})),
										className: "input-clean min-h-24"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Placement Notes",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: review.placementNotes,
										onChange: (event) => setReview((current) => ({
											...current,
											placementNotes: event.target.value
										})),
										className: "input-clean min-h-24"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Admin Remarks",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: review.adminRemarks,
										onChange: (event) => setReview((current) => ({
											...current,
											adminRemarks: event.target.value
										})),
										className: "input-clean min-h-24"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: saving,
									className: "inline-flex h-12 w-full items-center justify-center rounded-2xl bg-emerald-700 px-5 font-black text-white hover:bg-emerald-800 disabled:opacity-60",
									children: [
										saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }),
										" ",
										copy.common.saveReview
									]
								})
							]
						})]
					})]
				})
			]
		})
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words font-black text-slate-950",
			children: value
		})]
	});
}
function TextBlock({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-2xl bg-slate-50 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-black text-slate-950",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700",
			children: text
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mb-2 block text-sm font-black text-slate-800",
		children: label
	}), children] });
}
//#endregion
export { AdminEmploymentApplicationDetailPage as component };
