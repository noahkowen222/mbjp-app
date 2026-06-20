import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { M as MapPin, bt as CalendarDays } from "../_libs/lucide-react.mjs";
import { r as usePublicPageCopy } from "./public-page-i18n-HRVK6TkC.mjs";
import { d as formatMediaDate, p as getMediaPublicUrl, s as fetchPublishedEvents } from "./media-m7bHb8Y6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Ci7OTghx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const publicCopy = usePublicPageCopy();
	const [events, setEvents] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadEvents();
	}, []);
	async function loadEvents() {
		setLoading(true);
		setError("");
		try {
			setEvents(await fetchPublishedEvents());
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load events.");
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
						children: publicCopy.media.eventsEyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "section-title text-balance",
						children: publicCopy.media.eventsTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-base leading-8 text-slate-600",
						children: publicCopy.media.eventsDescription
					})
				]
			})
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.loadingEvents }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
			message: error,
			tone: "error"
		}) : events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.media.emptyEvents }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-7 grid gap-5 lg:grid-cols-2",
			children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event }, event.id))
		})]
	});
}
function EventCard({ event }) {
	const imageUrl = getMediaPublicUrl(event.cover_image_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-xl sm:grid sm:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[190px] bg-slate-100",
			children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageUrl,
				alt: event.title,
				className: "h-full min-h-[190px] w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-[190px] items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 text-emerald-800",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 46 })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 13 }),
						" ",
						formatMediaDate(event.event_date)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-black tracking-tight text-slate-950",
					children: event.title
				}),
				event.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 inline-flex items-center gap-2 text-sm font-bold text-slate-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 }),
						" ",
						event.location
					]
				}) : null,
				event.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-7 text-slate-600",
					children: event.description
				}) : null
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
export { EventsPage as component };
