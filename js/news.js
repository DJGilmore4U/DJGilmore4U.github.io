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
                    console.log(news);
                    }
                    
                    document.getElementById("uno").innerHTML = "<h3> Trending Tech News </h3><span>"+ object[0].title + "</span>";
                    document.getElementById("dos").innerHTML = "<h3> More Tech News </h3><span>"+ object[1].title + "</span>";
                    document.getElementById("tres").innerHTML = "<h3> Even More Tech News </h3><span>"+ object[2].title + "</span>";
                    
	
	});

});
