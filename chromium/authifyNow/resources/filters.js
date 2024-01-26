function filtering(url, href, origin, hostname,protocol,pathname,search,domain) 
{

	if(protocol != "https:" ) {return ` This website is not secure. Please refrain from submitting personal data and don't download files from such sources`;}
    else if(origin=="https://duckduckgo.com")
  { if(pathname=="/") return ` This is DuckDuckGo Search Results page. Be wary of the links you click from a results page.`;
    else{ link=hostname; var output = compare(link,link); return output;}
  }
  else if(origin=="https://www.bing.com") 
		{ if(pathname=="/search" || pathname=="/shop") { return ` This is Microsoft Bing Search Results page. Be wary of the links you click from a results page.`;}
		else{ link=hostname; var output = compare(link,link); return output;}
		}
   else if(hostname=="www.google.com"||hostname=="www.google.ca"||hostname=="www.google.co.in"||hostname=="www.google.co.uk"||hostname=="europe.google.com"){
            var hostname="www.google.com"; 				
              if(pathname=="/search") /*||pathname=="/"||pathname=="/webhp"*/
              {
                return `This is Google Search Results page. Be wary of the links you click from a results page.`;
              }
              else{link=hostname; var output=compare(link,link); return output;}
        
          }   
    else if(hostname=="search.yahoo.com"||hostname=="in.search.yahoo.com"||hostname=="uk.search.yahoo.com"||hostname=="us.search.hostname.com"){

            if(pathname.split(';')[0]=="/search")
            {
              return `This is Yahoo Search Results page. Be wary of the links you click from a results page.`;
            }
          }   
    else if(origin=="https://search.brave.com") 
          { return `This is Brave Search Results page. Be wary of the links you click from a results page`;}
    else if( hostname =="www.facebook.com" || hostname=="m.facebook.com"|| hostname=="facebook.com"|| domain=="fb.com" )  
          {	var hostname="www.facebook.com";
      var path1=pathname.split('/')[1];
      if(path1=="profile.php"){
        var search=search.split('&')[0];
        var searchid=search.split('id=')[1];
        link=hostname+'/'+searchid;
      }
    else if(path1=="people"){
      var searchid=pathname.split('/')[3];
      link=hostname+'/'+searchid;
    } 
    else{
              link= hostname+'/'+pathname.split('/')[1];
      }
      var output = compare(link,href);
              return output;
    }
    else if(origin =="https://twitter.com")
			{
				
				link=hostname+'/'+pathname.split('/')[1].toLowerCase();
				var output = compare(link,link);	
				return output;
			}
    else if(hostname == "www.threads.net"){

                link= hostname + '/' + pathname.split('/')[1].toLowerCase();
                var output = compare(link,link);
                return output;
              }
    else if(origin=="https://www.youtube.com")
              {
                var channel=(pathname.split('/')[1]);
                if(channel=="channel" ||channel=="user" ) { link = hostname +'/' +pathname.split('/')[1]+ '/' + pathname.split('/')[2];}
                else if(channel=="shorts"|| channel=="watch"){return `Cannot identify individual videos. Please submit the profile URL to verify.`;}
                else if(channel=="c") { 
                var id=pathname.split('/')[2].toLowerCase();
                link= hostname+'/'+id}
                else{link=hostname+'/'+pathname.split('/')[1].toLowerCase();}
                var output = compare(link,link);	
                return output;
              }
    else if( origin=="https://www.twitch.tv" )
              {
                  link = hostname + '/'+ pathname.split('/')[1].toLowerCase(); 
                  var output = compare(link,link); 
                return output;
              }
    else if(origin=="https://www.instagram.com" )
              { var channel=(pathname.split('/')[1]);
        if(channel=="p"|| channel=="reels" || channel =="reel"){return `Cannot verify individual posts or reels. Please submit the profile URL to verify.`;}
        else{
                  link = hostname + '/' + pathname.split('/')[1].toLowerCase(); 
                  var output = compare(link,link); 
                return output;
        }
              }
    else if(hostname=="profiles.wordpress.org")
              {
               link = hostname + '/'+ pathname.split('/')[1].toLowerCase(); 
               var output = compare(link,link); 
               return output;
              }
    else if(origin=="https://www.reddit.com" || origin=="https://old.reddit.com")
              {	
                  link=hostname +'/' +pathname.split('/')[1]+ '/' + pathname.split('/')[2].toLowerCase();
                  var output = compare(link,link);
                  return output;
              }
    else if(hostname=="play.google.com")
        {
         link=hostname+pathname+search;
         var output = compare(link,link);
				 return output; 
        }
        else if(hostname=="apps.apple.com")
        { function extractId(appleStoreLink) {
          const regex = /\/id(\d+)/;
          const match = appleStoreLink.match(regex);
          return match ? match[1] : null;
        }
    const Id = 'id'+ extractId(pathname);
      if(pathname.includes('developer')){link=hostname+'/developer/'+Id;}
      else if(pathname.includes('app')){link=hostname+'/app/'+Id;}
      var output= compare(link,link);
      return output;


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
				var output = compare(link,link);	
				return output;	
				}
            /* Mastodon Instances
        mastodon.social --- Mastodon gGmbH
        mastodon.online  --- Mastodon gGmbH
        social.vivaldi.net --- Vivaldi
        mozilla.social --- Mozilla 
        infosec.exchange --- For Cyber security-minded people
        mas.to
        fosstodon.org --- For technology and Opensource
        mastodon.art --- Art Related
        mstdn.social
        */
    else if(hostname == "mastodon.social" || hostname=="social.vivaldi.net" || hostname=="mastodon.online" || hostname=="mozilla.social"|| hostname=="infosec.exchange" || hostname=="fosstodon.org" || hostname=="mas.to" || hostname=="mastodon.art" || hostname == "mstdn.social")
  
        {
            link = hostname + '/'+ pathname.split('/')[1].toLowerCase(); 
                    var output = compare(link,link); 
                return output;
        }     
    else if(hostname == "linktr.ee"){
            var path1= pathname.split('/')[1].toLowerCase();
            if(path1 !== "s" && path1 !=="marketplace" && path1 !== "blog" && path1 !=="help" && path1 !== "login" && path1 !=="register" & path1 !=="")
                {
                  link=hostname+ pathname.toLowerCase();
                }
                else {
                  link = hostname;
                }
                var output = compare(link,link); 
                return output;
          }
    else if(hostname=="loco.gg"){ 
            var path1=pathname.split('/')[1];
            if(path1=="stream"|| path1=="clips"){return `Cannot verify individual streams or clips. Please submit the profile URL to verify.`;}
            else if(path1=="streamers"){link=hostname+'/'+pathname.split('/')[2];}
            else{link=domain;}
            var output=compare(link,href);
            return output; 
          }
    else if(hostname=="www.t.me" || hostname == "www.telegram.me")
          { path1 = pathname.split('/')[1].toLowerCase();
            if(path1 =="s"){link= hostname + '/'+ pathname.split('/')[2].toLowerCase();}
            else{ link = hostname + '/'+ pathname.split('/')[1].toLowerCase();}
              var output= compare(link,href);
              return output
          }
    else if(origin == "https://ko-fi.com" || origin =="https://www.buymeacoffee.com" || origin=="https://liberapay.com" || origin =="https://opencollective.com")
          {
              
              link=hostname+'/'+pathname.split('/')[1].toLowerCase();
              var output = compare(link,link);
              return output ;
          }
    else if(origin=="https://www.patreon.com")
          {	
              var id=pathname.split('/')[1];
                  if(id=="join")
                      { var link= hostname+'/'+pathname.split('/')[2].toLowerCase();}
                  else { var link = hostname+'/'+pathname.split('/')[1].toLowerCase(); }
              var output = compare(link,link);	
              return output;	
          
          }
    else if(hostname=="folin.io")
          {
            var path1= pathname.split('/')[1];
            
            if(path1=="products"){return `Cannot verify individual products, please visit user profile to verify.`;}
            else if(path1=="pages"){
              var path2=pathname.split('/')[2];
              if(path2=="refund"||path2=="about-us"||path2=="terms"||path2=="cookie-policy"||path2=="privacy"||path2=="contact"||path2=="brand"||path2=="influencer"||path2=="refund-policy"||path2=="shipping-policy"){ var link = hostname; var output=compare(link,link); return output;}
              else{ var link = hostname + '/' + path2; var output=compare(link,hostname+pathname); return output; }
            }
            else{var link=domain; var output=compare(link,href); return output;}
          }
    else if(domain=="wishlink.com"){
            if(hostname !="www.wishlink.com"){link=domain; }
            else if(hostname =="www.wishlink.com"){
            var path1=pathname.split('/')[1].toLowerCase();
            if(path1=="wishlist"||path1=="w"|| path1==""){link=domain;}
            else{link = hostname+'/'+path1;}
            }
            var output=compare(link,href); return output;
          }
    else if(domain=="behance.net"){
            if(hostname =="www.behance.net"){
            var path1=pathname.split('/')[1].toLowerCase();
            if(path1=="for_you"||path1=="galleries"||path1=="hire"||path1=="assets"||path1=="joblist"||path1==""||path1=="about"||path1=="blog"||path1=="careers"||path1=="misc"){link=domain;}
            else {link=hostname + '/'+ path1;}
            }
            else if(hostname !="www.behance.net"){link=domain;}
            var output=compare(link,href); return output;
          }
    else if(domain=="beacons.ai"){
            if(hostname !="beacons.ai"){link=domain;}
            else{
              var path1=pathname.split('/')[1].toLowerCase();
              if(path1=="i"||path1==""){link=domain;}
              else{link=hostname+'/'+path1;}
            }
            var output=compare(link,href); return output;
          }
    else if(domain=="kadakmerch.com"){
            if(hostname !="kadakmerch.com"){link=domain;}
            else{
              var path1=pathname.split('/')[1].toLowerCase();
              if(path1=="products"){return `Cannot verify individual products, please visit user profile to verify.`;}
              else if(path1=="collections"){var link=hostname+'/'+ pathname.split('/')[2].toLowerCase();}
              else{link=domain;}
            }
            
            var output=compare(link,href); return output;
          }
    else if(hostname=="bio.site"){
            var path1= pathname.split('/')[1].toLowerCase();
            link=hostname+'/'+path1;
            var output = compare(link,href);
            return output;
          }
    else if(domain=="liinks.co"){
            if(hostname !="www.liinks.co"){link=domain;}
            else{
             var path1=pathname.split('/')[1].toLowerCase();
              if(path1=="i"){link=domain;}
              else{link=hostname+'/'+path1;}
              }
              var output = compare(link,href); return output;
          }
    else if(domain=="solo.to"){
            if(hostname !="solo.to"){link=domain;}
            else{
              var path1=pathname.split('/')[1].toLowerCase();
              if(path1=="login"||path1=="register"||path1=="pricing"||path1=="brand"||path1=="portals"){link=domain;}
              else{link=hostname+'/'+path1;}
            }
            var output = compare(link,href); return output;
          }
    else if(hostname=="mailchi.mp"){
            var path1=pathname.split('/')[1].toLowerCase();
            link=hostname+'/'+path1;
            var output=compare(link,href);
            return output;
          }
          else if(hostname == "addons.mozilla.org")
          /*Once the above condition is true, the function replaces the URL language to the the default en-US. This is used since mozilla supports multiple languages and the url structure is directly based on user language.  */
            { var lang=pathname.split('/')[1];
              var default_lang=lang.replace(lang,"en-US"); 
            link= hostname +'/'+ default_lang+ '/' +pathname.split('/')[2]+'/'+pathname.split('/')[3]+'/'+pathname.split('/')[4];
            var output = compare(link,link);
            return output;
        
            }   
               
    else if(hostname=="chromewebstore.google.com"||hostname+'/'+pathname.split('/')[1] == "chrome.google.com/webstore")
            {
              if(hostname=="chromewebstore.google.com"){link=hostname+'/'+pathname.split('/')[1]+'/'+pathname.split('/')[2]+'/'+pathname.split('/')[3];}
              else{
              link= hostname +'/'+pathname.split('/')[1] +'/'+ pathname.split('/')[2] +'/'+ pathname.split('/')[3] +'/'+ pathname.split('/')[4];
              }
              var output= compare(link,href);
              return output;
            }			
  
    else if(hostname == "microsoftedge.microsoft.com")
          {
            link=hostname+pathname;
            var output= compare(link,link);
            return output;
          }
  
    else if(hostname == "addons.opera.com")
    /*Once the above condition is true, the function replaces the URL language to the the default en. This is used since mozilla supports multiple languages and the url structure is directly based on user language.  */
          {
            lang=pathname.split('/')[1];
            default_lang=lang.replace(lang,"en");
            link= hostname +'/'+ default_lang+'/' +pathname.split('/')[2]+'/'+pathname.split('/')[3]+'/'+pathname.split('/')[4];
            var output = compare(link,link);
            return output;
          }
    else if(domain == "slack.com"){
            link = hostname;
            var output = compare(link,link);
            return output;
          }	
    else if(domain=="crew.work"){
            link=hostname;
            var output = compare(link,link);
            return output;
          }
    else if(domain == "keka.com"){
            link=hostname;
            var output= compare(link,link);
            return output;
          }
    else if(domain=="darwinbox.in"){
            link=hostname;
            var output = compare(link,link);
            return output;
          }
    else if(domain=="myinstamojo.com"){
            link=hostname;
            var output=compare(link,link);
            return output;
          }
    else if(domain=="graphy.com"){
            link=hostname;
            var output=compare(link,link);
            return output;
          }
    else if(domain=="merchgarage.com"){
            link=hostname;
            var output=compare(link,href);
            return output;
          }
    else if(domain=="gumroad.com"){
            link=hostname;
            var output=compare(link,href);
            return output;
          }
    else if(domain=="creator-spring.com"){
            link=hostname;
            var output=compare(link,href);
            return output;
          }                                                         

        

  	else{
    link=domain;
    
    
    var output= compare(link,hostname);
    
				return output ;
			}
}

  