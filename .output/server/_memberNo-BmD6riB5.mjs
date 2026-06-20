import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./_ssr/i18n-XdhEhh6o.mjs";
import { C as RefreshCw, Et as BadgeCheck, G as IdCard, I as LoaderCircle, K as House, _ as ShieldCheck, at as ExternalLink, gt as CircleAlert, ht as CircleCheck, i as User, lt as Copy, mt as CircleX, v as ShieldAlert } from "./_libs/lucide-react.mjs";
import { r as createServerFn, t as createSsrRpc } from "./_ssr/ssr.mjs";
import { t as Route } from "./_memberNo-Dus0tWAI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_memberNo-BmD6riB5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MIN_MEMBER_NUMBER_LENGTH = 3;
var MAX_MEMBER_NUMBER_LENGTH = 80;
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function normalizeMemberNo(memberNo) {
	const normalized = memberNo.trim();
	if (normalized.length < MIN_MEMBER_NUMBER_LENGTH) throw new Error(`Member number must be at least ${MIN_MEMBER_NUMBER_LENGTH} characters.`);
	if (normalized.length > MAX_MEMBER_NUMBER_LENGTH) throw new Error(`Member number must be less than ${MAX_MEMBER_NUMBER_LENGTH} characters.`);
	return normalized;
}
function validateVerifyInput(data) {
	if (!isRecord(data)) throw new Error("Invalid verification request.");
	const memberNo = data.memberNo;
	if (typeof memberNo !== "string") throw new Error("Member number is required.");
	return { memberNo: normalizeMemberNo(memberNo) };
}
var verifyMemberAction = createServerFn({ method: "POST" }).inputValidator(validateVerifyInput).handler(createSsrRpc("5bdb4a4076f0defed2a1e88344e55207d7bdcac9475a1858defb13d52d58d14c"));
var verifyPageText = {
	en: {
		loading: "Verifying membership...",
		title: "Membership Verification",
		description: "Public QR verification page for MBJP digital membership cards. Always confirm that the status below is approved and verified.",
		refresh: "Refresh Status",
		copyLink: "Copy Link",
		searchedMemberNo: "Searched Member No",
		recordStatus: "Record Status",
		verificationResult: "Verification Result",
		verified: "Verified",
		notFound: "Not found",
		approvedMember: "Approved member",
		noRecord: "No record",
		notApproved: "Not approved",
		notFoundTitle: "Member Not Found",
		notFoundMessage: "No MBJP member record was found for this membership number. Please check the number printed on the card or scan the QR code again.",
		verifiedTitle: "Verified Member",
		verifiedMessage: "This membership is active and verified by Marwardi Bhatti Jamaat Pakistan.",
		verifiedName: "Verified Name",
		memberNo: "Member No",
		status: "Status",
		district: "District",
		taluka: "Taluka",
		approvedAt: "Approved At",
		verifiedBy: "Verified By",
		approvedVerified: "Approved / Verified",
		notProvided: "Not provided",
		copyMemberNo: "Copy Member No",
		goHome: "Go to MBJP Home",
		notVerifiedTitle: "Not a Verified Member",
		notVerifiedMessage: "This record exists, but the membership is not currently approved. Do not accept this card as active membership proof.",
		currentStatus: "Current Status",
		failedTitle: "Verification Failed",
		failedMessage: "The membership record could not be verified at this time.",
		guidanceTitle: "Verification guidance",
		guidanceMessage: "A valid MBJP card must show an approved status on this page. If the page says not found, pending, or rejected, the card should not be treated as verified.",
		jasHome: "MBJP Home",
		successCopyLink: "Verification link copied.",
		successCopyMemberNo: "Member number copied.",
		errorCopyLink: "Could not copy verification link.",
		errorCopyMemberNo: "Could not copy member number.",
		errorLoad: "Failed to verify membership.",
		statusApproved: "Approved",
		statusPending: "Pending",
		statusRejected: "Rejected",
		statusUnknown: "Unknown",
		notAvailable: "N/A"
	},
	ur: {
		loading: "ممبرشپ تصدیق ہو رہی ہے...",
		title: "ممبرشپ تصدیق",
		description: "MBJP ڈیجیٹل ممبرشپ کارڈز کے لیے عوامی QR تصدیقی صفحہ۔ ہمیشہ نیچے منظور شدہ اور تصدیق شدہ اسٹیٹس چیک کریں۔",
		refresh: "اسٹیٹس تازہ کریں",
		copyLink: "لنک کاپی کریں",
		searchedMemberNo: "تلاش کیا گیا ممبر نمبر",
		recordStatus: "ریکارڈ اسٹیٹس",
		verificationResult: "تصدیقی نتیجہ",
		verified: "تصدیق شدہ",
		notFound: "نہیں ملا",
		approvedMember: "منظور شدہ ممبر",
		noRecord: "کوئی ریکارڈ نہیں",
		notApproved: "منظور نہیں",
		notFoundTitle: "ممبر نہیں ملا",
		notFoundMessage: "اس ممبرشپ نمبر کے لیے کوئی MBJP ممبر ریکارڈ نہیں ملا۔ کارڈ پر موجود نمبر چیک کریں یا QR کوڈ دوبارہ اسکین کریں۔",
		verifiedTitle: "تصدیق شدہ ممبر",
		verifiedMessage: "یہ ممبرشپ فعال ہے اور مارواڑی بھٹی جماعت پاکستان کی طرف سے تصدیق شدہ ہے۔",
		verifiedName: "تصدیق شدہ نام",
		memberNo: "ممبر نمبر",
		status: "اسٹیٹس",
		district: "ضلع",
		taluka: "تعلقہ",
		approvedAt: "منظوری کی تاریخ",
		verifiedBy: "تصدیق کنندہ",
		approvedVerified: "منظور شدہ / تصدیق شدہ",
		notProvided: "فراہم نہیں کیا گیا",
		copyMemberNo: "ممبر نمبر کاپی کریں",
		goHome: "MBJP ہوم پر جائیں",
		notVerifiedTitle: "تصدیق شدہ ممبر نہیں",
		notVerifiedMessage: "یہ ریکارڈ موجود ہے، لیکن ممبرشپ فی الحال منظور شدہ نہیں۔ اس کارڈ کو فعال ممبرشپ ثبوت نہ سمجھیں۔",
		currentStatus: "موجودہ اسٹیٹس",
		failedTitle: "تصدیق ناکام",
		failedMessage: "اس وقت ممبرشپ ریکارڈ کی تصدیق نہیں ہو سکی۔",
		guidanceTitle: "تصدیقی رہنمائی",
		guidanceMessage: "درست MBJP کارڈ پر اس صفحہ میں منظور شدہ اسٹیٹس لازمی نظر آنا چاہیے۔ اگر صفحہ not found، pending یا rejected دکھائے تو کارڈ کو تصدیق شدہ نہ سمجھیں۔",
		jasHome: "MBJP ہوم",
		successCopyLink: "تصدیقی لنک کاپی ہو گیا۔",
		successCopyMemberNo: "ممبر نمبر کاپی ہو گیا۔",
		errorCopyLink: "تصدیقی لنک کاپی نہیں ہو سکا۔",
		errorCopyMemberNo: "ممبر نمبر کاپی نہیں ہو سکا۔",
		errorLoad: "ممبرشپ تصدیق نہیں ہو سکی۔",
		statusApproved: "منظور شدہ",
		statusPending: "زیرِ جائزہ",
		statusRejected: "رد شدہ",
		statusUnknown: "نامعلوم",
		notAvailable: "دستیاب نہیں"
	},
	sd: {
		loading: "ميمبرشپ تصديق ٿي رهي آهي...",
		title: "ميمبرشپ تصديق",
		description: "MBJP ڊجيٽل ميمبرشپ ڪارڊن لاءِ عوامي QR تصديقي صفحو. هميشه هيٺ منظور ٿيل ۽ تصديق ٿيل اسٽيٽس چيڪ ڪريو.",
		refresh: "اسٽيٽس تازو ڪريو",
		copyLink: "لنڪ ڪاپي ڪريو",
		searchedMemberNo: "تلاش ڪيل ميمبر نمبر",
		recordStatus: "ريڪارڊ اسٽيٽس",
		verificationResult: "تصديقي نتيجو",
		verified: "تصديق ٿيل",
		notFound: "نه مليو",
		approvedMember: "منظور ٿيل ميمبر",
		noRecord: "ڪو ريڪارڊ ناهي",
		notApproved: "منظور ناهي",
		notFoundTitle: "ميمبر نه مليو",
		notFoundMessage: "هن ميمبرشپ نمبر لاءِ ڪو MBJP ميمبر ريڪارڊ نه مليو. ڪارڊ تي ڇپيل نمبر چيڪ ڪريو يا QR ڪوڊ ٻيهر اسڪين ڪريو.",
		verifiedTitle: "تصديق ٿيل ميمبر",
		verifiedMessage: "هي ميمبرشپ فعال آهي ۽ مارواڙي ڀٽي جماعت پاڪستان طرفان تصديق ٿيل آهي.",
		verifiedName: "تصديق ٿيل نالو",
		memberNo: "ميمبر نمبر",
		status: "اسٽيٽس",
		district: "ضلعو",
		taluka: "تعلقو",
		approvedAt: "منظوري تاريخ",
		verifiedBy: "تصديق ڪندڙ",
		approvedVerified: "منظور ٿيل / تصديق ٿيل",
		notProvided: "فراهم ناهي ڪيو ويو",
		copyMemberNo: "ميمبر نمبر ڪاپي ڪريو",
		goHome: "MBJP هوم ڏانهن وڃو",
		notVerifiedTitle: "تصديق ٿيل ميمبر ناهي",
		notVerifiedMessage: "هي ريڪارڊ موجود آهي، پر ميمبرشپ هن وقت منظور ٿيل ناهي. هن ڪارڊ کي فعال ميمبرشپ ثبوت طور قبول نه ڪريو.",
		currentStatus: "موجوده اسٽيٽس",
		failedTitle: "تصديق ناڪام",
		failedMessage: "هن وقت ميمبرشپ ريڪارڊ جي تصديق نه ٿي سگهي.",
		guidanceTitle: "تصديقي رهنمائي",
		guidanceMessage: "صحيح MBJP ڪارڊ تي هن صفحي ۾ منظور ٿيل اسٽيٽس لازمي ظاهر ٿيڻ گهرجي. جيڪڏهن صفحو not found، pending يا rejected ڏيکاري ته ڪارڊ کي تصديق ٿيل نه سمجھو.",
		jasHome: "MBJP هوم",
		successCopyLink: "تصديقي لنڪ ڪاپي ٿي وئي.",
		successCopyMemberNo: "ميمبر نمبر ڪاپي ٿي ويو.",
		errorCopyLink: "تصديقي لنڪ ڪاپي نه ٿي سگهي.",
		errorCopyMemberNo: "ميمبر نمبر ڪاپي نه ٿي سگهيو.",
		errorLoad: "ميمبرشپ تصديق نه ٿي سگهي.",
		statusApproved: "منظور ٿيل",
		statusPending: "زيرِ جائزو",
		statusRejected: "رد ٿيل",
		statusUnknown: "نامعلوم",
		notAvailable: "دستياب ناهي"
	}
};
function VerifyMemberPage() {
	const { memberNo } = Route.useParams();
	const { language } = useI18n();
	const text = verifyPageText[language] ?? verifyPageText.en;
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const loadVerification = (0, import_react.useCallback)(async (cancelledRef, options) => {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setError("");
		setSuccess("");
		try {
			const data = await verifyMemberAction({ data: { memberNo } });
			if (!cancelledRef?.current) setResult(data);
		} catch (err) {
			if (!cancelledRef?.current) {
				setResult(null);
				setError(err instanceof Error ? err.message : text.errorLoad);
			}
		} finally {
			if (!cancelledRef?.current) {
				setLoading(false);
				setRefreshing(false);
			}
		}
	}, [memberNo, text.errorLoad]);
	(0, import_react.useEffect)(() => {
		const cancelledRef = { current: false };
		loadVerification(cancelledRef);
		return () => {
			cancelledRef.current = true;
		};
	}, [loadVerification]);
	async function copyVerificationLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setSuccess(text.successCopyLink);
			setError("");
		} catch {
			setError(text.errorCopyLink);
		}
	}
	async function copyMemberNo() {
		try {
			await navigator.clipboard.writeText(memberNo);
			setSuccess(text.successCopyMemberNo);
			setError("");
		} catch {
			setError(text.errorCopyMemberNo);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm font-bold text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), text.loading]
			})
		})
	});
	const verified = Boolean(result?.verified && result.member);
	const notFound = !result?.found;
	const notVerified = Boolean(result?.found && !result.verified);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap space-y-5 sm:space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 text-center sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-[0.26em] text-emerald-700",
								children: "Marwardi Bhatti Jamaat Pakistan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl",
								children: text.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600",
								children: text.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col justify-center gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadVerification(void 0, { silent: true }),
									disabled: refreshing,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), text.refresh]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: copyVerificationLink,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), text.copyLink]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-4 sm:grid-cols-3 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.searchedMemberNo,
								value: memberNo,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.recordStatus,
								value: verified ? text.verified : notFound ? text.notFound : getStatusLabel(result?.member?.status, text),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.verificationResult,
								value: verified ? text.approvedMember : notFound ? text.noRecord : text.notApproved,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" })
							})
						]
					})]
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
				notFound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationState, {
					tone: "danger",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-10 w-10" }),
					title: text.notFoundTitle,
					message: text.notFoundMessage,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-5 max-w-md rounded-2xl bg-slate-50 p-4 text-left ring-1 ring-slate-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: text.searchedMemberNo,
							value: memberNo
						})
					})
				}) : verified && result?.member ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-950 p-6 text-center text-white sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-11 w-11" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl font-black sm:text-4xl",
								children: text.verifiedTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-xl text-sm leading-6 text-emerald-50",
								children: text.verifiedMessage
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-6 text-center",
							children: [
								result.photoSignedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: result.photoSignedUrl,
									alt: `${result.member.full_name} profile photo`,
									className: "h-36 w-36 rounded-3xl object-cover object-top shadow-sm ring-1 ring-slate-200"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-36 w-36 items-center justify-center rounded-3xl bg-slate-100 text-slate-400 ring-1 ring-slate-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-12 w-12" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
									children: text.verifiedName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-black text-slate-950 sm:text-3xl",
									children: result.member.full_name
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid w-full max-w-3xl gap-4 rounded-3xl bg-slate-50 p-5 text-left ring-1 ring-slate-100 md:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.memberNo,
											value: result.member.member_no ?? text.notAvailable
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.status,
											value: text.approvedVerified
										}),
										getVerifiedDesignations(result).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-white p-4 ring-1 ring-slate-100 md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold uppercase tracking-wide text-slate-500",
												children: "Designations"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 grid gap-3 sm:grid-cols-2",
												children: getVerifiedDesignations(result).map((designation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "break-words text-sm font-black text-slate-950",
															children: designation.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 break-words text-xs font-bold text-slate-600",
															children: [designation.level, designation.location].filter(Boolean).join(" · ")
														}),
														designation.validity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-xs font-black text-emerald-700",
															children: designation.validity
														}) : null
													]
												}, `${designation.title}-${designation.committeeName ?? designation.level ?? ""}`))
											})]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.district,
											value: result.member.district
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.taluka,
											value: result.member.taluka || text.notProvided
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.approvedAt,
											value: formatDate(result.member.approved_at)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: text.verifiedBy,
											value: "Marwardi Bhatti Jamaat Pakistan"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid w-full max-w-3xl gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: copyMemberNo,
										className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), text.copyMemberNo]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
										style: { color: "#ffffff" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), text.goHome]
									})]
								})
							]
						})
					})]
				}) : notVerified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationState, {
					tone: "warning",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-10 w-10" }),
					title: text.notVerifiedTitle,
					message: text.notVerifiedMessage,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-5 max-w-md rounded-2xl bg-slate-50 p-4 text-left ring-1 ring-slate-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: text.memberNo,
							value: memberNo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: text.currentStatus,
							value: getStatusLabel(result?.member?.status, text)
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerificationState, {
					tone: "danger",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-10 w-10" }),
					title: text.failedTitle,
					message: text.failedMessage
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-[48px_1fr_auto] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-black text-slate-950",
								children: text.guidanceTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-slate-500",
								children: text.guidanceMessage
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 no-underline shadow-sm transition hover:bg-slate-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), text.jasHome]
							})
						]
					})
				})
			]
		})
	});
}
function VerificationState({ tone, icon, title, message, children }) {
	const config = {
		danger: {
			wrapper: "from-red-50 via-white to-red-50",
			icon: "bg-red-50 text-red-700 ring-red-100",
			title: "text-red-900"
		},
		warning: {
			wrapper: "from-amber-50 via-white to-amber-50",
			icon: "bg-amber-50 text-amber-700 ring-amber-100",
			title: "text-amber-900"
		}
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-3xl bg-gradient-to-br ${config.wrapper} p-6 text-center shadow-sm ring-1 ring-slate-200/70 sm:p-8`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-1 ${config.icon}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-5 text-xl font-black sm:text-3xl ${config.title}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600",
				children: message
			}),
			children
		]
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
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 break-words text-sm font-black text-slate-950",
			children: value || "N/A"
		})]
	});
}
function getVerifiedDesignations(result) {
	if (!result) return [];
	const designations = [...result.activeDesignations ?? [], ...result.activeDesignation ? [result.activeDesignation] : []];
	const seen = /* @__PURE__ */ new Set();
	const unique = [];
	for (const designation of designations) {
		const title = designation.title?.trim();
		if (!title) continue;
		const key = [
			title,
			designation.committeeName,
			designation.level,
			designation.location
		].filter(Boolean).join("|").toLowerCase();
		if (seen.has(key)) continue;
		seen.add(key);
		unique.push({
			...designation,
			title
		});
	}
	return unique;
}
function formatDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function getStatusLabel(status, text) {
	switch (status) {
		case "approved": return text.statusApproved;
		case "pending": return text.statusPending;
		case "rejected": return text.statusRejected;
		default: return text.statusUnknown;
	}
}
//#endregion
export { VerifyMemberPage as component };
