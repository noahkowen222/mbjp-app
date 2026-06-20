import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { Ct as BookOpenCheck, Et as BadgeCheck, G as IdCard, I as LoaderCircle, M as MapPin, Ot as ArrowRight, Tt as BadgeIndianRupee, X as HandHeart, Y as HeartPulse, _ as ShieldCheck, bt as CalendarDays, ct as CreditCard, d as Trophy, et as FileHeart, gt as CircleAlert, ht as CircleCheck, i as User, it as EyeOff, r as Users, rt as Eye, wt as Bell, xt as BriefcaseBusiness } from "../_libs/lucide-react.mjs";
import { o as maskCnic, r as formatDisplayDate, s as maskMobile } from "./formatters-BY4KepB2.mjs";
import { c as getMembershipFeeSubtext, d as getMembershipPaymentStatusClass, f as getMembershipPaymentStatusLabel, l as getMembershipPaymentDisplayStatus, n as MEMBERSHIP_PAYMENT_COMING_SOON_TEXT, r as MEMBERSHIP_PAYMENT_QR_IMAGE_PATH, s as formatMembershipMoney, t as MEMBERSHIP_MANUAL_PAYMENT_DETAILS, u as getMembershipPaymentQrHelpText } from "./membership-fee-MCDC6IES.mjs";
import { f as getFinancePurposeLabel, l as formatFinanceMoney } from "./finance-Cn3yAGsy.mjs";
import { a as getProgramPath, c as getProgramStatusLabel, i as getProgramApplyPath, o as getProgramSingularLabel, r as getNotificationTone, s as getProgramStatusClass } from "./notifications-CK2KZg7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-gQ8iGJIp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var programOrder = [
	"education",
	"health",
	"welfare",
	"employment"
];
var dashboardProgramLabelKeys = {
	education: "dashboard.program.education",
	health: "dashboard.program.health",
	welfare: "dashboard.program.welfare",
	employment: "dashboard.program.employment"
};
function getLocalizedProgramLabel(programKey, t) {
	return t(dashboardProgramLabelKeys[programKey] ?? "dashboard.program.education");
}
function getLocalizedMemberStatusLabel(status, t) {
	switch (status) {
		case "approved": return t("dashboard.status.approved");
		case "rejected": return t("dashboard.status.rejected");
		default: return t("dashboard.status.pending");
	}
}
function DashboardPage() {
	const navigate = useNavigate();
	const { t, direction } = useI18n();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [secondaryLoading, setSecondaryLoading] = (0, import_react.useState)(false);
	const [, setRefreshing] = (0, import_react.useState)(false);
	const [showSensitive, setShowSensitive] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [data, setData] = (0, import_react.useState)({
		member: null,
		photoSignedUrl: null,
		applications: [],
		donations: [],
		donorRank: null,
		notifications: [],
		membershipPayment: null
	});
	(0, import_react.useEffect)(() => {
		loadDashboard();
	}, []);
	async function loadDashboard(options) {
		const silent = options?.silent ?? false;
		if (silent) setRefreshing(true);
		else setLoading(true);
		setError("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			await navigate({
				to: "/login",
				replace: true
			});
			return;
		}
		const { data: memberData, error: memberError } = await supabase.from("members").select([
			"id",
			"user_id",
			"member_no",
			"full_name",
			"father_name",
			"cnic",
			"mobile",
			"district",
			"taluka",
			"profession",
			"caste_branch",
			"photo_url",
			"status",
			"rejection_reason",
			"approved_at",
			"created_at",
			"updated_at",
			"address",
			"date_of_birth",
			"gender",
			"education",
			"blood_group",
			"emergency_contact_name",
			"emergency_contact_relation",
			"emergency_contact_mobile",
			"declaration_accepted"
		].join(", ")).eq("user_id", user.id).maybeSingle().returns();
		if (memberError) {
			setError(memberError.message);
			setLoading(false);
			setRefreshing(false);
			setSecondaryLoading(false);
			return;
		}
		const [membershipPayment, photoSignedUrl] = await Promise.all([loadMembershipPayment(memberData?.id), loadMemberPhoto(memberData?.photo_url)]);
		setData((current) => ({
			...current,
			member: memberData,
			photoSignedUrl,
			membershipPayment,
			applications: silent ? current.applications : [],
			donations: silent ? current.donations : [],
			notifications: silent ? current.notifications : [],
			donorRank: null
		}));
		setLoading(false);
		setRefreshing(false);
		if (!memberData) {
			setSecondaryLoading(false);
			return;
		}
		setSecondaryLoading(true);
		const [applications, donations, notifications] = await Promise.all([
			loadProgramApplications(user.id),
			loadDonations(user.id),
			loadNotifications(user.id)
		]);
		setData((current) => ({
			...current,
			applications,
			donations,
			notifications,
			donorRank: null
		}));
		setSecondaryLoading(false);
	}
	const member = data.member;
	const membershipPaymentStatus = getMembershipPaymentDisplayStatus(data.membershipPayment);
	const summaries = (0, import_react.useMemo)(() => {
		const byProgram = programOrder.map((programKey) => {
			const items = data.applications.filter((item) => item.program_key === programKey);
			const latest = [...items].sort((a, b) => new Date(b.updated_at || b.created_at).getTime() - new Date(a.updated_at || a.created_at).getTime())[0];
			return {
				programKey,
				total: items.length,
				latest
			};
		});
		const approvedDonations = data.donations.filter((item) => item.status === "approved");
		const totalDonated = approvedDonations.reduce((sum, item) => sum + Number(item.amount || 0), 0);
		const pendingDonations = data.donations.filter((item) => item.status === "pending").length;
		return {
			byProgram,
			totalDonated,
			donationCount: approvedDonations.length,
			pendingDonations,
			unreadNotifications: data.notifications.filter((item) => !item.is_read).length
		};
	}, [
		data.applications,
		data.donations,
		data.notifications
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		dir: direction,
		className: "dashboard-page min-h-screen px-3 py-6 sm:px-4 sm:py-8 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl border border-slate-200 bg-white p-8 shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm font-bold text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), t("dashboard.loading")]
			})
		})
	});
	if (!member) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		dir: direction,
		className: "dashboard-page min-h-screen px-3 py-6 sm:px-4 sm:py-8 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-10 w-10 text-amber-700" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-3xl font-black text-slate-950",
					children: t("dashboard.noMember.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-7 text-slate-700",
					children: t("dashboard.noMember.description")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 max-w-2xl rounded-2xl border border-amber-200 bg-white/70 p-4 text-sm leading-6 text-amber-900",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-black",
						children: [
							"Membership Application Fee: ",
							formatMembershipMoney(600),
							" + applicable tax/processing charges."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-amber-800",
						children: getMembershipFeeSubtext()
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					className: "primary-btn mt-6",
					children: t("dashboard.noMember.cta")
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		dir: direction,
		className: "dashboard-page min-h-screen px-3 py-6 sm:px-4 sm:py-8 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dashboard-wrap page-wrap space-y-6 sm:space-y-8",
			children: [
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "dashboard-hero overflow-hidden rounded-[1.5rem] border border-emerald-900/10 bg-white shadow-sm sm:rounded-[2rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dashboard-hero-inner bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-5 text-white sm:p-6 md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dashboard-hero-grid grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dashboard-kicker inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutIcon, {}), t("dashboard.unified")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "dashboard-title mt-5 text-2xl font-black leading-tight sm:text-3xl md:text-5xl",
									children: [
										t("dashboard.welcome"),
										", ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											dir: "auto",
											children: member.full_name
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-base",
									children: t("dashboard.subtitle")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dashboard-info-chips mt-5 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoChip, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" }),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												dir: "ltr",
												children: member.member_no || t("dashboard.memberIdPending")
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoChip, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
											children: member.taluka ? `${member.district} / ${member.taluka}` : member.district
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoChip, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" }),
											children: [
												t("dashboard.joined"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													dir: "ltr",
													children: formatDisplayDate(member.created_at)
												})
											]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dashboard-profile-card rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dashboard-profile-row flex items-center gap-3 sm:gap-4",
									children: [data.photoSignedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: data.photoSignedUrl,
										alt: member.full_name,
										className: "h-20 w-20 rounded-3xl border-2 border-amber-300 object-cover object-top"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-amber-300 bg-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-8 w-8 text-white/60" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-xl font-black",
												children: member.full_name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm font-semibold text-white/65",
												children: [
													t("dashboard.father"),
													": ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														dir: "auto",
														children: member.father_name
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: member.status })
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dashboard-mini-grid mt-5 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
										label: t("dashboard.notifications"),
										value: secondaryLoading ? "…" : summaries.unreadNotifications
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
										label: t("dashboard.donorRank"),
										value: data.donorRank ? `#${data.donorRank}` : "-"
									})]
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dashboard-overview-grid grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-5 lg:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
								label: t("dashboard.membership"),
								value: getLocalizedMemberStatusLabel(member.status, t),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }),
								tone: "emerald"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
								label: t("dashboard.feeStatus"),
								value: getMembershipPaymentStatusLabel(membershipPaymentStatus),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5" }),
								tone: "amber"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
								label: t("dashboard.programsSubmitted"),
								value: secondaryLoading ? "…" : data.applications.length,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "h-5 w-5" }),
								tone: "amber"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
								label: t("dashboard.totalDonated"),
								value: secondaryLoading ? "…" : formatFinanceMoney(summaries.totalDonated),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-5 w-5" }),
								tone: "emerald"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
								label: t("dashboard.pendingDonations"),
								value: secondaryLoading ? "…" : summaries.pendingDonations,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5" }),
								tone: "slate"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "dashboard-content-grid grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "dashboard-card rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
										children: t("dashboard.myActivity")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-black text-slate-950",
										children: t("dashboard.programSummary")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-slate-500",
										children: t("dashboard.programSummaryDesc")
									}),
									secondaryLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), t("dashboard.loading")]
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/notifications",
									className: "secondary-btn",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), t("dashboard.viewUpdates")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-2",
								children: summaries.byProgram.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramSummaryCard, { item }, item.programKey))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "dashboard-card rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
										children: t("dashboard.memberProfile")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-black text-slate-950",
										children: t("dashboard.personalInfo")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-slate-500",
										children: t("dashboard.maskedDesc")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setShowSensitive((value) => !value),
									className: "secondary-btn",
									children: [showSensitive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), showSensitive ? t("dashboard.hideSensitive") : t("dashboard.showSensitive")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.fullName"),
										value: member.full_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.fatherName"),
										value: member.father_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.cnic"),
										value: showSensitive ? member.cnic : maskCnic(member.cnic)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.mobile"),
										value: showSensitive ? member.mobile : maskMobile(member.mobile)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.district"),
										value: member.district
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.taluka"),
										value: member.taluka || t("dashboard.notProvided")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.profession"),
										value: member.profession || t("dashboard.notProvided")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.education"),
										value: member.education || t("dashboard.notProvided")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
										label: t("dashboard.bloodGroup"),
										value: member.blood_group || t("dashboard.notProvided")
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "dashboard-sidebar space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActions, { member }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipFeePanel, { payment: data.membershipPayment }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationPanel, {
								totalDonated: summaries.totalDonated,
								donationCount: summaries.donationCount,
								donorRank: data.donorRank,
								latestDonation: data.donations[0],
								loading: secondaryLoading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsPreview, { notifications: data.notifications })
						]
					})]
				})
			]
		})
	});
}
function LayoutIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" });
}
function InfoChip({ children, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/85",
		children: [icon, children]
	});
}
function MiniMetric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-white/10 bg-white/10 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/50",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xl font-black text-white",
			children: value
		})]
	});
}
function OverviewCard({ label, value, icon, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${tone === "emerald" ? "bg-emerald-50 text-emerald-800" : tone === "amber" ? "bg-amber-50 text-amber-800" : "bg-slate-50 text-slate-800"}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.16em] text-slate-400",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xl font-black text-slate-950",
				children: value
			})
		]
	});
}
function ProgramSummaryCard({ item }) {
	const { t } = useI18n();
	const Icon = getProgramIcon(item.programKey);
	const latest = item.latest;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-3xl border border-slate-200 bg-slate-50 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-800 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-black text-slate-950",
					children: getLocalizedProgramLabel(item.programKey, t)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-semibold text-slate-500",
					children: [
						item.total,
						" ",
						t("dashboard.programsSubmitted").toLowerCase()
					]
				})] })]
			}), latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rounded-full border px-3 py-1 text-xs font-black ${getProgramStatusClass(latest.status)}`,
				children: getProgramStatusLabel(latest.status)
			}) : null]
		}), latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-2xl bg-white p-4 text-sm shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black text-slate-950",
					children: latest.application_no || getProgramSingularLabel(item.programKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-slate-500",
					children: [
						t("dashboard.updated"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							dir: "ltr",
							children: formatDisplayDate(latest.updated_at || latest.created_at)
						})
					]
				}),
				latest.approved_amount ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-bold text-emerald-800",
					children: [
						t("dashboard.approvedAmount"),
						": ",
						formatFinanceMoney(latest.approved_amount)
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `${getProgramPath(item.programKey)}/${latest.id}`,
					className: "mt-4 inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
					children: [t("dashboard.viewUpdates"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-2xl bg-white p-4 text-sm shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-slate-600",
				children: t("dashboard.noApplication")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: getProgramApplyPath(item.programKey),
				className: "mt-4 inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
				children: [t("dashboard.applyNow"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		})]
	});
}
function MembershipFeePanel({ payment }) {
	const { t } = useI18n();
	const status = getMembershipPaymentDisplayStatus(payment);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dashboard-fee-panel rounded-3xl border border-amber-200 bg-amber-50 p-4 shadow-sm sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dashboard-fee-header flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.18em] text-amber-700",
					children: t("dashboard.membershipFee")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-black text-slate-950",
					children: formatMembershipMoney(payment?.total_amount ?? 600)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full border px-3 py-1 text-xs font-black ${getMembershipPaymentStatusClass(status)}`,
					children: getMembershipPaymentStatusLabel(status)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dashboard-fee-body mt-4 grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dashboard-fee-details grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.baseFee"),
							value: formatMembershipMoney(payment?.base_amount ?? 600)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.taxCharges"),
							value: payment ? formatMembershipMoney(payment.tax_amount) : t("dashboard.applicableAtPayment")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.paymentAccount"),
							value: `${MEMBERSHIP_MANUAL_PAYMENT_DETAILS.bankName} · ${MEMBERSHIP_MANUAL_PAYMENT_DETAILS.accountNumber}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.accountTitle"),
							value: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.accountTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.iban"),
							value: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.iban
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.tillId"),
							value: MEMBERSHIP_MANUAL_PAYMENT_DETAILS.tillId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBox, {
							label: t("dashboard.receipt"),
							value: payment?.receipt_path ? payment.receipt_file_name || "Uploaded for admin verification" : MEMBERSHIP_PAYMENT_COMING_SOON_TEXT
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dashboard-fee-qr overflow-hidden rounded-2xl border border-amber-200 bg-white p-3 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: MEMBERSHIP_PAYMENT_QR_IMAGE_PATH,
						alt: "Membership fee payment QR code",
						className: "mx-auto w-full max-w-[180px] rounded-xl object-contain",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-bold leading-5 text-slate-800",
						children: getMembershipPaymentQrHelpText()
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-5 text-amber-800",
				children: t("dashboard.receiptRequired")
			})
		]
	});
}
function QuickActions({ member }) {
	const { t } = useI18n();
	const canEditApplication = member.status === "pending" || member.status === "rejected";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dashboard-quick-actions rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
				children: t("dashboard.quickActions")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-xl font-black text-slate-950",
				children: t("dashboard.nextSteps")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3",
				children: [
					member.status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-800",
						children: t("dashboard.applicationLocked")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/card",
						className: "primary-btn w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), t("dashboard.openDigitalCard")]
					})] }) : canEditApplication ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-900",
						children: t("dashboard.applicationEditable")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/register",
						className: "primary-btn w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" }), t("dashboard.editApplication")]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/register",
						className: "primary-btn w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" }), t("dashboard.noMember.cta")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/donate",
						className: "secondary-btn w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-4 w-4" }), t("dashboard.submitDonation")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/donors",
						className: "secondary-btn w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4" }), t("dashboard.viewDonors")]
					})
				]
			})
		]
	});
}
function DonationPanel({ totalDonated, donationCount, donorRank, latestDonation, loading }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dashboard-donation-panel rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
				children: t("dashboard.myDonations")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-3xl font-black text-slate-950",
				children: loading ? "…" : formatFinanceMoney(totalDonated)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white p-3 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-400",
						children: t("dashboard.approved")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xl font-black text-slate-950",
						children: loading ? "…" : donationCount
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white p-3 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.68rem] font-black uppercase tracking-wide text-slate-400",
						children: t("dashboard.rank")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xl font-black text-slate-950",
						children: loading ? "…" : donorRank ? `#${donorRank}` : "-"
					})]
				})]
			}),
			latestDonation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm font-semibold leading-6 text-slate-600",
				children: [
					t("dashboard.latest"),
					": ",
					latestDonation.donation_no || t("dashboard.myDonations"),
					" ·",
					" ",
					getFinancePurposeLabel(latestDonation.purpose),
					" ·",
					" ",
					getProgramStatusLabel(latestDonation.status)
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold leading-6 text-slate-600",
				children: t("dashboard.noDonationRank")
			})
		]
	});
}
function NotificationsPreview({ notifications }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dashboard-notifications-panel rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
				children: t("dashboard.recentUpdates")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-xl font-black text-slate-950",
				children: t("dashboard.notifications")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/notifications",
				className: "text-sm font-black text-emerald-800",
				children: t("dashboard.viewAll")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 space-y-3",
			children: [notifications.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `rounded-2xl border p-3 ${getNotificationTone(item.category)}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-black",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs font-semibold leading-5 opacity-80",
					children: item.message
				})]
			}, item.id)), !notifications.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-500",
				children: t("dashboard.noNotifications")
			}) : null]
		})]
	});
}
function InfoBox({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dashboard-info-box rounded-2xl border border-slate-200 bg-slate-50 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words text-sm font-black text-slate-950",
			children: value
		})]
	});
}
function StatusBadge({ status }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black ${{
			approved: "border-emerald-200 bg-emerald-50 text-emerald-800",
			rejected: "border-red-200 bg-red-50 text-red-800",
			pending: "border-amber-200 bg-amber-50 text-amber-800"
		}[status]}`,
		children: [status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }) : status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }), getLocalizedMemberStatusLabel(status, t)]
	});
}
async function loadProgramApplications(userId) {
	const { data, error } = await supabase.from("program_applications").select("id, application_no, program_key, status, applicant_name, membership_no, district, taluka, approved_amount, admin_remarks, created_at, submitted_at, updated_at").eq("applicant_user_id", userId).order("created_at", { ascending: false }).limit(20).returns();
	if (error) return [];
	return data || [];
}
async function loadDonations(userId) {
	const { data, error } = await supabase.from("finance_donations").select("id, donation_no, amount, purpose, status, approved_at, created_at").eq("donor_user_id", userId).order("created_at", { ascending: false }).limit(20).returns();
	if (error) return [];
	return data || [];
}
async function loadNotifications(userId) {
	const { data, error } = await supabase.from("notifications").select("id, user_id, title, message, category, related_type, related_id, action_url, is_read, read_at, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(8);
	if (error) return [];
	return data || [];
}
async function loadMembershipPayment(memberId) {
	if (!memberId) return null;
	const { data, error } = await supabase.from("membership_payments").select("*").eq("member_id", memberId).maybeSingle().returns();
	if (error) {
		console.warn("Membership payment status could not be loaded:", error.message);
		return null;
	}
	return data;
}
async function loadMemberPhoto(photoUrl) {
	if (!photoUrl) return null;
	const { data, error } = await supabase.storage.from("member-photos").createSignedUrl(photoUrl, 3600);
	if (error) return null;
	return data?.signedUrl ?? null;
}
function getProgramIcon(programKey) {
	switch (programKey) {
		case "education": return BookOpenCheck;
		case "health": return HeartPulse;
		case "welfare": return HandHeart;
		case "employment": return BriefcaseBusiness;
		default: return FileHeart;
	}
}
//#endregion
export { DashboardPage as component };
