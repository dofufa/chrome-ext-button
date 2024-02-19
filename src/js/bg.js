console.log('ext-button-hello-bg');

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["js/ext.js"]
  });
});
