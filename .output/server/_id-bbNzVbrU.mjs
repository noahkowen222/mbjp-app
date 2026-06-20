import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./_ssr/admin-programs-i18n-C30wBAvA.mjs";
import { I as LoaderCircle, S as Save, T as Printer, X as HandHeart, ht as CircleCheck, i as User, kt as ArrowLeft, mt as CircleX, nt as FileCheckCorner, ot as Download } from "./_libs/lucide-react.mjs";
import { S as welfareCommitteeDecisionOptions, a as formatWelfareMoney, c as getWelfareCommitteeDecisionClass, d as getWelfareDocumentStatusClass, f as getWelfareDocumentStatusLabel, h as getWelfareStatusLabel, i as formatWelfareFileSize, l as getWelfareCommitteeDecisionLabel, m as getWelfareStatusClass, n as WELFARE_DOCUMENT_BUCKET, o as getWelfareCasePriorityClass, p as getWelfarePaymentStatusLabel, s as getWelfareCasePriorityLabel, u as getWelfareDocumentLabel, v as sanitizeWelfareReportText, w as welfarePaymentStatusOptions } from "./_ssr/welfare-ytsTeUG3.mjs";
import { t as Route } from "./_id-BvGa4Njr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-bbNzVbrU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminWelfareApplicationDetailPage() {
	const { copy } = useAdminProgramsCopy("welfare");
	const { id } = Route.useParams();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [assigning, setAssigning] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		status: "under_review",
		approvedAmount: "",
		adminRemarks: "",
		verifierRemarks: "",
		committeeDecision: "pending",
		committeeMembers: "",
		committeeRemarks: "",
		paymentStatus: "not_started",
		paymentReference: "",
		followUpNotes: "",
		caseCloseReport: ""
	});
	(0, import_react.useEffect)(() => {
		loadApplication();
	}, [id]);
	async function loadApplication() {
		setLoading(true);
		setMessage("");
		const access = await ensureWelfareAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_user_id, applicant_name, applicant_cnic, membership_no, relationship_to_member, phone, email, address, district, taluka, details, status, assigned_admin_id, admin_remarks, approved_amount, submitted_at, reviewed_at, approved_at, completed_at, created_at").eq("program_key", "welfare").eq("id", id).single();
		if (error || !data) {
			setMessage(error?.message || "Welfare case not found.");
			setLoading(false);
			return;
		}
		const { data: docs, error: docsError } = await supabase.from("program_documents").select("*").eq("program_key", "welfare").eq("application_id", id).order("created_at", { ascending: true });
		if (docsError) {
			setMessage(docsError.message);
			setLoading(false);
			return;
		}
		const row = data;
		const details = row.details || {};
		setApplication(row);
		setDocuments(docs || []);
		setForm({
			status: row.status,
			approvedAmount: row.approved_amount ? String(row.approved_amount) : "",
			adminRemarks: row.admin_remarks || "",
			verifierRemarks: details.verifier_remarks || "",
			committeeDecision: details.welfare_committee_decision || "pending",
			committeeMembers: details.welfare_committee_members || "",
			committeeRemarks: details.welfare_committee_remarks || "",
			paymentStatus: details.payment_status || "not_started",
			paymentReference: details.payment_reference || "",
			followUpNotes: details.follow_up_notes || "",
			caseCloseReport: details.case_close_report || ""
		});
		setLoading(false);
	}
	function updateForm(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function assignToMe() {
		setMessage("");
		setAssigning(true);
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Reviewer assign karne ke liye login required hai.");
			setAssigning(false);
			return;
		}
		const updatePayload = {
			assigned_admin_id: user.id,
			reviewed_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (application?.status === "submitted") updatePayload.status = "under_review";
		const { error } = await supabase.from("program_applications").update(updatePayload).eq("id", id).eq("program_key", "welfare");
		setAssigning(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		await loadApplication();
	}
	async function clearReviewer() {
		setMessage("");
		setAssigning(true);
		const { error } = await supabase.from("program_applications").update({ assigned_admin_id: null }).eq("id", id).eq("program_key", "welfare");
		setAssigning(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		await loadApplication();
	}
	async function saveReview(event) {
		event.preventDefault();
		setMessage("");
		setSaving(true);
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const nextDetails = {
			...application?.details || {},
			verifier_remarks: form.verifierRemarks.trim(),
			welfare_committee_decision: form.committeeDecision,
			welfare_committee_members: form.committeeMembers.trim(),
			welfare_committee_remarks: form.committeeRemarks.trim(),
			welfare_committee_reviewed_at: form.committeeDecision !== "pending" ? now : application?.details?.welfare_committee_reviewed_at,
			payment_status: form.paymentStatus,
			payment_reference: form.paymentReference.trim(),
			follow_up_notes: form.followUpNotes.trim(),
			case_close_report: form.caseCloseReport.trim()
		};
		const updatePayload = {
			status: form.status,
			admin_remarks: form.adminRemarks.trim() || null,
			approved_amount: form.approvedAmount ? Number(form.approvedAmount) : null,
			details: nextDetails,
			reviewed_at: now
		};
		if ([
			"approved",
			"paid_completed",
			"completed"
		].includes(form.status)) updatePayload.approved_at = application?.approved_at || now;
		if (form.status === "completed") updatePayload.completed_at = application?.completed_at || now;
		const { error } = await supabase.from("program_applications").update(updatePayload).eq("id", id).eq("program_key", "welfare");
		setSaving(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		await loadApplication();
		setMessage("Welfare case review saved successfully.");
	}
	async function updateDocumentStatus(document, status, note) {
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Document verify karne ke liye login required hai.");
			return;
		}
		const { error } = await supabase.from("program_documents").update({
			verification_status: status,
			is_verified: status === "verified",
			admin_note: note.trim() || null,
			verified_by: user.id,
			verified_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", document.id).eq("program_key", "welfare");
		if (error) {
			setMessage(error.message);
			return;
		}
		await loadApplication();
	}
	async function openDocument(document) {
		const { data, error } = await supabase.storage.from(WELFARE_DOCUMENT_BUCKET).createSignedUrl(document.file_path, 600);
		if (error || !data?.signedUrl) {
			setMessage(error?.message || "Document open nahi ho saka.");
			return;
		}
		window.open(data.signedUrl, "_blank", "noopener,noreferrer");
	}
	function printCloseReport() {
		if (!application) return;
		const details = application.details || {};
		const reportHtml = `
      <!doctype html>
      <html>
        <head>
          <title>${sanitizeWelfareReportText(application.application_no || "Welfare Case Report")}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 32px; color: #0f172a; }
            h1 { margin: 0 0 8px; }
            .muted { color: #64748b; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 24px; }
            .box { border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px; }
            .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
            .value { margin-top: 6px; font-weight: 700; }
            .section { margin-top: 26px; }
            pre { white-space: pre-wrap; font-family: inherit; line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>MBJP ${sanitizeWelfareReportText(copy.program.detailBadge)} Close Report</h1>
          <p class="muted">${sanitizeWelfareReportText(application.application_no || "-")}</p>
          <div class="grid">
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.program.applicantName)}</div><div class="value">${sanitizeWelfareReportText(application.applicant_name)}</div></div>
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.common.membershipNo)}</div><div class="value">${sanitizeWelfareReportText(application.membership_no)}</div></div>
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.program.caseType)}</div><div class="value">${sanitizeWelfareReportText(details.case_type)}</div></div>
            <div class="box"><div class="label">Status</div><div class="value">${sanitizeWelfareReportText(getWelfareStatusLabel(application.status))}</div></div>
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.common.requiredAmount)}</div><div class="value">${sanitizeWelfareReportText(formatWelfareMoney(details.required_amount))}</div></div>
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.common.approvedAmount)}</div><div class="value">${sanitizeWelfareReportText(application.approved_amount ? formatWelfareMoney(application.approved_amount) : "-")}</div></div>
            <div class="box"><div class="label">Fund Status</div><div class="value">${sanitizeWelfareReportText(getWelfarePaymentStatusLabel(details.payment_status))}</div></div>
            <div class="box"><div class="label">${sanitizeWelfareReportText(copy.common.committeeDecision)}</div><div class="value">${sanitizeWelfareReportText(getWelfareCommitteeDecisionLabel(details.welfare_committee_decision))}</div></div>
          </div>
          <div class="section"><h2>Case Reason</h2><pre>${sanitizeWelfareReportText(details.reason)}</pre></div>
          <div class="section"><h2>Verifier Remarks</h2><pre>${sanitizeWelfareReportText(details.verifier_remarks)}</pre></div>
          <div class="section"><h2>Committee Remarks</h2><pre>${sanitizeWelfareReportText(details.welfare_committee_remarks)}</pre></div>
          <div class="section"><h2>Case Close Report</h2><pre>${sanitizeWelfareReportText(details.case_close_report)}</pre></div>
        </body>
      </html>
    `;
		const printWindow = window.open("", "_blank", "noopener,noreferrer");
		if (!printWindow) return;
		printWindow.document.write(reportHtml);
		printWindow.document.close();
		printWindow.focus();
		printWindow.print();
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-slate-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
	});
	if (message && !application) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black",
					children: copy.common.unableToLoad
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/programs/welfare",
					className: "mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-black text-white no-underline",
					children: copy.common.back
				})
			]
		})
	});
	if (!application) return null;
	const details = application.details || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-12 text-white md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/programs/welfare",
					className: "inline-flex items-center text-sm font-bold text-amber-300 no-underline hover:text-amber-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }),
						" ",
						copy.program.detailBack
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-4 w-4 text-amber-300" }),
								" ",
								application.application_no || copy.program.detailBadge
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-black md:text-6xl",
							children: application.applicant_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-white/70",
							children: [
								application.district || "-",
								" / ",
								application.taluka || "-",
								" • ",
								application.phone
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-4 py-2 text-sm font-black ${getWelfareStatusClass(application.status)}`,
								children: getWelfareStatusLabel(application.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-4 py-2 text-sm font-black ${getWelfareCasePriorityClass(details)}`,
								children: getWelfareCasePriorityLabel(details)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-4 py-2 text-sm font-black ${getWelfareCommitteeDecisionClass(details.welfare_committee_decision)}`,
								children: getWelfareCommitteeDecisionLabel(details.welfare_committee_decision)
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_420px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: saveReview,
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: copy.program.caseSummary,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoGrid, { rows: [
							[copy.program.applicantName, application.applicant_name],
							[copy.common.cnic, application.applicant_cnic || "-"],
							[copy.common.membershipNo, application.membership_no],
							[copy.common.relationship, application.relationship_to_member],
							[copy.program.caseType, details.case_type || "-"],
							[copy.common.requiredAmount, formatWelfareMoney(details.required_amount)],
							["Family Members", details.family_members || "-"],
							["Monthly Income", details.monthly_income || "-"]
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.reason, ":"] }),
								" ",
								details.reason || "-"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: copy.program.reviewApproval,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: copy.common.caseStatus,
										value: form.status,
										onChange: (value) => updateForm("status", value),
										options: [
											["submitted", "New"],
											["under_review", "Under Verification"],
											["need_more_info", "Need More Info"],
											["approved", "Approved"],
											["rejected", "Rejected"],
											["paid_completed", "Fund Released"],
											["completed", "Closed"]
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: copy.common.approvedAmount,
										value: form.approvedAmount,
										onChange: (value) => updateForm("approvedAmount", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: copy.common.committeeDecision,
										value: form.committeeDecision,
										onChange: (value) => updateForm("committeeDecision", value),
										options: welfareCommitteeDecisionOptions.map((item) => [item.value, item.label])
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: "Fund Status",
										value: form.paymentStatus,
										onChange: (value) => updateForm("paymentStatus", value),
										options: welfarePaymentStatusOptions.map((item) => [item.value, item.label])
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Committee Members",
										value: form.committeeMembers,
										onChange: (value) => updateForm("committeeMembers", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Payment Reference",
										value: form.paymentReference,
										onChange: (value) => updateForm("paymentReference", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										label: "Verifier Remarks",
										value: form.verifierRemarks,
										onChange: (value) => updateForm("verifierRemarks", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										label: "Admin / Approval Remarks",
										value: form.adminRemarks,
										onChange: (value) => updateForm("adminRemarks", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										label: "Committee Remarks",
										value: form.committeeRemarks,
										onChange: (value) => updateForm("committeeRemarks", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										label: "Follow-up Notes",
										value: form.followUpNotes,
										onChange: (value) => updateForm("followUpNotes", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										label: "Case Close Report",
										value: form.caseCloseReport,
										onChange: (value) => updateForm("caseCloseReport", value),
										className: "md:col-span-2"
									})
								]
							}),
							message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900",
								children: message
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: printCloseReport,
									className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "mr-2 h-4 w-4" }), " Print Close Report"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: saving,
									className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-6 py-3 font-black no-underline transition disabled:opacity-60",
									children: [
										saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }),
										" ",
										copy.common.saveReview
									]
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "Reviewer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Assigned:" }),
								" ",
								application.assigned_admin_id ? "Reviewer assigned" : "Unassigned"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: assignToMe,
								disabled: assigning,
								className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 font-black no-underline transition disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.assignToMe
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: clearReviewer,
								disabled: assigning,
								className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.clearReviewer
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: copy.common.documents,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3",
							children: [documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-600",
								children: "No documents uploaded."
							}) : null, documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentReviewCard, {
								document,
								onOpen: () => openDocument(document),
								onUpdate: (status, note) => updateDocumentStatus(document, status, note)
							}, document.id))]
						})
					})]
				})]
			})
		})]
	});
}
function DocumentReviewCard({ document, onOpen, onUpdate }) {
	const [status, setStatus] = (0, import_react.useState)(document.verification_status || "pending");
	const [note, setNote] = (0, import_react.useState)(document.admin_note || "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black text-slate-950",
					children: getWelfareDocumentLabel(document.document_type)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs font-semibold text-slate-500",
					children: [
						document.file_name || "Document",
						" • ",
						formatWelfareFileSize(document.file_size)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onOpen,
					className: "rounded-xl bg-white p-2 text-slate-600 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-black ${getWelfareDocumentStatusClass(document.verification_status)}`,
				children: getWelfareDocumentStatusLabel(document.verification_status)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: status,
						onChange: (event) => setStatus(event.target.value),
						className: "rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-amber-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pending",
								children: "Pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "verified",
								children: "Verified"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rejected",
								children: "Rejected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "needs_reupload",
								children: "Needs Re-upload"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: note,
						onChange: (event) => setNote(event.target.value),
						placeholder: "Document note",
						rows: 2,
						className: "rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onUpdate(status, note),
						className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-black text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), " Save Document"]
					})
				]
			})
		]
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-5 flex items-center gap-2 text-xl font-black text-slate-950",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-5 w-5 text-amber-700" }), title]
		}), children]
	});
}
function InfoGrid({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 text-sm md:grid-cols-2",
		children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-slate-50 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.14em] text-slate-400",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-bold text-slate-800",
				children: value
			})]
		}, label))
	});
}
function Input({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm font-bold text-slate-700",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
		})]
	});
}
function Textarea({ label, value, onChange, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `grid gap-2 text-sm font-bold text-slate-700 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			rows: 4,
			className: "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
		})]
	});
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm font-bold text-slate-700",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: "rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-500",
			children: options.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value,
				children: label
			}, value))
		})]
	});
}
async function ensureWelfareAdminAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		message: "Admin panel dekhne ke liye pehle login karen."
	};
	const { data: roles, error: rolesError } = await supabase.from("user_roles").select("role").eq("user_id", user.id).returns();
	if (rolesError) return {
		ok: false,
		message: rolesError.message
	};
	if ((roles || []).some((item) => [
		"admin",
		"super_admin",
		"welfare_admin"
	].includes(item.role))) return { ok: true };
	const { data: assignments, error: assignmentError } = await supabase.from("program_admin_assignments").select("id, can_view").eq("user_id", user.id).eq("program_key", "welfare").eq("can_view", true).limit(1).returns();
	if (assignmentError) return {
		ok: false,
		message: assignmentError.message
	};
	if (assignments?.length) return { ok: true };
	return {
		ok: false,
		message: "Aap ke account ko Welfare Admin access nahi mila."
	};
}
//#endregion
export { AdminWelfareApplicationDetailPage as component };
