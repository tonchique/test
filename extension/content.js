chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "1") {
        let content = document.querySelector("a[href*='plus.google.com/u/0/me']").nextElementSibling.childNodes;
        let data = [];
        data[0] = content[0].innerHTML;
        data[1] = content[1].innerHTML;
        // send a message to the background script
        chrome.runtime.sendMessage({message: 'save', data});
    }
}