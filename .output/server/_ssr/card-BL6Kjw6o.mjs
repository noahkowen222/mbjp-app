import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { C as RefreshCw, Et as BadgeCheck, I as LoaderCircle, W as ImageOff, _ as ShieldCheck, at as ExternalLink, ct as CreditCard, gt as CircleAlert, ht as CircleCheck, kt as ArrowLeft, lt as Copy, ot as Download, w as QrCode } from "../_libs/lucide-react.mjs";
import { a as generateQrDataUrl, i as fetchActiveMemberCardDesignations, n as MembershipCard, r as exportElementAsPng, t as CARD_WIDTH } from "./qrcode-kfSthBZ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-BL6Kjw6o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MBJP_LOGO_PATH = "/mbjp/logo.png";
var MBJP_FLAG_PATH = "/mbjp/logo.png";
var MEMBER_PHOTO_BUCKET = "member-photos";
var SIGNED_URL_TTL_SECONDS = 3600;
var PUBLIC_VERIFY_ORIGIN = String("https://mbjp.org.pk").replace(/\/+$/, "");
var cardPageText = {
	en: {
		loading: "Loading digital card...",
		backDashboard: "Back to Dashboard",
		eyebrow: "Digital Member ID",
		title: "Digital Membership Card",
		description: "Preview, verify and download your official Marwardi Bhatti Jamaat Pakistan digital membership card.",
		refresh: "Refresh",
		summaryMember: "Member",
		summaryStatus: "Status",
		summaryMemberNo: "Member No",
		summaryCardState: "Card State",
		notIssued: "Not issued",
		ready: "Ready",
		notAvailable: "Not available",
		formNotFoundTitle: "Membership form not found",
		formNotFoundMessage: "Please complete your membership registration form first. Your card will be available after admin approval.",
		completeRegistration: "Complete Registration",
		swipeHint: "Card preview auto-fits your screen.",
		cardReadyTitle: "Your card is ready",
		cardReadyMessage: "Your membership is approved. The QR code opens your public verification page.",
		verificationLink: "Verification Link",
		copyLink: "Copy Link",
		openVerification: "Open Verification",
		downloadCard: "Download Card",
		downloadGuidance: "Use front/back PNG downloads for printing or sharing. The official card design remains unchanged.",
		downloadFront: "Download Front PNG",
		downloadBack: "Download Back PNG",
		downloadBoth: "Download Both Sides",
		downloading: "Downloading...",
		downloadingBoth: "Downloading both...",
		sideFront: "Front",
		sideBack: "Back",
		statusApproved: "Approved",
		statusRejected: "Rejected",
		statusPending: "Pending",
		updateResubmit: "Update & Resubmit",
		successFront: "Front side downloaded successfully.",
		successBack: "Back side downloaded successfully.",
		successBoth: "Front and back sides downloaded successfully.",
		successCopyLink: "Verification link copied.",
		errorCopyLink: "Could not copy verification link.",
		errorLoad: "Failed to load digital membership card.",
		errorMemberNoUnavailable: "Member number is not available.",
		errorPrepareDownload: "Unable to prepare {side} side for download.",
		errorDownloadSide: "Failed to download {side} side. Please try again.",
		errorDownloadBoth: "Failed to download both card sides. Please try again.",
		rejectedTitle: "Application needs correction",
		rejectedMessage: "Your application was rejected. Please update your membership form and resubmit it for admin review.",
		noNumberTitle: "Member number not issued yet",
		noNumberMessage: "Your application is approved, but the member number is not available yet. The card will appear after number issuance.",
		pendingTitle: "Digital card is not available yet",
		pendingMessage: "Your membership application is still under admin review. Your digital card will be available after approval."
	},
	ur: {
		loading: "ڈیجیٹل کارڈ لوڈ ہو رہا ہے...",
		backDashboard: "ڈیش بورڈ پر واپس",
		eyebrow: "ڈیجیٹل ممبر آئی ڈی",
		title: "ڈیجیٹل ممبرشپ کارڈ",
		description: "اپنا سرکاری مارواڑی بھٹی جماعت پاکستان ڈیجیٹل ممبرشپ کارڈ دیکھیں، تصدیق کریں اور ڈاؤن لوڈ کریں۔",
		refresh: "تازہ کریں",
		summaryMember: "ممبر",
		summaryStatus: "اسٹیٹس",
		summaryMemberNo: "ممبر نمبر",
		summaryCardState: "کارڈ حالت",
		notIssued: "جاری نہیں ہوا",
		ready: "تیار",
		notAvailable: "دستیاب نہیں",
		formNotFoundTitle: "ممبرشپ فارم نہیں ملا",
		formNotFoundMessage: "براہِ کرم پہلے ممبرشپ رجسٹریشن فارم مکمل کریں۔ ایڈمن منظوری کے بعد کارڈ دستیاب ہوگا۔",
		completeRegistration: "رجسٹریشن مکمل کریں",
		swipeHint: "کارڈ پری ویو خود بخود آپ کی اسکرین میں فٹ ہو جاتا ہے۔",
		cardReadyTitle: "آپ کا کارڈ تیار ہے",
		cardReadyMessage: "آپ کی ممبرشپ منظور ہو چکی ہے۔ QR کوڈ آپ کا عوامی تصدیقی صفحہ کھولتا ہے۔",
		verificationLink: "تصدیقی لنک",
		copyLink: "لنک کاپی کریں",
		openVerification: "تصدیق کھولیں",
		downloadCard: "کارڈ ڈاؤن لوڈ کریں",
		downloadGuidance: "پرنٹنگ یا شیئرنگ کے لیے فرنٹ/بیک PNG ڈاؤن لوڈ استعمال کریں۔ سرکاری کارڈ ڈیزائن تبدیل نہیں کیا گیا۔",
		downloadFront: "فرنٹ PNG ڈاؤن لوڈ کریں",
		downloadBack: "بیک PNG ڈاؤن لوڈ کریں",
		downloadBoth: "دونوں سائیڈز ڈاؤن لوڈ کریں",
		downloading: "ڈاؤن لوڈ ہو رہا ہے...",
		downloadingBoth: "دونوں ڈاؤن لوڈ ہو رہے ہیں...",
		sideFront: "فرنٹ",
		sideBack: "بیک",
		statusApproved: "منظور شدہ",
		statusRejected: "رد شدہ",
		statusPending: "زیرِ جائزہ",
		updateResubmit: "اپڈیٹ کر کے دوبارہ جمع کریں",
		successFront: "فرنٹ سائیڈ کامیابی سے ڈاؤن لوڈ ہو گئی۔",
		successBack: "بیک سائیڈ کامیابی سے ڈاؤن لوڈ ہو گئی۔",
		successBoth: "فرنٹ اور بیک دونوں سائیڈز کامیابی سے ڈاؤن لوڈ ہو گئیں۔",
		successCopyLink: "تصدیقی لنک کاپی ہو گیا۔",
		errorCopyLink: "تصدیقی لنک کاپی نہیں ہو سکا۔",
		errorLoad: "ڈیجیٹل ممبرشپ کارڈ لوڈ نہیں ہو سکا۔",
		errorMemberNoUnavailable: "ممبر نمبر دستیاب نہیں۔",
		errorPrepareDownload: "{side} سائیڈ ڈاؤن لوڈ کے لیے تیار نہیں ہو سکی۔",
		errorDownloadSide: "{side} سائیڈ ڈاؤن لوڈ نہیں ہو سکی۔ دوبارہ کوشش کریں۔",
		errorDownloadBoth: "دونوں کارڈ سائیڈز ڈاؤن لوڈ نہیں ہو سکیں۔ دوبارہ کوشش کریں۔",
		rejectedTitle: "درخواست میں درستگی ضروری ہے",
		rejectedMessage: "آپ کی درخواست رد ہو چکی ہے۔ فارم اپڈیٹ کر کے دوبارہ ایڈمن جائزے کے لیے جمع کرائیں۔",
		noNumberTitle: "ممبر نمبر ابھی جاری نہیں ہوا",
		noNumberMessage: "آپ کی درخواست منظور ہے، لیکن ممبر نمبر ابھی دستیاب نہیں۔ نمبر جاری ہونے کے بعد کارڈ ظاہر ہوگا۔",
		pendingTitle: "ڈیجیٹل کارڈ ابھی دستیاب نہیں",
		pendingMessage: "آپ کی ممبرشپ درخواست ابھی ایڈمن جائزے میں ہے۔ منظوری کے بعد ڈیجیٹل کارڈ دستیاب ہوگا۔"
	},
	sd: {
		loading: "ڊجيٽل ڪارڊ لوڊ ٿي رهيو آهي...",
		backDashboard: "ڊيش بورڊ ڏانهن واپس",
		eyebrow: "ڊجيٽل ميمبر آءِ ڊي",
		title: "ڊجيٽل ميمبرشپ ڪارڊ",
		description: "پنهنجو سرڪاري مارواڙي ڀٽي جماعت پاڪستان ڊجيٽل ميمبرشپ ڪارڊ ڏسو، تصديق ڪريو ۽ ڊائون لوڊ ڪريو.",
		refresh: "تازو ڪريو",
		summaryMember: "ميمبر",
		summaryStatus: "اسٽيٽس",
		summaryMemberNo: "ميمبر نمبر",
		summaryCardState: "ڪارڊ حالت",
		notIssued: "جاري ناهي ٿيو",
		ready: "تيار",
		notAvailable: "دستياب ناهي",
		formNotFoundTitle: "ميمبرشپ فارم نه مليو",
		formNotFoundMessage: "مهرباني ڪري پهرين ميمبرشپ رجسٽريشن فارم مڪمل ڪريو. ايڊمن منظوري کان پوءِ ڪارڊ دستياب ٿيندو.",
		completeRegistration: "رجسٽريشن مڪمل ڪريو",
		swipeHint: "ڪارڊ پريويو پاڻمرادو توهان جي اسڪرين ۾ فٽ ٿي ويندو.",
		cardReadyTitle: "توهان جو ڪارڊ تيار آهي",
		cardReadyMessage: "توهان جي ميمبرشپ منظور ٿي چڪي آهي. QR ڪوڊ عوامي تصديقي صفحو کولي ٿو.",
		verificationLink: "تصديقي لنڪ",
		copyLink: "لنڪ ڪاپي ڪريو",
		openVerification: "تصديق کوليو",
		downloadCard: "ڪارڊ ڊائون لوڊ ڪريو",
		downloadGuidance: "پرنٽنگ يا شيئرنگ لاءِ فرنٽ/بئڪ PNG ڊائون لوڊ استعمال ڪريو. سرڪاري ڪارڊ ڊيزائن تبديل ناهي ڪيو ويو.",
		downloadFront: "فرنٽ PNG ڊائون لوڊ ڪريو",
		downloadBack: "بئڪ PNG ڊائون لوڊ ڪريو",
		downloadBoth: "ٻئي پاسا ڊائون لوڊ ڪريو",
		downloading: "ڊائون لوڊ ٿي رهيو آهي...",
		downloadingBoth: "ٻئي ڊائون لوڊ ٿي رهيا آهن...",
		sideFront: "فرنٽ",
		sideBack: "بئڪ",
		statusApproved: "منظور ٿيل",
		statusRejected: "رد ٿيل",
		statusPending: "زيرِ جائزو",
		updateResubmit: "اپڊيٽ ڪري ٻيهر جمع ڪريو",
		successFront: "فرنٽ پاسو ڪاميابي سان ڊائون لوڊ ٿيو.",
		successBack: "بئڪ پاسو ڪاميابي سان ڊائون لوڊ ٿيو.",
		successBoth: "فرنٽ ۽ بئڪ ٻئي پاسا ڪاميابي سان ڊائون لوڊ ٿيا.",
		successCopyLink: "تصديقي لنڪ ڪاپي ٿي وئي.",
		errorCopyLink: "تصديقي لنڪ ڪاپي نه ٿي سگهي.",
		errorLoad: "ڊجيٽل ميمبرشپ ڪارڊ لوڊ نه ٿي سگهيو.",
		errorMemberNoUnavailable: "ميمبر نمبر دستياب ناهي.",
		errorPrepareDownload: "{side} پاسو ڊائون لوڊ لاءِ تيار نه ٿي سگهيو.",
		errorDownloadSide: "{side} پاسو ڊائون لوڊ نه ٿي سگهيو. ٻيهر ڪوشش ڪريو.",
		errorDownloadBoth: "ٻئي ڪارڊ پاسا ڊائون لوڊ نه ٿي سگهيا. ٻيهر ڪوشش ڪريو.",
		rejectedTitle: "درخواست ۾ درستگي ضروري آهي",
		rejectedMessage: "توهان جي درخواست رد ٿي چڪي آهي. فارم اپڊيٽ ڪري ٻيهر ايڊمن جائزي لاءِ جمع ڪرايو.",
		noNumberTitle: "ميمبر نمبر اڃا جاري ناهي ٿيو",
		noNumberMessage: "توهان جي درخواست منظور آهي، پر ميمبر نمبر اڃا دستياب ناهي. نمبر جاري ٿيڻ کان پوءِ ڪارڊ ظاهر ٿيندو.",
		pendingTitle: "ڊجيٽل ڪارڊ اڃا دستياب ناهي",
		pendingMessage: "توهان جي ميمبرشپ درخواست اڃا ايڊمن جائزي هيٺ آهي. منظوري کان پوءِ ڊجيٽل ڪارڊ دستياب ٿيندو."
	}
};
function CardPage() {
	const navigate = useNavigate();
	const { language } = useI18n();
	const text = cardPageText[language] ?? cardPageText.en;
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
			const [logoDataUrl, flagDataUrl] = await Promise.all([imageUrlToDataUrl(MBJP_LOGO_PATH), imageUrlToDataUrl(MBJP_FLAG_PATH)]);
			setLogoUrl(logoDataUrl || MBJP_LOGO_PATH);
			setFlagUrl(flagDataUrl || MBJP_FLAG_PATH);
			const { data: { user }, error: userError } = await supabase.auth.getUser();
			if (userError || !user) {
				await navigate({ to: "/login" });
				return;
			}
			const data = await fetchCurrentMember(user.id);
			if (!data) {
				setMember(null);
				setError(text.formNotFoundMessage);
				return;
			}
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
			const publicVerifyUrl = buildPublicVerifyUrl(data.member_no);
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
				const { data: signed, error: signedError } = await supabase.storage.from(MEMBER_PHOTO_BUCKET).createSignedUrl(data.photo_url, SIGNED_URL_TTL_SECONDS);
				if (!signedError && signed?.signedUrl) setPhotoUrl(await imageUrlToDataUrl(signed.signedUrl) || signed.signedUrl);
				else setPhotoUrl(null);
			} else setPhotoUrl(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : text.errorLoad);
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [
		navigate,
		text.errorLoad,
		text.formNotFoundMessage
	]);
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
		if (!member?.member_no) throw new Error(text.errorMemberNoUnavailable);
		const targetRef = side === "front" ? frontExportRef : backExportRef;
		if (!targetRef.current) throw new Error(text.errorPrepareDownload.replace("{side}", getCardSideText(side, text)));
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
			setSuccess(side === "front" ? text.successFront : text.successBack);
		} catch (err) {
			setError(err instanceof Error ? err.message : text.errorDownloadSide.replace("{side}", getCardSideText(side, text)));
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
			setSuccess(text.successBoth);
		} catch (err) {
			setError(err instanceof Error ? err.message : text.errorDownloadBoth);
		} finally {
			setDownloadingTarget(null);
		}
	}
	async function copyVerifyUrl() {
		if (!verifyUrl) return;
		try {
			await navigator.clipboard.writeText(verifyUrl);
			setSuccess(text.successCopyLink);
			setError("");
		} catch {
			setError(text.errorCopyLink);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "card-page-shell px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm font-bold text-slate-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), text.loading]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "card-page-shell px-3 py-6 sm:px-4 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-page-wrap page-wrap space-y-5 sm:space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToDashboard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
										children: text.eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 break-words text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
										children: text.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
										children: text.description
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 sm:grid-cols-2 lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void loadCard({ silent: true }),
									disabled: refreshing || downloadingTarget !== null,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), text.refresh]
								}), cardReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSideToggle, {
									selectedSide,
									onSelect: setSelectedSide,
									text
								}) : null]
							})]
						})]
					}), member ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.summaryMember,
								value: member.full_name,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCardIcon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.summaryStatus,
								value: getStatusLabel(member.status, text),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.summaryMemberNo,
								value: member.member_no || text.notIssued,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItem, {
								label: text.summaryCardState,
								value: cardReady ? text.ready : text.notAvailable,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" })
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
					title: text.formNotFoundTitle,
					message: text.formNotFoundMessage,
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
						style: { color: "#ffffff" },
						children: text.completeRegistration
					})
				}) : cardReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card-preview-layout grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-visible-panel rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-center text-xs font-semibold text-slate-500 sm:hidden",
							children: text.swipeHint
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: visibleStageRef,
							className: "card-scroll-stage w-full overflow-hidden pb-2",
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
										children: text.cardReadyTitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-6 text-slate-500",
										children: text.cardReadyMessage
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wide text-slate-500",
										children: text.verificationLink
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 break-all rounded-2xl bg-slate-50 p-3 font-mono text-xs font-semibold text-slate-700 ring-1 ring-slate-100",
										children: formatVerifyUrlForDisplay(verifyUrl)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: copyVerifyUrl,
											className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), text.copyLink]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/verify/$memberNo",
											params: { memberNo: member.member_no ?? "" },
											className: "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-bold text-emerald-800 no-underline shadow-sm transition hover:bg-emerald-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), text.openVerification]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-download-panel rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wide text-slate-500",
										children: text.downloadCard
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-5 text-slate-500",
										children: text.downloadGuidance
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-download-actions mt-3 grid gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => void handleDownload("front"),
												disabled: downloadingTarget !== null,
												className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
												children: [downloadingTarget === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "front" ? text.downloading : text.downloadFront]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => void handleDownload("back"),
												disabled: downloadingTarget !== null,
												className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60",
												style: { color: "#ffffff" },
												children: [downloadingTarget === "back" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "back" ? text.downloading : text.downloadBack]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => void handleDownloadBoth(),
												disabled: downloadingTarget !== null,
												className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-2 text-sm font-black text-slate-950 shadow-sm transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60",
												children: [downloadingTarget === "both" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), downloadingTarget === "both" ? text.downloadingBoth : text.downloadBoth]
											})
										]
									})
								]
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
					title: getUnavailableTitle(member, text),
					message: getUnavailableMessage(member, text),
					action: member.status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 text-sm font-black text-slate-950 no-underline shadow-sm transition hover:bg-amber-300",
						children: text.updateResubmit
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white",
						style: { color: "#ffffff" },
						children: text.backDashboard
					})
				})
			]
		})
	});
}
function BackToDashboard() {
	const { language } = useI18n();
	const text = cardPageText[language] ?? cardPageText.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/dashboard",
		className: "inline-flex items-center gap-2 text-sm font-bold text-emerald-700 no-underline hover:text-emerald-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), text.backDashboard]
	});
}
function CardSideToggle({ selectedSide, onSelect, text }) {
	const labels = {
		front: text.sideFront,
		back: text.sideBack
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
async function fetchCurrentMember(userId) {
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
	].join(", ")).eq("user_id", userId).maybeSingle();
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
function getStatusLabel(status, text) {
	switch (status) {
		case "approved": return text.statusApproved;
		case "rejected": return text.statusRejected;
		default: return text.statusPending;
	}
}
function getUnavailableTitle(member, text) {
	if (member.status === "rejected") return text.rejectedTitle;
	if (member.status === "approved" && !member.member_no) return text.noNumberTitle;
	return text.pendingTitle;
}
function getUnavailableMessage(member, text) {
	if (member.status === "rejected") return text.rejectedMessage;
	if (member.status === "approved" && !member.member_no) return text.noNumberMessage;
	return text.pendingMessage;
}
function getCardSideText(side, text) {
	return side === "front" ? text.sideFront : text.sideBack;
}
function buildPublicVerifyUrl(memberNo) {
	return `${PUBLIC_VERIFY_ORIGIN}/verify/${encodeURIComponent(memberNo)}`;
}
function formatVerifyUrlForDisplay(value) {
	if (!value) return "";
	try {
		const url = new URL(value);
		return `${url.host}${url.pathname}`;
	} catch {
		return value.replace(/^https?:\/\//, "");
	}
}
function wait(ms) {
	return new Promise((resolve) => window.setTimeout(resolve, ms));
}
//#endregion
export { CardPage as component };
