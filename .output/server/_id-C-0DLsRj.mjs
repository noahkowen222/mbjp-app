import { i as __toESM } from "./_runtime.mjs";
import { t as supabase } from "./_ssr/client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, I as LoaderCircle, Tt as BadgeIndianRupee, Z as GraduationCap, _ as ShieldCheck, bt as CalendarDays, i as User, kt as ArrowLeft, ot as Download, pt as ClipboardCheck } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_id-BuFEJsJl.mjs";
import { c as getEducationDocumentStatusClass, d as getEducationStatusLabel, l as getEducationDocumentStatusLabel, n as EDUCATION_DOCUMENT_BUCKET, o as formatEducationFileSize, s as getEducationDocumentLabel, u as getEducationStatusClass } from "./_ssr/education-BvnDNjVw.mjs";
import { t as useProgramTrackingCopy } from "./_ssr/program-tracking-i18n-Bv7uyClU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-C-0DLsRj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EducationApplicationDetailPage() {
	const { copy, textDir, textAlignClass, iconBeforeClass } = useProgramTrackingCopy("education");
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
		const { data, error } = await supabase.from("program_applications").select("*").eq("id", id).eq("program_key", "education").eq("applicant_user_id", user.id).maybeSingle();
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
		const { data: documentRows, error: documentError } = await supabase.from("program_documents").select("*").eq("application_id", row.id).order("created_at", { ascending: true });
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
			const { data, error } = await supabase.storage.from(EDUCATION_DOCUMENT_BUCKET).createSignedUrl(document.file_path, 3600);
			if (error || !data?.signedUrl) return null;
			return [document.id, data.signedUrl];
		}));
		return Object.fromEntries(entries.filter(Boolean));
	}
	const details = (0, import_react.useMemo)(() => application?.details || {}, [application]);
	async function handleBack() {
		await navigate({ to: "/programs/education/my-applications" });
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
					className: "inline-flex items-center text-sm font-bold text-amber-300 transition hover:text-amber-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: `${iconBeforeClass} h-4 w-4` }), copy.program.detailBack]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: textAlignClass,
						dir: textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-amber-300" }), "Education Application Detail"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 text-4xl font-black md:text-6xl",
								children: "Application Detail"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
								children: "Student details, support request, uploaded documents and admin decision yahan dekhen."
							})
						]
					}), application ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-white/10 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-black text-white",
							children: application.application_no || "Application"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-white/70",
							children: [
								copy.common.submitted,
								":",
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
							children: "Application not available"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/education/my-applications",
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
								labels: {
									membershipNo: copy.common.membershipNo,
									approvedAmount: copy.common.approvedAmount,
									adminRemarks: copy.common.adminRemarks
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
								title: "Student / Applicant Details",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }),
								items: [
									["Student Name", application.applicant_name],
									["CNIC / B-form", application.applicant_cnic || "-"],
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
								title: "Institute & {copy.program.academicDetails}",
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
								title: copy.program.supportType,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" }),
								items: [
									["Support Type", details.support_type || "-"],
									["Required Amount", details.required_amount ? `Rs. ${details.required_amount}` : "-"],
									["Reason / Need Details", details.reason || "-"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsSection, {
								documents,
								signedUrls
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6 lg:sticky lg:top-6 lg:self-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPanel, { application }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoSection, {
							title: "Timeline",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" }),
							items: [
								[`${copy.common.submitted} At`, application.submitted_at ? new Date(application.submitted_at).toLocaleString() : "-"],
								["Reviewed At", application.reviewed_at ? new Date(application.reviewed_at).toLocaleString() : "-"],
								["Approved At", application.approved_at ? new Date(application.approved_at).toLocaleString() : "-"],
								["Completed At", application.completed_at ? new Date(application.completed_at).toLocaleString() : "-"]
							]
						})]
					})]
				})
			})
		})]
	});
}
function SummaryCard({ application, labels }) {
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
						labels.membershipNo,
						": ",
						application.membership_no
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 md:text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black text-slate-950",
					children: application.approved_amount ? `Rs. ${Number(application.approved_amount)}` : "Amount Pending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: labels.approvedAmount
				})]
			})]
		}), application.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [labels.adminRemarks, ":"] }),
				" ",
				application.admin_remarks
			]
		}) : null]
	});
}
function StatusPanel({ application }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Application Status"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-black ${getEducationStatusClass(application.status)}`,
				children: getEducationStatusLabel(application.status)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-7 text-slate-600",
				children: "Admin review ke baad status yahan update hota rahega. Agar admin ne remarks add kiye hain to woh application summary me show honge."
			})
		]
	});
}
function DocumentsSection({ documents, signedUrls }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-slate-950",
				children: "Uploaded Documents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Admin verification status har document ke sath show hoga."
			})] })]
		}), documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-slate-50 p-5 text-sm font-semibold text-slate-600",
			children: "No documents found."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: documents.map((document) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
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
							className: "mt-1 text-sm text-slate-600",
							children: [
								document.file_name || "Uploaded file",
								" ·",
								" ",
								formatEducationFileSize(document.file_size)
							]
						}),
						document.admin_note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 rounded-xl bg-white p-3 text-sm text-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin Note:" }),
								" ",
								document.admin_note
							]
						}) : null
					] }), signedUrls[document.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: signedUrls[document.id],
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-black !text-white no-underline transition hover:bg-emerald-900 hover:!text-white",
						style: { color: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Open File"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-xl bg-slate-200 px-5 py-3 text-sm font-black text-slate-600",
						children: "File unavailable"
					})]
				})
			}, document.id))
		})]
	});
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
export { EducationApplicationDetailPage as component };
