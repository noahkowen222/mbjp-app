import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./i18n-XdhEhh6o.mjs";
import { I as LoaderCircle, N as Mail, Ot as ArrowRight, _ as ShieldCheck, a as UserRound, g as Smartphone, gt as CircleAlert, h as Sparkles, ht as CircleCheck, it as EyeOff, rt as Eye } from "../_libs/lucide-react.mjs";
import { s as formatMembershipMoney } from "./membership-fee-MCDC6IES.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-Cws36phg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const { t, direction } = useI18n();
	const [method, setMethod] = (0, import_react.useState)("email");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [phone, setPhone] = (0, import_react.useState)("");
	const [checkingSession, setCheckingSession] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function checkSession() {
			const { data: { user } } = await supabase.auth.getUser();
			if (cancelled) return;
			if (user) {
				await navigate({
					to: "/dashboard",
					replace: true
				});
				return;
			}
			setCheckingSession(false);
		}
		checkSession();
		return () => {
			cancelled = true;
		};
	}, [navigate]);
	function resetAlerts() {
		setError("");
		setMessage("");
	}
	function switchMethod(nextMethod) {
		setMethod(nextMethod);
		resetAlerts();
	}
	function validateFullName() {
		const name = fullName.trim();
		if (!name) {
			setError(t("signup.error.fullNameRequired"));
			return null;
		}
		if (name.length < 3) {
			setError(t("signup.error.fullNameShort"));
			return null;
		}
		return name;
	}
	async function handleEmailSignup(event) {
		event.preventDefault();
		resetAlerts();
		const name = validateFullName();
		if (!name) return;
		const normalizedEmail = email.trim().toLowerCase();
		if (!isValidEmail(normalizedEmail)) {
			setError(t("signup.error.invalidEmail"));
			return;
		}
		if (password.length < 6) {
			setError(t("signup.error.passwordShort"));
			return;
		}
		if (password !== confirmPassword) {
			setError(t("signup.error.passwordMismatch"));
			return;
		}
		setLoading(true);
		const { data, error: signupError } = await supabase.auth.signUp({
			email: normalizedEmail,
			password,
			options: { data: { full_name: name } }
		});
		setLoading(false);
		if (signupError) {
			setError(toFriendlyAuthError(signupError.message, t));
			return;
		}
		if (data.session) {
			await navigate({
				to: "/dashboard",
				replace: true
			});
			return;
		}
		setMessage(t("signup.message.created"));
		window.setTimeout(() => {
			navigate({
				to: "/login",
				replace: true
			});
		}, 1200);
	}
	async function handlePhoneSignup(event) {
		event.preventDefault();
		resetAlerts();
		const name = validateFullName();
		if (!name) return;
		const phoneNumber = normalizePakistanPhone(phone);
		if (!isValidPakistanMobile(phoneNumber)) {
			setError(t("signup.error.invalidPhone"));
			return;
		}
		if (password.length < 6) {
			setError(t("signup.error.passwordShort"));
			return;
		}
		if (password !== confirmPassword) {
			setError(t("signup.error.passwordMismatch"));
			return;
		}
		setLoading(true);
		const { data, error: signupError } = await supabase.auth.signUp({
			phone: phoneNumber,
			password,
			options: { data: {
				full_name: name,
				login_method: "phone_password"
			} }
		});
		setLoading(false);
		if (signupError) {
			setError(toFriendlyAuthError(signupError.message, t));
			return;
		}
		if (data.session) {
			await navigate({
				to: "/dashboard",
				replace: true
			});
			return;
		}
		setPhone(phoneNumber);
		setMessage(t("signup.message.created"));
		window.setTimeout(() => {
			navigate({
				to: "/login",
				replace: true
			});
		}, 1200);
	}
	if (checkingSession) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-main",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[2rem] border border-[#e8e0d1] bg-white p-6 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm font-bold text-stone-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-emerald-700" }), t("authPage.common.checkingSession")]
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-main",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap page-stack",
			dir: direction,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "home-hero animate-fade-up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "home-hero-inner !grid-cols-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "home-hero-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "home-hero-badge animate-fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "brand-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-emerald-900",
										children: t("signup.hero.badge")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "home-hero-kicker animate-fade-up delay-1",
									children: t("signup.hero.kicker")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "home-hero-title text-balance animate-fade-up delay-2",
									children: [
										t("signup.hero.title"),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "home-hero-accent",
											children: t("signup.hero.accent")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "home-hero-rule ajrak-rule animate-fade-in delay-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "home-hero-text text-pretty animate-fade-up delay-3",
									children: t("signup.hero.description")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-4 shadow-sm animate-fade-up delay-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-amber-700",
											children: t("signup.fee.label")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-lg font-black text-stone-950",
											children: [
												formatMembershipMoney(600),
												" + ",
												t("signup.fee.processingCharges")
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-6 text-amber-800",
											children: t("signup.fee.subtext")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePill, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 16 }),
											title: t("signup.feature.profile.title"),
											text: t("signup.feature.profile.text"),
											delay: "delay-2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePill, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { size: 16 }),
											title: t("signup.feature.otp.title"),
											text: t("signup.feature.otp.text"),
											delay: "delay-3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePill, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 16 }),
											title: t("signup.feature.ready.title"),
											text: t("signup.feature.ready.text"),
											delay: "delay-4"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur animate-fade-up delay-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-stone-500",
											children: t("signup.already.label")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-7 text-stone-600",
											children: t("signup.already.text")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/login",
												className: "secondary-btn pressable lift-hover",
												children: [t("signup.already.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
											})
										})
									]
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "soft-panel animate-scale-in rounded-[2rem] border-[#e8e0d1] bg-white p-5 shadow-[0_24px_70px_rgba(20,18,16,0.08)] sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "badge-soft bg-[var(--gold-pale)] text-[var(--gold)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), t("signup.form.badge")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title mt-4",
									children: t("signup.form.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-7 text-stone-600",
									children: t("signup.form.description")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 rounded-[1.25rem] border border-[var(--line)] bg-[var(--paper)] p-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodTab, {
									active: method === "email",
									onClick: () => switchMethod("email"),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 15 }),
									children: t("authPage.common.emailMethod")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodTab, {
									active: method === "phone",
									onClick: () => switchMethod("phone"),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { size: 15 }),
									children: t("authPage.common.mobilePassword")
								})]
							})
						}),
						method === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleEmailSignup,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.fullName"),
									htmlFor: "fullName",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "fullName",
										autoComplete: "name",
										value: fullName,
										onChange: (event) => {
											setFullName(event.target.value);
											resetAlerts();
										},
										required: true,
										className: "input-clean",
										placeholder: t("signup.fullName.placeholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.email"),
									htmlFor: "email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										type: "email",
										autoComplete: "email",
										value: email,
										onChange: (event) => {
											setEmail(event.target.value);
											resetAlerts();
										},
										required: true,
										className: "input-clean",
										placeholder: t("login.email.placeholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.password"),
									htmlFor: "password",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "password",
											type: showPassword ? "text" : "password",
											autoComplete: "new-password",
											value: password,
											onChange: (event) => {
												setPassword(event.target.value);
												resetAlerts();
											},
											required: true,
											minLength: 6,
											className: "input-clean pr-12",
											placeholder: t("signup.password.placeholder")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword((value) => !value),
											className: "absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900",
											"aria-label": showPassword ? t("authPage.common.hidePassword") : t("authPage.common.showPassword"),
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 17 })
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.confirmPassword"),
									htmlFor: "confirmPassword",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "confirmPassword",
										type: showPassword ? "text" : "password",
										autoComplete: "new-password",
										value: confirmPassword,
										onChange: (event) => {
											setConfirmPassword(event.target.value);
											resetAlerts();
										},
										required: true,
										minLength: 6,
										className: "input-clean",
										placeholder: t("signup.confirmPassword.placeholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBlock, {
									error,
									message
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: loading,
									className: "primary-btn pressable w-full disabled:cursor-not-allowed disabled:opacity-60",
									children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 16,
										className: "animate-spin"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), loading ? t("signup.submit.loading") : t("signup.submit.cta")]
								})
							]
						}) : null,
						method === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handlePhoneSignup,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[1.25rem] border border-[var(--line)] bg-[var(--paper)] p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-stone-500",
										children: t("authPage.common.mobilePassword")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-stone-900",
										children: t("signup.phone.step1Text")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.fullName"),
									htmlFor: "phoneFullName",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phoneFullName",
										autoComplete: "name",
										value: fullName,
										onChange: (event) => {
											setFullName(event.target.value);
											resetAlerts();
										},
										required: true,
										className: "input-clean",
										placeholder: t("signup.fullName.placeholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormField, {
									label: t("authPage.common.mobileNumber"),
									htmlFor: "phone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phone",
										type: "tel",
										inputMode: "tel",
										autoComplete: "tel",
										value: phone,
										onChange: (event) => {
											setPhone(event.target.value);
											resetAlerts();
										},
										required: true,
										className: "input-clean",
										placeholder: "03333300393"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-5 text-stone-500",
										children: t("authPage.common.phoneHint")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.password"),
									htmlFor: "phonePassword",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phonePassword",
											type: showPassword ? "text" : "password",
											autoComplete: "new-password",
											value: password,
											onChange: (event) => {
												setPassword(event.target.value);
												resetAlerts();
											},
											required: true,
											minLength: 6,
											className: "input-clean pr-12",
											placeholder: t("signup.password.placeholder")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword((value) => !value),
											className: "absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900",
											"aria-label": showPassword ? t("authPage.common.hidePassword") : t("authPage.common.showPassword"),
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 17 })
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: t("authPage.common.confirmPassword"),
									htmlFor: "phoneConfirmPassword",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phoneConfirmPassword",
										type: showPassword ? "text" : "password",
										autoComplete: "new-password",
										value: confirmPassword,
										onChange: (event) => {
											setConfirmPassword(event.target.value);
											resetAlerts();
										},
										required: true,
										minLength: 6,
										className: "input-clean",
										placeholder: t("signup.confirmPassword.placeholder")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertBlock, {
									error,
									message
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: loading,
									className: "primary-btn pressable w-full disabled:cursor-not-allowed disabled:opacity-60",
									children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 16,
										className: "animate-spin"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), loading ? t("signup.submit.loading") : t("signup.submit.cta")]
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-center text-sm text-stone-600",
							children: [
								t("signup.haveAccount"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "font-bold text-[var(--forest)]",
									children: t("signup.loginLink")
								})
							]
						})
					]
				})]
			})
		})
	});
}
function MethodTab({ active, onClick, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `inline-flex items-center justify-center gap-2 rounded-[1rem] px-4 py-3 text-sm font-bold transition ${active ? "bg-white text-[var(--forest)] shadow-sm" : "text-stone-600 hover:text-stone-900"}`,
		"aria-pressed": active,
		children: [icon, children]
	});
}
function FormField({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "mb-2 block text-sm font-semibold text-stone-700",
			children: label
		}), children]
	});
}
function AlertBlock({ error, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2 rounded-[1rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		role: "alert",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
			size: 16,
			className: "mt-0.5 shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
	}) : null, message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2 rounded-[1rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			size: 16,
			className: "mt-0.5 shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
	}) : null] });
}
function FeaturePill({ icon, title, text, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `soft-panel animate-fade-up ${delay} rounded-[1.25rem] border-white/70 bg-white/72 px-4 py-4 shadow-sm backdrop-blur`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--forest)]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold text-stone-900",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-stone-500",
				children: text
			})
		]
	});
}
function normalizePakistanPhone(value) {
	const digits = value.replace(/\D/g, "");
	if (digits.startsWith("0092")) return `+92${digits.slice(4, 14)}`;
	if (digits.startsWith("92")) return `+${digits.slice(0, 12)}`;
	if (digits.startsWith("0")) return `+92${digits.slice(1, 11)}`;
	if (digits.startsWith("3")) return `+92${digits.slice(0, 10)}`;
	return digits.startsWith("+") ? digits : `+${digits}`;
}
function isValidPakistanMobile(value) {
	return /^\+923\d{9}$/.test(value);
}
function isValidEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function toFriendlyAuthError(message, t) {
	const lower = message.toLowerCase();
	if (lower.includes("user already registered")) return t("signup.auth.alreadyRegistered");
	if (lower.includes("already registered")) return t("signup.auth.accountExists");
	if (lower.includes("password")) return t("signup.auth.passwordInvalid");
	if (lower.includes("phone")) return t("signup.auth.phoneFailed");
	if (lower.includes("email")) return t("signup.auth.emailFailed");
	return message;
}
//#endregion
export { SignupPage as component };
