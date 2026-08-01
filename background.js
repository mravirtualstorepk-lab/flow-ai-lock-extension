const BLOCKED_HOSTS = [
  "mail.google.com",
  "drive.google.com",
  "maps.google.com",
  "www.google.com",
  "calendar.google.com",
  "news.google.com",
  "photos.google.com",
  "meet.google.com",
  "translate.google.com",
  "myaccount.google.com"
  "youtube.com"
"chatgpt.com"


];

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return;

  const url = new URL(details.url);

  // Gemini اور Flow AI ہمیشہ Allow
  if (
    url.hostname === "gemini.google.com" ||
    (url.hostname === "labs.google" &&
     url.pathname.startsWith("/fx/tools/flow"))
  ) {
    return;
  }

  if (BLOCKED_HOSTS.includes(url.hostname)) {
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL("blocked.html")
    });
  }
});
