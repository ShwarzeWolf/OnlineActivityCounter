let URLList = [];

chrome.tabs.onCreated.addListener(function(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        let currentUrl = {};

        //here should be a function to proceed url to first letters
        currentUrl.name = tabs[0].url;
        currentUrl.time = new Date();

        URLList.push(currentUrl);
    });
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