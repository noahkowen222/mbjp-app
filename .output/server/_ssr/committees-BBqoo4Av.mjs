import { t as supabase } from "./client-DuVlf4XG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/committees-BBqoo4Av.js
var committeeTypeOptions = [
	{
		value: "central",
		label: "Central Executive Committee"
	},
	{
		value: "central_advisory",
		label: "Central Advisory Committee"
	},
	{
		value: "provincial",
		label: "Provincial"
	},
	{
		value: "divisional",
		label: "Divisional"
	},
	{
		value: "district",
		label: "District"
	},
	{
		value: "taluka",
		label: "Taluka"
	}
];
var committeeStatusOptions = [
	{
		value: "active",
		label: "Active"
	},
	{
		value: "suspended",
		label: "Suspended"
	},
	{
		value: "completed",
		label: "Completed"
	},
	{
		value: "resigned",
		label: "Resigned"
	}
];
var designationScopeOptions = [
	{
		value: "central",
		label: "Central Executive"
	},
	{
		value: "central_advisory",
		label: "Central Advisory"
	},
	{
		value: "provincial",
		label: "Provincial"
	},
	{
		value: "divisional",
		label: "Divisional"
	},
	{
		value: "district",
		label: "District"
	},
	{
		value: "taluka",
		label: "Taluka"
	}
];
var committeeSelect = [
	"id",
	"committee_type",
	"name",
	"division",
	"district",
	"taluka",
	"tenure_start",
	"tenure_end",
	"status",
	"public_display",
	"notes",
	"created_by",
	"updated_by",
	"created_at",
	"updated_at"
].join(", ");
var committeeMemberSelect = [
	"id",
	"committee_id",
	"member_id",
	"designation_id",
	"designation_title",
	"status",
	"sort_order",
	"tenure_start",
	"tenure_end",
	"appointment_notes",
	"member_no_snapshot",
	"full_name_snapshot",
	"father_name_snapshot",
	"district_snapshot",
	"taluka_snapshot",
	"created_at",
	"updated_at"
].join(", ");
function getCommitteeTypeLabel(value) {
	return committeeTypeOptions.find((item) => item.value === value)?.label ?? "Level";
}
function getCommitteeStatusLabel(value) {
	return committeeStatusOptions.find((item) => item.value === value)?.label ?? "Unknown";
}
function getCommitteeStatusClass(value) {
	switch (value) {
		case "active": return "bg-emerald-50 text-emerald-800 ring-emerald-200";
		case "suspended": return "bg-red-50 text-red-800 ring-red-200";
		case "completed": return "bg-slate-100 text-slate-700 ring-slate-200";
		case "resigned": return "bg-amber-50 text-amber-800 ring-amber-200";
		default: return "bg-slate-100 text-slate-700 ring-slate-200";
	}
}
function getCommitteeLocationLabel(committee) {
	if (committee.committee_type === "central") return "Sindh / Central Executive Committee";
	if (committee.committee_type === "central_advisory") return "Sindh / Central Advisory Committee";
	if (committee.committee_type === "provincial") return "Sindh / Provincial";
	if (committee.committee_type === "divisional") return committee.division || "Division not set";
	if (committee.committee_type === "district") return committee.district || "District not set";
	return [committee.taluka, committee.district].filter(Boolean).join(", ") || "Taluka not set";
}
function formatCommitteeDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
async function currentUserCanManageCommittees() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return false;
	const { data: rpcAllowed, error: rpcError } = await supabase.rpc("current_user_can_manage_organization");
	if (!rpcError) return Boolean(rpcAllowed);
	const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", ["admin", "super_admin"]).limit(1);
	if (error) throw error;
	return Boolean(data?.length);
}
async function getCurrentUserId() {
	const { data: { user }, error } = await supabase.auth.getUser();
	if (error || !user) throw new Error("Login required.");
	return user.id;
}
async function fetchCommitteesForAdmin() {
	const { data, error } = await supabase.from("organization_committees").select(committeeSelect).order("created_at", { ascending: false });
	if (error) throw error;
	const committees = data ?? [];
	if (!committees.length) return [];
	const { data: members, error: countError } = await supabase.from("organization_committee_members").select("committee_id");
	if (countError) {
		console.warn("Committee member count query failed:", countError);
		return committees.map((committee) => ({
			...committee,
			member_count: 0
		}));
	}
	const counts = /* @__PURE__ */ new Map();
	(members ?? []).forEach((item) => {
		counts.set(item.committee_id, (counts.get(item.committee_id) ?? 0) + 1);
	});
	return committees.map((committee) => ({
		...committee,
		member_count: counts.get(committee.id) ?? 0
	}));
}
async function createCommittee(input) {
	const userId = await getCurrentUserId();
	const { data, error } = await supabase.from("organization_committees").insert({
		...input,
		created_by: userId,
		updated_by: userId
	}).select("id").single();
	if (error) throw error;
	return String(data.id);
}
async function updateCommittee(id, input) {
	const userId = await getCurrentUserId();
	const { error } = await supabase.from("organization_committees").update({
		...input,
		updated_by: userId,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("id", id);
	if (error) throw error;
}
async function fetchCommitteeDetails(id) {
	const { data: committee, error } = await supabase.from("organization_committees").select(committeeSelect).eq("id", id).maybeSingle();
	if (error) throw error;
	if (!committee) return null;
	const { data: members, error: membersError } = await supabase.from("organization_committee_members").select(committeeMemberSelect).eq("committee_id", id).order("sort_order", { ascending: true }).order("created_at", { ascending: true });
	if (membersError) throw membersError;
	return {
		...committee,
		members: members ?? []
	};
}
async function fetchDesignations(scope) {
	let query = supabase.from("organization_designations").select("id, scope, title, sort_order, is_active, created_at, updated_at").order("scope", { ascending: true }).order("sort_order", { ascending: true });
	if (scope) query = query.eq("scope", scope);
	const { data, error } = await query;
	if (error) throw error;
	return data ?? [];
}
async function createDesignation(input) {
	const { error } = await supabase.from("organization_designations").insert(input);
	if (error) throw error;
}
async function updateDesignation(id, input) {
	const { error } = await supabase.from("organization_designations").update({
		...input,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("id", id);
	if (error) throw error;
}
async function searchApprovedMembers(query, filters = {}) {
	const trimmed = query.trim();
	if (trimmed.length < 2) return [];
	let request = supabase.from("members").select("id, full_name, father_name, member_no, district, taluka, mobile, status").eq("status", "approved").or([
		`full_name.ilike.%${escapeIlike(trimmed)}%`,
		`father_name.ilike.%${escapeIlike(trimmed)}%`,
		`member_no.ilike.%${escapeIlike(trimmed)}%`,
		`mobile.ilike.%${escapeIlike(trimmed)}%`
	].join(","));
	if (filters.requireMemberNo ?? true) request = request.not("member_no", "is", null);
	if (filters.district) request = request.eq("district", filters.district);
	if (filters.taluka) request = request.eq("taluka", filters.taluka);
	const { data, error } = await request.order("full_name", { ascending: true }).limit(15);
	if (error) throw error;
	return data ?? [];
}
async function addCommitteeMember(input) {
	const userId = await getCurrentUserId();
	const { error } = await supabase.from("organization_committee_members").insert({
		committee_id: input.committee_id,
		member_id: input.member.id,
		designation_id: input.designation_id,
		designation_title: input.designation_title,
		status: input.status,
		sort_order: input.sort_order,
		tenure_start: input.tenure_start,
		tenure_end: input.tenure_end,
		appointment_notes: input.appointment_notes,
		member_no_snapshot: input.member.member_no,
		full_name_snapshot: input.member.full_name,
		father_name_snapshot: input.member.father_name,
		district_snapshot: input.member.district,
		taluka_snapshot: input.member.taluka,
		created_by: userId,
		updated_by: userId
	});
	if (error) throw error;
}
async function updateCommitteeMember(id, input) {
	const userId = await getCurrentUserId();
	const { error } = await supabase.from("organization_committee_members").update({
		...input,
		updated_by: userId,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("id", id);
	if (error) throw error;
}
async function removeCommitteeMember(id) {
	const { error } = await supabase.from("organization_committee_members").delete().eq("id", id);
	if (error) throw error;
}
function escapeIlike(value) {
	return value.replace(/[%_]/g, (match) => `\\${match}`);
}
//#endregion
export { searchApprovedMembers as _, createDesignation as a, updateDesignation as b, fetchCommitteeDetails as c, formatCommitteeDate as d, getCommitteeLocationLabel as f, removeCommitteeMember as g, getCommitteeTypeLabel as h, createCommittee as i, fetchCommitteesForAdmin as l, getCommitteeStatusLabel as m, committeeStatusOptions as n, currentUserCanManageCommittees as o, getCommitteeStatusClass as p, committeeTypeOptions as r, designationScopeOptions as s, addCommitteeMember as t, fetchDesignations as u, updateCommittee as v, updateCommitteeMember as y };
