import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, D as PenLine, E as Plus, Ot as ArrowRight, k as Newspaper } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as formatMediaDate, f as getContentStatusClass, m as getNewsCategoryLabel, n as currentUserCanManageMedia, o as fetchNewsPostsForAdmin } from "./media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-Bfs08w1C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminNewsPage() {
	const isNestedNewsPage = (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") || "/") !== "/admin/news";
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (isNestedNewsPage) return;
		loadPosts();
	}, [isNestedNewsPage]);
	async function loadPosts() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageMedia()) {
				setMessage("Only admin or super admin can manage news and media.");
				setPosts([]);
				return;
			}
			setPosts(await fetchNewsPostsForAdmin());
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load news posts.");
		} finally {
			setLoading(false);
		}
	}
	if (isNestedNewsPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "News Management",
		subtitle: "Create, edit and publish public news posts.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-6 sm:px-4 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
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
										children: "News Admin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
										children: "Create, edit, publish and archive public MBJP news posts and announcements."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/gallery",
											className: "secondary-btn no-underline",
											children: "Gallery"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/events",
											className: "secondary-btn no-underline",
											children: "Events"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void loadPosts(),
											className: "secondary-btn",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), " Refresh"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/admin/news/$id",
											params: { id: "new" },
											className: "primary-btn no-underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Create News"]
										})
									]
								})]
							})
						}),
						loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "Loading news posts..." }) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
							message,
							tone: "error"
						}) : null,
						!loading && !message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							className: "rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
							children: posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "No news posts yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 lg:grid-cols-2",
								children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex min-w-0 items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 22 })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: "text-xl font-black text-slate-950",
														children: post.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-xs font-bold text-slate-500",
														children: ["/", post.slug]
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `shrink-0 rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getContentStatusClass(post.status)}`,
												children: post.status
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-amber-50 px-3 py-1 text-amber-800",
													children: getNewsCategoryLabel(post.category)
												}),
												post.is_featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-emerald-50 px-3 py-1 text-emerald-800",
													children: "Featured"
												}) : null,
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-full bg-slate-100 px-3 py-1",
													children: ["Updated ", formatMediaDate(post.updated_at)]
												})
											]
										}),
										post.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-7 text-slate-600",
											children: post.summary
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex flex-wrap gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/admin/news/$id",
												params: { id: post.id },
												className: "mbjp-dark-action-link inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black no-underline",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 15 }), " Edit Post"]
											}), post.status === "published" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/news/$slug",
												params: { slug: post.slug },
												className: "secondary-btn no-underline",
												children: ["View Public ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
											}) : null]
										})
									]
								}, post.id))
							})
						}) : null
					]
				})
			})
		})
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-2xl p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-white text-slate-600 ring-slate-200"}`,
		children: message
	});
}
//#endregion
export { AdminNewsPage as component };
