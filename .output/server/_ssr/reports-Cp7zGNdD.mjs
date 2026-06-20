import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as RefreshCw, I as LoaderCircle, M as MapPin, Tt as BadgeIndianRupee, kt as ArrowLeft, ot as Download, r as Users, v as ShieldAlert, xt as BriefcaseBusiness } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess } from "./area-permissions-Hs7OJQCz.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-Cp7zGNdD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var programLabels = {
	education: "Education",
	health: "Health",
	welfare: "Welfare",
	employment: "Employment"
};
var programKeys = [
	"education",
	"health",
	"welfare",
	"employment"
];
async function currentUserCanViewReports() {
	return (await loadCurrentAdminAreaAccess("reports", "view", { requiredRoles: ["admin", "super_admin"] })).ok;
}
async function loadReportsCenterData() {
	const areaAccess = await loadCurrentAdminAreaAccess("reports", "view", { requiredRoles: ["admin", "super_admin"] });
	if (!areaAccess.ok) throw new Error(areaAccess.message);
	const [membersResult, applicationsResult, donationsResult, expensesResult] = await Promise.all([
		supabase.from("members").select("id,status,district,taluka,created_at,approved_at,member_no").returns(),
		supabase.from("program_applications").select("id,program_key,status,district,taluka,approved_amount,created_at,submitted_at").in("program_key", programKeys).returns(),
		supabase.from("finance_donations").select("id,amount,purpose,payment_method,status,district,taluka,created_at,approved_at").returns(),
		supabase.from("finance_expenses").select("id,amount,category,linked_program_key,payment_method,status,district,taluka,created_at,paid_at").returns()
	]);
	if (membersResult.error) throw membersResult.error;
	if (applicationsResult.error) throw applicationsResult.error;
	if (donationsResult.error) throw donationsResult.error;
	if (expensesResult.error) throw expensesResult.error;
	const members = filterRowsByAreaAccess(membersResult.data ?? [], areaAccess);
	const applications = filterRowsByAreaAccess(applicationsResult.data ?? [], areaAccess);
	const donations = filterRowsByAreaAccess(donationsResult.data ?? [], areaAccess);
	const expenses = filterRowsByAreaAccess(expensesResult.data ?? [], areaAccess);
	const approvedDonations = donations.filter((item) => isApprovedStatus(item.status));
	const paidExpenses = expenses.filter((item) => isPaidExpenseStatus(item.status));
	const approvedDonationAmount = sumAmounts(approvedDonations);
	const paidExpenseAmount = sumAmounts(paidExpenses);
	const memberStatus = {
		pending: members.filter((item) => item.status === "pending").length,
		approved: members.filter((item) => item.status === "approved").length,
		rejected: members.filter((item) => item.status === "rejected").length
	};
	const programSummaries = buildProgramSummaries(applications);
	const districtSummaries = buildDistrictSummaries(members, applications, approvedDonations, paidExpenses);
	const financeByPurpose = buildFinanceByPurpose(approvedDonations, paidExpenses);
	const monthlySummaries = buildMonthlySummaries(members, applications, approvedDonations, paidExpenses);
	const recentActivity = buildRecentActivity(members, applications, donations, expenses);
	return {
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		metrics: [
			{
				label: "Total Members",
				value: members.length,
				helper: `${memberStatus.approved} approved members`
			},
			{
				label: "Pending Members",
				value: memberStatus.pending,
				helper: "Need membership review"
			},
			{
				label: "Program Applications",
				value: applications.length,
				helper: "Education, health, welfare and employment"
			},
			{
				label: "Approved Donations",
				value: formatCurrency(approvedDonationAmount),
				helper: `${approvedDonations.length} verified donation records`
			},
			{
				label: "Paid Expenses",
				value: formatCurrency(paidExpenseAmount),
				helper: `${paidExpenses.length} paid expense records`
			},
			{
				label: "Available Balance",
				value: formatCurrency(approvedDonationAmount - paidExpenseAmount),
				helper: "Approved donations minus paid expenses"
			}
		],
		memberStatus,
		programSummaries,
		districtSummaries,
		financeByPurpose,
		monthlySummaries,
		recentActivity
	};
}
function buildProgramSummaries(applications) {
	return programKeys.map((programKey) => {
		const rows = applications.filter((item) => item.program_key === programKey);
		return {
			programKey,
			label: programLabels[programKey],
			total: rows.length,
			pending: rows.filter((item) => isPendingStatus(item.status)).length,
			underReview: rows.filter((item) => isUnderReviewStatus(item.status)).length,
			approved: rows.filter((item) => isApprovedStatus(item.status)).length,
			rejected: rows.filter((item) => isRejectedStatus(item.status)).length,
			completed: rows.filter((item) => isCompletedStatus(item.status)).length,
			approvedAmount: sumApprovedAmounts(rows)
		};
	});
}
function buildDistrictSummaries(members, applications, approvedDonations, paidExpenses) {
	return uniqueSorted([
		...members.map((item) => normalizeDistrict(item.district)),
		...applications.map((item) => normalizeDistrict(item.district)),
		...approvedDonations.map((item) => normalizeDistrict(item.district)),
		...paidExpenses.map((item) => normalizeDistrict(item.district))
	]).map((district) => ({
		district,
		members: members.filter((item) => normalizeDistrict(item.district) === district).length,
		approvedMembers: members.filter((item) => normalizeDistrict(item.district) === district && item.status === "approved").length,
		programApplications: applications.filter((item) => normalizeDistrict(item.district) === district).length,
		approvedDonations: sumAmounts(approvedDonations.filter((item) => normalizeDistrict(item.district) === district)),
		paidExpenses: sumAmounts(paidExpenses.filter((item) => normalizeDistrict(item.district) === district))
	})).sort((a, b) => b.members + b.programApplications - (a.members + a.programApplications)).slice(0, 12);
}
function buildFinanceByPurpose(approvedDonations, paidExpenses) {
	return uniqueSorted([...approvedDonations.map((item) => normalizePurpose(item.purpose)), ...paidExpenses.map((item) => normalizePurpose(item.linked_program_key ?? item.category))]).map((purpose) => {
		const donationRows = approvedDonations.filter((item) => normalizePurpose(item.purpose) === purpose);
		const expenseRows = paidExpenses.filter((item) => normalizePurpose(item.linked_program_key ?? item.category) === purpose);
		const approvedDonationAmount = sumAmounts(donationRows);
		const paidExpenseAmount = sumAmounts(expenseRows);
		return {
			purpose,
			approvedDonations: approvedDonationAmount,
			donationCount: donationRows.length,
			paidExpenses: paidExpenseAmount,
			expenseCount: expenseRows.length,
			balance: approvedDonationAmount - paidExpenseAmount
		};
	});
}
function buildMonthlySummaries(members, applications, approvedDonations, paidExpenses) {
	return buildLastMonths(6).map((month) => ({
		month,
		members: members.filter((item) => getMonthKey(item.created_at) === month).length,
		applications: applications.filter((item) => getMonthKey(item.created_at) === month).length,
		donations: sumAmounts(approvedDonations.filter((item) => getMonthKey(item.created_at) === month)),
		expenses: sumAmounts(paidExpenses.filter((item) => getMonthKey(item.created_at) === month))
	}));
}
function buildRecentActivity(members, applications, donations, expenses) {
	return [
		...members.map((item) => ({
			id: `member-${item.id}`,
			type: "member",
			title: item.member_no ? `Member ${item.member_no}` : "Membership application",
			status: item.status,
			date: item.created_at
		})),
		...applications.map((item) => ({
			id: `program-${item.id}`,
			type: "program",
			title: `${programLabels[item.program_key]} application`,
			status: item.status,
			date: item.created_at
		})),
		...donations.map((item) => ({
			id: `donation-${item.id}`,
			type: "donation",
			title: `${formatCurrency(item.amount)} donation for ${normalizePurpose(item.purpose)}`,
			status: item.status,
			date: item.created_at
		})),
		...expenses.map((item) => ({
			id: `expense-${item.id}`,
			type: "expense",
			title: `${formatCurrency(item.amount)} expense for ${normalizePurpose(item.linked_program_key ?? item.category)}`,
			status: item.status,
			date: item.created_at
		}))
	].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 12);
}
function buildLastMonths(count) {
	const months = [];
	const now = /* @__PURE__ */ new Date();
	for (let index = count - 1; index >= 0; index -= 1) {
		const date = new Date(now.getFullYear(), now.getMonth() - index, 1);
		months.push(getMonthKey(date.toISOString()));
	}
	return months;
}
function getMonthKey(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "Unknown";
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}
function isPendingStatus(status) {
	return [
		"new",
		"submitted",
		"pending",
		"pending_verification"
	].includes(status);
}
function isUnderReviewStatus(status) {
	return [
		"under_review",
		"under_verification",
		"need_more_info",
		"verified"
	].includes(status);
}
function isApprovedStatus(status) {
	return [
		"approved",
		"committee_approved",
		"paid",
		"fund_released"
	].includes(status);
}
function isRejectedStatus(status) {
	return [
		"rejected",
		"committee_rejected",
		"not_recommended"
	].includes(status);
}
function isCompletedStatus(status) {
	return [
		"completed",
		"paid_completed",
		"closed",
		"placed",
		"employed"
	].includes(status);
}
function isPaidExpenseStatus(status) {
	return [
		"paid",
		"completed",
		"closed"
	].includes(status);
}
function sumAmounts(rows) {
	return rows.reduce((total, row) => total + Number(row.amount ?? 0), 0);
}
function sumApprovedAmounts(rows) {
	return rows.reduce((total, row) => total + Number(row.approved_amount ?? 0), 0);
}
function normalizeDistrict(value) {
	return value?.trim() || "Not specified";
}
function normalizePurpose(value) {
	return (value?.trim() || "General Fund").split(/[_\s-]+/).filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
function uniqueSorted(values) {
	return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}
function formatCurrency(value) {
	return `Rs. ${Math.round(value).toLocaleString("en-PK")}`;
}
function formatReportDate(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function downloadReportCsv(filename, headers, rows) {
	const csv = [headers, ...rows].map((row) => row.map((cell) => csvCell(String(cell))).join(",")).join("\n");
	const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
function csvCell(value) {
	return `"${value.replace(/"/g, "\"\"")}"`;
}
function AdminReportsPage() {
	const { copy } = useAdminManagementCopy("reports");
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [data, setData] = (0, import_react.useState)(null);
	const loadData = (0, import_react.useCallback)(async (options) => {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setError("");
		try {
			if (!await currentUserCanViewReports()) {
				await navigate({ to: "/admin" });
				return;
			}
			setData(await loadReportsCenterData());
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load reports.");
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [navigate]);
	(0, import_react.useEffect)(() => {
		loadData();
	}, [loadData]);
	const totals = (0, import_react.useMemo)(() => {
		if (!data) return {
			totalDonations: 0,
			totalExpenses: 0,
			balance: 0
		};
		const totalDonations = data.financeByPurpose.reduce((total, item) => total + item.approvedDonations, 0);
		const totalExpenses = data.financeByPurpose.reduce((total, item) => total + item.paidExpenses, 0);
		return {
			totalDonations,
			totalExpenses,
			balance: totalDonations - totalExpenses
		};
	}, [data]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Reports",
		subtitle: "View organization summaries, exports and review reports.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm font-bold text-slate-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading reports center..."]
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Reports",
		subtitle: "View organization summaries, exports and review reports.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin",
										className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline hover:text-emerald-900",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), copy.common.backToAdmin]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
										children: copy.page.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
										children: copy.page.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-6 text-slate-600",
										children: copy.page.subtitle
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadData({ silent: true }),
									disabled: refreshing,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), copy.common.refresh]
								})]
							})
						}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
							children: data.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, { metric }, metric.label))
						}) : null]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-800 ring-1 ring-red-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
					}) : null,
					!data ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-4 xl:grid-cols-[1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
								title: "Program Applications",
								subtitle: "Application workflow summary by program",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, { onClick: () => downloadReportCsv(`mbjp-program-summary-${today()}.csv`, [
									"Program",
									copy.page.total,
									"Pending",
									"Under Review",
									"Approved",
									"Rejected",
									"Completed",
									"Approved Amount"
								], data.programSummaries.map((item) => [
									item.label,
									item.total,
									item.pending,
									item.underReview,
									item.approved,
									item.rejected,
									item.completed,
									item.approvedAmount
								])) }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: data.programSummaries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { item }, item.programKey))
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
								title: copy.page.financeSnapshot,
								subtitle: "Approved donations, paid expenses and available balance",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, { onClick: () => downloadReportCsv(`mbjp-finance-purpose-${today()}.csv`, [
									"Purpose",
									"Approved Donations",
									"Donation Count",
									"Paid Expenses",
									"Expense Count",
									"Balance"
								], data.financeByPurpose.map((item) => [
									item.purpose,
									item.approvedDonations,
									item.donationCount,
									item.paidExpenses,
									item.expenseCount,
									item.balance
								])) }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceTile, {
											label: "Donations",
											value: formatCurrency(totals.totalDonations),
											tone: "emerald"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceTile, {
											label: "Expenses",
											value: formatCurrency(totals.totalExpenses),
											tone: "amber"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceTile, {
											label: "Balance",
											value: formatCurrency(totals.balance),
											tone: "slate"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 overflow-x-auto rounded-2xl border border-slate-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full min-w-[560px] text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-slate-50 text-xs uppercase tracking-wide text-slate-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Purpose"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Donations"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Expenses"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Balance"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-slate-100",
											children: data.financeByPurpose.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "bg-white",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 font-bold text-slate-950",
														children: item.purpose
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "px-4 py-3 text-slate-700",
														children: [formatCurrency(item.approvedDonations), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "ml-1 text-xs text-slate-400",
															children: [
																"(",
																item.donationCount,
																")"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "px-4 py-3 text-slate-700",
														children: [formatCurrency(item.paidExpenses), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "ml-1 text-xs text-slate-400",
															children: [
																"(",
																item.expenseCount,
																")"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 font-black text-emerald-800",
														children: formatCurrency(item.balance)
													})
												]
											}, item.purpose))
										})]
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-4 xl:grid-cols-[1.1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
								title: "District Activity",
								subtitle: "Top districts by membership and program activity",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportButton, { onClick: () => downloadReportCsv(`mbjp-district-summary-${today()}.csv`, [
									"District",
									"Members",
									"Approved Members",
									"Program Applications",
									"Approved Donations",
									"Paid Expenses"
								], data.districtSummaries.map((item) => [
									item.district,
									item.members,
									item.approvedMembers,
									item.programApplications,
									item.approvedDonations,
									item.paidExpenses
								])) }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto rounded-2xl border border-slate-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full min-w-[760px] text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-slate-50 text-xs uppercase tracking-wide text-slate-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "District"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Members"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Approved"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Applications"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Donations"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Expenses"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-slate-100",
											children: data.districtSummaries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "bg-white",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 font-black text-slate-950",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-emerald-700" }), item.district]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-slate-700",
														children: item.members
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-slate-700",
														children: item.approvedMembers
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-slate-700",
														children: item.programApplications
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-emerald-800",
														children: formatCurrency(item.approvedDonations)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-amber-800",
														children: formatCurrency(item.paidExpenses)
													})
												]
											}, item.district))
										})]
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
								title: "Monthly Activity",
								subtitle: "Last 6 months overview",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: data.monthlySummaries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-black text-slate-950",
												children: item.month
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-bold text-slate-500",
												children: [
													item.members,
													" members · ",
													item.applications,
													" applications"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-slate-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100",
												children: ["Donations: ", formatCurrency(item.donations)]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100",
												children: ["Expenses: ", formatCurrency(item.expenses)]
											})]
										})]
									}, item.month))
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							title: "Recent Activity",
							subtitle: "Latest members, applications, donations and expenses",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3",
								children: data.recentActivity.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityIcon, { type: item.type }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "line-clamp-2 text-sm font-black text-slate-950",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs font-semibold text-slate-500",
													children: formatReportDate(item.date)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-slate-100 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide text-slate-600",
												children: item.status.replace(/_/g, " ")
											})
										]
									})
								}, item.id))
							})
						})
					] })
				]
			})
		})
	});
}
function MetricCard({ metric }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-wide text-slate-500",
				children: metric.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-2xl font-black text-slate-950",
				children: metric.value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs font-semibold leading-5 text-slate-500",
				children: metric.helper
			})
		]
	});
}
function Panel({ title, subtitle, action, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-black text-slate-950",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-500",
				children: subtitle
			})] }), action]
		}), children]
	});
}
function ProgramCard({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base font-black text-slate-950",
					children: item.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs font-semibold text-slate-500",
					children: [item.total, " total applications"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-800 ring-1 ring-emerald-100",
					children: [item.approved, " approved"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
						label: "Pending",
						value: item.pending
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
						label: "Review",
						value: item.underReview
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
						label: "Rejected",
						value: item.rejected
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-100",
				children: [
					"Completed: ",
					item.completed,
					" · Approved amount:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald-800",
						children: formatCurrency(item.approvedAmount)
					})
				]
			})
		]
	});
}
function MiniStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-white px-2 py-2 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-black text-slate-950",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.65rem] uppercase tracking-wide text-slate-400",
			children: label
		})]
	});
}
function FinanceTile({ label, value, tone }) {
	const toneClass = {
		emerald: "bg-emerald-50 text-emerald-900 ring-emerald-100",
		amber: "bg-amber-50 text-amber-900 ring-amber-100",
		slate: "bg-slate-50 text-slate-950 ring-slate-200"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-2xl p-4 ring-1 ${toneClass}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide opacity-70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xl font-black",
			children: value
		})]
	});
}
function ExportButton({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-black text-slate-700 shadow-sm transition hover:bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Export CSV"]
	});
}
function ActivityIcon({ type }) {
	const config = {
		member: {
			icon: Users,
			className: "bg-emerald-50 text-emerald-800"
		},
		program: {
			icon: BriefcaseBusiness,
			className: "bg-sky-50 text-sky-800"
		},
		donation: {
			icon: BadgeIndianRupee,
			className: "bg-amber-50 text-amber-800"
		},
		expense: {
			icon: FileText,
			className: "bg-violet-50 text-violet-800"
		}
	}[type];
	const Icon = config.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${config.className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
	});
}
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
//#endregion
export { AdminReportsPage as component };
