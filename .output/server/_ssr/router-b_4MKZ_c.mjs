import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRoute, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$50 } from "../_id-C3WM87D5.mjs";
import { n as LanguageSwitcher, r as useI18n, t as I18nProvider } from "./i18n-XdhEhh6o.mjs";
import { $ as FileText, A as Network, G as IdCard, P as LogOut, St as BookOpenText, V as Images, X as HandHeart, Y as HeartPulse, Z as GraduationCap, _ as ShieldCheck, b as ScrollText, bt as CalendarDays, d as Trophy, s as UserPlus, vt as ChevronDown, wt as Bell, xt as BriefcaseBusiness, z as Landmark } from "../_libs/lucide-react.mjs";
import { t as Route$51 } from "../_id-DHtvXM9Z.mjs";
import { t as Route$52 } from "../_id-BuFEJsJl.mjs";
import { t as Route$53 } from "../_id-BthNaM8U.mjs";
import { t as Route$54 } from "../_id-DKmUZc8S.mjs";
import { t as Route$55 } from "../_id-D65Xa75B.mjs";
import { t as Route$56 } from "../_id-BIyvw3wQ.mjs";
import { t as Route$57 } from "../_id--bpmL043.mjs";
import { t as Route$58 } from "../_id-Cva3rh3o.mjs";
import { t as Route$59 } from "../_id-DSydUYr-.mjs";
import { t as Route$60 } from "../_id-DXVILamk.mjs";
import { t as Route$61 } from "../_id-BvGa4Njr.mjs";
import { t as Route$62 } from "../_memberNo-Dus0tWAI.mjs";
import { t as Route$63 } from "../_officeBearerId-BUgYzVOe.mjs";
import { t as Route$64 } from "../_slug-BAfPkbTP.mjs";
import { t as Route$65 } from "../_slug-CzE_rzB5.mjs";
import { t as Route$66 } from "./card-BscaLR13.mjs";
import { t as Route$67 } from "./designation-card-BJJWcS21.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as setupRouterSsrQueryIntegration } from "../_libs/@tanstack/react-router-ssr-query+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-b_4MKZ_c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var adminRoleNames = [
	"admin",
	"super_admin",
	"membership_admin",
	"education_admin",
	"health_admin",
	"employment_admin",
	"ration_admin",
	"welfare_admin",
	"finance_admin"
];
var publicPageItems = [
	{
		to: "/about",
		label: "About MBJP",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }),
		description: "Introduction, purpose and community platform overview"
	},
	{
		to: "/vision-mission",
		label: "Vision & Mission",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { size: 16 }),
		description: "MBJP vision, mission and service direction"
	},
	{
		to: "/manifesto",
		label: "Manifesto / Manshoor",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { size: 16 }),
		description: "Core manifesto points and public commitment"
	},
	{
		to: "/constitution",
		label: "Constitution",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, { size: 16 }),
		description: "Rules, structure and constitutional framework"
	},
	{
		to: "/cwc",
		label: "Central Working Committee",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }),
		description: "Central cabinet and top-level governing body"
	},
	{
		to: "/committees",
		label: "Committees",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { size: 16 }),
		description: "Central, divisional, district and taluka committee office bearers"
	},
	{
		to: "/gallery",
		label: "Gallery",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { size: 16 }),
		description: "Program photos, meetings and community activity"
	},
	{
		to: "/events",
		label: "Events",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 16 }),
		description: "Upcoming events, meetings and public activities"
	},
	{
		to: "/contact",
		label: "Contact",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { size: 16 }),
		description: "Contact, WhatsApp and coordination details"
	}
];
var programItems = [
	{
		to: "/programs/education",
		label: "Education Support",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 16 }),
		description: "Scholarships, fee support and skills training"
	},
	{
		to: "/programs/health",
		label: "Health Assistance",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { size: 16 }),
		description: "Medical help and emergency treatment cases"
	},
	{
		to: "/programs/welfare",
		label: "Welfare Cases",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { size: 16 }),
		description: "Financial, ration, orphan and emergency support"
	},
	{
		to: "/programs/employment",
		label: "Employment Program",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { size: 16 }),
		description: "CV database, skills and placement support"
	}
];
var publicPageTranslationKeys = {
	"/about": "about",
	"/vision-mission": "visionMission",
	"/manifesto": "manifesto",
	"/constitution": "constitution",
	"/cwc": "cwc",
	"/committees": "committees",
	"/gallery": "gallery",
	"/events": "events",
	"/contact": "contact"
};
var programTranslationKeys = {
	"/programs/education": "education",
	"/programs/health": "health",
	"/programs/welfare": "welfare",
	"/programs/employment": "employment"
};
function getLoggedOutAccountItems(labels) {
	return [
		{
			to: "/login",
			label: labels.login,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 16 })
		},
		{
			to: "/signup",
			label: labels.joinNow,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { size: 16 })
		},
		{
			to: "/register",
			label: labels.register,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 16 })
		}
	];
}
function getMemberAccountItems(labels, unreadNotificationCount = 0) {
	return [
		{
			to: "/dashboard",
			label: labels.dashboard,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 })
		},
		{
			to: "/card",
			label: labels.digitalCard,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { size: 16 })
		},
		{
			to: "/notifications",
			label: labels.updates,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 16 }),
			badgeCount: unreadNotificationCount
		},
		{
			to: "/donors",
			label: labels.donors,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 16 })
		},
		{
			to: "/register",
			label: labels.register,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 16 })
		}
	];
}
function useAuthRole() {
	const [authLoading, setAuthLoading] = (0, import_react.useState)(true);
	const [logoutLoading, setLogoutLoading] = (0, import_react.useState)(false);
	const [isLoggedIn, setIsLoggedIn] = (0, import_react.useState)(false);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [accountEmail, setAccountEmail] = (0, import_react.useState)("");
	const checkAdmin = (0, import_react.useCallback)(async (userId) => {
		const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", userId).in("role", adminRoleNames).limit(1);
		if (error) {
			console.error("Admin role check failed:", error.message);
			return false;
		}
		return Boolean(data?.length);
	}, []);
	const syncAuthState = (0, import_react.useCallback)(async (user) => {
		const userId = user?.id ?? null;
		setIsLoggedIn(Boolean(userId));
		setAccountEmail(user?.email ?? "");
		if (userId) setIsAdmin(await checkAdmin(userId));
		else setIsAdmin(false);
		setAuthLoading(false);
	}, [checkAdmin]);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		async function loadSession() {
			const { data, error } = await supabase.auth.getSession();
			if (!mounted) return;
			if (error) {
				console.error("Session load failed:", error.message);
				setIsLoggedIn(false);
				setIsAdmin(false);
				setAccountEmail("");
				setAuthLoading(false);
				return;
			}
			await syncAuthState(data.session?.user ?? null);
		}
		loadSession();
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			if (!mounted) return;
			syncAuthState(session?.user ?? null);
		});
		return () => {
			mounted = false;
			subscription.unsubscribe();
		};
	}, [syncAuthState]);
	const accountInitial = (accountEmail.split("@")[0]?.trim().charAt(0) || "U").toUpperCase();
	async function logout() {
		setLogoutLoading(true);
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error("Logout failed:", error.message);
			setLogoutLoading(false);
			return false;
		}
		setIsLoggedIn(false);
		setIsAdmin(false);
		setAccountEmail("");
		setLogoutLoading(false);
		return true;
	}
	return {
		authLoading,
		logoutLoading,
		isLoggedIn,
		isAdmin,
		accountEmail,
		accountInitial,
		logout
	};
}
function AccountMenuButton({ accountInitial, accountOpen, isLoggedIn, mobile = false, onToggle, unreadCount = 0 }) {
	const { t } = useI18n();
	const displayUnreadCount = unreadCount > 99 ? "99+" : unreadCount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: `animate-fade-up relative flex items-center justify-center rounded-full bg-emerald-900 text-sm font-black text-white shadow-sm ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-emerald-800 ${mobile ? "site-account-trigger-mobile h-10 w-10 text-xs" : "h-12 w-12"}`,
		"aria-label": t("account.open"),
		"aria-expanded": accountOpen,
		"aria-haspopup": "menu",
		children: [isLoggedIn ? accountInitial : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
			size: 18,
			"aria-hidden": "true"
		}), isLoggedIn && unreadCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-1.5 -top-1.5 inline-flex min-w-[1.25rem] items-center justify-center rounded-full border-2 border-white bg-red-600 px-1.5 py-0.5 text-[0.625rem] font-black leading-none text-white shadow-sm",
			children: displayUnreadCount
		}) : null]
	});
}
function AccountMenuPanel({ accountOpen, accountItems, isLoggedIn, logoutLoading, mobile = false, onLogout, isActive }) {
	const { direction, t } = useI18n();
	const textAlignClass = direction === "rtl" ? "text-right" : "text-left";
	if (!accountOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: direction,
		onClick: (event) => event.stopPropagation(),
		onWheel: (event) => event.stopPropagation(),
		onTouchMove: (event) => event.stopPropagation(),
		className: `${mobile ? "site-account-menu-mobile site-dropdown-scroll absolute right-0 top-full z-[80] mt-3 w-[min(17.75rem,calc(100vw-1rem))]" : "site-dropdown-scroll absolute right-0 top-full z-[70] mt-3 w-72"} ${textAlignClass} rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)]`,
		children: [accountItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactDropdownItem, {
			item,
			active: isActive(item.to)
		}, `${item.to}-${item.label}`)), isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onLogout,
			disabled: logoutLoading,
			className: "site-account-logout mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-black text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
				size: 16,
				"aria-hidden": "true"
			}), logoutLoading ? t("auth.loggingOut") : t("auth.logout")]
		}) : null]
	});
}
function CompactDropdownItem({ item, active }) {
	const { direction } = useI18n();
	const textAlignClass = direction === "rtl" ? "text-right" : "text-left";
	const displayBadgeCount = item.badgeCount && item.badgeCount > 99 ? "99+" : item.badgeCount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		className: `site-account-menu-item group flex items-center gap-3 rounded-2xl p-3 no-underline transition ${textAlignClass} ${active ? "bg-emerald-50 text-emerald-900" : "text-slate-700 hover:bg-white hover:text-emerald-900"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "site-account-menu-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm ring-1 ring-slate-100",
			children: item.icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-1 items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "site-account-menu-label min-w-0 break-words text-sm font-black leading-tight",
				children: item.label
			}), item.badgeCount && item.badgeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex min-w-[1.5rem] items-center justify-center rounded-full bg-red-600 px-2 py-1 text-[0.7rem] font-black leading-none text-white shadow-sm",
				children: displayBadgeCount
			}) : null]
		})]
	});
}
function MoreDropdown({ label, groupTitle, items, open, active, onToggle, onClose, isActive }) {
	const { direction } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			className: `nav-link animate-fade-up delay-5 gap-1 ${active ? "is-active" : ""}`,
			"aria-expanded": open,
			"aria-haspopup": "menu",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				size: 14,
				className: `transition ${open ? "rotate-180" : ""}`
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: onClose,
			dir: direction,
			className: `site-more-menu absolute right-0 top-full z-[60] mt-4 w-[min(420px,calc(100vw-1rem))] rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ${direction === "rtl" ? "text-right" : "text-left"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownGroup, {
				title: groupTitle,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1 sm:grid-cols-2",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicPageDropdownItem, {
						item,
						active: isActive(item.to)
					}, item.to))
				})
			})
		}) : null]
	});
}
function DropdownGroup({ title, children }) {
	const { direction } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl bg-slate-50/70 p-2 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `px-2 pb-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-500 ${direction === "rtl" ? "text-right" : "text-left"}`,
			children: title
		}), children]
	});
}
function PublicPageDropdownItem({ item, active }) {
	const { direction } = useI18n();
	const textAlignClass = direction === "rtl" ? "text-right" : "text-left";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		className: `group flex items-start gap-3 rounded-2xl p-3 no-underline transition ${textAlignClass} ${active ? "bg-amber-50 text-amber-900" : "text-slate-700 hover:bg-slate-50 hover:text-amber-900"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-white",
			children: item.icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-black",
				children: item.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs font-semibold leading-5 text-slate-500",
				children: item.description
			})]
		})]
	});
}
function NavLink({ to, label, active, delayClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: `nav-link animate-fade-up ${delayClass} ${active ? "is-active" : ""}`,
		"aria-current": active ? "page" : void 0,
		children: label
	});
}
function ProgramsDropdown({ label, items, open, active, onToggle, onClose, isActive }) {
	const { direction } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			className: `nav-link animate-fade-up delay-2 gap-1 ${active ? "is-active" : ""}`,
			"aria-expanded": open,
			"aria-haspopup": "menu",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				size: 14,
				className: `transition ${open ? "rotate-180" : ""}`
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: onClose,
			dir: direction,
			className: `absolute left-0 top-full z-[60] mt-4 w-[min(320px,calc(100vw-1rem))] rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ${direction === "rtl" ? "text-right" : "text-left"}`,
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramDropdownItem, {
				item,
				active: isActive(item.to)
			}, item.to))
		}) : null]
	});
}
function ProgramDropdownItem({ item, active }) {
	const { direction } = useI18n();
	const textAlignClass = direction === "rtl" ? "text-right" : "text-left";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		className: `group flex items-start gap-3 rounded-2xl p-3 no-underline transition ${textAlignClass} ${active ? "bg-emerald-50 text-emerald-900" : "text-slate-700 hover:bg-slate-50 hover:text-emerald-900"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-white",
			children: item.icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-black",
				children: item.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs font-semibold leading-5 text-slate-500",
				children: item.description
			})]
		})]
	});
}
function Header({ compact }) {
	const { language, t } = useI18n();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const [unreadNotificationCount, setUnreadNotificationCount] = (0, import_react.useState)(0);
	const headerRef = (0, import_react.useRef)(null);
	const { authLoading, logoutLoading, isLoggedIn, isAdmin, accountInitial, logout } = useAuthRole();
	const programsOpen = openMenu === "programs";
	const moreOpen = openMenu === "more";
	const accountOpen = openMenu === "account";
	(0, import_react.useEffect)(() => {
		setOpenMenu(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!openMenu) return;
		function handlePointerDown(event) {
			const target = event.target;
			if (target instanceof Node && headerRef.current?.contains(target)) return;
			setOpenMenu(null);
		}
		function handleKeyDown(event) {
			if (event.key === "Escape") setOpenMenu(null);
		}
		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("touchstart", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("touchstart", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [openMenu]);
	(0, import_react.useEffect)(() => {
		if (!openMenu) return;
		if (!window.matchMedia("(max-width: 1023px)").matches) return;
		const scrollY = window.scrollY;
		const previousOverflow = document.body.style.overflow;
		const previousPosition = document.body.style.position;
		const previousTop = document.body.style.top;
		const previousWidth = document.body.style.width;
		document.body.style.overflow = "hidden";
		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = "100%";
		return () => {
			document.body.style.overflow = previousOverflow;
			document.body.style.position = previousPosition;
			document.body.style.top = previousTop;
			document.body.style.width = previousWidth;
			window.scrollTo(0, scrollY);
		};
	}, [openMenu]);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function loadUnreadNotifications() {
			if (!isLoggedIn) {
				if (active) setUnreadNotificationCount(0);
				return;
			}
			const { data: { user }, error: userError } = await supabase.auth.getUser();
			if (userError || !user) {
				if (active) setUnreadNotificationCount(0);
				return;
			}
			const { data, error } = await supabase.from("notifications").select("id, is_read").eq("user_id", user.id).eq("is_read", false).order("created_at", { ascending: false });
			if (!active) return;
			if (error) {
				setUnreadNotificationCount(0);
				return;
			}
			setUnreadNotificationCount(data?.length ?? 0);
		}
		loadUnreadNotifications();
		function refreshUnreadNotifications() {
			loadUnreadNotifications();
		}
		window.addEventListener("focus", refreshUnreadNotifications);
		window.addEventListener("mbjp-notifications-updated", refreshUnreadNotifications);
		return () => {
			active = false;
			window.removeEventListener("focus", refreshUnreadNotifications);
			window.removeEventListener("mbjp-notifications-updated", refreshUnreadNotifications);
		};
	}, [isLoggedIn, pathname]);
	const localizedPublicPageItems = (0, import_react.useMemo)(() => {
		return publicPageItems.map((item) => {
			const key = publicPageTranslationKeys[item.to];
			if (!key) return item;
			return {
				...item,
				label: t(`public.${key}.label`),
				description: t(`public.${key}.description`)
			};
		});
	}, [language, t]);
	const localizedProgramItems = (0, import_react.useMemo)(() => {
		return programItems.map((item) => {
			const key = programTranslationKeys[item.to];
			if (!key) return item;
			return {
				...item,
				label: t(`program.${key}.label`),
				description: t(`program.${key}.description`)
			};
		});
	}, [language, t]);
	const dashboardPath = isAdmin ? "/admin" : "/dashboard";
	const dashboardLabel = isAdmin ? t("nav.adminPanel") : t("nav.dashboard");
	const programsActive = pathname.startsWith("/programs/");
	const moreActive = localizedPublicPageItems.some((item) => isActive(item.to));
	const brandCompactName = language === "en" ? "MBJP" : t("brand.name");
	const accountItems = (0, import_react.useMemo)(() => {
		if (authLoading) return [];
		if (!isLoggedIn) return getLoggedOutAccountItems({
			login: t("auth.login"),
			joinNow: t("auth.joinNow"),
			register: t("nav.register")
		});
		const memberItems = getMemberAccountItems({
			dashboard: t("nav.dashboard"),
			digitalCard: t("nav.digitalCard"),
			updates: t("nav.updates"),
			donors: t("nav.donors"),
			register: t("nav.register")
		}, unreadNotificationCount);
		if (!isAdmin) return memberItems;
		const memberOnlyItems = memberItems.filter((item) => item.to !== "/admin" && item.to !== "/dashboard");
		return [{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 }),
			label: t("nav.adminPanel"),
			to: "/admin"
		}, ...memberOnlyItems];
	}, [
		authLoading,
		isAdmin,
		isLoggedIn,
		t,
		unreadNotificationCount
	]);
	function toggleMenu(menu) {
		setOpenMenu((current) => current === menu ? null : menu);
	}
	function closeMenus() {
		setOpenMenu(null);
	}
	async function handleLogout() {
		if (!await logout()) return;
		setOpenMenu(null);
		await navigate({
			to: "/login",
			replace: true
		});
	}
	function isActive(path) {
		if (path === "/") return pathname === "/";
		return pathname === path || pathname.startsWith(`${path}/`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: headerRef,
		dir: "ltr",
		className: `site-header ${compact ? "shadow-[0_10px_30px_rgba(15,23,42,0.06)]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-header-inner page-wrap flex items-center gap-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "site-brand-wrap animate-fade-up min-w-0 flex-1 sm:flex-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "site-brand-link brand-pill lift-hover pressable min-w-0 rounded-[1.35rem] px-3 py-2.5 sm:px-4",
						"aria-label": "Marwardi Bhatti Jamaat Pakistan home",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-1 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/mbjp/logo.png",
									alt: "MBJP logo",
									className: "h-full w-full rounded-xl object-contain",
									draggable: false
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden truncate font-[Manrope,Inter,sans-serif] text-xl font-extrabold tracking-tight text-white sm:block sm:text-2xl",
										children: t("brand.name")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-[Manrope,Inter,sans-serif] text-lg font-extrabold tracking-tight text-white sm:hidden",
										children: brandCompactName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block truncate text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-white/60",
										children: t("brand.platform")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden shrink-0 rounded-full border border-white/12 bg-white/10 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/90 sm:inline-flex",
								children: "MBJP"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-4 xl:gap-5 lg:flex",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/",
							label: t("nav.home"),
							active: isActive("/"),
							delayClass: "delay-1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramsDropdown, {
							label: t("nav.programs"),
							items: localizedProgramItems,
							open: programsOpen,
							active: programsActive,
							onToggle: () => toggleMenu("programs"),
							onClose: closeMenus,
							isActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/designation-holders",
							label: t("nav.designationHolders"),
							active: isActive("/designation-holders"),
							delayClass: "delay-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/donate",
							label: t("nav.donate"),
							active: isActive("/donate"),
							delayClass: "delay-4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/news",
							label: t("nav.news"),
							active: isActive("/news"),
							delayClass: "delay-5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreDropdown, {
							label: t("nav.more"),
							groupTitle: t("nav.organization"),
							items: localizedPublicPageItems,
							open: moreOpen,
							active: moreActive,
							onToggle: () => toggleMenu("more"),
							onClose: closeMenus,
							isActive
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-header-desktop-actions ml-auto hidden items-center gap-2 xl:gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}), authLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-11 w-28 animate-pulse rounded-[var(--r-lg)] bg-white/25" }) : isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: dashboardPath,
						className: "primary-btn animate-fade-up pressable lift-hover",
						children: dashboardLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenuButton, {
							accountInitial,
							accountOpen,
							isLoggedIn,
							unreadCount: unreadNotificationCount,
							onToggle: () => toggleMenu("account")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenuPanel, {
							accountOpen,
							accountItems,
							isLoggedIn,
							logoutLoading,
							onClose: closeMenus,
							onLogout: () => void handleLogout(),
							isActive
						})]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "secondary-btn animate-fade-up pressable lift-hover",
						children: t("auth.login")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "animate-fade-up inline-flex min-h-[2.75rem] items-center justify-center rounded-[var(--r-lg)] bg-[linear-gradient(135deg,#c4912c,#ddb75d)] px-7 py-3 text-sm font-black text-[#102719] shadow-[0_14px_32px_rgba(196,145,44,0.28)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.985]",
						children: t("auth.joinNow")
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-header-mobile-actions ml-auto flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { compact: true }), authLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-11 w-11 animate-pulse rounded-full bg-emerald-900/25" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenuButton, {
							accountInitial,
							accountOpen,
							isLoggedIn,
							unreadCount: unreadNotificationCount,
							mobile: true,
							onToggle: () => toggleMenu("account")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenuPanel, {
							accountOpen,
							accountItems,
							isLoggedIn,
							logoutLoading,
							mobile: true,
							onClose: closeMenus,
							onLogout: () => void handleLogout(),
							isActive
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-mobile-main-nav-wrap lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "site-mobile-main-nav page-wrap",
				"aria-label": "Mobile main navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/",
						label: t("nav.home"),
						active: isActive("/"),
						delayClass: "delay-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramsDropdown, {
						label: t("nav.programs"),
						items: localizedProgramItems,
						open: programsOpen,
						active: programsActive,
						onToggle: () => toggleMenu("programs"),
						onClose: closeMenus,
						isActive
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/designation-holders",
						label: t("nav.designationHolders"),
						active: isActive("/designation-holders"),
						delayClass: "delay-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/donate",
						label: t("nav.donate"),
						active: isActive("/donate"),
						delayClass: "delay-4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/news",
						label: t("nav.news"),
						active: isActive("/news"),
						delayClass: "delay-5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreDropdown, {
						label: t("nav.more"),
						groupTitle: t("nav.organization"),
						items: localizedPublicPageItems,
						open: moreOpen,
						active: moreActive,
						onToggle: () => toggleMenu("more"),
						onClose: closeMenus,
						isActive
					})
				]
			})
		})]
	});
}
function NotFoundPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[linear-gradient(180deg,#fbf9f4_0%,#f6f2e9_55%,#f8f5ef_100%)] text-stone-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "relative z-10 px-3 py-10 sm:px-4 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap overflow-hidden rounded-[2rem] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/70 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 30 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
						children: t("notFound.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl",
						children: t("notFound.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600",
						children: t("notFound.description")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-col justify-center gap-3 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "primary-btn no-underline",
								children: t("notFound.home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "secondary-btn no-underline",
								children: t("notFound.dashboard")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "secondary-btn no-underline",
								children: t("notFound.contact")
							})
						]
					})
				]
			})
		})]
	});
}
var MBJP_CACHE_PREFIX = "mbjp-pwa";
var RESET_MARKER_PARAM = "pwa-cache-cleared";
var RESET_QUERY_PARAMS = [
	"clear-pwa-cache",
	"clearCache",
	"reset-pwa-cache",
	"resetApp"
];
function isBrowser() {
	return typeof window !== "undefined";
}
function isSameOriginServiceWorker(registration) {
	if (!isBrowser()) return false;
	return (registration.scope || "").startsWith(window.location.origin);
}
function buildCleanReloadUrl() {
	const url = new URL(window.location.href);
	for (const param of RESET_QUERY_PARAMS) url.searchParams.delete(param);
	url.searchParams.set(RESET_MARKER_PARAM, Date.now().toString());
	return url.toString();
}
function hasPwaCacheResetParam() {
	if (!isBrowser()) return false;
	const url = new URL(window.location.href);
	return RESET_QUERY_PARAMS.some((param) => url.searchParams.has(param));
}
async function deleteMbjpCacheStorage() {
	if (!isBrowser() || !("caches" in window)) return;
	const keys = await caches.keys();
	await Promise.all(keys.filter((key) => key.startsWith(MBJP_CACHE_PREFIX)).map((key) => caches.delete(key)));
}
async function unregisterMbjpServiceWorkers() {
	if (!isBrowser() || !("serviceWorker" in navigator)) return;
	const registrations = await navigator.serviceWorker.getRegistrations();
	await Promise.all(registrations.filter(isSameOriginServiceWorker).map((registration) => registration.unregister()));
}
async function clearMbjpPwaCache(options = {}) {
	if (!isBrowser()) return;
	try {
		await deleteMbjpCacheStorage();
		await unregisterMbjpServiceWorkers();
		if (options.includeStorage) {
			localStorage.removeItem("mbjp-app-language");
			sessionStorage.clear();
		}
	} catch (error) {
		console.warn("MBJP PWA cache reset failed:", error);
	} finally {
		if (options.reload !== false) window.location.replace(buildCleanReloadUrl());
	}
}
function getPwaCacheResetUrl() {
	if (!isBrowser()) return "/?clear-pwa-cache=1";
	const url = new URL(window.location.href);
	url.searchParams.set("clear-pwa-cache", "1");
	return url.toString();
}
var VAPID_PUBLIC_KEY = void 0;
function supportsWebPush() {
	if (typeof window === "undefined") return false;
	return "Notification" in window && "serviceWorker" in navigator && "PushManager" in window && window.isSecureContext;
}
function isStandaloneDisplay$1() {
	if (typeof window === "undefined") return false;
	const navigatorWithStandalone = window.navigator;
	return window.matchMedia("(display-mode: standalone)").matches || navigatorWithStandalone.standalone === true;
}
function PwaBootstrap() {
	const [installPrompt, setInstallPrompt] = (0, import_react.useState)(null);
	const [canInstall, setCanInstall] = (0, import_react.useState)(false);
	const [isInstalling, setIsInstalling] = (0, import_react.useState)(false);
	const [updateAvailable, setUpdateAvailable] = (0, import_react.useState)(false);
	const [waitingWorker, setWaitingWorker] = (0, import_react.useState)(null);
	const [isRefreshing, setIsRefreshing] = (0, import_react.useState)(false);
	const [dismissedUpdate, setDismissedUpdate] = (0, import_react.useState)(false);
	const [dismissedInstall, setDismissedInstall] = (0, import_react.useState)(false);
	const [dismissedPush, setDismissedPush] = (0, import_react.useState)(false);
	const [isLoggedIn, setIsLoggedIn] = (0, import_react.useState)(false);
	const [pushSupported, setPushSupported] = (0, import_react.useState)(false);
	const [pushPermission, setPushPermission] = (0, import_react.useState)("default");
	const [pushSubscribed, setPushSubscribed] = (0, import_react.useState)(false);
	const [pushLoading, setPushLoading] = (0, import_react.useState)(false);
	const [pushMessage, setPushMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!hasPwaCacheResetParam()) return;
		clearMbjpPwaCache({
			reload: true,
			reason: "pwa-bootstrap-query-reset"
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const handleBeforeInstallPrompt = (event) => {
			event.preventDefault();
			if (isStandaloneDisplay$1()) return;
			setInstallPrompt(event);
			setCanInstall(true);
			setDismissedInstall(false);
		};
		const handleAppInstalled = () => {
			setCanInstall(false);
			setInstallPrompt(null);
			setDismissedInstall(false);
		};
		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		window.addEventListener("appinstalled", handleAppInstalled);
		return () => {
			window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
			window.removeEventListener("appinstalled", handleAppInstalled);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		let mounted = true;
		async function syncAuthState() {
			const { data: { user } } = await supabase.auth.getUser();
			if (!mounted) return;
			setIsLoggedIn(Boolean(user));
		}
		syncAuthState();
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			if (!mounted) return;
			setIsLoggedIn(Boolean(session?.user));
		});
		return () => {
			mounted = false;
			subscription.unsubscribe();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const isSupported = supportsWebPush();
		setPushSupported(isSupported);
		if (!isSupported) return;
		setPushPermission(Notification.permission);
	}, [isLoggedIn]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (!("serviceWorker" in navigator)) return;
		let activeRegistration = null;
		let refreshTriggered = false;
		const showUpdatePrompt = (worker) => {
			setWaitingWorker(worker);
			setUpdateAvailable(true);
			setDismissedUpdate(false);
		};
		const watchRegistration = (registration) => {
			activeRegistration = registration;
			if (registration.waiting && navigator.serviceWorker.controller) showUpdatePrompt(registration.waiting);
			registration.addEventListener("updatefound", () => {
				const installingWorker = registration.installing;
				if (!installingWorker) return;
				installingWorker.addEventListener("statechange", () => {
					if (installingWorker.state === "installed" && navigator.serviceWorker.controller) showUpdatePrompt(installingWorker);
				});
			});
		};
		const registerServiceWorker = () => {
			navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).then(watchRegistration).catch((error) => {
				console.warn("MBJP service worker registration failed:", error);
			});
		};
		const handleControllerChange = () => {
			if (refreshTriggered) return;
			refreshTriggered = true;
			window.location.reload();
		};
		const checkForUpdates = () => {
			if (!activeRegistration || document.hidden) return;
			activeRegistration.update().catch((error) => {
				console.warn("MBJP service worker update check failed:", error);
			});
		};
		navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
		document.addEventListener("visibilitychange", checkForUpdates);
		window.addEventListener("online", checkForUpdates);
		if (document.readyState === "complete") registerServiceWorker();
		else window.addEventListener("load", registerServiceWorker, { once: true });
		const updateInterval = window.setInterval(checkForUpdates, 1800 * 1e3);
		return () => {
			window.removeEventListener("load", registerServiceWorker);
			window.removeEventListener("online", checkForUpdates);
			document.removeEventListener("visibilitychange", checkForUpdates);
			navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
			window.clearInterval(updateInterval);
		};
	}, []);
	async function handleInstallClick() {
		if (!installPrompt) return;
		setIsInstalling(true);
		try {
			await installPrompt.prompt();
			if ((await installPrompt.userChoice).outcome === "accepted") {
				setCanInstall(false);
				setInstallPrompt(null);
				setDismissedInstall(false);
			}
		} finally {
			setIsInstalling(false);
		}
	}
	function handleUpdateClick() {
		setIsRefreshing(true);
		if (waitingWorker) {
			waitingWorker.postMessage({ type: "SKIP_WAITING" });
			window.setTimeout(() => window.location.reload(), 1500);
			return;
		}
		if (navigator.serviceWorker.controller) navigator.serviceWorker.controller.postMessage({ type: "CLEAR_MBJP_CACHE" });
		window.location.reload();
	}
	async function handleEnablePushClick() {
		setPushMessage("Push notifications are not configured yet.");
	}
	const shouldShowUpdate = updateAvailable && !dismissedUpdate;
	const shouldShowInstall = !shouldShowUpdate && !dismissedInstall && !isStandaloneDisplay$1() && canInstall && Boolean(installPrompt);
	const shouldShowPush = !shouldShowUpdate && !shouldShowInstall && !dismissedPush && isLoggedIn && pushSupported && !pushSubscribed && pushPermission !== "denied" && Boolean(VAPID_PUBLIC_KEY);
	if (!shouldShowUpdate && !shouldShowInstall && !shouldShowPush) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pwa-toast-stack",
		role: "status",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: pwaStyles }),
			shouldShowUpdate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pwa-toast pwa-toast--update",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pwa-toast__icon",
						"aria-hidden": "true",
						children: "↻"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__eyebrow",
								children: "MBJP app update"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pwa-toast__title",
								children: "New version available"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__text",
								children: "Refresh now to load the latest MBJP member portal updates."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--primary",
							onClick: handleUpdateClick,
							disabled: isRefreshing,
							children: isRefreshing ? "Refreshing…" : "Refresh"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--ghost",
							onClick: () => setDismissedUpdate(true),
							children: "Later"
						})]
					})
				]
			}) : null,
			shouldShowInstall ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pwa-toast pwa-toast--install",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pwa-toast__icon",
						"aria-hidden": "true",
						children: "⬇"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__eyebrow",
								children: "Install MBJP App"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pwa-toast__title",
								children: "Install MBJP App"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__text",
								children: "Install the MBJP member portal for faster access to membership, digital cards, updates and admin tools."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--primary",
							onClick: handleInstallClick,
							disabled: isInstalling,
							children: isInstalling ? "Opening…" : "Install MBJP App"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--ghost",
							onClick: () => setDismissedInstall(true),
							children: "Not now"
						})]
					})
				]
			}) : null,
			shouldShowPush ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pwa-toast pwa-toast--push",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pwa-toast__icon",
						"aria-hidden": "true",
						children: "🔔"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__eyebrow",
								children: "MBJP notifications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pwa-toast__title",
								children: "Enable browser notifications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__text",
								children: "Get membership approval, payment and important update alerts even when the MBJP app is installed or running in the background."
							}),
							pushMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pwa-toast__note",
								children: pushMessage
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pwa-toast__actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--primary",
							onClick: handleEnablePushClick,
							disabled: pushLoading,
							children: pushLoading ? "Enabling…" : "Enable notifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "pwa-toast__button pwa-toast__button--ghost",
							onClick: () => setDismissedPush(true),
							children: "Not now"
						})]
					})
				]
			}) : null
		]
	});
}
var pwaStyles = `
  .pwa-toast-stack {
    position: fixed;
    right: max(1rem, env(safe-area-inset-right));
    bottom: max(1rem, env(safe-area-inset-bottom));
    z-index: 9999;
    width: min(27rem, calc(100vw - 2rem));
    pointer-events: none;
  }

  .pwa-toast {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.85rem;
    border: 1px solid rgba(27, 94, 59, 0.18);
    border-radius: 1.25rem;
    background: rgba(255, 253, 249, 0.96);
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.18);
    padding: 1rem;
    color: #101827;
    pointer-events: auto;
    backdrop-filter: blur(18px);
  }

  .pwa-toast--update {
    border-color: rgba(176, 138, 62, 0.32);
  }

  .pwa-toast__icon {
    display: grid;
    width: 2.45rem;
    height: 2.45rem;
    place-items: center;
    border-radius: 999px;
    background: #0b2a1d;
    color: #fff8e6;
    font-size: 1.15rem;
    font-weight: 900;
  }

  .pwa-toast__body {
    min-width: 0;
  }

  .pwa-toast__eyebrow {
    margin: 0 0 0.18rem;
    color: #1b5e3b;
    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .pwa-toast__title {
    margin: 0;
    color: #0f172a;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.25;
  }

  .pwa-toast__text {
    margin: 0.3rem 0 0;
    color: #526078;
    font-size: 0.84rem;
    font-weight: 600;
    line-height: 1.45;
  }

  .pwa-toast__note {
    margin: 0.45rem 0 0;
    color: #1b5e3b;
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1.4;
  }

  .pwa-toast__actions {
    display: flex;
    grid-column: 1 / -1;
    gap: 0.55rem;
    justify-content: flex-end;
  }

  .pwa-toast__button {
    min-height: 2.35rem;
    border-radius: 0.85rem;
    border: 1px solid transparent;
    padding: 0.45rem 0.9rem;
    font: inherit;
    font-size: 0.82rem;
    font-weight: 900;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  }

  .pwa-toast__button:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .pwa-toast__button:disabled {
    cursor: progress;
    opacity: 0.68;
  }

  .pwa-toast__button--primary {
    background: #1b5e3b;
    color: #ffffff;
    box-shadow: 0 8px 20px rgba(27, 94, 59, 0.18);
  }

  .pwa-toast__button--ghost {
    background: #ffffff;
    border-color: #e5e7eb;
    color: #334155;
  }

  @media (max-width: 640px) {
    .pwa-toast-stack {
      left: 1rem;
      right: 1rem;
      bottom: max(0.75rem, env(safe-area-inset-bottom));
      width: auto;
    }

    .pwa-toast {
      border-radius: 1rem;
    }
  }
`;
function isStandaloneDisplay() {
	if (typeof window === "undefined") return false;
	const navigatorWithStandalone = window.navigator;
	return window.matchMedia("(display-mode: standalone)").matches || navigatorWithStandalone.standalone === true;
}
function shouldForceShowReset() {
	if (typeof window === "undefined") return false;
	const url = new URL(window.location.href);
	return url.searchParams.has("show-cache-reset") || url.searchParams.has("debug-pwa");
}
function AppUpdateReset() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [isResetting, setIsResetting] = (0, import_react.useState)(false);
	const resetUrl = (0, import_react.useMemo)(() => getPwaCacheResetUrl(), []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (hasPwaCacheResetParam()) {
			clearMbjpPwaCache({
				reload: true,
				reason: "query-param-reset"
			});
			return;
		}
		if (!(isStandaloneDisplay() || shouldForceShowReset())) return;
		const timer = window.setTimeout(() => setVisible(true), 4500);
		return () => window.clearTimeout(timer);
	}, []);
	async function handleResetClick() {
		setIsResetting(true);
		await clearMbjpPwaCache({
			reload: true,
			reason: "manual-reset"
		});
	}
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "mbjp-app-reset",
		role: "status",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: styles }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mbjp-app-reset__content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mbjp-app-reset__eyebrow",
					children: "App update"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mbjp-app-reset__text",
					children: "Loading stuck or old version? Reset app cache and reload latest files."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mbjp-app-reset__actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mbjp-app-reset__button mbjp-app-reset__button--primary",
						onClick: handleResetClick,
						disabled: isResetting,
						children: isResetting ? "Resetting…" : "Reset cache"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mbjp-app-reset__button mbjp-app-reset__button--ghost",
						href: resetUrl,
						children: "Hard reset link"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mbjp-app-reset__close",
						onClick: () => setVisible(false),
						"aria-label": "Hide app reset helper",
						children: "×"
					})
				]
			})
		]
	});
}
var styles = `
  .mbjp-app-reset {
    position: fixed;
    left: max(0.9rem, env(safe-area-inset-left));
    bottom: max(0.9rem, env(safe-area-inset-bottom));
    z-index: 9998;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.8rem;
    width: min(34rem, calc(100vw - 1.8rem));
    border: 1px solid rgba(176, 138, 62, 0.32);
    border-radius: 1.1rem;
    background: rgba(255, 253, 249, 0.97);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    padding: 0.8rem;
    color: #0f172a;
    backdrop-filter: blur(16px);
  }

  .mbjp-app-reset__content {
    min-width: 0;
  }

  .mbjp-app-reset__eyebrow {
    margin: 0;
    color: #1b5e3b;
    font-size: 0.64rem;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .mbjp-app-reset__text {
    margin: 0.2rem 0 0;
    color: #526078;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .mbjp-app-reset__actions {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .mbjp-app-reset__button,
  .mbjp-app-reset__close {
    border-radius: 0.8rem;
    border: 1px solid transparent;
    font: inherit;
    font-size: 0.76rem;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
  }

  .mbjp-app-reset__button {
    min-height: 2.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0.75rem;
  }

  .mbjp-app-reset__button:disabled {
    cursor: progress;
    opacity: 0.7;
  }

  .mbjp-app-reset__button--primary {
    background: #1b5e3b;
    color: #ffffff;
  }

  .mbjp-app-reset__button--ghost {
    background: #ffffff;
    border-color: #e5e7eb;
    color: #334155;
  }

  .mbjp-app-reset__close {
    width: 2.1rem;
    height: 2.1rem;
    background: #fff7ed;
    color: #9a3412;
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    .mbjp-app-reset {
      grid-template-columns: 1fr;
      right: max(0.9rem, env(safe-area-inset-right));
      width: auto;
    }

    .mbjp-app-reset__actions {
      justify-content: flex-end;
      flex-wrap: wrap;
    }
  }
`;
var styles_default = "/assets/styles-BPKl81yo.css";
var Route$49 = createRootRoute({
	notFoundComponent: RootNotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "Marwardi Bhatti Jamaat Pakistan | Member & Programs Portal" },
			{
				name: "description",
				content: "Marwardi Bhatti Jamaat Pakistan membership registration, admin approval, QR verification, digital ID card and member-verified education, health, welfare and employment support platform."
			},
			{
				name: "theme-color",
				content: "#7f1734"
			},
			{
				name: "application-name",
				content: "MBJP"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "MBJP"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "msapplication-TileColor",
				content: "#7f1734"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				property: "og:title",
				content: "Marwardi Bhatti Jamaat Pakistan Member & Programs Portal"
			},
			{
				property: "og:description",
				content: "Register, verify and access Marwardi Bhatti Jamaat Pakistan digital membership, education, health, welfare and employment support programs."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const isPublicVerifyPage = pathname.startsWith("/verify/");
	const isCardPreviewPage = pathname === "/card" || pathname.includes("/admin/members/") || pathname.endsWith("/card");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[linear-gradient(180deg,#fff8f5_0%,#f7efe6_55%,#fbf5ef_100%)] text-stone-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-fade-in pointer-events-none fixed inset-x-0 top-0 z-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(214,36,96,0.16),transparent_40%),radial-gradient(circle_at_top_right,rgba(15,138,95,0.12),transparent_35%)]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PwaBootstrap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppUpdateReset, {}),
			!isPublicVerifyPage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { compact: isCardPreviewPage }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-fade-up relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		]
	}) });
}
function RootNotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundPage, {}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-emerald-900 focus:shadow-lg",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main-content",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$48 = () => import("./vision-mission-DrWs8Q7l.mjs");
var Route$48 = createFileRoute("/vision-mission")({ component: lazyRouteComponent($$splitComponentImporter$48, "component") });
var $$splitComponentImporter$47 = () => import("./signup-Cws36phg.mjs");
var Route$47 = createFileRoute("/signup")({ component: lazyRouteComponent($$splitComponentImporter$47, "component") });
var $$splitComponentImporter$46 = () => import("./register-DhutIzQD.mjs");
var Route$46 = createFileRoute("/register")({ component: lazyRouteComponent($$splitComponentImporter$46, "component") });
var $$splitComponentImporter$45 = () => import("./notifications-W2DWNEjO.mjs");
var Route$45 = createFileRoute("/notifications")({ component: lazyRouteComponent($$splitComponentImporter$45, "component") });
var $$splitComponentImporter$44 = () => import("./news-BnUJvQoB.mjs");
var Route$44 = createFileRoute("/news")({ component: lazyRouteComponent($$splitComponentImporter$44, "component") });
var $$splitComponentImporter$43 = () => import("./manifesto-CLncIHH0.mjs");
var Route$43 = createFileRoute("/manifesto")({ component: lazyRouteComponent($$splitComponentImporter$43, "component") });
var $$splitComponentImporter$42 = () => import("./login-CIDkJ-lW.mjs");
var Route$42 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$42, "component") });
var $$splitComponentImporter$41 = () => import("./gallery-DAjNApfz.mjs");
var Route$41 = createFileRoute("/gallery")({ component: lazyRouteComponent($$splitComponentImporter$41, "component") });
var $$splitComponentImporter$40 = () => import("./events-Ci7OTghx.mjs");
var Route$40 = createFileRoute("/events")({ component: lazyRouteComponent($$splitComponentImporter$40, "component") });
var $$splitComponentImporter$39 = () => import("./donors-C9xw28ms.mjs");
var Route$39 = createFileRoute("/donors")({ component: lazyRouteComponent($$splitComponentImporter$39, "component") });
var $$splitComponentImporter$38 = () => import("./donate-CAELzkuu.mjs");
var Route$38 = createFileRoute("/donate")({ component: lazyRouteComponent($$splitComponentImporter$38, "component") });
var $$splitComponentImporter$37 = () => import("./designation-holders-C1mE06aX.mjs");
var Route$37 = createFileRoute("/designation-holders")({ component: lazyRouteComponent($$splitComponentImporter$37, "component") });
var $$splitComponentImporter$36 = () => import("./designation-card-D2I8u0Rj.mjs");
var Route$36 = createFileRoute("/designation-card")({ component: lazyRouteComponent($$splitComponentImporter$36, "component") });
var $$splitComponentImporter$35 = () => import("./dashboard-gQ8iGJIp.mjs");
var Route$35 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./cwc-moc9XWX2.mjs");
var Route$34 = createFileRoute("/cwc")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./contact-DHE2gIiz.mjs");
var Route$33 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./constitution-BhG87oaf.mjs");
var Route$32 = createFileRoute("/constitution")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./committees-Blm2SOfd.mjs");
var Route$31 = createFileRoute("/committees")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./card-BL6Kjw6o.mjs");
var Route$30 = createFileRoute("/card")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
var $$splitComponentImporter$29 = () => import("./admin-Dyan0tU_.mjs");
var Route$29 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./about-Dt71c3Rv.mjs");
var Route$28 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./routes-538fmCXh.mjs");
var Route$27 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./welfare-C8yz48yc.mjs");
var Route$26 = createFileRoute("/programs/welfare")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./health-DvCuL3EI.mjs");
var Route$25 = createFileRoute("/programs/health")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./employment-Du8VBwce.mjs");
var Route$24 = createFileRoute("/programs/employment")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./education-InEjeVYO.mjs");
var Route$23 = createFileRoute("/programs/education")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./roles-Ca-Jdf7I.mjs");
var Route$22 = createFileRoute("/admin/roles")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./reports-Cp7zGNdD.mjs");
var Route$21 = createFileRoute("/admin/reports")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./news-Bfs08w1C.mjs");
var Route$20 = createFileRoute("/admin/news")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./gallery-DtSebLC2.mjs");
var Route$19 = createFileRoute("/admin/gallery")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./finance-DvDTblx3.mjs");
var Route$18 = createFileRoute("/admin/finance")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./events-DdROdbc1.mjs");
var Route$17 = createFileRoute("/admin/events")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./designations-CTZRYpuz.mjs");
var Route$16 = createFileRoute("/admin/designations")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./committees-cvUWPKG-.mjs");
var Route$15 = createFileRoute("/admin/committees")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./cms-Cj3WmlhH.mjs");
var Route$14 = createFileRoute("/admin/cms")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./audit-logs-Dpcnhm5l.mjs");
var Route$13 = createFileRoute("/admin/audit-logs")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./area-permissions-0Kvy2RjQ.mjs");
var Route$12 = createFileRoute("/admin/area-permissions")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./my-applications-DqBRXMEC.mjs");
var Route$11 = createFileRoute("/programs/welfare/my-applications")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./apply-BNlrQdke.mjs");
var Route$10 = createFileRoute("/programs/welfare/apply")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./my-applications-DjdLFviB.mjs");
var Route$9 = createFileRoute("/programs/health/my-applications")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./apply-DCRy2KnU.mjs");
var Route$8 = createFileRoute("/programs/health/apply")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./my-applications-CllmXtif.mjs");
var Route$7 = createFileRoute("/programs/employment/my-applications")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./apply-BDMhxijt.mjs");
var Route$6 = createFileRoute("/programs/employment/apply")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./my-applications-RctjuwGp.mjs");
var Route$5 = createFileRoute("/programs/education/my-applications")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./apply-BEHMHiap.mjs");
var Route$4 = createFileRoute("/programs/education/apply")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./welfare-DjlgiN6j.mjs");
var Route$3 = createFileRoute("/admin/programs/welfare")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./health-BwX6q4T0.mjs");
var Route$2 = createFileRoute("/admin/programs/health")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./employment-D54j0S9G.mjs");
var Route$1 = createFileRoute("/admin/programs/employment")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./education-CUC526gH.mjs");
var Route = createFileRoute("/admin/programs/education")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var VisionMissionRoute = Route$48.update({
	id: "/vision-mission",
	path: "/vision-mission",
	getParentRoute: () => Route$49
});
var SignupRoute = Route$47.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$49
});
var RegisterRoute = Route$46.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$49
});
var NotificationsRoute = Route$45.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => Route$49
});
var NewsRoute = Route$44.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$49
});
var ManifestoRoute = Route$43.update({
	id: "/manifesto",
	path: "/manifesto",
	getParentRoute: () => Route$49
});
var LoginRoute = Route$42.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$49
});
var GalleryRoute = Route$41.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$49
});
var EventsRoute = Route$40.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$49
});
var DonorsRoute = Route$39.update({
	id: "/donors",
	path: "/donors",
	getParentRoute: () => Route$49
});
var DonateRoute = Route$38.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$49
});
var DesignationHoldersRoute = Route$37.update({
	id: "/designation-holders",
	path: "/designation-holders",
	getParentRoute: () => Route$49
});
var DesignationCardRoute = Route$36.update({
	id: "/designation-card",
	path: "/designation-card",
	getParentRoute: () => Route$49
});
var DashboardRoute = Route$35.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$49
});
var CwcRoute = Route$34.update({
	id: "/cwc",
	path: "/cwc",
	getParentRoute: () => Route$49
});
var ContactRoute = Route$33.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$49
});
var ConstitutionRoute = Route$32.update({
	id: "/constitution",
	path: "/constitution",
	getParentRoute: () => Route$49
});
var CommitteesRoute = Route$31.update({
	id: "/committees",
	path: "/committees",
	getParentRoute: () => Route$49
});
var CardRoute = Route$30.update({
	id: "/card",
	path: "/card",
	getParentRoute: () => Route$49
});
var AdminRoute = Route$29.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$49
});
var AboutRoute = Route$28.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$49
});
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$49
});
var VerifyMemberNoRoute = Route$62.update({
	id: "/verify/$memberNo",
	path: "/verify/$memberNo",
	getParentRoute: () => Route$49
});
var ProgramsWelfareRoute = Route$26.update({
	id: "/programs/welfare",
	path: "/programs/welfare",
	getParentRoute: () => Route$49
});
var ProgramsHealthRoute = Route$25.update({
	id: "/programs/health",
	path: "/programs/health",
	getParentRoute: () => Route$49
});
var ProgramsEmploymentRoute = Route$24.update({
	id: "/programs/employment",
	path: "/programs/employment",
	getParentRoute: () => Route$49
});
var ProgramsEducationRoute = Route$23.update({
	id: "/programs/education",
	path: "/programs/education",
	getParentRoute: () => Route$49
});
var NewsSlugRoute = Route$64.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => NewsRoute
});
var CommitteesIdRoute = Route$53.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => CommitteesRoute
});
var AdminRolesRoute = Route$22.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => AdminRoute
});
var AdminReportsRoute = Route$21.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AdminRoute
});
var AdminNewsRoute = Route$20.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => AdminRoute
});
var AdminGalleryRoute = Route$19.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRoute
});
var AdminFinanceRoute = Route$18.update({
	id: "/finance",
	path: "/finance",
	getParentRoute: () => AdminRoute
});
var AdminEventsRoute = Route$17.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => AdminRoute
});
var AdminDesignationsRoute = Route$16.update({
	id: "/designations",
	path: "/designations",
	getParentRoute: () => AdminRoute
});
var AdminCommitteesRoute = Route$15.update({
	id: "/committees",
	path: "/committees",
	getParentRoute: () => AdminRoute
});
var AdminCmsRoute = Route$14.update({
	id: "/cms",
	path: "/cms",
	getParentRoute: () => AdminRoute
});
var AdminAuditLogsRoute = Route$13.update({
	id: "/audit-logs",
	path: "/audit-logs",
	getParentRoute: () => AdminRoute
});
var AdminAreaPermissionsRoute = Route$12.update({
	id: "/area-permissions",
	path: "/area-permissions",
	getParentRoute: () => AdminRoute
});
var VerifyOfficeBearerOfficeBearerIdRoute = Route$63.update({
	id: "/verify/office-bearer/$officeBearerId",
	path: "/verify/office-bearer/$officeBearerId",
	getParentRoute: () => Route$49
});
var ProgramsWelfareMyApplicationsRoute = Route$11.update({
	id: "/my-applications",
	path: "/my-applications",
	getParentRoute: () => ProgramsWelfareRoute
});
var ProgramsWelfareApplyRoute = Route$10.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => ProgramsWelfareRoute
});
var ProgramsWelfareIdRoute = Route$59.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProgramsWelfareRoute
});
var ProgramsHealthMyApplicationsRoute = Route$9.update({
	id: "/my-applications",
	path: "/my-applications",
	getParentRoute: () => ProgramsHealthRoute
});
var ProgramsHealthApplyRoute = Route$8.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => ProgramsHealthRoute
});
var ProgramsHealthIdRoute = Route$54.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProgramsHealthRoute
});
var ProgramsEmploymentMyApplicationsRoute = Route$7.update({
	id: "/my-applications",
	path: "/my-applications",
	getParentRoute: () => ProgramsEmploymentRoute
});
var ProgramsEmploymentApplyRoute = Route$6.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => ProgramsEmploymentRoute
});
var ProgramsEmploymentIdRoute = Route$57.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProgramsEmploymentRoute
});
var ProgramsEducationMyApplicationsRoute = Route$5.update({
	id: "/my-applications",
	path: "/my-applications",
	getParentRoute: () => ProgramsEducationRoute
});
var ProgramsEducationApplyRoute = Route$4.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => ProgramsEducationRoute
});
var ProgramsEducationIdRoute = Route$52.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProgramsEducationRoute
});
var AdminProgramsWelfareRoute = Route$3.update({
	id: "/programs/welfare",
	path: "/programs/welfare",
	getParentRoute: () => AdminRoute
});
var AdminProgramsHealthRoute = Route$2.update({
	id: "/programs/health",
	path: "/programs/health",
	getParentRoute: () => AdminRoute
});
var AdminProgramsEmploymentRoute = Route$1.update({
	id: "/programs/employment",
	path: "/programs/employment",
	getParentRoute: () => AdminRoute
});
var AdminProgramsEducationRoute = Route.update({
	id: "/programs/education",
	path: "/programs/education",
	getParentRoute: () => AdminRoute
});
var AdminNewsIdRoute = Route$58.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminNewsRoute
});
var AdminMembersIdRoute = Route$60.update({
	id: "/members/$id",
	path: "/members/$id",
	getParentRoute: () => AdminRoute
});
var AdminCommitteesIdRoute = Route$56.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminCommitteesRoute
});
var AdminCmsSlugRoute = Route$65.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => AdminCmsRoute
});
var AdminProgramsWelfareIdRoute = Route$61.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminProgramsWelfareRoute
});
var AdminProgramsHealthIdRoute = Route$51.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminProgramsHealthRoute
});
var AdminProgramsEmploymentIdRoute = Route$50.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminProgramsEmploymentRoute
});
var AdminProgramsEducationIdRoute = Route$55.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminProgramsEducationRoute
});
var AdminMembersIdDesignationCardRoute = Route$67.update({
	id: "/designation-card",
	path: "/designation-card",
	getParentRoute: () => AdminMembersIdRoute
});
var AdminMembersIdCardRoute = Route$66.update({
	id: "/card",
	path: "/card",
	getParentRoute: () => AdminMembersIdRoute
});
var AdminCmsRouteChildren = { AdminCmsSlugRoute };
var AdminCmsRouteWithChildren = AdminCmsRoute._addFileChildren(AdminCmsRouteChildren);
var AdminCommitteesRouteChildren = { AdminCommitteesIdRoute };
var AdminCommitteesRouteWithChildren = AdminCommitteesRoute._addFileChildren(AdminCommitteesRouteChildren);
var AdminNewsRouteChildren = { AdminNewsIdRoute };
var AdminNewsRouteWithChildren = AdminNewsRoute._addFileChildren(AdminNewsRouteChildren);
var AdminMembersIdRouteChildren = {
	AdminMembersIdCardRoute,
	AdminMembersIdDesignationCardRoute
};
var AdminMembersIdRouteWithChildren = AdminMembersIdRoute._addFileChildren(AdminMembersIdRouteChildren);
var AdminProgramsEducationRouteChildren = { AdminProgramsEducationIdRoute };
var AdminProgramsEducationRouteWithChildren = AdminProgramsEducationRoute._addFileChildren(AdminProgramsEducationRouteChildren);
var AdminProgramsEmploymentRouteChildren = { AdminProgramsEmploymentIdRoute };
var AdminProgramsEmploymentRouteWithChildren = AdminProgramsEmploymentRoute._addFileChildren(AdminProgramsEmploymentRouteChildren);
var AdminProgramsHealthRouteChildren = { AdminProgramsHealthIdRoute };
var AdminProgramsHealthRouteWithChildren = AdminProgramsHealthRoute._addFileChildren(AdminProgramsHealthRouteChildren);
var AdminProgramsWelfareRouteChildren = { AdminProgramsWelfareIdRoute };
var AdminRouteChildren = {
	AdminAreaPermissionsRoute,
	AdminAuditLogsRoute,
	AdminCmsRoute: AdminCmsRouteWithChildren,
	AdminCommitteesRoute: AdminCommitteesRouteWithChildren,
	AdminDesignationsRoute,
	AdminEventsRoute,
	AdminFinanceRoute,
	AdminGalleryRoute,
	AdminNewsRoute: AdminNewsRouteWithChildren,
	AdminReportsRoute,
	AdminRolesRoute,
	AdminMembersIdRoute: AdminMembersIdRouteWithChildren,
	AdminProgramsEducationRoute: AdminProgramsEducationRouteWithChildren,
	AdminProgramsEmploymentRoute: AdminProgramsEmploymentRouteWithChildren,
	AdminProgramsHealthRoute: AdminProgramsHealthRouteWithChildren,
	AdminProgramsWelfareRoute: AdminProgramsWelfareRoute._addFileChildren(AdminProgramsWelfareRouteChildren)
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var CommitteesRouteChildren = { CommitteesIdRoute };
var CommitteesRouteWithChildren = CommitteesRoute._addFileChildren(CommitteesRouteChildren);
var NewsRouteChildren = { NewsSlugRoute };
var NewsRouteWithChildren = NewsRoute._addFileChildren(NewsRouteChildren);
var ProgramsEducationRouteChildren = {
	ProgramsEducationIdRoute,
	ProgramsEducationApplyRoute,
	ProgramsEducationMyApplicationsRoute
};
var ProgramsEducationRouteWithChildren = ProgramsEducationRoute._addFileChildren(ProgramsEducationRouteChildren);
var ProgramsEmploymentRouteChildren = {
	ProgramsEmploymentIdRoute,
	ProgramsEmploymentApplyRoute,
	ProgramsEmploymentMyApplicationsRoute
};
var ProgramsEmploymentRouteWithChildren = ProgramsEmploymentRoute._addFileChildren(ProgramsEmploymentRouteChildren);
var ProgramsHealthRouteChildren = {
	ProgramsHealthIdRoute,
	ProgramsHealthApplyRoute,
	ProgramsHealthMyApplicationsRoute
};
var ProgramsHealthRouteWithChildren = ProgramsHealthRoute._addFileChildren(ProgramsHealthRouteChildren);
var ProgramsWelfareRouteChildren = {
	ProgramsWelfareIdRoute,
	ProgramsWelfareApplyRoute,
	ProgramsWelfareMyApplicationsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	CardRoute,
	CommitteesRoute: CommitteesRouteWithChildren,
	ConstitutionRoute,
	ContactRoute,
	CwcRoute,
	DashboardRoute,
	DesignationCardRoute,
	DesignationHoldersRoute,
	DonateRoute,
	DonorsRoute,
	EventsRoute,
	GalleryRoute,
	LoginRoute,
	ManifestoRoute,
	NewsRoute: NewsRouteWithChildren,
	NotificationsRoute,
	RegisterRoute,
	SignupRoute,
	VisionMissionRoute,
	ProgramsEducationRoute: ProgramsEducationRouteWithChildren,
	ProgramsEmploymentRoute: ProgramsEmploymentRouteWithChildren,
	ProgramsHealthRoute: ProgramsHealthRouteWithChildren,
	ProgramsWelfareRoute: ProgramsWelfareRoute._addFileChildren(ProgramsWelfareRouteChildren),
	VerifyMemberNoRoute,
	VerifyOfficeBearerOfficeBearerIdRoute
};
var routeTree = Route$49._addFileChildren(rootRouteChildren)._addFileTypes();
function getContext() {
	return { queryClient: new QueryClient() };
}
function getRouter() {
	const context = getContext();
	const router = createRouter({
		routeTree,
		context,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient: context.queryClient
	});
	return router;
}
//#endregion
export { getRouter };
