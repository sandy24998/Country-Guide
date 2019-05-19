var xhr=new XMLHttpRequest();
function getDetails(country)
{   
     document.getElementById('result').innerHTML='';
    var url='https://restcountries.eu/rest/v2/name/'+country.value;
    console.log(url);
    xhr.open("GET",url);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200)
            {
                
                var response1=JSON.parse(xhr.responseText);
                var details='<img src="'+response1[1].flag+'" style="display: block;margin-left: auto;margin-right: auto;width: 90%;"><br>'+'<center><h2 style="color:green;">'+response1[1].name+'</h2></center>'+
                    '<center><h6 style="color:green;">Capital : <span style="color:blue;">'+response1[1].capital+'</span></h6></center>'+
                    '<center><h6 style="color:green;">Region : <span style="color:blue;">'+response1[1].region+'</span></h6></center>'+
                    '<center><h6 style="color:green;">Subregion : <span style="color:blue;">'+response1[1].subregion+'</span></h6></center>'+
                  
                    '<center><h6 style="color:green;">Population : <span style="color:blue;">'+response1[1].population+'</span></h6></center>'+
                  
                    '<center><h6 style="color:green;">Time Zones : <span style="color:blue;">'+response1[1].timezones+'</span></h6></center>'+
                  
                    '<center><h6 style="color:green;">Native Name : <span style="color:blue;">'+response1[1].nativeName+'</span></h6></center>'+
                    
                     '<center><h6 style="color:green;">Currency : <span style="color:blue;">'+response1[1].currencies[0].name+'</span></h6></center>'+
                    
                     '<center><h6 style="color:green;">Languages : <span style="color:blue;">'+response1[1].languages[0].name+'</span></h6></center>'
                  ;
                document.getElementById('result').innerHTML+=details;
                
                
            }
        else if(xhr.status==404)
            {
                var noFound=document.getElementById('result').innerHTML='<h1>oops! Not Found</h1>';
            }
            
    }
}