import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as LoaderCircle, Tt as BadgeIndianRupee, _ as ShieldCheck, d as Trophy, f as TriangleAlert, r as Users } from "../_libs/lucide-react.mjs";
import { l as formatFinanceMoney } from "./finance-Cn3yAGsy.mjs";
import { i as getRankLabel, n as formatLeaderboardPurposes, r as getDonorBadge } from "./donations-BhPZKBSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donors-C9xw28ms.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DonorsPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [access, setAccess] = (0, import_react.useState)({ ok: true });
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadLeaderboard();
	}, []);
	async function loadLeaderboard() {
		setLoading(true);
		setMessage("");
		const approvedAccess = await ensureApprovedMemberAccess();
		setAccess(approvedAccess);
		if (!approvedAccess.ok) {
			setRows([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.rpc("get_donor_leaderboard", { _limit: 50 });
		if (error) {
			setMessage(error.message);
			setRows([]);
			setLoading(false);
			return;
		}
		setRows(data || []);
		setLoading(false);
	}
	const totals = (0, import_react.useMemo)(() => {
		return {
			totalDonated: rows.reduce((sum, item) => sum + Number(item.total_donated || 0), 0),
			totalDonations: rows.reduce((sum, item) => sum + Number(item.donation_count || 0), 0),
			totalDonors: rows.length
		};
	}, [rows]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-12 text-white md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-amber-300" }), "Member-only Donor Leaderboard"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-black md:text-6xl",
						children: "MBJP Top Donors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-lg leading-8 text-white/70",
						children: "Approved MBJP members ke liye donor leaderboard. Sirf finance admin approved donations count hoti hain."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-amber-300/30 bg-amber-300/10 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-8 w-8 text-amber-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-black",
								children: "Privacy Rule"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-white/70",
								children: "Ye leaderboard sirf logged-in approved MBJP members ko show hota hai. CNIC, phone, receipt aur transaction reference hidden rehte hain."
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl space-y-8",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-amber-500" })
				}) : !access.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestrictedPanel, { access }) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-red-200 bg-red-50 p-6 text-red-800 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black",
						children: "Unable to load leaderboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold",
						children: message
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Total Approved Donors",
							value: totals.totalDonors,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Approved Donations",
							value: totals.totalDonations,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							title: "Total Donated",
							value: formatFinanceMoney(totals.totalDonated),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5" })
						})
					]
				}), rows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonorRankCard, {
						row,
						rank: index + 1
					}, row.donor_member_id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-slate-950",
							children: "No approved donations yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-slate-600",
							children: "Finance admin approval ke baad donations yahan show hongi."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/donate",
							className: "primary-btn mt-6",
							children: "Submit Donation"
						})
					]
				})] })
			})
		})]
	});
}
function DonorRankCard({ row, rank }) {
	const isTopThree = rank <= 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: `overflow-hidden rounded-3xl border bg-white shadow-sm ${isTopThree ? "border-amber-200" : "border-slate-200"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid gap-5 p-6 md:grid-cols-[110px_1fr_260px] md:items-center ${isTopThree ? "bg-gradient-to-br from-amber-50 to-white" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 md:block md:text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex h-20 w-20 items-center justify-center rounded-3xl text-3xl font-black ${rank === 1 ? "bg-amber-400 text-slate-950" : rank === 2 ? "bg-slate-200 text-slate-900" : rank === 3 ? "bg-orange-200 text-orange-950" : "bg-slate-100 text-slate-700"}`,
						children: ["#", rank]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0 text-sm font-black uppercase tracking-[0.16em] text-slate-500 md:mt-3",
						children: getRankLabel(rank)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-black text-slate-950",
						children: row.donor_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Father:" }),
								" ",
								row.donor_father_name
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Member ID:" }),
								" ",
								row.donor_member_no
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Total Donated:" }),
								" ",
								formatFinanceMoney(row.total_donated)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Purpose:" }),
								" ",
								formatLeaderboardPurposes(row.purposes)
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700",
						children: getDonorBadge(Number(row.total_donated || 0))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-slate-950 p-5 text-white md:text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-[0.18em] text-amber-300",
							children: "Approved Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-black",
							children: formatFinanceMoney(row.total_donated)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-white/60",
							children: [
								row.donation_count,
								" approved donation",
								Number(row.donation_count || 0) === 1 ? "" : "s"
							]
						})
					]
				})
			]
		})
	});
}
function RestrictedPanel({ access }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-1 h-5 w-5 flex-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black",
					children: "Members-only leaderboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6",
					children: access.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-3",
					children: [access.action === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "primary-btn",
						children: "Login"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "primary-btn",
						children: "Complete Membership"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "secondary-btn",
						children: "Back Home"
					})]
				})
			] })]
		})
	});
}
function StatCard({ title, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-black uppercase tracking-[0.18em] text-slate-400",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-2xl font-black text-slate-950",
				children: value
			})
		]
	});
}
async function ensureApprovedMemberAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		action: "login",
		message: "Donor leaderboard dekhne ke liye pehle login karen."
	};
	const { data, error } = await supabase.from("members").select("id, member_no, status").eq("user_id", user.id).maybeSingle();
	if (error) return {
		ok: false,
		action: "membership",
		message: error.message
	};
	if (!data || data.status !== "approved" || !data.member_no) return {
		ok: false,
		action: "membership",
		message: "Ye donor leaderboard sirf approved MBJP members ke liye available hai."
	};
	return { ok: true };
}
//#endregion
export { DonorsPage as component };
