import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { H as Image } from "../_libs/lucide-react.mjs";
import { r as usePublicPageCopy } from "./public-page-i18n-HRVK6TkC.mjs";
import { c as fetchPublishedGalleryItems, p as getMediaPublicUrl } from "./media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DAjNApfz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const publicCopy = usePublicPageCopy();
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadGallery();
	}, []);
	async function loadGallery() {
		setLoading(true);
		setError("");
		try {
			setItems(await fetchPublishedGalleryItems());
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load gallery.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap py-10 sm:py-14",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "rounded-[2rem] bg-[linear-gradient(135deg,#fffdf8,#f7f1e6_54%,#edf4ee)] p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8 lg:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: publicCopy.textAlignClass,
				dir: publicCopy.textDir,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-eyebrow mb-3",
						children: publicCopy.media.galleryEyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "section-title text-balance",
						children: publicCopy.media.galleryTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-base leading-8 text-slate-600",
						children: publicCopy.media.galleryDescription
					})
				]
			})
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.loadingGallery }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
			message: error,
			tone: "error"
		}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.emptyGallery }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
			children: items.map((item) => {
				const imageUrl = getMediaPublicUrl(item.image_path);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 bg-slate-100",
						children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imageUrl,
							alt: item.title,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 text-emerald-800",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 46 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							item.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800",
								children: item.category
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-black text-slate-950",
								children: item.title
							}),
							item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-slate-600",
								children: item.description
							}) : null
						]
					})]
				}, item.id);
			})
		})]
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mt-7 rounded-2xl p-6 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-white text-slate-600 ring-slate-200"}`,
		children: message
	});
}
//#endregion
export { GalleryPage as component };
