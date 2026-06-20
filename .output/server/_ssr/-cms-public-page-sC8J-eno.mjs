import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, Ot as ArrowRight, _ as ShieldCheck } from "../_libs/lucide-react.mjs";
import { r as usePublicPageCopy } from "./public-page-i18n-HRVK6TkC.mjs";
import { c as getCmsConfig, o as fetchPublishedCmsPage, s as formatCmsContent } from "./cms-DMLItrc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/-cms-public-page-sC8J-eno.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CmsPublicPage({ slug }) {
	const config = (0, import_react.useMemo)(() => getCmsConfig(slug), [slug]);
	const publicCopy = usePublicPageCopy();
	const fallback = publicCopy.cms[slug];
	const [page, setPage] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function loadPage() {
			setLoading(true);
			const data = await fetchPublishedCmsPage(slug, publicCopy.language);
			if (!cancelled) {
				setPage(data);
				setLoading(false);
			}
		}
		loadPage();
		return () => {
			cancelled = true;
		};
	}, [publicCopy.language, slug]);
	const title = page?.title || fallback.title || config.fallbackTitle;
	const subtitle = page?.subtitle || fallback.subtitle || config.fallbackSubtitle;
	const blocks = formatCmsContent(page?.content || fallback.content || config.fallbackContent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-8 sm:px-4 sm:py-12",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "soft-panel relative overflow-hidden rounded-[2rem] border border-[#e8e0d1] bg-[linear-gradient(135deg,#fffdf8_0%,#f7f1e6_54%,#edf4ee_100%)] p-[clamp(1.5rem,4vw,3.6rem)] shadow-[0_28px_80px_rgba(11,42,29,0.10)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,145,44,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(11,42,29,0.10),transparent_30%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: publicCopy.textAlignClass,
						dir: publicCopy.textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-eyebrow mb-4",
								children: fallback.eyebrow || config.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-4xl text-[clamp(2.4rem,5.8vw,5.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-stone-950",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-3xl text-pretty text-base font-medium leading-8 text-stone-600 sm:text-lg",
								children: subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-8 flex flex-wrap gap-3 ${publicCopy.isRtl ? "justify-end" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/signup",
										className: "primary-btn pressable lift-hover",
										children: [publicCopy.shared.becomeMember, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${publicCopy.arrowClass}` })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/donate",
										className: "secondary-btn pressable lift-hover",
										children: publicCopy.shared.donate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "secondary-btn pressable lift-hover",
										children: publicCopy.shared.contact
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-[1.8rem] border border-emerald-900/10 bg-white/75 p-6 shadow-sm backdrop-blur ${publicCopy.textAlignClass}`,
						dir: publicCopy.textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ${publicCopy.isRtl ? "mr-auto" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 24 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-xl font-black text-stone-950",
								children: publicCopy.shared.officialContent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-stone-600",
								children: publicCopy.shared.cmsManaged
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-emerald-900",
								children: loading ? publicCopy.shared.loading : page ? publicCopy.shared.publishedFromCms : publicCopy.shared.fallbackContent
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: `rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm sm:p-8 ${publicCopy.textAlignClass}`,
					dir: publicCopy.textDir,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose-content space-y-5",
						children: blocks.map((block, index) => {
							const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
							if (lines.every((line) => line.startsWith("- "))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: `list-disc space-y-2 text-[1rem] font-semibold leading-8 text-slate-700 ${publicCopy.isRtl ? "pr-6" : "pl-6"}`,
								children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line.replace(/^-\s*/, "") }, line))
							}, index);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "m-0 whitespace-pre-line text-[1rem] font-medium leading-8 text-slate-700",
								children: block
							}, index);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: publicCopy.shared.membership,
							to: "/signup",
							text: publicCopy.shared.membershipText,
							textDir: publicCopy.textDir,
							textAlignClass: publicCopy.textAlignClass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: publicCopy.shared.programs,
							to: "/programs/education",
							text: publicCopy.shared.programsText,
							textDir: publicCopy.textDir,
							textAlignClass: publicCopy.textAlignClass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							title: publicCopy.shared.donors,
							to: "/donors",
							text: publicCopy.shared.donorsText,
							textDir: publicCopy.textDir,
							textAlignClass: publicCopy.textAlignClass
						})
					]
				})]
			})]
		})
	});
}
function InfoCard({ title, text, to, textDir, textAlignClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "group block rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md",
		dir: textDir,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex items-start gap-3 ${textAlignClass}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#9a6a12]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-base font-black text-slate-950",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm font-medium leading-6 text-slate-600",
				children: text
			})] })]
		})
	});
}
//#endregion
export { CmsPublicPage as t };
