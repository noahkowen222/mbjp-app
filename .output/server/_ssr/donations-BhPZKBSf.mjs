import { f as getFinancePurposeLabel } from "./finance-Cn3yAGsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations-BhPZKBSf.js
function formatLeaderboardPurposes(purposes) {
	if (!purposes?.length) return "General Fund";
	return purposes.map((purpose) => getFinancePurposeLabel(purpose)).join(" + ");
}
function getDonorBadge(total) {
	if (total >= 1e5) return "Diamond Supporter";
	if (total >= 5e4) return "Platinum Supporter";
	if (total >= 25e3) return "Gold Supporter";
	if (total >= 1e4) return "Silver Supporter";
	if (total >= 5e3) return "Bronze Supporter";
	return "Community Supporter";
}
function getRankLabel(rank) {
	if (rank === 1) return "Top Donor";
	if (rank === 2) return "Major Supporter";
	if (rank === 3) return "Community Champion";
	return "MBJP Supporter";
}
function buildDonationReferenceHint(memberNo) {
	return memberNo ? `${memberNo} / donation reference` : "membership no / donation reference";
}
//#endregion
export { getRankLabel as i, formatLeaderboardPurposes as n, getDonorBadge as r, buildDonationReferenceHint as t };
