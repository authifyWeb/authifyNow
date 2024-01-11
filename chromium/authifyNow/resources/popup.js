function compare(link,display_link){

	
		const dataElement = document.getElementById("data");
		const discElement = document.getElementById("disclaimer");
		async function fetchDataFromAPI(link,display_link) {
			var blink=link;
			try {
			  const baseUrl = "https://apiurl.authifyweb.com/api/products?urls="; 
			  const endpoint = blink;
			  const apiUrl = `${baseUrl}${endpoint}`;
			  const response = await fetch(apiUrl);
			  const data = await response.json();
			  
			  	 
			  if (!response.ok) {
				throw new Error(`API request failed entho with status ${response.status}`);
				
			  }
			  
			  if (data.Source.length < 1) {
				const dataContent = DOMPurify.sanitize(`
				<div> <p style="color:white; overflow: hidden; text-overflow: ellipsis;">${display_link}</p>
					<p>
					  <span style="color:red; font-size: 16px;">We weren't able to verify this site. Please be cautioned continuing on this site.</span>
					  &nbsp; <span class="tooltip"> ❌ <span class="tooltiptext">Possibly scam. If unsure please take help from someone you know.</span></span>
					</p>
				  </div>
				`);
				var Disclaimer=`All data sourced from public domain`;
				dataElement.innerHTML = dataContent;
				discElement.innerText=Disclaimer;
			  } else {
					var ownerInfo;
					if (data.Source.length == 1) {
					  ownerInfo = data.Source[0].name; 
					} else if(data.Source.length>1) {
					  ownerInfo = data.Source[0].name; 
					}
					else{ /* This won't be executed in any case, but just in case, I don't want to 'return' empty handed */
						dataContent = DOMPurify.sanitize("The link doesn't match with any verified URLs in our database.");
						var Disclaimer="All data sourced from public domain"; 
						 dataElement.innerText = dataContent;
						 discElement.innerText=Disclaimer;
						return ;} 
					  const dataContent = DOMPurify.sanitize(`
					  <div> <p style="color:white; overflow: hidden; text-overflow: ellipsis;">${display_link}</p>
						<p>
						  <span style="color:#A2FB15; font-size: 16px;">Verified by authifyWeb</span>
						  &nbsp;<span class="tooltip"> ✅ <span class="tooltiptext">This website is valid and legal.</span></span>
						</p>
						<p style="font-size:16px;"><span> Organisation: </span> <span style="color:yellow;">${ownerInfo}</span></p>
						</div>
					  `);
					  var Disclaimer=`All data sourced from public domain`;
					  dataElement.innerHTML = dataContent;
					  discElement.innerText=Disclaimer;
					  
					  return; 
					}

			  
			 
				
			
		  
			} catch (error) {
				console.error("Error fetching data:", error);
			  
				if (error.name === "TypeError" && error.message.startsWith("Failed to fetch")) {
				  // Network error: Server is unreachable or connection failed
				  dataElement.innerText = `Unable to connect to the server. Please check your internet connection.`;
				} else if (error.response && error.response.status !== 200) {
				  // API error: Server responded with a non-200 status code
				  dataElement.innerText = `API error: Check API status below`;
				} else {
				  // Other error: Generic error message
				  dataElement.innerText = `An unexpected error occurred.`;
				}
			  }
		  }
		
		
		
		
		
		
		
		fetchDataFromAPI(link,display_link);
		
		
	}


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
  


