import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/designation-card-D2I8u0Rj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DesignationCardRedirectPage() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate({
			to: "/card",
			replace: true
		});
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold text-slate-600",
				children: "Office bearer designations now appear on the standard MBJP membership card."
			})
		})
	});
}
//#endregion
export { DesignationCardRedirectPage as component };
