console.log('content  script working');

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'report_back') {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    sendResponse(document.all[0].outerHTML);
  }
});

/*
 chrome.browserAction.onClicked.addListener(function(tab) {
 chrome.tabs.executeScript({
 code: 'document.body.style.backgroundColor="red"'
 });
 });
 */
