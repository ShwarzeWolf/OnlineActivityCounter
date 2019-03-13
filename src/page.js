chrome.storage.local.get(function(urls){

    //clearDate();

    if (Object.keys(urls).length > 0 && urls.data) {
        for (let i = 0; i < urls.data.length; i++) {
            let site = urls.data[i].name;
            let time = convertTime(urls.data[i].time);

            let element = $(`<tr><td>${site}</td><td>${(time)}</td></tr>`);
            element.appendTo("#tableBody");
        }
    }
});

function clearDate(){
    chrome.storage.local.clear();
}

function convertTime(timeInMSeconds) {
    let time = new Date(timeInMSeconds);

    let hours = time.getUTCHours();
    let minutes = time.getUTCMinutes();
    let seconds = time.getUTCSeconds();

    return "" + hours + "h " + minutes + "m " + seconds + "s ";
}