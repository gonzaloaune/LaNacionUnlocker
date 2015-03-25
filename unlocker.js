chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $(".modal-scrollable").remove();
    $('body').removeClass("modal-open");
  }
);