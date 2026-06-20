import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./_ssr/admin-programs-i18n-C30wBAvA.mjs";
import { I as LoaderCircle, S as Save, T as Printer, Tt as BadgeIndianRupee, Y as HeartPulse, _ as ShieldCheck, et as FileHeart, f as TriangleAlert, ht as CircleCheck, i as User, kt as ArrowLeft, m as Stethoscope, mt as CircleX, ot as Download } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_id-DHtvXM9Z.mjs";
import { C as sanitizeHealthReportText, a as formatHealthMoney, b as isHealthEmergency, c as getHealthCommitteeDecisionClass, d as getHealthDocumentStatusClass, f as getHealthDocumentStatusLabel, g as healthCommitteeDecisionOptions, h as getHealthStatusLabel, i as formatHealthFileSize, l as getHealthCommitteeDecisionLabel, m as getHealthStatusClass, n as HEALTH_DOCUMENT_BUCKET, o as getHealthCasePriorityClass, p as getHealthPaymentStatusLabel, s as getHealthCasePriorityLabel, u as getHealthDocumentLabel, v as healthPaymentStatusOptions } from "./_ssr/health-BJr3C9Mk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-B_2ElCnu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminHealthApplicationDetailPage() {
	const { copy } = useAdminProgramsCopy("health");
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [signedUrls, setSignedUrls] = (0, import_react.useState)({});
	const [reviewForm, setReviewForm] = (0, import_react.useState)({
		status: "submitted",
		approvedAmount: "",
		adminRemarks: "",
		medicalCommitteeRemarks: "",
		casePriority: "normal",
		committeeDecision: "pending",
		committeeMembers: "",
		committeeRemarks: "",
		paymentStatus: "not_started",
		followUpNotes: "",
		caseCloseReport: ""
	});
	const [currentUserId, setCurrentUserId] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [assigning, setAssigning] = (0, import_react.useState)(false);
	const [documentSavingId, setDocumentSavingId] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplication();
	}, [id]);
	async function loadApplication() {
		setLoading(true);
		setMessage("");
		setSignedUrls({});
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Health admin detail dekhne ke liye pehle login karen.");
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		setCurrentUserId(user.id);
		const { data, error } = await supabase.from("program_applications").select("*").eq("id", id).eq("program_key", "health").maybeSingle();
		if (error) {
			setMessage(error.message);
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		if (!data) {
			setMessage("Health application not found or access denied.");
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		const row = data;
		setApplication(row);
		setReviewForm({
			status: row.status,
			approvedAmount: row.approved_amount ? String(row.approved_amount) : "",
			adminRemarks: row.admin_remarks || "",
			medicalCommitteeRemarks: row.details?.medical_committee_remarks || "",
			casePriority: row.details?.case_priority || (row.details?.emergency ? "emergency" : "normal"),
			committeeDecision: row.details?.health_committee_decision || "pending",
			committeeMembers: row.details?.health_committee_members || "",
			committeeRemarks: row.details?.health_committee_remarks || "",
			paymentStatus: row.details?.payment_status || "not_started",
			followUpNotes: row.details?.follow_up_notes || "",
			caseCloseReport: row.details?.case_close_report || ""
		});
		const { data: documentRows, error: documentError } = await supabase.from("program_documents").select("*").eq("application_id", row.id).eq("program_key", "health").order("created_at", { ascending: true });
		if (documentError) {
			setMessage(documentError.message);
			setDocuments([]);
			setLoading(false);
			return;
		}
		const safeDocuments = documentRows || [];
		setDocuments(safeDocuments);
		setSignedUrls(await createSignedUrls(safeDocuments));
		setLoading(false);
	}
	async function createSignedUrls(items) {
		const entries = await Promise.all(items.map(async (document) => {
			const { data, error } = await supabase.storage.from(HEALTH_DOCUMENT_BUCKET).createSignedUrl(document.file_path, 3600);
			if (error || !data?.signedUrl) return null;
			return [document.id, data.signedUrl];
		}));
		return Object.fromEntries(entries.filter(Boolean));
	}
	function updateReviewField(key, value) {
		setReviewForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function handleSaveReview(event) {
		event.preventDefault();
		if (!application) return;
		setSaving(true);
		setMessage("");
		const mergedDetails = {
			...application.details || {},
			medical_committee_remarks: reviewForm.medicalCommitteeRemarks.trim(),
			case_priority: reviewForm.casePriority,
			health_committee_decision: reviewForm.committeeDecision,
			health_committee_members: reviewForm.committeeMembers.trim(),
			health_committee_remarks: reviewForm.committeeRemarks.trim(),
			health_committee_reviewed_at: reviewForm.committeeDecision && reviewForm.committeeDecision !== "pending" ? application.details?.health_committee_reviewed_at || (/* @__PURE__ */ new Date()).toISOString() : "",
			payment_status: reviewForm.paymentStatus,
			follow_up_notes: reviewForm.followUpNotes.trim(),
			case_close_report: reviewForm.caseCloseReport.trim()
		};
		const { error } = await supabase.from("program_applications").update({
			status: reviewForm.status,
			approved_amount: reviewForm.approvedAmount ? Number(reviewForm.approvedAmount) : null,
			admin_remarks: reviewForm.adminRemarks.trim() || null,
			details: mergedDetails,
			assigned_admin_id: application.assigned_admin_id || currentUserId
		}).eq("id", application.id).eq("program_key", "health");
		if (error) {
			setMessage(error.message);
			setSaving(false);
			return;
		}
		setMessage("Health case review saved successfully.");
		await loadApplication();
		setSaving(false);
	}
	async function assignToMe() {
		if (!application || !currentUserId) return;
		setAssigning(true);
		setMessage("");
		const { error } = await supabase.from("program_applications").update({
			assigned_admin_id: currentUserId,
			status: application.status === "submitted" ? "under_review" : application.status
		}).eq("id", application.id).eq("program_key", "health");
		if (error) {
			setMessage(error.message);
			setAssigning(false);
			return;
		}
		await loadApplication();
		setAssigning(false);
	}
	async function clearReviewer() {
		if (!application) return;
		setAssigning(true);
		setMessage("");
		const { error } = await supabase.from("program_applications").update({ assigned_admin_id: null }).eq("id", application.id).eq("program_key", "health");
		if (error) {
			setMessage(error.message);
			setAssigning(false);
			return;
		}
		await loadApplication();
		setAssigning(false);
	}
	async function updateDocumentStatus({ document, status, note }) {
		setDocumentSavingId(document.id);
		setMessage("");
		const { data: { user } } = await supabase.auth.getUser();
		const { error } = await supabase.from("program_documents").update({
			verification_status: status,
			is_verified: status === "verified",
			admin_note: note ?? document.admin_note,
			verified_by: user?.id ?? null,
			verified_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", document.id).eq("program_key", "health");
		if (error) {
			setMessage(error.message);
			setDocumentSavingId(null);
			return;
		}
		await loadApplication();
		setDocumentSavingId(null);
	}
	const details = (0, import_react.useMemo)(() => application?.details || {}, [application]);
	async function handleBack() {
		await navigate({ to: "/admin/programs/health" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-10 text-white md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleBack,
					className: "inline-flex items-center text-sm font-bold text-red-300 transition hover:text-red-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), copy.program.detailBack]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-red-300" }), "Restricted Health Case"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-black md:text-6xl",
							children: "Review Medical Help Case"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
							children: "Sensitive medical case details. Sirf authorized health committee/admin use ke liye."
						})
					] }), application ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-[1fr_auto]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => printHealthCaseReport(application, details, documents),
							className: "inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "mr-2 h-4 w-4" }), "Print Close Report"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-white/10 p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-black text-white",
								children: application.application_no || "Application"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-white/70",
								children: ["Submitted: ", new Date(application.created_at).toLocaleDateString()]
							})]
						})]
					}) : null]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-red-500" })
				}) : !application ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-800 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black",
							children: copy.common.applicationNotAvailable
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/programs/health",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-red-700 px-5 py-3 font-black text-white no-underline",
							children: copy.program.detailBack
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[1fr_420px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyNotice, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								application,
								details
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: copy.program.patientDetails,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }),
								items: [
									["Patient Name", application.applicant_name],
									["CNIC / B-form", application.applicant_cnic || "-"],
									["Age", details.patient_age || "-"],
									["Gender", details.patient_gender || "-"],
									["Guardian Name", details.guardian_name || "-"],
									["Phone", application.phone],
									["Email", application.email || "-"],
									["Relationship", application.relationship_to_member],
									["Membership No", application.membership_no],
									["District", application.district || "-"],
									["Taluka", application.taluka || "-"],
									["Address", application.address || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Medical Case Details",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5" }),
								items: [
									["Disease / Condition", details.disease_name || "-"],
									["Treatment Type", details.treatment_type || "-"],
									[`${copy.program.hospital} Name`, details.hospital_name || "-"],
									["Doctor Name", details.doctor_name || "-"],
									["Doctor Contact", details.doctor_contact || "-"],
									["Estimated Cost", details.estimated_cost ? `Rs. ${details.estimated_cost}` : "-"],
									["Required Support", details.required_amount ? `Rs. ${details.required_amount}` : "-"],
									["Emergency", isHealthEmergency(details) ? "Yes" : "No"],
									["Case Priority", getHealthCasePriorityLabel(details)],
									["Case Summary", details.case_summary || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Health Committee Review",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }),
								items: [
									["Committee Decision", getHealthCommitteeDecisionLabel(details.health_committee_decision)],
									["Committee Members", details.health_committee_members || "-"],
									["Committee Reviewed At", details.health_committee_reviewed_at ? new Date(details.health_committee_reviewed_at).toLocaleString() : "-"],
									["Committee Remarks", details.health_committee_remarks || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsReviewSection, {
								documents,
								signedUrls,
								documentSavingId,
								onUpdateDocumentStatus: updateDocumentStatus
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewerCard, {
							application,
							currentUserId,
							assigning,
							onAssignToMe: assignToMe,
							onClearReviewer: clearReviewer
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewForm, {
							form: reviewForm,
							saving,
							message,
							onChange: updateReviewField,
							onSubmit: handleSaveReview
						})]
					})]
				})
			})
		})]
	});
}
function PrivacyNotice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "rounded-3xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-900 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-1 h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-black",
				children: "Medical Privacy & Restricted Access"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1",
				children: "Is case mein sensitive medical information ho sakti hai. Documents, disease details, committee notes aur close report sirf authorized health committee/admin review ke liye use karen."
			})] })]
		})
	});
}
function printHealthCaseReport(application, details, documents) {
	const rows = [
		["Case No", application.application_no || application.id],
		["Patient Name", application.applicant_name],
		["Membership No", application.membership_no],
		["District / Taluka", `${application.district || "-"} / ${application.taluka || "-"}`],
		["Status", getHealthStatusLabel(application.status)],
		["Priority", getHealthCasePriorityLabel(details)],
		["Emergency", isHealthEmergency(details) ? "Yes" : "No"],
		["Disease / Condition", details.disease_name || "-"],
		["Treatment Type", details.treatment_type || "-"],
		["Hospital", details.hospital_name || "-"],
		["Doctor", details.doctor_name || "-"],
		["Estimated Cost", formatHealthMoney(details.estimated_cost)],
		["Required Support", formatHealthMoney(details.required_amount)],
		["Approved Amount", application.approved_amount ? formatHealthMoney(application.approved_amount) : "Pending"],
		["Payment Status", getHealthPaymentStatusLabel(details.payment_status)],
		["Committee Decision", getHealthCommitteeDecisionLabel(details.health_committee_decision)],
		["Committee Members", details.health_committee_members || "-"],
		["Committee Remarks", details.health_committee_remarks || details.medical_committee_remarks || "-"],
		["Follow-up Notes", details.follow_up_notes || "-"],
		["Case Close Report", details.case_close_report || "-"]
	];
	const documentRows = documents.map((document) => `
        <tr>
          <td>${sanitizeHealthReportText(getHealthDocumentLabel(document.document_type))}</td>
          <td>${sanitizeHealthReportText(getHealthDocumentStatusLabel(document.verification_status))}</td>
          <td>${sanitizeHealthReportText(document.admin_note || "-")}</td>
        </tr>
      `).join("");
	const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Health Case Report - ${sanitizeHealthReportText(application.application_no || application.id)}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; padding: 32px; }
          h1 { margin: 0 0 8px; }
          .muted { color: #64748b; margin-bottom: 24px; }
          .privacy { border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; padding: 14px; border-radius: 12px; margin-bottom: 24px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          th, td { border: 1px solid #e2e8f0; padding: 10px; text-align: left; vertical-align: top; }
          th { background: #f8fafc; }
          .section { margin-top: 28px; }
          @media print { button { display: none; } body { padding: 16px; } }
        </style>
      </head>
      <body>
        <button onclick="window.print()">Print / Save PDF</button>
        <h1>Marwardi Bhatti Jamaat Pakistan — Health Case Report</h1>
        <div class="muted">Generated: ${sanitizeHealthReportText((/* @__PURE__ */ new Date()).toLocaleString())}</div>
        <div class="privacy"><strong>Restricted:</strong> This report contains sensitive medical information. Share only with authorized MBJP health committee/admin users.</div>
        <table>
          <tbody>
            ${rows.map(([label, value]) => `
                  <tr>
                    <th>${sanitizeHealthReportText(label)}</th>
                    <td>${sanitizeHealthReportText(value)}</td>
                  </tr>
                `).join("")}
          </tbody>
        </table>
        <div class="section">
          <h2>Document Verification</h2>
          <table>
            <thead><tr><th>Document</th><th>Status</th><th>Admin Note</th></tr></thead>
            <tbody>${documentRows || "<tr><td colspan=\"3\">No documents uploaded.</td></tr>"}</tbody>
          </table>
        </div>
      </body>
    </html>
  `;
	const reportWindow = window.open("", "_blank", "noopener,noreferrer");
	if (!reportWindow) return;
	reportWindow.document.write(html);
	reportWindow.document.close();
}
function SummaryCard({ application, details }) {
	const { copy } = useAdminProgramsCopy("health");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
						children: application.application_no || "Application"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full border px-3 py-1 text-xs font-black ${getHealthStatusClass(application.status)}`,
						children: getHealthStatusLabel(application.status)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `inline-flex items-center rounded-full border px-3 py-1 text-xs font-black ${getHealthCasePriorityClass(details)}`,
						children: [isHealthEmergency(details) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mr-1 h-3.5 w-3.5" }) : null, getHealthCasePriorityLabel(details)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full border px-3 py-1 text-xs font-black ${getHealthCommitteeDecisionClass(details.health_committee_decision)}`,
						children: getHealthCommitteeDecisionLabel(details.health_committee_decision)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-black text-slate-950",
				children: application.applicant_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-slate-600",
				children: [
					copy.common.membershipNo,
					": ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: application.membership_no })
				]
			})
		]
	});
}
function ReviewerCard({ application, currentUserId, assigning, onAssignToMe, onClearReviewer }) {
	const { copy } = useAdminProgramsCopy("health");
	const assignedToMe = currentUserId && application.assigned_admin_id === currentUserId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Reviewer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-slate-600",
				children: "Case ko apne naam assign karen. Submitted case assign hotay hi Under Medical Review ban jayega."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Status:" }),
					" ",
					application.assigned_admin_id ? assignedToMe ? "Assigned to you" : "Assigned to another reviewer" : "Unassigned"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAssignToMe,
					disabled: assigning || assignedToMe === true,
					className: "inline-flex items-center justify-center rounded-xl bg-red-500 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-red-400 disabled:opacity-60",
					children: [assigning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null, copy.common.assignToMe]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClearReviewer,
					disabled: assigning || !application.assigned_admin_id,
					className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 disabled:opacity-60",
					children: "Clear"
				})]
			})
		]
	});
}
function ReviewForm({ form, saving, message, onChange, onSubmit }) {
	const { copy } = useAdminProgramsCopy("health");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Case Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-black text-slate-700",
						children: ["Case Status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.status,
							onChange: (event) => onChange("status", event.target.value),
							className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "submitted",
									children: "Submitted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "under_review",
									children: "Under Medical Review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "need_more_info",
									children: "Need More Info"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "approved",
									children: "Approved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "rejected",
									children: "Rejected"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "paid_completed",
									children: "Payment Released"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "completed",
									children: "Case Closed"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-black text-slate-700",
						children: ["Approved Support Amount", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.approvedAmount,
							onChange: (event) => onChange("approvedAmount", event.target.value),
							placeholder: "e.g. 25000",
							className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-black text-slate-700",
						children: ["Payment Status", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.paymentStatus,
							onChange: (event) => onChange("paymentStatus", event.target.value),
							className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500",
							children: healthPaymentStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option.value,
								children: option.label
							}, option.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Admin Remarks",
						value: form.adminRemarks,
						onChange: (value) => onChange("adminRemarks", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-black text-slate-700",
						children: ["Case Priority", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.casePriority,
							onChange: (event) => onChange("casePriority", event.target.value),
							className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "normal",
									children: "Normal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "urgent",
									children: "Urgent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "emergency",
									children: "Emergency"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-black text-slate-700",
						children: ["Health Committee Decision", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.committeeDecision,
							onChange: (event) => onChange("committeeDecision", event.target.value),
							className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500",
							children: healthCommitteeDecisionOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option.value,
								children: option.label
							}, option.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Committee Members / Reviewers",
						value: form.committeeMembers,
						onChange: (value) => onChange("committeeMembers", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Medical Committee Remarks",
						value: form.medicalCommitteeRemarks,
						onChange: (value) => onChange("medicalCommitteeRemarks", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Committee Decision Notes",
						value: form.committeeRemarks,
						onChange: (value) => onChange("committeeRemarks", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Follow-up Notes",
						value: form.followUpNotes,
						onChange: (value) => onChange("followUpNotes", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
						label: "Case Close Report",
						value: form.caseCloseReport,
						onChange: (value) => onChange("caseCloseReport", value)
					})
				]
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900",
				children: message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: saving,
				className: "mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-slate-800 disabled:opacity-60",
				children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), copy.common.saveReview]
			})
		]
	});
}
function TextareaField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm font-black text-slate-700",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			rows: 4,
			className: "rounded-xl border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-red-500"
		})]
	});
}
function InfoSection({ title, icon, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: items.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: label.includes("Summary") ? "md:col-span-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.18em] text-slate-400",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-words text-sm font-semibold leading-6 text-slate-700",
					children: value
				})]
			}, label))
		})]
	});
}
function DocumentsReviewSection({ documents, signedUrls, documentSavingId, onUpdateDocumentStatus }) {
	const { copy } = useAdminProgramsCopy("health");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileHeart, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: ["Medical ", copy.common.documentVerification]
			})]
		}), documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600",
			children: "No documents uploaded."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentReviewCard, {
				document,
				signedUrl: signedUrls[document.id],
				saving: documentSavingId === document.id,
				onUpdateDocumentStatus
			}, document.id))
		})]
	});
}
function DocumentReviewCard({ document, signedUrl, saving, onUpdateDocumentStatus }) {
	const [note, setNote] = (0, import_react.useState)(document.admin_note || "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-black text-slate-950",
							children: getHealthDocumentLabel(document.document_type)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-sm text-slate-500",
							children: document.file_name || "Uploaded document"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-slate-400",
							children: formatHealthFileSize(document.file_size)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full border px-3 py-1 text-xs font-black ${getHealthDocumentStatusClass(document.verification_status)}`,
					children: getHealthDocumentStatusLabel(document.verification_status)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: note,
				onChange: (event) => setNote(event.target.value),
				placeholder: "Document note",
				rows: 3,
				className: "mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-red-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [
					signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: signedUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 no-underline transition hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Open"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onUpdateDocumentStatus({
							document,
							status: "verified",
							note
						}),
						disabled: saving,
						className: "inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-700 disabled:opacity-60",
						children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), "Verify"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onUpdateDocumentStatus({
							document,
							status: "needs_reupload",
							note
						}),
						disabled: saving,
						className: "inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-amber-400 disabled:opacity-60",
						children: "Re-upload"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onUpdateDocumentStatus({
							document,
							status: "rejected",
							note
						}),
						disabled: saving,
						className: "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-black text-white transition hover:bg-red-700 disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), "Reject"]
					})
				]
			})
		]
	});
}
//#endregion
export { AdminHealthApplicationDetailPage as component };
