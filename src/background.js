let lastFocusedUrl = "";
let lastUpdateTime = Date.now();

chrome.tabs.onCreated.addListener(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        //here should be a function to proceed url to first letters
        let currentUrl = {};
        let currentTime = Date.now();

        currentUrl.name = extractHostname(tabs[0].url);
        currentUrl.time = currentTime - lastUpdateTime;

        chrome.storage.local.get(function(items) {

            if (Object.keys(items).length > 0 && items.data) {
                items.data.push(currentUrl);
            } else {
                items.data = [currentUrl];
            }

            chrome.storage.local.set(items);

        });

        lastUpdateTime = currentTime;
        lastFocusedUrl = currentUrl.name;
    })
});

function extractHostname(url) {

    if (url.indexOf("//") > -1) {
        var hostname = url.split('/')[2];
    }
    else {
        var hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];

    hostname = hostname.split('?')[0];

    return hostname;
}


/*
chrome.tabs.onActiveChanged.addListener(function(){
    // I don't really get what does this construction do
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        let currentUrl = tabs[0].url;
        //here should be a function to proceed url to first letters
        //alert(url);
    });
});
/*
chrome.tabs.onUpdated.addListener(function(){
    alert("hello");
})
*/