import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ot as ArrowRight, bt as CalendarDays, k as Newspaper, y as Search } from "../_libs/lucide-react.mjs";
import { r as usePublicPageCopy } from "./public-page-i18n-HRVK6TkC.mjs";
import { d as formatMediaDate, h as newsCategoryOptions, m as getNewsCategoryLabel, p as getMediaPublicUrl, u as fetchPublishedNewsPosts } from "./media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BnUJvQoB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const publicCopy = usePublicPageCopy();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [category, setCategory] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadPosts();
	}, []);
	async function loadPosts() {
		setLoading(true);
		setError("");
		try {
			setPosts(await fetchPublishedNewsPosts());
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load news.");
		} finally {
			setLoading(false);
		}
	}
	const filteredPosts = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return posts.filter((post) => {
			const matchesCategory = category === "all" || post.category === category;
			const matchesSearch = query.length === 0 || [
				post.title,
				post.summary ?? "",
				post.content,
				post.category
			].join(" ").toLowerCase().includes(query);
			return matchesCategory && matchesSearch;
		});
	}, [
		category,
		posts,
		search
	]);
	const featured = filteredPosts.find((post) => post.is_featured) ?? filteredPosts[0];
	const rest = featured ? filteredPosts.filter((post) => post.id !== featured.id) : filteredPosts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap py-10 sm:py-14",
		dir: "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#fffdf8,#f7f1e6_54%,#edf4ee)] p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8 lg:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `max-w-3xl ${publicCopy.textAlignClass}`,
					dir: publicCopy.textDir,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-eyebrow mb-3",
							children: publicCopy.media.newsEyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "section-title text-balance",
							children: publicCopy.media.newsTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-8 text-slate-600",
							children: publicCopy.media.newsDescription
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-6 rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 lg:grid-cols-[1fr_240px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (event) => setSearch(event.target.value),
							className: "h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
							placeholder: publicCopy.media.newsSearch
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: category,
						onChange: (event) => setCategory(event.target.value),
						className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: publicCopy.shared.allCategories
						}), newsCategoryOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.value,
							children: item.label
						}, item.value))]
					})]
				})
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.loadingNews }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
				message: error,
				tone: "error"
			}) : filteredPosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.emptyNews }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedNews, {
				post: featured,
				labels: {
					featured: publicCopy.media.featured,
					readMore: publicCopy.media.readMore
				},
				arrowClass: publicCopy.arrowClass
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
				children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, {
					post,
					readMoreLabel: publicCopy.media.readMore,
					arrowClass: publicCopy.arrowClass
				}, post.id))
			})] })
		]
	});
}
function FeaturedNews({ post, labels, arrowClass }) {
	const coverUrl = getMediaPublicUrl(post.cover_image_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-7 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70 lg:grid lg:grid-cols-[1fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[260px] bg-emerald-950",
			children: coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: coverUrl,
				alt: post.title,
				className: "h-full min-h-[260px] w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-[260px] items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-950 text-[#f2d48f]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 58 })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800",
						children: labels.featured
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-800",
						children: getNewsCategoryLabel(post.category)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl",
					children: post.title
				}),
				post.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-8 text-slate-600",
					children: post.summary
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 16 }),
						" ",
						formatMediaDate(post.published_at ?? post.created_at)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/news/$slug",
					params: { slug: post.slug },
					className: "mbjp-dark-action-link mt-6 inline-flex w-fit items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black no-underline",
					children: [
						labels.readMore,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })
					]
				})
			]
		})]
	});
}
function NewsCard({ post, readMoreLabel, arrowClass }) {
	const coverUrl = getMediaPublicUrl(post.cover_image_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-[360px] flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-44 bg-slate-100",
			children: coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: coverUrl,
				alt: post.title,
				className: "h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 text-emerald-800",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 42 })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800",
						children: getNewsCategoryLabel(post.category)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-slate-500",
						children: formatMediaDate(post.published_at ?? post.created_at)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-xl font-black tracking-tight text-slate-950",
					children: post.title
				}),
				post.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-3 text-sm leading-7 text-slate-600",
					children: post.summary
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/news/$slug",
					params: { slug: post.slug },
					className: "mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-emerald-800 no-underline",
					children: [
						readMoreLabel,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })
					]
				})
			]
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
export { NewsPage as component };
