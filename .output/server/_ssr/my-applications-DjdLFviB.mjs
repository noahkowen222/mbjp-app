import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, Tt as BadgeIndianRupee, Y as HeartPulse, _ as ShieldCheck, bt as CalendarDays, f as TriangleAlert } from "../_libs/lucide-react.mjs";
import { b as isHealthEmergency, h as getHealthStatusLabel, m as getHealthStatusClass, p as getHealthPaymentStatusLabel } from "./health-BJr3C9Mk.mjs";
import { t as useProgramTrackingCopy } from "./program-tracking-i18n-Bv7uyClU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-applications-DjdLFviB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MyHealthApplicationsPage() {
	const { copy, arrowClass } = useProgramTrackingCopy("health");
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function loadApplications(options) {
		if (options?.silent) setRefreshing(true);
		else setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Health applications dekhne ke liye pehle login karen.");
			setApplications([]);
			setLoading(false);
			setRefreshing(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, district, taluka, details, status, admin_remarks, approved_amount, submitted_at, created_at").eq("program_key", "health").eq("applicant_user_id", user.id).order("created_at", { ascending: false });
		if (error) {
			setMessage(error.message);
			setApplications([]);
			setLoading(false);
			setRefreshing(false);
			return;
		}
		setApplications(data || []);
		setLoading(false);
		setRefreshing(false);
	}
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: applications.length,
			emergency: applications.filter((item) => isHealthEmergency(item.details)).length,
			approved: applications.filter((item) => item.status === "approved").length,
			completed: applications.filter((item) => ["paid_completed", "completed"].includes(item.status)).length
		};
	}, [applications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-14 text-white md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-red-300" }), copy.program.listTitle]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-black md:text-6xl",
								children: "Track Medical Help Requests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-8 text-white/75",
								children: "Apni submitted medical help applications, status, approved support and admin remarks yahan dekhen."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void loadApplications({ silent: true }),
						disabled: refreshing || loading,
						className: "inline-flex w-fit items-center justify-center rounded-xl bg-red-400 px-5 py-3 font-black text-slate-950 transition hover:bg-red-300 disabled:opacity-60",
						children: [refreshing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), "Refresh"]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.common.total,
							value: stats.total,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Emergency",
							value: stats.emergency,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Approved",
							value: stats.approved,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Completed",
							value: stats.completed,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
						})
					]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-red-500" })
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
							className: "mbjp-dark-action-link mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 font-black no-underline",
							children: "Login"
						})
					]
				}) : applications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: "No health applications yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-slate-600",
							children: "Aap ne abhi koi medical help application submit nahi ki."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/health/apply",
							className: "mt-6 inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 font-black text-slate-950 no-underline transition hover:bg-red-400",
							children: "Apply Now"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: applications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthApplicationCard, {
						item,
						labels: {
							payment: copy.program.caseDetails,
							viewDetails: copy.common.viewDetails
						},
						arrowClass
					}, item.id))
				})]
			})
		})]
	});
}
function StatCard({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-700",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-black uppercase tracking-[0.18em] text-slate-400",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-3xl font-black text-slate-950",
				children: value
			})
		]
	});
}
function HealthApplicationCard({ item, labels, arrowClass }) {
	const details = item.details || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
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
								children: item.application_no || "Application"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getHealthStatusClass(item.status)}`,
								children: getHealthStatusLabel(item.status)
							}),
							isHealthEmergency(details) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-800",
								children: "Emergency"
							}) : null
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Treatment:" }),
								" ",
								details.treatment_type || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hospital:" }),
								" ",
								details.hospital_name || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Required:" }),
								" ",
								details.required_amount ? `Rs. ${details.required_amount}` : "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [labels.payment, ":"] }),
								" ",
								getHealthPaymentStatusLabel(details.payment_status)
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
				className: "flex flex-col justify-between gap-4 lg:min-w-[190px] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 lg:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-black text-slate-950",
						children: new Date(item.created_at).toLocaleDateString()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: item.approved_amount ? `Approved: Rs. ${Number(item.approved_amount)}` : "Approval pending"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/programs/health/$id",
					params: { id: item.id },
					className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-black no-underline transition",
					children: [labels.viewDetails, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
				})]
			})]
		})
	});
}
//#endregion
export { MyHealthApplicationsPage as component };
