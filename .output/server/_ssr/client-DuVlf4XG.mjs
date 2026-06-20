import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-DuVlf4XG.js
var isBrowser = typeof window !== "undefined";
function getRequiredPublicEnv(name) {
	const value = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}[name]?.trim();
	if (!value) throw new Error(`Missing required public environment variable: ${name}`);
	return value;
}
function getSupabaseUrl() {
	const value = getRequiredPublicEnv("VITE_SUPABASE_URL");
	try {
		new URL(value);
	} catch {
		throw new Error("VITE_SUPABASE_URL must be a valid URL.");
	}
	return value;
}
function getSupabaseAnonKey() {
	const value = getRequiredPublicEnv("VITE_SUPABASE_ANON_KEY");
	if (value.length < 40) throw new Error("VITE_SUPABASE_ANON_KEY looks invalid.");
	const role = readJwtRole(value);
	if (role && role !== "anon") throw new Error("VITE_SUPABASE_ANON_KEY must be the Supabase anon public key. Never expose the service-role key in VITE_* variables.");
	return value;
}
function readJwtRole(jwt) {
	try {
		const [, payload] = jwt.split(".");
		if (!payload) return null;
		const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
		const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
		const decoded = typeof atob === "function" ? atob(padded) : Buffer.from(padded, "base64").toString("utf8");
		const parsed = JSON.parse(decoded);
		return typeof parsed.role === "string" ? parsed.role : null;
	} catch {
		return null;
	}
}
var supabase = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
	auth: {
		persistSession: isBrowser,
		autoRefreshToken: isBrowser,
		detectSessionInUrl: isBrowser,
		flowType: "pkce",
		storageKey: "mbjp-app-auth"
	},
	global: { headers: { "X-Client-Info": "mbjp-app-browser" } }
});
//#endregion
export { supabase as t };
