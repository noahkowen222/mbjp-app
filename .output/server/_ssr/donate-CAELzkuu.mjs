import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, I as LoaderCircle, Tt as BadgeIndianRupee, _ as ShieldCheck, d as Trophy, f as TriangleAlert, ht as CircleCheck, u as Upload } from "../_libs/lucide-react.mjs";
import { a as createFinanceDocumentStoragePath, c as financePurposeOptions, f as getFinancePurposeLabel, g as validateFinanceDocumentFile, h as getPaymentMethodLabel, l as formatFinanceMoney, n as FINANCE_DOCUMENT_BUCKET, s as financePaymentMethodOptions, t as FINANCE_DOCUMENT_ACCEPT } from "./finance-Cn3yAGsy.mjs";
import { t as buildDonationReferenceHint } from "./donations-BhPZKBSf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-CAELzkuu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialForm = {
	amount: "",
	purpose: "general_fund",
	paymentMethod: "bank",
	transactionReference: "",
	notes: ""
};
function DonatePage() {
	const [member, setMember] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [receiptFile, setReceiptFile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		loadApprovedMember();
	}, []);
	async function loadApprovedMember() {
		setLoading(true);
		setMessage("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Donation submit karne ke liye pehle login karen.");
			setMember(null);
			setLoading(false);
			return;
		}
		const { data, error } = await supabase.from("members").select("id, user_id, member_no, full_name, father_name, mobile, district, taluka, status").eq("user_id", user.id).maybeSingle().returns();
		if (error) {
			setMessage(error.message);
			setMember(null);
			setLoading(false);
			return;
		}
		if (!data || data.status !== "approved" || !data.member_no) {
			setMessage("Donation form sirf approved MBJP members ke liye available hai.");
			setMember(null);
			setLoading(false);
			return;
		}
		setMember(data);
		setLoading(false);
	}
	function handleReceipt(event) {
		setReceiptFile(event.target.files?.[0] || null);
	}
	async function handleSubmit(event) {
		event.preventDefault();
		if (!member) {
			setMessage("Approved member record load nahi hua.");
			return;
		}
		const amount = Number(form.amount);
		if (!Number.isFinite(amount) || amount <= 0) {
			setMessage("Valid donation amount enter karen.");
			return;
		}
		if (!form.transactionReference.trim()) {
			setMessage("Bank/JazzCash/Easypaisa transaction reference required hai.");
			return;
		}
		setSaving(true);
		setMessage("");
		setSuccess("");
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError || !user) {
			setMessage("Session expire ho gaya. Dobara login karen.");
			setSaving(false);
			return;
		}
		let receiptPath = null;
		if (receiptFile) {
			const fileError = validateFinanceDocumentFile(receiptFile);
			if (fileError) {
				setMessage(fileError);
				setSaving(false);
				return;
			}
			receiptPath = createFinanceDocumentStoragePath({
				userId: user.id,
				folder: "donations",
				fileName: receiptFile.name
			});
			const { error: uploadError } = await supabase.storage.from(FINANCE_DOCUMENT_BUCKET).upload(receiptPath, receiptFile, {
				cacheControl: "3600",
				upsert: false,
				contentType: receiptFile.type
			});
			if (uploadError) {
				setMessage(uploadError.message);
				setSaving(false);
				return;
			}
		}
		const payload = {
			donor_user_id: user.id,
			donor_member_id: member.id,
			donor_member_no_snapshot: member.member_no,
			donor_name_snapshot: member.full_name,
			donor_father_name_snapshot: member.father_name,
			donor_district_snapshot: member.district,
			donor_taluka_snapshot: member.taluka,
			donor_name: member.full_name,
			donor_phone: member.mobile,
			amount,
			payment_method: form.paymentMethod,
			purpose: form.purpose,
			district: member.district,
			taluka: member.taluka,
			transaction_reference: form.transactionReference.trim(),
			receipt_file_path: receiptPath,
			notes: form.notes.trim() || null,
			status: "pending",
			created_by: user.id
		};
		const { data, error } = await supabase.from("finance_donations").insert(payload).select("donation_no").single();
		if (error) {
			setMessage(error.message);
			setSaving(false);
			return;
		}
		setForm(initialForm);
		setReceiptFile(null);
		setSuccess(`Donation submitted. Finance admin verification ke baad leaderboard mein count hogi. Donation ID: ${String(data?.donation_no || "Pending")}`);
		setSaving(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-slate-950 px-4 py-12 text-white md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeIndianRupee, { className: "h-4 w-4 text-amber-300" }), "MBJP Donation Fund"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-black md:text-6xl",
						children: "Donate for MBJP Community Support"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-lg leading-8 text-white/70",
						children: "Education, health, welfare aur general fund ke liye donation submit karen. Finance admin verification ke baad donation member leaderboard mein show hogi."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-amber-300/30 bg-amber-300/10 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-8 w-8 text-amber-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-black",
								children: "Top Donor Leaderboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-white/70",
								children: "Sirf approved donations count hoti hain. Pending ya rejected donation leaderboard mein show nahi hoti."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/donors",
								className: "mbjp-dark-action-link mt-4 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-black no-underline",
								children: "View Donors"
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-[390px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-1 h-5 w-5 text-emerald-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black text-slate-950",
								children: "Manual Verification Flow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-slate-600",
								children: "Bank/JazzCash/Easypaisa transfer ke baad reference number aur receipt screenshot submit karen. Finance admin match karke approve karega."
							})] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-black text-slate-950",
							children: "Payment Instructions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3 text-sm leading-6 text-slate-600",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Bank/JazzCash/Easypaisa:" }), " transfer reference mein apna Member ID ya donation reference likhen."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Reference hint:" }),
									" ",
									buildDonationReferenceHint(member?.member_no)
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note:" }), " Account details admin settings/website par official announce honi chahiyen."] })
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm font-bold text-slate-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-amber-500" }), "Loading member record..."]
					}) : message && !member ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestrictedPanel, { message }) : member ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.18em] text-emerald-700",
									children: "Verified Member"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-black text-slate-950",
									children: member.full_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 rounded-3xl bg-slate-50 p-4 text-sm sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: "Father",
											value: member.father_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: "Member ID",
											value: member.member_no || "-"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: "District",
											value: member.district
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											label: "Taluka",
											value: member.taluka || "-"
										})
									]
								})
							] }),
							message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
								tone: "error",
								message
							}) : null,
							success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
								tone: "success",
								message: success
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Donation Amount",
										type: "number",
										value: form.amount,
										onChange: (value) => setForm({
											...form,
											amount: value
										}),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: "Purpose",
										value: form.purpose,
										onChange: (value) => setForm({
											...form,
											purpose: value
										}),
										options: financePurposeOptions
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: "Payment Method",
										value: form.paymentMethod,
										onChange: (value) => setForm({
											...form,
											paymentMethod: value
										}),
										options: financePaymentMethodOptions
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Transaction / Reference No",
										value: form.transactionReference,
										onChange: (value) => setForm({
											...form,
											transactionReference: value
										}),
										required: true
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm font-semibold text-slate-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Receipt Screenshot / Transfer Proof"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: FINANCE_DOCUMENT_ACCEPT,
										onChange: handleReceipt,
										className: "mt-3 block w-full text-sm"
									}),
									receiptFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-2 block text-xs text-slate-500",
										children: ["Selected: ", receiptFile.name]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-xs text-slate-500",
										children: "PDF, JPG, PNG or WEBP allowed."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								label: "Notes",
								value: form.notes,
								onChange: (value) => setForm({
									...form,
									notes: value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Leaderboard rule:" }), " Finance admin approval ke baad donation donor leaderboard mein add hogi. Display format: name, father name, member ID, total donated aur purpose."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: saving,
								className: "inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-emerald-900 disabled:opacity-60",
								children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), "Submit Donation for Verification"]
							})
						]
					}) : null
				})]
			})
		})]
	});
}
function RestrictedPanel({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-1 h-5 w-5 flex-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black",
					children: "Donation form restricted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "secondary-btn",
						children: "Login"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "primary-btn",
						children: "Complete Membership"
					})]
				})
			] })]
		})
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-black uppercase tracking-[0.14em] text-slate-400",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-black text-slate-950",
		children: value
	})] });
}
function Input({ label, value, onChange, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (event) => onChange(event.target.value),
			required,
			className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
		})]
	});
}
function Textarea({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			rows: 3,
			className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500"
		})]
	});
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-black uppercase tracking-[0.15em] text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold outline-none transition focus:border-amber-500",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		})]
	});
}
function Alert({ tone, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-3xl border p-4 text-sm font-semibold shadow-sm ${tone === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`,
		children: message
	});
}
function DonationPreviewText({ amount, purpose, method }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-4 text-sm text-slate-600",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mb-2 h-4 w-4 text-slate-400" }),
			formatFinanceMoney(Number(amount || 0)),
			" donation for",
			" ",
			getFinancePurposeLabel(purpose),
			" via",
			" ",
			getPaymentMethodLabel(method)
		]
	});
}
//#endregion
export { DonationPreviewText, DonatePage as component };
