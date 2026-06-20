import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as Activity, C as RefreshCw, I as LoaderCircle, Q as Funnel, _ as ShieldCheck, dt as Clock3, gt as CircleAlert, kt as ArrowLeft, o as UserRoundCheck, ot as Download, rt as Eye, st as Database, tt as FileClock, v as ShieldAlert, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-logs-Dpcnhm5l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var auditModuleOptions = [
	{
		value: "",
		label: "All modules"
	},
	{
		value: "membership",
		label: "Membership"
	},
	{
		value: "roles",
		label: "Roles"
	},
	{
		value: "area_permissions",
		label: "Area Permissions"
	},
	{
		value: "committees",
		label: "Committees"
	},
	{
		value: "education",
		label: "Education"
	},
	{
		value: "health",
		label: "Health"
	},
	{
		value: "welfare",
		label: "Welfare"
	},
	{
		value: "employment",
		label: "Employment"
	},
	{
		value: "finance",
		label: "Finance"
	},
	{
		value: "media",
		label: "News & Media"
	},
	{
		value: "cms",
		label: "CMS"
	},
	{
		value: "system",
		label: "System"
	}
];
var auditTableOptions = [
	{
		value: "",
		label: "All tables"
	},
	{
		value: "members",
		label: "Members"
	},
	{
		value: "user_roles",
		label: "User Roles"
	},
	{
		value: "admin_area_permissions",
		label: "Area Permissions"
	},
	{
		value: "program_applications",
		label: "Program Applications"
	},
	{
		value: "program_documents",
		label: "Program Documents"
	},
	{
		value: "finance_donations",
		label: "Finance Donations"
	},
	{
		value: "finance_expenses",
		label: "Finance Expenses"
	},
	{
		value: "organization_committees",
		label: "Committees"
	},
	{
		value: "organization_designations",
		label: "Designations"
	},
	{
		value: "organization_committee_members",
		label: "Office Bearers"
	},
	{
		value: "cms_pages",
		label: "CMS Pages"
	},
	{
		value: "news_posts",
		label: "News Posts"
	},
	{
		value: "gallery_items",
		label: "Gallery Items"
	},
	{
		value: "events",
		label: "Events"
	}
];
async function fetchAuditLogs(filters = {}) {
	const { data, error } = await supabase.rpc("get_audit_logs", {
		_module_key: filters.moduleKey || null,
		_entity_table: filters.entityTable || null,
		_actor_user_id: filters.actorUserId || null,
		_query: filters.query || "",
		_limit: filters.limit || 100
	});
	if (error) throw new Error(error.message || "Failed to load audit logs.");
	return data || [];
}
function getAuditModuleLabel(moduleKey) {
	if (!moduleKey) return "System";
	return auditModuleOptions.find((item) => item.value === moduleKey)?.label || toTitle(moduleKey);
}
function getAuditTableLabel(tableName) {
	if (!tableName) return "Unknown table";
	return auditTableOptions.find((item) => item.value === tableName)?.label || toTitle(tableName);
}
function getAuditActionLabel(action) {
	if (action === "insert") return "Created";
	if (action === "update") return "Updated";
	if (action === "delete") return "Deleted";
	return "Changed";
}
function getAuditActionClass(action) {
	if (action === "insert") return "border-emerald-200 bg-emerald-50 text-emerald-800";
	if (action === "update") return "border-amber-200 bg-amber-50 text-amber-800";
	if (action === "delete") return "border-red-200 bg-red-50 text-red-800";
	return "border-slate-200 bg-slate-50 text-slate-700";
}
function formatAuditDate(value) {
	if (!value) return "—";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "—";
	return new Intl.DateTimeFormat("en-PK", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(date);
}
function auditLogsToCsv(rows) {
	const header = [
		"created_at",
		"actor_email",
		"action",
		"action_label",
		"module_key",
		"entity_table",
		"entity_id",
		"record_label",
		"changed_data"
	];
	const lines = rows.map((row) => [
		row.created_at,
		row.actor_email || "",
		row.action,
		row.action_label,
		row.module_key,
		row.entity_table,
		row.entity_id || "",
		row.record_label || "",
		JSON.stringify(row.changed_data || {})
	].map(escapeCsv).join(","));
	return [header.join(","), ...lines].join("\n");
}
function downloadAuditCsv(rows) {
	const csv = auditLogsToCsv(rows);
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `mbjp-audit-logs-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}
function escapeCsv(value) {
	const normalized = value.replace(/\r?\n/g, " ");
	if (/[",]/.test(normalized)) return `"${normalized.replace(/"/g, "\"\"")}"`;
	return normalized;
}
function toTitle(value) {
	return value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (letter) => letter.toUpperCase());
}
function AdminAuditLogsPage() {
	const { copy } = useAdminManagementCopy("auditLogs");
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [moduleKey, setModuleKey] = (0, import_react.useState)("");
	const [entityTable, setEntityTable] = (0, import_react.useState)("");
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadLogs();
	}, []);
	const stats = (0, import_react.useMemo)(() => {
		return {
			updates: logs.filter((item) => item.action === "update").length,
			inserts: logs.filter((item) => item.action === "insert").length,
			deletes: logs.filter((item) => item.action === "delete").length,
			sensitive: logs.filter((item) => [
				"roles",
				"area_permissions",
				"finance",
				"committees"
			].includes(item.module_key)).length
		};
	}, [logs]);
	async function loadLogs(options) {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setError("");
		try {
			const { data: { user }, error: userError } = await supabase.auth.getUser();
			if (userError || !user) {
				await navigate({
					to: "/login",
					replace: true
				});
				return;
			}
			setLogs(await fetchAuditLogs({
				moduleKey,
				entityTable,
				query: search,
				limit: 150
			}));
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load audit logs.");
			setLogs([]);
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}
	function resetFilters() {
		setSearch("");
		setModuleKey("");
		setEntityTable("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Audit Logs",
		subtitle: "Review sensitive admin activity and database changes.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline hover:text-emerald-900",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), copy.common.backToAdmin]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-6 text-white md:p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), copy.page.badge]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 text-3xl font-black tracking-tight md:text-5xl",
										children: copy.page.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-base",
										children: copy.page.subtitle
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => downloadAuditCsv(logs),
										disabled: !logs.length,
										className: "inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), copy.common.exportCsv]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void loadLogs({ silent: true }),
										disabled: refreshing,
										className: "inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 shadow-sm transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), copy.common.refresh]
									})]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: copy.page.logsLoaded,
									value: logs.length,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileClock, { className: "h-5 w-5" }),
									tone: "slate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: copy.page.updates,
									value: stats.updates,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5" }),
									tone: "amber"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: copy.page.created,
									value: stats.inserts,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-5 w-5" }),
									tone: "emerald"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: copy.page.sensitiveModules,
									value: stats.sensitive,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5" }),
									tone: "red"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 lg:grid-cols-[1fr_220px_220px_auto_auto] lg:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: search,
										onChange: (event) => setSearch(event.target.value),
										onKeyDown: (event) => {
											if (event.key === "Enter") loadLogs({ silent: true });
										},
										className: "min-h-[3.25rem] w-full rounded-2xl border border-slate-200 bg-white px-12 text-base font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 sm:text-sm",
										placeholder: copy.page.searchPlaceholder
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: moduleKey,
									onChange: (event) => setModuleKey(event.target.value),
									className: "min-h-[3.25rem] rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 sm:text-sm",
									children: auditModuleOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item.value,
										children: item.label
									}, item.value || "all"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: entityTable,
									onChange: (event) => setEntityTable(event.target.value),
									className: "min-h-[3.25rem] rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 sm:text-sm",
									children: auditTableOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item.value,
										children: item.label
									}, item.value || "all"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadLogs({ silent: true }),
									className: "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-emerald-900",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), "Apply"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: resetFilters,
									className: "inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50",
									children: "Reset"
								})
							]
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[2rem] border border-red-200 bg-red-50 p-5 text-red-800 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-black",
								children: "Unable to load audit logs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold leading-6",
								children: error
							})] })]
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
									children: "Activity Trail"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-black text-slate-950",
									children: "Latest sensitive changes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-slate-500",
									children: "Showing up to 150 latest logs. Data snapshots redact CNIC/mobile and secret-like fields."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundCheck, { className: "h-4 w-4" }), "Super Admin Only"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-hidden rounded-3xl border border-slate-200",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-6 text-sm font-bold text-slate-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading audit logs..."]
							}) : logs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-slate-100",
								children: logs.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditLogItem, {
									row,
									expanded: expandedId === row.id,
									onToggle: () => setExpandedId((current) => current === row.id ? null : row.id)
								}, row.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "mx-auto h-10 w-10 text-slate-300" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-xl font-black text-slate-950",
										children: "No audit logs found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-slate-500",
										children: "Logs will appear after sensitive records are created, updated or deleted."
									})
								]
							})
						})]
					})
				]
			})
		})
	});
}
function MetricCard({ label, value, icon, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${tone === "emerald" ? "bg-emerald-50 text-emerald-800" : tone === "amber" ? "bg-amber-50 text-amber-800" : tone === "red" ? "bg-red-50 text-red-800" : "bg-slate-50 text-slate-800"}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.16em] text-slate-400",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-3xl font-black text-slate-950",
				children: value
			})
		]
	});
}
function AuditLogItem({ row, expanded, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-white p-4 transition hover:bg-slate-50 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-3 py-1 text-xs font-black ${getAuditActionClass(row.action)}`,
								children: getAuditActionLabel(row.action)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600",
								children: getAuditModuleLabel(row.module_key)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-500",
								children: getAuditTableLabel(row.entity_table)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 break-words text-lg font-black text-slate-950",
						children: row.action_label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 break-words text-sm font-semibold leading-6 text-slate-600",
						children: row.record_label || row.entity_id || "Record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2 text-xs font-bold text-slate-500 sm:grid-cols-2 xl:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Actor: ", row.actor_email || row.actor_user_id || "System / service role"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Time: ", formatAuditDate(row.created_at)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID: ", row.entity_id || "—"] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onToggle,
				className: "inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), expanded ? "Hide Details" : "View Details"]
			})]
		}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonPanel, {
				title: "Changed Fields",
				value: row.changed_data
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonPanel, {
				title: "New Snapshot",
				value: row.new_data
			})]
		}) : null]
	});
}
function JsonPanel({ title, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-[0.16em] text-amber-200",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-3 max-h-72 overflow-auto whitespace-pre-wrap break-words text-xs leading-6 text-slate-200",
			children: JSON.stringify(value || {}, null, 2)
		})]
	});
}
//#endregion
export { AdminAuditLogsPage as component };
