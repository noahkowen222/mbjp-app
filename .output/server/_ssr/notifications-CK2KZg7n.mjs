//#region node_modules/.nitro/vite/services/ssr/assets/notifications-CK2KZg7n.js
function getProgramLabel(programKey) {
	switch (programKey) {
		case "education": return "Education";
		case "health": return "Health";
		case "welfare": return "Welfare";
		case "employment": return "Employment";
		default: return titleCase(programKey || "Program");
	}
}
function getProgramSingularLabel(programKey) {
	switch (programKey) {
		case "education": return "Education Application";
		case "health": return "Health Case";
		case "welfare": return "Welfare Case";
		case "employment": return "Employment Profile";
		default: return `${getProgramLabel(programKey)} Application`;
	}
}
function getProgramPath(programKey) {
	switch (programKey) {
		case "education": return "/programs/education";
		case "health": return "/programs/health";
		case "welfare": return "/programs/welfare";
		case "employment": return "/programs/employment";
		default: return "/dashboard";
	}
}
function getProgramApplyPath(programKey) {
	const path = getProgramPath(programKey);
	return path === "/dashboard" ? path : `${path}/apply`;
}
function getProgramStatusLabel(status) {
	switch (status) {
		case "submitted": return "Submitted";
		case "under_review": return "Under Review";
		case "need_more_info": return "Need More Info";
		case "approved": return "Approved";
		case "rejected": return "Rejected";
		case "paid_completed": return "Paid / Completed";
		case "completed": return "Completed";
		default: return titleCase(status || "Pending");
	}
}
function getProgramStatusClass(status) {
	switch (status) {
		case "approved":
		case "completed":
		case "paid_completed": return "border-emerald-200 bg-emerald-50 text-emerald-800";
		case "rejected": return "border-red-200 bg-red-50 text-red-800";
		case "need_more_info": return "border-orange-200 bg-orange-50 text-orange-800";
		case "under_review": return "border-blue-200 bg-blue-50 text-blue-800";
		default: return "border-amber-200 bg-amber-50 text-amber-800";
	}
}
function getNotificationCategoryLabel(category) {
	switch (category) {
		case "education": return "Education";
		case "health": return "Health";
		case "welfare": return "Welfare";
		case "employment": return "Employment";
		case "donation": return "Donation";
		case "membership": return "Membership";
		case "finance": return "Finance";
		default: return "General";
	}
}
function getNotificationTone(category) {
	switch (category) {
		case "education": return "border-amber-200 bg-amber-50 text-amber-800";
		case "health": return "border-red-200 bg-red-50 text-red-800";
		case "welfare": return "border-orange-200 bg-orange-50 text-orange-800";
		case "employment": return "border-blue-200 bg-blue-50 text-blue-800";
		case "donation":
		case "finance": return "border-emerald-200 bg-emerald-50 text-emerald-800";
		default: return "border-slate-200 bg-slate-50 text-slate-700";
	}
}
function formatNotificationDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function titleCase(value) {
	return value.replace(/_/g, " ").trim().split(/\s+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
//#endregion
export { getProgramPath as a, getProgramStatusLabel as c, getProgramApplyPath as i, getNotificationCategoryLabel as n, getProgramSingularLabel as o, getNotificationTone as r, getProgramStatusClass as s, formatNotificationDate as t };
