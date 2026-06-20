import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, X as HandHeart } from "../_libs/lucide-react.mjs";
import { t as useProgramTrackingCopy } from "./program-tracking-i18n-Bv7uyClU.mjs";
import { a as formatWelfareMoney, h as getWelfareStatusLabel, m as getWelfareStatusClass, o as getWelfareCasePriorityClass, p as getWelfarePaymentStatusLabel, s as getWelfareCasePriorityLabel } from "./welfare-ytsTeUG3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-applications-DqBRXMEC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MyWelfareApplicationsPage() {
	const { copy, arrowClass } = useProgramTrackingCopy("welfare");
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function loadApplications() {
		setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Apni welfare cases dekhne ke liye pehle login karen.");
			setApplications([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, district, taluka, details, status, approved_amount, admin_remarks, created_at").eq("program_key", "welfare").eq("applicant_user_id", user.id).order("created_at", { ascending: false });
		if (error) {
			setMessage(error.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		setApplications(data || []);
		setLoading(false);
	}
	const stats = (0, import_react.useMemo)(() => ({
		total: applications.length,
		open: applications.filter((item) => !["rejected", "completed"].includes(item.status)).length,
		approved: applications.filter((item) => [
			"approved",
			"paid_completed",
			"completed"
		].includes(item.status)).length
	}), [applications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-14 text-white md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-4 w-4 text-amber-300" }), copy.program.listTitle]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-black md:text-6xl",
							children: "Track your cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
							children: "Submitted welfare support cases, status, remarks and approved support amount yahan track karen."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/welfare/apply",
							className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 no-underline",
							children: "New Case"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: loadApplications,
							disabled: loading,
							className: "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white disabled:opacity-60",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), "Refresh"]
						})]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Total",
							value: stats.total
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Open",
							value: stats.open
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Approved/Released",
							value: stats.approved
						})
					]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
				}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center text-amber-900 shadow-sm",
					children: message
				}) : applications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: copy.program.emptyTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-slate-600",
							children: "Abhi koi welfare application submit nahi hui."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/welfare/apply",
							className: "mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-black text-white no-underline",
							children: "Apply Now"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: applications.map((item) => {
						const details = item.details || {};
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 lg:grid-cols-[1fr_auto]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
													children: item.application_no || copy.program.detailBadge
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full border px-3 py-1 text-xs font-black ${getWelfareStatusClass(item.status)}`,
													children: getWelfareStatusLabel(item.status)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full border px-3 py-1 text-xs font-black ${getWelfareCasePriorityClass(details)}`,
													children: getWelfareCasePriorityLabel(details)
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl font-black text-slate-950",
											children: item.applicant_name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm font-semibold text-slate-500",
											children: ["Membership No: ", item.membership_no]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2 text-sm text-slate-600 md:grid-cols-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Case Type:" }),
													" ",
													details.case_type || "-"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "District:" }),
													" ",
													item.district || "-"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Taluka:" }),
													" ",
													item.taluka || "-"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Required:" }),
													" ",
													formatWelfareMoney(details.required_amount)
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Approved:" }),
													" ",
													item.approved_amount ? formatWelfareMoney(item.approved_amount) : "-"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.fundStatus, ":"] }),
													" ",
													getWelfarePaymentStatusLabel(details.payment_status)
												] })
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
									className: "flex flex-col justify-between gap-4 lg:min-w-[170px] lg:items-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 lg:text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-black text-slate-950",
											children: new Date(item.created_at).toLocaleDateString()
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs/welfare/$id",
										params: { id: item.id },
										className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-black no-underline transition",
										children: [
											copy.common.viewDetails,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })
										]
									})]
								})]
							})
						}, item.id);
					})
				})]
			})
		})]
	});
}
function StatCard({ title, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-black uppercase tracking-[0.18em] text-slate-400",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-3xl font-black text-slate-950",
			children: value
		})]
	});
}
//#endregion
export { MyWelfareApplicationsPage as component };
