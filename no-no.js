chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (/\(\d+\)/g.test(changeInfo.title)) {
        console.log(`%cHIDING NOTIFICATIONS IN TAB TITLE | ${changeInfo.title}`, 'color: #403BEC; background-color: #A8FFF3; font-weight: bold;');
        chrome.tabs.executeScript(tabId, { file: "change-title.js"});
    }
});
