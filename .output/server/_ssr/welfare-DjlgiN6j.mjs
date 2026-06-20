import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./admin-programs-i18n-C30wBAvA.mjs";
import { C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, Q as Funnel, Tt as BadgeIndianRupee, X as HandHeart, _ as ShieldCheck, l as UserCheck, mt as CircleX, ot as Download, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { a as formatWelfareMoney, c as getWelfareCommitteeDecisionClass, g as isWelfareEmergency, h as getWelfareStatusLabel, l as getWelfareCommitteeDecisionLabel, m as getWelfareStatusClass, o as getWelfareCasePriorityClass, p as getWelfarePaymentStatusLabel, s as getWelfareCasePriorityLabel, y as sortWelfareCasesByPriority } from "./welfare-ytsTeUG3.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess, s as getAreaAccessSummaryText } from "./area-permissions-Hs7OJQCz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/welfare-DjlgiN6j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusOptions = [
	"all",
	"submitted",
	"under_review",
	"need_more_info",
	"approved",
	"rejected",
	"paid_completed",
	"completed"
];
var priorityOptions = [
	"all",
	"emergency",
	"urgent",
	"normal"
];
var paymentOptions = [
	"all",
	"not_started",
	"pending",
	"approved",
	"partially_released",
	"released",
	"completed"
];
var committeeOptions = [
	"all",
	"pending",
	"recommended",
	"not_recommended",
	"approved",
	"rejected",
	"deferred"
];
function AdminWelfareRoute() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") === "/admin/programs/welfare") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminWelfareApplicationsPage, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function AdminWelfareApplicationsPage() {
	const { copy } = useAdminProgramsCopy("welfare");
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	const [areaNotice, setAreaNotice] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [districtFilter, setDistrictFilter] = (0, import_react.useState)("all");
	const [talukaFilter, setTalukaFilter] = (0, import_react.useState)("all");
	const [emergencyFilter, setEmergencyFilter] = (0, import_react.useState)("all");
	const [priorityFilter, setPriorityFilter] = (0, import_react.useState)("all");
	const [paymentFilter, setPaymentFilter] = (0, import_react.useState)("all");
	const [committeeFilter, setCommitteeFilter] = (0, import_react.useState)("all");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function loadApplications() {
		setLoading(true);
		setMessage("");
		setAreaNotice("");
		const access = await ensureWelfareAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		const areaAccess = await loadCurrentAdminAreaAccess("welfare", "view", { requiredRoles: [
			"admin",
			"super_admin",
			"welfare_admin",
			"ration_admin"
		] });
		if (!areaAccess.ok) {
			setMessage(areaAccess.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, relationship_to_member, phone, district, taluka, details, status, assigned_admin_id, admin_remarks, approved_amount, submitted_at, created_at").eq("program_key", "welfare").order("created_at", { ascending: false });
		if (error) {
			setMessage(error.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		setApplications(filterRowsByAreaAccess(data || [], areaAccess));
		setAreaNotice(getAreaAccessSummaryText(areaAccess));
		setLoading(false);
	}
	const districtOptions = (0, import_react.useMemo)(() => getUniqueOptions(applications.map((item) => item.district)), [applications]);
	const talukaOptions = (0, import_react.useMemo)(() => {
		return getUniqueOptions((districtFilter === "all" ? applications : applications.filter((item) => normalizeValue(item.district) === districtFilter)).map((item) => item.taluka));
	}, [applications, districtFilter]);
	(0, import_react.useEffect)(() => {
		if (talukaFilter !== "all" && !talukaOptions.some((item) => item.value === talukaFilter)) setTalukaFilter("all");
	}, [talukaFilter, talukaOptions]);
	const filteredApplications = (0, import_react.useMemo)(() => {
		const q = searchTerm.trim().toLowerCase();
		return sortWelfareCasesByPriority(applications.filter((item) => {
			const details = item.details || {};
			const priority = details.case_priority || (isWelfareEmergency(details) ? "emergency" : "normal");
			const payment = details.payment_status || "not_started";
			const committee = details.welfare_committee_decision || "pending";
			const matchesStatus = statusFilter === "all" ? true : item.status === statusFilter;
			const matchesDistrict = districtFilter === "all" ? true : normalizeValue(item.district) === districtFilter;
			const matchesTaluka = talukaFilter === "all" ? true : normalizeValue(item.taluka) === talukaFilter;
			const matchesEmergency = emergencyFilter === "all" ? true : emergencyFilter === "emergency" ? isWelfareEmergency(details) : !isWelfareEmergency(details);
			const matchesPriority = priorityFilter === "all" ? true : priority === priorityFilter;
			const matchesPayment = paymentFilter === "all" ? true : payment === paymentFilter;
			const matchesCommittee = committeeFilter === "all" ? true : committee === committeeFilter;
			const matchesSearch = q ? [
				item.application_no,
				item.applicant_name,
				item.membership_no,
				item.phone,
				item.district,
				item.taluka,
				details.case_type,
				details.reason,
				details.required_amount,
				details.welfare_committee_members
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(q)) : true;
			return matchesStatus && matchesDistrict && matchesTaluka && matchesEmergency && matchesPriority && matchesPayment && matchesCommittee && matchesSearch;
		}));
	}, [
		applications,
		committeeFilter,
		districtFilter,
		emergencyFilter,
		paymentFilter,
		priorityFilter,
		searchTerm,
		statusFilter,
		talukaFilter
	]);
	const stats = (0, import_react.useMemo)(() => ({
		total: applications.length,
		filtered: filteredApplications.length,
		newCases: applications.filter((item) => item.status === "submitted").length,
		underReview: applications.filter((item) => item.status === "under_review").length,
		approved: applications.filter((item) => item.status === "approved").length,
		released: applications.filter((item) => ["paid_completed", "completed"].includes(item.status)).length,
		emergency: applications.filter((item) => isWelfareEmergency(item.details)).length
	}), [applications, filteredApplications.length]);
	function resetFilters() {
		setStatusFilter("all");
		setDistrictFilter("all");
		setTalukaFilter("all");
		setEmergencyFilter("all");
		setPriorityFilter("all");
		setPaymentFilter("all");
		setCommitteeFilter("all");
		setSearchTerm("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Welfare Program",
		subtitle: "Review welfare cases, committee decisions and support status.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-nested-page admin-program-admin-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-slate-950 px-4 py-12 text-white md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "inline-flex items-center text-sm font-bold text-amber-300 no-underline hover:text-amber-200",
						children: copy.common.backToAdmin
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-4 w-4 text-amber-300" }),
										" ",
										copy.program.adminBadge
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-4xl font-black md:text-6xl",
									children: copy.program.listTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
									children: copy.program.listSubtitle
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:min-w-[360px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => exportWelfareCsv(filteredApplications),
								disabled: loading || filteredApplications.length === 0,
								className: "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.exportCsv
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: loadApplications,
								disabled: loading,
								className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
								children: [
									loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.refresh
								]
							})]
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.total,
									value: stats.total,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.filtered,
									value: stats.filtered,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.new,
									value: stats.newCases,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.verify,
									value: stats.underReview,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.approved,
									value: stats.approved,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.released,
									value: stats.released,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.emergency,
									value: stats.emergency,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 xl:grid-cols-[1fr_170px_170px_170px_150px_150px_170px_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "relative block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: searchTerm,
											onChange: (event) => setSearchTerm(event.target.value),
											placeholder: copy.program.searchPlaceholder,
											className: "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 font-semibold outline-none transition focus:border-amber-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: statusFilter,
										onChange: setStatusFilter,
										options: statusOptions.map((status) => ({
											value: status,
											label: status === "all" ? copy.common.allStatuses : getWelfareStatusLabel(status)
										}))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: districtFilter,
										onChange: setDistrictFilter,
										options: [{
											value: "all",
											label: copy.common.allDistricts
										}, ...districtOptions]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: talukaFilter,
										onChange: setTalukaFilter,
										options: [{
											value: "all",
											label: copy.common.allTalukas
										}, ...talukaOptions]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: emergencyFilter,
										onChange: setEmergencyFilter,
										options: [
											{
												value: "all",
												label: "All Cases"
											},
											{
												value: "emergency",
												label: "Emergency"
											},
											{
												value: "normal",
												label: "Normal"
											}
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: priorityFilter,
										onChange: setPriorityFilter,
										options: priorityOptions.map((value) => ({
											value,
											label: value === "all" ? "Priority" : value
										}))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: paymentFilter,
										onChange: setPaymentFilter,
										options: paymentOptions.map((value) => ({
											value,
											label: value === "all" ? "Fund Status" : getWelfarePaymentStatusLabel(value)
										}))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: resetFilters,
										className: "inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), " Reset"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-4 md:grid-cols-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									value: committeeFilter,
									onChange: setCommitteeFilter,
									options: committeeOptions.map((value) => ({
										value,
										label: value === "all" ? "Committee Decision" : getWelfareCommitteeDecisionLabel(value)
									}))
								})
							})]
						}),
						areaNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800",
							children: areaNotice
						}) : null,
						loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
						}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-800 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black",
								children: "Unable to load welfare cases"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-semibold",
								children: message
							})]
						}) : filteredApplications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-slate-950",
								children: "No welfare cases found"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-2xl text-slate-600",
								children: "Selected filters ke according koi case nahi mila."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5",
							children: filteredApplications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationListCard, { item }, item.id))
						})
					]
				})
			})]
		})
	});
}
function ApplicationListCard({ item }) {
	const { copy } = useAdminProgramsCopy("welfare");
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
								children: item.application_no || "Welfare Case"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getWelfareStatusClass(item.status)}`,
								children: getWelfareStatusLabel(item.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getWelfareCasePriorityClass(details)}`,
								children: getWelfareCasePriorityLabel(details)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getWelfareCommitteeDecisionClass(details.welfare_committee_decision)}`,
								children: getWelfareCommitteeDecisionLabel(details.welfare_committee_decision)
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone:" }),
								" ",
								item.phone
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Case Type:" }),
								" ",
								details.case_type || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Required:" }),
								" ",
								formatWelfareMoney(details.required_amount)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fund:" }),
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
					to: "/admin/programs/welfare/$id",
					params: { id: item.id },
					className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-black no-underline transition",
					children: [
						copy.common.review,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
					]
				})]
			})]
		})
	});
}
function StatCard({ title, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-black uppercase tracking-[0.18em] text-slate-400",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-3xl font-black text-slate-950",
				children: value
			})
		]
	});
}
function Select({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (event) => onChange(event.target.value),
		className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option.value,
			children: option.label
		}, option.value))
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
		message: "Aap ke account ko welfare admin access nahi mila."
	};
}
function getUniqueOptions(values) {
	const map = /* @__PURE__ */ new Map();
	for (const value of values) {
		const label = value?.trim();
		if (!label) continue;
		const normalized = normalizeValue(label);
		if (!map.has(normalized)) map.set(normalized, label);
	}
	return Array.from(map.entries()).map(([value, label]) => ({
		value,
		label
	})).sort((a, b) => a.label.localeCompare(b.label));
}
function normalizeValue(value) {
	return value?.trim().toLowerCase() || "";
}
function exportWelfareCsv(items) {
	const headers = [
		"serial",
		"application_no",
		"status",
		"applicant_name",
		"membership_no",
		"phone",
		"district",
		"taluka",
		"case_type",
		"required_amount",
		"approved_amount",
		"fund_status",
		"committee_decision",
		"submitted_at",
		"admin_remarks"
	];
	const rows = items.map((item, index) => {
		const details = item.details || {};
		return {
			serial: index + 1,
			application_no: item.application_no || "",
			status: getWelfareStatusLabel(item.status),
			applicant_name: item.applicant_name,
			membership_no: item.membership_no,
			phone: item.phone,
			district: item.district || "",
			taluka: item.taluka || "",
			case_type: details.case_type || "",
			required_amount: details.required_amount || "",
			approved_amount: item.approved_amount ?? "",
			fund_status: getWelfarePaymentStatusLabel(details.payment_status),
			committee_decision: getWelfareCommitteeDecisionLabel(details.welfare_committee_decision),
			submitted_at: item.submitted_at ? new Date(item.submitted_at).toLocaleString() : "",
			admin_remarks: item.admin_remarks || ""
		};
	});
	const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => escapeCsvValue(row[header])).join(","))].join("\n");
	const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `mbjp-welfare-cases-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function escapeCsvValue(value) {
	return `"${String(value).replace(/"/g, "\"\"")}"`;
}
//#endregion
export { AdminWelfareRoute as component };
