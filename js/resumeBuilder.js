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
			"description": "I work with ImpediMed for 1 year my resposibility was to fix the old website and create the new. " +
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

var projects = {
	"projects": [
		{
			"title": "Nefeli",
			"datesWorked": "October 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " ,
			"images": ["images/nefeli.jpg"],
			"url": "#"
		},
		{
			"title": "Animal trading cards master",
			"datesWorked": "October 2016",
			"description": "Created an Animal trading cards  of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/animal.jpg"],
			"url": "#"
		},
		{
			"title": "Future html template",
			"datesWorked": "September 2016",
			"description": "Created an Future html template. ",
			"images": ["images/future.jpg"],
			"url": "#"
		}
	]
};

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var ProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var ProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var ProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(ProjectTitle);
			$(".project-entry:last").append(ProjectDates);
			$(".project-entry:last").append(ProjectDescription);

			for(img in projects.projects[i].images) {
				var ProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(ProjectImage);
			}
			

		}
	}
};

projects.display();


var education = {
	"schools": [
		{ "name": "Hellenic Open University",
			"datesAttended": "2013 - Current",
			"location": "Patra, Greece",
			"degree": "B.Sc. Computer Science",
			"major": "Computer Science",
			"url": "www.eap.gr"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "January 2017",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to jQuery",
			"completed": "December 2016",
			"url": "https://www.udacity.com/course/ud245"
		},	
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "December 2016",
			"url": "https://www.udacity.com/course/ud304"
		},	
		{ "school": "Udacity",
			"title": "Responsive Images",
			"completed": "November 2016",
			"url": "https://www.udacity.com/course/ud882"
		},
	
		
	]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var SchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var SchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var SchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var SchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var SchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		

			$(".education-entry:last").append(SchoolName + SchoolDegree);
			$(".education-entry:last").append(SchoolDates);
			$(".education-entry:last").append(SchoolLocation);
			$(".education-entry:last").append(SchoolMajor);
		
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var OnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var OnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var OnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var OnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(OnlineTitle + OnlineSchool);
				$(".education-entry:last").append(OnlineDates);
				$(".education-entry:last").append(OnlineURL);
			}
		}
		
	}
};

education.display();

$("#mapDiv").append(googleMap);

