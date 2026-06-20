select
  n.nspname as schema,
  p.proname as function_name,
  pg_get_function_identity_arguments(p.oid) as args,
  has_function_privilege('public', p.oid, 'execute') as public_can_execute,
  has_function_privilege('anon', p.oid, 'execute') as anon_can_execute,
  has_function_privilege('authenticated', p.oid, 'execute') as authenticated_can_execute,
  has_function_privilege('service_role', p.oid, 'execute') as service_role_can_execute
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname in ('public', 'app_private')
  and p.proname in (
    'claim_first_admin',
    'handle_new_user',
    'has_role',
    'issue_membership_card',
    'prevent_member_status_change',
    'reject_application',
    'set_updated_at'
  )
order by n.nspname, p.proname;