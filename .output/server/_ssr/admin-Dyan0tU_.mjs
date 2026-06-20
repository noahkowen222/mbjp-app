import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { $ as FileText, A as Network, C as RefreshCw, Et as BadgeCheck, G as IdCard, L as ListChecks, M as MapPin, Ot as ArrowRight, Q as Funnel, Tt as BadgeIndianRupee, W as ImageOff, _ as ShieldCheck, it as EyeOff, k as Newspaper, l as UserCheck, mt as CircleX, ot as Download, r as Users, rt as Eye, v as ShieldAlert, y as Search, yt as ChartColumn } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-DksluTlX.mjs";
import { d as uniqueSorted, o as maskCnic, r as formatDisplayDate, s as maskMobile, t as csvCell } from "./formatters-BY4KepB2.mjs";
import { d as loadCurrentAdminAreaAccess, o as filterRowsByAreaAccess, s as getAreaAccessSummaryText } from "./area-permissions-Hs7OJQCz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Dyan0tU_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var copies = {
	en: {
		roleLabels: {
			admin: "Admin",
			super_admin: "Super Admin",
			membership_admin: "Membership Admin",
			education_admin: "Education Admin",
			health_admin: "Health Admin",
			employment_admin: "Employment Admin",
			ration_admin: "Ration Admin",
			welfare_admin: "Welfare Admin",
			finance_admin: "Finance Admin"
		},
		loading: "Loading admin control center...",
		brandEyebrow: "Marwardi Bhatti Jamaat Pakistan",
		title: "MBJP Admin Control Center",
		subtitle: "Manage membership applications and access authorized program modules for education, health, welfare, employment and finance. Sensitive CNIC/mobile data stays masked unless explicitly required.",
		showSensitive: "Show Sensitive Data",
		hideSensitive: "Hide Sensitive Data",
		refresh: "Refresh",
		refreshing: "Refreshing...",
		sensitiveWarning: "Sensitive data is visible. Use this mode only for official verification, and avoid exporting or sharing records unless approved by MBJP leadership.",
		stats: {
			totalMembers: "Total Members",
			pendingReview: "Pending Review",
			approved: "Approved",
			rejected: "Rejected",
			cardsIssued: "Cards Issued"
		},
		membership: {
			eyebrow: "Membership management",
			title: "Member Applications",
			showing: (shown, total) => `Showing ${shown} of ${total} members.`,
			exportFullCsv: "Export Full CSV",
			exportMaskedCsv: "Export Masked CSV",
			clearFilters: "Clear Filters",
			searchPlaceholder: "Search name, CNIC, mobile, district...",
			searchAria: "Search members",
			statusAria: "Filter members by status",
			districtAria: "Filter members by district",
			talukaAria: "Filter members by taluka",
			dateAria: "Filter members by registration date",
			sortAria: "Sort members",
			allStatuses: "All statuses",
			allDistricts: "All districts",
			allTalukas: "All talukas",
			allDates: "All dates",
			today: "Today",
			last7Days: "Last 7 days",
			last30Days: "Last 30 days",
			sensitiveHint: "CNIC and mobile numbers are masked by default. Full CSV export requires sensitive-data mode and confirmation.",
			sortNewest: "Sort: Newest first",
			sortOldest: "Sort: Oldest first",
			sortName: "Sort: Name A-Z",
			sortDistrict: "Sort: District A-Z",
			noMembers: "No members found",
			noMembersMessage: "Try changing the search text or filters."
		},
		table: {
			photo: "Photo",
			member: "Member",
			cnicMobile: "CNIC / Mobile",
			district: "District",
			status: "Status",
			memberNo: "Member No",
			submitted: "Submitted",
			digitalCard: "Digital Card",
			application: "Application",
			id: "ID"
		},
		mobile: {
			cnic: "CNIC",
			submitted: "Submitted",
			location: "Location",
			memberNo: "Member No",
			noTaluka: "No taluka",
			notIssued: "Not issued"
		},
		card: {
			digitalCard: "Digital Card",
			digitalMemberCard: "Digital Member Card",
			sameDesign: "Same card design as member dashboard.",
			openSameMemberCard: "Open Same Member Card",
			availableAfterApproval: "Card available after approval",
			memberNoNotIssued: "Member no not issued yet"
		},
		status: {
			pending: "Pending",
			approved: "Approved",
			rejected: "Rejected"
		},
		modules: {
			eyebrow: "Admin Modules",
			title: "Control center shortcuts",
			description: "Open the authorized modules for membership, programs, finance, public website content, reports and system access management.",
			available: (count) => `${count} module${count === 1 ? "" : "s"} available`,
			module: "Module",
			currentPage: "Current Page",
			open: "Open",
			phase1: "Phase 1",
			admin: "Admin",
			superAdmin: "Super Admin",
			cards: {
				membership: {
					title: "Membership",
					description: "Review member registrations, approve or reject applications, and open QR-based digital membership cards.",
					actionLabel: "Current Page",
					metricLabel: "Pending"
				},
				education: {
					title: "Education",
					description: "Manage scholarship, fee support, documents, review notes and approved education support amounts.",
					actionLabel: "Open Education"
				},
				health: {
					title: "Health",
					description: "Review medical help, emergency treatment, hospital estimates, prescriptions and committee decisions.",
					actionLabel: "Open Health"
				},
				welfare: {
					title: "Welfare",
					description: "Manage financial help, ration, widow/orphan, emergency, legal and family support cases.",
					actionLabel: "Open Welfare"
				},
				employment: {
					title: "Employment",
					description: "Review job seeker profiles, CV uploads, skills, training interests, shortlists and placements.",
					actionLabel: "Open Employment"
				},
				finance: {
					title: "Finance",
					description: "Track donations, expenses, approvals, receipts, available balance and finance audit logs.",
					actionLabel: "Open Finance"
				},
				cms: {
					title: "Public Website CMS",
					description: "Update multilingual public pages such as About, Vision & Mission, Manifesto, Constitution, CWC and Contact.",
					actionLabel: "Open CMS"
				},
				media: {
					title: "News & Media",
					description: "Create and publish news, announcements, gallery items and public event notices.",
					actionLabel: "Open News Admin"
				},
				reports: {
					title: "Reports Center",
					description: "View organization-wide summaries for members, programs, finance, districts and monthly activity.",
					actionLabel: "Open Reports",
					badgeLabel: "Admin"
				},
				roles: {
					title: "Roles & Permissions",
					description: "Assign or remove admin roles, review user access and protect super admin controls.",
					actionLabel: "Manage Roles",
					badgeLabel: "Super Admin"
				},
				"area-permissions": {
					title: "Area Permissions",
					description: "Assign district, taluka and All Sindh access for module admins after giving them roles.",
					actionLabel: "Manage Area Access",
					badgeLabel: "Super Admin"
				},
				"audit-logs": {
					title: "Audit Logs",
					description: "Review sensitive admin activity, role changes, area access updates, finance edits and committee actions.",
					actionLabel: "Open Audit Logs",
					badgeLabel: "Super Admin"
				},
				committees: {
					title: "Organization Levels & Designations",
					description: "Manage organization level units, designations and assignment records.",
					actionLabel: "Open Levels",
					badgeLabel: "Phase 1"
				}
			}
		},
		access: {
			superAdmin: "Super admin control layer active",
			centralAdmin: "Central admin operations access",
			roleBased: "Role-based module access"
		},
		exportConfirm: "This export will include full CNIC and mobile numbers. Continue only if this is required for official verification.",
		viewApplication: "View Application"
	},
	ur: {
		roleLabels: {
			admin: "ایڈمن",
			super_admin: "سپر ایڈمن",
			membership_admin: "ممبرشپ ایڈمن",
			education_admin: "ایجوکیشن ایڈمن",
			health_admin: "ہیلتھ ایڈمن",
			employment_admin: "ایمپلائمنٹ ایڈمن",
			ration_admin: "راشن ایڈمن",
			welfare_admin: "ویلفیئر ایڈمن",
			finance_admin: "فنانس ایڈمن"
		},
		loading: "ایڈمن کنٹرول سینٹر لوڈ ہو رہا ہے...",
		brandEyebrow: "مارواڑی بھٹی جماعت پاکستان",
		title: "MBJP ایڈمن کنٹرول سینٹر",
		subtitle: "ممبرشپ درخواستیں مینج کریں اور تعلیم، صحت، ویلفیئر، روزگار اور فنانس کے مجاز پروگرام ماڈیولز تک رسائی حاصل کریں۔ حساس CNIC/mobile ڈیٹا صرف ضرورت پر ظاہر ہوگا۔",
		showSensitive: "حساس ڈیٹا دکھائیں",
		hideSensitive: "حساس ڈیٹا چھپائیں",
		refresh: "ریفریش",
		refreshing: "ریفریش ہو رہا ہے...",
		sensitiveWarning: "حساس ڈیٹا نظر آ رہا ہے۔ یہ موڈ صرف سرکاری تصدیق کے لیے استعمال کریں اور MBJP قیادت کی منظوری کے بغیر ریکارڈ ایکسپورٹ یا شیئر نہ کریں۔",
		stats: {
			totalMembers: "کل ممبران",
			pendingReview: "زیر جائزہ",
			approved: "منظور شدہ",
			rejected: "مسترد",
			cardsIssued: "کارڈز جاری"
		},
		membership: {
			eyebrow: "ممبرشپ مینجمنٹ",
			title: "ممبر درخواستیں",
			showing: (shown, total) => `${total} میں سے ${shown} ممبران دکھائے جا رہے ہیں۔`,
			exportFullCsv: "فل CSV ایکسپورٹ",
			exportMaskedCsv: "ماسکڈ CSV ایکسپورٹ",
			clearFilters: "فلٹرز صاف کریں",
			searchPlaceholder: "نام، CNIC، موبائل، ضلع تلاش کریں...",
			searchAria: "ممبرز تلاش کریں",
			statusAria: "اسٹیٹس سے ممبرز فلٹر کریں",
			districtAria: "ضلع سے ممبرز فلٹر کریں",
			talukaAria: "تعلقہ سے ممبرز فلٹر کریں",
			dateAria: "رجسٹریشن تاریخ سے ممبرز فلٹر کریں",
			sortAria: "ممبرز ترتیب دیں",
			allStatuses: "تمام اسٹیٹس",
			allDistricts: "تمام اضلاع",
			allTalukas: "تمام تعلقہ",
			allDates: "تمام تاریخیں",
			today: "آج",
			last7Days: "گزشتہ 7 دن",
			last30Days: "گزشتہ 30 دن",
			sensitiveHint: "CNIC اور موبائل نمبرز ڈیفالٹ طور پر ماسک رہتے ہیں۔ فل CSV ایکسپورٹ کے لیے sensitive-data mode اور تصدیق ضروری ہے۔",
			sortNewest: "ترتیب: نئے پہلے",
			sortOldest: "ترتیب: پرانے پہلے",
			sortName: "ترتیب: نام A-Z",
			sortDistrict: "ترتیب: ضلع A-Z",
			noMembers: "کوئی ممبر نہیں ملا",
			noMembersMessage: "سرچ ٹیکسٹ یا فلٹرز تبدیل کریں۔"
		},
		table: {
			photo: "تصویر",
			member: "ممبر",
			cnicMobile: "CNIC / موبائل",
			district: "ضلع",
			status: "اسٹیٹس",
			memberNo: "ممبر نمبر",
			submitted: "جمع شدہ",
			digitalCard: "ڈیجیٹل کارڈ",
			application: "درخواست",
			id: "ID"
		},
		mobile: {
			cnic: "CNIC",
			submitted: "جمع شدہ",
			location: "مقام",
			memberNo: "ممبر نمبر",
			noTaluka: "تعلقہ نہیں",
			notIssued: "جاری نہیں ہوا"
		},
		card: {
			digitalCard: "ڈیجیٹل کارڈ",
			digitalMemberCard: "ڈیجیٹل ممبر کارڈ",
			sameDesign: "ممبر ڈیش بورڈ جیسا ہی کارڈ ڈیزائن۔",
			openSameMemberCard: "وہی ممبر کارڈ کھولیں",
			availableAfterApproval: "کارڈ منظوری کے بعد دستیاب ہوگا",
			memberNoNotIssued: "ممبر نمبر ابھی جاری نہیں ہوا"
		},
		status: {
			pending: "زیر جائزہ",
			approved: "منظور شدہ",
			rejected: "مسترد"
		},
		modules: {
			eyebrow: "ایڈمن ماڈیولز",
			title: "کنٹرول سینٹر شارٹ کٹس",
			description: "ممبرشپ، پروگرامز، فنانس، پبلک ویب سائٹ مواد، رپورٹس اور سسٹم ایکسس مینجمنٹ کے مجاز ماڈیولز کھولیں۔",
			available: (count) => `${count} ماڈیول دستیاب`,
			module: "ماڈیول",
			currentPage: "موجودہ صفحہ",
			open: "کھولیں",
			phase1: "فیز 1",
			admin: "ایڈمن",
			superAdmin: "سپر ایڈمن",
			cards: {
				membership: {
					title: "ممبرشپ",
					description: "ممبر رجسٹریشنز کا جائزہ، منظوری/مسترد، اور QR-based ڈیجیٹل ممبرشپ کارڈز کھولیں۔",
					actionLabel: "موجودہ صفحہ",
					metricLabel: "زیر جائزہ"
				},
				education: {
					title: "تعلیم",
					description: "اسکالرشپ، فیس سپورٹ، دستاویزات، ریویو نوٹس اور منظور شدہ تعلیمی سپورٹ رقم مینج کریں۔",
					actionLabel: "ایجوکیشن کھولیں"
				},
				health: {
					title: "صحت",
					description: "طبی مدد، ایمرجنسی علاج، ہسپتال تخمینے، نسخے اور کمیٹی فیصلوں کا جائزہ لیں۔",
					actionLabel: "ہیلتھ کھولیں"
				},
				welfare: {
					title: "ویلفیئر",
					description: "مالی مدد، راشن، بیوہ/یتیم، ایمرجنسی، قانونی اور خاندانی سپورٹ کیسز مینج کریں۔",
					actionLabel: "ویلفیئر کھولیں"
				},
				employment: {
					title: "روزگار",
					description: "جاب سیکر پروفائلز، CV اپلوڈز، اسکلز، ٹریننگ دلچسپی، شارٹ لسٹ اور پلیسمنٹ کا جائزہ لیں۔",
					actionLabel: "ایمپلائمنٹ کھولیں"
				},
				finance: {
					title: "فنانس",
					description: "عطیات، اخراجات، منظوری، رسیدیں، دستیاب بیلنس اور فنانس آڈٹ لاگز ٹریک کریں۔",
					actionLabel: "فنانس کھولیں"
				},
				cms: {
					title: "پبلک ویب سائٹ CMS",
					description: "About، Vision & Mission، Manifesto، Constitution، CWC اور Contact جیسے multilingual public pages اپڈیٹ کریں۔",
					actionLabel: "CMS کھولیں"
				},
				media: {
					title: "نیوز اور میڈیا",
					description: "خبریں، اعلانات، گیلری آئٹمز اور عوامی ایونٹ نوٹس بنائیں اور شائع کریں۔",
					actionLabel: "نیوز ایڈمن کھولیں"
				},
				reports: {
					title: "رپورٹس سینٹر",
					description: "ممبرز، پروگرامز، فنانس، اضلاع اور ماہانہ سرگرمی کی تنظیمی سمریز دیکھیں۔",
					actionLabel: "رپورٹس کھولیں",
					badgeLabel: "ایڈمن"
				},
				roles: {
					title: "رولز اور پرمیشنز",
					description: "ایڈمن رولز assign/remove کریں، user access دیکھیں اور super admin controls محفوظ رکھیں۔",
					actionLabel: "رولز مینج کریں",
					badgeLabel: "سپر ایڈمن"
				},
				"area-permissions": {
					title: "ایریا پرمیشنز",
					description: "ماڈیول ایڈمنز کو roles دینے کے بعد district، taluka اور All Sindh access assign کریں۔",
					actionLabel: "ایریا ایکسس مینج کریں",
					badgeLabel: "سپر ایڈمن"
				},
				"audit-logs": {
					title: "آڈٹ لاگز",
					description: "حساس admin activity، role changes، area access، finance edits اور committee actions کا جائزہ لیں۔",
					actionLabel: "آڈٹ لاگز کھولیں",
					badgeLabel: "سپر ایڈمن"
				},
				committees: {
					title: "کمیٹیاں اور عہدے",
					description: "مرکزی، ڈویژنل، ضلعی اور تعلقہ کمیٹیاں، عہدیداران، عہدے اور مدت ریکارڈ مینج کریں۔",
					actionLabel: "کمیٹیاں کھولیں",
					badgeLabel: "فیز 1"
				}
			}
		},
		access: {
			superAdmin: "سپر ایڈمن کنٹرول لیئر فعال",
			centralAdmin: "مرکزی ایڈمن آپریشنز ایکسس",
			roleBased: "رول بیسڈ ماڈیول ایکسس"
		},
		exportConfirm: "اس ایکسپورٹ میں مکمل CNIC اور موبائل نمبرز شامل ہوں گے۔ صرف سرکاری تصدیق کی ضرورت ہو تو جاری رکھیں۔",
		viewApplication: "درخواست دیکھیں"
	},
	sd: {
		roleLabels: {
			admin: "ايڊمن",
			super_admin: "سپر ايڊمن",
			membership_admin: "ميمبرشپ ايڊمن",
			education_admin: "ايجوڪيشن ايڊمن",
			health_admin: "هيلٿ ايڊمن",
			employment_admin: "ايمپلائمنٽ ايڊمن",
			ration_admin: "راشن ايڊمن",
			welfare_admin: "ويلفيئر ايڊمن",
			finance_admin: "فنانس ايڊمن"
		},
		loading: "ايڊمن ڪنٽرول سينٽر لوڊ ٿي رهيو آهي...",
		brandEyebrow: "مارواڙي ڀٽي جماعت پاڪستان",
		title: "MBJP ايڊمن ڪنٽرول سينٽر",
		subtitle: "ميمبرشپ درخواستون منظم ڪريو ۽ تعليم، صحت، ويلفيئر، روزگار ۽ فنانس جي مجاز پروگرام ماڊيولز تائين رسائي حاصل ڪريو. حساس CNIC/mobile ڊيٽا صرف ضرورت تي ظاهر ٿيندو.",
		showSensitive: "حساس ڊيٽا ڏيکاريو",
		hideSensitive: "حساس ڊيٽا لڪايو",
		refresh: "ريفريش",
		refreshing: "ريفريش ٿي رهيو آهي...",
		sensitiveWarning: "حساس ڊيٽا نظر اچي رهيو آهي. هي موڊ صرف سرڪاري تصديق لاءِ استعمال ڪريو ۽ MBJP قيادت جي منظوري کانسواءِ رڪارڊ ايڪسپورٽ يا شيئر نه ڪريو.",
		stats: {
			totalMembers: "ڪل ميمبر",
			pendingReview: "جائزي هيٺ",
			approved: "منظور ٿيل",
			rejected: "رد ٿيل",
			cardsIssued: "ڪارڊ جاري"
		},
		membership: {
			eyebrow: "ميمبرشپ مينيجمينٽ",
			title: "ميمبر درخواستون",
			showing: (shown, total) => `${total} مان ${shown} ميمبر ڏيکاريا پيا وڃن.`,
			exportFullCsv: "فل CSV ايڪسپورٽ",
			exportMaskedCsv: "ماسڪڊ CSV ايڪسپورٽ",
			clearFilters: "فلٽر صاف ڪريو",
			searchPlaceholder: "نالو، CNIC، موبائل، ضلعو ڳوليو...",
			searchAria: "ميمبر ڳوليو",
			statusAria: "اسٽيٽس سان ميمبر فلٽر ڪريو",
			districtAria: "ضلع سان ميمبر فلٽر ڪريو",
			talukaAria: "تعلقي سان ميمبر فلٽر ڪريو",
			dateAria: "رجسٽريشن تاريخ سان ميمبر فلٽر ڪريو",
			sortAria: "ميمبر ترتيب ڏيو",
			allStatuses: "سڀ اسٽيٽس",
			allDistricts: "سڀ ضلعا",
			allTalukas: "سڀ تعلقا",
			allDates: "سڀ تاريخون",
			today: "اڄ",
			last7Days: "گذريل 7 ڏينهن",
			last30Days: "گذريل 30 ڏينهن",
			sensitiveHint: "CNIC ۽ موبائل نمبر ڊيفالٽ طور ماسڪ رهن ٿا. فل CSV ايڪسپورٽ لاءِ sensitive-data mode ۽ تصديق ضروري آهي.",
			sortNewest: "ترتيب: نوان پهريان",
			sortOldest: "ترتيب: پراڻا پهريان",
			sortName: "ترتيب: نالو A-Z",
			sortDistrict: "ترتيب: ضلعو A-Z",
			noMembers: "ڪو ميمبر نه مليو",
			noMembersMessage: "سرچ ٽيڪسٽ يا فلٽر تبديل ڪريو."
		},
		table: {
			photo: "تصوير",
			member: "ميمبر",
			cnicMobile: "CNIC / موبائل",
			district: "ضلعو",
			status: "اسٽيٽس",
			memberNo: "ميمبر نمبر",
			submitted: "جمع ٿيل",
			digitalCard: "ڊجيٽل ڪارڊ",
			application: "درخواست",
			id: "ID"
		},
		mobile: {
			cnic: "CNIC",
			submitted: "جمع ٿيل",
			location: "جڳهه",
			memberNo: "ميمبر نمبر",
			noTaluka: "تعلقو نه",
			notIssued: "جاري نه ٿيو"
		},
		card: {
			digitalCard: "ڊجيٽل ڪارڊ",
			digitalMemberCard: "ڊجيٽل ميمبر ڪارڊ",
			sameDesign: "ميمبر ڊيش بورڊ جهڙو ساڳيو ڪارڊ ڊيزائن.",
			openSameMemberCard: "ساڳيو ميمبر ڪارڊ کوليو",
			availableAfterApproval: "ڪارڊ منظوري کان پوءِ دستياب ٿيندو",
			memberNoNotIssued: "ميمبر نمبر اڃا جاري نه ٿيو"
		},
		status: {
			pending: "جائزي هيٺ",
			approved: "منظور ٿيل",
			rejected: "رد ٿيل"
		},
		modules: {
			eyebrow: "ايڊمن ماڊيولز",
			title: "ڪنٽرول سينٽر شارٽ ڪٽس",
			description: "ميمبرشپ، پروگرامز، فنانس، پبلڪ ويب سائيٽ مواد، رپورٽس ۽ سسٽم ايڪسس مينيجمينٽ جا مجاز ماڊيول کوليو.",
			available: (count) => `${count} ماڊيول دستياب`,
			module: "ماڊيول",
			currentPage: "موجوده صفحو",
			open: "کوليو",
			phase1: "فيز 1",
			admin: "ايڊمن",
			superAdmin: "سپر ايڊمن",
			cards: {
				membership: {
					title: "ميمبرشپ",
					description: "ميمبر رجسٽريشنز جو جائزو، منظوري/رد، ۽ QR-based ڊجيٽل ميمبرشپ ڪارڊ کوليو.",
					actionLabel: "موجوده صفحو",
					metricLabel: "جائزي هيٺ"
				},
				education: {
					title: "تعليم",
					description: "اسڪالرشپ، في سپورٽ، دستاويز، ريويو نوٽس ۽ منظور ٿيل تعليمي سپورٽ رقم منظم ڪريو.",
					actionLabel: "ايجوڪيشن کوليو"
				},
				health: {
					title: "صحت",
					description: "طبي مدد، ايمرجنسي علاج، اسپتال تخمينن، نسخن ۽ ڪميٽي فيصلن جو جائزو وٺو.",
					actionLabel: "هيلٿ کوليو"
				},
				welfare: {
					title: "ويلفيئر",
					description: "مالي مدد، راشن، بيواهه/يتيم، ايمرجنسي، قانوني ۽ خانداني سپورٽ ڪيس منظم ڪريو.",
					actionLabel: "ويلفيئر کوليو"
				},
				employment: {
					title: "روزگار",
					description: "جاب سيڪر پروفائلز، CV اپلوڊ، مهارتون، ٽريننگ دلچسپي، شارٽ لسٽ ۽ پليسمينٽ جو جائزو وٺو.",
					actionLabel: "ايمپلائمنٽ کوليو"
				},
				finance: {
					title: "فنانس",
					description: "عطيا، خرچ، منظوري، رسيدون، دستياب بيلنس ۽ فنانس آڊٽ لاگز ٽريڪ ڪريو.",
					actionLabel: "فنانس کوليو"
				},
				cms: {
					title: "پبلڪ ويب سائيٽ CMS",
					description: "About، Vision & Mission، Manifesto، Constitution، CWC ۽ Contact جهڙا multilingual public pages اپڊيٽ ڪريو.",
					actionLabel: "CMS کوليو"
				},
				media: {
					title: "نيوز ۽ ميڊيا",
					description: "خبرون، اعلان، گيلري آئٽمز ۽ عوامي ايونٽ نوٽس ٺاهيو ۽ شايع ڪريو.",
					actionLabel: "نيوز ايڊمن کوليو"
				},
				reports: {
					title: "رپورٽس سينٽر",
					description: "ميمبرن، پروگرامن، فنانس، ضلعن ۽ ماهوار سرگرمي جون تنظيمي سمريون ڏسو.",
					actionLabel: "رپورٽس کوليو",
					badgeLabel: "ايڊمن"
				},
				roles: {
					title: "رولز ۽ پرميشنز",
					description: "ايڊمن رولز assign/remove ڪريو، user access ڏسو ۽ super admin controls محفوظ رکو.",
					actionLabel: "رولز منظم ڪريو",
					badgeLabel: "سپر ايڊمن"
				},
				"area-permissions": {
					title: "ايريا پرميشنز",
					description: "ماڊيول ايڊمنز کي roles ڏيڻ کان پوءِ district، taluka ۽ All Sindh access assign ڪريو.",
					actionLabel: "ايريا ايڪسس منظم ڪريو",
					badgeLabel: "سپر ايڊمن"
				},
				"audit-logs": {
					title: "آڊٽ لاگز",
					description: "حساس admin activity، role changes، area access، finance edits ۽ committee actions جو جائزو وٺو.",
					actionLabel: "آڊٽ لاگز کوليو",
					badgeLabel: "سپر ايڊمن"
				},
				committees: {
					title: "ڪميٽيون ۽ عهدا",
					description: "مرڪزي، ڊويزنل، ضلعي ۽ تعلقي ڪميٽيون، عهديدار، عهدا ۽ مدت رڪارڊ منظم ڪريو.",
					actionLabel: "ڪميٽيون کوليو",
					badgeLabel: "فيز 1"
				}
			}
		},
		access: {
			superAdmin: "سپر ايڊمن ڪنٽرول ليئر فعال",
			centralAdmin: "مرڪزي ايڊمن آپريشنز ايڪسس",
			roleBased: "رول بيسڊ ماڊيول ايڪسس"
		},
		exportConfirm: "هن ايڪسپورٽ ۾ مڪمل CNIC ۽ موبائل نمبر شامل هوندا. صرف سرڪاري تصديق جي ضرورت هجي ته جاري رکو.",
		viewApplication: "درخواست ڏسو"
	}
};
function useAdminDashboardCopy() {
	const { language } = useI18n();
	const selected = copies[language] ?? copies.en;
	const textDir = language === "en" ? "ltr" : "rtl";
	const isRtl = textDir === "rtl";
	return {
		...selected,
		textDir,
		isRtl,
		textAlignClass: isRtl ? "text-right" : "text-left",
		arrowClass: isRtl ? "mr-2 rotate-180" : "ml-2"
	};
}
var adminRoleNames = [
	"admin",
	"super_admin",
	"membership_admin",
	"education_admin",
	"health_admin",
	"employment_admin",
	"ration_admin",
	"welfare_admin",
	"finance_admin"
];
var ADMIN_MEMBERS_PAGE_SIZE = 50;
var ADMIN_MEMBERS_RESTRICTED_FETCH_LIMIT = 200;
var adminDashboardDedupeCopy = {
	en: {
		priorityWork: "Priority Work",
		workQueueTitle: "Admin work queue",
		workQueueDescription: "Important membership review numbers and daily admin shortcuts are shown here.",
		pendingApplications: "Pending applications",
		approvedMembers: "Approved members",
		cardsIssued: "Cards issued",
		cleanerFlow: "Membership Summary",
		navigationMoved: "Current member records",
		navigationMovedDescription: "Quick overview of total and rejected membership applications in the current admin records.",
		total: "Total",
		rejected: "Rejected",
		quickActions: "Quick actions",
		frequentTasks: "Frequent admin tasks",
		actions: {
			reviewPending: {
				title: "Review pending members",
				description: "Open the member table with pending applications selected.",
				metricLabel: "Pending"
			},
			finance: {
				title: "Finance",
				description: "Track donations, expenses, receipts and finance audit logs."
			},
			reports: {
				title: "Reports",
				description: "View organization summaries, exports and review reports."
			},
			news: {
				title: "News",
				description: "Create or update public announcements and news posts."
			},
			cms: {
				title: "CMS",
				description: "Edit public website pages and multilingual content."
			},
			committees: {
				title: "Organization Levels",
				description: "Manage level units used for designation assignment."
			}
		}
	},
	ur: {
		priorityWork: "اہم کام",
		workQueueTitle: "ایڈمن ورک کیو",
		workQueueDescription: "اہم ممبرشپ ریویو نمبرز اور روزمرہ ایڈمن شارٹ کٹس یہاں دکھائے جاتے ہیں۔",
		pendingApplications: "زیر التواء درخواستیں",
		approvedMembers: "منظور شدہ ممبرز",
		cardsIssued: "جاری شدہ کارڈز",
		cleanerFlow: "ممبرشپ خلاصہ",
		navigationMoved: "موجودہ ممبر ریکارڈ",
		navigationMovedDescription: "موجودہ ایڈمن ریکارڈز میں کل اور رد شدہ ممبرشپ درخواستوں کا مختصر جائزہ۔",
		total: "کل",
		rejected: "رد شدہ",
		quickActions: "فوری ایکشنز",
		frequentTasks: "عام ایڈمن کام",
		actions: {
			reviewPending: {
				title: "زیر التواء ممبرز ریویو کریں",
				description: "ممبر ٹیبل کو زیر التواء درخواستوں کے فلٹر کے ساتھ کھولیں۔",
				metricLabel: "زیر التواء"
			},
			finance: {
				title: "فنانس",
				description: "ڈونیشنز، اخراجات، رسیدیں اور فنانس آڈٹ لاگز ٹریک کریں۔"
			},
			reports: {
				title: "رپورٹس",
				description: "تنظیمی خلاصے، ایکسپورٹس اور ریویو رپورٹس دیکھیں۔"
			},
			news: {
				title: "نیوز",
				description: "عوامی اعلانات اور نیوز پوسٹس بنائیں یا اپڈیٹ کریں۔"
			},
			cms: {
				title: "CMS",
				description: "پبلک ویب سائٹ صفحات اور ملٹی لنگول مواد ایڈٹ کریں۔"
			},
			committees: {
				title: "کمیٹیز",
				description: "مرکزی، ڈویژنل، ضلعی اور تعلقہ کمیٹیز مینیج کریں۔"
			}
		}
	},
	sd: {
		priorityWork: "اهم ڪم",
		workQueueTitle: "ايڊمن ورڪ ڪيو",
		workQueueDescription: "اهم ميمبرشپ ريَويو نمبر ۽ روزمره ايڊمن شارٽ ڪٽس هتي ڏيکاريا وڃن ٿا.",
		pendingApplications: "زير التوا درخواستون",
		approvedMembers: "منظور ٿيل ميمبر",
		cardsIssued: "جاري ٿيل ڪارڊ",
		cleanerFlow: "ميمبرشپ خلاصو",
		navigationMoved: "موجوده ميمبر رڪارڊ",
		navigationMovedDescription: "موجوده ايڊمن رڪارڊز ۾ ڪل ۽ رد ٿيل ميمبرشپ درخواستن جو مختصر جائزو.",
		total: "ڪل",
		rejected: "رد ٿيل",
		quickActions: "جلدي عمل",
		frequentTasks: "عام ايڊمن ڪم",
		actions: {
			reviewPending: {
				title: "زير التوا ميمبر ريَويو ڪريو",
				description: "ميمبر ٽيبل کي زير التوا درخواستن جي فلٽر سان کوليو.",
				metricLabel: "زير التوا"
			},
			finance: {
				title: "فنانس",
				description: "ڊونيشنز، خرچ، رسيدون ۽ فنانس آڊٽ لاگز ٽريڪ ڪريو."
			},
			reports: {
				title: "رپورٽس",
				description: "تنظيمي خلاصا، ايڪسپورٽس ۽ ريَويو رپورٽس ڏسو."
			},
			news: {
				title: "نيوز",
				description: "عوامي اعلان ۽ نيوز پوسٽس ٺاهيو يا اپڊيٽ ڪريو."
			},
			cms: {
				title: "CMS",
				description: "پبلڪ ويب سائيٽ صفحا ۽ ملٽي لنگول مواد ايڊٽ ڪريو."
			},
			committees: {
				title: "ڪميٽيز",
				description: "مرڪزي، ڊويزنل، ضلعي ۽ تعلقي ڪميٽيز مينيج ڪريو."
			}
		}
	}
};
function AdminPage() {
	const navigate = useNavigate();
	const isNestedAdminPage = (useRouterState({ select: (state) => state.location.pathname }).replace(/\/+$/, "") || "/") !== "/admin";
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [members, setMembers] = (0, import_react.useState)([]);
	const [memberResultCount, setMemberResultCount] = (0, import_react.useState)(0);
	const [memberPage, setMemberPage] = (0, import_react.useState)(0);
	const [adminRoles, setAdminRoles] = (0, import_react.useState)([]);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [districtFilter, setDistrictFilter] = (0, import_react.useState)("all");
	const [talukaFilter, setTalukaFilter] = (0, import_react.useState)("all");
	const [dateFilter, setDateFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [searchInput, setSearchInput] = (0, import_react.useState)("");
	const [showSensitive, setShowSensitive] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [areaNotice, setAreaNotice] = (0, import_react.useState)("");
	const hasLoadedMembersRef = (0, import_react.useRef)(false);
	const adminCopy = useAdminDashboardCopy();
	const debouncedSearch = useDebouncedValue(searchInput, 350);
	const loadAdmin = (0, import_react.useCallback)(async (cancelledRef, options) => {
		if (options?.silent ?? false) setRefreshing(true);
		else setLoading(true);
		setError("");
		setAreaNotice("");
		try {
			const access = await ensureAdminAccess();
			if (!access.ok) {
				if (!cancelledRef?.current) await navigate({ to: access.redirectTo });
				return;
			}
			if (!canManageMembersFromRoles(access.roles)) {
				if (!cancelledRef?.current) await navigate({ to: getPrimaryAdminRoute(access.roles) });
				return;
			}
			if (!cancelledRef?.current) setAdminRoles(access.roles);
			const areaAccess = await loadCurrentAdminAreaAccess("membership", "view", {
				requiredRoles: [
					"admin",
					"super_admin",
					"membership_admin"
				],
				userId: access.userId,
				roles: access.roles
			});
			if (!areaAccess.ok) throw new Error(areaAccess.message);
			let membersQuery = supabase.from("members").select([
				"id",
				"full_name",
				"cnic",
				"mobile",
				"district",
				"taluka",
				"photo_url",
				"status",
				"member_no",
				"created_at"
			].join(", "), { count: "exact" });
			if (statusFilter !== "all") membersQuery = membersQuery.eq("status", statusFilter);
			if (districtFilter !== "all") membersQuery = membersQuery.eq("district", districtFilter);
			if (talukaFilter !== "all") membersQuery = membersQuery.eq("taluka", talukaFilter);
			const dateStart = getDateFilterStart(dateFilter);
			if (dateStart) membersQuery = membersQuery.gte("created_at", dateStart);
			const searchFilter = buildMemberSearchOrFilter(debouncedSearch);
			if (searchFilter) membersQuery = membersQuery.or(searchFilter);
			if (sortBy === "oldest") membersQuery = membersQuery.order("created_at", { ascending: true });
			else if (sortBy === "name") membersQuery = membersQuery.order("full_name", { ascending: true }).order("created_at", { ascending: false });
			else if (sortBy === "district") membersQuery = membersQuery.order("district", { ascending: true }).order("taluka", { ascending: true }).order("created_at", { ascending: false });
			else membersQuery = membersQuery.order("created_at", { ascending: false });
			const pageFrom = memberPage * ADMIN_MEMBERS_PAGE_SIZE;
			const pageTo = pageFrom + ADMIN_MEMBERS_PAGE_SIZE - 1;
			const { data, error: membersError, count } = await (areaAccess.isRestricted ? membersQuery.limit(Math.max(ADMIN_MEMBERS_PAGE_SIZE, Math.min(ADMIN_MEMBERS_RESTRICTED_FETCH_LIMIT, pageTo + 1))) : membersQuery.range(pageFrom, pageTo)).returns();
			if (membersError) throw membersError;
			const safeMembers = areaAccess.isRestricted ? filterRowsByAreaAccess(data ?? [], areaAccess).slice(pageFrom, pageTo + 1) : filterRowsByAreaAccess(data ?? [], areaAccess);
			const resultCount = count ?? safeMembers.length;
			if (resultCount > 0 && pageFrom >= resultCount && memberPage > 0) {
				if (!cancelledRef?.current) setMemberPage(0);
				return;
			}
			if (!cancelledRef?.current) {
				setMembers(safeMembers);
				setMemberResultCount(resultCount);
				setAreaNotice(getAreaAccessSummaryText(areaAccess));
			}
		} catch (err) {
			if (!cancelledRef?.current) setError(err instanceof Error ? err.message : "Failed to load admin members.");
		} finally {
			if (!cancelledRef?.current) {
				setLoading(false);
				setRefreshing(false);
				hasLoadedMembersRef.current = true;
			}
		}
	}, [
		dateFilter,
		debouncedSearch,
		districtFilter,
		memberPage,
		navigate,
		sortBy,
		statusFilter,
		talukaFilter
	]);
	(0, import_react.useEffect)(() => {
		setMemberPage(0);
	}, [
		dateFilter,
		debouncedSearch,
		districtFilter,
		sortBy,
		statusFilter,
		talukaFilter
	]);
	(0, import_react.useEffect)(() => {
		if (isNestedAdminPage) return;
		const cancelledRef = { current: false };
		loadAdmin(cancelledRef, { silent: hasLoadedMembersRef.current });
		return () => {
			cancelledRef.current = true;
		};
	}, [isNestedAdminPage, loadAdmin]);
	const stats = (0, import_react.useMemo)(() => {
		return members.reduce((acc, member) => {
			acc.total += 1;
			acc[member.status] += 1;
			if (canOpenMemberCard(member)) acc.cards += 1;
			return acc;
		}, {
			total: 0,
			pending: 0,
			approved: 0,
			rejected: 0,
			cards: 0
		});
	}, [members]);
	const districtOptions = (0, import_react.useMemo)(() => {
		return uniqueSorted(members.map((member) => member.district).filter(Boolean));
	}, [members]);
	const talukaOptions = (0, import_react.useMemo)(() => {
		return uniqueSorted((districtFilter === "all" ? members : members.filter((member) => member.district === districtFilter)).map((member) => member.taluka ?? "").filter(Boolean));
	}, [districtFilter, members]);
	const filteredMembers = (0, import_react.useMemo)(() => {
		const query = debouncedSearch.trim().toLowerCase();
		return sortMembers(members.filter((member) => {
			const matchesStatus = statusFilter === "all" || member.status === statusFilter;
			const matchesDistrict = districtFilter === "all" || member.district === districtFilter;
			const matchesTaluka = talukaFilter === "all" || member.taluka === talukaFilter;
			const matchesDate = matchesDateFilter(member.created_at, dateFilter);
			const matchesSearch = query.length === 0 || buildMemberSearchText(member).includes(query);
			return matchesStatus && matchesDistrict && matchesTaluka && matchesDate && matchesSearch;
		}), sortBy);
	}, [
		dateFilter,
		districtFilter,
		members,
		debouncedSearch,
		sortBy,
		statusFilter,
		talukaFilter
	]);
	const totalMemberPages = Math.max(1, Math.ceil((memberResultCount || filteredMembers.length) / ADMIN_MEMBERS_PAGE_SIZE));
	const currentMemberPage = Math.min(memberPage + 1, totalMemberPages);
	const pageStartNumber = memberResultCount > 0 ? memberPage * ADMIN_MEMBERS_PAGE_SIZE + 1 : 0;
	const pageEndNumber = Math.min((memberPage + 1) * ADMIN_MEMBERS_PAGE_SIZE, memberResultCount || filteredMembers.length);
	const canGoToPreviousMembersPage = memberPage > 0;
	const canGoToNextMembersPage = memberPage + 1 < totalMemberPages;
	const hasActiveFilters = statusFilter !== "all" || districtFilter !== "all" || talukaFilter !== "all" || dateFilter !== "all" || searchInput.trim().length > 0;
	function resetFilters() {
		setStatusFilter("all");
		setDistrictFilter("all");
		setTalukaFilter("all");
		setDateFilter("all");
		setSortBy("newest");
		setSearchInput("");
	}
	function handleDistrictFilter(value) {
		setDistrictFilter(value);
		setTalukaFilter("all");
	}
	function goToPreviousMembersPage() {
		setMemberPage((page) => Math.max(0, page - 1));
	}
	function goToNextMembersPage() {
		setMemberPage((page) => Math.min(totalMemberPages - 1, page + 1));
	}
	function exportCsv() {
		if (showSensitive) {
			if (!window.confirm(adminCopy.exportConfirm)) return;
		}
		const csv = buildCsv(filteredMembers, showSensitive);
		const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		const privacySuffix = showSensitive ? "full" : "masked";
		link.href = url;
		link.download = `mbjp-members-${privacySuffix}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		link.click();
		URL.revokeObjectURL(url);
	}
	if (isNestedAdminPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: adminCopy.title,
		subtitle: adminCopy.subtitle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-3xl bg-white p-5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-5 w-5 animate-spin text-emerald-700" }), adminCopy.loading]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: adminCopy.title,
		subtitle: adminCopy.subtitle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "admin-dashboard-hero overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.22em] text-emerald-700",
										children: adminCopy.brandEyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",
										children: adminCopy.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-6 text-slate-600",
										children: adminCopy.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: adminRoles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-900 shadow-sm ring-1 ring-emerald-100",
											children: adminCopy.roleLabels[role] ?? role
										}, role))
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 sm:grid-cols-2 lg:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setShowSensitive((value) => !value),
										className: `inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold shadow-sm transition ${showSensitive ? "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100" : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"}`,
										children: [showSensitive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), showSensitive ? adminCopy.hideSensitive : adminCopy.showSensitive]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void loadAdmin(void 0, { silent: true }),
										disabled: refreshing,
										className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${refreshing ? "animate-spin" : ""}` }), refreshing ? adminCopy.refreshing : adminCopy.refresh]
									})]
								})]
							})
						}),
						showSensitive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 border-b border-red-100 bg-red-50 px-5 py-4 text-sm font-semibold text-red-800 sm:px-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "m-0",
								children: adminCopy.sensitiveWarning
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: adminCopy.stats.totalMembers,
									value: stats.total,
									tone: "slate",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }),
									active: statusFilter === "all",
									onClick: () => setStatusFilter("all")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: adminCopy.stats.pendingReview,
									value: stats.pending,
									tone: "amber",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-5 w-5" }),
									active: statusFilter === "pending",
									onClick: () => setStatusFilter("pending")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: adminCopy.stats.approved,
									value: stats.approved,
									tone: "emerald",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-5 w-5" }),
									active: statusFilter === "approved",
									onClick: () => setStatusFilter("approved")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: adminCopy.stats.rejected,
									value: stats.rejected,
									tone: "red",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5" }),
									active: statusFilter === "rejected",
									onClick: () => setStatusFilter("rejected")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: adminCopy.stats.cardsIssued,
									value: stats.cards,
									tone: "gold",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-5 w-5" }),
									active: false,
									onClick: () => setStatusFilter("approved")
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminProgramShortcuts, {
					roles: adminRoles,
					stats,
					onReviewPending: () => setStatusFilter("pending")
				}),
				areaNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black text-emerald-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: areaNotice })]
				}) : null,
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700 ring-1 ring-red-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "admin-members-section rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), adminCopy.membership.eyebrow]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-lg font-black text-slate-950",
									children: adminCopy.membership.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-slate-500",
									children: adminCopy.membership.showing(filteredMembers.length, memberResultCount || members.length)
								}),
								memberResultCount > ADMIN_MEMBERS_PAGE_SIZE ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-medium text-slate-400",
									children: "Use Next/Previous to browse more records, or search/filter to narrow the list."
								}) : null
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: exportCsv,
									disabled: filteredMembers.length === 0,
									className: "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), showSensitive ? adminCopy.membership.exportFullCsv : adminCopy.membership.exportMaskedCsv]
								}), hasActiveFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: resetFilters,
									className: "inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50",
									children: adminCopy.membership.clearFilters
								}) : null]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-3 lg:grid-cols-[minmax(260px,1fr)_180px_180px_160px_160px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: searchInput,
										onChange: (event) => setSearchInput(event.target.value),
										className: "h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-sm",
										placeholder: adminCopy.membership.searchPlaceholder,
										"aria-label": adminCopy.membership.searchAria
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: statusFilter,
									onChange: (event) => setStatusFilter(event.target.value),
									className: "h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-sm",
									"aria-label": adminCopy.membership.statusAria,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: adminCopy.membership.allStatuses
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "pending",
											children: adminCopy.status.pending
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "approved",
											children: adminCopy.status.approved
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "rejected",
											children: adminCopy.status.rejected
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: districtFilter,
									onChange: (event) => handleDistrictFilter(event.target.value),
									className: "h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-sm",
									"aria-label": adminCopy.membership.districtAria,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: adminCopy.membership.allDistricts
									}), districtOptions.map((district) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: district,
										children: district
									}, district))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: talukaFilter,
									onChange: (event) => setTalukaFilter(event.target.value),
									className: "h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-sm",
									"aria-label": adminCopy.membership.talukaAria,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: adminCopy.membership.allTalukas
									}), talukaOptions.map((taluka) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: taluka,
										children: taluka
									}, taluka))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: dateFilter,
									onChange: (event) => setDateFilter(event.target.value),
									className: "h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:text-sm",
									"aria-label": adminCopy.membership.dateAria,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: adminCopy.membership.allDates
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "today",
											children: adminCopy.membership.today
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "7d",
											children: adminCopy.membership.last7Days
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "30d",
											children: adminCopy.membership.last30Days
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-slate-500",
								children: adminCopy.membership.sensitiveHint
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: sortBy,
								onChange: (event) => setSortBy(event.target.value),
								className: "h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
								"aria-label": adminCopy.membership.sortAria,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "newest",
										children: adminCopy.membership.sortNewest
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "oldest",
										children: adminCopy.membership.sortOldest
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "name",
										children: adminCopy.membership.sortName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "district",
										children: adminCopy.membership.sortDistrict
									})
								]
							})]
						}),
						memberResultCount > ADMIN_MEMBERS_PAGE_SIZE ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-slate-600",
								children: [
									"Showing ",
									pageStartNumber,
									"-",
									pageEndNumber,
									" of ",
									memberResultCount,
									" records · Page ",
									currentMemberPage,
									" of ",
									totalMemberPages
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: goToPreviousMembersPage,
									disabled: !canGoToPreviousMembersPage || refreshing,
									className: "inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",
									children: "Previous 50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: goToNextMembersPage,
									disabled: !canGoToNextMembersPage || refreshing,
									className: "inline-flex h-10 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50",
									children: "Next 50"
								})]
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-3 md:hidden",
							children: [filteredMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMemberCard, {
								member,
								showSensitive
							}, member.id)), filteredMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								title: adminCopy.membership.noMembers,
								message: adminCopy.membership.noMembersMessage
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 hidden overflow-x-auto rounded-2xl border border-slate-200 md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[1120px] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-slate-50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.photo
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.member
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.cnicMobile
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.district
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.status
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.memberNo
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.submitted
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: adminCopy.table.digitalCard
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-right",
												children: adminCopy.table.application
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
									className: "divide-y divide-slate-100",
									children: [filteredMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "bg-white transition hover:bg-slate-50/70",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPhoto, {
													src: void 0,
													alt: member.full_name,
													className: "h-12 w-12 rounded-xl object-cover object-top ring-1 ring-slate-200",
													fallbackClassName: "flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 ring-1 ring-slate-200",
													fallbackText: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "h-4 w-4" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-4 py-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-bold text-slate-950",
													children: member.full_name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-slate-500",
													children: [
														adminCopy.table.id,
														": ",
														member.id.slice(0, 8),
														"..."
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-4 py-3 text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold",
													children: showSensitive ? member.cnic : maskCnic(member.cnic)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-slate-500",
													children: showSensitive ? member.mobile : maskMobile(member.mobile)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-4 py-3 text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 font-semibold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-emerald-700" }), member.district]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-slate-500",
													children: member.taluka || adminCopy.mobile.noTaluka
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: member.status })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-slate-700",
												children: member.member_no ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold",
													children: member.member_no
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-slate-400",
													children: adminCopy.mobile.notIssued
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-slate-700",
												children: formatDisplayDate(member.created_at)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardAccess, {
													member,
													layout: "desktop"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex justify-end",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewApplicationLink, { memberId: member.id })
												})
											})
										]
									}, member.id)), filteredMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										colSpan: 9,
										className: "p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
											title: "No members found",
											message: "Try changing the search text or filters."
										})
									}) }) : null]
								})]
							})
						})
					]
				})
			]
		})
	});
}
function AdminProgramShortcuts({ roles, stats, onReviewPending }) {
	const copy = useAdminDashboardCopy();
	const { language } = useI18n();
	const localCopy = adminDashboardDedupeCopy[language];
	const accessLabel = roles.includes("super_admin") ? copy.access.superAdmin : roles.includes("admin") ? copy.access.centralAdmin : copy.access.roleBased;
	const visibleQuickActions = [
		{
			key: "membership",
			title: localCopy.actions.reviewPending.title,
			description: localCopy.actions.reviewPending.description,
			icon: ListChecks,
			tone: "emerald",
			metric: String(stats.pending),
			metricLabel: localCopy.actions.reviewPending.metricLabel,
			onClick: onReviewPending
		},
		{
			key: "finance",
			title: localCopy.actions.finance.title,
			description: localCopy.actions.finance.description,
			to: "/admin/finance",
			icon: BadgeIndianRupee,
			tone: "emerald"
		},
		{
			key: "reports",
			title: localCopy.actions.reports.title,
			description: localCopy.actions.reports.description,
			to: "/admin/reports",
			icon: ChartColumn,
			tone: "sky"
		},
		{
			key: "media",
			title: localCopy.actions.news.title,
			description: localCopy.actions.news.description,
			to: "/admin/news",
			icon: Newspaper,
			tone: "amber"
		},
		{
			key: "cms",
			title: localCopy.actions.cms.title,
			description: localCopy.actions.cms.description,
			to: "/admin/cms",
			icon: FileText,
			tone: "violet"
		},
		{
			key: "committees",
			title: localCopy.actions.committees.title,
			description: localCopy.actions.committees.description,
			to: "/admin/committees",
			icon: Network,
			tone: "slate"
		}
	].filter((action) => canAccessAdminModule(roles, action.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "admin-overview-section rounded-[2rem] bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-work-queue rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
							children: localCopy.priorityWork
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-black tracking-tight text-slate-950",
							children: localCopy.workQueueTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
							children: localCopy.workQueueDescription
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-emerald-100",
						children: accessLabel
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onReviewPending,
							className: "admin-work-card text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-icon bg-amber-100 text-amber-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-value",
									children: stats.pending
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-label",
									children: localCopy.pendingApplications
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-work-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-icon bg-emerald-100 text-emerald-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-value",
									children: stats.approved
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-label",
									children: localCopy.approvedMembers
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admin-work-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-icon bg-slate-100 text-slate-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-value",
									children: stats.cards
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "admin-work-card-label",
									children: localCopy.cardsIssued
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-dashboard-note rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[0.22em] text-slate-500",
						children: localCopy.cleanerFlow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl font-black text-slate-950",
						children: localCopy.navigationMoved
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-slate-600",
						children: localCopy.navigationMovedDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase text-slate-500",
								children: localCopy.total
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-black text-slate-950",
								children: stats.total
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase text-slate-500",
								children: localCopy.rejected
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-black text-slate-950",
								children: stats.rejected
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-quick-actions mt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
					children: localCopy.quickActions
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-xl font-black tracking-tight text-slate-950",
					children: localCopy.frequentTasks
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-slate-500",
					children: copy.modules.available(visibleQuickActions.length)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: visibleQuickActions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminQuickAction, { action }, action.key))
			})]
		})]
	});
}
function AdminQuickAction({ action }) {
	const Icon = action.icon;
	const tone = getQuickActionTone(action.tone);
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `admin-quick-action-icon ${tone.icon}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-base font-black text-slate-950",
				children: action.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm leading-5 text-slate-500",
				children: action.description
			})]
		}),
		action.metric ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "admin-quick-action-metric",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: action.metric }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: action.metricLabel })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-slate-400" })
	] });
	if (action.onClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: action.onClick,
		className: `admin-quick-action ${tone.card}`,
		children: content
	});
	if (!action.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `admin-quick-action ${tone.card}`,
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: action.to,
		className: `admin-quick-action ${tone.card}`,
		children: content
	});
}
function getQuickActionTone(tone) {
	return {
		emerald: {
			card: "border-emerald-200 hover:bg-emerald-50",
			icon: "bg-emerald-100 text-emerald-800"
		},
		amber: {
			card: "border-amber-200 hover:bg-amber-50",
			icon: "bg-amber-100 text-amber-800"
		},
		sky: {
			card: "border-sky-200 hover:bg-sky-50",
			icon: "bg-sky-100 text-sky-800"
		},
		violet: {
			card: "border-violet-200 hover:bg-violet-50",
			icon: "bg-violet-100 text-violet-800"
		},
		slate: {
			card: "border-slate-200 hover:bg-slate-50",
			icon: "bg-slate-100 text-slate-800"
		},
		rose: {
			card: "border-rose-200 hover:bg-rose-50",
			icon: "bg-rose-100 text-rose-800"
		}
	}[tone];
}
function MobileMemberCard({ member, showSensitive }) {
	const copy = useAdminDashboardCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPhoto, {
					src: void 0,
					alt: member.full_name,
					className: "h-14 w-14 shrink-0 rounded-xl object-cover object-top ring-1 ring-slate-200",
					fallbackClassName: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400 ring-1 ring-slate-200",
					fallbackText: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "min-w-0 text-base font-black leading-tight text-slate-950",
								children: member.full_name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: member.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 break-all text-xs font-medium text-slate-500",
							children: [
								copy.mobile.cnic,
								": ",
								showSensitive ? member.cnic : maskCnic(member.cnic)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-slate-500",
							children: [
								copy.mobile.submitted,
								": ",
								formatDisplayDate(member.created_at)
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase text-slate-500",
							children: copy.mobile.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-bold text-slate-950",
							children: member.district
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: member.taluka || copy.mobile.noTaluka
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase text-slate-500",
							children: copy.mobile.memberNo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 break-all font-bold text-slate-950",
							children: member.member_no ?? copy.mobile.notIssued
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: showSensitive ? member.mobile : maskMobile(member.mobile)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardAccess, {
				member,
				layout: "mobile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewApplicationLink, {
					memberId: member.id,
					fullWidth: true
				})
			})
		]
	});
}
function StatCard({ label, value, tone, icon, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-2xl border p-4 text-left shadow-sm transition ${{
			slate: active ? "border-slate-300 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-950 hover:bg-slate-50",
			amber: active ? "border-amber-300 bg-amber-500 text-white" : "border-amber-100 bg-amber-50 text-amber-900 hover:bg-amber-100",
			emerald: active ? "border-emerald-300 bg-emerald-600 text-white" : "border-emerald-100 bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
			red: active ? "border-red-300 bg-red-600 text-white" : "border-red-100 bg-red-50 text-red-900 hover:bg-red-100",
			gold: "border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 text-amber-950 hover:from-amber-100 hover:to-yellow-100"
		}[tone]}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-xs font-bold uppercase tracking-wide ${active ? "text-white/75" : "opacity-70"}`,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xl font-black",
				children: value
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: active ? "text-white/80" : "opacity-75",
				children: icon
			})]
		})
	});
}
function CardAccess({ member, layout }) {
	const copy = useAdminDashboardCopy();
	if (canOpenMemberCard(member)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: layout === "mobile" ? "mt-4 rounded-2xl border border-amber-200 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-3 shadow-sm" : "min-w-[190px]",
		children: [layout === "mobile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-[0.18em] text-amber-300",
				children: copy.card.digitalMemberCard
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-slate-300",
				children: copy.card.sameDesign
			})]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/members/$id/card",
			params: { id: member.id },
			className: layout === "mobile" ? "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 text-sm font-black !text-slate-950 no-underline shadow-sm transition hover:bg-amber-300 hover:!text-slate-950" : "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 text-xs font-bold !text-amber-900 no-underline shadow-sm transition hover:bg-amber-100 hover:!text-amber-950",
			style: layout === "mobile" ? { color: "#020617" } : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-4 w-4" }), copy.card.openSameMemberCard]
		})]
	});
	const message = member.status !== "approved" ? copy.card.availableAfterApproval : copy.card.memberNoNotIssued;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: layout === "mobile" ? "mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3" : "min-w-[190px] rounded-xl border border-slate-200 bg-slate-50 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-wide text-slate-500",
			children: copy.card.digitalCard
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs font-medium text-slate-500",
			children: message
		})]
	});
}
function ViewApplicationLink({ memberId, fullWidth = false }) {
	const copy = useAdminDashboardCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin/members/$id",
		params: { id: memberId },
		className: `mbjp-dark-action-link inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-xs font-bold no-underline shadow-sm transition ${fullWidth ? "w-full" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), copy.viewApplication]
	});
}
function MemberPhoto({ src, alt, className, fallbackClassName, fallbackText }) {
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: fallbackClassName,
		children: fallbackText
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className
	});
}
function EmptyState({ title, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-bold text-slate-800",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-slate-500",
			children: message
		})]
	});
}
function StatusBadge({ status }) {
	const copy = useAdminDashboardCopy();
	const item = {
		pending: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-3.5 w-3.5" }),
			className: "bg-amber-50 text-amber-700 ring-amber-200",
			text: copy.status.pending
		},
		approved: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }),
			className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
			text: copy.status.approved
		},
		rejected: {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }),
			className: "bg-red-50 text-red-700 ring-red-200",
			text: copy.status.rejected
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${item.className}`,
		children: [item.icon, item.text]
	});
}
async function ensureAdminAccess() {
	const { data: { user }, error: userError } = await supabase.auth.getUser();
	if (userError || !user) return {
		ok: false,
		redirectTo: "/login"
	};
	const { data: roles, error: roleError } = await supabase.from("user_roles").select("role").eq("user_id", user.id).in("role", adminRoleNames);
	if (roleError || !roles?.length) return {
		ok: false,
		redirectTo: "/dashboard"
	};
	const safeRoles = roles.map((item) => item.role).filter((role) => adminRoleNames.includes(role));
	if (!safeRoles.length) return {
		ok: false,
		redirectTo: "/dashboard"
	};
	return {
		ok: true,
		userId: user.id,
		roles: safeRoles
	};
}
function canAccessAdminModule(roles, moduleKey) {
	if (roles.includes("super_admin")) return true;
	if (moduleKey === "roles" || moduleKey === "area-permissions" || moduleKey === "audit-logs") return false;
	if (roles.includes("admin")) return true;
	const requiredRole = {
		membership: "membership_admin",
		education: "education_admin",
		health: "health_admin",
		welfare: "welfare_admin",
		employment: "employment_admin",
		finance: "finance_admin"
	}[moduleKey];
	return requiredRole ? roles.includes(requiredRole) : false;
}
function canManageMembersFromRoles(roles) {
	return canAccessAdminModule(roles, "membership");
}
function getPrimaryAdminRoute(roles) {
	if (roles.includes("education_admin")) return "/admin/programs/education";
	if (roles.includes("health_admin")) return "/admin/programs/health";
	if (roles.includes("welfare_admin")) return "/admin/programs/welfare";
	if (roles.includes("employment_admin")) return "/admin/programs/employment";
	if (roles.includes("finance_admin")) return "/admin/finance";
	return "/dashboard";
}
function useDebouncedValue(value, delayMs) {
	const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const timeoutId = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delayMs);
		return () => window.clearTimeout(timeoutId);
	}, [delayMs, value]);
	return debouncedValue;
}
function getDateFilterStart(filter) {
	if (filter === "all") return null;
	const date = /* @__PURE__ */ new Date();
	if (filter === "today") date.setHours(0, 0, 0, 0);
	else if (filter === "7d") date.setDate(date.getDate() - 7);
	else if (filter === "30d") date.setDate(date.getDate() - 30);
	return date.toISOString();
}
function buildMemberSearchOrFilter(search) {
	const value = search.trim().replace(/[%,]/g, " ").replace(/\s+/g, " ").slice(0, 80);
	if (!value) return "";
	const pattern = `%${value}%`;
	return [
		`full_name.ilike.${pattern}`,
		`cnic.ilike.${pattern}`,
		`mobile.ilike.${pattern}`,
		`district.ilike.${pattern}`,
		`taluka.ilike.${pattern}`,
		`member_no.ilike.${pattern}`
	].join(",");
}
function buildMemberSearchText(member) {
	return [
		member.full_name,
		member.cnic,
		member.mobile,
		member.district,
		member.taluka ?? "",
		member.member_no ?? "",
		member.status
	].join(" ").toLowerCase();
}
function canOpenMemberCard(member) {
	return member.status === "approved" && Boolean(member.member_no);
}
function sortMembers(members, sortBy) {
	const copy = [...members];
	switch (sortBy) {
		case "oldest": return copy.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
		case "name": return copy.sort((a, b) => a.full_name.localeCompare(b.full_name));
		case "district": return copy.sort((a, b) => {
			const district = a.district.localeCompare(b.district);
			if (district !== 0) return district;
			return a.full_name.localeCompare(b.full_name);
		});
		default: return copy.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
	}
}
function matchesDateFilter(value, filter) {
	if (filter === "all") return true;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return false;
	const now = /* @__PURE__ */ new Date();
	if (filter === "today") return date.toDateString() === now.toDateString();
	const days = filter === "7d" ? 7 : 30;
	const cutoff = new Date(now);
	cutoff.setDate(now.getDate() - days);
	return date >= cutoff;
}
function buildCsv(members, includeSensitive) {
	return [[
		"Full Name",
		"CNIC",
		"Mobile",
		"District",
		"Taluka",
		"Status",
		"Member No",
		"Submitted",
		"Export Mode"
	], ...members.map((member) => [
		member.full_name,
		includeSensitive ? member.cnic : maskCnic(member.cnic),
		includeSensitive ? member.mobile : maskMobile(member.mobile),
		member.district,
		member.taluka ?? "",
		member.status,
		member.member_no ?? "",
		formatDisplayDate(member.created_at),
		includeSensitive ? "Full sensitive data" : "Masked sensitive data"
	])].map((row) => row.map(csvCell).join(",")).join("\n");
}
//#endregion
export { AdminPage as component };
