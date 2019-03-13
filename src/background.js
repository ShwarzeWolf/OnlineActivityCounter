let lastFocusedUrl = "newtab";
let lastUpdateTime = Date.now();

function logTabs(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

        let currentUrlName = extractHostname(tabs[0].url);

        let currentTime = Date.now();
        let timeDifference = currentTime - lastUpdateTime;

        let currentUrl = {};

        chrome.storage.local.get(function(items) {

            if (Object.keys(items).length > 0 && items.data) {

                for (var i = 0; i < items.data.length; i++) {
                    if (lastFocusedUrl === items.data[i].name)
                        break;
                }

                if (i === items.data.length){
                    currentUrl.name = lastFocusedUrl;
                    currentUrl.time = timeDifference;
                    items.data.push(currentUrl);
                }  else {
                    items.data[i].time += timeDifference;
                }

            } else {
                currentUrl.name = lastFocusedUrl;
                currentUrl.time = timeDifference;
                items.data = [currentUrl];
            }

            chrome.storage.local.set(items);

            lastUpdateTime = currentTime;
            lastFocusedUrl = currentUrlName;
        });


    })
}

chrome.tabs.onCreated.addListener(logTabs);

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