import { t as supabase } from "./client-DuVlf4XG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-m7bHb8Y6.js
var MBJP_MEDIA_BUCKET = "mbjp-media";
var supabaseAny = supabase;
var newsCategoryOptions = [
	{
		value: "general",
		label: "General"
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
	},
	{
		value: "employment",
		label: "Employment"
	},
	{
		value: "election",
		label: "Election"
	},
	{
		value: "announcement",
		label: "Announcement"
	}
];
var contentStatusOptions = [
	{
		value: "draft",
		label: "Draft"
	},
	{
		value: "published",
		label: "Published"
	},
	{
		value: "archived",
		label: "Archived"
	}
];
function slugifyTitle(value) {
	return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 90);
}
function getMediaPublicUrl(path) {
	if (!path) return "";
	const { data } = supabase.storage.from(MBJP_MEDIA_BUCKET).getPublicUrl(path);
	return data.publicUrl;
}
async function uploadMediaFile(file, folder) {
	const extension = file.name.split(".").pop()?.toLowerCase() || "bin";
	const safeName = `${folder}/${crypto.randomUUID()}.${extension}`;
	const { error } = await supabase.storage.from(MBJP_MEDIA_BUCKET).upload(safeName, file, {
		upsert: false,
		contentType: file.type
	});
	if (error) throw error;
	return safeName;
}
async function fetchPublishedNewsPosts(category) {
	let query = supabaseAny.from("news_posts").select("*").eq("status", "published").order("is_featured", { ascending: false }).order("published_at", { ascending: false }).order("created_at", { ascending: false });
	if (category && category !== "all") query = query.eq("category", category);
	const { data, error } = await query;
	if (error) throw error;
	return data ?? [];
}
async function fetchPublishedNewsPost(slug) {
	const { data, error } = await supabaseAny.from("news_posts").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
	if (error) throw error;
	return data ?? null;
}
async function fetchNewsPostsForAdmin() {
	const { data, error } = await supabaseAny.from("news_posts").select("*").order("updated_at", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchNewsPostForAdmin(id) {
	if (id === "new") return null;
	const { data, error } = await supabaseAny.from("news_posts").select("*").eq("id", id).maybeSingle();
	if (error) throw error;
	return data ?? null;
}
async function saveNewsPost(input) {
	const user = await requireCurrentUser();
	const payload = {
		title: input.title.trim(),
		slug: slugifyTitle(input.slug || input.title),
		summary: input.summary?.trim() || null,
		content: input.content.trim(),
		category: input.category,
		cover_image_path: input.cover_image_path || null,
		status: input.status,
		is_featured: input.is_featured,
		published_at: input.status === "published" ? (/* @__PURE__ */ new Date()).toISOString() : null,
		updated_by: user.id
	};
	if (input.id && input.id !== "new") {
		const { error } = await supabaseAny.from("news_posts").update(payload).eq("id", input.id);
		if (error) throw error;
		return input.id;
	}
	const { data, error } = await supabaseAny.from("news_posts").insert({
		...payload,
		created_by: user.id
	}).select("id").single();
	if (error) throw error;
	return data.id;
}
async function fetchPublishedGalleryItems() {
	const { data, error } = await supabaseAny.from("gallery_items").select("*").eq("status", "published").order("created_at", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchGalleryItemsForAdmin() {
	const { data, error } = await supabaseAny.from("gallery_items").select("*").order("created_at", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function saveGalleryItem(input) {
	const user = await requireCurrentUser();
	const payload = {
		title: input.title.trim(),
		description: input.description?.trim() || null,
		image_path: input.image_path || null,
		category: input.category?.trim() || null,
		status: input.status,
		created_by: user.id
	};
	if (input.id) {
		const { error } = await supabaseAny.from("gallery_items").update(payload).eq("id", input.id);
		if (error) throw error;
		return input.id;
	}
	const { data, error } = await supabaseAny.from("gallery_items").insert(payload).select("id").single();
	if (error) throw error;
	return data.id;
}
async function fetchPublishedEvents() {
	const { data, error } = await supabaseAny.from("events").select("*").eq("status", "published").order("event_date", { ascending: true });
	if (error) throw error;
	return data ?? [];
}
async function fetchEventsForAdmin() {
	const { data, error } = await supabaseAny.from("events").select("*").order("event_date", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function saveEvent(input) {
	const user = await requireCurrentUser();
	const payload = {
		title: input.title.trim(),
		description: input.description?.trim() || null,
		event_date: input.event_date,
		location: input.location?.trim() || null,
		cover_image_path: input.cover_image_path || null,
		status: input.status,
		created_by: user.id
	};
	if (input.id) {
		const { error } = await supabaseAny.from("events").update(payload).eq("id", input.id);
		if (error) throw error;
		return input.id;
	}
	const { data, error } = await supabaseAny.from("events").insert(payload).select("id").single();
	if (error) throw error;
	return data.id;
}
async function currentUserCanManageMedia() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return false;
	const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", ["admin", "super_admin"]).limit(1);
	if (error) return false;
	return Boolean(data?.length);
}
async function requireCurrentUser() {
	const { data: { user }, error } = await supabase.auth.getUser();
	if (error || !user) throw new Error("You must be logged in to manage media content.");
	return user;
}
function formatMediaDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function getContentStatusClass(status) {
	if (status === "published") return "bg-emerald-50 text-emerald-800 ring-emerald-200";
	if (status === "draft") return "bg-amber-50 text-amber-800 ring-amber-200";
	return "bg-slate-100 text-slate-700 ring-slate-200";
}
function getNewsCategoryLabel(value) {
	return newsCategoryOptions.find((item) => item.value === value)?.label ?? value;
}
function splitContentBlocks(content) {
	return content.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
}
//#endregion
export { saveGalleryItem as _, fetchNewsPostForAdmin as a, splitContentBlocks as b, fetchPublishedGalleryItems as c, formatMediaDate as d, getContentStatusClass as f, saveEvent as g, newsCategoryOptions as h, fetchGalleryItemsForAdmin as i, fetchPublishedNewsPost as l, getNewsCategoryLabel as m, currentUserCanManageMedia as n, fetchNewsPostsForAdmin as o, getMediaPublicUrl as p, fetchEventsForAdmin as r, fetchPublishedEvents as s, contentStatusOptions as t, fetchPublishedNewsPosts as u, saveNewsPost as v, uploadMediaFile as x, slugifyTitle as y };
