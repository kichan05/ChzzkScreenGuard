let isHidden = false;
let toggleButton = document.getElementById("toggle-hide");

const toggleButtonClickEvent = async () => {
  isHidden = !isHidden;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  }, () => {
    chrome.tabs.sendMessage(tab.id, { hide: isHidden });
  });

  toggleButton.textContent = isHidden ? "보이기" : "숨기기";
}

toggleButton.addEventListener("click", toggleButtonClickEvent);