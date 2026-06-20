import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, X as HandHeart, kt as ArrowLeft, nt as FileCheckCorner, ot as Download } from "./_libs/lucide-react.mjs";
import { t as useProgramTrackingCopy } from "./_ssr/program-tracking-i18n-Bv7uyClU.mjs";
import { t as Route } from "./_id-DSydUYr-.mjs";
import { a as formatWelfareMoney, d as getWelfareDocumentStatusClass, f as getWelfareDocumentStatusLabel, h as getWelfareStatusLabel, i as formatWelfareFileSize, l as getWelfareCommitteeDecisionLabel, m as getWelfareStatusClass, n as WELFARE_DOCUMENT_BUCKET, o as getWelfareCasePriorityClass, p as getWelfarePaymentStatusLabel, s as getWelfareCasePriorityLabel, u as getWelfareDocumentLabel } from "./_ssr/welfare-ytsTeUG3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-IqrQvmYC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WelfareApplicationDetailPage() {
	const { copy, textDir, textAlignClass, iconBeforeClass } = useProgramTrackingCopy("welfare");
	const { id } = Route.useParams();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
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
			setMessage("Case details dekhne ke liye pehle login karen.");
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, applicant_cnic, membership_no, relationship_to_member, phone, email, address, district, taluka, details, status, admin_remarks, approved_amount, submitted_at, created_at").eq("program_key", "welfare").eq("id", id).eq("applicant_user_id", user.id).single();
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
		setApplication(data);
		setDocuments(docs || []);
		setLoading(false);
	}
	async function openDocument(document) {
		const { data, error } = await supabase.storage.from(WELFARE_DOCUMENT_BUCKET).createSignedUrl(document.file_path, 600);
		if (error || !data?.signedUrl) {
			setMessage(error?.message || "Document open nahi ho saka.");
			return;
		}
		window.open(data.signedUrl, "_blank", "noopener,noreferrer");
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-slate-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
	});
	if (message || !application) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-12",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center text-amber-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black",
					children: copy.common.unableToLoad
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold",
					children: message || copy.common.caseNotFound
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/programs/welfare/my-applications",
					className: "mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-black text-white no-underline",
					children: copy.common.back
				})
			]
		})
	});
	const details = application.details || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-12 text-white md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/programs/welfare/my-applications",
					className: "inline-flex items-center text-sm font-bold text-amber-300 no-underline hover:text-amber-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: `${iconBeforeClass} h-4 w-4` }),
						" ",
						copy.program.detailBack
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: textAlignClass,
						dir: textDir,
						children: [
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
									copy.common.membershipNo,
									": ",
									application.membership_no
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full border px-4 py-2 text-sm font-black ${getWelfareStatusClass(application.status)}`,
							children: getWelfareStatusLabel(application.status)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full border px-4 py-2 text-sm font-black ${getWelfareCasePriorityClass(details)}`,
							children: getWelfareCasePriorityLabel(details)
						})]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
						title: copy.program.caseDetails,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoGrid, { rows: [
							[copy.program.caseType, details.case_type || "-"],
							[copy.common.requiredAmount, formatWelfareMoney(details.required_amount)],
							[copy.common.approvedAmount, application.approved_amount ? formatWelfareMoney(application.approved_amount) : "-"],
							[copy.program.fundStatus, getWelfarePaymentStatusLabel(details.payment_status)],
							[copy.program.committeeDecision, getWelfareCommitteeDecisionLabel(details.welfare_committee_decision)],
							[copy.common.districtTaluka, `${application.district || "-"} / ${application.taluka || "-"}`]
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.common.reason, ":"] }),
								" ",
								details.reason || "-"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: copy.program.committeeUpdates,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
									label: copy.common.adminRemarks,
									value: application.admin_remarks
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
									label: copy.program.verifierRemarks,
									value: details.verifier_remarks
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
									label: copy.program.committeeRemarks,
									value: details.welfare_committee_remarks
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
									label: copy.program.followUpNotes,
									value: details.follow_up_notes
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
									label: copy.program.caseCloseReport,
									value: details.case_close_report
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: copy.program.applicantInfo,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoGrid, { rows: [
							[copy.common.phone, application.phone],
							[copy.common.cnic, application.applicant_cnic || "-"],
							[copy.common.relation, application.relationship_to_member],
							[copy.common.address, application.address || "-"],
							[copy.common.submitted, new Date(application.submitted_at).toLocaleString()]
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
						title: copy.common.documents,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3",
							children: [documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-600",
								children: copy.common.noDocuments
							}) : null, documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openDocument(document),
								className: "text-left rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-amber-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-black text-slate-950",
											children: getWelfareDocumentLabel(document.document_type)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs font-semibold text-slate-500",
											children: [
												document.file_name || copy.common.document,
												" • ",
												formatWelfareFileSize(document.file_size)
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-slate-500" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-black ${getWelfareDocumentStatusClass(document.verification_status)}`,
										children: getWelfareDocumentStatusLabel(document.verification_status)
									}),
									document.admin_note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-xs font-semibold text-slate-600",
										children: [
											copy.common.note,
											": ",
											document.admin_note
										]
									}) : null
								]
							}, document.id))]
						})
					})]
				})]
			})
		})]
	});
}
function InfoCard({ title, children }) {
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
function Note({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [label, ":"] }),
			" ",
			value || "-"
		]
	});
}
//#endregion
export { WelfareApplicationDetailPage as component };
