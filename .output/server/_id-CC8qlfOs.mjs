import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./_ssr/admin-programs-i18n-C30wBAvA.mjs";
import { $ as FileText, I as LoaderCircle, S as Save, Tt as BadgeIndianRupee, Z as GraduationCap, _ as ShieldCheck, bt as CalendarDays, i as User, kt as ArrowLeft, ot as Download, pt as ClipboardCheck, s as UserPlus } from "./_libs/lucide-react.mjs";
import { c as getEducationDocumentStatusClass, d as getEducationStatusLabel, l as getEducationDocumentStatusLabel, n as EDUCATION_DOCUMENT_BUCKET, o as formatEducationFileSize, s as getEducationDocumentLabel, u as getEducationStatusClass } from "./_ssr/education-BvnDNjVw.mjs";
import { t as Route } from "./_id-D65Xa75B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CC8qlfOs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusOptions = [
	"submitted",
	"under_review",
	"need_more_info",
	"approved",
	"rejected",
	"paid_completed",
	"completed"
];
var documentStatusOptions = [
	"pending",
	"verified",
	"rejected",
	"needs_reupload"
];
function AdminEducationApplicationDetailPage() {
	const { copy } = useAdminProgramsCopy("education");
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [signedUrls, setSignedUrls] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [documentSavingId, setDocumentSavingId] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)("");
	const [currentUserId, setCurrentUserId] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("submitted");
	const [approvedAmount, setApprovedAmount] = (0, import_react.useState)("");
	const [assignedAdminId, setAssignedAdminId] = (0, import_react.useState)("");
	const [adminRemarks, setAdminRemarks] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplication();
	}, [id]);
	async function loadApplication() {
		setLoading(true);
		setMessage("");
		setSignedUrls({});
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Admin application detail dekhne ke liye pehle login karen.");
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		setCurrentUserId(user.id);
		const { data, error } = await supabase.from("program_applications").select("*").eq("id", id).eq("program_key", "education").maybeSingle();
		if (error) {
			setMessage(error.message);
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		if (!data) {
			setMessage("Education application not found.");
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		const row = data;
		setApplication(row);
		setStatus(row.status);
		setApprovedAmount(row.approved_amount ? String(row.approved_amount) : "");
		setAssignedAdminId(row.assigned_admin_id || "");
		setAdminRemarks(row.admin_remarks || "");
		await loadDocuments(row.id);
		setLoading(false);
	}
	async function loadDocuments(applicationId) {
		const { data, error } = await supabase.from("program_documents").select("*").eq("application_id", applicationId).order("created_at", { ascending: true });
		if (error) {
			setMessage(error.message);
			setDocuments([]);
			return;
		}
		const safeDocuments = data || [];
		setDocuments(safeDocuments);
		setSignedUrls(await createSignedUrls(safeDocuments));
	}
	async function createSignedUrls(items) {
		const entries = await Promise.all(items.map(async (document) => {
			const { data, error } = await supabase.storage.from(EDUCATION_DOCUMENT_BUCKET).createSignedUrl(document.file_path, 3600);
			if (error || !data?.signedUrl) return null;
			return [document.id, data.signedUrl];
		}));
		return Object.fromEntries(entries.filter(Boolean));
	}
	const details = (0, import_react.useMemo)(() => application?.details || {}, [application]);
	async function handleSave(event) {
		event.preventDefault();
		if (!application) return;
		setSaving(true);
		setMessage("");
		const numericApprovedAmount = approvedAmount.trim().length > 0 ? Number(approvedAmount) : null;
		if (numericApprovedAmount !== null && (Number.isNaN(numericApprovedAmount) || numericApprovedAmount < 0)) {
			setMessage("Approved amount valid number hona chahiye.");
			setSaving(false);
			return;
		}
		const payload = {
			status,
			admin_remarks: adminRemarks.trim() || null,
			approved_amount: numericApprovedAmount,
			assigned_admin_id: assignedAdminId || null,
			reviewed_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (status === "approved") payload.approved_at = (/* @__PURE__ */ new Date()).toISOString();
		if (status === "paid_completed" || status === "completed") payload.completed_at = (/* @__PURE__ */ new Date()).toISOString();
		const { error } = await supabase.from("program_applications").update(payload).eq("id", application.id).eq("program_key", "education");
		if (error) {
			setMessage(error.message);
			setSaving(false);
			return;
		}
		if (status === "approved") {
			const { data: { user } } = await supabase.auth.getUser();
			const { error: documentVerifyError } = await supabase.from("program_documents").update({
				verification_status: "verified",
				is_verified: true,
				verified_by: user?.id ?? null,
				verified_at: (/* @__PURE__ */ new Date()).toISOString(),
				admin_note: "Verified during application approval."
			}).eq("application_id", application.id).eq("program_key", "education");
			if (documentVerifyError) {
				setMessage(`Application approved, lekin documents verify nahi ho sake: ${documentVerifyError.message}`);
				setSaving(false);
				await loadApplication();
				return;
			}
		}
		setSaving(false);
		await loadApplication();
		setMessage(status === "approved" ? "Application approved and all documents verified successfully." : "Application review saved successfully.");
	}
	async function handleDocumentSave({ documentId, nextStatus, adminNote }) {
		setDocumentSavingId(documentId);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Document verify karne ke liye login required hai.");
			setDocumentSavingId(null);
			return;
		}
		const { error } = await supabase.from("program_documents").update({
			verification_status: nextStatus,
			is_verified: nextStatus === "verified",
			admin_note: adminNote.trim() || null,
			verified_by: user.id,
			verified_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", documentId);
		if (error) {
			setMessage(error.message);
			setDocumentSavingId(null);
			return;
		}
		if (application) await loadDocuments(application.id);
		setDocumentSavingId(null);
		setMessage("Document verification updated.");
	}
	function handleMarkUnderReview() {
		setStatus("under_review");
		setAdminRemarks((prev) => prev || "Application is now under review.");
	}
	function handleAssignToMe() {
		if (!currentUserId) {
			setMessage("Reviewer assign karne ke liye login required hai.");
			return;
		}
		setAssignedAdminId(currentUserId);
		setStatus((prev) => prev === "submitted" ? "under_review" : prev);
		setAdminRemarks((prev) => prev || "Reviewer assigned and application is under review.");
	}
	function handleClearReviewer() {
		setAssignedAdminId("");
	}
	async function handleGoBack() {
		await navigate({ to: "/admin/programs/education" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-10 text-white md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleGoBack,
					className: "inline-flex items-center text-sm font-bold text-amber-300 transition hover:text-amber-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), copy.program.detailBack]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-amber-300" }), "Application Review"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-black md:text-6xl",
							children: copy.program.detailBadge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
							children: "Student details, uploaded documents, support request and admin decision."
						})
					] }), application ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-white/10 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-black text-white",
							children: application.application_no || "Application"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-white/70",
							children: [
								"Submitted:",
								" ",
								new Date(application.created_at).toLocaleDateString()
							]
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
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
							to: "/admin/programs/education",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-red-700 px-5 py-3 font-black !text-white no-underline",
							style: { color: "#ffffff" },
							children: "Back to Applications"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[1fr_420px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, { application }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: copy.program.studentDetails,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }),
								items: [
									[copy.program.studentName, application.applicant_name],
									["CNIC / B-form", application.applicant_cnic || "-"],
									["Phone", application.phone],
									["Email", application.email || "-"],
									["Relationship", application.relationship_to_member],
									[copy.common.membershipNo, application.membership_no],
									["District", application.district || "-"],
									["Taluka", application.taluka || "-"],
									["Address", application.address || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: copy.program.academicDetails,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-5 w-5" }),
								items: [
									["Guardian Name", details.guardian_name || "-"],
									["Institute Name", details.institute_name || "-"],
									["Institute Type", details.institute_type || "-"],
									["Class / Degree", details.class_degree || "-"],
									["Board / University", details.board_university || "-"],
									["Academic Year", details.academic_year || "-"],
									["Last Exam", details.last_exam || "-"],
									["Total Marks", details.total_marks || "-"],
									["Obtained Marks", details.obtained_marks || "-"],
									["Percentage / GPA", details.percentage || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: copy.program.supportRequest,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" }),
								items: [
									[copy.program.supportType, details.support_type || "-"],
									["Required Amount", details.required_amount ? `Rs. ${details.required_amount}` : "-"],
									["Reason / Need Details", details.reason || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsReviewSection, {
								documents,
								signedUrls,
								savingId: documentSavingId,
								onSave: handleDocumentSave
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Timeline",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" }),
								items: [
									[copy.common.submittedAt, application.submitted_at ? new Date(application.submitted_at).toLocaleString() : "-"],
									["Reviewed At", application.reviewed_at ? new Date(application.reviewed_at).toLocaleString() : "-"],
									["Approved At", application.approved_at ? new Date(application.approved_at).toLocaleString() : "-"],
									["Completed At", application.completed_at ? new Date(application.completed_at).toLocaleString() : "-"]
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "lg:sticky lg:top-6 lg:self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSave,
							className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black text-slate-950",
									children: "Admin Review"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-7 text-slate-600",
									children: "Status update, approved amount aur admin remarks yahan save karen."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-700",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: status,
											onChange: (event) => setStatus(event.target.value),
											className: "rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
											children: statusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item,
												children: getEducationStatusLabel(item)
											}, item))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-amber-700",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-black text-slate-800",
													children: "Assigned Reviewer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 break-all text-xs font-semibold text-slate-500",
													children: assignedAdminId ? assignedAdminId === currentUserId ? "Assigned to you" : `Assigned: ${assignedAdminId}` : "No reviewer assigned yet"
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 grid gap-3 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleAssignToMe,
												className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-900",
												children: copy.common.assignToMe
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleClearReviewer,
												className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50",
												children: "Clear"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-700",
											children: copy.common.approvedAmount
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: approvedAmount,
											onChange: (event) => setApprovedAmount(event.target.value),
											placeholder: "e.g. 5000",
											type: "number",
											min: "0",
											className: "rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-700",
											children: "Admin Remarks"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: adminRemarks,
											onChange: (event) => setAdminRemarks(event.target.value),
											placeholder: "Add review remarks, missing document note, approval reason, or rejection reason...",
											rows: 7,
											className: "rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
										})]
									}),
									message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700",
										children: message
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleMarkUnderReview,
											className: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-800 transition hover:bg-slate-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-2 h-4 w-4" }), "Set Under Review"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: saving,
											className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
											children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), copy.common.saveReview]
										})]
									})
								]
							})]
						})
					})]
				})
			})
		})]
	});
}
function SummaryCard({ application }) {
	const { copy } = useAdminProgramsCopy("education");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-5 md:flex-row md:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
						children: application.application_no || "Application"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full border px-3 py-1 text-xs font-black ${getEducationStatusClass(application.status)}`,
						children: getEducationStatusLabel(application.status)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-black text-slate-950",
					children: application.applicant_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-semibold text-slate-500",
					children: [
						copy.common.membershipNo,
						": ",
						application.membership_no
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-semibold text-slate-500",
					children: ["Reviewer: ", application.assigned_admin_id ? "Assigned" : "Unassigned"]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 md:text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black text-slate-950",
					children: application.approved_amount ? `Rs. ${Number(application.approved_amount)}` : "Amount Pending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: copy.common.approvedAmount
				})]
			})]
		}), application.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Current Admin Remarks:" }),
				" ",
				application.admin_remarks
			]
		}) : null]
	});
}
function DocumentsReviewSection({ documents, signedUrls, savingId, onSave }) {
	const { copy } = useAdminProgramsCopy("education");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: copy.common.documentVerification
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Uploaded documents open karen, verify/reject karen, aur admin note save karen."
			})] })]
		}), documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-slate-50 p-5 text-sm font-semibold text-slate-600",
			children: "No documents uploaded with this application."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentReviewCard, {
				document,
				signedUrl: signedUrls[document.id],
				saving: savingId === document.id,
				onSave
			}, document.id))
		})]
	});
}
function DocumentReviewCard({ document, signedUrl, saving, onSave }) {
	const { copy } = useAdminProgramsCopy("education");
	const [nextStatus, setNextStatus] = (0, import_react.useState)(normalizeDocumentStatus(document.verification_status));
	const [adminNote, setAdminNote] = (0, import_react.useState)(document.admin_note || "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-black text-slate-950",
						children: getEducationDocumentLabel(document.document_type)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full border px-3 py-1 text-xs font-black ${getEducationDocumentStatusClass(document.verification_status)}`,
						children: getEducationDocumentStatusLabel(document.verification_status)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-slate-600",
					children: [
						document.file_name || "Uploaded file",
						" ·",
						" ",
						formatEducationFileSize(document.file_size)
					]
				}),
				signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: signedUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-4 inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-black !text-white no-underline transition hover:bg-emerald-900 hover:!text-white",
					style: { color: "#ffffff" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Open Document"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-4 inline-flex rounded-xl bg-slate-200 px-5 py-3 text-sm font-black text-slate-600",
					children: "File unavailable"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-black text-slate-700",
							children: "Verification Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: nextStatus,
							onChange: (event) => setNextStatus(event.target.value),
							className: "rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
							children: documentStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: getEducationDocumentStatusLabel(item)
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-black text-slate-700",
							children: "Admin Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: adminNote,
							onChange: (event) => setAdminNote(event.target.value),
							placeholder: copy.common.documentNote,
							rows: 3,
							className: "rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: saving,
						onClick: () => onSave({
							documentId: document.id,
							nextStatus,
							adminNote
						}),
						className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
						children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), "Save Document"]
					})
				]
			})]
		})
	});
}
function normalizeDocumentStatus(status) {
	if (status === "verified" || status === "rejected" || status === "needs_reupload" || status === "pending") return status;
	return "pending";
}
function InfoSection({ title, icon, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-2",
			children: items.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-slate-50 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.16em] text-slate-400",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-800",
					children: value
				})]
			}, label))
		})]
	});
}
//#endregion
export { AdminEducationApplicationDetailPage as component };
