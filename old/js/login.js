var string=location.href
// This avoids the page to loop...

if (string=== "https://DJGilmore4U.github.io/privy/test.html/"){

document.location.href= "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86m8ebytnwl0x3&redirect_uri=https%3A%2F%2FDJGilmore4U.github.io%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile"
}
console.log("HelloWorld");


string=window.location.href
 
var start=string.search("#access_token=") +14
var end= string.search("&token_type=")
var token = ''
token = string.substring(start,end)

if (token==='') {
  document.location.href="https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=86m8ebytnwl0x3&client_secret=FIqU8npvVzE6QIur"
 console.log(response);
 }
 $(document).on('click','#submit', function(){
  var id=''
  
  if (email==''){email='jondo@gmail.com'}
  
  $.ajax({
      url: "https://api.linkedin.com/v2/jobs/~",
      beforeSend: function(xhr) {
           xhr.setRequestHeader("Authorization", "Bearer " + token)
      }, success: function(data){
          id=data.id
          alert(data);
      }
  })
  
  })

  
