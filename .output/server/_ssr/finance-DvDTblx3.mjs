import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as RefreshCw, I as LoaderCircle, Q as Funnel, S as Save, Tt as BadgeIndianRupee, _ as ShieldCheck, mt as CircleX, ot as Download, u as Upload, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess, s as getAreaAccessSummaryText } from "./area-permissions-Hs7OJQCz.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
import { a as createFinanceDocumentStoragePath, c as financePurposeOptions, d as getExpenseStatusLabel, f as getFinancePurposeLabel, g as validateFinanceDocumentFile, h as getPaymentMethodLabel, i as buildExpenseReceiptText, l as formatFinanceMoney, m as getFinanceStatusLabel, n as FINANCE_DOCUMENT_BUCKET, o as financeExpenseCategoryOptions, p as getFinanceStatusClass, r as buildDonationReceiptText, s as financePaymentMethodOptions, t as FINANCE_DOCUMENT_ACCEPT, u as getExpenseCategoryLabel } from "./finance-Cn3yAGsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-DvDTblx3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialDonationForm = {
	donorName: "",
	donorPhone: "",
	amount: "",
	paymentMethod: "cash",
	receiptNo: "",
	purpose: "general_fund",
	district: "",
	taluka: "",
	notes: ""
};
var initialExpenseForm = {
	expenseTitle: "",
	amount: "",
	category: "general",
	linkedProgramKey: "",
	linkedApplicationId: "",
	paymentMethod: "cash",
	paidTo: "",
	district: "",
	taluka: "",
	receiptNo: "",
	notes: ""
};
var statusFilterOptions = [
	"all",
	"pending",
	"approved",
	"rejected",
	"paid"
];
var monthFilterOptions = [
	"all",
	"this_month",
	"last_month",
	"this_year"
];
function FinanceAdminPage() {
	const { copy } = useAdminManagementCopy("finance");
	const [donations, setDonations] = (0, import_react.useState)([]);
	const [expenses, setExpenses] = (0, import_react.useState)([]);
	const [auditLogs, setAuditLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [areaNotice, setAreaNotice] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const [activePanel, setActivePanel] = (0, import_react.useState)("dashboard");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [purposeFilter, setPurposeFilter] = (0, import_react.useState)("all");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [districtFilter, setDistrictFilter] = (0, import_react.useState)("all");
	const [monthFilter, setMonthFilter] = (0, import_react.useState)("all");
	const [donationForm, setDonationForm] = (0, import_react.useState)(initialDonationForm);
	const [expenseForm, setExpenseForm] = (0, import_react.useState)(initialExpenseForm);
	const [expenseFile, setExpenseFile] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadFinanceData();
	}, []);
	async function loadFinanceData() {
		setLoading(true);
		setMessage("");
		setSuccess("");
		setAreaNotice("");
		const access = await ensureFinanceAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			setDonations([]);
			setExpenses([]);
			setAuditLogs([]);
			setLoading(false);
			return;
		}
		const areaAccess = await loadCurrentAdminAreaAccess("finance", "view", { requiredRoles: [
			"admin",
			"super_admin",
			"finance_admin"
		] });
		if (!areaAccess.ok) {
			setMessage(areaAccess.message);
			setDonations([]);
			setExpenses([]);
			setAuditLogs([]);
			setLoading(false);
			return;
		}
		const [donationResult, expenseResult, auditResult] = await Promise.all([
			supabase.from("finance_donations").select("*").order("created_at", { ascending: false }).returns(),
			supabase.from("finance_expenses").select("*").order("created_at", { ascending: false }).returns(),
			supabase.from("finance_audit_logs").select("*").order("created_at", { ascending: false }).limit(30).returns()
		]);
		if (donationResult.error || expenseResult.error || auditResult.error) {
			setMessage(donationResult.error?.message || expenseResult.error?.message || auditResult.error?.message || "Unable to load finance records.");
			setLoading(false);
			return;
		}
		setDonations(filterRowsByAreaAccess(donationResult.data || [], areaAccess));
		setExpenses(filterRowsByAreaAccess(expenseResult.data || [], areaAccess));
		setAuditLogs(auditResult.data || []);
		setAreaNotice(getAreaAccessSummaryText(areaAccess));
		setLoading(false);
	}
	const districtOptions = (0, import_react.useMemo)(() => {
		return getUniqueOptions([...donations.map((item) => item.district), ...expenses.map((item) => item.district)]);
	}, [donations, expenses]);
	const filteredDonations = (0, import_react.useMemo)(() => {
		const q = searchTerm.trim().toLowerCase();
		return donations.filter((item) => {
			const matchesStatus = statusFilter === "all" || statusFilter === "paid" ? statusFilter === "all" : item.status === statusFilter;
			const matchesPurpose = purposeFilter === "all" || item.purpose === purposeFilter;
			const matchesDistrict = districtFilter === "all" || normalizeValue(item.district) === districtFilter;
			const matchesMonth = matchesMonthFilter(item.created_at, monthFilter);
			const matchesSearch = q ? [
				item.donation_no,
				item.donor_name,
				item.donor_phone,
				item.receipt_no,
				item.purpose,
				item.district,
				item.taluka,
				item.notes,
				item.donor_member_no_snapshot,
				item.donor_father_name_snapshot,
				item.transaction_reference
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(q)) : true;
			return matchesStatus && matchesPurpose && matchesDistrict && matchesMonth && matchesSearch;
		});
	}, [
		districtFilter,
		donations,
		monthFilter,
		purposeFilter,
		searchTerm,
		statusFilter
	]);
	const filteredExpenses = (0, import_react.useMemo)(() => {
		const q = searchTerm.trim().toLowerCase();
		return expenses.filter((item) => {
			const matchesStatus = statusFilter === "all" || item.status === statusFilter;
			const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
			const matchesDistrict = districtFilter === "all" || normalizeValue(item.district) === districtFilter;
			const matchesMonth = matchesMonthFilter(item.created_at, monthFilter);
			const matchesSearch = q ? [
				item.expense_title,
				item.paid_to,
				item.receipt_no,
				item.category,
				item.linked_program_key,
				item.district,
				item.taluka,
				item.notes
			].filter(Boolean).some((value) => String(value).toLowerCase().includes(q)) : true;
			return matchesStatus && matchesCategory && matchesDistrict && matchesMonth && matchesSearch;
		});
	}, [
		categoryFilter,
		districtFilter,
		expenses,
		monthFilter,
		searchTerm,
		statusFilter
	]);
	const dashboard = (0, import_react.useMemo)(() => {
		const approvedDonations = donations.filter((item) => item.status === "approved");
		const paidOrApprovedExpenses = expenses.filter((item) => ["approved", "paid"].includes(item.status));
		const totalDonations = sumAmounts(approvedDonations);
		const totalExpenses = sumAmounts(paidOrApprovedExpenses);
		const pendingDonations = donations.filter((item) => item.status === "pending").length;
		const pendingExpenses = expenses.filter((item) => item.status === "pending").length;
		const programSpending = groupAmountBy(paidOrApprovedExpenses, (item) => item.linked_program_key || item.category || "general");
		const districtSpending = groupAmountBy(paidOrApprovedExpenses, (item) => item.district || "Not Set");
		const monthlyDonations = sumAmounts(approvedDonations.filter((item) => matchesMonthFilter(item.created_at, "this_month")));
		const monthlyExpenses = sumAmounts(paidOrApprovedExpenses.filter((item) => matchesMonthFilter(item.created_at, "this_month")));
		return {
			totalDonations,
			totalExpenses,
			balance: totalDonations - totalExpenses,
			pendingDonations,
			pendingExpenses,
			programSpending,
			districtSpending,
			monthlyDonations,
			monthlyExpenses
		};
	}, [donations, expenses]);
	async function submitDonation(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		setSuccess("");
		const access = await ensureFinanceAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			setSaving(false);
			return;
		}
		const amount = Number(donationForm.amount);
		if (!donationForm.donorName.trim() || !Number.isFinite(amount) || amount <= 0) {
			setMessage("Donor name aur valid amount required hain.");
			setSaving(false);
			return;
		}
		const payload = {
			donor_name: donationForm.donorName.trim(),
			donor_phone: donationForm.donorPhone.trim() || null,
			amount,
			payment_method: donationForm.paymentMethod,
			receipt_no: donationForm.receiptNo.trim() || null,
			purpose: donationForm.purpose,
			district: donationForm.district.trim() || null,
			taluka: donationForm.taluka.trim() || null,
			notes: donationForm.notes.trim() || null,
			status: "pending",
			created_by: access.userId
		};
		const { data, error } = await supabase.from("finance_donations").insert(payload).select("*").single().returns();
		if (error) {
			setMessage(error.message);
			setSaving(false);
			return;
		}
		await writeAuditLog(access.userId, "created_donation", "finance_donations", data.id, null, data);
		setDonationForm(initialDonationForm);
		setSuccess("Donation record saved for finance approval.");
		setSaving(false);
		await loadFinanceData();
	}
	async function submitExpense(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		setSuccess("");
		const access = await ensureFinanceAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			setSaving(false);
			return;
		}
		const amount = Number(expenseForm.amount);
		if (!expenseForm.expenseTitle.trim() || !expenseForm.paidTo.trim() || !Number.isFinite(amount) || amount <= 0) {
			setMessage("Expense title, paid to aur valid amount required hain.");
			setSaving(false);
			return;
		}
		let documentPath = null;
		if (expenseFile) {
			const fileError = validateFinanceDocumentFile(expenseFile);
			if (fileError) {
				setMessage(fileError);
				setSaving(false);
				return;
			}
			documentPath = createFinanceDocumentStoragePath({
				userId: access.userId,
				folder: "expenses",
				fileName: expenseFile.name
			});
			const { error: uploadError } = await supabase.storage.from(FINANCE_DOCUMENT_BUCKET).upload(documentPath, expenseFile, {
				cacheControl: "3600",
				upsert: false,
				contentType: expenseFile.type
			});
			if (uploadError) {
				setMessage(uploadError.message);
				setSaving(false);
				return;
			}
		}
		const payload = {
			expense_title: expenseForm.expenseTitle.trim(),
			amount,
			category: expenseForm.category,
			linked_program_key: expenseForm.linkedProgramKey || null,
			linked_application_id: expenseForm.linkedApplicationId.trim() || null,
			payment_method: expenseForm.paymentMethod,
			paid_to: expenseForm.paidTo.trim(),
			district: expenseForm.district.trim() || null,
			taluka: expenseForm.taluka.trim() || null,
			receipt_no: expenseForm.receiptNo.trim() || null,
			document_path: documentPath,
			notes: expenseForm.notes.trim() || null,
			status: "pending",
			created_by: access.userId
		};
		const { data, error } = await supabase.from("finance_expenses").insert(payload).select("*").single().returns();
		if (error) {
			setMessage(error.message);
			setSaving(false);
			return;
		}
		await writeAuditLog(access.userId, "created_expense", "finance_expenses", data.id, null, data);
		setExpenseForm(initialExpenseForm);
		setExpenseFile(null);
		setSuccess("Expense record saved for finance approval.");
		setSaving(false);
		await loadFinanceData();
	}
	async function updateDonationStatus(donation, status) {
		await updateFinanceRecord({
			entityType: "finance_donations",
			id: donation.id,
			oldData: donation,
			status,
			action: status === "approved" ? "approved_donation" : "rejected_donation"
		});
	}
	async function updateExpenseStatus(expense, status) {
		await updateFinanceRecord({
			entityType: "finance_expenses",
			id: expense.id,
			oldData: expense,
			status,
			action: status === "paid" ? "marked_expense_paid" : status === "approved" ? "approved_expense" : "rejected_expense"
		});
	}
	async function updateFinanceRecord({ entityType, id, oldData, status, action }) {
		setMessage("");
		setSuccess("");
		const access = await ensureFinanceAdminAccess();
		if (!access.ok) {
			setMessage(access.message);
			return;
		}
		const patch = { status };
		if (status === "approved") {
			patch.approved_by = access.userId;
			patch.approved_at = (/* @__PURE__ */ new Date()).toISOString();
			patch.rejected_by = null;
			patch.rejected_at = null;
		}
		if (status === "rejected") {
			patch.rejected_by = access.userId;
			patch.rejected_at = (/* @__PURE__ */ new Date()).toISOString();
		}
		if (status === "paid") {
			patch.paid_by = access.userId;
			patch.paid_at = (/* @__PURE__ */ new Date()).toISOString();
		}
		const { data, error } = await supabase.from(entityType).update(patch).eq("id", id).select("*").single();
		if (error) {
			setMessage(error.message);
			return;
		}
		await writeAuditLog(access.userId, action, entityType, id, oldData, data);
		setSuccess("Finance record updated and audit log saved.");
		await loadFinanceData();
	}
	async function openFinanceDocument(path) {
		const { data, error } = await supabase.storage.from(FINANCE_DOCUMENT_BUCKET).createSignedUrl(path, 600);
		if (error || !data?.signedUrl) {
			setMessage(error?.message || "Unable to open document.");
			return;
		}
		window.open(data.signedUrl, "_blank", "noopener,noreferrer");
	}
	function resetFilters() {
		setSearchTerm("");
		setStatusFilter("all");
		setPurposeFilter("all");
		setCategoryFilter("all");
		setDistrictFilter("all");
		setMonthFilter("all");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Finance",
		subtitle: "Track donations, expenses, receipts, approvals and finance audit logs.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-nested-page",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-4 w-4 text-amber-300" }),
										" ",
										copy.page.badge
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-4xl font-black md:text-6xl",
									children: "Donation / Fund / Finance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-lg leading-8 text-white/70",
									children: "Internal donation and expense tracking with approval workflow, restricted finance access, audit logs, receipt records and reports."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:min-w-[360px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => exportFinanceCsv(filteredDonations, filteredExpenses),
								disabled: loading,
								className: "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20 disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }),
									" ",
									copy.common.exportCsv
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: loadFinanceData,
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-red-200 bg-red-50 p-5 text-red-900 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-5 w-5 flex-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-black",
									children: "Finance privacy and audit warning"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-6",
									children: "Ye module sensitive hai. Sirf finance/admin roles ko access den. Approved ya paid records edit karne ke bajaye new correction entry aur audit note rakhen."
								})] })]
							})
						}),
						message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
							tone: "error",
							message
						}) : null,
						success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
							tone: "success",
							message: success
						}) : null,
						areaNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800",
							children: areaNotice
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Total Donations",
									value: formatFinanceMoney(dashboard.totalDonations),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: copy.page.totalExpenses,
									value: formatFinanceMoney(dashboard.totalExpenses),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Available Balance",
									value: formatFinanceMoney(dashboard.balance),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Pending Review",
									value: dashboard.pendingDonations + dashboard.pendingExpenses,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-4",
							children: [
								"dashboard",
								"donations",
								"expenses",
								"audit"
							].map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActivePanel(panel),
								className: `rounded-2xl px-4 py-3 text-sm font-black transition ${activePanel === panel ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`,
								children: panel === "dashboard" ? "Dashboard" : panel === "donations" ? "Donations" : panel === "expenses" ? "Expenses" : copy.page.auditLog
							}, panel))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 xl:grid-cols-[1fr_170px_170px_170px_170px_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "relative block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: searchTerm,
											onChange: (event) => setSearchTerm(event.target.value),
											placeholder: copy.page.searchPlaceholder,
											className: "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 font-semibold outline-none transition focus:border-amber-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: statusFilter,
										onChange: setStatusFilter,
										options: statusFilterOptions.map((value) => ({
											value,
											label: value === "all" ? "All Status" : value === "paid" ? "Paid" : getFinanceStatusLabel(value)
										}))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: purposeFilter,
										onChange: setPurposeFilter,
										options: [{
											value: "all",
											label: "All Purposes"
										}, ...financePurposeOptions]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: categoryFilter,
										onChange: setCategoryFilter,
										options: [{
											value: "all",
											label: "All Categories"
										}, ...financeExpenseCategoryOptions]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: districtFilter,
										onChange: setDistrictFilter,
										options: [{
											value: "all",
											label: "All Districts"
										}, ...districtOptions]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: resetFilters,
										className: "inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), " Reset"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 max-w-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									value: monthFilter,
									onChange: setMonthFilter,
									options: monthFilterOptions.map((value) => ({
										value,
										label: value === "all" ? "All Months" : value === "this_month" ? "This Month" : value === "last_month" ? "Last Month" : "This Year"
									}))
								})
							})]
						}),
						loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
						}) : activePanel === "dashboard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPanel, {
							dashboard,
							donations,
							expenses
						}) : activePanel === "donations" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 xl:grid-cols-[420px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationFormPanel, {
								form: donationForm,
								saving,
								onChange: setDonationForm,
								onSubmit: submitDonation
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationList, {
								items: filteredDonations,
								onApprove: (item) => void updateDonationStatus(item, "approved"),
								onReject: (item) => void updateDonationStatus(item, "rejected"),
								onOpenReceipt: (path) => void openFinanceDocument(path)
							})]
						}) : activePanel === "expenses" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 xl:grid-cols-[420px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseFormPanel, {
								form: expenseForm,
								file: expenseFile,
								saving,
								onChange: setExpenseForm,
								onFileChange: setExpenseFile,
								onSubmit: submitExpense
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseList, {
								items: filteredExpenses,
								onApprove: (item) => void updateExpenseStatus(item, "approved"),
								onReject: (item) => void updateExpenseStatus(item, "rejected"),
								onPaid: (item) => void updateExpenseStatus(item, "paid"),
								onOpenDocument: (path) => void openFinanceDocument(path)
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditLogPanel, { items: auditLogs })
					]
				})
			})]
		})
	});
}
function DonationFormPanel({ form, saving, onChange, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-black text-slate-950",
			children: "Add Donation"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Donor Name",
					value: form.donorName,
					onChange: (value) => onChange({
						...form,
						donorName: value
					}),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Donor Phone",
					value: form.donorPhone,
					onChange: (value) => onChange({
						...form,
						donorPhone: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Amount",
					type: "number",
					value: form.amount,
					onChange: (value) => onChange({
						...form,
						amount: value
					}),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "Payment Method",
					value: form.paymentMethod,
					onChange: (value) => onChange({
						...form,
						paymentMethod: value
					}),
					options: financePaymentMethodOptions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Receipt No",
					value: form.receiptNo,
					onChange: (value) => onChange({
						...form,
						receiptNo: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "Purpose",
					value: form.purpose,
					onChange: (value) => onChange({
						...form,
						purpose: value
					}),
					options: financePurposeOptions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "District",
					value: form.district,
					onChange: (value) => onChange({
						...form,
						district: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Taluka",
					value: form.taluka,
					onChange: (value) => onChange({
						...form,
						taluka: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					label: "Notes",
					value: form.notes,
					onChange: (value) => onChange({
						...form,
						notes: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: saving,
					className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-900 disabled:opacity-60",
					children: [
						saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }),
						" ",
						"Save Donation"
					]
				})
			]
		})]
	});
}
function ExpenseFormPanel({ form, file, saving, onChange, onFileChange, onSubmit }) {
	function handleFile(event) {
		onFileChange(event.target.files?.[0] || null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-black text-slate-950",
			children: "Add Expense"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Expense Title",
					value: form.expenseTitle,
					onChange: (value) => onChange({
						...form,
						expenseTitle: value
					}),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Amount",
					type: "number",
					value: form.amount,
					onChange: (value) => onChange({
						...form,
						amount: value
					}),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "Category",
					value: form.category,
					onChange: (value) => onChange({
						...form,
						category: value
					}),
					options: financeExpenseCategoryOptions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "Linked Program",
					value: form.linkedProgramKey,
					onChange: (value) => onChange({
						...form,
						linkedProgramKey: value
					}),
					options: [
						{
							value: "",
							label: "Not Linked"
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
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Linked Case/Application ID",
					value: form.linkedApplicationId,
					onChange: (value) => onChange({
						...form,
						linkedApplicationId: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Paid To",
					value: form.paidTo,
					onChange: (value) => onChange({
						...form,
						paidTo: value
					}),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					label: "Payment Method",
					value: form.paymentMethod,
					onChange: (value) => onChange({
						...form,
						paymentMethod: value
					}),
					options: financePaymentMethodOptions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Receipt No",
					value: form.receiptNo,
					onChange: (value) => onChange({
						...form,
						receiptNo: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "District",
					value: form.district,
					onChange: (value) => onChange({
						...form,
						district: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Taluka",
					value: form.taluka,
					onChange: (value) => onChange({
						...form,
						taluka: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					label: "Notes",
					value: form.notes,
					onChange: (value) => onChange({
						...form,
						notes: value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-slate-700",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), " Receipt / Document Upload"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: FINANCE_DOCUMENT_ACCEPT,
							onChange: handleFile,
							className: "mt-3 block w-full text-sm"
						}),
						file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block text-xs text-slate-500",
							children: ["Selected: ", file.name]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: saving,
					className: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-900 disabled:opacity-60",
					children: [
						saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }),
						" ",
						"Save Expense"
					]
				})
			]
		})]
	});
}
function DashboardPanel({ dashboard, donations, expenses }) {
	const programRows = dashboard.programSpending.slice(0, 6);
	const districtRows = dashboard.districtSpending.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black text-slate-950",
					children: "Monthly Report"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniReport, {
							label: "This Month Donations",
							value: formatFinanceMoney(dashboard.monthlyDonations)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniReport, {
							label: "This Month Expenses",
							value: formatFinanceMoney(dashboard.monthlyExpenses)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniReport, {
							label: "Donation Records",
							value: donations.length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniReport, {
							label: "Expense Records",
							value: expenses.length
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black text-slate-950",
					children: "Program-wise Spending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportRows, {
					rows: programRows,
					empty: "No program spending yet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black text-slate-950",
					children: "District-wise Spending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportRows, {
					rows: districtRows,
					empty: "No district spending yet."
				})]
			})
		]
	});
}
function DonationList({ items, onApprove, onReject, onOpenReceipt }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPanel, { title: "No donation records found" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationCard, {
			item,
			onApprove,
			onReject,
			onOpenReceipt
		}, item.id))
	});
}
function DonationCard({ item, onApprove, onReject, onOpenReceipt }) {
	const donorMemberNo = item.donor_member_no_snapshot || "Manual donation";
	const donorFather = item.donor_father_name_snapshot || null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-4 md:flex-row md:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item.donation_no || item.receipt_no || "Donation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							status: item.status,
							label: getFinanceStatusLabel(item.status)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: getFinancePurposeLabel(item.purpose) }),
						item.donor_member_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Leaderboard Eligible" }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-xl font-black text-slate-950",
					children: item.donor_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-semibold text-slate-500",
					children: [
						item.donor_phone || "No phone",
						" •",
						" ",
						getPaymentMethodLabel(item.payment_method)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-slate-600",
					children: [
						"Member ID: ",
						donorMemberNo,
						donorFather ? ` • Father: ${donorFather}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-slate-600",
					children: [
						item.district || "-",
						" / ",
						item.taluka || "-"
					]
				}),
				item.transaction_reference ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500",
					children: ["Reference: ", item.transaction_reference]
				}) : null,
				item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700",
					children: item.notes
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 md:min-w-[190px] md:text-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-black text-slate-950",
						children: formatFinanceMoney(item.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-slate-500",
						children: new Date(item.created_at).toLocaleDateString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButtons, {
						status: item.status,
						onApprove: () => onApprove(item),
						onReject: () => onReject(item)
					}),
					item.receipt_file_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpenReceipt(item.receipt_file_path),
						className: "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 transition hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 h-3.5 w-3.5" }), " Proof"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => downloadTextFile(`donation-${item.receipt_no || item.donation_no || item.id}.txt`, buildDonationReceiptText(item)),
						className: "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 transition hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-3.5 w-3.5" }), " Receipt"]
					})
				]
			})]
		})
	});
}
function ExpenseList({ items, onApprove, onReject, onPaid, onOpenDocument }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPanel, { title: "No expense records found" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseCard, {
			item,
			onApprove,
			onReject,
			onPaid,
			onOpenDocument
		}, item.id))
	});
}
function ExpenseCard({ item, onApprove, onReject, onPaid, onOpenDocument }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-4 md:flex-row md:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item.receipt_no || "Expense" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							status: item.status,
							label: getExpenseStatusLabel(item.status)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: getExpenseCategoryLabel(item.category) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-xl font-black text-slate-950",
					children: item.expense_title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-semibold text-slate-500",
					children: [
						"Paid to: ",
						item.paid_to,
						" •",
						" ",
						getPaymentMethodLabel(item.payment_method)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-slate-600",
					children: [
						"Linked: ",
						item.linked_program_key || "-",
						" • ",
						item.district || "-",
						" /",
						" ",
						item.taluka || "-"
					]
				}),
				item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700",
					children: item.notes
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 md:min-w-[190px] md:text-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-black text-slate-950",
						children: formatFinanceMoney(item.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-slate-500",
						children: new Date(item.created_at).toLocaleDateString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButtons, {
						status: item.status,
						onApprove: () => onApprove(item),
						onReject: () => onReject(item),
						onPaid: () => onPaid(item)
					}),
					item.document_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpenDocument(item.document_path),
						className: "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 transition hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 h-3.5 w-3.5" }), " Document"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => downloadTextFile(`expense-${item.receipt_no || item.id}.txt`, buildExpenseReceiptText(item)),
						className: "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 transition hover:bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-3.5 w-3.5" }), " Receipt"]
					})
				]
			})]
		})
	});
}
function ActionButtons({ status, onApprove, onReject, onPaid }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onApprove,
			className: "rounded-xl bg-emerald-700 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-800",
			children: "Approve"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onReject,
			className: "rounded-xl bg-red-600 px-4 py-2 text-xs font-black text-white transition hover:bg-red-700",
			children: "Reject"
		})] }) : null, status === "approved" && onPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onPaid,
			className: "rounded-xl bg-slate-950 px-4 py-2 text-xs font-black text-white transition hover:bg-slate-800",
			children: "Mark Paid"
		}) : null]
	});
}
function AuditLogPanel({ items }) {
	const { copy } = useAdminManagementCopy("finance");
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPanel, { title: copy.page.noAuditLogs });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-xl font-black text-slate-950",
			children: [
				"Recent ",
				copy.page.auditLog,
				"s"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-100 bg-slate-50 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-black text-slate-900",
					children: item.action.replace(/_/g, " ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs font-semibold text-slate-500",
					children: [
						item.entity_type,
						" • ",
						new Date(item.created_at).toLocaleString()
					]
				})]
			}, item.id))
		})]
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
				className: "mt-1 text-2xl font-black text-slate-950",
				children: value
			})
		]
	});
}
function Input({ label, value, onChange, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (event) => onChange(event.target.value),
			required,
			className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
		})]
	});
}
function Textarea({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			rows: 3,
			className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
		})]
	});
}
function Select({ label, value, onChange, options }) {
	const field = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (event) => onChange(event.target.value),
		className: "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option.value,
			children: option.label
		}, option.value))
	});
	if (!label) return field;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), field]
	});
}
function Badge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
		children
	});
}
function StatusBadge({ status, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full border px-3 py-1 text-xs font-black ${getFinanceStatusClass(status)}`,
		children: label
	});
}
function Alert({ tone, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-3xl border p-4 text-sm font-semibold shadow-sm ${tone === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`,
		children: message
	});
}
function EmptyPanel({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xl font-black text-slate-950",
			children: title
		})
	});
}
function MiniReport({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xl font-black text-slate-950",
			children: value
		})]
	});
}
function ReportRows({ rows, empty }) {
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-sm text-slate-500",
		children: empty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 grid gap-3",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between rounded-2xl bg-slate-50 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold text-slate-700",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-black text-slate-950",
				children: formatFinanceMoney(row.amount)
			})]
		}, row.label))
	});
}
async function ensureFinanceAdminAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		message: "Finance module dekhne ke liye pehle login karen."
	};
	const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", [
		"admin",
		"super_admin",
		"finance_admin"
	]);
	if (error || !data?.length) return {
		ok: false,
		message: "Finance module sirf admin, super admin ya finance admin ke liye allowed hai."
	};
	return {
		ok: true,
		userId: user.id
	};
}
async function writeAuditLog(actorUserId, action, entityType, entityId, oldData, newData) {
	await supabase.from("finance_audit_logs").insert({
		actor_user_id: actorUserId,
		action,
		entity_type: entityType,
		entity_id: entityId,
		old_data: oldData,
		new_data: newData
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
function matchesMonthFilter(dateText, filter) {
	if (filter === "all") return true;
	const date = new Date(dateText);
	const now = /* @__PURE__ */ new Date();
	if (filter === "this_year") return date.getFullYear() === now.getFullYear();
	if (filter === "this_month") return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
	if (filter === "last_month") {
		const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
		return date.getFullYear() === lastMonth.getFullYear() && date.getMonth() === lastMonth.getMonth();
	}
	return true;
}
function sumAmounts(items) {
	return items.reduce((total, item) => total + Number(item.amount || 0), 0);
}
function groupAmountBy(items, getLabel) {
	const map = /* @__PURE__ */ new Map();
	for (const item of items) {
		const label = getLabel(item) || "Not Set";
		map.set(label, (map.get(label) || 0) + Number(item.amount || 0));
	}
	return Array.from(map.entries()).map(([label, amount]) => ({
		label,
		amount
	})).sort((a, b) => b.amount - a.amount);
}
function downloadTextFile(filename, content) {
	const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function exportFinanceCsv(donations, expenses) {
	const headers = [
		"type",
		"status",
		"donation_no",
		"member_id",
		"father_name",
		"title_or_name",
		"amount",
		"method",
		"purpose_or_category",
		"district",
		"taluka",
		"transaction_reference",
		"receipt_no",
		"date"
	];
	const rows = [...donations.map((item) => [
		"donation",
		item.status,
		item.donation_no || "",
		item.donor_member_no_snapshot || "",
		item.donor_father_name_snapshot || "",
		item.donor_name,
		item.amount,
		getPaymentMethodLabel(item.payment_method),
		getFinancePurposeLabel(item.purpose),
		item.district || "",
		item.taluka || "",
		item.transaction_reference || "",
		item.receipt_no || "",
		item.created_at
	]), ...expenses.map((item) => [
		"expense",
		item.status,
		"",
		"",
		"",
		item.expense_title,
		item.amount,
		getPaymentMethodLabel(item.payment_method),
		getExpenseCategoryLabel(item.category),
		item.district || "",
		item.taluka || "",
		"",
		item.receipt_no || "",
		item.created_at
	])];
	const csv = [headers.join(","), ...rows.map((row) => row.map(escapeCsvValue).join(","))].join("\n");
	const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `mbjp-finance-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function escapeCsvValue(value) {
	return `"${String(value).replace(/"/g, "\"\"")}"`;
}
//#endregion
export { FinanceAdminPage as component };
