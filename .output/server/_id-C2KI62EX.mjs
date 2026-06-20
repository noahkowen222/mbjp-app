import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { G as IdCard, M as MapPin, _ as ShieldCheck, bt as CalendarDays, kt as ArrowLeft } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_id-BthNaM8U.mjs";
import { r as usePublicPageCopy, t as getLocalizedCommitteeTypeLabel } from "./_ssr/public-page-i18n-HRVK6TkC.mjs";
import { m as getCommitteeStatusLabel, p as getCommitteeStatusClass } from "./_ssr/committees-BBqoo4Av.mjs";
import { c as getInitials, o as formatTenure, r as fetchPublicCommitteeDetails, s as getCommitteeLocation } from "./_ssr/committees-public-DmF4X0kc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-C2KI62EX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PublicCommitteeDetailPage() {
	const { id } = Route.useParams();
	const publicCopy = usePublicPageCopy();
	const [committee, setCommittee] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function loadCommittee() {
			setLoading(true);
			setError("");
			try {
				const data = await fetchPublicCommitteeDetails(id);
				if (!cancelled) setCommittee(data);
			} catch (err) {
				if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load committee.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadCommittee();
		return () => {
			cancelled = true;
		};
	}, [id]);
	const groupedMembers = (0, import_react.useMemo)(() => {
		if (!committee) return [];
		const groups = /* @__PURE__ */ new Map();
		committee.members.forEach((member) => {
			const status = member.status || "active";
			groups.set(status, [...groups.get(status) ?? [], member]);
		});
		return [...groups.entries()];
	}, [committee]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.shared.loading })
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
			message: error,
			tone: "error"
		})
	});
	if (!committee) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.committees.empty })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-8 sm:px-4 sm:py-12",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/committees",
					className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: `h-4 w-4 ${publicCopy.iconBeforeClass}` }), publicCopy.committees.backToCommittees]
				}),
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
									children: getLocalizedCommitteeTypeLabel(committee.committee_type, publicCopy.committees)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "max-w-4xl text-[clamp(2.3rem,5vw,4.7rem)] font-black leading-[0.98] tracking-[-0.055em] text-slate-950",
									children: committee.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600",
									children: publicCopy.committees.officialRecord
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `mt-6 flex flex-wrap gap-2 text-sm font-bold text-slate-600 ${publicCopy.isRtl ? "justify-end" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getCommitteeStatusClass(committee.status)}`,
											children: getCommitteeStatusLabel(committee.status)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													size: 14,
													className: "text-emerald-700"
												}),
												" ",
												getCommitteeLocation(committee)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
													size: 14,
													className: "text-emerald-700"
												}),
												" ",
												formatTenure(committee.tenure_start, committee.tenure_end)
											]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-[1.8rem] border border-emerald-900/10 bg-white/80 p-5 shadow-sm backdrop-blur ${publicCopy.textAlignClass}`,
							dir: publicCopy.textDir,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ${publicCopy.isRtl ? "mr-auto" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 25 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black text-slate-950",
									children: publicCopy.committees.publicOfficeBearers
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-7 text-slate-600",
									children: [
										committee.members.length,
										" ",
										publicCopy.committees.activeOfficeBearers
									]
								})
							]
						})]
					})
				}),
				committee.members.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: publicCopy.committees.noOfficeBearers }) : groupedMembers.map(([status, members]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: publicCopy.textAlignClass,
							dir: publicCopy.textDir,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-eyebrow mb-2",
								children: publicCopy.committees.officeBearers
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl font-black tracking-tight text-slate-950",
								children: [
									getCommitteeStatusLabel(status),
									" ",
									publicCopy.committees.members
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-600 ring-1 ring-slate-200",
							children: [
								members.length,
								" ",
								publicCopy.committees.listed
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
						children: members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeBearerCard, {
							member,
							labels: publicCopy.committees
						}, member.id))
					})]
				}, status))
			]
		})
	});
}
function OfficeBearerCard({ member, labels }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-950 text-lg font-black text-[#f2d48f] shadow-sm",
				children: getInitials(member.full_name_snapshot)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[0.16em] text-emerald-700",
						children: member.designation_title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl font-black leading-tight text-slate-950",
						children: member.full_name_snapshot
					}),
					member.father_name_snapshot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm font-semibold text-slate-500",
						children: [
							labels.father,
							": ",
							member.father_name_snapshot
						]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { size: 15 }),
					label: labels.memberId,
					value: member.member_no_snapshot || labels.notDisclosed
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 }),
					label: labels.location,
					value: [member.taluka_snapshot, member.district_snapshot].filter(Boolean).join(", ") || labels.sindh
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 15 }),
					label: labels.tenure,
					value: formatTenure(member.tenure_start, member.tenure_end)
				})
			]
		})]
	});
}
function InfoLine({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 text-emerald-700",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block font-bold text-slate-900",
			children: value
		})] })]
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-[1.5rem] p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-white text-slate-600 ring-slate-200"}`,
		children: message
	});
}
//#endregion
export { PublicCommitteeDetailPage as component };
