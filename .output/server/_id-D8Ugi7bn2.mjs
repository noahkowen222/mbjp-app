import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { _ as getShortlistStatusLabel, c as formatEmploymentFileSize, d as getEmploymentDocumentLabel, f as getEmploymentDocumentStatusClass, g as getEmploymentTypeLabel, h as getEmploymentStatusLabel, l as formatSkills, m as getEmploymentStatusClass, n as EMPLOYMENT_DOCUMENT_BUCKET, p as getEmploymentDocumentStatusLabel, u as getCurrentEmploymentStatusLabel, v as getTrainingInterestLabel } from "./_ssr/employment-CLgEhxZ8.mjs";
import { $ as FileText, I as LoaderCircle, at as ExternalLink, xt as BriefcaseBusiness } from "./_libs/lucide-react.mjs";
import { t as useProgramTrackingCopy } from "./_ssr/program-tracking-i18n-Bv7uyClU.mjs";
import { t as Route } from "./_id--bpmL043.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-D8Ugi7bn2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EmploymentApplicationDetailPage() {
	const { copy, textDir, textAlignClass } = useProgramTrackingCopy("employment");
	const { id } = Route.useParams();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [documentUrls, setDocumentUrls] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplication();
	}, [id]);
	async function loadApplication() {
		setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Details dekhne ke liye login karen.");
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, phone, district, taluka, address, details, status, admin_remarks, created_at").eq("id", id).eq("program_key", "employment").eq("applicant_user_id", user.id).single();
		if (error || !data) {
			setMessage(error?.message || "Employment profile not found.");
			setLoading(false);
			return;
		}
		const { data: docs } = await supabase.from("program_documents").select("*").eq("application_id", id).eq("program_key", "employment").order("created_at", { ascending: true });
		const typedDocs = docs || [];
		const urls = {};
		for (const doc of typedDocs) {
			const { data: signed } = await supabase.storage.from(EMPLOYMENT_DOCUMENT_BUCKET).createSignedUrl(doc.file_path, 3600);
			if (signed?.signedUrl) urls[doc.id] = signed.signedUrl;
		}
		setApplication(data);
		setDocuments(typedDocs);
		setDocumentUrls(urls);
		setLoading(false);
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-emerald-600" })
	});
	if (message || !application) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-10",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm",
			children: message || "Not found"
		})
	});
	const details = application.details || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-10",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/programs/employment/my-applications",
					className: "text-sm font-black text-emerald-700 no-underline",
					children: ["← ", copy.program.detailBack]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex flex-wrap items-start justify-between gap-4 ${textAlignClass}`,
							dir: textDir,
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
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.education,
									value: details.education_level || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.field,
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
									label: copy.program.employmentType,
									value: getEmploymentTypeLabel(details.employment_type)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.currentStatus,
									value: getCurrentEmploymentStatusLabel(details.current_employment_status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.trainingInterest,
									value: getTrainingInterestLabel(details.training_interest)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.shortlistStatus,
									value: getShortlistStatusLabel(details.shortlist_status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.program.placement,
									value: details.placement_status || copy.program.notPlaced
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									label: copy.common.submitted,
									value: new Date(application.created_at).toLocaleDateString()
								})
							]
						}),
						details.experience_summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.program.experienceSummary,
							text: details.experience_summary
						}) : null,
						details.skill_development_request ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.program.skillDevelopmentRequest,
							text: details.skill_development_request
						}) : null,
						details.placement_notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.program.placementNotes,
							text: details.placement_notes
						}) : null,
						application.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBlock, {
							title: copy.common.adminRemarks,
							text: application.admin_remarks
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
											doc.file_name || copy.common.document,
											" · ",
											formatEmploymentFileSize(doc.file_size)
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-emerald-700" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-3 py-1 text-xs font-black ${getEmploymentDocumentStatusClass(doc.verification_status)}`,
										children: getEmploymentDocumentStatusLabel(doc.verification_status)
									}), documentUrls[doc.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: documentUrls[doc.id],
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-sm font-black text-emerald-700",
										children: [
											copy.common.open,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
										]
									}) : null]
								}),
								doc.admin_note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-slate-600",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.common.note, ":"] }),
										" ",
										doc.admin_note
									]
								}) : null
							]
						}, doc.id))
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
			className: "mt-1 font-black text-slate-950",
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
//#endregion
export { EmploymentApplicationDetailPage as component };
