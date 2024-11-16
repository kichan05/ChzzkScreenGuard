let isHidden = false;

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-hide") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab) {
      isHidden = !isHidden;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
      }, () => {
        chrome.tabs.sendMessage(tab.id, { hide: isHidden });
      });
    }
  }
});
