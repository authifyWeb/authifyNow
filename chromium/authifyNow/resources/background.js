console.log("Bg Running")
//If needed add fetch api here. Since I don't see any need for it, I haven't added it yet.



chrome.runtime.onInstalled.addListener(({reason}) => {   if (reason === 'install') chrome.tabs.create({ url: 'resources/options.html'}); });