document.getElementById("clearHistory").addEventListener("click", function () {
    const sitesToClear = [
        "testsite.com",
        "testsite2.com",
        "testsite3.com"
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
