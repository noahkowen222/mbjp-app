import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as RefreshCw, D as PenLine, F as LockKeyhole, I as LoaderCircle, Ot as ArrowRight, _ as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { i as fetchAllCmsPagesForAdmin, l as getCmsLanguageLabel, n as cmsPublicPages, r as currentUserCanManageCms, t as cmsLanguageOptions, u as getCmsStatusClass } from "./cms-DMLItrc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-Cj3WmlhH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCmsPage() {
	const navigate = useNavigate();
	const isNestedCmsPage = (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") || "/") !== "/admin/cms";
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [pages, setPages] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	const loadPages = (0, import_react.useCallback)(async (silent = false) => {
		if (silent) setRefreshing(true);
		else setLoading(true);
		setError("");
		try {
			if (!await currentUserCanManageCms()) {
				await navigate({ to: "/admin" });
				return;
			}
			setPages(await fetchAllCmsPagesForAdmin());
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load CMS pages.");
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [navigate]);
	(0, import_react.useEffect)(() => {
		if (isNestedCmsPage) return;
		loadPages();
	}, [loadPages, isNestedCmsPage]);
	const pagesBySlugLanguage = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		pages.forEach((page) => {
			map.set(`${page.slug}:${page.language}`, page);
		});
		return map;
	}, [pages]);
	const stats = (0, import_react.useMemo)(() => {
		return pages.reduce((acc, page) => {
			acc.total += 1;
			if (page.status === "published") acc.published += 1;
			if (page.status === "draft") acc.draft += 1;
			if (page.status === "archived") acc.archived += 1;
			return acc;
		}, {
			total: 0,
			published: 0,
			draft: 0,
			archived: 0
		});
	}, [pages]);
	if (isNestedCmsPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "CMS Pages",
		subtitle: "Manage multilingual public website pages.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm font-bold text-slate-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading CMS pages..."]
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "CMS Pages",
		subtitle: "Manage multilingual public website pages.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
										children: "Admin CMS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
										children: "Multilingual Public Website Content"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
										children: "Manage English, Urdu and Sindhi versions for About, Vision & Mission, Manifesto, Constitution, CWC and Contact pages."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadPages(true),
									disabled: refreshing,
									className: "secondary-btn pressable w-fit disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), "Refresh"]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Total Language Pages",
									value: stats.total
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Published",
									value: stats.published
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Drafts",
									value: stats.draft
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Archived",
									value: stats.archived
								})
							]
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700 ring-1 ring-red-100",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "m-0 font-semibold leading-6",
									children: "Each public CMS page can now have separate English, Urdu and Sindhi records. Only published language records are visible to public visitors. Missing or draft translations use localized fallback content on the public site."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 lg:grid-cols-2",
								children: cmsPublicPages.map((config) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmsPageCard, {
									slug: config.slug,
									title: config.fallbackTitle,
									subtitle: config.fallbackSubtitle,
									pagesBySlugLanguage
								}, config.slug))
							}),
							pages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-100",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "mx-auto h-8 w-8 text-slate-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-lg font-black text-slate-950",
										children: "No saved CMS records found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-slate-500",
										children: "Open any page/language and save it to create the first record."
									})
								]
							}) : null
						]
					})
				]
			})
		})
	});
}
function CmsPageCard({ slug, title, subtitle, pagesBySlugLanguage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black text-slate-950",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-sm leading-6 text-slate-600",
					children: subtitle
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3",
			children: cmsLanguageOptions.map((language) => {
				const page = pagesBySlugLanguage.get(`${slug}:${language.value}`);
				const status = page?.status ?? "missing";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-black text-slate-950",
						children: [language.nativeLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs font-bold text-slate-500",
							children: getCmsLanguageLabel(language.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `mt-2 inline-flex rounded-full px-3 py-1 text-[0.65rem] font-black uppercase ring-1 ${page ? getCmsStatusClass(page.status) : "bg-slate-100 text-slate-600 ring-slate-200"}`,
						children: status
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/admin/cms/${encodeURIComponent(slug)}?language=${language.value}`,
							className: "mbjp-dark-action-link inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black no-underline transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-4 w-4" }), "Edit"]
						}), page?.status === "published" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/${slug}`,
							className: "secondary-btn px-4 py-3 text-sm no-underline",
							children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}) : null]
					})]
				}, language.value);
			})
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-2xl font-black text-slate-950",
			children: value
		})]
	});
}
//#endregion
export { AdminCmsPage as component };
