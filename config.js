// Konfigurasi Supabase untuk frontend (dipakai Index.html).
// File ini dibaca oleh browser siapa saja, jadi isinya HANYA boleh kunci
// ANON / publishable dari dashboard Supabase (Settings > API Keys).
// JANGAN PERNAH isi kunci service_role / secret key di sini.
const SUPABASE_URL = 'https://fjafpjditjnyjprkbnqp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_d4heuhPeK4UfGSXXVoDCmw_v8PF0eho';

window.supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
