import { t as supabase } from "./client-DuVlf4XG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/area-permissions-Hs7OJQCz.js
var areaPermissionModuleOptions = [
	{
		value: "all",
		label: "All Modules",
		description: "Applies to all area-sensitive admin modules."
	},
	{
		value: "membership",
		label: "Membership",
		description: "Member applications and member records."
	},
	{
		value: "education",
		label: "Education",
		description: "Education support and scholarship applications."
	},
	{
		value: "health",
		label: "Health",
		description: "Medical assistance cases."
	},
	{
		value: "welfare",
		label: "Welfare",
		description: "Welfare case management."
	},
	{
		value: "employment",
		label: "Employment",
		description: "Job seeker and CV database."
	},
	{
		value: "finance",
		label: "Finance",
		description: "Finance/donation records by area when linked."
	},
	{
		value: "reports",
		label: "Reports",
		description: "Area-scoped reports and summaries."
	}
];
var areaPermissionScopeOptions = [
	{
		value: "all",
		label: "All Sindh",
		description: "No district/taluka restriction."
	},
	{
		value: "district",
		label: "District",
		description: "Access limited to one district."
	},
	{
		value: "taluka",
		label: "Taluka",
		description: "Access limited to one taluka inside a district."
	}
];
var moduleAdminRoles = {
	membership: ["membership_admin"],
	education: ["education_admin"],
	health: ["health_admin"],
	welfare: ["welfare_admin", "ration_admin"],
	employment: ["employment_admin"],
	finance: ["finance_admin"],
	reports: []
};
var globalAdminRoles = ["admin", "super_admin"];
function getAreaPermissionModuleLabel(moduleKey) {
	return areaPermissionModuleOptions.find((item) => item.value === moduleKey)?.label ?? moduleKey;
}
function getAreaPermissionScopeLabel(scope) {
	return areaPermissionScopeOptions.find((item) => item.value === scope)?.label ?? scope;
}
function describeAreaPermission(permission) {
	if (permission.scope === "all") return "All Sindh";
	if (permission.scope === "district") return permission.district || "District not set";
	return [permission.taluka, permission.district].filter(Boolean).join(", ") || "Taluka not set";
}
function getPermissionActionText(permission) {
	const actions = [];
	if (permission.can_view) actions.push("View");
	if (permission.can_review) actions.push("Review");
	if (permission.can_approve) actions.push("Approve");
	return actions.length ? actions.join(" / ") : "No actions";
}
function hasGlobalAdminRole(roles) {
	return roles.some((role) => globalAdminRoles.includes(role));
}
function getModuleAdminRoles(moduleKey) {
	return moduleAdminRoles[moduleKey] ?? [];
}
async function currentUserCanManageAreaPermissions() {
	const { data, error } = await supabase.rpc("current_user_is_super_admin");
	if (error) throw error;
	return Boolean(data);
}
async function searchUsersForAreaPermissions(query) {
	const { data, error } = await supabase.rpc("search_users_for_area_permissions", {
		_query: query.trim(),
		_limit: 25
	});
	if (error) throw error;
	return (data ?? []).map((item) => ({
		...item,
		active_permissions_count: Number(item.active_permissions_count ?? 0),
		roles: Array.isArray(item.roles) ? item.roles : []
	}));
}
async function fetchAreaPermissionsForUser(userId) {
	const { data, error } = await supabase.rpc("get_area_permissions_for_user", { _user_id: userId });
	if (error) throw error;
	return data ?? [];
}
async function fetchMyAreaPermissions() {
	const { data, error } = await supabase.rpc("get_my_area_permissions");
	if (error) throw error;
	return data ?? [];
}
async function saveAreaPermission(input) {
	const district = input.scope === "all" ? null : input.district?.trim() || null;
	const taluka = input.scope === "taluka" ? input.taluka?.trim() || null : null;
	const { data, error } = await supabase.rpc("upsert_admin_area_permission", {
		_permission_id: input.id ?? null,
		_user_id: input.userId,
		_module_key: input.moduleKey,
		_scope: input.scope,
		_district: district,
		_taluka: taluka,
		_can_view: input.canView,
		_can_review: input.canReview,
		_can_approve: input.canApprove,
		_is_active: input.isActive,
		_notes: input.notes?.trim() || null
	});
	if (error) throw error;
	return data;
}
async function removeAreaPermission(permissionId) {
	const { error } = await supabase.rpc("delete_admin_area_permission", { _permission_id: permissionId });
	if (error) throw error;
}
async function loadCurrentAdminAreaAccess(moduleKey, action = "view", options) {
	let userId = options?.userId ?? null;
	let roles = options?.roles ? Array.from(options.roles) : null;
	if (!userId || !roles) {
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) return emptyAreaAccess(moduleKey, action, "Admin area dekhne ke liye pehle login karen.");
		userId = user.id;
		if (!roles) {
			const { data: roleRows, error: roleError } = await supabase.from("user_roles").select("role").eq("user_id", userId);
			if (roleError) return emptyAreaAccess(moduleKey, action, roleError.message, userId);
			roles = (roleRows ?? []).map((item) => item.role);
		}
	}
	const safeRoles = roles ?? [];
	const isGlobalAdmin = hasGlobalAdminRole(safeRoles);
	const requiredRoles = options?.requiredRoles ?? [...globalAdminRoles, ...getModuleAdminRoles(moduleKey)];
	const hasRequiredRole = safeRoles.some((role) => requiredRoles.includes(role));
	const relevantPermissions = (isGlobalAdmin ? [] : await safeFetchMyAreaPermissions()).filter((permission) => permissionMatchesModuleAndAction(permission, moduleKey, action));
	if (isGlobalAdmin) return {
		ok: true,
		message: "",
		userId,
		moduleKey,
		action,
		roles: safeRoles,
		permissions: [],
		isGlobalAdmin: true,
		isRestricted: false,
		summary: "All Sindh access active"
	};
	if (relevantPermissions.length > 0) return {
		ok: true,
		message: "",
		userId,
		moduleKey,
		action,
		roles: safeRoles,
		permissions: relevantPermissions,
		isGlobalAdmin: false,
		isRestricted: true,
		summary: buildAreaAccessSummary(relevantPermissions, moduleKey)
	};
	if (options?.allowAreaPermissionOnly === false && !hasRequiredRole) return emptyAreaAccess(moduleKey, action, `${getAreaPermissionModuleLabel(moduleKey)} admin access required.`, userId, safeRoles);
	if (hasRequiredRole) return emptyAreaAccess(moduleKey, action, `No active ${getAreaPermissionModuleLabel(moduleKey)} area permission assigned. Super admin must assign district/taluka access first.`, userId, safeRoles);
	return emptyAreaAccess(moduleKey, action, `${getAreaPermissionModuleLabel(moduleKey)} area access required.`, userId, safeRoles);
}
function filterRowsByAreaAccess(rows, access) {
	if (!access.ok) return [];
	if (!access.isRestricted || access.isGlobalAdmin) return rows;
	return rows.filter((row) => access.permissions.some((permission) => permissionMatchesArea(permission, access.moduleKey, row.district, row.taluka, access.action)));
}
function getAreaAccessSummaryText(access) {
	if (!access.ok) return access.message;
	if (access.isGlobalAdmin || !access.isRestricted) return "";
	return access.summary;
}
function permissionMatchesArea(permission, moduleKey, district, taluka, action = "view") {
	if (!permissionMatchesModuleAndAction(permission, moduleKey, action)) return false;
	const normalizedDistrict = normalizeAreaValue(district);
	const normalizedTaluka = normalizeAreaValue(taluka);
	const permissionDistrict = normalizeAreaValue(permission.district);
	const permissionTaluka = normalizeAreaValue(permission.taluka);
	if (permission.scope === "all") return true;
	if (permission.scope === "district") return permissionDistrict === normalizedDistrict;
	return permissionDistrict === normalizedDistrict && permissionTaluka === normalizedTaluka;
}
function permissionMatchesModuleAndAction(permission, moduleKey, action) {
	if (!permission.is_active) return false;
	if (permission.module_key !== "all" && permission.module_key !== moduleKey) return false;
	if (action === "review") return permission.can_review;
	if (action === "approve") return permission.can_approve;
	return permission.can_view;
}
function normalizeAreaValue(value) {
	return value?.trim().toLowerCase() || "";
}
async function safeFetchMyAreaPermissions() {
	try {
		return await fetchMyAreaPermissions();
	} catch (error) {
		console.error("Failed to fetch area permissions:", error);
		return [];
	}
}
function buildAreaAccessSummary(permissions, moduleKey) {
	const areas = permissions.map((permission) => describeAreaPermission(permission));
	const uniqueAreas = Array.from(new Set(areas));
	return `${getAreaPermissionModuleLabel(moduleKey)} area access active: ${uniqueAreas.join(" · ")}`;
}
function emptyAreaAccess(moduleKey, action, message, userId = null, roles = []) {
	return {
		ok: false,
		message,
		userId,
		moduleKey,
		action,
		roles,
		permissions: [],
		isGlobalAdmin: false,
		isRestricted: true,
		summary: message
	};
}
//#endregion
export { fetchAreaPermissionsForUser as a, getAreaPermissionModuleLabel as c, loadCurrentAdminAreaAccess as d, removeAreaPermission as f, describeAreaPermission as i, getAreaPermissionScopeLabel as l, searchUsersForAreaPermissions as m, areaPermissionScopeOptions as n, filterRowsByAreaAccess as o, saveAreaPermission as p, currentUserCanManageAreaPermissions as r, getAreaAccessSummaryText as s, areaPermissionModuleOptions as t, getPermissionActionText as u };
