src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

$(document).ready(function() {
	 var techNews = [];
	 articleNames = [];			
	 var queryURL = "https://newsapi.org/v2/top-headlines?q=technology&apiKey=14c2005b50fe4c63bba2af13e8151e5c";
object= {};

	$.ajax({
					url: queryURL,
					method: "GET"
				}).done(function(response) {
                    var results = response.articles;
                    object = response.articles;
					for (var i = 0; i < object.length; i++) {
					var news = object[i].title;
					var link = object[i].url;
                    }
                    
                    document.getElementById("uno").innerHTML = "<h3 id= 'dup'; class='text-center'><a href='"+object[0].url+"'>"+object[0].title+"</a></h3><h5 id= 'dup'; class='text-center;'>"+object[0].description+"</h5>";
                    document.getElementById("dos").innerHTML = "<h3 id= 'dup'; class='text-center'><a href='"+object[1].url+"'>"+object[1].title+"</a></h3><h5 id= 'dup'; class='text-center;'>"+object[1].description+"</h5>";
					document.getElementById("tres").innerHTML = "<h3 id= 'dup'; class='text-center'><a href='"+object[2].url+"'>"+object[2].title+"</a></h3><h5 id= 'dup'; class='text-center;'>"+object[2].description+"</h5>";
					document.getElementById("quatro").innerHTML = "<h3 id= 'dup'; class='text-center'><a href='"+object[3].url+"'>"+object[3].title+"</a></h3><h5 id= 'dup'; class='text-center;'>"+object[3].description+"</h5>";
                    
	
	});

});
