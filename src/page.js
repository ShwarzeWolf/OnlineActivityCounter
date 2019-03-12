chrome.storage.local.get(function(urls){

    if (Object.keys(urls).length > 0 && urls.data) {
        for (let i = 0; i < urls.data.length; i++) {
            let site = urls.data[i].name;
            let time = urls.data[i].time;

            let element = $(`<tr><td>${site}</td><td>${(time)}</td></tr>`);
            element.appendTo("#tableBody");
        }
    }
})