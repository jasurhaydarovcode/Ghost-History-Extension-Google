document.getElementById("clearHistory").addEventListener("click", function () {
    const sitesToClear = [
        "culture-screen.store",
        "testsite.com"
    ];

    sitesToClear.forEach((site) => {
        chrome.history.search({ text: site, maxResults: 1000 }, (results) => {
            results.forEach((item) => {
                chrome.history.deleteUrl({ url: item.url });
            });
        });
    });

    alert("All history of the specified sites has been deleted!");
});
