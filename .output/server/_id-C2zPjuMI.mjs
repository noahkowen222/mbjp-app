import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, Tt as BadgeIndianRupee, Y as HeartPulse, _ as ShieldCheck, et as FileHeart, f as TriangleAlert, i as User, kt as ArrowLeft, m as Stethoscope, ot as Download } from "./_libs/lucide-react.mjs";
import { b as isHealthEmergency, c as getHealthCommitteeDecisionClass, d as getHealthDocumentStatusClass, f as getHealthDocumentStatusLabel, h as getHealthStatusLabel, i as formatHealthFileSize, l as getHealthCommitteeDecisionLabel, m as getHealthStatusClass, n as HEALTH_DOCUMENT_BUCKET, o as getHealthCasePriorityClass, p as getHealthPaymentStatusLabel, s as getHealthCasePriorityLabel, u as getHealthDocumentLabel } from "./_ssr/health-BJr3C9Mk.mjs";
import { t as useProgramTrackingCopy } from "./_ssr/program-tracking-i18n-Bv7uyClU.mjs";
import { t as Route } from "./_id-DKmUZc8S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-C2zPjuMI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HealthApplicationDetailPage() {
	const { copy } = useProgramTrackingCopy("health");
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [application, setApplication] = (0, import_react.useState)(null);
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [signedUrls, setSignedUrls] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(true);
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
			setMessage("Application detail dekhne ke liye pehle login karen.");
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("*").eq("id", id).eq("program_key", "health").eq("applicant_user_id", user.id).maybeSingle();
		if (error) {
			setMessage(error.message);
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		if (!data) {
			setMessage(copy.common.caseNotFound);
			setApplication(null);
			setDocuments([]);
			setLoading(false);
			return;
		}
		const row = data;
		setApplication(row);
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
	const details = (0, import_react.useMemo)(() => application?.details || {}, [application]);
	async function handleBack() {
		await navigate({ to: "/programs/health/my-applications" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-10 text-white md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleBack,
					className: "inline-flex items-center text-sm font-bold text-red-300 transition hover:text-red-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to My Health Applications"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-red-300" }), "Health Application Detail"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-black md:text-6xl",
							children: "Medical Case Detail"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
							children: "Patient details, support request, uploaded medical documents and admin decision yahan dekhen."
						})
					] }), application ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-white/10 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-black text-white",
							children: application.application_no || "Application"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-white/70",
							children: ["Submitted: ", new Date(application.created_at).toLocaleDateString()]
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
							children: "Application not available"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/health/my-applications",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-red-700 px-5 py-3 font-black text-white no-underline",
							children: "Back to Applications"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[1fr_380px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								application,
								details
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Patient / Applicant Details",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }),
								items: [
									["Patient Name", application.applicant_name],
									["CNIC / B-form", application.applicant_cnic || "-"],
									["Age", details.patient_age || "-"],
									["Gender", details.patient_gender || "-"],
									["Guardian Name", details.guardian_name || "-"],
									[copy.common.phone, application.phone],
									["Email", application.email || "-"],
									["Relationship", application.relationship_to_member],
									["Membership No", application.membership_no],
									["District", application.district || "-"],
									["Taluka", application.taluka || "-"],
									[copy.common.address, application.address || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Medical Case Details",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5" }),
								items: [
									["Disease / Condition", details.disease_name || "-"],
									["Treatment Type", details.treatment_type || "-"],
									["Hospital Name", details.hospital_name || "-"],
									["Doctor Name", details.doctor_name || "-"],
									["Doctor Contact", details.doctor_contact || "-"],
									["Estimated Cost", details.estimated_cost ? `Rs. ${details.estimated_cost}` : "-"],
									["Required Support", details.required_amount ? `Rs. ${details.required_amount}` : "-"],
									["Emergency", isHealthEmergency(details) ? "Yes" : "No"],
									["Case Summary", details.case_summary || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsSection, {
								documents,
								signedUrls,
								noDocumentsLabel: copy.common.noDocuments
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionCard, {
							application,
							details
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-1 h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black",
									children: "Medical Privacy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6",
									children: "Apne medical documents aur case details sirf trusted admin/committee review ke liye share karen. Public QR verification page par medical data show nahi hota."
								})] })]
							})
						})]
					})]
				})
			})
		})]
	});
}
function SummaryCard({ application, details }) {
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
				children: ["Membership No: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: application.membership_no })]
			})
		]
	});
}
function DecisionCard({ application, details }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Admin Decision"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4 text-sm text-slate-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Status:" }),
						" ",
						getHealthStatusLabel(application.status)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Approved Amount:" }),
						" ",
						application.approved_amount ? `Rs. ${Number(application.approved_amount)}` : "Pending"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payment Status:" }),
						" ",
						getHealthPaymentStatusLabel(details.payment_status)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Case Priority:" }),
						" ",
						getHealthCasePriorityLabel(details)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Committee Decision:" }),
						" ",
						getHealthCommitteeDecisionLabel(details.health_committee_decision)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Submitted:" }),
						" ",
						new Date(application.submitted_at).toLocaleString()
					] }),
					application.reviewed_at ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Reviewed:" }),
						" ",
						new Date(application.reviewed_at).toLocaleString()
					] }) : null,
					application.approved_at ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Approved:" }),
						" ",
						new Date(application.approved_at).toLocaleString()
					] }) : null,
					application.completed_at ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Closed:" }),
						" ",
						new Date(application.completed_at).toLocaleString()
					] }) : null
				]
			}),
			application.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin Remarks:" }),
					" ",
					application.admin_remarks
				]
			}) : null,
			details.health_committee_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-purple-50 p-4 text-sm text-purple-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Committee Decision Notes:" }),
					" ",
					details.health_committee_remarks
				]
			}) : null,
			details.medical_committee_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-blue-50 p-4 text-sm text-blue-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Medical Committee Remarks:" }),
					" ",
					details.medical_committee_remarks
				]
			}) : null,
			details.follow_up_notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Follow-up Notes:" }),
					" ",
					details.follow_up_notes
				]
			}) : null,
			details.case_close_report ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Case Close Report:" }),
					" ",
					details.case_close_report
				]
			}) : null
		]
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
function DocumentsSection({ documents, signedUrls, noDocumentsLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileHeart, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Medical Documents"
			})]
		}), documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600",
			children: noDocumentsLabel
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
					document.admin_note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 rounded-xl bg-white p-3 text-sm text-slate-600",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin note:" }),
							" ",
							document.admin_note
						]
					}) : null,
					signedUrls[document.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: signedUrls[document.id],
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-black text-white no-underline transition hover:bg-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Open Document"]
					}) : null
				]
			}, document.id))
		})]
	});
}
//#endregion
export { HealthApplicationDetailPage as component };
