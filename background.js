const ALLOWED_HOSTS = [
  "labs.google",
  "accounts.google.com",
  "googleapis.com",
  "gstatic.com",
  "googleusercontent.com"
];

const FLOW_URL = "https://labs.google/fx/tools/flow";

function isAllowedHost(hostname) {
  return ALLOWED_HOSTS.some(domain =>
    hostname === domain || hostname.endsWith("." + domain)
  );
}

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  // صرف مین فریم پر عمل کریں
  if (details.frameId !== 0) return;

  const { loggedIn } = await chrome.storage.local.get(["loggedIn"]);

  // اگر لاگ ان نہیں ہے تو login.html کھولیں
  if (!loggedIn) {
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL("login.html")
    });
    return;
  }

  const url = new URL(details.url);

  // اجازت یافتہ ڈومین
  if (isAllowedHost(url.hostname)) {
    return;
  }

  // باقی سب بلاک
  chrome.tabs.update(details.tabId, {
    url: chrome.runtime.getURL("blocked.html")
  });
});

// ایکسٹینشن انسٹال ہونے پر Flow AI کھولیں
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: FLOW_URL
  });
});
