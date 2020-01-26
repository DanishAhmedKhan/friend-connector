console.log('Hello from Friend Connector');


// Add custom click function to jQuery
jQuery.fn.extend({
    'mclick': function () {
        var click_event = document.createEvent('MouseEvents')
        click_event.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0,
        false, false, false, false,
        0, null);
        return $(this).each(function () {
            $(this)[0].dispatchEvent(click_event)
        });
    },	
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.action) {
        case 'startAddingFriend':
            startAddingFriend();
            break;
    }
});

$(document).ready(() => {
    //window.scrollTo(0,document.body.scrollHeight);
});

function startAddingFriend() {
    //let uiList = $('.uiList._4kg._6-h._6-j._4ks .friendBrowserListUnit .FriendButton:first-child');

    let count = 0;

    chrome.storage.local.get('interval', function(result) {
        console.log(interval);
        let addFriend = setInterval(() => {
            let friendButton = $(`.FriendButton:eq(${count}) ._42ft`);
            console.log(friendButton);
            friendButton.trigger('click');
            friendButton.mclick();
            count++;
            if (count == 1) clearInterval(addFriend);
        }, result['interval']);
    });

}