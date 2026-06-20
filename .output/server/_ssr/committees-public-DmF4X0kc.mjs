import { t as supabase } from "./client-DuVlf4XG.mjs";
import "./committees-BBqoo4Av.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/committees-public-DmF4X0kc.js
var committeePublicSelect = [
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
	"created_at",
	"updated_at"
].join(", ");
var committeeMemberPublicSelect = [
	"id",
	"committee_id",
	"member_id",
	"designation_title",
	"status",
	"sort_order",
	"tenure_start",
	"tenure_end",
	"member_no_snapshot",
	"full_name_snapshot",
	"father_name_snapshot",
	"district_snapshot",
	"taluka_snapshot",
	"created_at",
	"updated_at"
].join(", ");
[
	"id",
	"user_id",
	"full_name",
	"father_name",
	"member_no",
	"district",
	"taluka",
	"photo_url",
	"status"
].join(", ");
function formatOrganizationDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function formatTenure(start, end) {
	if (!start && !end) return "Tenure not set";
	if (start && end) return `${formatOrganizationDate(start)} – ${formatOrganizationDate(end)}`;
	if (start) return `From ${formatOrganizationDate(start)}`;
	return `Until ${formatOrganizationDate(end)}`;
}
function getCommitteeLocation(committee) {
	if (committee.committee_type === "central") return "Sindh / Central Executive Committee";
	if (committee.committee_type === "central_advisory") return "Sindh / Central Advisory Committee";
	if (committee.committee_type === "provincial") return "Sindh / Provincial";
	if (committee.committee_type === "divisional") return committee.division || "Division not set";
	if (committee.committee_type === "district") return committee.district || "District not set";
	return [committee.taluka, committee.district].filter(Boolean).join(", ") || "Taluka not set";
}
function getInitials(name) {
	return (name || "MBJP").split(/\s+/).map((item) => item.trim()).filter(Boolean).slice(0, 2).map((item) => item[0]?.toUpperCase()).join("") || "MBJP";
}
function formatOfficeBearerDisplayText(value) {
	return (value || "").replace(/\bRepresenttive\b/gi, "Representative").replace(/\bRepresenntive\b/gi, "Representative").replace(/\bRepresentive\b/gi, "Representative").replace(/\bJatt\s*Alliance\s*Sindh\b/gi, "Marwardi Bhatti Jamaat Pakistan").replace(/\s+/g, " ").trim();
}
function buildOfficeBearerId(record) {
	return `MBJP-OB-${new Date(record.created_at || Date.now()).getFullYear()}-${record.id.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}
async function fetchOfficeBearerVerification(officeBearerId) {
	const requestedId = officeBearerId.trim().toUpperCase();
	const shortId = requestedId.split("-").pop()?.replace(/[^A-Z0-9]/g, "") || "";
	if (!requestedId || shortId.length < 6) return null;
	const { data: membershipRows, error } = await supabase.from("organization_committee_members").select(committeeMemberPublicSelect).eq("status", "active").limit(500);
	if (error) throw error;
	const row = (membershipRows ?? []).find((item) => {
		const generatedId = buildOfficeBearerId(item).toUpperCase();
		const generatedShortId = item.id.replace(/-/g, "").slice(0, 8).toUpperCase();
		return generatedId === requestedId || generatedShortId === shortId;
	});
	if (!row) return null;
	const { data: committee, error: committeeError } = await supabase.from("organization_committees").select(committeePublicSelect).eq("id", row.committee_id).eq("status", "active").eq("public_display", true).maybeSingle();
	if (committeeError) throw committeeError;
	if (!committee) return null;
	const member = {
		id: row.member_id,
		user_id: null,
		full_name: row.full_name_snapshot,
		father_name: row.father_name_snapshot,
		member_no: row.member_no_snapshot,
		district: row.district_snapshot,
		taluka: row.taluka_snapshot,
		photo_url: null,
		status: "approved"
	};
	return {
		...row,
		committee,
		member,
		photoSignedUrl: null
	};
}
async function fetchPublicCommittees() {
	const { data, error } = await supabase.from("organization_committees").select(committeePublicSelect).eq("public_display", true).eq("status", "active").order("committee_type", { ascending: true }).order("created_at", { ascending: false });
	if (error) throw error;
	const committees = data ?? [];
	if (!committees.length) return [];
	const ids = committees.map((committee) => committee.id);
	const { data: members, error: membersError } = await supabase.from("organization_committee_members").select("committee_id").in("committee_id", ids).eq("status", "active");
	if (membersError) throw membersError;
	const counts = /* @__PURE__ */ new Map();
	(members ?? []).forEach((item) => {
		counts.set(item.committee_id, (counts.get(item.committee_id) ?? 0) + 1);
	});
	return committees.map((committee) => ({
		...committee,
		member_count: counts.get(committee.id) ?? 0
	}));
}
async function fetchPublicCommitteeDetails(id) {
	const { data: committee, error } = await supabase.from("organization_committees").select(committeePublicSelect).eq("id", id).eq("public_display", true).eq("status", "active").maybeSingle();
	if (error) throw error;
	if (!committee) return null;
	const { data: members, error: membersError } = await supabase.from("organization_committee_members").select(committeeMemberPublicSelect).eq("committee_id", id).eq("status", "active").order("sort_order", { ascending: true }).order("created_at", { ascending: true });
	if (membersError) throw membersError;
	return {
		...committee,
		members: members ?? []
	};
}
//#endregion
export { formatOfficeBearerDisplayText as a, getInitials as c, fetchPublicCommittees as i, fetchOfficeBearerVerification as n, formatTenure as o, fetchPublicCommitteeDetails as r, getCommitteeLocation as s, buildOfficeBearerId as t };
