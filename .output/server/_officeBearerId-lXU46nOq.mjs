import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { Et as BadgeCheck, G as IdCard, M as MapPin, _ as ShieldCheck, a as UserRound, bt as CalendarDays, kt as ArrowLeft, v as ShieldAlert, z as Landmark } from "./_libs/lucide-react.mjs";
import { h as getCommitteeTypeLabel } from "./_ssr/committees-BBqoo4Av.mjs";
import { a as formatOfficeBearerDisplayText, n as fetchOfficeBearerVerification, s as getCommitteeLocation, t as buildOfficeBearerId } from "./_ssr/committees-public-DmF4X0kc.mjs";
import { t as Route } from "./_officeBearerId-BUgYzVOe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_officeBearerId-lXU46nOq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}/;
function toIsoDateString(value) {
	if (!value) return null;
	if (value instanceof Date) {
		if (Number.isNaN(value.getTime())) return null;
		return value.toISOString().slice(0, 10);
	}
	const raw = String(value).trim();
	if (!raw) return null;
	const isoMatch = raw.match(ISO_DATE_PATTERN);
	if (isoMatch) return isoMatch[0];
	const parsed = new Date(raw);
	if (Number.isNaN(parsed.getTime())) return null;
	return parsed.toISOString().slice(0, 10);
}
function addYearsMinusOneDayToIsoDate(value, years = 1) {
	const isoDate = toIsoDateString(value);
	if (!isoDate) return null;
	const [year, month, day] = isoDate.split("-").map(Number);
	const date = new Date(Date.UTC(year, month - 1, day));
	date.setUTCFullYear(date.getUTCFullYear() + years);
	date.setUTCDate(date.getUTCDate() - 1);
	return date.toISOString().slice(0, 10);
}
function getDesignationValidityStart(source) {
	return toIsoDateString(source.tenure_start) || toIsoDateString(source.tenureStart) || toIsoDateString(source.assigned_at) || toIsoDateString(source.assignedAt) || toIsoDateString(source.created_at) || toIsoDateString(source.createdAt);
}
function getDesignationExpiryDate(source) {
	const calculatedExpiry = addYearsMinusOneDayToIsoDate(getDesignationValidityStart(source));
	if (calculatedExpiry) return calculatedExpiry;
	return toIsoDateString(source.tenure_end) || toIsoDateString(source.tenureEnd);
}
function formatDesignationDate(value) {
	const isoDate = toIsoDateString(value);
	if (!isoDate) return "N/A";
	const [year, month, day] = isoDate.split("-").map(Number);
	return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC"
	});
}
function formatDesignationValidity(source) {
	const validFrom = getDesignationValidityStart(source);
	const expiresOn = getDesignationExpiryDate(source);
	if (validFrom && expiresOn) return `${formatDesignationDate(validFrom)} – ${formatDesignationDate(expiresOn)}`;
	if (validFrom) return `From ${formatDesignationDate(validFrom)}`;
	if (expiresOn) return `Until ${formatDesignationDate(expiresOn)}`;
	return "Validity not set";
}
function formatDesignationExpiry(source) {
	const expiresOn = getDesignationExpiryDate(source);
	return expiresOn ? formatDesignationDate(expiresOn) : "Expiry not set";
}
function OfficeBearerVerificationPage() {
	const { officeBearerId } = Route.useParams();
	const [card, setCard] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function loadVerification() {
			setLoading(true);
			setError("");
			try {
				const result = await fetchOfficeBearerVerification(officeBearerId);
				if (!cancelled) setCard(result);
			} catch (err) {
				if (!cancelled) {
					setError(err instanceof Error ? err.message : "Unable to verify this office bearer card.");
					setCard(null);
				}
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		loadVerification();
		return () => {
			cancelled = true;
		};
	}, [officeBearerId]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[linear-gradient(135deg,#06130f,#0f5138)] px-4 py-10 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-black uppercase tracking-[0.22em] text-[#f6d56f]",
				children: "Verifying Office Bearer Card"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-3xl font-black",
				children: "Checking official MBJP record..."
			})]
		})
	});
	if (error || !card) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvalidVerificationState, { message: error || "This office bearer card could not be verified." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifiedOfficeBearer, {
		card,
		requestedId: officeBearerId
	});
}
function VerifiedOfficeBearer({ card, requestedId }) {
	const committee = card.committee;
	const officialId = buildOfficeBearerId(card);
	const memberName = formatOfficeBearerDisplayText(card.member.full_name || card.full_name_snapshot);
	const fatherName = formatOfficeBearerDisplayText(card.member.father_name || card.father_name_snapshot || "N/A");
	const designation = formatOfficeBearerDisplayText(card.designation_title);
	const committeeName = formatOfficeBearerDisplayText(committee?.name || "Committee record");
	const level = committee ? getCommitteeTypeLabel(committee.committee_type) : "MBJP Committee";
	const location = committee ? getCommitteeLocation(committee) : getSnapshotLocation(card);
	const validity = formatDesignationValidity(card);
	const expiryDate = formatDesignationExpiry(card);
	const isExactMatch = (0, import_react.useMemo)(() => officialId.toUpperCase() === requestedId.trim().toUpperCase(), [officialId, requestedId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[linear-gradient(135deg,#06130f,#0b3024_48%,#111827)] px-4 py-8 text-white sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-white no-underline transition hover:bg-white/15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to MBJP"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-[2.25rem] border border-[#f6d56f]/30 bg-white text-slate-950 shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-[linear-gradient(135deg,#06130f,#0f5138)] p-6 text-white sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-[0.14]",
						style: {
							backgroundImage: "radial-gradient(circle at 28px 28px,#f6d56f 2px,transparent 2px)",
							backgroundSize: "48px 48px"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "inline-flex items-center gap-2 rounded-full border border-[#f6d56f]/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f6d56f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" }), "Office Bearer Verified"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 text-[clamp(2.3rem,6vw,4.8rem)] font-black leading-[0.9] tracking-[-0.06em]",
								children: ["Active Authority", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[#f6d56f]",
									children: "Record Confirmed"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base",
								children: "This QR confirms that the bearer currently has a valid active MBJP committee designation in the official public organization record."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[2rem] border border-[#f6d56f]/35 bg-[#f6d56f] px-6 py-5 text-emerald-950 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-[0.2em]",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-2 text-3xl font-black uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-7 w-7" }), "Valid"]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#06130f,#0f5138)] text-2xl font-black text-[#f6d56f] shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-9 w-9" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
									children: "Verified Bearer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-3xl font-black tracking-tight text-slate-950",
									children: memberName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-bold text-slate-500",
									children: ["Father: ", fatherName]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, {}),
									label: "Office Bearer ID",
									value: officialId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {}),
									label: "Designation",
									value: designation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {}),
									label: "Committee",
									value: committeeName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}),
									label: "Level",
									value: level
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
									label: "Jurisdiction",
									value: location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
									label: "Validity",
									value: validity
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyInfo, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
									label: "Expiry Date",
									value: expiryDate
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5 text-emerald-950",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-[0.2em] text-emerald-700",
								children: "Verification Result"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-black",
								children: "Valid office bearer card"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold leading-7 text-emerald-900/75",
								children: "The QR code links to a public MBJP verification route. Accept this authority only while the status remains valid, the expiry date has not passed, and the committee details match the presented card."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-emerald-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.16em] text-slate-400",
									children: "Match Quality"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg font-black text-slate-950",
									children: isExactMatch ? "Exact ID match" : "Short ID match"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/committees",
								className: "mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-900 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-emerald-800",
								children: "View Public Committees"
							})
						]
					})]
				})]
			})]
		})
	});
}
function InvalidVerificationState({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[linear-gradient(135deg,#450a0a,#111827)] px-4 py-10 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl rounded-[2rem] border border-red-200/20 bg-white p-6 text-slate-950 shadow-2xl sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50 text-red-700 ring-1 ring-red-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs font-black uppercase tracking-[0.22em] text-red-700",
					children: "Verification Failed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
					children: "Office bearer card not verified"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm font-semibold leading-7 text-slate-600",
					children: [message, " The designation may be inactive, expired, private, removed, or the verification link may be incorrect."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "primary-btn no-underline",
						children: "Go to Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/committees",
						className: "secondary-btn no-underline",
						children: "View Public Committees"
					})]
				})
			]
		})
	});
}
function VerifyInfo({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-emerald-800",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-400",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 break-words text-lg font-black leading-6 text-slate-950",
			children: value
		})]
	});
}
function getSnapshotLocation(card) {
	return [card.taluka_snapshot, card.district_snapshot].filter(Boolean).join(", ") || "Sindh";
}
//#endregion
export { OfficeBearerVerificationPage as component };
