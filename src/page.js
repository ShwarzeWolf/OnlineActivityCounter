chrome.storage.local.get(function(items){
    if (Object.keys(items).length > 0 && items.data) {

        for (var i = 0; i < items.data[i].length; i++){
            let name = items.data[i].name;
            let time = items.data[i].time;
        }
    }
});

        /*
            let element = $(`<tr><td>${name}</td><td>${time}</td></tr>`);
            element.appendTo("#tableBody");
        */