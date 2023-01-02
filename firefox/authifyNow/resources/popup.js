

function checkversion(){
		async function fetchData() 
		{
			const res=await fetch ("https://raw.githubusercontent.com/authifyWeb/authifyNow/main/version_control/latest.json");
			const response=await res.json();
			var json = response;
			//console.log(json);
				var vrs="v0.1.0";
		
				if(vrs != response.firefox)
				{
					version.innerHTML = `<a href="https://github.com/authifyWeb/authifyNow/releases" target="_blank" style="color:#FDFF8F";>📢 New Version Available</a> `;
				}
				else{ version.innerHTML = "You're all updated 🚀";}
		}
		
		fetchData();
	}	


    function compare(link){
	
	
		
		async function fetchData() 
		{
			const res=await fetch ("https://raw.githubusercontent.com/authifyWeb/authifyURL-Database/main/everything.json");
			const response=await res.json();
			var json = response.source;
			
			//console.log(json.length)
			
			for (i=0; i< json.length; i++)
			{ 
				var cl = response.source[i].urls;
				
				
				
				for (j = 0; j<cl.length; j++)
					
				{	
					
					if(json[i].urls[j] == link )
					{
						
						
						Data = `<h4 style="color:white";> ` + link + ` <p> <span style="color:#A2FB15; font-size: 16px;">This site is verified by authifyURL.</span> &nbsp;<span class="tooltip" style="font-size:12px;"> ✅ <span class="tooltiptext">You can use this website with complete trust. </span> </p> <p style="font-size:16px;"><span >Part of : </span>` +response.source[i].name+ `</p></h4>` ;
						
						Disclaimer =`Read <a href ="https://github.com/authifyWeb/authifyNow#how-we-verify" style="color:white; target ="_blank"> how we verify</a> what is valid and what is not.`;
						
						data.innerHTML= Data;
						disclaimer.innerHTML=Disclaimer;
						
						return;
						
						
					}
					else 
					{
						
						
						Data = `<h4 style=" color:white" padding-top:10px;>` + link + `<p><span style="color:red;font-size: 16px;"> We weren't able to verify this site. Please be cautioned continuing in this site.</span> &nbsp; <span class="tooltip"style="font-size:12px;"> ❌ <span class="tooltiptext">This doesn't mean that it's a fake website, it's just not in our database. </span> </p>`;
						
						Disclaimer=`Read <a href ="https://github.com/authifyWeb/authifyNow#how-we-verify" style="color:white"; target ="_blank";> how we verify</a> what is valid and what is not.`;
						
						data.innerHTML= Data;
						disclaimer.innerHTML=Disclaimer;
						
						
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
			var output = `<h3>This page is part of your browser</h3>`;
			
				return output ;
		}
		
		else if(protocol != "https:" ) return `<h3> This website is not secure. Please refrain from entering or submitting personal data and please don't download files from such sources.</h3>`;
		
		else if( (origin =="https://www.facebook.com") || (origin=="https://www.instagram.com") || (origin== "https://www.youtube.com") )  {
				link= hostname+pathname;
				var output = compare(link);
				data.innerHTML= output;
				return ;
				
			}
		else if(origin =="https://twitter.com") {link = hostname + pathname.toLowerCase(); var output = compare(link);
				data.innerHTML= output;
				return ;}
		
		else
			
			{
				var output = compare(hostname);
				data.innerHTML= output;
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
	version.innerHTML = "Checking for updates";
	
	checkversion();
	//console.log( url+"\n"+hostname+"\n"+protocol+"\n"+origin+"\n"+href+"\n"+pathname)
	
	protocolcheck();
	
    
	
	
		function protocolcheck( )
		{
		if(protocol=="about:" || protocol =="view-source:"){Hostname.innerHTML = protocol; 
			}
		else{
		Hostname.innerHTML =  origin;
		}
		}
		
	var output= authification(url, href, origin, hostname,protocol,pathname); 
		
		data.innerHTML = (output || "Verifying");

	
	});
//});                                                     // for DOMContentLoaded

