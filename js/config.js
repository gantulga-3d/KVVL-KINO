const SUPABASE_URL = 'https://uxqthkectygrpnawtbyq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cXRoa2VjdHlncnBuYXd0YnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTM2NDgsImV4cCI6MjA5NjIyOTY0OH0.XmxUIjhhIbNSBWHJmhY8s2AsWO02FGxUaO3fIuyRKSI;

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function toast(msg, type) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + (type||'');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.className = '', 2800);
}

function genToken(prefix) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let r = '';
  for (let i = 0; i < 8; i++) r += chars[Math.floor(Math.random() * chars.length)];
  return (prefix||'KK') + '-' + r;
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
