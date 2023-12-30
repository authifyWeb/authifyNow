function compare(link,display_link){
	console.log(link,display_link)

	async function fetchData() 
		{
			const res=await fetch ("https://raw.githubusercontent.com/authifyWeb/authifyURL-Database/main/everything.json");
			const response=await res.json();
			var json = response.source;
			
			console.log(json.length)
			
			for (i=0; i< json.length; i++)
			{ 
				var cl = response.source[i].urls;
				
				
				
				for (j = 0; j<cl.length; j++)
					
				{	
					
					if(json[i].urls[j] == link )
					{
						
						
						var Data=`<div style="color:white;">  ` + link + `</br> <p> <span style="color:#A2FB15; font-size: 16px; ">Verified by authifyURL.</span> &nbsp;<span class="tooltip"> ✅ <span class="tooltiptext">This website is valid and legal. </span> </p><p style="font-size:16px;"><span>Organisation : </span> <span style="color:yellow;">`  +response.source[i].name+ `</span></p></div>` ;
						
						var Disclaimer=`Read <a href ="https://github.com/authifyWeb/authifyURL#how-we-verify" style="color:white"; target ="_blank"> how we verify</a> what is valid and what is not. `;
						
						
						let cleanData = DOMPurify.sanitize(Data);
						let cleanDisclaimer = DOMPurify.sanitize(Disclaimer);
						
						data.innerHTML= cleanData;
						disclaimer.innerHTML=cleanDisclaimer;
						
						
						return;
						
						
					}
					else 
					{
						
						
						var Data = `<div style=" color:white;" >` + link + `<p><span style="color:red;font-size: 16px;"> We weren't able to verify this site. Please be cautioned continuing in this site.</span> &nbsp; <span class="tooltip"> ❌ <span class="tooltiptext">Possibly scam. If unsure please take help from someone you know. </span> </p> </div>` ;
						var Disclaimer=`Read <a href ="https://github.com/authifyWeb/authifyURL#how-we-verify" style="color:white;" target ="_blank"> how we verify</a> what is valid and what is not. `;
						let cleanData = DOMPurify.sanitize(Data);
						let cleanDisclaimer = DOMPurify.sanitize(Disclaimer);
						
						data.innerHTML= cleanData;
						disclaimer.innerHTML=cleanDisclaimer;
						
						
					}
				}	
			}	
	
		}
		
		
		
		
		
		
		
		
		
		
		fetchData();
		//return x;
		
	}
const query = { active: true, currentWindow: true };

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	const url = new URL(tabs[0].url);
	
	var hostname = url.hostname;
	var protocol = url.protocol;
	var origin = url.origin;
	var href= url.href;
	var pathname=url.pathname;
	var search = url.search;
	version.innerText = "🛡️ Stay Secure 🔐" ;

	protocolcheck();
	function protocolcheck( )
		{
		if(protocol=="about:" || protocol =="view-source:" || protocol == "chrome:" || protocol == "edge:" ||  protocol=="chrome-extension:" || protocol=="moz-extension:"){Hostname.innerText = protocol; data.innerHTML = `This page is part of your browser`;
			
				return output ;
			}
			
		else{
		Hostname.innerText =  origin;
		}
		}
	var domain = filterdomain_from_hostname(hostname);
	var output = authification(url, href, origin, hostname,protocol,pathname,search,domain); 
  
	// Do something with the output from authenticate()
	
	data.innerText = (output || "Verifying");
  });

  function filterdomain_from_hostname(hostname)
{
  var parts = hostname.split('.');
  var domain;

  if (parts.length > 2) {
    if (parts[parts.length - 2].length === 2 || parts[parts.length - 2].length === 3) {
      domain = parts.slice(-3).join('.');
    } else {
      domain = parts.slice(-2).join('.');
    }
  } else {
    domain = hostname;
  }

  return domain;

}
  


