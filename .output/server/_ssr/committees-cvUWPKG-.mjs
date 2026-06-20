import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, C as RefreshCw, E as Plus, Ot as ArrowRight, ht as CircleCheck, v as ShieldAlert, y as Search } from "../_libs/lucide-react.mjs";
import { d as formatCommitteeDate, h as getCommitteeTypeLabel, i as createCommittee, l as fetchCommitteesForAdmin, m as getCommitteeStatusLabel, n as committeeStatusOptions, o as currentUserCanManageCommittees, p as getCommitteeStatusClass, r as committeeTypeOptions } from "./committees-BBqoo4Av.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/committees-cvUWPKG-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	committeeType: "central",
	name: "",
	division: "",
	district: "",
	taluka: "",
	tenureStart: "",
	tenureEnd: "",
	status: "active",
	publicDisplay: true,
	notes: ""
};
function AdminCommitteesPage() {
	const { copy } = useAdminManagementCopy("committees");
	const navigate = useNavigate();
	const normalizedPathname = useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") || "/";
	const [committees, setCommittees] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	(0, import_react.useEffect)(() => {
		if (normalizedPathname !== "/admin/committees") return;
		loadCommittees();
	}, [normalizedPathname]);
	async function loadCommittees() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageCommittees()) {
				setMessage("Only admin or super admin can manage organization levels and designations.");
				setCommittees([]);
				return;
			}
			setCommittees(await fetchCommitteesForAdmin());
		} catch (err) {
			setMessage(getErrorMessage(err, "Failed to load organization level units. Please confirm the organization/designation migration and RLS grants are applied."));
		} finally {
			setLoading(false);
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		try {
			if (!form.name.trim()) throw new Error("Unit name is required.");
			if (form.committeeType === "divisional" && !form.division.trim()) throw new Error("Division is required for divisional level unit.");
			if (form.committeeType === "district" && !form.district.trim()) throw new Error("District is required for district level unit.");
			if (form.committeeType === "taluka" && (!form.district.trim() || !form.taluka.trim())) throw new Error("District and taluka are required for taluka level unit.");
			const id = await createCommittee({
				committee_type: form.committeeType,
				name: form.name.trim(),
				division: form.committeeType === "divisional" ? form.division.trim() : null,
				district: form.committeeType === "district" || form.committeeType === "taluka" ? form.district.trim() : null,
				taluka: form.committeeType === "taluka" ? form.taluka.trim() : null,
				tenure_start: form.tenureStart || null,
				tenure_end: form.tenureEnd || null,
				status: form.status,
				public_display: form.publicDisplay,
				notes: form.notes.trim() || null
			});
			setForm(emptyForm);
			await navigate({
				to: "/admin/committees/$id",
				params: { id }
			});
		} catch (err) {
			setMessage(getErrorMessage(err, "Failed to create level unit."));
		} finally {
			setSaving(false);
		}
	}
	const filteredCommittees = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return committees.filter((committee) => {
			const matchesType = typeFilter === "all" || committee.committee_type === typeFilter;
			const matchesStatus = statusFilter === "all" || committee.status === statusFilter;
			const matchesSearch = query.length === 0 || [
				committee.name,
				committee.division ?? "",
				committee.district ?? "",
				committee.taluka ?? "",
				committee.notes ?? ""
			].join(" ").toLowerCase().includes(query);
			return matchesType && matchesStatus && matchesSearch;
		});
	}, [
		committees,
		search,
		statusFilter,
		typeFilter
	]);
	const stats = (0, import_react.useMemo)(() => {
		return committees.reduce((acc, committee) => {
			acc.total += 1;
			acc[committee.committee_type] += 1;
			if (committee.status === "active") acc.active += 1;
			return acc;
		}, {
			total: 0,
			central: 0,
			central_advisory: 0,
			provincial: 0,
			divisional: 0,
			district: 0,
			taluka: 0,
			active: 0
		});
	}, [committees]);
	if (normalizedPathname !== "/admin/committees") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Organization Levels",
		subtitle: "Manage level units used for designation assignment.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-5 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
										children: copy.page.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
										children: copy.page.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-6 text-slate-600",
										children: copy.page.subtitle
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/designations",
										className: "secondary-btn no-underline",
										children: copy.page.manageDesignations
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void loadCommittees(),
										className: "secondary-btn",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }),
											" ",
											copy.common.refresh
										]
									})]
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.totalCommittees,
								value: stats.total
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.central,
								value: stats.central
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.centralAdvisory,
								value: stats.central_advisory
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.provincial,
								value: stats.provincial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.divisional,
								value: stats.divisional
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.district,
								value: stats.district
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.taluka,
								value: stats.taluka
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
								label: copy.page.active,
								value: stats.active,
								tone: "emerald"
							})
						]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
						message,
						tone: "error"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-6 xl:grid-cols-[420px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-slate-950",
									children: copy.page.createCommittee
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-slate-500",
									children: copy.page.createCommitteeText
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.committeeType,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: form.committeeType,
											onChange: (event) => {
												const committeeType = event.target.value;
												setForm((current) => ({
													...current,
													committeeType,
													division: committeeType === "divisional" ? current.division : "",
													district: committeeType === "district" || committeeType === "taluka" ? current.district : "",
													taluka: committeeType === "taluka" ? current.taluka : ""
												}));
											},
											className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											children: committeeTypeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.value,
												children: item.label
											}, item.value))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.committeeName,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.name,
											onChange: (event) => setForm((current) => ({
												...current,
												name: event.target.value
											})),
											className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											placeholder: "Central Executive Committee"
										})
									}),
									form.committeeType === "central" || form.committeeType === "central_advisory" || form.committeeType === "provincial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-900",
										children: form.committeeType === "central" ? "Central Executive Committee covers Sindh / Central level, so no area field is required." : form.committeeType === "central_advisory" ? "Central Advisory Committee covers Sindh / Central advisory level, so no area field is required." : "Provincial level covers Sindh / Provincial level, so no district or taluka field is required."
									}) : null,
									form.committeeType === "divisional" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.division,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.division,
											onChange: (event) => setForm((current) => ({
												...current,
												division: event.target.value
											})),
											className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											placeholder: "Mirpurkhas Division"
										})
									}) : null,
									form.committeeType === "district" || form.committeeType === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: copy.page.district,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.district,
												onChange: (event) => setForm((current) => ({
													...current,
													district: event.target.value
												})),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "Umerkot"
											})
										}), form.committeeType === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: copy.page.taluka,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.taluka,
												onChange: (event) => setForm((current) => ({
													...current,
													taluka: event.target.value
												})),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "Kunri"
											})
										}) : null]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: copy.page.tenureStart,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												value: form.tenureStart,
												onChange: (event) => setForm((current) => ({
													...current,
													tenureStart: event.target.value
												})),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: copy.page.tenureEnd,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												value: form.tenureEnd,
												onChange: (event) => setForm((current) => ({
													...current,
													tenureEnd: event.target.value
												})),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Status",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: form.status,
											onChange: (event) => setForm((current) => ({
												...current,
												status: event.target.value
											})),
											className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											children: committeeStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.value,
												children: item.label
											}, item.value))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: form.publicDisplay,
											onChange: (event) => setForm((current) => ({
												...current,
												publicDisplay: event.target.checked
											}))
										}), "Show this level unit publicly later"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Notes",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: form.notes,
											onChange: (event) => setForm((current) => ({
												...current,
												notes: event.target.value
											})),
											className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 min-h-[96px] py-3",
											placeholder: "Internal notes or appointment details"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: saving,
										className: "primary-btn w-full disabled:cursor-not-allowed disabled:opacity-60",
										children: saving ? "Creating..." : copy.page.createCommittee
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-black text-slate-950",
										children: "Level Units"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-slate-500",
										children: [
											"Showing ",
											filteredCommittees.length,
											" of ",
											committees.length,
											" level units."
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2 sm:grid-cols-3 lg:w-[560px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative sm:col-span-3 lg:col-span-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: search,
													onChange: (event) => setSearch(event.target.value),
													className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 pl-10",
													placeholder: "Search..."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: typeFilter,
												onChange: (event) => setTypeFilter(event.target.value),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All levels"
												}), committeeTypeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item.value,
													children: item.label
												}, item.value))]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: statusFilter,
												onChange: (event) => setStatusFilter(event.target.value),
												className: "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													children: "All status"
												}), committeeStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item.value,
													children: item.label
												}, item.value))]
											})
										]
									})]
								}),
								loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.page.loading }) : null,
								!loading && filteredCommittees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.page.empty }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 lg:grid-cols-2",
									children: filteredCommittees.map((committee) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex min-w-0 items-start gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-50 text-lime-800",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { size: 22 })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-xl font-black text-slate-950",
															children: committee.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs font-bold uppercase tracking-wide text-slate-500",
															children: getCommitteeTypeLabel(committee.committee_type)
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `shrink-0 rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getCommitteeStatusClass(committee.status)}`,
													children: getCommitteeStatusLabel(committee.status)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2",
												children: [
													committee.committee_type === "divisional" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: copy.page.division,
														value: committee.division ?? "N/A"
													}) : null,
													committee.committee_type === "district" || committee.committee_type === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: copy.page.district,
														value: committee.district ?? "N/A"
													}) : null,
													committee.committee_type === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: copy.page.taluka,
														value: committee.taluka ?? "N/A"
													}) : null,
													committee.committee_type === "central" || committee.committee_type === "central_advisory" || committee.committee_type === "provincial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: "Area",
														value: committee.committee_type === "central" ? "Sindh / Central Executive Committee" : committee.committee_type === "central_advisory" ? "Sindh / Central Advisory Committee" : "Sindh / Provincial"
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: "Tenure",
														value: `${formatCommitteeDate(committee.tenure_start)} → ${formatCommitteeDate(committee.tenure_end)}`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
														label: "Members",
														value: String(committee.member_count ?? 0)
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 flex flex-wrap gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/admin/committees/$id",
													params: { id: committee.id },
													className: "mbjp-dark-action-link inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black no-underline",
													children: ["Manage Unit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
												}), committee.public_display ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-800 ring-1 ring-emerald-100",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 15 }), " Public later"]
												}) : null]
											})
										]
									}, committee.id))
								})
							]
						})]
					})
				]
			})
		})
	});
}
function SummaryCard({ label, value, tone = "slate" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl border p-4 shadow-sm ${tone === "emerald" ? "border-emerald-100 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-950"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide opacity-70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-3xl font-black",
			children: value
		})]
	});
}
function getErrorMessage(err, fallback) {
	if (err instanceof Error && err.message) return err.message;
	if (typeof err === "object" && err !== null) {
		const maybeError = err;
		const parts = [
			maybeError.message,
			maybeError.details,
			maybeError.hint,
			maybeError.code
		].filter((part) => typeof part === "string" && part.trim().length > 0);
		if (parts.length > 0) return parts.join(" — ");
	}
	return fallback;
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-sm font-black text-slate-800",
			children: label
		}), children]
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-bold text-slate-950",
			children: value
		})]
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-slate-50 text-slate-600 ring-slate-200"}`,
		children: [tone === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mr-2 inline h-4 w-4" }) : null, message]
	});
}
//#endregion
export { AdminCommitteesPage as component };
