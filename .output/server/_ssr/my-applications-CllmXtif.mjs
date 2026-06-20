import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as getEmploymentTypeLabel, h as getEmploymentStatusLabel, l as formatSkills, m as getEmploymentStatusClass, u as getCurrentEmploymentStatusLabel } from "./employment-CLgEhxZ8.mjs";
import { I as LoaderCircle, Ot as ArrowRight, xt as BriefcaseBusiness } from "../_libs/lucide-react.mjs";
import { t as useProgramTrackingCopy } from "./program-tracking-i18n-Bv7uyClU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-applications-CllmXtif.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MyEmploymentApplicationsPage() {
	const { copy, textDir, textAlignClass, arrowClass } = useProgramTrackingCopy("employment");
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadItems();
	}, []);
	async function loadItems() {
		setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Employment profiles dekhne ke liye login karen.");
			setItems([]);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("program_applications").select("id, application_no, applicant_name, membership_no, district, taluka, details, status, admin_remarks, submitted_at, created_at").eq("program_key", "employment").eq("applicant_user_id", user.id).order("created_at", { ascending: false });
		if (error) {
			setMessage(error.message);
			setItems([]);
		} else setItems(data || []);
		setLoading(false);
	}
	const total = (0, import_react.useMemo)(() => items.length, [items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-50 px-4 py-10",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mb-8 flex flex-wrap items-end justify-between gap-4 ${textAlignClass}`,
				dir: textDir,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/programs/employment",
						className: "text-sm font-black text-emerald-700 no-underline",
						children: ["← ", copy.program.programBack]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl font-black text-slate-950 md:text-4xl",
						children: copy.program.listTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-slate-600",
						children: [
							copy.common.total,
							": ",
							total
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/programs/employment/apply",
					className: "inline-flex rounded-xl bg-emerald-700 px-5 py-3 font-black text-white no-underline",
					children: copy.program.newApplication
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center rounded-3xl bg-white p-12 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-emerald-600" })
			}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center font-semibold text-amber-800",
				children: message
			}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-white p-10 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "mx-auto h-12 w-12 text-slate-300" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-black text-slate-950",
						children: copy.program.emptyTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-slate-600",
						children: copy.program.emptyText
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5",
				children: items.map((item) => {
					const details = item.details || {};
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700",
											children: item.application_no || copy.program.detailBadge
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full border px-3 py-1 text-xs font-black ${getEmploymentStatusClass(item.status)}`,
											children: getEmploymentStatusLabel(item.status)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 text-2xl font-black text-slate-950",
										children: item.applicant_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm font-semibold text-slate-500",
										children: [
											copy.common.memberId,
											": ",
											item.membership_no
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs/employment/$id",
									params: { id: item.id },
									className: "mbjp-dark-action-link inline-flex items-center rounded-xl px-5 py-3 text-sm font-black no-underline",
									children: [
										copy.common.viewDetails,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 ${arrowClass}` })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.education, ":"] }),
										" ",
										details.education_level || "-"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.skills, ":"] }),
										" ",
										formatSkills(details.skills)
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.preferredLocation, ":"] }),
										" ",
										details.preferred_job_location || "-"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.program.employmentType, ":"] }),
										" ",
										getEmploymentTypeLabel(details.employment_type)
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.common.status, ":"] }),
										" ",
										getCurrentEmploymentStatusLabel(details.current_employment_status)
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.common.submitted, ":"] }),
										" ",
										new Date(item.created_at).toLocaleDateString()
									] })
								]
							}),
							item.admin_remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [copy.common.adminRemarks, ":"] }),
									" ",
									item.admin_remarks
								]
							}) : null
						]
					}, item.id);
				})
			})]
		})
	});
}
//#endregion
export { MyEmploymentApplicationsPage as component };
