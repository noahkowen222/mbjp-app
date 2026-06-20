import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./designation-card-BJJWcS21.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/designation-card-DYH4ef8P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDesignationCardRedirectPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate({
			to: "/admin/members/$id/card",
			params: { id },
			replace: true
		});
	}, [id, navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold text-slate-600",
				children: "Designation preview now opens the standard MBJP membership card."
			})
		})
	});
}
//#endregion
export { AdminDesignationCardRedirectPage as component };
