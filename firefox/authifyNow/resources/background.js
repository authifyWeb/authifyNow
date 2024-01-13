console.log("Bg Running")



chrome.runtime.onInstalled.addListener(({reason}) => {   if (reason === 'install') chrome.tabs.create({ url: 'resources/options.html'}); });