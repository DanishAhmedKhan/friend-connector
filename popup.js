$(document).ready(() => {

    $('.set_interval_submit').on('click', function(e) {
        let interval = $('.set_interval_input').val().trim();
        chrome.storage.local.set({ interval });
    });


    $('.start_action').on('click', function(e) {
        console.log('Start action clicked');

        chrome.tabs.getAllInWindow(null, function(tabs) {
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].title == 'Facebook') {
                    chrome.tabs.sendMessage(tabs[i].id, { action: 'startAddingFriend' });
                    pageBody = [];
                    break;
                }
            }
        });

    });

});