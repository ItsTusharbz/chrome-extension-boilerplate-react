console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.action.onClicked.addListener(function (tabs) {
  const tabId = tabs.id;
  console.log(tabId);
  chrome.windows.create(
    {
      type: 'popup',
      width: 400,
      height: 800,
      url: chrome.runtime.getURL('index.html'),
    },
    function (win) {
      chrome.windows.onBoundsChanged.addListener((window) => {
        chrome.windows.update(window.id, { width: 400, height: 800 }, () => {});
      });
      // win represents the Window object from windows API
      // Do something after opening
    }
  );
});
