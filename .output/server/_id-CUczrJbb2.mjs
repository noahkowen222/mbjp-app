import { i as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { D as PenLine, I as LoaderCircle, S as Save, ht as CircleCheck, kt as ArrowLeft, p as Trash2, r as Users, s as UserPlus, v as ShieldAlert, y as Search } from "./_libs/lucide-react.mjs";
import { _ as searchApprovedMembers, c as fetchCommitteeDetails, d as formatCommitteeDate, f as getCommitteeLocationLabel, g as removeCommitteeMember, h as getCommitteeTypeLabel, m as getCommitteeStatusLabel, n as committeeStatusOptions, o as currentUserCanManageCommittees, p as getCommitteeStatusClass, r as committeeTypeOptions, t as addCommitteeMember, u as fetchDesignations, v as updateCommittee, y as updateCommitteeMember } from "./_ssr/committees-BBqoo4Av.mjs";
import { t as Route } from "./_id-BIyvw3wQ.mjs";
import { t as AdminShell } from "./_ssr/AdminShell-DksluTlX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CUczrJbb2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";
function AdminCommitteeDetailPage() {
	const { id } = Route.useParams();
	const [committee, setCommittee] = (0, import_react.useState)(null);
	const [designations, setDesignations] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [memberSaving, setMemberSaving] = (0, import_react.useState)(false);
	const [memberSearching, setMemberSearching] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [memberSearch, setMemberSearch] = (0, import_react.useState)("");
	const [memberResults, setMemberResults] = (0, import_react.useState)([]);
	const [selectedMember, setSelectedMember] = (0, import_react.useState)(null);
	const [editingMemberId, setEditingMemberId] = (0, import_react.useState)(null);
	const [limitSearchToCommitteeArea, setLimitSearchToCommitteeArea] = (0, import_react.useState)(true);
	const [committeeForm, setCommitteeForm] = (0, import_react.useState)({
		committeeType: "central",
		name: "",
		division: "",
		district: "",
		taluka: "",
		tenureStart: "",
		tenureEnd: "",
		status: "active",
		publicDisplay: true,
		notes: ""
	});
	const [memberForm, setMemberForm] = (0, import_react.useState)({
		designationId: "",
		designationTitle: "",
		status: "active",
		sortOrder: "1",
		tenureStart: "",
		tenureEnd: "",
		appointmentNotes: ""
	});
	const committeeMembers = (0, import_react.useMemo)(() => {
		return [...committee?.members ?? []].sort((a, b) => {
			if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
			return a.designation_title.localeCompare(b.designation_title);
		});
	}, [committee]);
	const activeOfficeBearers = (0, import_react.useMemo)(() => committeeMembers.filter((member) => member.status === "active"), [committeeMembers]);
	const selectedDesignationTaken = (0, import_react.useMemo)(() => {
		const normalizedTitle = memberForm.designationTitle.trim().toLowerCase();
		if (!normalizedTitle) return null;
		return activeOfficeBearers.find((member) => {
			if (member.id === editingMemberId) return false;
			return member.designation_title.trim().toLowerCase() === normalizedTitle;
		});
	}, [
		activeOfficeBearers,
		editingMemberId,
		memberForm.designationTitle
	]);
	const selectedMemberAlreadyAssigned = (0, import_react.useMemo)(() => {
		if (!selectedMember) return null;
		return activeOfficeBearers.find((member) => member.member_id === selectedMember.id && member.id !== editingMemberId);
	}, [
		activeOfficeBearers,
		editingMemberId,
		selectedMember
	]);
	const memberSearchFilters = (0, import_react.useMemo)(() => {
		if (!limitSearchToCommitteeArea) return { requireMemberNo: true };
		if (committeeForm.committeeType === "central" || committeeForm.committeeType === "central_advisory" || committeeForm.committeeType === "provincial" || committeeForm.committeeType === "divisional") return { requireMemberNo: true };
		if (committeeForm.committeeType === "district") return {
			district: committeeForm.district.trim() || null,
			requireMemberNo: true
		};
		return {
			district: committeeForm.district.trim() || null,
			taluka: committeeForm.taluka.trim() || null,
			requireMemberNo: true
		};
	}, [
		committeeForm.committeeType,
		committeeForm.division,
		committeeForm.district,
		committeeForm.taluka,
		limitSearchToCommitteeArea
	]);
	const searchScopeLabel = (0, import_react.useMemo)(() => {
		if (!limitSearchToCommitteeArea || committeeForm.committeeType === "central" || committeeForm.committeeType === "central_advisory" || committeeForm.committeeType === "provincial") return "Searching all approved MBJP members with issued member numbers.";
		if (committeeForm.committeeType === "divisional") return committeeForm.division.trim() ? `Searching approved members for ${committeeForm.division.trim()} level assignment.` : "Add committee division first or turn off area filter.";
		if (committeeForm.committeeType === "district") return committeeForm.district.trim() ? `Searching approved members in ${committeeForm.district.trim()}.` : "Add committee district first or turn off area filter.";
		const parts = [committeeForm.taluka.trim(), committeeForm.district.trim()].filter(Boolean);
		return parts.length ? `Searching approved members in ${parts.join(", ")}.` : "Add committee district/taluka first or turn off area filter.";
	}, [
		committeeForm.committeeType,
		committeeForm.division,
		committeeForm.district,
		committeeForm.taluka,
		limitSearchToCommitteeArea
	]);
	(0, import_react.useEffect)(() => {
		loadDetails();
	}, [id]);
	(0, import_react.useEffect)(() => {
		if (!committee) return;
		let cancelled = false;
		async function loadScopedDesignations() {
			try {
				const designationList = await fetchDesignations(committeeForm.committeeType);
				if (!cancelled) setDesignations(designationList.filter((item) => item.is_active));
			} catch (err) {
				if (!cancelled) setMessage(err instanceof Error ? err.message : "Failed to load designations.");
			}
		}
		loadScopedDesignations();
		return () => {
			cancelled = true;
		};
	}, [committee, committeeForm.committeeType]);
	(0, import_react.useEffect)(() => {
		if (editingMemberId) return;
		const query = memberSearch.trim();
		if (query.length < 2) {
			setMemberResults([]);
			setMemberSearching(false);
			return;
		}
		let cancelled = false;
		setMemberSearching(true);
		const timer = window.setTimeout(() => {
			searchApprovedMembers(query, memberSearchFilters).then((results) => {
				if (!cancelled) setMemberResults(results);
			}).catch((err) => {
				if (!cancelled) {
					setMessage(err instanceof Error ? err.message : "Member search failed.");
					setMemberResults([]);
				}
			}).finally(() => {
				if (!cancelled) setMemberSearching(false);
			});
		}, 350);
		return () => {
			cancelled = true;
			window.clearTimeout(timer);
		};
	}, [
		editingMemberId,
		memberSearch,
		memberSearchFilters
	]);
	async function loadDetails() {
		setLoading(true);
		setMessage("");
		try {
			if (!await currentUserCanManageCommittees()) {
				setMessage("Only admin or super admin can manage committees and designations.");
				setCommittee(null);
				return;
			}
			const details = await fetchCommitteeDetails(id);
			if (!details) {
				setMessage("Level unit not found.");
				setCommittee(null);
				return;
			}
			const designationList = await fetchDesignations(details.committee_type);
			setCommittee(details);
			setDesignations(designationList.filter((item) => item.is_active));
			setCommitteeForm({
				committeeType: details.committee_type,
				name: details.name,
				division: details.division ?? "",
				district: details.district ?? "",
				taluka: details.taluka ?? "",
				tenureStart: details.tenure_start ?? "",
				tenureEnd: details.tenure_end ?? "",
				status: details.status,
				publicDisplay: details.public_display,
				notes: details.notes ?? ""
			});
			setMemberForm((current) => ({
				...current,
				sortOrder: String((details.members?.length ?? 0) + 1)
			}));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to load committee.");
		} finally {
			setLoading(false);
		}
	}
	async function handleCommitteeSave(event) {
		event.preventDefault();
		setSaving(true);
		setMessage("");
		try {
			if (!committeeForm.name.trim()) throw new Error("Committee name is required.");
			if (committeeForm.committeeType === "divisional" && !committeeForm.division.trim()) throw new Error("Division is required for divisional level unit.");
			if ((committeeForm.committeeType === "district" || committeeForm.committeeType === "taluka") && !committeeForm.district.trim()) throw new Error("District is required for district/taluka level units.");
			if (committeeForm.committeeType === "taluka" && !committeeForm.taluka.trim()) throw new Error("Taluka is required for taluka level unit.");
			await updateCommittee(id, {
				committee_type: committeeForm.committeeType,
				name: committeeForm.name.trim(),
				division: committeeForm.committeeType === "divisional" ? committeeForm.division.trim() : null,
				district: committeeForm.committeeType === "district" || committeeForm.committeeType === "taluka" ? committeeForm.district.trim() : null,
				taluka: committeeForm.committeeType === "taluka" ? committeeForm.taluka.trim() : null,
				tenure_start: committeeForm.tenureStart || null,
				tenure_end: committeeForm.tenureEnd || null,
				status: committeeForm.status,
				public_display: committeeForm.publicDisplay,
				notes: committeeForm.notes.trim() || null
			});
			setMessage("Committee updated successfully.");
			await loadDetails();
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to update committee.");
		} finally {
			setSaving(false);
		}
	}
	async function handleMemberSearch() {
		const query = memberSearch.trim();
		if (query.length < 2) {
			setMessage("Enter at least 2 characters to search approved members.");
			return;
		}
		setMemberSearching(true);
		setMessage("");
		try {
			setMemberResults(await searchApprovedMembers(query, memberSearchFilters));
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Member search failed.");
			setMemberResults([]);
		} finally {
			setMemberSearching(false);
		}
	}
	function handleCommitteeTypeChange(value) {
		setCommitteeForm((current) => ({
			...current,
			committeeType: value,
			division: value === "divisional" ? current.division : "",
			district: value === "district" || value === "taluka" ? current.district : "",
			taluka: value === "taluka" ? current.taluka : ""
		}));
		resetMemberForm({ keepSearch: true });
	}
	function handleDesignationChange(value) {
		const selectedDesignation = designations.find((item) => item.id === value);
		setMemberForm((current) => ({
			...current,
			designationId: value,
			designationTitle: selectedDesignation?.title ?? current.designationTitle
		}));
	}
	function selectMember(member) {
		setSelectedMember(member);
		setMemberSearch(`${member.full_name} ${member.member_no ?? ""}`.trim());
	}
	function startEditMember(member) {
		setEditingMemberId(member.id);
		setSelectedMember(null);
		setMemberSearch("");
		setMemberResults([]);
		setMemberForm({
			designationId: member.designation_id ?? "",
			designationTitle: member.designation_title,
			status: member.status,
			sortOrder: String(member.sort_order),
			tenureStart: member.tenure_start ?? "",
			tenureEnd: member.tenure_end ?? "",
			appointmentNotes: member.appointment_notes ?? ""
		});
	}
	function resetMemberForm(options) {
		setEditingMemberId(null);
		setSelectedMember(null);
		if (!options?.keepSearch) setMemberSearch("");
		setMemberResults([]);
		setMemberForm({
			designationId: "",
			designationTitle: "",
			status: "active",
			sortOrder: String((committee?.members.length ?? 0) + 1),
			tenureStart: "",
			tenureEnd: "",
			appointmentNotes: ""
		});
	}
	async function handleMemberSubmit(event) {
		event.preventDefault();
		setMemberSaving(true);
		setMessage("");
		try {
			if (!memberForm.designationTitle.trim()) throw new Error("Designation title is required.");
			const payload = {
				designation_id: memberForm.designationId || null,
				designation_title: memberForm.designationTitle.trim(),
				status: memberForm.status,
				sort_order: Number(memberForm.sortOrder) || 1,
				tenure_start: memberForm.tenureStart || null,
				tenure_end: memberForm.tenureEnd || null,
				appointment_notes: memberForm.appointmentNotes.trim() || null
			};
			if (editingMemberId) {
				await updateCommitteeMember(editingMemberId, payload);
				setMessage("Assigned designation updated successfully.");
			} else {
				if (!selectedMember) throw new Error("Select an approved member first.");
				if (!selectedMember.member_no) throw new Error("Selected member must have an issued member number.");
				if (selectedMemberAlreadyAssigned) throw new Error(`${selectedMember.full_name} already has an active designation in this unit as ${selectedMemberAlreadyAssigned.designation_title}. Edit that record or remove it first.`);
				await addCommitteeMember({
					committee_id: id,
					member: selectedMember,
					...payload
				});
				setMessage("Designation assigned successfully.");
			}
			resetMemberForm();
			await loadDetails();
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to save designation assignment.");
		} finally {
			setMemberSaving(false);
		}
	}
	async function handleRemoveMember(memberId) {
		if (!window.confirm("Remove this member from this level unit record?")) return;
		setMessage("");
		try {
			await removeCommitteeMember(memberId);
			setMessage("Designation assignment removed.");
			await loadDetails();
		} catch (err) {
			setMessage(err instanceof Error ? err.message : "Failed to remove designation assignment.");
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Level Unit Detail",
		subtitle: "Manage level unit information and member designation assignments.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "Loading level unit details..." })
			})
		})
	});
	if (!committee) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Level Unit Detail",
		subtitle: "Manage level unit information and member designation assignments.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
					message: message || "Level unit not found.",
					tone: "error"
				})
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Level Unit Detail",
		subtitle: "Manage level unit information and member designation assignments.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-nested-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-6 sm:px-4 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/committees",
							className: "inline-flex items-center gap-2 text-sm font-black text-emerald-800 no-underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to Organization Levels"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
							className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-[0.22em] text-emerald-700",
										children: getCommitteeTypeLabel(committee.committee_type)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
										children: committee.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm leading-6 text-slate-600",
										children: [
											getCommitteeLocationLabel(committee),
											" · Tenure",
											" ",
											formatCommitteeDate(committee.tenure_start),
											" to ",
											formatCommitteeDate(committee.tenure_end)
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-4 py-2 text-xs font-black uppercase ring-1 ${getCommitteeStatusClass(committee.status)}`,
									children: getCommitteeStatusLabel(committee.status)
								})]
							})
						}),
						message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, {
							message,
							tone: isErrorMessage(message) ? "error" : "default"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-6 xl:grid-cols-[430px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleCommitteeSave,
									className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 22 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-black text-slate-950",
											children: "Level Unit Details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-500",
											children: "Update level, location and tenure."
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Level",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: committeeForm.committeeType,
													onChange: (event) => handleCommitteeTypeChange(event.target.value),
													className: inputClass,
													children: committeeTypeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: item.value,
														children: item.label
													}, item.value))
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Name",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: committeeForm.name,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														name: event.target.value
													})),
													className: inputClass
												})
											}),
											committeeForm.committeeType === "central" || committeeForm.committeeType === "central_advisory" || committeeForm.committeeType === "provincial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-900",
												children: committeeForm.committeeType === "central" ? "Central Executive Committee covers Sindh / Central level, so no area field is required." : committeeForm.committeeType === "central_advisory" ? "Central Advisory Committee covers Sindh / Central advisory level, so no area field is required." : "Provincial level covers Sindh / Provincial level, so no district or taluka field is required."
											}) : null,
											committeeForm.committeeType === "divisional" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Division",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: committeeForm.division,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														division: event.target.value
													})),
													className: inputClass,
													placeholder: "Mirpur Khas Division"
												})
											}) : null,
											committeeForm.committeeType === "district" || committeeForm.committeeType === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "District",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: committeeForm.district,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														district: event.target.value
													})),
													className: inputClass,
													placeholder: "Umerkot"
												})
											}) : null,
											committeeForm.committeeType === "taluka" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Taluka",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: committeeForm.taluka,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														taluka: event.target.value
													})),
													className: inputClass,
													placeholder: "Kunri"
												})
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Tenure Start",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "date",
														value: committeeForm.tenureStart,
														onChange: (event) => setCommitteeForm((current) => ({
															...current,
															tenureStart: event.target.value
														})),
														className: inputClass
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Tenure End",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "date",
														value: committeeForm.tenureEnd,
														onChange: (event) => setCommitteeForm((current) => ({
															...current,
															tenureEnd: event.target.value
														})),
														className: inputClass
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Status",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: committeeForm.status,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														status: event.target.value
													})),
													className: inputClass,
													children: committeeStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: item.value,
														children: item.label
													}, item.value))
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: committeeForm.publicDisplay,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														publicDisplay: event.target.checked
													}))
												}), "Public display later"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Notes",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													value: committeeForm.notes,
													onChange: (event) => setCommitteeForm((current) => ({
														...current,
														notes: event.target.value
													})),
													className: `${inputClass} min-h-[90px] py-3`
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: saving,
												className: "primary-btn w-full disabled:cursor-not-allowed disabled:opacity-60",
												children: saving ? "Saving..." : "Save Unit"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleMemberSubmit,
									className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-5 flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-50 text-lime-800",
												children: editingMemberId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 22 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-xl font-black text-slate-950",
												children: editingMemberId ? "Edit Designation Assignment" : "Assign Designation"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-slate-500",
												children: "Select an approved member and assign their MBJP designation."
											})] })]
										}),
										!editingMemberId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPicker, {
											memberSearch,
											onSearchChange: (value) => {
												setMemberSearch(value);
												setSelectedMember(null);
											},
											onSearch: () => void handleMemberSearch(),
											memberSearching,
											memberResults,
											selectedMember,
											onSelectMember: selectMember,
											alreadyAssignedMemberId: selectedMemberAlreadyAssigned?.member_id ?? null,
											searchScopeLabel,
											limitSearchToCommitteeArea,
											onToggleAreaFilter: setLimitSearchToCommitteeArea
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-4 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-900 ring-1 ring-amber-100",
											children: "Editing designation details only. To change the person, remove this assignment and add the correct approved member again."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Designation",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: memberForm.designationId,
														onChange: (event) => handleDesignationChange(event.target.value),
														className: inputClass,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "",
															children: "Custom designation"
														}), designations.map((designation) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: designation.id,
															children: designation.title
														}, designation.id))]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Designation Title",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														value: memberForm.designationTitle,
														onChange: (event) => setMemberForm((current) => ({
															...current,
															designationTitle: event.target.value
														})),
														className: inputClass,
														placeholder: "General Secretary"
													})
												}),
												selectedDesignationTaken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-900 ring-1 ring-amber-100",
													children: [
														selectedDesignationTaken.designation_title,
														" is already assigned to ",
														selectedDesignationTaken.full_name_snapshot,
														". You can still save if this designation may have multiple office bearers."
													]
												}) : null,
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
														label: "Status",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
															value: memberForm.status,
															onChange: (event) => setMemberForm((current) => ({
																...current,
																status: event.target.value
															})),
															className: inputClass,
															children: committeeStatusOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: item.value,
																children: item.label
															}, item.value))
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
														label: "Display Order",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: "1",
															value: memberForm.sortOrder,
															onChange: (event) => setMemberForm((current) => ({
																...current,
																sortOrder: event.target.value
															})),
															className: inputClass
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
														label: "Tenure Start",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "date",
															value: memberForm.tenureStart,
															onChange: (event) => setMemberForm((current) => ({
																...current,
																tenureStart: event.target.value
															})),
															className: inputClass
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
														label: "Tenure End",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "date",
															value: memberForm.tenureEnd,
															onChange: (event) => setMemberForm((current) => ({
																...current,
																tenureEnd: event.target.value
															})),
															className: inputClass
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Appointment Notes",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														value: memberForm.appointmentNotes,
														onChange: (event) => setMemberForm((current) => ({
															...current,
															appointmentNotes: event.target.value
														})),
														className: `${inputClass} min-h-[86px] py-3`,
														placeholder: "Appointment reference, decision note or meeting record."
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "submit",
														disabled: memberSaving,
														className: "primary-btn disabled:cursor-not-allowed disabled:opacity-60",
														children: [memberSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, editingMemberId ? "Update Assignment" : "Assign Designation"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => resetMemberForm(),
														className: "secondary-btn",
														children: editingMemberId ? "Cancel Edit" : "Clear Selection"
													})]
												})
											]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-black text-slate-950",
											children: "Assigned Designations"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-slate-500",
											children: [
												committeeMembers.length,
												" assigned member",
												committeeMembers.length === 1 ? "" : "s",
												" · ",
												activeOfficeBearers.length,
												" active."
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-100",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), " Level Unit List"]
										})]
									}),
									committeeMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "No designations assigned yet. Use the form on the left to search an approved member and add the first designation assignment." }) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 lg:grid-cols-2",
										children: committeeMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeBearerCard, {
											member,
											onEdit: startEditMember,
											onRemove: (memberId) => void handleRemoveMember(memberId)
										}, member.id))
									})
								]
							})]
						})
					]
				})
			})
		})
	});
}
function MemberPicker({ memberSearch, onSearchChange, onSearch, memberSearching, memberResults, selectedMember, onSelectMember, alreadyAssignedMemberId, searchScopeLabel, limitSearchToCommitteeArea, onToggleAreaFilter }) {
	const queryReady = memberSearch.trim().length >= 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 space-y-3 rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Search & Select Approved Member",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: memberSearch,
							onChange: (event) => onSearchChange(event.target.value),
							className: `${inputClass} pl-10`,
							placeholder: "Name, father name, mobile or MBJP member no"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onSearch,
						disabled: memberSearching || !queryReady,
						className: "secondary-btn px-4 disabled:cursor-not-allowed disabled:opacity-60",
						children: memberSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-2 rounded-2xl bg-white p-3 text-xs font-bold text-slate-600 ring-1 ring-slate-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: limitSearchToCommitteeArea,
					onChange: (event) => onToggleAreaFilter(event.target.checked),
					className: "mt-0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Limit search to level unit area.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-semibold text-slate-500",
					children: searchScopeLabel
				})] })]
			}),
			selectedMember ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5 shrink-0 text-emerald-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-black",
							children: ["Selected: ", selectedMember.full_name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs font-bold text-emerald-800",
							children: [
								selectedMember.member_no,
								" · Father: ",
								selectedMember.father_name || "N/A"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs font-semibold text-emerald-700",
							children: [
								selectedMember.district ?? "District N/A",
								" ",
								selectedMember.taluka ? `· ${selectedMember.taluka}` : ""
							]
						})
					] })]
				})
			}) : null,
			alreadyAssignedMemberId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-800 ring-1 ring-red-100",
				children: "This member already has an active designation in this level unit. Edit/remove the existing record first."
			}) : null,
			memberSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateCard, { message: "Searching approved members..." }) : null,
			!memberSearching && queryReady && memberResults.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-white p-4 text-sm font-bold text-slate-600 ring-1 ring-slate-200",
				children: "No approved member found. Try member number, father name, mobile number, or turn off area filter."
			}) : null,
			memberResults.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[360px] gap-2 overflow-y-auto pr-1",
				children: memberResults.map((member) => {
					const isSelected = selectedMember?.id === member.id;
					const isAlreadyAssigned = alreadyAssignedMemberId === member.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onSelectMember(member),
						className: `rounded-2xl border p-3 text-left text-sm transition ${isSelected ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-black text-slate-950",
										children: member.full_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs font-bold text-slate-500",
										children: [
											member.member_no ?? "No member no",
											" · Father: ",
											member.father_name || "N/A"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs text-slate-500",
										children: [
											member.district ?? "District N/A",
											" ",
											member.taluka ? `· ${member.taluka}` : ""
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-black uppercase ring-1 ${isSelected ? "bg-emerald-100 text-emerald-800 ring-emerald-200" : "bg-slate-100 text-slate-600 ring-slate-200"}`,
								children: isSelected ? "Selected" : isAlreadyAssigned ? "Assigned" : "Select"
							})]
						})
					}, member.id);
				})
			}) : null
		]
	});
}
function OfficeBearerCard({ member, onEdit, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-wide text-emerald-700",
							children: member.designation_title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-xl font-black text-slate-950",
							children: member.full_name_snapshot
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm font-semibold text-slate-500",
							children: [
								member.member_no_snapshot ?? "No member no",
								" · Father: ",
								member.father_name_snapshot ?? "N/A"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${getCommitteeStatusClass(member.status)}`,
					children: getCommitteeStatusLabel(member.status)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 text-sm sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						label: "Location",
						value: `${member.district_snapshot ?? "N/A"}${member.taluka_snapshot ? ` · ${member.taluka_snapshot}` : ""}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						label: "Order",
						value: String(member.sort_order)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						label: "Tenure",
						value: `${formatCommitteeDate(member.tenure_start)} → ${formatCommitteeDate(member.tenure_end)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						label: "Updated",
						value: formatCommitteeDate(member.updated_at)
					})
				]
			}),
			member.appointment_notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600 ring-1 ring-slate-100",
				children: member.appointment_notes
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onEdit(member),
					className: "secondary-btn",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { size: 15 }), " Edit"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onRemove(member.id),
					className: "inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-700 shadow-sm transition hover:bg-red-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 }), " Remove"]
				})]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-sm font-black text-slate-800",
			children: label
		}), children]
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black uppercase tracking-wide text-slate-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-bold text-slate-950",
			children: value
		})]
	});
}
function StateCard({ message, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl p-5 text-sm font-bold ring-1 ${tone === "error" ? "bg-red-50 text-red-700 ring-red-100" : "bg-slate-50 text-slate-600 ring-slate-200"}`,
		children: [tone === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mr-2 inline h-4 w-4" }) : null, message]
	});
}
function isErrorMessage(message) {
	const value = message.toLowerCase();
	return value.includes("failed") || value.includes("required") || value.includes("only") || value.includes("already") || value.includes("not found");
}
//#endregion
export { AdminCommitteeDetailPage as component };
