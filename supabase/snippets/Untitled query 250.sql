update public.program_documents d
set
  verification_status = 'verified',
  is_verified = true,
  verified_at = now(),
  updated_at = now()
from public.program_applications a
where d.application_id = a.id
  and a.application_no = 'MBJP-EDU-2026-13322A10';