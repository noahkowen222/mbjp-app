import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./admin-programs-i18n-C30wBAvA.mjs";
import { C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, Q as Funnel, Tt as BadgeIndianRupee, Z as GraduationCap, _ as ShieldCheck, bt as CalendarDays, ft as ClipboardList, l as UserCheck, mt as CircleX, ot as Download, y as Search } from "../_libs/lucide-react.mjs";
import { d as getEducationStatusLabel, u as getEducationStatusClass } from "./education-BvnDNjVw.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess, s as getAreaAccessSummaryText } from "./area-permissions-Hs7OJQCz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-CUC526gH.js
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
function AdminEducationRoute() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") === "/admin/programs/education") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEducationApplicationsPage, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function AdminEducationApplicationsPage() {
	const { copy } = useAdminProgramsCopy("education");
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	const [areaNotice, setAreaNotice] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [districtFilter, setDistrictFilter] = (0, import_react.useState)("all");
	const [talukaFilter, setTalukaFilter] = (0, import_react.useState)("all");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function loadApplications() {
		setLoading(true);
		setMessage("");
		setAreaNotice("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Admin panel dekhne ke liye pehle login karen.");
			setApplications([]);
			setLoading(false);
			return;
		}
		const areaAccess = await loadCurrentAdminAreaAccess("education", "view", { requiredRoles: [
			"admin",
			"super_admin",
			"education_admin"
		] });
		if (!areaAccess.ok) {
			setMessage(areaAccess.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, relationship_to_member, phone, district, taluka, details, status, assigned_admin_id, admin_remarks, approved_amount, submitted_at, created_at").eq("program_key", "education").order("created_at", { ascending: false });
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
		return applications.filter((item) => {
			const matchesStatus = statusFilter === "all" ? true : item.status === statusFilter;
			const matchesDistrict = districtFilter === "all" ? true : normalizeValue(item.district) === districtFilter;
			const matchesTaluka = talukaFilter === "all" ? true : normalizeValue(item.taluka) === talukaFilter;
			const details = item.details || {};
			const matchesSearch = q ? [
				item.application_no,
				item.applicant_name,
				item.membership_no,
				item.phone,
				item.district,
				item.taluka,
				details.institute_name,
				details.class_degree,
				details.board_university,
				details.support_type,
				details.required_amount
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(q)) : true;
			return matchesStatus && matchesDistrict && matchesTaluka && matchesSearch;
		});
	}, [
		applications,
		districtFilter,
		searchTerm,
		statusFilter,
		talukaFilter
	]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: applications.length,
			filtered: filteredApplications.length,
			submitted: applications.filter((item) => item.status === "submitted").length,
			underReview: applications.filter((item) => item.status === "under_review").length,
			approved: applications.filter((item) => item.status === "approved").length,
			completed: applications.filter((item) => ["paid_completed", "completed"].includes(item.status)).length
		};
	}, [applications, filteredApplications.length]);
	function resetFilters() {
		setStatusFilter("all");
		setDistrictFilter("all");
		setTalukaFilter("all");
		setSearchTerm("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Education Program",
		subtitle: "Review scholarship, fee support and education assistance applications.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-nested-page admin-program-admin-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-amber-300" }), copy.program.adminBadge]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 text-4xl font-black md:text-6xl",
										children: copy.program.listTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
										children: "Scholarship, fee support aur skills training applications ko district/taluka filters, CSV report, reviewer assignment aur document verification ke sath manage karen."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2 lg:min-w-[360px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => exportEducationCsv(filteredApplications),
									disabled: loading || filteredApplications.length === 0,
									className: "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), copy.common.exportCsv]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: loadApplications,
									disabled: loading,
									className: "inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:opacity-60",
									children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), copy.common.refresh]
								})]
							})]
						})]
					})
				}),
				areaNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex max-w-full items-center rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-black text-amber-900 shadow-sm",
							children: areaNotice
						})
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-10 md:py-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: copy.common.total,
										value: stats.total,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: copy.common.filtered,
										value: stats.filtered,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: copy.common.submitted,
										value: stats.submitted,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: copy.common.underReview,
										value: stats.underReview,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: copy.common.approved,
										value: stats.approved,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: "Completed",
										value: stats.completed,
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 xl:grid-cols-[1fr_220px_220px_220px_auto]",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: statusFilter,
											onChange: (event) => setStatusFilter(event.target.value),
											className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
											children: statusOptions.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: status,
												children: status === "all" ? copy.common.allStatuses : getEducationStatusLabel(status)
											}, status))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: districtFilter,
											onChange: (event) => setDistrictFilter(event.target.value),
											className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: copy.common.allDistricts
											}), districtOptions.map((district) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: district.value,
												children: district.label
											}, district.value))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: talukaFilter,
											onChange: (event) => setTalukaFilter(event.target.value),
											className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "all",
												children: copy.common.allTalukas
											}), talukaOptions.map((taluka) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: taluka.value,
												children: taluka.label
											}, taluka.value))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: resetFilters,
											className: "inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), "Reset"]
										})
									]
								})
							}),
							loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
							}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-800 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black",
									children: "Unable to load applications"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold",
									children: message
								})]
							}) : filteredApplications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black text-slate-950",
									children: "No education applications found"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-3 max-w-2xl text-slate-600",
									children: "Selected status, district, taluka ya search ke according koi application nahi mili."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5",
								children: filteredApplications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationListCard, { item }, item.id))
							})
						]
					})
				})
			]
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
function ApplicationListCard({ item }) {
	const { copy } = useAdminProgramsCopy("education");
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
								className: `rounded-full border px-3 py-1 text-xs font-black ${getEducationStatusClass(item.status)}`,
								children: getEducationStatusLabel(item.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700",
								children: details.support_type || "Education Support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-3 py-1 text-xs font-black ${item.assigned_admin_id ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`,
								children: item.assigned_admin_id ? "Reviewer Assigned" : "Unassigned"
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Institute:" }),
								" ",
								details.institute_name || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Class/Degree:" }),
								" ",
								details.class_degree || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Required:" }),
								" ",
								details.required_amount ? `Rs. ${details.required_amount}` : "-"
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
					to: "/admin/programs/education/$id",
					params: { id: item.id },
					"aria-label": `{copy.common.review} ${item.applicant_name} education application`,
					className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-black no-underline transition",
					children: [copy.common.review, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
				})]
			})]
		})
	});
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
function exportEducationCsv(items) {
	const rows = items.map((item, index) => {
		const details = item.details || {};
		return {
			serial: index + 1,
			application_no: item.application_no || "",
			status: getEducationStatusLabel(item.status),
			applicant_name: item.applicant_name,
			membership_no: item.membership_no,
			phone: item.phone,
			district: item.district || "",
			taluka: item.taluka || "",
			institute_name: details.institute_name || "",
			class_degree: details.class_degree || "",
			board_university: details.board_university || "",
			support_type: details.support_type || "",
			required_amount: details.required_amount || "",
			approved_amount: item.approved_amount ?? "",
			submitted_at: item.submitted_at ? new Date(item.submitted_at).toLocaleString() : "",
			assigned_reviewer: item.assigned_admin_id ? "Assigned" : "Unassigned",
			admin_remarks: item.admin_remarks || ""
		};
	});
	const headers = [
		"serial",
		"application_no",
		"status",
		"applicant_name",
		"membership_no",
		"phone",
		"district",
		"taluka",
		"institute_name",
		"class_degree",
		"board_university",
		"support_type",
		"required_amount",
		"approved_amount",
		"submitted_at",
		"assigned_reviewer",
		"admin_remarks"
	];
	const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => escapeCsvValue(row[header])).join(","))].join("\n");
	const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `mbjp-education-applications-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function escapeCsvValue(value) {
	return `"${String(value).replace(/"/g, "\"\"")}"`;
}
//#endregion
export { AdminEducationRoute as component };
