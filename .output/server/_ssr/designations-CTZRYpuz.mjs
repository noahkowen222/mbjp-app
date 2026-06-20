import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, D as PenLine, E as Plus, kt as ArrowLeft, v as ShieldAlert } from "../_libs/lucide-react.mjs";
import { a as createDesignation, b as updateDesignation, o as currentUserCanManageCommittees, s as designationScopeOptions, u as fetchDesignations } from "./committees-BBqoo4Av.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/designations-CTZRYpuz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	id: null,
	scope: "central",
	title: "",
	sortOrder: "1",
	isActive: true
};
var inputClass = "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";
function AdminDesignationsPage() {
	const { copy } = useAdminManagementCopy("designations");
	const [designations, setDesignations] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [scopeFilter, setScopeFilter] = (0, import_react.useState)("all");
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	(0, import_react.useEffect)(() => {
		loadDesignations();
	}, []);
	async function loadDesignations() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageCommittees()) {
				setMessage("Only admin or super admin can manage committee designations.");
				setDesignations([]);
				return;
			}
			setDesignations(await fetchDesignations());
		} catch (err) {
			setMessage(getErrorMessage(err, "Failed to load designations. Please confirm the committee migration has been applied."));
		} finally {
			setLoading(false);
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		try {
			if (!form.title.trim()) throw new Error("Designation title is required.");
			const input = {
				scope: form.scope,
				title: form.title.trim(),
				sort_order: Number(form.sortOrder) || 1,
				is_active: form.isActive
			};
			if (form.id) {
				await updateDesignation(form.id, input);
				setMessage("Designation updated successfully.");
			} else {
				await createDesignation(input);
				setMessage("Designation created successfully.");
			}
			setForm(emptyForm);
			await loadDesignations();
		} catch (err) {
			setMessage(getErrorMessage(err, "Failed to save designation."));
		} finally {
			setSaving(false);
		}
	}
	function editDesignation(designation) {
		setForm({
			id: designation.id,
			scope: designation.scope,
			title: designation.title,
			sortOrder: String(designation.sort_order),
			isActive: designation.is_active
		});
	}
	const filteredDesignations = (0, import_react.useMemo)(() => {
		return designations.filter((designation) => scopeFilter === "all" || designation.scope === scopeFilter);
	}, [designations, scopeFilter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Designations",
		subtitle: "Manage office bearer designations and display order.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/committees",
						className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }),
							" ",
							copy.common.backToCommittees
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
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
									className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
									children: copy.page.subtitle
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void loadDesignations(),
								className: "secondary-btn",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }),
									" ",
									copy.common.refresh
								]
							})]
						})
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
						message,
						tone: message.toLowerCase().includes("failed") || message.toLowerCase().includes("required") || message.toLowerCase().includes("only") ? "error" : "default"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-6 xl:grid-cols-[380px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
									children: form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-slate-950",
									children: form.id ? copy.page.editDesignation : copy.page.createDesignation
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-slate-500",
									children: copy.page.reusableText
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.scope,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: form.scope,
											onChange: (event) => setForm((current) => ({
												...current,
												scope: event.target.value
											})),
											className: inputClass,
											children: designationScopeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.value,
												children: item.label
											}, item.value))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.titleField,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.title,
											onChange: (event) => setForm((current) => ({
												...current,
												title: event.target.value
											})),
											className: inputClass,
											placeholder: "General Secretary"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: copy.page.sortOrder,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "1",
											value: form.sortOrder,
											onChange: (event) => setForm((current) => ({
												...current,
												sortOrder: event.target.value
											})),
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: form.isActive,
											onChange: (event) => setForm((current) => ({
												...current,
												isActive: event.target.checked
											}))
										}), copy.page.activeDesignation]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: saving,
											className: "primary-btn disabled:cursor-not-allowed disabled:opacity-60",
											children: saving ? copy.common.saving : form.id ? copy.page.updateDesignation : copy.page.createDesignation
										}), form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setForm(emptyForm),
											className: "secondary-btn",
											children: copy.page.cancelEdit
										}) : null]
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
										children: copy.page.designationList
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-slate-500",
										children: [
											"Showing ",
											filteredDesignations.length,
											" of ",
											designations.length,
											" designations."
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: scopeFilter,
										onChange: (event) => setScopeFilter(event.target.value),
										className: inputClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: copy.page.allScopes
										}), designationScopeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: item.value,
											children: item.label
										}, item.value))]
									})]
								}),
								loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.page.loading }) : null,
								!loading && filteredDesignations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.page.empty }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 md:grid-cols-2",
									children: filteredDesignations.map((designation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-[1.3rem] border border-slate-200 bg-white p-4 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-black uppercase tracking-wide text-emerald-700",
													children: designation.scope
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-1 text-lg font-black text-slate-950",
													children: designation.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs font-bold text-slate-500",
													children: ["Sort order: ", designation.sort_order]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-3 py-1 text-xs font-black ring-1 ${designation.is_active ? "bg-emerald-50 text-emerald-800 ring-emerald-200" : "bg-slate-100 text-slate-600 ring-slate-200"}`,
												children: designation.is_active ? copy.common.active : copy.common.inactive
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => editDesignation(designation),
											className: "secondary-btn mt-4 w-full",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 15 }), " Edit"]
										})]
									}, designation.id))
								})
							]
						})]
					})
				]
			})
		})
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
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-slate-50 text-slate-600 ring-slate-200"}`,
		children: [tone === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mr-2 inline h-4 w-4" }) : null, message]
	});
}
//#endregion
export { AdminDesignationsPage as component };
