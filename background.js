chrome.browserAction.onClicked.addListener(function(tab) {
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {});
	});
});

chrome.webNavigation.onCompleted.addListener(function(details) {
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {});
	});
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.lanacion.'
    }],
});