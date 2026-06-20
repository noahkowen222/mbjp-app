import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAdminProgramsCopy } from "./admin-programs-i18n-C30wBAvA.mjs";
import { _ as getShortlistStatusLabel, h as getEmploymentStatusLabel, l as formatSkills, m as getEmploymentStatusClass, u as getCurrentEmploymentStatusLabel } from "./employment-CLgEhxZ8.mjs";
import { C as RefreshCw, I as LoaderCircle, Ot as ArrowRight, Q as Funnel, l as UserCheck, mt as CircleX, ot as Download, r as Users, v as ShieldAlert, xt as BriefcaseBusiness, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess, s as getAreaAccessSummaryText } from "./area-permissions-Hs7OJQCz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employment-D54j0S9G.js
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
function AdminEmploymentRoute() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") === "/admin/programs/employment") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEmploymentApplicationsPage, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function AdminEmploymentApplicationsPage() {
	const { copy } = useAdminProgramsCopy("employment");
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	const [, setAreaNotice] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [districtFilter, setDistrictFilter] = (0, import_react.useState)("all");
	const [talukaFilter, setTalukaFilter] = (0, import_react.useState)("all");
	const [skillFilter, setSkillFilter] = (0, import_react.useState)("");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApplications();
	}, []);
	async function ensureAccess() {
		return loadCurrentAdminAreaAccess("employment", "view", { requiredRoles: [
			"admin",
			"super_admin",
			"employment_admin"
		] });
	}
	async function loadApplications() {
		setLoading(true);
		setMessage("");
		setAreaNotice("");
		const access = await ensureAccess();
		if (!access.ok) {
			setMessage(access.message);
			setApplications([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, phone, district, taluka, details, status, assigned_admin_id, admin_remarks, submitted_at, created_at").eq("program_key", "employment").order("created_at", { ascending: false });
		if (error) {
			setMessage(error.message);
			setApplications([]);
		} else {
			setApplications(filterRowsByAreaAccess(data || [], access));
			setAreaNotice(getAreaAccessSummaryText(access));
		}
		setLoading(false);
	}
	const districtOptions = (0, import_react.useMemo)(() => uniqueOptions(applications.map((item) => item.district)), [applications]);
	const talukaOptions = (0, import_react.useMemo)(() => {
		return uniqueOptions((districtFilter === "all" ? applications : applications.filter((item) => normalize(item.district) === districtFilter)).map((item) => item.taluka));
	}, [applications, districtFilter]);
	const filteredApplications = (0, import_react.useMemo)(() => {
		const q = searchTerm.trim().toLowerCase();
		const skill = skillFilter.trim().toLowerCase();
		return applications.filter((item) => {
			const details = item.details || {};
			const skillsText = formatSkills(details.skills).toLowerCase();
			const matchesStatus = statusFilter === "all" || item.status === statusFilter;
			const matchesDistrict = districtFilter === "all" || normalize(item.district) === districtFilter;
			const matchesTaluka = talukaFilter === "all" || normalize(item.taluka) === talukaFilter;
			const matchesSkill = !skill || skillsText.includes(skill);
			const matchesSearch = !q || [
				item.application_no,
				item.applicant_name,
				item.membership_no,
				item.phone,
				item.district,
				item.taluka,
				details.education_level,
				details.field_of_study,
				details.preferred_job_location,
				details.expected_salary,
				details.current_employment_status,
				details.shortlist_status,
				skillsText
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(q));
			return matchesStatus && matchesDistrict && matchesTaluka && matchesSkill && matchesSearch;
		}).sort((a, b) => {
			const aPlaced = a.details?.shortlist_status === "placed" ? 1 : 0;
			const bPlaced = b.details?.shortlist_status === "placed" ? 1 : 0;
			if (aPlaced !== bPlaced) return bPlaced - aPlaced;
			return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
		});
	}, [
		applications,
		districtFilter,
		searchTerm,
		skillFilter,
		statusFilter,
		talukaFilter
	]);
	const stats = (0, import_react.useMemo)(() => ({
		total: applications.length,
		filtered: filteredApplications.length,
		underReview: applications.filter((item) => item.status === "under_review").length,
		shortlisted: applications.filter((item) => item.details?.shortlist_status === "shortlisted" || item.status === "approved").length,
		placed: applications.filter((item) => item.details?.shortlist_status === "placed" || item.status === "paid_completed").length
	}), [applications, filteredApplications.length]);
	function resetFilters() {
		setStatusFilter("all");
		setDistrictFilter("all");
		setTalukaFilter("all");
		setSkillFilter("");
		setSearchTerm("");
	}
	function exportCsv() {
		const headers = [
			"serial",
			"application_no",
			"status",
			"applicant_name",
			"membership_no",
			"phone",
			"district",
			"taluka",
			"education",
			"skills",
			"preferred_location",
			"expected_salary",
			"current_status",
			"shortlist_status",
			"submitted_at"
		];
		const rows = filteredApplications.map((item, index) => {
			const details = item.details || {};
			return {
				serial: index + 1,
				application_no: item.application_no || "",
				status: getEmploymentStatusLabel(item.status),
				applicant_name: item.applicant_name,
				membership_no: item.membership_no,
				phone: item.phone,
				district: item.district || "",
				taluka: item.taluka || "",
				education: details.education_level || "",
				skills: formatSkills(details.skills),
				preferred_location: details.preferred_job_location || "",
				expected_salary: details.expected_salary || "",
				current_status: getCurrentEmploymentStatusLabel(details.current_employment_status),
				shortlist_status: getShortlistStatusLabel(details.shortlist_status),
				submitted_at: item.created_at ? new Date(item.created_at).toLocaleString() : ""
			};
		});
		const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n");
		const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `mbjp-employment-candidates-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Employment Program",
		subtitle: "Review employment support, skills, shortlist and placement applications.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-nested-page admin-program-admin-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-slate-950 px-4 py-12 text-white md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "inline-flex items-center text-sm font-bold text-emerald-300 no-underline hover:text-emerald-200",
						children: copy.common.backToAdmin
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 text-emerald-300" }),
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
								onClick: exportCsv,
								disabled: loading || filteredApplications.length === 0,
								className: "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20 disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.exportCsv
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: loadApplications,
								disabled: loading,
								className: "inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300 disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}` }),
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
							className: "grid gap-4 md:grid-cols-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.total,
									value: stats.total,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.filtered,
									value: stats.filtered,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.underReview,
									value: stats.underReview,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.shortlisted,
									value: stats.shortlisted,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.common.placed,
									value: stats.placed,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 xl:grid-cols-[1fr_180px_180px_180px_180px_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "relative block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: searchTerm,
											onChange: (event) => setSearchTerm(event.target.value),
											placeholder: copy.program.searchPlaceholder,
											className: "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 font-semibold outline-none focus:border-emerald-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: skillFilter,
										onChange: (event) => setSkillFilter(event.target.value),
										placeholder: copy.program.skillFilter,
										className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none focus:border-emerald-500"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: statusFilter,
										onChange: (event) => setStatusFilter(event.target.value),
										className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none focus:border-emerald-500",
										children: statusOptions.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: status,
											children: status === "all" ? copy.common.allStatuses : getEmploymentStatusLabel(status)
										}, status))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: districtFilter,
										onChange: (event) => {
											setDistrictFilter(event.target.value);
											setTalukaFilter("all");
										},
										className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none focus:border-emerald-500",
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
										className: "rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none focus:border-emerald-500",
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
										className: "inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 hover:bg-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), " Reset"]
									})
								]
							})
						}),
						loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-emerald-500" })
						}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-800 shadow-sm",
							children: message
						}) : filteredApplications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
							children: "No employment profiles found."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5",
							children: filteredApplications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateCard, { item }, item.id))
						})
					]
				})
			})]
		})
	});
}
function CandidateCard({ item }) {
	const { copy } = useAdminProgramsCopy("employment");
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
								children: item.application_no || "Candidate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getEmploymentStatusClass(item.status)}`,
								children: getEmploymentStatusLabel(item.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700",
								children: getShortlistStatusLabel(details.shortlist_status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: item.assigned_admin_id ? "rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700" : "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Education:" }),
								" ",
								details.education_level || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Skills:" }),
								" ",
								formatSkills(details.skills)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Location:" }),
								" ",
								details.preferred_job_location || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Salary:" }),
								" ",
								details.expected_salary || "-"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Current:" }),
								" ",
								getCurrentEmploymentStatusLabel(details.current_employment_status)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Submitted:" }),
								" ",
								new Date(item.created_at).toLocaleDateString()
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col justify-end gap-4 lg:min-w-[190px] lg:items-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/programs/employment/$id",
					params: { id: item.id },
					className: "mbjp-dark-action-link inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-black no-underline transition",
					children: [
						copy.common.review,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
					]
				})
			})]
		})
	});
}
function StatCard({ title, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700",
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
function uniqueOptions(values) {
	const map = /* @__PURE__ */ new Map();
	for (const value of values) {
		const label = value?.trim();
		if (!label) continue;
		const normalized = normalize(label);
		if (!map.has(normalized)) map.set(normalized, label);
	}
	return Array.from(map.entries()).map(([value, label]) => ({
		value,
		label
	})).sort((a, b) => a.label.localeCompare(b.label));
}
function normalize(value) {
	return value?.trim().toLowerCase() || "";
}
function csvCell(value) {
	return `"${String(value).replace(/"/g, "\"\"")}"`;
}
//#endregion
export { AdminEmploymentRoute as component };
