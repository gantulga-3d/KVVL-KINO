const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR_ANON_KEY';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function toast(msg, type = 'default') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + type;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.className = '', 2800);
}

function icon(name, size = 16) {
  return `<i class="ti ti-${name}" style="font-size:${size}px" aria-hidden="true"></i>`;
}

function genToken(prefix = 'KK') {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let r = '';
  for (let i = 0; i < 8; i++) r += chars[Math.floor(Math.random() * chars.length)];
  return `${prefix}-${r}`;
}

function getFingerprint() {
  const nav = navigator;
  const str = [nav.language, nav.platform, screen.width, screen.height, nav.hardwareConcurrency].join('|');
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return Math.abs(h).toString(36);
}

function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('mn-MN', { year: 'numeric', month: 'short', day: 'numeric' });
}

function el(id) { return document.getElementById(id); }
