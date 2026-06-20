import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { bt as CalendarDays, k as Newspaper, kt as ArrowLeft } from "./_libs/lucide-react.mjs";
import { b as splitContentBlocks, d as formatMediaDate, l as fetchPublishedNewsPost, m as getNewsCategoryLabel, p as getMediaPublicUrl } from "./_ssr/media-m7bHb8Y6.mjs";
import { t as Route } from "./_slug-BAfPkbTP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CMELNaRc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsDetailPage() {
	const { slug } = Route.useParams();
	const [post, setPost] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadPost();
	}, [slug]);
	async function loadPost() {
		setLoading(true);
		setError("");
		try {
			const data = await fetchPublishedNewsPost(slug);
			if (!data) setError("News update not found or not published yet.");
			setPost(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load news update.");
		} finally {
			setLoading(false);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatePage, { message: "Loading news update..." });
	if (error || !post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatePage, { message: error || "News update not found." });
	const coverUrl = getMediaPublicUrl(post.cover_image_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap py-10 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/news",
			className: "mb-5 inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to news"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-[320px] bg-emerald-950",
				children: coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: coverUrl,
					alt: post.title,
					className: "h-full max-h-[520px] min-h-[320px] w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-[320px] items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-950 text-[#f2d48f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 70 })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-8 lg:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800",
							children: getNewsCategoryLabel(post.category)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 13 }),
								" ",
								formatMediaDate(post.published_at ?? post.created_at)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl",
						children: post.title
					}),
					post.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-lg leading-8 text-slate-600",
						children: post.summary
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-4xl space-y-5 text-base leading-8 text-slate-700",
						children: splitContentBlocks(post.content).map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "m-0 whitespace-pre-line",
							children: block
						}, index))
					})
				]
			})]
		})]
	});
}
function StatePage({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-white p-6 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200",
			children: message
		})
	});
}
//#endregion
export { NewsDetailPage as component };
