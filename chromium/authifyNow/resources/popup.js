 function compare(link){
	
	
		
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
    
	function authification(url,href, origin,hostname,protocol,pathname){
	
	//console.log(url);
		if (protocol == "about:" || protocol == "chrome:" || protocol == "edge:" || protocol =="view-source:" || protocol=="chrome-extension:" || protocol=="moz-extension:" )
		{
			var output = `This page is part of your browser`;
			
				return output ;
		}
		
		else if(protocol != "https:" ) return ` This website is not secure. Please refrain from entering or submitting personal data and please don't download files from such sources.`;
		
		else if( origin =="https://www.facebook.com" )  
			{	
				link= hostname+'/'+pathname.split('/')[1];
				var output = compare(link);
				return output;
			}
		else if(origin =="https://twitter.com")
			{
				
				link=hostname+'/'+pathname.split('/')[1].toLowerCase();
				var output = compare(link);	
				return output;
			}
			/* Youtube has 3 different types of URLS. github.com/authifyWeb/authifyNow/issues/14#issuecomment-1403993482 */
		else if(origin=="https://www.youtube.com")
				{
					var channel=(pathname.split('/')[1]);
					if(channel=="channel") { link = hostname +'/' +pathname.split('/')[1]+ '/' + pathname.split('/')[2];}
					else if(channel=="c") { 
					var id=pathname.split('/')[2].toLowerCase();
					link= hostname+'/'+id}
					else{link=hostname+'/'+pathname.split('/')[1].toLowerCase();}
					var output = compare(link);	
					return output;
				}
		else if( origin=="https://www.twitch.tv" || origin=="https://www.instagram.com" )
			{
				link = hostname + pathname.toLowerCase(); 
				var output = compare(link); 
			
			}
		else if(origin=="https://www.reddit.com" || origin=="https://old.reddit.com")
			{	
				link=hostname +'/' +pathname.split('/')[1]+ '/' + pathname.split('/')[2].toLowerCase();
				var output = compare(link);
				
				}
		else if(origin == "https://github.com")
				{
				var id= pathname.split('/')[1];
					
					if(id=="orgs" || id=="sponsors")
						{ var link= hostname+'/'+pathname.split('/')[2].toLowerCase();
						}
					else{
						var link=hostname+'/'+pathname.split('/')[1].toLowerCase();
						}
				var output = compare(link);	
				return output;	
				}
		else if(origin == "https://ko-fi.com" || origin =="https://www.buymeacoffee.com" || origin=="https://liberapay.com" || origin =="https://opencollective.com")
				{
					
					link=hostname+'/'+pathname.split('/')[1].toLowerCase();
					var output = compare(link);
					return output ;
				}
		else if(origin=="https://www.patreon.com")
				{	
					var id=pathname.split('/')[1];
						if(id=="join")
							{ var link= hostname+'/'+pathname.split('/')[2].toLowerCase();}
						else { var link = hostname+'/'+pathname.split('/')[1].toLowerCase(); }
					var output = compare(link);	
					return output;	
				
				}	
		// Filter for crowdfunding platforms
		else if(origin=="https://milaap.org"|| origin=="https://www.impactguru.com"|| origin=="https://www.ketto.org")
				{var output = `Though the website is valid, authifyURL can't be used to verify the legalility of these fundraisers, please contact them directly.`;
				return output;	}
					
		else
			
			{
				var output = compare(hostname);
				
				return ;
			}
			
		
		
		
		
		
		
		
		
		}
//document.addEventListener('DOMContentLoaded', () => {  //this will wait for the page to load completely
	
	const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
	
	var tab_data= tabs;
	var title = tabs[0].title;
	var url = new URL(tabs[0].url);
	var hostname = url.hostname;
	var protocol = url.protocol;
	var origin = url.origin;
	var href= url.href;
	var pathname=url.pathname
	version.innerText = "🛡️ Stay Secure 🔐" ;
	
	
	//console.log( url+"\n"+hostname+"\n"+protocol+"\n"+origin+"\n"+href+"\n"+pathname)
	
	protocolcheck();
	
	
	
		function protocolcheck( )
		{
		if(protocol=="about:" || protocol =="view-source:"){Hostname.innerText = protocol; 
			}
		else{
		Hostname.innerText =  origin;
		}
		}
		
	var output= authification(url, href, origin, hostname,protocol,pathname); 
		
		data.innerText = (output || "Verifying");

	
	});
//});                                                     // for DOMContentLoaded







