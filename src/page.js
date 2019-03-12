chrome.storage.local.get(function(urls){
    for (let i in Object.keys(urls)){
        alert(urls.data[i].name);
        alert(urls.data[i].time);
    }
});


/*
        let element = $(`<tr><td>${site}</td><td>${time}</td></tr>`);

        element.appendTo("#tableBody");
        */
