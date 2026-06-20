import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, I as LoaderCircle, f as TriangleAlert, ht as CircleCheck, wt as Bell } from "../_libs/lucide-react.mjs";
import { n as getNotificationCategoryLabel, r as getNotificationTone, t as formatNotificationDate } from "./notifications-CK2KZg7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-W2DWNEjO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NOTIFICATIONS_PAGE_SIZE = 50;
function NotificationsPage() {
	const navigate = useNavigate();
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [loadingMore, setLoadingMore] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [totalCount, setTotalCount] = (0, import_react.useState)(0);
	const [hasMore, setHasMore] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadNotifications();
	}, []);
	async function loadNotifications(options) {
		const silent = options?.silent ?? false;
		const append = options?.append ?? false;
		const from = append ? items.length : 0;
		const to = from + NOTIFICATIONS_PAGE_SIZE - 1;
		if (append) setLoadingMore(true);
		else if (silent) setRefreshing(true);
		else setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			await navigate({
				to: "/login",
				replace: true
			});
			return;
		}
		const { data, error, count } = await supabase.from("notifications").select("id, user_id, title, message, category, related_type, related_id, action_url, is_read, read_at, created_at", { count: "exact" }).eq("user_id", user.id).order("created_at", { ascending: false }).range(from, to);
		if (error) {
			setMessage(error.message);
			if (!append) setItems([]);
			setLoading(false);
			setRefreshing(false);
			setLoadingMore(false);
			return;
		}
		const nextItems = data || [];
		const readAt = (/* @__PURE__ */ new Date()).toISOString();
		const hasUnreadItems = nextItems.some((item) => !item.is_read);
		const displayItems = nextItems.map((item) => item.is_read ? item : {
			...item,
			is_read: true,
			read_at: item.read_at || readAt
		});
		const nextCount = count ?? (append ? items.length + displayItems.length : displayItems.length);
		const mergedItems = append ? [...items, ...displayItems] : displayItems;
		setItems(mergedItems);
		setTotalCount(nextCount);
		setHasMore(mergedItems.length < nextCount);
		setLoading(false);
		setRefreshing(false);
		setLoadingMore(false);
		if (hasUnreadItems) {
			const { error: readError } = await supabase.from("notifications").update({
				is_read: true,
				read_at: readAt
			}).eq("user_id", user.id).eq("is_read", false);
			if (readError) setMessage(readError.message);
		}
		window.dispatchEvent(new CustomEvent("mbjp-notifications-updated"));
	}
	async function markAllRead() {
		const { data: { user } } = await supabase.auth.getUser();
		if (!user) return;
		const { error } = await supabase.from("notifications").update({
			is_read: true,
			read_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", user.id).eq("is_read", false);
		if (error) {
			setMessage(error.message);
			return;
		}
		setItems((current) => current.map((item) => ({
			...item,
			is_read: true,
			read_at: item.read_at || (/* @__PURE__ */ new Date()).toISOString()
		})));
		window.dispatchEvent(new CustomEvent("mbjp-notifications-updated"));
	}
	const unreadCount = (0, import_react.useMemo)(() => items.filter((item) => !item.is_read).length, [items]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl border border-slate-200 bg-white p-8 shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm font-bold text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading notifications..."]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-8 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-6 text-white md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-amber-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), "In-app Updates"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-4xl font-black md:text-6xl",
									children: "Notifications"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-base leading-8 text-white/70",
									children: "Program status, donation verification aur important member updates yahan show honge."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: markAllRead,
									disabled: unreadCount === 0,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), "Mark all read"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadNotifications({ silent: true }),
									disabled: refreshing,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), "Refresh"]
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-5 md:grid-cols-3 md:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								title: "Total Updates",
								value: totalCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								title: "Unread",
								value: unreadCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								title: "Loaded",
								value: items.length
							})
						]
					})]
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6",
					children: items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Showing latest ",
									items.length,
									" of ",
									totalCount || items.length,
									" notifications"
								] }), refreshing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Refreshing..." }) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationCard, { item }, item.id))
							}),
							hasMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void loadNotifications({ append: true }),
									disabled: loadingMore,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60",
									children: loadingMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Loading..."] }) : "Load More"
								})
							}) : null
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-slate-50 p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mx-auto h-10 w-10 text-slate-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-2xl font-black text-slate-950",
								children: "No notifications yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-500",
								children: "Jab admin aapki application, case ya donation status update karega to notification yahan show hogi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "secondary-btn mt-6",
								children: "Back to Dashboard"
							})
						]
					})
				})
			]
		})
	});
}
function NotificationCard({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: `rounded-3xl border p-5 shadow-sm ${item.is_read ? "bg-white opacity-80" : "bg-white"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full border px-3 py-1 text-xs font-black ${getNotificationTone(item.category)}`,
							children: getNotificationCategoryLabel(item.category)
						}), !item.is_read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-600 px-3 py-1 text-xs font-black text-white",
							children: "New"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-xl font-black text-slate-950",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-line text-sm font-semibold leading-7 text-slate-600",
						children: item.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400",
						children: formatNotificationDate(item.created_at)
					})
				]
			}), item.action_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.action_url,
				className: "inline-flex h-10 items-center justify-center rounded-xl bg-emerald-900 px-4 text-sm font-black text-white no-underline shadow-sm ring-1 ring-emerald-900/10 transition hover:bg-emerald-800 visited:text-white",
				children: "Open"
			}) : null]
		})
	});
}
function StatCard({ title, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-slate-50 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-[0.18em] text-slate-400",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-3xl font-black text-slate-950",
			children: value
		})]
	});
}
//#endregion
export { NotificationsPage as component };
