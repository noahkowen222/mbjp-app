import{V as e}from"./index-DgqzNNyF.js";var t=[{value:`en`,label:`English`,nativeLabel:`English`,shortLabel:`EN`},{value:`ur`,label:`Urdu`,nativeLabel:`اردو`,shortLabel:`UR`},{value:`sd`,label:`Sindhi`,nativeLabel:`سنڌي`,shortLabel:`SD`}];function n(e){return e===`ur`||e===`roman_ur`?`ur`:e===`sd`?`sd`:`en`}function r(e){let r=n(e);return t.find(e=>e.value===r)?.label??`English`}var i=e,a=[{slug:`about`,eyebrow:`About MBJP`,fallbackTitle:`About Marwardi Bhatti Jamaat Pakistan`,fallbackSubtitle:`A non-political, welfare-focused and member-verified community platform for Marwardi Bhatti families across Pakistan.`,fallbackContent:`Marwardi Bhatti Jamaat Pakistan (MBJP) is a community welfare platform created to organize membership, education support, health assistance, welfare cases, employment support, donations and verified public service records.

The organization is designed to work through transparent membership verification, responsible admin review, district/taluka coordination and digital records.

This page can be updated from the Admin CMS panel.`},{slug:`vision-mission`,eyebrow:`Vision & Mission`,fallbackTitle:`Vision and Mission`,fallbackSubtitle:`To build an organized, educated, self-reliant and service-oriented Marwardi Bhatti community across Sindh.`,fallbackContent:`Vision:
To make the Marwardi Bhatti community living across Sindh educationally, economically, socially, morally and organizationally strong, dignified, self-reliant and united.

Mission:
To establish an organized system of membership, education, health, employment, welfare, donations and mutual cooperation for deserving and talented members of the community.

This page can be updated from the Admin CMS panel.`},{slug:`manifesto`,eyebrow:`Manifesto / Manshoor`,fallbackTitle:`Manifesto / Manshoor`,fallbackSubtitle:`The guiding principles and public commitment of Marwardi Bhatti Jamaat Pakistan.`,fallbackContent:`Marwardi Bhatti Jamaat Pakistan works for education, health, employment, welfare, social support, representation, unity, dignity and service.

Core manifesto points include:
- Education support and scholarships
- Health assistance and emergency help
- Employment and skills support
- Welfare cases for deserving families
- Transparent donations and finance records
- Community unity and verified membership

This page can be updated from the Admin CMS panel.`},{slug:`constitution`,eyebrow:`Constitution`,fallbackTitle:`MBJP Constitution`,fallbackSubtitle:`The constitutional structure, roles, responsibilities and organizational rules of MBJP.`,fallbackContent:`The constitution defines MBJP membership, organizational structure, Central Executive Committee, Central Advisory Committee, provincial, divisional, district and taluka units, duties of office bearers, program management, finance rules, discipline, records and reporting.

Current hierarchy:
CEC → Advisory → Provincial → Divisional → District → Taluka

This page can be updated from the Admin CMS panel.`},{slug:`cwc`,eyebrow:`Central Working Committee`,fallbackTitle:`Central Working Committee`,fallbackSubtitle:`The top-level governing and executive body responsible for day-to-day decisions and policy implementation.`,fallbackContent:`The Central Working Committee (CWC) is the top-level governing and executive body of Marwardi Bhatti Jamaat Pakistan.

Central Cabinet designations include:
- Chairman
- Senior Vice Chairman
- Vice Chairman
- General Secretary
- Information Secretary

Additional committees, wings and advisory boards may be created as needed.

This page can be updated from the Admin CMS panel.`},{slug:`contact`,eyebrow:`Contact`,fallbackTitle:`Contact Marwardi Bhatti Jamaat Pakistan`,fallbackSubtitle:`For membership, program support, donations, verification and committee coordination.`,fallbackContent:`Contact information can be updated from the Admin CMS panel.

Suggested fields:
- WhatsApp number
- Office address
- Email
- District coordination contacts
- Donation account information
- Social media links`}];function o(e){return a.find(t=>t.slug===e)??a[0]}async function s(e,t=`en`){let r=n(t),{data:a,error:o}=await i.from(`cms_pages`).select(`*`).eq(`slug`,e).eq(`language`,r).eq(`status`,`published`).maybeSingle();return o?(console.warn(`CMS page load failed for ${e} (${r}):`,o.message),null):a??null}async function c(e,t=`en`){let r=n(t),{data:a,error:o}=await i.from(`cms_pages`).select(`*`).eq(`slug`,e).eq(`language`,r).maybeSingle();if(o)throw o;return a??null}async function l(){let{data:e,error:t}=await i.from(`cms_pages`).select(`*`).order(`slug`,{ascending:!0}).order(`language`,{ascending:!0});if(t)throw t;return e??[]}async function u(t){let{data:{user:r},error:a}=await e.auth.getUser();if(a||!r)throw Error(`You must be logged in to update CMS content.`);let o=new Date().toISOString(),s=n(t.language),{error:c}=await i.from(`cms_pages`).upsert({slug:t.slug,language:s,title:t.title.trim(),subtitle:t.subtitle?.trim()||null,content:t.content.trim(),status:t.status,published_at:t.status===`published`?o:null,updated_by:r.id,updated_at:o},{onConflict:`slug,language`});if(c)throw c}async function d(){let{data:{user:t},error:n}=await e.auth.getUser();if(n||!t)return!1;let{data:r,error:i}=await e.from(`user_roles`).select(`role`).eq(`user_id`,t.id).in(`role`,[`admin`,`super_admin`]).limit(1);return i?!1:!!r?.length}function f(e){return e.split(/\n{2,}/).map(e=>e.trim()).filter(Boolean)}function p(e){return e===`published`?`bg-emerald-50 text-emerald-800 ring-emerald-200`:e===`draft`?`bg-amber-50 text-amber-800 ring-amber-200`:`bg-slate-100 text-slate-700 ring-slate-200`}export{c as a,o as c,n as d,u as f,l as i,r as l,a as n,s as o,d as r,f as s,t,p as u};