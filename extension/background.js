const save = (data) => {
    $.post('http://test.loc/api/emails', {name:data[0], value:data[1]}, function(data){
        console.log(data);
    });
}

chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
    if (request.message === 'save') {
        save(request.data);
    }
});