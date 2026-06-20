import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-w8NrS-lk.js
var cachedAdminClient = null;
function assertServerOnly() {
	if (typeof window !== "undefined") throw new Error("Supabase admin client can only be used on the server. Do not import src/lib/supabase/admin.ts in client components or browser routes.");
}
function getProcessEnv() {
	assertServerOnly();
	if (typeof process === "undefined" || !process.env) throw new Error("Server environment variables are not available.");
	return process.env;
}
function getRequiredEnv(name) {
	const value = getProcessEnv()[name]?.trim();
	if (!value) throw new Error(`Missing required server environment variable: ${name}`);
	return value;
}
function getSupabaseUrl() {
	const value = getRequiredEnv("SUPABASE_URL");
	try {
		new URL(value);
	} catch {
		throw new Error("SUPABASE_URL must be a valid URL.");
	}
	return value;
}
function getServiceRoleKey() {
	const value = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
	if (value.length < 40) throw new Error("SUPABASE_SERVICE_ROLE_KEY looks invalid.");
	return value;
}
function createSupabaseAdminClient(options) {
	assertServerOnly();
	if (!options?.forceNew && cachedAdminClient) return cachedAdminClient;
	const client = createClient(getSupabaseUrl(), getServiceRoleKey(), {
		auth: {
			persistSession: false,
			autoRefreshToken: false,
			detectSessionInUrl: false
		},
		global: { headers: { "X-Client-Info": "mbjp-app-admin-server" } }
	});
	if (!options?.forceNew) cachedAdminClient = client;
	return client;
}
//#endregion
export { createSupabaseAdminClient as t };
