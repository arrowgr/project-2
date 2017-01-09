var bio = {
	"name": "Giorgos Mitsoudis",
	"role": "Front End Developer",
	"contacts": {
		"email": "mitsoudis_g@hotmail.com",
		"github": "arrowgr",
		"twitter": "@arrowgr",
		"location": "Thessaloniki, Greece"
	},
	"picture": "images/me.jpg",
	"welcome": "Code like fears are often just an illusion",
	"skills": ["Html", "Css", "Javascript", "PhP", "Mysql", "Wordpress", "Magento", "Joomla!"]
};


var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var profileimage = HTMLbioPic.replace("%data%", bio.picture);
var message = HTMLwelcomeMsg.replace("%data%", bio.welcome);


$("#header").prepend(profileimage);
$("#header").prepend(name);
$("#header").append(role);
$("#header").append(message);






var contactinfo = [];
contactinfo.push(HTMLemail.replace("%data%", bio.contacts.email));
contactinfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
contactinfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
contactinfo.push(HTMLlocation.replace("%data%", bio.contacts.location));



if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
for(i in contactinfo) {
	$("#topContacts").append(contactinfo[i]);
	$("#footerContacts").append(contactinfo[i]);
}

var work = {
	"jobs": [
		{
			"employer": "Vita4you",
			"title": "Web Developer",
			"location": "Kalamaria, Thessaloniki, Greece",
			"datesWorked": "July 2013 - Current",
			"description": "I was hired on Vita4you only to fix few issues on the website they had. " +
			"After one month they ask me if i want to work every day for them and improve the website, "+
			"now i am there 3 years ago and we work on many thing like adwords, inbound marketing, improve website."
	
		},
		{
			"employer": "Doca",
			"title": "Web Developer",
			"location": "Oreokatro, Thessaloniki, Greece",
			"datesWorked": "April 2013 - Current",
			"description": "I was hired to work on Doca, i work on Digital marketing  department. " +
			"Every day it is on mine resposipility to create Adwords Campaigns and improve the websites "+
			"now we have create 4 website 2 of them are Eccomerce one for B2B and one for B2C."
	
		},
		{
			"employer": "ImpediMed inc",
			"title": "Web Developer",
			"location": "California, Carlsbad, Usa",
			"datesWorked": "December 2015 - December 2016",
			"description": "I work with Impedime for 1 year my resposibility was to fix the odl website and create the new. " +
			"In the year i was there i rebuild the impedimed.com, but i create and the hellosozo.com, blog.hellosozo.com and investor.impedimed.com."
			

		},
		{
			"employer": "JensFabuloussStuff",
			"title": "Web Developer",
			"location": "Brooklyn, New York, Usa",
			"datesWorked": "January 2012 - July 2013",
			"description": "I was hired to work on JensFabuloussStuff from the Adoramapix, i work on website to update and fix everyday issues. " 

	
		},
		
		{
			"employer": "Elecnet S.A.",
			"title": "Web Developer",
			"location": "Oreokatro, Thessaloniki, Greece",
			"datesWorked": "July 2012 - July 2016",
			"description": "I was hired to work on Elecnet S.A.. i work on website to update and fix everyday issues. " 
	
		},
		{
			"employer": "Healthypharmacy",
			"title": "Web Developer",
			"location": "Center, Thessaloniki, Greece",
			"datesWorked": "May 2010 - February 2011",
			"description": "I was hired to work on JensFabuloussStuff from the Adoramapix, i work on website to update and fix everyday issues. " 
	
		}
		
		
	]
};

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var datesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var EmployerWorkTitle = workEmployer + workTitle;

			$(".work-entry:last").append(EmployerWorkTitle);
			$(".work-entry:last").append(workLocation);
			$(".work-entry:last").append(datesWorked);
			$(".work-entry:last").append(workDescription);
		}

	}

}

displayWork();

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


 
 /*function loopwork (){
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
*/

 
 /* 
 var email = "katerina@gmail.com";
 var newEmail = email.replace("gmail","nefeli");
 console.log(email);
 console.log(newEmail);
 */
 
