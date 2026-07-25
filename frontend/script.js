// ═══════════════════════════════════════════
//  PickSmart — Shared Utility Functions
// ═══════════════════════════════════════════

/**
 * Show a toast notification at the bottom-right
 * @param {string} msg - Message to display
 * @param {string} [color] - Optional background color (default: green)
 */
function showToast(msg, color) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.background = color || 'var(--green)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/**
 * Guard: redirect to login if not authenticated
 */
function requireAuth() {
  if (!sessionStorage.getItem('ps_user')) {
    window.location.href = 'index.html';
  }
}

// Auto-run auth check on every page except login
if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
  requireAuth();
}