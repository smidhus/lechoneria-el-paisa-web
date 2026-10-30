// Dismissal lasts for this tab's session, including reloads.
const renewalNotice = document.querySelector('.renewal-notice');
const renewalClose = renewalNotice?.querySelector('.renewal-close');
const renewalStorageKey = 'el-paisa:renewal-dismissed:v1';
let renewalDismissed = false;

try {
  renewalDismissed = sessionStorage.getItem(renewalStorageKey) === '1';
} catch {
  // The notice still works when browser storage is unavailable.
}

if (renewalNotice && renewalClose && !renewalDismissed) {
  window.setTimeout(() => {
    renewalNotice.hidden = false;
  }, 3000);

  renewalClose.addEventListener('click', () => {
    renewalNotice.hidden = true;
    try {
      sessionStorage.setItem(renewalStorageKey, '1');
    } catch {
      // Dismiss for the current page even if storage is blocked.
    }
  });
}
