chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const blockSites = [
        "culture-screen.store",
        "pornhub.com",
        "noodlemagazine.com"
    ];
    blockSites.forEach((site) => {
        if (tab.url && tab.url.includes(site)) {
            chrome.history.deleteUrl({ url: tab.url });
            console.log(`Deleted ${site} from history: ${tab.url}`);
        }
    });
});
