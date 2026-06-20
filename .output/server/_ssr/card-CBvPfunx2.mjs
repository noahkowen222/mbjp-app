import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, Et as BadgeCheck, G as IdCard, I as LoaderCircle, W as ImageOff, _ as ShieldCheck, at as ExternalLink, ct as CreditCard, gt as CircleAlert, ht as CircleCheck, kt as ArrowLeft, lt as Copy, ot as Download, w as QrCode } from "../_libs/lucide-react.mjs";
import { a as generateQrDataUrl, i as fetchActiveMemberCardDesignations, n as MembershipCard, r as exportElementAsPng, t as CARD_WIDTH } from "./qrcode-kfSthBZ-.mjs";
import { t as Route } from "./card-BscaLR13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-CBvPfunx2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MBJP_LOGO_PATH = "/mbjp/logo.png";
var MBJP_FLAG_PATH = "/mbjp/logo.png";
var MEMBER_PHOTO_BUCKET = "member-photos";
var SIGNED_URL_TTL_SECONDS = 3600;
var PUBLIC_VERIFY_ORIGIN = String("https://mbjp.org.pk").replace(/\/+$/, "");
var MEMBERSHIP_REVIEW_ROLES = [
	"admin",
	"super_admin",
	"membership_admin"
];
function AdminMemberCardPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const visibleStageRef = (0, import_react.useRef)(null);
	const frontExportRef = (0, import_react.useRef)(null);
	const backExportRef = (0, import_react.useRef)(null);
	const [cardScale, setCardScale] = (0, import_react.useState)(1);
	const [selectedSide, setSelectedSide] = (0, import_react.useState)("front");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [downloadingTarget, setDownloadingTarget] = (0, import_react.useState)(null);
	const [member, setMember] = (0, import_react.useState)(null);
	const [photoUrl, setPhotoUrl] = (0, import_react.useState)(null);
	const [logoUrl, setLogoUrl] = (0, import_react.useState)(null);
	const [flagUrl, setFlagUrl] = (0, import_react.useState)(null);
	const [qrUrl, setQrUrl] = (0, import_react.useState)(null);
	const [verifyUrl, setVerifyUrl] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const cardReady = Boolean(member?.status === "approved" && member.member_no && qrUrl && verifyUrl);
	const loadCard = (0, import_react.useCallback)(async (options) => {
		const silent = options?.silent ?? false;
		if (silent) setRefreshing(true);
		else setLoading(true);
		setError("");
		setSuccess("");
		if (!silent) {
			setMember(null);
			setPhotoUrl(null);
			setQrUrl(null);
			setVerifyUrl("");
		}
		try {
			const access = await ensureAdminAccess();
			if (access.ok === false) {
				await navigate({ to: access.redirectTo });
				return;
			}
			const [logoDataUrl, flagDataUrl] = await Promise.all([imageUrlToDataUrl(MBJP_LOGO_PATH), imageUrlToDataUrl(MBJP_FLAG_PATH)]);
			setLogoUrl(logoDataUrl || MBJP_LOGO_PATH);
			setFlagUrl(flagDataUrl || MBJP_FLAG_PATH);
			const data = await fetchMemberForCard(id);
			if (!data) throw new Error("Member record not found.");
			const activeDesignations = await fetchActiveMemberCardDesignations(data.id, 2);
			setMember({
				...data,
				activeDesignation: activeDesignations[0] ?? null,
				activeDesignations
			});
			if (data.status !== "approved" || !data.member_no) {
				setPhotoUrl(null);
				setQrUrl(null);
				setVerifyUrl("");
				return;
			}
			const publicVerifyUrl = `${PUBLIC_VERIFY_ORIGIN}/verify/${encodeURIComponent(data.member_no)}`;
			const generatedQr = await generateQrDataUrl(publicVerifyUrl, {
				width: 320,
				margin: 1,
				errorCorrectionLevel: "H",
				color: {
					dark: "#111827",
					light: "#ffffff"
				}
			});
			setVerifyUrl(publicVerifyUrl);
			setQrUrl(generatedQr);
			if (data.photo_url) {
				const { data: signed } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).createSignedUrl(data.photo_url, SIGNED_URL_TTL_SECONDS);
				if (signed?.signedUrl) setPhotoUrl(await imageUrlToDataUrl(signed.signedUrl) || signed.signedUrl);
				else setPhotoUrl(null);
			} else setPhotoUrl(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load digital membership card.");
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [id, navigate]);
	(0, import_react.useEffect)(() => {
		loadCard();
	}, [loadCard]);
	(0, import_react.useEffect)(() => {
		const updateScale = () => {
			const stageWidth = visibleStageRef.current?.clientWidth || 1280;
			const nextScale = Math.min(1, Math.max(.2, Math.max(220, stageWidth) / CARD_WIDTH));
			setCardScale(Number(nextScale.toFixed(4)));
		};
		updateScale();
		const node = visibleStageRef.current;
		const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateScale) : null;
		if (node && resizeObserver) resizeObserver.observe(node);
		window.addEventListener("resize", updateScale);
		return () => {
			resizeObserver?.disconnect();
			window.removeEventListener("resize", updateScale);
		};
	}, []);
	async function exportCardToPng(side) {
		if (!member?.member_no) throw new Error("Member number is not available.");
		const targetRef = side === "front" ? frontExportRef : backExportRef;
		if (!targetRef.current) throw new Error(`Unable to prepare ${side} side for download.`);
		await exportElementAsPng(targetRef.current, `${member.member_no}-MBJP-card-${side}.png`, {
			width: CARD_WIDTH,
			height: 760,
			canvasWidth: CARD_WIDTH * 2.5,
			canvasHeight: 760 * 2.5
		});
	}
	async function handleDownload(side) {
		setDownloadingTarget(side);
		setError("");
		setSuccess("");
		try {
			await exportCardToPng(side);
			setSuccess(`${capitalize(side)} side downloaded successfully.`);
		} catch (err) {
			setError(err instanceof Error ? err.message : `Failed to download ${side} side. Please try again.`);
		} finally {
			setDownloadingTarget(null);
		}
	}
	async function handleDownloadBoth() {
		setDownloadingTarget("both");
		setError("");
		setSuccess("");
		try {
			await exportCardToPng("front");
			await wait(350);
			await exportCardToPng("back");
			setSuccess("Front and back sides downloaded successfully.");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to download both card sides. Please try again.");
		} finally {
			setDownloadingTarget(null);
		}
	}
	async function copyVerifyUrl() {
		if (!verifyUrl) return;
		try {
			await navigator.clipboard.writeText(verifyUrl);
			setSuccess("Verification link copied.");
			setError("");
		} catch {
			setError("Could not copy verification link.");
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm font-bold text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), "Loading digital card..."]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-5 sm:space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToMember, { id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
										children: "Admin Card Preview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 break-words text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
										children: "Digital Membership Card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
										children: "Preview and download the same front/back card design that the approved member sees in the dashboard."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 sm:grid-cols-2 lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadCard({ silent: true }),
									disabled: refreshing || downloadingTarget !== null,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), "Refresh"]
								}), cardReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSideToggle, {
									selectedSide,
									onSelect: setSelectedSide
								}) : null]
							})]
						})]
					}), member ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: "Member",
								value: member.full_name,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCardIcon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: "Status",
								value: getStatusLabel(member.status),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: "Member No",
								value: member.member_no || "Not issued",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: "Card State",
								value: cardReady ? "Ready" : "Not available",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" })
							})
						]
					}) : null]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBox, {
					tone: "error",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5" }),
					children: error
				}) : null,
				success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBox, {
					tone: "success",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }),
					children: success
				}) : null,
				!member ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCardState, {
					title: "Member record not found",
					message: "This member record could not be loaded. Please return to the admin list and try again.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
						style: { color: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Admin"]
					})
				}) : cardReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-center text-xs font-semibold text-slate-500 sm:hidden",
							children: "Card preview auto-fits your screen. Use the buttons to switch sides."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: visibleStageRef,
							className: "w-full overflow-hidden pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaledCardShell, {
								scale: cardScale,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipCard, {
									side: selectedSide,
									member,
									photoUrl,
									logoUrl,
									flagUrl,
									qrUrl,
									verifyUrl
								})
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl bg-emerald-50 p-3 text-emerald-700 ring-1 ring-emerald-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-base font-black text-slate-950",
										children: "Card is ready"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-6 text-slate-500",
										children: "This member is approved and has a membership number. The QR code points to the public verification page."
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wide text-slate-500",
										children: "Verification Link"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 break-all rounded-2xl bg-slate-50 p-3 font-mono text-xs font-semibold text-slate-700 ring-1 ring-slate-100",
										children: verifyUrl
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: copyVerifyUrl,
											className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Copy Link"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/verify/$memberNo",
											params: { memberNo: member.member_no ?? "" },
											className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-bold text-emerald-800 no-underline shadow-sm transition hover:bg-emerald-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), "Open Verification"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wide text-slate-500",
									children: "Download Card"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void handleDownload("front"),
											disabled: downloadingTarget !== null,
											className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
											children: [downloadingTarget === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "front" ? "Downloading..." : "Download Front PNG"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void handleDownload("back"),
											disabled: downloadingTarget !== null,
											className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60",
											style: { color: "#ffffff" },
											children: [downloadingTarget === "back" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "back" ? "Downloading..." : "Download Back PNG"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void handleDownloadBoth(),
											disabled: downloadingTarget !== null,
											className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-2 text-sm font-black text-slate-950 shadow-sm transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60",
											children: [downloadingTarget === "both" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "both" ? "Downloading both..." : "Download Both Sides"]
										})
									]
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCards, {
					member,
					photoUrl,
					logoUrl,
					flagUrl,
					qrUrl,
					verifyUrl,
					frontRef: frontExportRef,
					backRef: backExportRef
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCardState, {
					title: "Digital card is not available yet",
					message: member.status === "approved" ? "This member is approved, but the member number is not available yet. The card will become available after member number issuance." : "This digital card will be available only after admin approval and member number issuance.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/members/$id",
						params: { id },
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
						style: { color: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Member Details"]
					})
				})
			]
		})
	});
}
function BackToMember({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin/members/$id",
		params: { id },
		className: "inline-flex items-center gap-2 text-sm font-bold text-emerald-700 no-underline hover:text-emerald-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Member Details"]
	});
}
function CardSideToggle({ selectedSide, onSelect }) {
	const labels = {
		front: "Front",
		back: "Back"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex h-11 rounded-xl border border-slate-200 bg-slate-100 p-1",
		children: ["front", "back"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onSelect(side),
			className: `rounded-lg px-4 py-2 text-sm font-bold capitalize transition ${selectedSide === side ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950"}`,
			children: labels[side]
		}, side))
	});
}
function ScaledCardShell({ scale, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto",
		style: {
			width: `${CARD_WIDTH * scale}px`,
			height: `${760 * scale}px`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				width: `${CARD_WIDTH}px`,
				height: `760px`,
				transform: `scale(${scale})`,
				transformOrigin: "top left"
			},
			children
		})
	});
}
function ExportCards({ member, photoUrl, logoUrl, flagUrl, qrUrl, verifyUrl, frontRef, backRef }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed left-[-10000px] top-0",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: frontRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipCard, {
				side: "front",
				member,
				photoUrl,
				logoUrl,
				flagUrl,
				qrUrl,
				verifyUrl
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: backRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipCard, {
				side: "back",
				member,
				photoUrl,
				logoUrl,
				flagUrl,
				qrUrl,
				verifyUrl
			})
		})]
	});
}
function SummaryItem({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-wide text-slate-500",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-words text-sm font-black text-slate-950",
					children: value
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-emerald-700",
				children: icon
			})]
		})
	});
}
function AlertBox({ tone, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-start gap-3 rounded-2xl p-4 text-sm font-medium ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-emerald-50 text-emerald-700 ring-emerald-100"}`,
		role: tone === "error" ? "alert" : "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 shrink-0",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function EmptyCardState({ title, message, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/70 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 ring-1 ring-slate-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-xl font-black text-slate-950",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500",
				children: message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: action
			})
		]
	});
}
function UserCardIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-4 w-4" });
}
async function ensureAdminAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		redirectTo: "/login"
	};
	const { data: roles, error: roleError } = await supabase.from("user_roles").select("id, role").eq("user_id", user.id).in("role", MEMBERSHIP_REVIEW_ROLES).limit(1);
	if (roleError || !roles?.length) return {
		ok: false,
		redirectTo: "/dashboard"
	};
	return { ok: true };
}
async function fetchMemberForCard(id) {
	const { data, error } = await supabase.from("members").select([
		"id",
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
		"approved_at",
		"address",
		"date_of_birth",
		"gender",
		"education",
		"blood_group",
		"emergency_contact_name",
		"emergency_contact_relation",
		"emergency_contact_mobile",
		"declaration_accepted"
	].join(", ")).eq("id", id).maybeSingle();
	if (error) throw error;
	return data;
}
async function imageUrlToDataUrl(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) return null;
		const blob = await response.blob();
		return await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
	} catch {
		return null;
	}
}
function getStatusLabel(status) {
	switch (status) {
		case "approved": return "Approved";
		case "rejected": return "Rejected";
		default: return "Pending";
	}
}
function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}
function wait(ms) {
	return new Promise((resolve) => window.setTimeout(resolve, ms));
}
//#endregion
export { AdminMemberCardPage as component };
