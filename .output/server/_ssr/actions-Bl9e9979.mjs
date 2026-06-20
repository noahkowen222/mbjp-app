import { n as createServerRpc, r as createServerFn } from "./ssr.mjs";
import { t as createSupabaseAdminClient } from "./admin-w8NrS-lk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-Bl9e9979.js
var MIN_REJECTION_REASON_LENGTH = 10;
var MAX_REJECTION_REASON_LENGTH = 500;
var MEMBERSHIP_REVIEW_ROLES = [
	"admin",
	"super_admin",
	"membership_admin"
];
function toErrorMessage(error, fallback) {
	return error instanceof Error ? error.message : fallback;
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function readString(data, fieldName) {
	const value = data[fieldName];
	if (typeof value !== "string") throw new Error(`${fieldName} must be a string.`);
	const normalized = value.trim();
	if (!normalized) throw new Error(`${fieldName} is required.`);
	return normalized;
}
function requireUuid(value, fieldName) {
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) throw new Error(`${fieldName} is not valid.`);
	return value;
}
function normalizeRejectionReason(value) {
	const normalized = value.trim().replace(/\s+/g, " ");
	if (normalized.length < MIN_REJECTION_REASON_LENGTH) throw new Error(`Rejection reason must be at least ${MIN_REJECTION_REASON_LENGTH} characters.`);
	if (normalized.length > MAX_REJECTION_REASON_LENGTH) throw new Error(`Rejection reason must be less than ${MAX_REJECTION_REASON_LENGTH} characters.`);
	return normalized;
}
function validateApproveInput(data) {
	if (!isRecord(data)) throw new Error("Invalid approval request.");
	return {
		memberId: requireUuid(readString(data, "memberId"), "Member ID"),
		accessToken: readString(data, "accessToken")
	};
}
function validateRejectInput(data) {
	if (!isRecord(data)) throw new Error("Invalid rejection request.");
	return {
		memberId: requireUuid(readString(data, "memberId"), "Member ID"),
		accessToken: readString(data, "accessToken"),
		rejectionReason: normalizeRejectionReason(readString(data, "rejectionReason"))
	};
}
async function requireMembershipReviewer(accessToken) {
	const supabaseAdmin = createSupabaseAdminClient();
	const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(accessToken);
	if (userError) throw new Error(userError.message);
	if (!userData.user) throw new Error("Invalid or expired session.");
	const { data: role, error: roleError } = await supabaseAdmin.from("user_roles").select("id, role").eq("user_id", userData.user.id).in("role", MEMBERSHIP_REVIEW_ROLES).limit(1).maybeSingle();
	if (roleError) throw new Error(roleError.message);
	if (!role) throw new Error("Membership admin access required.");
	return {
		supabaseAdmin,
		user: userData.user
	};
}
async function getMemberForReview(supabaseAdmin, memberId) {
	const { data, error } = await supabaseAdmin.from("members").select("id, full_name, status, member_no").eq("id", memberId).maybeSingle();
	if (error) throw new Error(error.message);
	if (!data) throw new Error("Member record not found.");
	return data;
}
function requirePendingMember(member, action) {
	if (member.status === "approved") throw new Error(`${member.full_name} is already approved. This application cannot be ${action}d again.`);
	if (member.status === "rejected") throw new Error(`${member.full_name} is already rejected. Ask the member to update and resubmit the application first.`);
	if (member.status !== "pending") throw new Error("Only pending applications can be reviewed.");
}
var approveMemberAction_createServerFn_handler = createServerRpc({
	id: "8d72772939d2efcea0f543551b5454ed6075fec6aa84dd749340cafe6bae0527",
	name: "approveMemberAction",
	filename: "src/lib/admin/actions.ts"
}, (opts) => approveMemberAction.__executeServer(opts));
var approveMemberAction = createServerFn({ method: "POST" }).inputValidator(validateApproveInput).handler(approveMemberAction_createServerFn_handler, async ({ data }) => {
	try {
		const { supabaseAdmin, user } = await requireMembershipReviewer(data.accessToken);
		requirePendingMember(await getMemberForReview(supabaseAdmin, data.memberId), "approve");
		const { data: approved, error } = await supabaseAdmin.rpc("approve_member", {
			_member_id: data.memberId,
			_reviewed_by: user.id
		});
		if (error) throw new Error(error.message);
		return {
			ok: true,
			action: "approved",
			memberId: data.memberId,
			reviewedBy: user.id,
			result: approved
		};
	} catch (error) {
		throw new Error(toErrorMessage(error, "Failed to approve member."));
	}
});
var rejectMemberAction_createServerFn_handler = createServerRpc({
	id: "73c760414c7686e70393c1092eaef38e2a1b78b359d5e498e947b787e69554e9",
	name: "rejectMemberAction",
	filename: "src/lib/admin/actions.ts"
}, (opts) => rejectMemberAction.__executeServer(opts));
var rejectMemberAction = createServerFn({ method: "POST" }).inputValidator(validateRejectInput).handler(rejectMemberAction_createServerFn_handler, async ({ data }) => {
	try {
		const { supabaseAdmin, user } = await requireMembershipReviewer(data.accessToken);
		requirePendingMember(await getMemberForReview(supabaseAdmin, data.memberId), "reject");
		const { data: rejected, error } = await supabaseAdmin.rpc("reject_member", {
			_member_id: data.memberId,
			_rejection_reason: data.rejectionReason,
			_reviewed_by: user.id
		});
		if (error) throw new Error(error.message);
		return {
			ok: true,
			action: "rejected",
			memberId: data.memberId,
			reviewedBy: user.id,
			rejectionReason: data.rejectionReason,
			result: rejected
		};
	} catch (error) {
		throw new Error(toErrorMessage(error, "Failed to reject member."));
	}
});
//#endregion
export { approveMemberAction_createServerFn_handler, rejectMemberAction_createServerFn_handler };
