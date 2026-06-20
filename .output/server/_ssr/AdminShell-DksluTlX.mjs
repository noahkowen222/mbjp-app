import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, A as Network, B as KeyRound, Ct as BookOpenCheck, F as LockKeyhole, L as ListChecks, M as MapPin, R as LayoutDashboard, Tt as BadgeIndianRupee, V as Images, X as HandHeart, Y as HeartPulse, _ as ShieldCheck, _t as ChevronRight, bt as CalendarDays, c as UserCog, j as Menu, k as Newspaper, n as Vote, r as Users, t as X, wt as Bell, xt as BriefcaseBusiness, yt as ChartColumn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-DksluTlX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var adminNavigationGroups = [
	{
		title: "Overview",
		items: [{
			label: "Dashboard",
			to: "/admin",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { size: 17 })
		}]
	},
	{
		title: "Membership",
		items: [
			{
				label: "Members",
				to: "/admin",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 17 })
			},
			{
				label: "Pending Applications",
				to: "/admin",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { size: 17 })
			},
			{
				label: "Digital Cards",
				to: "/admin",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 })
			}
		]
	},
	{
		title: "Programs",
		items: [
			{
				label: "Education",
				to: "/admin/programs/education",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { size: 17 })
			},
			{
				label: "Health",
				to: "/admin/programs/health",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { size: 17 })
			},
			{
				label: "Welfare",
				to: "/admin/programs/welfare",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { size: 17 })
			},
			{
				label: "Employment",
				to: "/admin/programs/employment",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { size: 17 })
			},
			{
				label: "Program Appointments",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { size: 17 }),
				badge: "Later",
				disabled: true
			}
		]
	},
	{
		title: "Organization",
		items: [
			{
				label: "Organization Levels",
				to: "/admin/committees",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { size: 17 })
			},
			{
				label: "Designations",
				to: "/admin/designations",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 17 })
			},
			{
				label: "Roles",
				to: "/admin/roles",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { size: 17 })
			},
			{
				label: "Area Permissions",
				to: "/admin/area-permissions",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 })
			},
			{
				label: "Elections",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { size: 17 }),
				badge: "Future",
				disabled: true
			}
		]
	},
	{
		title: "Finance & Reports",
		items: [
			{
				label: "Finance",
				to: "/admin/finance",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { size: 17 })
			},
			{
				label: "Reports",
				to: "/admin/reports",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { size: 17 })
			},
			{
				label: "Audit Logs",
				to: "/admin/audit-logs",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { size: 17 })
			},
			{
				label: "Donations",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 17 }),
				badge: "Manual",
				disabled: true
			}
		]
	},
	{
		title: "Public CMS",
		items: [
			{
				label: "CMS",
				to: "/admin/cms",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 17 })
			},
			{
				label: "News",
				to: "/admin/news",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 17 })
			},
			{
				label: "Gallery",
				to: "/admin/gallery",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { size: 17 })
			},
			{
				label: "Events",
				to: "/admin/events",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 17 })
			}
		]
	}
];
function normalizePath(path) {
	return path.replace(/\/+$/, "") || "/";
}
function isActivePath(currentPath, itemTo) {
	if (!itemTo) return false;
	const current = normalizePath(currentPath);
	const target = normalizePath(itemTo);
	if (target === "/admin") return current === "/admin";
	return current === target || current.startsWith(`${target}/`);
}
function AdminSidebar({ mobile = false, onNavigate }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: mobile ? "admin-sidebar admin-sidebar-mobile" : "admin-sidebar",
		"aria-label": "Admin navigation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-sidebar-brand",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "admin-sidebar-brand-icon",
				children: "MBJP"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin Panel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Management Console" })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "admin-sidebar-nav",
			children: adminNavigationGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-sidebar-group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "admin-sidebar-group-title",
					children: group.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "admin-sidebar-group-items",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebarItem, {
						item,
						active: isActivePath(pathname, item.to),
						onNavigate
					}, `${group.title}-${item.label}`))
				})]
			}, group.title))
		})]
	});
}
function AdminSidebarItem({ item, active, onNavigate }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "admin-sidebar-item-icon",
			children: item.icon
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "admin-sidebar-item-label",
			children: item.label
		}),
		item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "admin-sidebar-item-badge",
			children: item.badge
		}) : null,
		item.disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {
			className: "admin-sidebar-item-lock",
			size: 14
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
			className: "admin-sidebar-item-arrow",
			size: 15
		})
	] });
	if (!item.to || item.disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "admin-sidebar-item is-disabled",
		title: `${item.label} will be enabled later`,
		disabled: true,
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		onClick: onNavigate,
		className: `admin-sidebar-item ${active ? "is-active" : ""}`,
		children: content
	});
}
function AdminShell({ children, title = "Admin Panel", subtitle = "Manage membership, programs, organization records and public content." }) {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "admin-shell px-3 py-6 sm:px-4 sm:py-8",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-shell-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-shell-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-mobile-bar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "admin-mobile-eyebrow",
							children: "MBJP Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: subtitle })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen(true),
						className: "admin-mobile-menu-btn",
						"aria-label": "Open admin menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
					})]
				}), children]
			})]
		}), mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-mobile-drawer",
			role: "dialog",
			"aria-modal": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "admin-mobile-drawer-backdrop",
				onClick: () => setMobileOpen(false),
				"aria-label": "Close admin menu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-mobile-drawer-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-mobile-drawer-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MBJP Admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Navigation" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen(false),
						className: "admin-mobile-drawer-close",
						"aria-label": "Close admin menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "admin-mobile-drawer-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {
						mobile: true,
						onNavigate: () => setMobileOpen(false)
					})
				})]
			})]
		}) : null]
	});
}
//#endregion
export { AdminShell as t };
