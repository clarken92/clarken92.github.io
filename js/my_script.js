/* Ensure navbar is highlighted correctly */
$(document).ready(function() {
	var file_name = location.pathname.split("/").slice(-1)[0];
	
	var nav_items = document.getElementsByClassName("nav-item");
	for (i=0; i < nav_items.length; i++){
		nav_link = nav_items[i].getElementsByTagName("a")[0];
		
		if (((file_name == "index.html" || file_name == "") && (nav_link.getAttribute("href") == "/")) || 
			(file_name == nav_link.getAttribute("href"))){
			if (!nav_items[i].className.includes("active")){
				nav_items[i].className += " active";
			}
		}
		else {
			if (nav_items[i].className.includes("active")){
				nav_items[i].className = nav_items[i].className.replace("active", "");
			}
		}
		
		nav_items[i].className = nav_items[i].className.replace(/\s+/g, ' ').trim();
	}
});


function showOlderNews(obj){	
	var recent_news = document.getElementById("recent-news")
	var old_news = document.getElementById("old-news")
	if ((recent_news != null) && (old_news != null)){
		recent_news.style.display = 'none';
		old_news.style.display = '';
	}
};


function showLatestNews(obj){	
	var recent_news = document.getElementById("recent-news")
	var old_news = document.getElementById("old-news")
	if ((recent_news != null) && (old_news != null)){
		recent_news.style.display = '';
		old_news.style.display = 'none';
	}
};