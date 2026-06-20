import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as LockKeyhole, J as Hospital, Ot as ArrowRight, Y as HeartPulse, _ as ShieldCheck, et as FileHeart, f as TriangleAlert, ht as CircleCheck, m as Stethoscope } from "../_libs/lucide-react.mjs";
import { t as useLocalizedProgramCopy } from "./program-page-i18n-CE-YD7oi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-DvCuL3EI.js
var import_jsx_runtime = require_jsx_runtime();
var copy = {
	en: {
		badge: "MBJP Health & Medical Support",
		title: "Medical help requests with restricted health-admin review",
		description: "Apply for treatment, prescription, hospital estimate, lab report, medicine or emergency support through a membership-verified and privacy-first medical assistance workflow.",
		applyCta: "Apply for Medical Help",
		myApplicationsCta: "My Health Applications",
		featuresEyebrow: "Health Support Features",
		featuresTitle: "Designed for sensitive medical cases",
		featuresDescription: "This module keeps medical case details restricted. Applicants can track status, while full details are limited to authorized health committee/admin users.",
		features: [
			{
				title: "Medical Help Application",
				description: "Members can request medical support for treatment, medicines, hospital admission, surgery, lab tests or emergency cases.",
				icon: HeartPulse
			},
			{
				title: "Private Medical Documents",
				description: "CNIC, reports, prescription, hospital estimate and lab reports are uploaded to a private restricted bucket.",
				icon: FileHeart
			},
			{
				title: "Health Committee Review",
				description: "Only authorized health admins or committee reviewers can open full case details and verify documents.",
				icon: ShieldCheck
			}
		],
		privacyTitle: "Privacy Rule",
		privacyDescription: "Medical data is sensitive. Full patient details, disease summary and medical documents must only be visible to the applicant and authorized health committee/admin users.",
		privacyNote: "Public verification pages must never display medical case data.",
		requiredTitle: "Required Documents",
		requiredDocuments: [
			"Patient CNIC / B-form",
			"Member CNIC",
			"Medical reports",
			"Doctor prescription",
			"Hospital estimate or bill",
			"Lab reports if available"
		],
		requiredNote: "Upload clear PDF, JPG, PNG or WEBP files up to 8MB. Emergency cases should be marked during application submission.",
		infoCards: [
			{
				title: "Treatment Details",
				text: "Disease, treatment type, doctor, hospital and estimated cost are recorded for committee review.",
				icon: Stethoscope
			},
			{
				title: "Emergency Flag",
				text: "Urgent cases can be highlighted in the admin panel for faster medical committee review.",
				icon: Hospital
			},
			{
				title: "Restricted Access",
				text: "Only admin, super admin, health admin or authorized health assignment users can review full cases.",
				icon: TriangleAlert
			}
		]
	},
	ur: {
		badge: "جے اے ایس صحت اور طبی مدد",
		title: "محدود ہیلتھ ایڈمن جائزے کے ساتھ طبی مدد کی درخواستیں",
		description: "ممبرشپ سے تصدیق شدہ اور پرائیویسی فرسٹ ورک فلو کے ذریعے علاج، نسخہ، ہسپتال تخمینہ، لیب رپورٹ، ادویات یا ایمرجنسی مدد کے لیے درخواست دیں۔",
		applyCta: "طبی مدد کے لیے درخواست دیں",
		myApplicationsCta: "میری صحت درخواستیں",
		featuresEyebrow: "صحت سپورٹ فیچرز",
		featuresTitle: "حساس طبی کیسز کے لیے ڈیزائن کیا گیا",
		featuresDescription: "یہ ماڈیول طبی کیس کی تفصیلات کو محدود رکھتا ہے۔ درخواست گزار اسٹیٹس دیکھ سکتے ہیں، جبکہ مکمل تفصیل صرف مجاز ہیلتھ کمیٹی/ایڈمن صارفین کے لیے ہے۔",
		features: [
			{
				title: "طبی مدد کی درخواست",
				description: "ممبران علاج، ادویات، ہسپتال داخلہ، سرجری، لیب ٹیسٹ یا ایمرجنسی کیسز کے لیے مدد طلب کر سکتے ہیں۔",
				icon: HeartPulse
			},
			{
				title: "پرائیویٹ میڈیکل دستاویزات",
				description: "CNIC، رپورٹس، نسخہ، ہسپتال تخمینہ اور لیب رپورٹس پرائیویٹ محدود بکٹ میں اپلوڈ ہوتی ہیں۔",
				icon: FileHeart
			},
			{
				title: "ہیلتھ کمیٹی جائزہ",
				description: "صرف مجاز ہیلتھ ایڈمن یا کمیٹی ریویورز مکمل کیس تفصیلات کھول کر دستاویزات کی تصدیق کر سکتے ہیں۔",
				icon: ShieldCheck
			}
		],
		privacyTitle: "پرائیویسی اصول",
		privacyDescription: "طبی ڈیٹا حساس ہے۔ مریض کی مکمل تفصیل، بیماری کا خلاصہ اور میڈیکل دستاویزات صرف درخواست گزار اور مجاز ہیلتھ کمیٹی/ایڈمن صارفین کو نظر آنی چاہئیں۔",
		privacyNote: "پبلک ویریفکیشن صفحات پر کبھی بھی میڈیکل کیس ڈیٹا ظاہر نہیں ہونا چاہیے۔",
		requiredTitle: "ضروری دستاویزات",
		requiredDocuments: [
			"مریض کا CNIC / ب فارم",
			"ممبر کا CNIC",
			"میڈیکل رپورٹس",
			"ڈاکٹر کا نسخہ",
			"ہسپتال تخمینہ یا بل",
			"اگر موجود ہوں تو لیب رپورٹس"
		],
		requiredNote: "واضح PDF، JPG، PNG یا WEBP فائلیں 8MB تک اپلوڈ کریں۔ ایمرجنسی کیسز کو درخواست جمع کراتے وقت مارک کریں۔",
		infoCards: [
			{
				title: "علاج کی تفصیلات",
				text: "بیماری، علاج کی قسم، ڈاکٹر، ہسپتال اور اندازاً لاگت کمیٹی جائزے کے لیے ریکارڈ ہوگی۔",
				icon: Stethoscope
			},
			{
				title: "ایمرجنسی فلیگ",
				text: "فوری کیسز کو ایڈمن پینل میں نمایاں کیا جا سکتا ہے تاکہ ہیلتھ کمیٹی جلد جائزہ لے۔",
				icon: Hospital
			},
			{
				title: "محدود رسائی",
				text: "صرف ایڈمن، سپر ایڈمن، ہیلتھ ایڈمن یا مجاز ہیلتھ اسائنمنٹ صارفین مکمل کیسز دیکھ سکتے ہیں۔",
				icon: TriangleAlert
			}
		]
	},
	sd: {
		badge: "MBJP صحت ۽ طبي مدد",
		title: "محدود هيلٿ ايڊمن جائزي سان طبي مدد جون درخواستون",
		description: "ميمبرشپ تصديق ٿيل ۽ پرائيويسي فرسٽ ورڪ فلو ذريعي علاج، نسخو، اسپتال تخمينو، ليب رپورٽ، دوائون يا ايمرجنسي مدد لاءِ درخواست ڏيو.",
		applyCta: "طبي مدد لاءِ درخواست ڏيو",
		myApplicationsCta: "منهنجون صحت درخواستون",
		featuresEyebrow: "صحت سپورٽ فيچرز",
		featuresTitle: "حساس طبي ڪيسن لاءِ ٺهيل",
		featuresDescription: "هي ماڊيول طبي ڪيس جي تفصيل کي محدود رکي ٿو. درخواست ڏيندڙ اسٽيٽس ڏسي سگهن ٿا، جڏهن ته مڪمل تفصيل صرف مجاز هيلٿ ڪميٽي/ايڊمن صارفين لاءِ آهي.",
		features: [
			{
				title: "طبي مدد جي درخواست",
				description: "ميمبر علاج، دوائن، اسپتال داخلا، سرجري، ليب ٽيسٽ يا ايمرجنسي ڪيسن لاءِ مدد طلب ڪري سگهن ٿا.",
				icon: HeartPulse
			},
			{
				title: "پرائيويٽ ميڊيڪل دستاويز",
				description: "CNIC، رپورٽون، نسخو، اسپتال تخمينو ۽ ليب رپورٽون پرائيويٽ محدود بڪٽ ۾ اپلوڊ ٿين ٿيون.",
				icon: FileHeart
			},
			{
				title: "هيلٿ ڪميٽي جائزو",
				description: "صرف مجاز هيلٿ ايڊمن يا ڪميٽي ريويوئرز مڪمل ڪيس تفصيل کولڻ ۽ دستاويزن جي تصديق ڪرڻ جا مجاز آهن.",
				icon: ShieldCheck
			}
		],
		privacyTitle: "پرائيويسي اصول",
		privacyDescription: "طبي ڊيٽا حساس آهي. مريض جي مڪمل تفصيل، بيماري جو خلاصو ۽ ميڊيڪل دستاويز صرف درخواست ڏيندڙ ۽ مجاز هيلٿ ڪميٽي/ايڊمن کي نظر اچڻ گهرجن.",
		privacyNote: "پبلڪ ويريفڪيشن صفحن تي ڪڏهن به ميڊيڪل ڪيس ڊيٽا ظاهر نه ٿيڻ گهرجي.",
		requiredTitle: "ضروري دستاويز",
		requiredDocuments: [
			"مريض جو CNIC / ب فارم",
			"ميمبر جو CNIC",
			"ميڊيڪل رپورٽون",
			"ڊاڪٽر جو نسخو",
			"اسپتال تخمينو يا بل",
			"جيڪڏهن موجود هجن ته ليب رپورٽون"
		],
		requiredNote: "صاف PDF، JPG، PNG يا WEBP فائلون 8MB تائين اپلوڊ ڪريو. ايمرجنسي ڪيسن کي درخواست جمع ڪرائڻ وقت مارڪ ڪيو.",
		infoCards: [
			{
				title: "علاج جا تفصيل",
				text: "بيماري، علاج جي قسم، ڊاڪٽر، اسپتال ۽ اندازي لاڳت ڪميٽي جائزي لاءِ رڪارڊ ٿيندي.",
				icon: Stethoscope
			},
			{
				title: "ايمرجنسي فليگ",
				text: "تڪڙا ڪيس ايڊمن پينل ۾ نمايان ڪري سگهجن ٿا ته جيئن هيلٿ ڪميٽي جلدي جائزو وٺي.",
				icon: Hospital
			},
			{
				title: "محدود رسائي",
				text: "صرف ايڊمن، سپر ايڊمن، هيلٿ ايڊمن يا مجاز هيلٿ اسائنمينٽ صارفين مڪمل ڪيس ڏسي سگهن ٿا.",
				icon: TriangleAlert
			}
		]
	}
};
function HealthRoute() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") === "/programs/health") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthProgramPage, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function HealthProgramPage() {
	const { copy: t, textDir, textAlignClass, arrowClass } = useLocalizedProgramCopy(copy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		dir: "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 opacity-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-500 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `max-w-4xl space-y-6 ${textAlignClass}`,
						dir: textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-red-300" }), t.badge]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-black leading-tight md:text-6xl",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-3xl text-lg leading-8 text-white/75",
								children: t.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col gap-3 pt-2 sm:flex-row ${textDir === "rtl" ? "sm:justify-end" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs/health/apply",
									className: "inline-flex items-center justify-center rounded-xl bg-red-400 px-6 py-3 font-black text-slate-950 no-underline transition hover:bg-red-300",
									children: [t.applyCta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/programs/health/my-applications",
									className: "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white no-underline transition hover:bg-white/20",
									children: t.myApplicationsCta
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl space-y-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `max-w-3xl space-y-3 ${textAlignClass}`,
						dir: textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-black uppercase tracking-[0.25em] text-red-600",
								children: t.featuresEyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-black text-slate-950 md:text-5xl",
								children: t.featuresTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-8 text-slate-600",
								children: t.featuresDescription
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: t.features.map((feature) => {
							const Icon = feature.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${textAlignClass}`,
								dir: textDir,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700 ${textDir === "rtl" ? "mr-auto" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-black text-slate-950",
										children: feature.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-7 text-slate-600",
										children: feature.description
									})
								]
							}, feature.title);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-slate-200 bg-white px-4 py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-3xl bg-slate-950 p-8 text-white ${textAlignClass}`,
						dir: textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "mb-5 h-10 w-10 text-red-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-black",
								children: t.privacyTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-8 text-white/75",
								children: t.privacyDescription
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 rounded-2xl border border-red-300/20 bg-red-400/10 p-4 text-sm font-semibold text-white/85",
								children: t.privacyNote
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-3xl border border-slate-200 bg-slate-50 p-8 ${textAlignClass}`,
						dir: textDir,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-black text-slate-950",
								children: t.requiredTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3",
								children: t.requiredDocuments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-700 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 flex-shrink-0 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: item
									})]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-7 text-slate-500",
								children: t.requiredNote
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-6 md:grid-cols-3",
					children: t.infoCards.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" }),
							title: item.title,
							text: item.text,
							textDir,
							textAlignClass
						}, item.title);
					})
				})
			})
		]
	});
}
function InfoCard({ icon, title, text, textDir, textAlignClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${textAlignClass}`,
		dir: textDir,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700 ${textDir === "rtl" ? "mr-auto" : ""}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-black text-slate-950",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-7 text-slate-600",
				children: text
			})
		]
	});
}
//#endregion
export { HealthRoute as component };
