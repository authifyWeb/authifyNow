console.log("Bg Running")
async function fetchData() 
		{
			const res=await fetch ("https://raw.githubusercontent.com/authifyWeb/authifyURL-Database/main/everything.json");
			const response=await res.json();
			var json= response.source;
			console.log(json)
		}
fetchData();



chrome.runtime.onInstalled.addListener(({reason}) => {   if (reason === 'install') chrome.tabs.create({ url: 'resources/options.html'}); });