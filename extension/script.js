let btn = document.getElementById('send');
btn.addEventListener('click', send);

function send() {
    let params = {
        active: true, currentWindow: true
    }
    chrome.tabs.query(params, gotTab);

    function gotTab(tabs) {
        // send a message to the content script
        let msg = {
            txt: "1"
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}