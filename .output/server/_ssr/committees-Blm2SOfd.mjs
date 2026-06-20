import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, M as MapPin, Ot as ArrowRight, _ as ShieldCheck, bt as CalendarDays, r as Users, y as Search } from "../_libs/lucide-react.mjs";
import { r as usePublicPageCopy, t as getLocalizedCommitteeTypeLabel } from "./public-page-i18n-HRVK6TkC.mjs";
import { m as getCommitteeStatusLabel, p as getCommitteeStatusClass } from "./committees-BBqoo4Av.mjs";
import { i as fetchPublicCommittees, o as formatTenure, s as getCommitteeLocation } from "./committees-public-DmF4X0kc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/committees-Blm2SOfd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PublicCommitteesPage() {
	const publicCopy = usePublicPageCopy();
	const [committees, setCommittees] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function loadCommittees() {
			setLoading(true);
			setError("");
			try {
				const data = await fetchPublicCommittees();
				if (!cancelled) setCommittees(data);
			} catch (err) {
				if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load committees.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadCommittees();
		return () => {
			cancelled = true;
		};
	}, []);
	const filteredCommittees = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return committees.filter((committee) => {
			const matchesType = filter === "all" || String(committee.committee_type) === filter;
			const matchesSearch = query.length === 0 || [
				committee.name,
				"division" in committee ? String(committee.division ?? "") : "",
				committee.district ?? "",
				committee.taluka ?? "",
				committee.notes ?? "",
				getLocalizedCommitteeTypeLabel(committee.committee_type, publicCopy.committees)
			].join(" ").toLowerCase().includes(query);
			return matchesType && matchesSearch;
		});
	}, [
		committees,
		filter,
		publicCopy.committees,
		search
	]);
	const stats = (0, import_react.useMemo)(() => {
		return committees.reduce((acc, committee) => {
			acc.total += 1;
			const committeeType = String(committee.committee_type);
			if (committeeType === "central") acc.central += 1;
			if (committeeType === "central_advisory") acc.centralAdvisory += 1;
			if (committeeType === "provincial") acc.provincial += 1;
			if (committeeType === "divisional") acc.divisional += 1;
			if (committeeType === "district") acc.district += 1;
			if (committeeType === "taluka") acc.taluka += 1;
			acc.members += committee.member_count ?? 0;
			return acc;
		}, {
			total: 0,
			central: 0,
			centralAdvisory: 0,
			provincial: 0,
			divisional: 0,
			district: 0,
			taluka: 0,
			members: 0
		});
	}, [committees]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-8 sm:px-4 sm:py-12",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#fffdf8,#f7f1e6_54%,#edf4ee)] p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8 lg:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: publicCopy.textAlignClass,
							dir: publicCopy.textDir,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-eyebrow mb-3",
									children: publicCopy.committees.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "max-w-4xl text-[clamp(2.4rem,5.4vw,5rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-950",
									children: publicCopy.committees.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg",
									children: publicCopy.committees.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `mt-7 flex flex-wrap gap-3 ${publicCopy.isRtl ? "justify-end" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/signup",
										className: "primary-btn no-underline",
										children: [publicCopy.shared.becomeMember, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${publicCopy.arrowClass}` })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "secondary-btn no-underline",
										children: publicCopy.shared.contact
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-[1.8rem] border border-emerald-900/10 bg-white/80 p-5 shadow-sm backdrop-blur ${publicCopy.textAlignClass}`,
							dir: publicCopy.textDir,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ${publicCopy.isRtl ? "mr-auto" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { size: 25 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black text-slate-950",
									children: publicCopy.committees.hierarchy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-7 text-slate-600",
									children: publicCopy.committees.hierarchyText
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.publicCommittees,
							value: stats.total
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.central,
							value: stats.central
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.centralAdvisory,
							value: stats.centralAdvisory
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.provincial,
							value: stats.provincial
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.divisional,
							value: stats.divisional
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.district,
							value: stats.district
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.taluka,
							value: stats.taluka
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: publicCopy.committees.officeBearers,
							value: stats.members
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: search,
								onChange: (event) => setSearch(event.target.value),
								className: "h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
								placeholder: publicCopy.committees.searchPlaceholder
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: filter,
							onChange: (event) => setFilter(event.target.value),
							className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: publicCopy.committees.allCommittees
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "central",
									children: publicCopy.committees.central
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "central_advisory",
									children: publicCopy.committees.centralAdvisory
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "provincial",
									children: publicCopy.committees.provincial
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "divisional",
									children: publicCopy.committees.divisional
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "district",
									children: publicCopy.committees.district
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "taluka",
									children: publicCopy.committees.taluka
								})
							]
						})]
					})
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.committees.loading }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
					message: error,
					tone: "error"
				}) : filteredCommittees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.committees.empty }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
					children: filteredCommittees.map((committee) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommitteeCard, {
						committee,
						labels: publicCopy.committees,
						arrowClass: publicCopy.arrowClass
					}, committee.id))
				})
			]
		})
	});
}
function CommitteeCard({ committee, labels, arrowClass }) {
	const memberCount = committee.member_count ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-[320px] flex-col rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 23 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getCommitteeStatusClass(committee.status)}`,
					children: getCommitteeStatusLabel(committee.status)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
						children: getLocalizedCommitteeTypeLabel(committee.committee_type, labels)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-black tracking-tight text-slate-950",
						children: committee.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-sm font-semibold text-slate-600",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 15,
										className: "text-emerald-700"
									}),
									" ",
									getCommitteeLocation(committee)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										size: 15,
										className: "text-emerald-700"
									}),
									" ",
									formatTenure(committee.tenure_start, committee.tenure_end)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										size: 15,
										className: "text-emerald-700"
									}),
									" ",
									memberCount,
									" ",
									memberCount === 1 ? labels.officeBearerSingular : labels.officeBearerPlural
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/committees/$id",
				params: { id: committee.id },
				className: "mbjp-dark-action-link mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black no-underline",
				children: [labels.viewCommittee, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
			})
		]
	});
}
function StatCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[1.25rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-3xl font-black text-slate-950",
			children: value
		})]
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-[1.5rem] p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-white text-slate-600 ring-slate-200"}`,
		children: message
	});
}
//#endregion
export { PublicCommitteesPage as component };
