import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, y as Search } from "../_libs/lucide-react.mjs";
import { d as getEducationStatusLabel, u as getEducationStatusClass } from "./education-BvnDNjVw.mjs";
import { t as useProgramTrackingCopy } from "./program-tracking-i18n-Bv7uyClU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-applications-RctjuwGp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyDocumentSummary = {
	total: 0,
	pending: 0,
	verified: 0,
	rejected: 0,
	needs_reupload: 0
};
function MyEducationApplicationsPage() {
	const { copy, arrowClass } = useProgramTrackingCopy("education");
	const [items, setItems] = (0, import_react.useState)([]);
	const [documentSummary, setDocumentSummary] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function loadApplications(options) {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Applications dekhne ke liye pehle login karen.");
			setItems([]);
			setDocumentSummary({});
			setLoading(false);
			setRefreshing(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, district, taluka, details, status, admin_remarks, approved_amount, created_at").eq("program_key", "education").eq("applicant_user_id", user.id).order("created_at", { ascending: false }).returns();
		if (error) {
			setMessage(error.message);
			setItems([]);
			setDocumentSummary({});
			setLoading(false);
			setRefreshing(false);
			return;
		}
		const rows = data ?? [];
		setItems(rows);
		await loadDocumentSummary(rows.map((item) => item.id));
		setLoading(false);
		setRefreshing(false);
	}
	async function loadDocumentSummary(applicationIds) {
		if (applicationIds.length === 0) {
			setDocumentSummary({});
			return;
		}
		const { data, error } = await supabase.from("program_documents").select("application_id, verification_status").in("application_id", applicationIds);
		if (error) {
			console.error("Education document summary failed:", error.message);
			setDocumentSummary({});
			return;
		}
		const nextSummary = {};
		for (const applicationId of applicationIds) nextSummary[applicationId] = { ...emptyDocumentSummary };
		for (const document of data ?? []) {
			const applicationId = document.application_id;
			const status = document.verification_status;
			if (!nextSummary[applicationId]) nextSummary[applicationId] = { ...emptyDocumentSummary };
			nextSummary[applicationId].total += 1;
			if (status === "verified") nextSummary[applicationId].verified += 1;
			else if (status === "rejected") nextSummary[applicationId].rejected += 1;
			else if (status === "needs_reupload") nextSummary[applicationId].needs_reupload += 1;
			else nextSummary[applicationId].pending += 1;
		}
		setDocumentSummary(nextSummary);
	}
	const filteredItems = (0, import_react.useMemo)(() => {
		const query = searchTerm.trim().toLowerCase();
		if (!query) return items;
		return items.filter((item) => {
			const details = item.details || {};
			return [
				item.application_no,
				item.applicant_name,
				item.membership_no,
				item.district,
				item.taluka,
				item.status,
				details.institute_name,
				details.class_degree,
				details.support_type
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(query));
		});
	}, [items, searchTerm]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-14 text-white md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-black md:text-6xl",
						children: copy.program.listTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg leading-8 text-white/75",
						children: "Scholarship, fee support aur skills training applications ka status yahan track karen."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void loadApplications({ silent: true }),
						disabled: refreshing || loading,
						className: "inline-flex w-fit items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
						children: [refreshing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), refreshing ? copy.common.refreshing : copy.common.refresh]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
				}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: "Login Required"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-slate-600",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-black text-white no-underline",
							children: "Login"
						})
					]
				}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: "No education applications yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-slate-600",
							children: "Aapne abhi tak education support ke liye application submit nahi ki."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/programs/education/apply",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 no-underline",
							children: ["Apply Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl font-black text-slate-950",
								children: [copy.common.submitted, " Applications"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-slate-600",
								children: [
									"Showing ",
									filteredItems.length,
									" of ",
									items.length,
									" records."
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/programs/education/apply",
								className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 no-underline",
								children: [copy.program.newApplication, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: searchTerm,
								onChange: (event) => setSearchTerm(event.target.value),
								placeholder: "Search application no, name, membership no, institute, status...",
								className: "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 font-semibold outline-none transition focus:border-amber-500"
							})]
						}),
						filteredItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: "No matching applications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-slate-600",
								children: "Search text change kar ke dobara try karen."
							})]
						}) : filteredItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationCard, {
							item,
							summary: documentSummary[item.id] || { ...emptyDocumentSummary },
							viewDetailsLabel: copy.common.viewDetails,
							arrowClass
						}, item.id))
					]
				})
			})
		})]
	});
}
function ApplicationCard({ item, summary, viewDetailsLabel, arrowClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-5 lg:flex-row lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
								children: item.application_no || "Application"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getEducationStatusClass(item.status)}`,
								children: getEducationStatusLabel(item.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1 h-3.5 w-3.5" }),
									summary.total,
									" Documents"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-black text-slate-950",
						children: item.applicant_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 text-sm text-slate-600 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Membership No:" }),
								" ",
								item.membership_no
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "District/Taluka:" }),
								" ",
								item.district || "-",
								" /",
								" ",
								item.taluka || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Institute:" }),
								" ",
								item.details?.institute_name || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Class/Degree:" }),
								" ",
								item.details?.class_degree || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Support Type:" }),
								" ",
								item.details?.support_type || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Required Amount:" }),
								" ",
								item.details?.required_amount || "-"
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 text-xs font-black",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-emerald-50 px-3 py-1 text-emerald-700",
								children: ["Verified: ", summary.verified]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-slate-100 px-3 py-1 text-slate-700",
								children: ["Pending: ", summary.pending]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-amber-50 px-3 py-1 text-amber-700",
								children: ["Re-upload: ", summary.needs_reupload]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-red-50 px-3 py-1 text-red-700",
								children: ["Rejected Docs: ", summary.rejected]
							})
						]
					}),
					item.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-700",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin Remarks:" }),
							" ",
							item.admin_remarks
						]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-[190px] gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-black text-slate-950",
						children: new Date(item.created_at).toLocaleDateString()
					}), item.approved_amount ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: ["Approved: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["Rs. ", Number(item.approved_amount)] })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "Approval pending"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/programs/education/$id",
					params: { id: item.id },
					className: "inline-flex items-center justify-center rounded-xl bg-emerald-900 px-5 py-3 text-sm font-black !text-white no-underline transition hover:bg-emerald-800 hover:!text-white",
					style: { color: "#ffffff" },
					children: [viewDetailsLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
				})]
			})]
		})
	});
}
//#endregion
export { MyEducationApplicationsPage as component };
