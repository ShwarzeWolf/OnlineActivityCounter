chrome.tabs.onCreated.addListener(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        //here should be a function to proceed url to first letters
        let currentUrl = {};

        currentUrl.name = tabs[0].url;
        currentUrl.time = new Date();

        chrome.storage.local.get(function(items) {

            if (Object.keys(items).length > 0 && items.data) {
                items.data.push(currentUrl);
            } else {
                items.data = [currentUrl];
            }

            chrome.storage.local.set(items);
        });
})
});

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
