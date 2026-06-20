import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { Dt as Award, G as IdCard, M as MapPin, Ot as ArrowRight, _ as ShieldCheck, bt as CalendarDays, h as Sparkles, r as Users, y as Search } from "../_libs/lucide-react.mjs";
import { c as getInitials, o as formatTenure } from "./committees-public-DmF4X0kc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/designation-holders-C1mE06aX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var designationHolderLevelOrder = [
	"central",
	"central_advisory",
	"provincial",
	"divisional",
	"district",
	"taluka"
];
var publicCommitteeSelect = [
	"id",
	"committee_type",
	"name",
	"division",
	"district",
	"taluka",
	"tenure_start",
	"tenure_end",
	"status",
	"public_display",
	"notes",
	"created_at",
	"updated_at"
].join(", ");
var publicCommitteeMemberSelect = [
	"id",
	"committee_id",
	"member_id",
	"designation_title",
	"status",
	"sort_order",
	"tenure_start",
	"tenure_end",
	"member_no_snapshot",
	"full_name_snapshot",
	"father_name_snapshot",
	"district_snapshot",
	"taluka_snapshot",
	"created_at",
	"updated_at"
].join(", ");
function getDesignationHolderLevelLabel(level) {
	switch (level) {
		case "central": return "CEC";
		case "central_advisory": return "Advisory";
		case "provincial": return "Provincial";
		case "divisional": return "Divisional";
		case "district": return "District";
		case "taluka": return "Taluka";
		default: return "Level";
	}
}
function getDesignationHolderLevelRank(level) {
	const index = designationHolderLevelOrder.indexOf(level);
	return index >= 0 ? index + 1 : designationHolderLevelOrder.length + 1;
}
function getDesignationHolderLocation(holder) {
	if (holder.level === "central") return "Sindh / Central Executive Committee";
	if (holder.level === "central_advisory") return "Sindh / Central Advisory Committee";
	if (holder.level === "provincial") return "Sindh / Provincial";
	if (holder.level === "divisional") return holder.division || "Division not set";
	if (holder.level === "district") return holder.district || "District not set";
	return [holder.taluka, holder.district].filter(Boolean).join(", ") || "Taluka not set";
}
function getDesignationHolderSearchText(holder) {
	return [
		holder.full_name,
		holder.father_name,
		holder.designation_title,
		holder.level_label,
		holder.committee_name,
		holder.member_no,
		holder.division,
		holder.district,
		holder.taluka
	].filter(Boolean).join(" ").toLowerCase();
}
function sortDesignationHolders(holders) {
	return [...holders].sort((a, b) => {
		const levelRank = getDesignationHolderLevelRank(a.level) - getDesignationHolderLevelRank(b.level);
		if (levelRank !== 0) return levelRank;
		const areaRank = getDesignationHolderLocation(a).localeCompare(getDesignationHolderLocation(b));
		if (areaRank !== 0) return areaRank;
		const sortOrderRank = (a.sort_order ?? 999) - (b.sort_order ?? 999);
		if (sortOrderRank !== 0) return sortOrderRank;
		return a.full_name.localeCompare(b.full_name);
	});
}
function formatDesignationHolderTenure(holder) {
	return formatTenure(holder.tenure_start, holder.tenure_end);
}
function getDesignationHolderInitials(name) {
	return getInitials(name);
}
async function fetchPublicDesignationHolders() {
	const rpcResult = await supabase.rpc("get_public_designation_holders");
	if (!rpcResult.error) return attachSignedPhotoUrls(sortDesignationHolders(rpcResult.data ?? []));
	if (!isMissingRpcError(rpcResult.error)) throw rpcResult.error;
	return fetchPublicDesignationHoldersFromSnapshots();
}
async function fetchPublicDesignationHoldersFromSnapshots() {
	const { data: committeesData, error: committeesError } = await supabase.from("organization_committees").select(publicCommitteeSelect).eq("public_display", true).eq("status", "active").order("committee_type", { ascending: true }).order("name", { ascending: true });
	if (committeesError) throw committeesError;
	const committees = committeesData ?? [];
	if (!committees.length) return [];
	const committeeMap = new Map(committees.map((committee) => [committee.id, committee]));
	const { data: membersData, error: membersError } = await supabase.from("organization_committee_members").select(publicCommitteeMemberSelect).in("committee_id", committees.map((committee) => committee.id)).eq("status", "active").order("sort_order", { ascending: true }).order("created_at", { ascending: true }).limit(1e3);
	if (membersError) throw membersError;
	return sortDesignationHolders((membersData ?? []).flatMap((member) => {
		const committee = committeeMap.get(member.committee_id);
		if (!committee) return [];
		const level = normalizeDesignationHolderLevel(committee.committee_type);
		return [{
			assignment_id: member.id,
			member_id: member.member_id,
			member_no: member.member_no_snapshot,
			full_name: member.full_name_snapshot,
			father_name: member.father_name_snapshot,
			photo_url: null,
			photo_signed_url: null,
			level,
			level_label: getDesignationHolderLevelLabel(level),
			designation_title: member.designation_title,
			committee_id: committee.id,
			committee_name: committee.name,
			division: committee.division,
			district: committee.district ?? member.district_snapshot,
			taluka: committee.taluka ?? member.taluka_snapshot,
			tenure_start: member.tenure_start || committee.tenure_start,
			tenure_end: member.tenure_end || committee.tenure_end,
			sort_order: member.sort_order,
			assigned_at: member.created_at
		}];
	}));
}
function normalizeDesignationHolderLevel(level) {
	if (designationHolderLevelOrder.includes(level)) return level;
	return "district";
}
async function attachSignedPhotoUrls(holders) {
	return await Promise.all(holders.map(async (holder) => ({
		...holder,
		photo_signed_url: await createPhotoSignedUrl(holder.photo_url)
	})));
}
async function createPhotoSignedUrl(path) {
	if (!path) return null;
	const { data, error } = await supabase.storage.from("member-photos").createSignedUrl(path, 3600);
	if (error || !data?.signedUrl) return null;
	return data.signedUrl;
}
function isMissingRpcError(error) {
	const message = String(error?.message || error?.details || "").toLowerCase();
	return String(error?.code || "") === "PGRST202" || message.includes("get_public_designation_holders") || message.includes("could not find the function");
}
var copyByLanguage = {
	en: {
		eyebrow: "MBJP public leadership directory",
		title: "Designation Holders",
		description: "Members can see the officially assigned MBJP designation holders with their name, photo, level and designation in the correct organization order.",
		ctaJoin: "Become a Member",
		ctaCommittees: "View Committees",
		publicDirectory: "Public designation record",
		publicDirectoryText: "Only active holders from public active committees are shown here. The order follows CEC, Central Advisory, Provincial, Divisional, District and Taluka levels.",
		totalHolders: "Designation Holders",
		activeLevels: "Active Levels",
		cec: "CEC",
		centralAdvisory: "Advisory",
		provincial: "Provincial",
		divisional: "Divisional",
		district: "District",
		taluka: "Taluka",
		searchPlaceholder: "Search by name, designation, district, taluka or member ID...",
		allLevels: "All Levels",
		loading: "Loading designation holders...",
		empty: "No designation holders are public yet. Add active committee members from Admin > Committees and enable public display for that committee.",
		holderName: "Name",
		designation: "Designation",
		level: "Level",
		location: "Area / Jurisdiction",
		memberId: "Member ID",
		tenure: "Tenure",
		committee: "Committee",
		notDisclosed: "Not disclosed",
		listed: "listed",
		activeDesignationHolders: "active designation holders",
		orderedBy: "Ordered by official MBJP hierarchy",
		noPhoto: "Photo not available"
	},
	ur: {
		eyebrow: "MBJP عوامی قیادت ڈائریکٹری",
		title: "عہدیداران / Designation Holders",
		description: "ممبرز یہاں MBJP کے باقاعدہ assigned عہدیداران کا نام، تصویر، لیول اور عہدہ درست تنظیمی ترتیب میں دیکھ سکتے ہیں۔",
		ctaJoin: "ممبر بنیں",
		ctaCommittees: "کمیٹیاں دیکھیں",
		publicDirectory: "عوامی عہدہ ریکارڈ",
		publicDirectoryText: "یہاں صرف active public committees کے active designation holders show ہوتے ہیں۔ ترتیب CEC، Central Advisory، Provincial، Divisional، District اور Taluka ہے۔",
		totalHolders: "عہدیداران",
		activeLevels: "Active Levels",
		cec: "CEC",
		centralAdvisory: "Advisory",
		provincial: "Provincial",
		divisional: "Divisional",
		district: "District",
		taluka: "Taluka",
		searchPlaceholder: "نام، عہدہ، ضلع، تعلقہ یا ممبر ID سے search کریں...",
		allLevels: "All Levels",
		loading: "Designation holders load ہو رہے ہیں...",
		empty: "ابھی کوئی public designation holder موجود نہیں۔ Admin > Committees سے active member add کریں اور committee public display enable کریں۔",
		holderName: "Name",
		designation: "Designation",
		level: "Level",
		location: "Area / Jurisdiction",
		memberId: "Member ID",
		tenure: "Tenure",
		committee: "Committee",
		notDisclosed: "Not disclosed",
		listed: "listed",
		activeDesignationHolders: "active designation holders",
		orderedBy: "Official MBJP hierarchy کے مطابق ترتیب",
		noPhoto: "Photo not available"
	},
	sd: {
		eyebrow: "MBJP عوامي قيادت ڊائريڪٽري",
		title: "عهديدار / Designation Holders",
		description: "ميمبر هتي MBJP جي assigned عهديدارن جو نالو، تصوير، ليول ۽ عھدو صحيح تنظيمي ترتيب ۾ ڏسي سگهن ٿا.",
		ctaJoin: "ميمبر ٿيو",
		ctaCommittees: "ڪميٽيون ڏسو",
		publicDirectory: "عوامي عھدو رڪارڊ",
		publicDirectoryText: "هتي صرف active public committees جا active designation holders show ٿين ٿا. ترتيب CEC، Central Advisory، Provincial، Divisional، District ۽ Taluka آهي.",
		totalHolders: "عهديدار",
		activeLevels: "Active Levels",
		cec: "CEC",
		centralAdvisory: "Advisory",
		provincial: "Provincial",
		divisional: "Divisional",
		district: "District",
		taluka: "Taluka",
		searchPlaceholder: "نالو، عھدو، ضلعو، تعلقو يا ميمبر ID سان search ڪريو...",
		allLevels: "All Levels",
		loading: "Designation holders load ٿي رهيا آهن...",
		empty: "اڃا تائين ڪو public designation holder موجود ناهي. Admin > Committees مان active member add ڪريو ۽ committee public display enable ڪريو.",
		holderName: "Name",
		designation: "Designation",
		level: "Level",
		location: "Area / Jurisdiction",
		memberId: "Member ID",
		tenure: "Tenure",
		committee: "Committee",
		notDisclosed: "Not disclosed",
		listed: "listed",
		activeDesignationHolders: "active designation holders",
		orderedBy: "Official MBJP hierarchy مطابق ترتيب",
		noPhoto: "Photo not available"
	}
};
function DesignationHoldersPage() {
	const { language } = useI18n();
	const copy = copyByLanguage[language];
	const [holders, setHolders] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function loadHolders() {
			setLoading(true);
			setError("");
			try {
				const data = await fetchPublicDesignationHolders();
				if (!cancelled) setHolders(data);
			} catch (err) {
				if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load designation holders.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadHolders();
		return () => {
			cancelled = true;
		};
	}, []);
	const filteredHolders = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return holders.filter((holder) => {
			const matchesLevel = filter === "all" || holder.level === filter;
			const matchesSearch = query.length === 0 || getDesignationHolderSearchText(holder).includes(query);
			return matchesLevel && matchesSearch;
		});
	}, [
		filter,
		holders,
		search
	]);
	const groupedHolders = (0, import_react.useMemo)(() => {
		return designationHolderLevelOrder.map((level) => ({
			level,
			holders: filteredHolders.filter((holder) => holder.level === level)
		})).filter((group) => group.holders.length > 0);
	}, [filteredHolders]);
	const stats = (0, import_react.useMemo)(() => {
		const activeLevels = new Set(holders.map((holder) => holder.level)).size;
		return {
			total: holders.length,
			activeLevels
		};
	}, [holders]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-8 sm:px-4 sm:py-12",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#fffdf8,#f7f1e6_50%,#ecf6ef)] p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8 lg:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-eyebrow mb-3",
								children: copy.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-4xl text-[clamp(2.4rem,5.4vw,5rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-950",
								children: copy.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg",
								children: copy.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/signup",
									className: "primary-btn no-underline",
									children: [copy.ctaJoin, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/committees",
									className: "secondary-btn no-underline",
									children: copy.ctaCommittees
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[1.8rem] border border-emerald-900/10 bg-white/85 p-5 shadow-sm backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 25 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black text-slate-950",
									children: copy.publicDirectory
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-7 text-slate-600",
									children: copy.publicDirectoryText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: designationHolderLevelOrder.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase text-emerald-800 ring-1 ring-emerald-100",
										children: getLocalizedLevelLabel(level, copy)
									}, level))
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.totalHolders,
							value: stats.total
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.activeLevels,
							value: stats.activeLevels
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.cec,
							value: holders.filter((holder) => holder.level === "central").length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.centralAdvisory,
							value: holders.filter((holder) => holder.level === "central_advisory").length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.district,
							value: holders.filter((holder) => holder.level === "district").length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: copy.taluka,
							value: holders.filter((holder) => holder.level === "taluka").length
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_240px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: search,
								onChange: (event) => setSearch(event.target.value),
								className: "h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
								placeholder: copy.searchPlaceholder
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: filter,
							onChange: (event) => setFilter(event.target.value),
							className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: copy.allLevels
							}), designationHolderLevelOrder.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: level,
								children: getLocalizedLevelLabel(level, copy)
							}, level))]
						})]
					})
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.loading }) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
					message: error,
					tone: "error"
				}) : filteredHolders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: copy.empty }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: groupedHolders.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-eyebrow mb-2",
								children: copy.orderedBy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl font-black tracking-tight text-slate-950",
								children: [
									getLocalizedLevelLabel(group.level, copy),
									" ",
									copy.activeDesignationHolders
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-600 ring-1 ring-slate-200",
								children: [
									group.holders.length,
									" ",
									copy.listed
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
							children: group.holders.map((holder) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignationHolderCard, {
								holder,
								copy
							}, holder.assignment_id))
						})]
					}, group.level))
				})
			]
		})
	});
}
function DesignationHolderCard({ holder, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(12,71,49,0.10),rgba(196,145,44,0.14))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-20 w-20 shrink-0 overflow-hidden rounded-[1.4rem] bg-emerald-950 shadow-sm ring-4 ring-white",
					children: holder.photo_signed_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: holder.photo_signed_url,
						alt: `${holder.full_name} profile`,
						className: "h-full w-full object-cover",
						loading: "lazy"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full w-full items-center justify-center text-xl font-black text-[#f2d48f]",
						title: copy.noPhoto,
						children: getDesignationHolderInitials(holder.full_name)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-emerald-50 px-3 py-1 text-[0.67rem] font-black uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-100",
								children: getDesignationHolderLevelLabel(holder.level)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-amber-50 px-3 py-1 text-[0.67rem] font-black uppercase tracking-wide text-amber-800 ring-1 ring-amber-100",
								children: "Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-black leading-tight text-slate-950",
							children: holder.full_name
						}),
						holder.father_name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm font-semibold text-slate-500",
							children: ["Father: ", holder.father_name]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 15 }),
						label: copy.designation,
						value: holder.designation_title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }),
						label: copy.level,
						value: getDesignationHolderLevelLabel(holder.level)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 }),
						label: copy.location,
						value: getDesignationHolderLocation(holder)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 15 }),
						label: copy.committee,
						value: holder.committee_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { size: 15 }),
						label: copy.memberId,
						value: holder.member_no || copy.notDisclosed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 15 }),
						label: copy.tenure,
						value: formatDesignationHolderTenure(holder)
					})
				]
			})
		]
	});
}
function InfoLine({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 text-emerald-700",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[0.68rem] font-black uppercase tracking-wide text-slate-500",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block break-words font-bold text-slate-900",
				children: value
			})]
		})]
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
		})
	});
}
function getLocalizedLevelLabel(level, copy) {
	switch (level) {
		case "central": return copy.cec;
		case "central_advisory": return copy.centralAdvisory;
		case "provincial": return copy.provincial;
		case "divisional": return copy.divisional;
		case "district": return copy.district;
		case "taluka": return copy.taluka;
		default: return getDesignationHolderLevelLabel(level);
	}
}
//#endregion
export { DesignationHoldersPage as component };
