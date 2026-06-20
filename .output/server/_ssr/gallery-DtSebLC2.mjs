import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as RefreshCw, I as LoaderCircle, S as Save, U as ImagePlus } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { _ as saveGalleryItem, f as getContentStatusClass, i as fetchGalleryItemsForAdmin, n as currentUserCanManageMedia, p as getMediaPublicUrl, t as contentStatusOptions, x as uploadMediaFile } from "./media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DtSebLC2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	title: "",
	description: "",
	category: "",
	imagePath: null,
	status: "draft"
};
function AdminGalleryPage() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadGallery();
	}, []);
	async function loadGallery() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageMedia()) {
				setMessage("Only admin or super admin can manage gallery.");
				setItems([]);
				return;
			}
			setItems(await fetchGalleryItemsForAdmin());
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load gallery.");
		} finally {
			setLoading(false);
		}
	}
	const imageUrl = (0, import_react.useMemo)(() => getMediaPublicUrl(form.imagePath), [form.imagePath]);
	function update(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	function editItem(item) {
		setForm({
			id: item.id,
			title: item.title,
			description: item.description ?? "",
			category: item.category ?? "",
			imagePath: item.image_path,
			status: item.status
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	async function handleImageUpload(event) {
		const file = event.target.files?.[0];
		if (!file) return;
		setUploading(true);
		setMessage("");
		try {
			update("imagePath", await uploadMediaFile(file, "gallery"));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Image upload failed.");
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
			if (!form.imagePath) throw new Error("Please upload an image.");
			await saveGalleryItem({
				id: form.id,
				title: form.title,
				description: form.description || null,
				category: form.category || null,
				image_path: form.imagePath,
				status: form.status
			});
			setForm(emptyForm);
			await loadGallery();
			setMessage("Gallery item saved successfully.");
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to save gallery item.");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Gallery Management",
		subtitle: "Upload and manage public gallery items.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-6 sm:px-4 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
									children: "News & Media"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
									children: "Gallery Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
									children: "Upload and publish public gallery images."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void loadGallery(),
								className: "secondary-btn",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), " Refresh"]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-6 lg:grid-cols-[420px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-slate-950",
									children: form.id ? "Edit Gallery Item" : "Add Gallery Item"
								}),
								message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-900 ring-1 ring-amber-100",
									children: message
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Title",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.title,
												onChange: (e) => update("title", e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Category",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: form.category,
												onChange: (e) => update("category", e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												placeholder: "Education, Event, Welfare..."
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Description",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: form.description,
												onChange: (e) => update("description", e.target.value),
												className: "min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-7 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Status",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: form.status,
												onChange: (e) => update("status", e.target.value),
												className: "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
												children: contentStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: item.value,
													children: item.label
												}, item.value))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
											children: [imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imageUrl,
												alt: "Gallery preview",
												className: "h-48 w-full rounded-xl object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-48 items-center justify-center rounded-xl bg-white text-slate-400 ring-1 ring-slate-200",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 34 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "secondary-btn mt-3 w-full cursor-pointer justify-center",
												children: [uploading ? "Uploading..." : "Upload Image", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: "image/png,image/jpeg,image/webp",
													onChange: handleImageUpload,
													disabled: uploading,
													className: "hidden"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: saving,
											className: "primary-btn w-full disabled:cursor-not-allowed disabled:opacity-60",
											children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
												size: 16,
												className: "animate-spin"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 16 }), " Save Gallery Item"]
										}),
										form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setForm(emptyForm),
											className: "secondary-btn w-full justify-center",
											children: "Cancel edit"
										}) : null
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "Loading gallery..." }) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "No gallery items yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryAdminCard, {
									item,
									onEdit: editItem
								}, item.id))
							})
						})]
					})]
				})
			})
		})
	});
}
function GalleryAdminCard({ item, onEdit }) {
	const imageUrl = getMediaPublicUrl(item.image_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm",
		children: [imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: imageUrl,
			alt: item.title,
			className: "h-40 w-full object-cover"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getContentStatusClass(item.status)}`,
					children: item.status
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-lg font-black text-slate-950",
					children: item.title
				}),
				item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-slate-600",
					children: item.description
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onEdit(item),
					className: "mbjp-dark-action-link mt-4 inline-flex rounded-xl px-4 py-3 text-sm font-black no-underline",
					children: "Edit"
				})
			]
		})]
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
		className: "rounded-2xl bg-slate-50 p-5 text-sm font-bold text-slate-600 ring-1 ring-slate-100",
		children: message
	});
}
//#endregion
export { AdminGalleryPage as component };
