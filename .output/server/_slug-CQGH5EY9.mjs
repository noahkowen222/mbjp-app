import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, S as Save, kt as ArrowLeft, v as ShieldAlert } from "./_libs/lucide-react.mjs";
import { n as getPublicCmsFallback } from "./_ssr/public-page-i18n-HRVK6TkC.mjs";
import { t as AdminShell } from "./_ssr/AdminShell-DksluTlX.mjs";
import { t as Route } from "./_slug-CzE_rzB5.mjs";
import { a as fetchCmsPageForAdmin, c as getCmsConfig, d as normalizeCmsLanguage, f as saveCmsPage, l as getCmsLanguageLabel, r as currentUserCanManageCms, t as cmsLanguageOptions } from "./_ssr/cms-DMLItrc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CQGH5EY9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getInitialLanguageFromUrl() {
	if (typeof window === "undefined") return "en";
	return normalizeCmsLanguage(new URLSearchParams(window.location.search).get("language"));
}
function AdminCmsEditPage() {
	const { slug } = Route.useParams();
	const navigate = useNavigate();
	const typedSlug = slug;
	const [language, setLanguage] = (0, import_react.useState)(() => getInitialLanguageFromUrl());
	const fallback = (0, import_react.useMemo)(() => {
		const localizedFallback = getPublicCmsFallback(typedSlug, language);
		const legacyFallback = getCmsConfig(typedSlug);
		return {
			title: localizedFallback?.title || legacyFallback.fallbackTitle,
			subtitle: localizedFallback?.subtitle || legacyFallback.fallbackSubtitle,
			content: localizedFallback?.content || legacyFallback.fallbackContent
		};
	}, [language, typedSlug]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [subtitle, setSubtitle] = (0, import_react.useState)("");
	const [content, setContent] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("draft");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [recordExists, setRecordExists] = (0, import_react.useState)(false);
	const loadPage = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError("");
		setMessage("");
		try {
			if (!await currentUserCanManageCms()) {
				await navigate({ to: "/admin" });
				return;
			}
			const page = await fetchCmsPageForAdmin(slug, language);
			setRecordExists(Boolean(page));
			setTitle(page?.title || fallback.title);
			setSubtitle(page?.subtitle || fallback.subtitle);
			setContent(page?.content || fallback.content);
			setStatus(page?.status || "draft");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load CMS page.");
		} finally {
			setLoading(false);
		}
	}, [
		fallback.content,
		fallback.subtitle,
		fallback.title,
		language,
		navigate,
		slug
	]);
	(0, import_react.useEffect)(() => {
		loadPage();
	}, [loadPage]);
	function handleLanguageChange(nextLanguage) {
		setLanguage(nextLanguage);
		if (typeof window !== "undefined") {
			const url = new URL(window.location.href);
			url.searchParams.set("language", nextLanguage);
			window.history.replaceState(null, "", url.toString());
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		setSaving(true);
		setError("");
		setMessage("");
		try {
			if (!title.trim()) throw new Error("Title is required.");
			if (!content.trim()) throw new Error("Content is required.");
			await saveCmsPage({
				slug,
				language,
				title,
				subtitle,
				content,
				status
			});
			setRecordExists(true);
			setMessage(`${getCmsLanguageLabel(language)} CMS page saved successfully.`);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to save CMS page.");
		} finally {
			setSaving(false);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "CMS Editor",
		subtitle: "Edit English, Urdu and Sindhi page content.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm font-bold text-slate-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading CMS editor..."]
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "CMS Editor",
		subtitle: "Edit English, Urdu and Sindhi page content.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/cms",
						className: "secondary-btn w-fit px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to CMS"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
								children: "CMS Editor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
								children: ["Edit: ", slug]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
								children: "Manage separate English, Urdu and Sindhi content for this public page. Published language versions are visible when visitors select that language."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: cmsLanguageOptions.map((item) => {
									const active = item.value === language;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleLanguageChange(item.value),
										className: `rounded-2xl px-4 py-3 text-sm font-black transition ${active ? "bg-emerald-900 text-white shadow-sm" : "bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:bg-emerald-50 hover:text-emerald-900"}`,
										"aria-pressed": active,
										children: [item.nativeLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-xs opacity-75",
											children: item.shortLabel
										})]
									}, item.value);
								})
							})
						]
					}),
					!recordExists ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900 ring-1 ring-amber-100",
						children: [
							"No saved ",
							getCmsLanguageLabel(language),
							" version exists yet. The editor is prefilled with localized fallback content. Save it to create this language record."
						]
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700 ring-1 ring-red-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), error]
					}) : null,
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800 ring-1 ring-emerald-100",
						children: message
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm ring-1 ring-slate-100 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Page",
										value: slug
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Language",
										value: getCmsLanguageLabel(language)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Record",
										value: recordExists ? "Saved" : "New"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-800",
											children: "Title"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: title,
											onChange: (event) => setTitle(event.target.value),
											dir: language === "en" ? "ltr" : "rtl",
											className: "h-12 rounded-xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-800",
											children: "Subtitle"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: subtitle,
											onChange: (event) => setSubtitle(event.target.value),
											dir: language === "en" ? "ltr" : "rtl",
											className: "h-12 rounded-xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black text-slate-800",
												children: "Content"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: content,
												onChange: (event) => setContent(event.target.value),
												dir: language === "en" ? "ltr" : "rtl",
												rows: 16,
												className: "rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-medium leading-7 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-slate-500",
												children: "Use blank lines for paragraphs. Use lines starting with “- ” for bullet lists."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 sm:max-w-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black text-slate-800",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: status,
											onChange: (event) => setStatus(event.target.value),
											className: "h-12 rounded-xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "draft",
													children: "Draft"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "published",
													children: "Published"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "archived",
													children: "Archived"
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: saving,
									className: "primary-btn pressable disabled:cursor-not-allowed disabled:opacity-60",
									children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saving ? "Saving..." : `Save ${getCmsLanguageLabel(language)} Page`]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `/${slug}`,
									className: "secondary-btn no-underline",
									children: "Preview Public Page"
								})]
							})
						]
					})
				]
			})
		})
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-black uppercase tracking-wide text-slate-500",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-bold text-slate-950",
		children: value
	})] });
}
//#endregion
export { AdminCmsEditPage as component };
