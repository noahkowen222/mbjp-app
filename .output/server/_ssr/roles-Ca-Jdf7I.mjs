import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, E as Plus, Et as BadgeCheck, F as LockKeyhole, I as LoaderCircle, _ as ShieldCheck, c as UserCog, f as TriangleAlert, kt as ArrowLeft, p as Trash2, y as Search } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { t as useAdminManagementCopy } from "./admin-management-i18n-CBy1gRqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roles-Ca-Jdf7I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var roleOptions = [
	{
		value: "membership_admin",
		label: "Membership Admin",
		description: "Manage member applications and digital cards."
	},
	{
		value: "education_admin",
		label: "Education Admin",
		description: "Review scholarship and education support applications."
	},
	{
		value: "health_admin",
		label: "Health Admin",
		description: "Review restricted medical help cases."
	},
	{
		value: "welfare_admin",
		label: "Welfare Admin",
		description: "Review welfare and social support cases."
	},
	{
		value: "employment_admin",
		label: "Employment Admin",
		description: "Review job seeker profiles, CVs and placements."
	},
	{
		value: "finance_admin",
		label: "Finance Admin",
		description: "Manage donations, expenses and finance audit records."
	},
	{
		value: "admin",
		label: "Admin",
		description: "Central operations access to all core modules."
	},
	{
		value: "super_admin",
		label: "Super Admin",
		description: "Owner-level access including role management."
	}
];
var roleLabels = Object.fromEntries(roleOptions.map((role) => [role.value, role.label]));
function getRoleLabel(role) {
	return roleLabels[role] ?? role;
}
function getRoleDescription(role) {
	return roleOptions.find((item) => item.value === role)?.description ?? "";
}
function isKnownAppRole(value) {
	return roleOptions.some((role) => role.value === value);
}
async function currentUserIsSuperAdmin() {
	const { data, error } = await supabase.rpc("current_user_is_super_admin");
	if (error) throw error;
	return Boolean(data);
}
async function searchRoleUsers(query) {
	const { data, error } = await supabase.rpc("role_management_search_users", { _query: query.trim() });
	if (error) throw error;
	return (data ?? []).map(normalizeRoleUser);
}
async function assignUserRole(userId, role) {
	const { error } = await supabase.rpc("role_management_assign_role", {
		_target_user_id: userId,
		_role: role
	});
	if (error) throw error;
}
async function removeUserRole(userId, role) {
	const { error } = await supabase.rpc("role_management_remove_role", {
		_target_user_id: userId,
		_role: role
	});
	if (error) throw error;
}
function normalizeRoleUser(row) {
	const item = row;
	const rawRoles = Array.isArray(item.roles) ? item.roles : [];
	return {
		userId: String(item.user_id ?? ""),
		email: String(item.email ?? ""),
		authCreatedAt: String(item.auth_created_at ?? ""),
		memberFullName: nullableString(item.member_full_name),
		memberNo: nullableString(item.member_no),
		memberStatus: nullableString(item.member_status),
		roles: rawRoles.map(String).filter(isKnownAppRole)
	};
}
function nullableString(value) {
	if (value === null || value === void 0) return null;
	const safe = String(value);
	return safe.length ? safe : null;
}
function AdminRolesPage() {
	const { copy } = useAdminManagementCopy("roles");
	const [allowed, setAllowed] = (0, import_react.useState)(false);
	const [checkingAccess, setCheckingAccess] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [users, setUsers] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [action, setAction] = (0, import_react.useState)(null);
	const [selectedRoles, setSelectedRoles] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		initialize();
	}, []);
	async function initialize() {
		setCheckingAccess(true);
		setMessage("");
		try {
			const isSuperAdmin = await currentUserIsSuperAdmin();
			setAllowed(isSuperAdmin);
			if (!isSuperAdmin) {
				setMessage("Only super admin can manage user roles and permissions.");
				return;
			}
			await loadUsers("");
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to verify role management access.");
		} finally {
			setCheckingAccess(false);
		}
	}
	async function loadUsers(searchText = query) {
		setLoading(true);
		setMessage("");
		try {
			const results = await searchRoleUsers(searchText);
			setUsers(results);
			setSelectedRoles((current) => {
				const next = { ...current };
				for (const user of results) if (!next[user.userId]) next[user.userId] = getDefaultRoleForUser(user);
				return next;
			});
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load users.");
		} finally {
			setLoading(false);
		}
	}
	async function handleSearch(event) {
		event.preventDefault();
		await loadUsers(query);
	}
	async function handleAssign(user) {
		const role = selectedRoles[user.userId];
		if (!role) return;
		setAction({
			userId: user.userId,
			role,
			mode: "assign"
		});
		setMessage("");
		try {
			await assignUserRole(user.userId, role);
			await loadUsers(query);
			setMessage(`${getRoleLabel(role)} assigned to ${user.email}.`);
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to assign role.");
		} finally {
			setAction(null);
		}
	}
	async function handleRemove(user, role) {
		if (!window.confirm(`Remove ${getRoleLabel(role)} from ${user.email}?`)) return;
		setAction({
			userId: user.userId,
			role,
			mode: "remove"
		});
		setMessage("");
		try {
			await removeUserRole(user.userId, role);
			await loadUsers(query);
			setMessage(`${getRoleLabel(role)} removed from ${user.email}.`);
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to remove role.");
		} finally {
			setAction(null);
		}
	}
	const roleCounts = (0, import_react.useMemo)(() => {
		return users.reduce((acc, user) => {
			for (const role of user.roles) acc[role] = (acc[role] ?? 0) + 1;
			return acc;
		}, {});
	}, [users]);
	if (checkingAccess) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Roles & Permissions",
		subtitle: "Assign and review administrator roles.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-[2rem] bg-white p-6 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), copy.common.loading]
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Roles & Permissions",
		subtitle: "Assign and review administrator roles.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), copy.common.backToAdminCenter]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "h-3.5 w-3.5" }), copy.page.badge]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl",
										children: copy.page.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-3xl text-sm leading-7 text-slate-600",
										children: copy.page.subtitle
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadUsers(query),
									disabled: !allowed || loading,
									className: "secondary-btn disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${loading ? "animate-spin" : ""}` }), copy.common.refresh]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 border-t border-slate-100 p-4 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.usersShown,
									value: users.length,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.superAdmins,
									value: roleCounts.super_admin ?? 0,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.centralAdmins,
									value: roleCounts.admin ?? 0,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
									label: copy.page.moduleAdmins,
									value: countModuleAdmins(roleCounts),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {})
								})
							]
						})]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start gap-3 rounded-2xl p-4 text-sm font-bold ring-1 ${allowed ? "bg-amber-50 text-amber-900 ring-amber-100" : "bg-red-50 text-red-700 ring-red-100"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
					}) : null,
					!allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-[2rem] bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm ring-1 ring-slate-200",
						children: "This page is restricted. Login with a super admin account to manage roles. Normal admin and module admins can use their assigned admin pages, but cannot assign or remove roles."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSearch,
							className: "grid gap-3 lg:grid-cols-[1fr_auto]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									className: "h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
									placeholder: "Search by email, member name, member no or user UUID..."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "primary-btn disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), "Search Users"]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-4",
						children: [users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleUserCard, {
							user,
							selectedRole: selectedRoles[user.userId] ?? getDefaultRoleForUser(user),
							onSelectedRole: (role) => setSelectedRoles((current) => ({
								...current,
								[user.userId]: role
							})),
							onAssign: () => void handleAssign(user),
							onRemove: (role) => void handleRemove(user, role),
							action
						}, user.userId)), !loading && users.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[2rem] bg-white p-8 text-center text-sm font-bold text-slate-500 ring-1 ring-slate-200",
							children: "No users found. Try searching by email, member no or member name."
						}) : null]
					})] })
				]
			})
		})
	});
}
function RoleUserCard({ user, selectedRole, onSelectedRole, onAssign, onRemove, action }) {
	const availableRoles = roleOptions.filter((role) => !user.roles.includes(role.value));
	const assigning = action?.userId === user.userId && action.mode === "assign";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "break-all text-xl font-black text-slate-950",
								children: user.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 break-all text-xs font-bold text-slate-400",
								children: ["User ID: ", user.userId]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-600",
							children: [
								user.roles.length,
								" role",
								user.roles.length === 1 ? "" : "s"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
								label: "Member Name",
								value: user.memberFullName ?? "No member profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
								label: "Member No",
								value: user.memberNo ?? "Not issued"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
								label: "Member Status",
								value: user.memberStatus ?? "N/A"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: user.roles.length ? user.roles.map((role) => {
							const removing = action?.userId === user.userId && action.mode === "remove" && action.role === role;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onRemove(role),
								disabled: Boolean(action),
								className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-800 ring-1 ring-emerald-100 transition hover:bg-red-50 hover:text-red-700 hover:ring-red-100 disabled:cursor-not-allowed disabled:opacity-60",
								title: getRoleDescription(role),
								children: [
									removing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
									getRoleLabel(role),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								]
							}, role);
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-500",
							children: "No admin role assigned"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-black text-slate-950",
						children: "Assign new role"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-5 text-slate-500",
						children: "Only assign official MBJP admin roles to trusted accounts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selectedRole,
							onChange: (event) => onSelectedRole(event.target.value),
							disabled: availableRoles.length === 0,
							className: "h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 disabled:opacity-60",
							children: availableRoles.length ? availableRoles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: role.value,
								children: role.label
							}, role.value)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: selectedRole,
								children: "All roles assigned"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onAssign,
							disabled: Boolean(action) || availableRoles.length === 0,
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-black !text-white shadow-sm transition hover:bg-emerald-800 hover:!text-white disabled:cursor-not-allowed disabled:opacity-50",
							style: { color: "#ffffff" },
							children: [assigning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), assigning ? "Assigning..." : "Assign Role"]
						})]
					})
				]
			})]
		})
	});
}
function SummaryCard({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-wide text-slate-500",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xl font-black text-slate-950",
				children: value
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-emerald-700 [&>svg]:h-5 [&>svg]:w-5",
				children: icon
			})]
		})
	});
}
function InfoBox({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.65rem] font-black uppercase tracking-wide text-slate-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words text-sm font-black text-slate-900",
			children: value
		})]
	});
}
function getDefaultRoleForUser(user) {
	return roleOptions.find((role) => !user.roles.includes(role.value))?.value ?? "membership_admin";
}
function countModuleAdmins(counts) {
	return (counts.membership_admin ?? 0) + (counts.education_admin ?? 0) + (counts.health_admin ?? 0) + (counts.welfare_admin ?? 0) + (counts.employment_admin ?? 0) + (counts.finance_admin ?? 0);
}
//#endregion
export { AdminRolesPage as component };
