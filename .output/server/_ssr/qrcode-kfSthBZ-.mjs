import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DuVlf4XG.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qrcode-kfSthBZ-.js
var import_jsx_runtime = require_jsx_runtime();
var MAX_CARD_DESIGNATIONS = 2;
function getMemberDesignationTitle(designation) {
	return designation?.title?.trim() || null;
}
function getMemberDesignationList(source, limit = MAX_CARD_DESIGNATIONS) {
	const designations = [...source.activeDesignations ?? [], ...source.activeDesignation ? [source.activeDesignation] : []];
	const seen = /* @__PURE__ */ new Set();
	const unique = [];
	for (const designation of designations) {
		const title = getMemberDesignationTitle(designation);
		if (!title) continue;
		const key = [
			title,
			designation.committeeName,
			designation.committeeLevelLabel,
			designation.committeeLocationLabel
		].filter(Boolean).join("|").toLowerCase();
		if (seen.has(key)) continue;
		seen.add(key);
		unique.push({
			...designation,
			title
		});
	}
	return unique.slice(0, Math.max(1, limit));
}
function getMemberDesignationSummary(source, limit = MAX_CARD_DESIGNATIONS) {
	return getMemberDesignationList(source, limit).map((designation) => designation.title).filter(Boolean).join(" / ") || null;
}
async function fetchActiveMemberCardDesignations(memberId, limit = MAX_CARD_DESIGNATIONS) {
	const { data, error } = await supabase.from("organization_committee_members").select([
		"designation_title",
		"tenure_start",
		"tenure_end",
		"sort_order",
		"created_at",
		"committee:organization_committees(id, committee_type, name, division, district, taluka, status)"
	].join(", ")).eq("member_id", memberId).eq("status", "active").order("sort_order", { ascending: true }).order("created_at", { ascending: false }).limit(20);
	if (error) {
		console.warn("Unable to load member card designations:", error.message);
		return [];
	}
	return (data ?? []).flatMap((row) => {
		const committee = Array.isArray(row.committee) ? row.committee[0] : row.committee;
		const title = row.designation_title?.trim();
		if (!title || committee?.status !== "active") return [];
		return [{
			title,
			committeeName: committee.name ?? null,
			committeeType: committee.committee_type ?? null,
			committeeLevelLabel: getCardCommitteeTypeLabel(committee.committee_type),
			committeeLocationLabel: getCardCommitteeLocationLabel(committee),
			tenureStart: row.tenure_start,
			tenureEnd: row.tenure_end,
			sortOrder: row.sort_order ?? 999,
			createdAt: row.created_at ?? ""
		}];
	}).sort((a, b) => {
		const levelRank = getCardCommitteeTypeRank(a.committeeType) - getCardCommitteeTypeRank(b.committeeType);
		if (levelRank !== 0) return levelRank;
		const orderRank = a.sortOrder - b.sortOrder;
		if (orderRank !== 0) return orderRank;
		return b.createdAt.localeCompare(a.createdAt);
	}).slice(0, Math.max(1, limit)).map(({ sortOrder: _sortOrder, createdAt: _createdAt, ...designation }) => designation);
}
function getCardCommitteeTypeLabel(value) {
	switch (value) {
		case "central": return "Central Executive Committee";
		case "central_advisory": return "Central Advisory Committee";
		case "provincial": return "Provincial";
		case "divisional": return "Divisional";
		case "district": return "District";
		case "taluka": return "Taluka";
		default: return "Organization Level";
	}
}
function getCardCommitteeTypeRank(value) {
	switch (value) {
		case "central": return 1;
		case "central_advisory": return 2;
		case "provincial": return 3;
		case "divisional": return 4;
		case "district": return 5;
		case "taluka": return 6;
		default: return 99;
	}
}
function getCardCommitteeLocationLabel(committee) {
	if (committee.committee_type === "central") return "Sindh / Central Executive Committee";
	if (committee.committee_type === "central_advisory") return "Sindh / Central Advisory Committee";
	if (committee.committee_type === "provincial") return "Sindh / Provincial";
	if (committee.committee_type === "divisional") return committee.division || "Division not set";
	if (committee.committee_type === "district") return committee.district || "District not set";
	return [committee.taluka, committee.district].filter(Boolean).join(", ") || "Taluka not set";
}
var CARD_WIDTH = 1280;
var SIGNATURE_PATH = "/mbjp/signature.png";
function MembershipCard({ side, member, photoUrl, logoUrl, flagUrl, qrUrl, verifyUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "relative isolate flex shrink-0 flex-col overflow-hidden rounded-[2rem] border border-yellow-500/40 bg-white text-slate-950 shadow-2xl ring-1 ring-emerald-950/10",
		style: {
			width: `${CARD_WIDTH}px`,
			minWidth: `${CARD_WIDTH}px`,
			height: `760px`
		},
		children: side === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFront, {
			member,
			photoUrl,
			logoUrl,
			flagUrl,
			qrUrl,
			verifyUrl
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, {
			member,
			logoUrl,
			flagUrl,
			qrUrl,
			verifyUrl
		})
	});
}
function CardFront({ member, photoUrl, logoUrl, flagUrl, qrUrl, verifyUrl }) {
	const profession = member.profession || "Not provided";
	const cardDesignations = getMemberDesignationList(member, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			logoUrl,
			label: "Digital Member ID",
			title: "MARWARDI BHATTI JAMAAT PAKISTAN",
			subtitle: "Official verified membership card",
			badge: "Verified"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-0 flex-1 overflow-hidden bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftBackground, {
				logoUrl,
				flagUrl
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid h-full grid-cols-[270px_1fr_230px] gap-8 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-[2.2rem] bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-500 p-[5px] shadow-xl",
								children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photoUrl,
									alt: `${member.full_name} profile photo`,
									className: "h-[224px] w-[224px] rounded-[1.9rem] border-4 border-white object-cover object-top",
									draggable: false
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-[224px] w-[224px] items-center justify-center rounded-[1.9rem] border-4 border-white bg-slate-100 text-[15px] font-bold text-slate-500",
									children: "No photo"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[1.35rem] border border-yellow-400 bg-slate-950 px-4 py-3 text-center shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-black uppercase tracking-[0.22em] text-yellow-300",
									children: "Member No"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 break-all text-[20px] font-black leading-tight text-white",
									children: member.member_no || "Not issued"
								})]
							}),
							cardDesignations.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[1.1rem] border border-emerald-200 bg-emerald-50/95 px-3 py-2 text-center shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700",
									children: "MBJP Designations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 space-y-1",
									children: cardDesignations.map((designation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-white/70 px-2 py-1 ring-1 ring-emerald-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-1 break-words text-[14px] font-black leading-tight text-slate-950",
											children: designation.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 line-clamp-1 break-words text-[8.5px] font-black uppercase tracking-wide text-emerald-800",
											children: [designation.committeeLevelLabel, designation.committeeLocationLabel].filter(Boolean).join(" · ")
										})]
									}, `${designation.title}-${designation.committeeName ?? designation.committeeLevelLabel ?? ""}`))
								})]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[16px] font-black uppercase tracking-[0.18em] text-slate-500",
									children: "Member Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-[46px] font-black leading-[1.04] tracking-tight text-slate-950",
									children: member.full_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-slate-950 via-yellow-500 to-yellow-300" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-x-12 gap-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Father Name",
										value: member.father_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "District",
										value: member.district
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Taluka",
										value: member.taluka || "Not provided"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Profession",
										value: profession
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Approved Date",
										value: formatDate(member.approved_at)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
										label: "Status",
										value: "Approved"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[1.4rem] border border-slate-200 bg-white/90 px-5 py-4 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-black uppercase tracking-[0.18em] text-slate-500",
									children: "Verification Notice"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[15px] font-semibold leading-6 text-slate-700",
									children: "This card is valid only when the QR verification page confirms the current membership status."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrPanel, {
						qrUrl,
						verifyUrl
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, { children: "This card is digitally generated by Marwardi Bhatti Jamaat Pakistan. QR verification confirms the current membership record." })
	] });
}
function CardBack({ member, logoUrl, flagUrl, qrUrl, verifyUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			logoUrl,
			label: "Marwardi Bhatti Jamaat Pakistan",
			title: "CARDHOLDER DETAILS",
			subtitle: "Address, emergency contact, verification and issuing authority",
			badge: "Card Details"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-0 flex-1 overflow-hidden bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoftBackground, {
				logoUrl,
				flagUrl
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid h-full min-h-0 grid-cols-[1fr_260px] gap-5 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid h-full min-h-0 grid-cols-2 grid-rows-[0.95fr_1.2fr_1.2fr] gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BackPanel, {
							title: "Residential Address",
							tone: "gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-3 break-words text-[15px] font-black leading-snug text-slate-950",
								children: member.address || "Full street address not provided."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 break-words text-[13px] font-bold text-slate-800",
								children: [
									member.taluka || "Taluka not provided",
									", ",
									member.district
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackPanel, {
							title: "Emergency Contact",
							children: member.emergency_contact_name || member.emergency_contact_mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-1 break-words text-[15px] font-black text-slate-950",
									children: member.emergency_contact_name || "Name not provided"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[13px] font-bold text-slate-700",
									children: member.emergency_contact_relation || "Relation not provided"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[15px] font-black text-slate-950",
									children: formatMobile(member.emergency_contact_mobile)
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-black text-slate-950",
								children: "Not provided."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackPanel, {
							title: "Member Information",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid w-full grid-cols-3 items-start gap-x-4 gap-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "DOB",
										value: formatDate(member.date_of_birth)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "Gender",
										value: member.gender || "Not provided"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "Blood",
										value: member.blood_group || "Not provided"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "Education",
										value: member.education || "Not provided"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "CNIC",
										value: formatCnic(member.cnic)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "Mobile",
										value: formatMobile(member.mobile)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniInfo, {
										label: "Designation",
										value: getMemberDesignationSummary(member, 2) || "Member",
										className: "col-span-3 rounded-xl bg-white/65 px-2.5 py-1.5 ring-1 ring-emerald-100",
										valueClassName: "line-clamp-2 text-[12px] leading-[1.16]"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BackPanel, {
							title: "Verification Instructions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Scan the QR code or open the verification URL." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "Match verified name, member number, district and approval status before accepting this card as valid."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackPanel, {
							title: "Terms and Conditions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc space-y-1 pl-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "This card remains property of Marwardi Bhatti Jamaat Pakistan." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Misuse, alteration or transfer is not permitted." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Validity depends on live QR verification status." })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BackPanel, {
							title: "Issuing Authority",
							tone: "dark",
							contentClassName: "flex flex-1 flex-col justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-[108px] items-center overflow-hidden rounded-2xl bg-white/80 px-2 ring-1 ring-slate-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: SIGNATURE_PATH,
										alt: "Authorized signature",
										className: "h-[104px] w-[520px] max-w-full object-contain object-left brightness-75 contrast-150 saturate-0",
										style: {
											transform: "scaleX(1.1)",
											transformOrigin: "left center"
										},
										draggable: false
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-[2px] w-full bg-slate-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[17px] font-black leading-none text-slate-950",
									children: "Authorized Signature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[12px] font-black uppercase tracking-[0.08em] text-slate-600",
									children: "GENERAL SECRETARY"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex h-full min-h-0 flex-col justify-between gap-3 rounded-[1.5rem] border border-slate-200 bg-white/95 p-4 shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-yellow-400 bg-slate-950 px-3 py-3 text-center shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-black uppercase tracking-[0.16em] text-yellow-300",
								children: "Issue No / Version"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 break-all text-[16px] font-black text-white",
								children: member.member_no ? `${member.member_no} / v1` : "Pending / v1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-white p-2 text-center shadow-sm ring-1 ring-slate-200",
							children: [qrUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: qrUrl,
								alt: "Verification QR code",
								className: "mx-auto h-[176px] w-[176px] rounded-xl bg-white p-1",
								draggable: false
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex h-[176px] w-[176px] items-center justify-center rounded-xl bg-slate-100 text-[12px] font-bold text-slate-500 ring-1 ring-slate-200",
								children: "QR unavailable"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center text-[12px] font-black uppercase tracking-[0.16em] text-slate-500",
								children: "Scan to verify"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-slate-200 bg-slate-50 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-black uppercase tracking-wide text-slate-500",
								children: "Verification URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 break-all text-[11px] font-bold leading-4 text-slate-950",
								children: formatVerifyUrlForDisplay(verifyUrl) || "Verification link unavailable"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-yellow-300 bg-yellow-50 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-black uppercase tracking-wide text-yellow-800",
									children: "Organization"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[14px] font-black leading-4 text-slate-950",
									children: "Marwardi Bhatti Jamaat Pakistan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold text-slate-600",
									children: "Sindh, Pakistan"
								})
							]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, { children: "This card is valid only when the QR verification page confirms the membership as approved and active." })
	] });
}
function CardHeader({ logoUrl, label, title, subtitle, badge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative h-[182px] shrink-0 overflow-hidden bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 px-8 py-6 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-yellow-300/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-white/8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.20),transparent_34%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-[5px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-600" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { logoUrl }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 max-w-[900px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-black uppercase tracking-[0.34em] text-yellow-300",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 whitespace-nowrap text-[39px] font-black uppercase leading-[0.96] tracking-[-0.03em] text-white",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[15px] font-semibold text-emerald-50",
								children: subtitle
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-[160px] whitespace-nowrap rounded-[1.1rem] border border-yellow-300/70 bg-yellow-300 px-6 py-4 text-center text-[17px] font-black uppercase tracking-wide text-slate-950 shadow-lg",
					children: badge
				})]
			})
		]
	});
}
function LogoMark({ logoUrl }) {
	return logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logoUrl,
		alt: "Marwardi Bhatti Jamaat Pakistan logo",
		className: "mt-1 h-24 w-24 rounded-full border-2 border-yellow-400 bg-white object-cover object-top shadow-xl",
		draggable: false
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 flex h-24 w-24 items-center justify-center rounded-full border-2 border-yellow-400 bg-slate-950 text-xl font-black text-yellow-300 shadow-xl",
		children: "MBJP"
	});
}
function SoftBackground({ logoUrl, flagUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [flagUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: flagUrl,
			alt: "",
			className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.09] mix-blend-multiply",
			draggable: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-white/[0.80]" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.94] via-white/[0.84] to-white/[0.74]" })
	] }) : null, logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logoUrl,
		alt: "",
		className: "pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.04]",
		draggable: false
	}) : null] });
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[13px] font-black uppercase tracking-[0.16em] text-slate-500",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 break-words text-[21px] font-black leading-tight text-slate-950",
		children: value
	})] });
}
function MiniInfo({ label, value, className = "", valueClassName = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] font-black uppercase tracking-wide text-emerald-800",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: valueClassName ? `mt-0.5 break-words font-black text-slate-950 ${valueClassName}` : "mt-0.5 break-words text-[13px] font-black leading-[1.15] text-slate-950",
			children: value
		})]
	});
}
function BackPanel({ title, children, tone = "light", contentClassName = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `flex min-h-0 flex-col overflow-hidden rounded-[1.05rem] border p-3.5 shadow-sm ${tone === "gold" ? "border-yellow-300 bg-yellow-50/95" : tone === "dark" ? "border-slate-300 bg-slate-50/95" : "border-slate-200 bg-white/90"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "shrink-0 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-2 min-h-0 text-[13px] font-semibold leading-[1.38] text-slate-700 ${contentClassName}`,
			children
		})]
	});
}
function QrPanel({ qrUrl, verifyUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[365px] w-[220px] flex-col items-center justify-center rounded-[2rem] border border-slate-200 bg-white/95 px-4 py-5 shadow-lg",
			children: [
				qrUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: qrUrl,
					alt: "Verification QR code",
					className: "h-[170px] w-[170px] rounded-xl bg-white p-1.5 ring-1 ring-slate-200",
					draggable: false
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-[170px] w-[170px] items-center justify-center rounded-xl bg-slate-100 text-[12px] font-bold text-slate-500 ring-1 ring-slate-200",
					children: "QR unavailable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-center text-[14px] font-black uppercase tracking-[0.16em] text-slate-500",
					children: "Scan to verify"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-3 break-all text-center text-[11px] font-bold leading-4 text-slate-500",
					children: formatVerifyUrlForDisplay(verifyUrl) || "Verification link unavailable"
				})
			]
		})
	});
}
function formatVerifyUrlForDisplay(value) {
	if (!value) return "";
	try {
		const url = new URL(value);
		return `${url.host}${url.pathname}`;
	} catch {
		return value.replace(/^https?:\/\//, "");
	}
}
function CardFooter({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "shrink-0 border-t border-slate-200 bg-slate-50 px-8 py-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11.5px] font-semibold leading-5 text-slate-500",
			children
		})
	});
}
function formatDate(value) {
	if (!value) return "N/A";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "N/A";
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function formatCnic(value) {
	if (!value) return "N/A";
	const digits = value.replace(/\D/g, "");
	if (digits.length === 13) return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
	return value;
}
function formatMobile(value) {
	if (!value) return "N/A";
	const digits = value.replace(/\D/g, "");
	if (digits.startsWith("92") && digits.length === 12) return `+${digits}`;
	if (digits.startsWith("0") && digits.length === 11) return digits;
	if (digits.startsWith("3") && digits.length === 10) return `0${digits}`;
	return value;
}
async function waitForImages(element) {
	const images = Array.from(element.querySelectorAll("img"));
	await Promise.all(images.map((image) => {
		if (image.complete && image.naturalWidth > 0) return Promise.resolve();
		return new Promise((resolve) => {
			const done = () => resolve();
			image.addEventListener("load", done, { once: true });
			image.addEventListener("error", done, { once: true });
		});
	}));
}
async function prepareCardElementForExport(element) {
	await waitForImages(element);
	if (document.fonts?.ready) await document.fonts.ready;
	await new Promise((resolve) => window.requestAnimationFrame(resolve));
}
async function elementToPngDataUrl(element, options) {
	const { toPng } = await import("../_libs/html-to-image.mjs").then((n) => n.t);
	await prepareCardElementForExport(element);
	return toPng(element, {
		cacheBust: options?.cacheBust ?? true,
		pixelRatio: options?.pixelRatio ?? 2.5,
		backgroundColor: options?.backgroundColor ?? "#ffffff",
		fontEmbedCSS: options?.fontEmbedCSS ?? "",
		width: options?.width,
		height: options?.height,
		canvasWidth: options?.canvasWidth,
		canvasHeight: options?.canvasHeight,
		style: {
			margin: "0",
			transform: "none",
			...options?.style
		}
	});
}
async function exportElementAsPng(element, filename, options) {
	downloadDataUrl(await elementToPngDataUrl(element, options), filename);
}
function downloadDataUrl(dataUrl, filename) {
	const link = document.createElement("a");
	link.href = dataUrl;
	link.download = filename;
	link.click();
}
async function generateQrDataUrl(value, options) {
	const { default: QRCode } = await import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	return QRCode.toDataURL(value, options);
}
//#endregion
export { generateQrDataUrl as a, fetchActiveMemberCardDesignations as i, MembershipCard as n, exportElementAsPng as r, CARD_WIDTH as t };
