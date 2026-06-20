import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as KeyRound, C as RefreshCw, D as PenLine, E as Plus, Et as BadgeCheck, I as LoaderCircle, S as Save, c as UserCog, kt as ArrowLeft, p as Trash2, v as ShieldAlert, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { a as fetchAreaPermissionsForUser, c as getAreaPermissionModuleLabel, f as removeAreaPermission, i as describeAreaPermission, l as getAreaPermissionScopeLabel, m as searchUsersForAreaPermissions, n as areaPermissionScopeOptions, p as saveAreaPermission, r as currentUserCanManageAreaPermissions, t as areaPermissionModuleOptions, u as getPermissionActionText } from "./area-permissions-Hs7OJQCz.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/area-permissions-0Kvy2RjQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	id: null,
	moduleKey: "membership",
	scope: "district",
	district: "",
	taluka: "",
	canView: true,
	canReview: true,
	canApprove: false,
	isActive: true,
	notes: ""
};
function AdminAreaPermissionsPage() {
	const { copy } = useAdminManagementCopy("areaPermissions");
	const [allowed, setAllowed] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [searching, setSearching] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [users, setUsers] = (0, import_react.useState)([]);
	const [selectedUser, setSelectedUser] = (0, import_react.useState)(null);
	const [permissions, setPermissions] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		boot();
	}, []);
	async function boot() {
		setLoading(true);
		setMessage("");
		try {
			const canManage = await currentUserCanManageAreaPermissions();
			setAllowed(canManage);
			if (!canManage) {
				setMessage("Only super admin can manage area-based permissions.");
				return;
			}
			setUsers(await searchUsersForAreaPermissions(""));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load area permissions.");
		} finally {
			setLoading(false);
		}
	}
	async function handleSearch(event) {
		event?.preventDefault();
		setSearching(true);
		setMessage("");
		try {
			setUsers(await searchUsersForAreaPermissions(query));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to search users.");
		} finally {
			setSearching(false);
		}
	}
	async function selectUser(user) {
		setSelectedUser(user);
		setForm({
			...emptyForm,
			district: user.district ?? "",
			taluka: user.taluka ?? ""
		});
		setMessage("");
		try {
			setPermissions(await fetchAreaPermissionsForUser(user.user_id));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load selected user permissions.");
			setPermissions([]);
		}
	}
	function editPermission(permission) {
		setForm({
			id: permission.id,
			moduleKey: permission.module_key,
			scope: permission.scope,
			district: permission.district ?? "",
			taluka: permission.taluka ?? "",
			canView: permission.can_view,
			canReview: permission.can_review,
			canApprove: permission.can_approve,
			isActive: permission.is_active,
			notes: permission.notes ?? ""
		});
	}
	function resetForm() {
		setForm({
			...emptyForm,
			district: selectedUser?.district ?? "",
			taluka: selectedUser?.taluka ?? ""
		});
	}
	async function handleSave(event) {
		event.preventDefault();
		if (!selectedUser) return;
		setSaving(true);
		setMessage("");
		try {
			if (form.scope !== "all" && !form.district.trim()) throw new Error("District is required for district/taluka scope.");
			if (form.scope === "taluka" && !form.taluka.trim()) throw new Error("Taluka is required for taluka scope.");
			await saveAreaPermission({
				id: form.id,
				userId: selectedUser.user_id,
				moduleKey: form.moduleKey,
				scope: form.scope,
				district: form.district,
				taluka: form.taluka,
				canView: form.canView,
				canReview: form.canReview,
				canApprove: form.canApprove,
				isActive: form.isActive,
				notes: form.notes
			});
			setPermissions(await fetchAreaPermissionsForUser(selectedUser.user_id));
			resetForm();
			setMessage("Area permission saved successfully.");
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to save area permission.");
		} finally {
			setSaving(false);
		}
	}
	async function handleRemove(permission) {
		if (!window.confirm(`Remove ${getAreaPermissionModuleLabel(permission.module_key)} permission for ${describeAreaPermission(permission)}?`) || !selectedUser) return;
		setMessage("");
		try {
			await removeAreaPermission(permission.id);
			setPermissions(await fetchAreaPermissionsForUser(selectedUser.user_id));
			setMessage("Area permission removed.");
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to remove area permission.");
		}
	}
	const activePermissions = (0, import_react.useMemo)(() => permissions.filter((permission) => permission.is_active), [permissions]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Area Permissions",
		subtitle: "Assign district, taluka and module-level admin access.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-3xl bg-white p-5 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200",
				children: copy.common.loading
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Area Permissions",
		subtitle: "Assign district, taluka and module-level admin access.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }),
							" ",
							copy.common.backToAdmin
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-5 text-white sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-200",
										children: copy.page.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 text-3xl font-black tracking-tight",
										children: copy.page.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-7 text-white/70",
										children: copy.page.subtitle
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void boot(),
									className: "secondary-btn bg-white text-slate-900 hover:bg-slate-100",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }),
										" ",
										copy.common.refresh
									]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-3 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.usersListed,
									value: users.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.selectedActivePermissions,
									value: activePermissions.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.common.accessLevel,
									value: allowed ? copy.common.superAdmin : copy.common.restricted,
									text: true
								})
							]
						})]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start gap-3 rounded-2xl p-4 text-sm font-bold ring-1 ${message.toLowerCase().includes("failed") || message.toLowerCase().includes("only") || message.toLowerCase().includes("required") ? "bg-red-50 text-red-700 ring-red-100" : "bg-emerald-50 text-emerald-800 ring-emerald-100"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
					}) : null,
					!allowed ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 xl:grid-cols-[420px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.2em] text-emerald-700",
									children: "Find admin user"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-xl font-black text-slate-950",
									children: "Users & Admins"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSearch,
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (event) => setQuery(event.target.value),
											className: "h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm font-bold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											placeholder: "Email, member no, name..."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: searching,
										className: "primary-btn px-4 disabled:opacity-60",
										children: searching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											size: 16,
											className: "animate-spin"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid max-h-[720px] gap-3 overflow-y-auto pr-1",
									children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void selectUser(user),
										className: `rounded-2xl border p-4 text-left transition ${selectedUser?.user_id === user.user_id ? "border-emerald-300 bg-emerald-50 ring-4 ring-emerald-100" : "border-slate-200 bg-white hover:bg-slate-50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { size: 19 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block truncate text-sm font-black text-slate-950",
														children: user.email ?? "No email"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 block truncate text-xs font-bold text-slate-500",
														children: user.full_name || "No linked member profile"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-2 flex flex-wrap gap-1",
														children: user.roles.length ? user.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-slate-100 px-2 py-0.5 text-[0.65rem] font-black text-slate-600",
															children: role
														}, role)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-amber-50 px-2 py-0.5 text-[0.65rem] font-black text-amber-800",
															children: "No role"
														})
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-slate-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user.member_no || "No member no" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user.district || "No district" })]
										})]
									}, user.user_id))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase tracking-[0.2em] text-emerald-700",
											children: "Selected user"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 text-2xl font-black text-slate-950",
											children: selectedUser ? selectedUser.email ?? selectedUser.user_id : "Select a user"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold text-slate-500",
											children: selectedUser ? selectedUser.full_name || "No linked member profile" : "Choose a user from the list to assign district/taluka restrictions."
										})
									] }), selectedUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-800 ring-1 ring-emerald-100",
										children: [
											activePermissions.length,
											" active permission",
											activePermissions.length === 1 ? "" : "s"
										]
									}) : null]
								})
							}), selectedUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSave,
								className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase tracking-[0.2em] text-emerald-700",
											children: form.id ? copy.page.editPermission : copy.page.newPermission
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-xl font-black text-slate-950",
											children: "Area access rule"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: resetForm,
											className: "secondary-btn",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " New"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-4 lg:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Module",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: form.moduleKey,
													onChange: (event) => setForm((current) => ({
														...current,
														moduleKey: event.target.value
													})),
													className: "form-input",
													children: areaPermissionModuleOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: item.value,
														children: item.label
													}, item.value))
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Scope",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: form.scope,
													onChange: (event) => setForm((current) => ({
														...current,
														scope: event.target.value
													})),
													className: "form-input",
													children: areaPermissionScopeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: item.value,
														children: item.label
													}, item.value))
												})
											}),
											form.scope !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "District",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: form.district,
													onChange: (event) => setForm((current) => ({
														...current,
														district: event.target.value
													})),
													className: "form-input",
													placeholder: "e.g. Umerkot"
												})
											}) : null,
											form.scope === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Taluka",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: form.taluka,
													onChange: (event) => setForm((current) => ({
														...current,
														taluka: event.target.value
													})),
													className: "form-input",
													placeholder: "e.g. Kunri"
												})
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-3 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
												label: "Can view",
												checked: form.canView,
												onChange: (value) => setForm((current) => ({
													...current,
													canView: value
												}))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
												label: "Can review",
												checked: form.canReview,
												onChange: (value) => setForm((current) => ({
													...current,
													canReview: value
												}))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
												label: "Can approve",
												checked: form.canApprove,
												onChange: (value) => setForm((current) => ({
													...current,
													canApprove: value
												}))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
											label: copy.page.permissionActive,
											checked: form.isActive,
											onChange: (value) => setForm((current) => ({
												...current,
												isActive: value
											}))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Notes",
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: form.notes,
											onChange: (event) => setForm((current) => ({
												...current,
												notes: event.target.value
											})),
											className: "form-textarea",
											placeholder: "Optional internal note"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: saving,
										className: "primary-btn mt-5 disabled:opacity-60",
										children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											size: 16,
											className: "animate-spin"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), saving ? copy.common.saving : copy.page.saveAreaPermission]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.2em] text-emerald-700",
									children: "Current permissions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl font-black text-slate-950",
									children: "District / Taluka access"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-3",
									children: [permissions.map((permission) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
										className: `rounded-2xl border p-4 ${permission.is_active ? "border-slate-200 bg-white" : "border-slate-200 bg-slate-50 opacity-70"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap items-center gap-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800 ring-1 ring-emerald-100",
																children: getAreaPermissionModuleLabel(permission.module_key)
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
																children: getAreaPermissionScopeLabel(permission.scope)
															}),
															!permission.is_active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-700",
																children: "Inactive"
															}) : null
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "mt-3 text-lg font-black text-slate-950",
														children: describeAreaPermission(permission)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm font-semibold text-slate-500",
														children: getPermissionActionText(permission)
													}),
													permission.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm leading-6 text-slate-600",
														children: permission.notes
													}) : null
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => editPermission(permission),
													className: "secondary-btn px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 15 }), " Edit"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => void handleRemove(permission),
													className: "rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-black text-red-700 transition hover:bg-red-100",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
												})]
											})]
										})
									}, permission.id)), permissions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl bg-slate-50 p-6 text-center text-sm font-bold text-slate-500 ring-1 ring-slate-100",
										children: "No area permissions assigned yet."
									}) : null]
								})]
							})] }) : null]
						})]
					})
				]
			})
		})
	});
}
function SummaryCard({ label, value, text = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: text ? "mt-2 text-base font-black text-slate-950" : "mt-2 text-3xl font-black text-slate-950",
			children: value
		})]
	});
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-sm font-black text-slate-800",
			children: label
		}), children]
	});
}
function CheckBox({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-700",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange: (event) => onChange(event.target.checked)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2",
			children: [checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
				size: 16,
				className: "text-emerald-700"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
				size: 16,
				className: "text-slate-400"
			}), label]
		})]
	});
}
//#endregion
export { AdminAreaPermissionsPage as component };
