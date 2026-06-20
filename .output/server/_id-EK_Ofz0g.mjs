import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, S as Save, U as ImagePlus, kt as ArrowLeft } from "./_libs/lucide-react.mjs";
import { t as AdminShell } from "./_ssr/AdminShell-DksluTlX.mjs";
import { t as Route } from "./_id-Cva3rh3o.mjs";
import { a as fetchNewsPostForAdmin, h as newsCategoryOptions, n as currentUserCanManageMedia, p as getMediaPublicUrl, t as contentStatusOptions, v as saveNewsPost, x as uploadMediaFile, y as slugifyTitle } from "./_ssr/media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-EK_Ofz0g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	title: "",
	slug: "",
	summary: "",
	content: "",
	category: "general",
	status: "draft",
	isFeatured: false,
	coverImagePath: null
};
function AdminNewsEditorPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const isNew = id === "new";
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadPost();
	}, [id]);
	async function loadPost() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageMedia()) {
				setMessage("Only admin or super admin can manage news and media.");
				return;
			}
			if (isNew) {
				setForm(emptyForm);
				return;
			}
			const post = await fetchNewsPostForAdmin(id);
			if (!post) {
				setMessage("News post not found.");
				return;
			}
			setForm({
				title: post.title,
				slug: post.slug,
				summary: post.summary ?? "",
				content: post.content,
				category: post.category,
				status: post.status,
				isFeatured: post.is_featured,
				coverImagePath: post.cover_image_path
			});
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load post.");
		} finally {
			setLoading(false);
		}
	}
	const coverUrl = (0, import_react.useMemo)(() => getMediaPublicUrl(form.coverImagePath), [form.coverImagePath]);
	function updateForm(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	function handleTitle(value) {
		setForm((current) => ({
			...current,
			title: value,
			slug: current.slug || slugifyTitle(value)
		}));
	}
	async function handleCoverUpload(event) {
		const file = event.target.files?.[0];
		if (!file) return;
		setUploading(true);
		setMessage("");
		try {
			updateForm("coverImagePath", await uploadMediaFile(file, "news"));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Cover image upload failed.");
		} finally {
			setUploading(false);
			event.target.value = "";
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		try {
			if (!form.title.trim()) throw new Error("Title is required.");
			if (!form.content.trim()) throw new Error("Content is required.");
			await navigate({
				to: "/admin/news/$id",
				params: { id: await saveNewsPost({
					id: isNew ? void 0 : id,
					title: form.title,
					slug: form.slug || slugifyTitle(form.title),
					summary: form.summary || null,
					content: form.content,
					category: form.category,
					cover_image_path: form.coverImagePath,
					status: form.status,
					is_featured: form.isFeatured
				}) },
				replace: true
			});
			setMessage("News post saved successfully.");
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to save post.");
		} finally {
			setSaving(false);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "News Editor",
		subtitle: "Create or update a public news post.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "Loading news editor..." })
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "News Editor",
		subtitle: "Create or update a public news post.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-6 sm:px-4 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap max-w-5xl space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/news",
						className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to News Admin"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
									children: "News Editor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
									children: isNew ? "Create News Post" : "Edit News Post"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: saving,
									className: "primary-btn disabled:cursor-not-allowed disabled:opacity-60",
									children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 16,
										className: "animate-spin"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), saving ? "Saving..." : "Save Post"]
								})]
							}),
							message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-900 ring-1 ring-amber-100",
								children: message
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-5 lg:grid-cols-[1fr_300px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Title",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.title,
												onChange: (e) => handleTitle(e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "News title"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Slug",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.slug,
												onChange: (e) => updateForm("slug", slugifyTitle(e.target.value)),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "news-slug"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Summary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: form.summary,
												onChange: (e) => updateForm("summary", e.target.value),
												className: "min-h-[90px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-7 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "Short public summary"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Content",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: form.content,
												onChange: (e) => updateForm("content", e.target.value),
												className: "min-h-[300px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-7 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "Write full news content. Separate paragraphs with blank lines."
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Category",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: form.category,
												onChange: (e) => updateForm("category", e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												children: newsCategoryOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item.value,
													children: item.label
												}, item.value))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Status",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: form.status,
												onChange: (e) => updateForm("status", e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												children: contentStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item.value,
													children: item.label
												}, item.value))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: form.isFeatured,
												onChange: (e) => updateForm("isFeatured", e.target.checked)
											}), "Featured news"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-black text-slate-900",
													children: "Cover Image"
												}),
												coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: coverUrl,
													alt: "Cover preview",
													className: "mt-3 h-40 w-full rounded-xl object-cover"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 flex h-40 items-center justify-center rounded-xl bg-white text-slate-400 ring-1 ring-slate-200",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 34 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "secondary-btn mt-3 w-full cursor-pointer justify-center",
													children: [uploading ? "Uploading..." : "Upload Cover", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: "image/png,image/jpeg,image/webp",
														onChange: handleCoverUpload,
														disabled: uploading,
														className: "hidden"
													})]
												})
											]
										})
									]
								})]
							})
						]
					})]
				})
			})
		})
	});
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
function StateCard({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-white p-5 text-sm font-bold text-slate-600 ring-1 ring-slate-200",
		children: message
	});
}
//#endregion
export { AdminNewsEditorPage as component };
