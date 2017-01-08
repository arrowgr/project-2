/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var awesomeThoghts = "i am awesome";
 var funThoughts = awesomeThoghts.replace("awesome","fun");
 var formattedname  = HTMLheaderName.replace("%data%", "George"); 
//$("#header").prepend(formattedname);
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer"); 
// $("#header").append(formattedRole);
var work  = [
  {
	"employer": "geo",
  	"title": "web",
  	"location": "Thessaloniki",
  	"dates": 250,
  	"description": "Kalos einai"
  }, 
  {
	"employer": "kate",
  	"title": "bank",
  	"location": "Thessaloniki",
  	"dates": 150,
  	"description": "Adeia exxei"
  }, 
  {
	"employer": "Nefeli",
  	"title": "babe",
  	"location": "Thessaloniki",
  	"dates": 350,
  	"description": "Mikri einai"

  }
]	



;

var projects  = {
	"title": "title",
	"dates": "dates",
	"description": "description",
	"images": [
		"images/1.jpg",
		"images/2.jpg",
		"images/3.jpg",
		"images/4.jpg",
		],

	
};

var bio = {
	"name": formattedname,
	"role": formattedRole,
	"contact" : {
		
		 "street" :"Sourmenon 34",
		 "email" :  "mitsoudis_g@hotmail.com",
		 "github" : "arrowgr",
		 "twiitr" : "arrowgr"
		 },
	"welcome" : "Auto einai to Bio mou",
	"skill" : "Js,css,html5" ,
	"image" : "images/fry.jpg"
	};
	
var education = {
	
"schools": [
{
	"name" : "George Mitsoudis",
	"location" : "Thessaloniki",
	"degree" : "BA",
	"dates" : "dates",
	"url " : "url",
	"onlineCourses" : {
		 "title" :"title",
		 "school" :  "school",
		 "dates" : "dates",
		 "url" : "url"
	}
}
]
	
};
 
 function loopwork (){
 $("#workExperience").append(HTMLworkStart);
}

 
 function displayWork (){
 var empoyer,title ;
for(var i=0; i< Object.keys(work).length;i++){
	
	loopwork();
  empoyer = HTMLworkEmployer.replace("%data%", work[i].employer)
  title = HTMLworkTitle.replace("%data%", work[i].title);
  $(".work-entry:last").append(empoyer + title);
  $(".work-entry:last").append(HTMLworkDates.replace("%data%", work[i].dates));
  $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[i].location));
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[i].description));
  
}
}

displayWork () ;
$("#header").prepend(bio.name);

if(bio.skill.length > 0){

 $("#header").append(HTMLskillsStart);
 $("#skills").append(HTMLskills.replace("%data%", bio.skill));
 

}

 $("#mapDiv").append(googleMap);
$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});


 /* 
 var email = "katerina@gmail.com";
 var newEmail = email.replace("gmail","nefeli");
 console.log(email);
 console.log(newEmail);
 */
 
 