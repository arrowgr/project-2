var img;
var i = 0;
var bio = {
	"name": "Giorgos Mitsoudis",
	"role": "Front End Developer",
	"contacts": {
		"email": "mitsoudis_g@hotmail.com",
		"github": "arrowgr",
		"twitter": "@arrowgr",
		"location": "Thessaloniki, Greece"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Code like fears are often just an illusion",
	"skills": ["Html", "Css", "Javascript", "PhP", "Mysql", "Wordpress", "Magento", "Joomla!"]
};

bio.display = function () {
	var bioname = HTMLheaderName.replace("%data%", bio.name);
	var role = HTMLheaderRole.replace("%data%", bio.role);
	var profileimage = HTMLbioPic.replace("%data%", bio.biopic);
	var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


	$("#header").prepend(profileimage);
	$("#header").prepend(bioname);
	$("#header").append(role);
	$("#header").append(message);






	var contactinfo = [];
	contactinfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	contactinfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	contactinfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	contactinfo.push(HTMLlocation.replace("%data%", bio.contacts.location));



	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) {


			if (bio.skills.hasOwnProperty(i)) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}


		}
	}
	// for(i in contactinfo) {
	for (i = 0; i < contactinfo.length; i++) {
		if (contactinfo.hasOwnProperty(i)) {
			$("#topContacts").append(contactinfo[i]);
			$("#footerContacts").append(contactinfo[i]);
		}
	}
};
bio.display();

var work = {
	"jobs": [{
			"employer": "Vita4you",
			"title": "Web Developer",
			"location": "Kalamaria, Thessaloniki, Greece",
			"dates": "July 2013 - Current",
			"description": "I was hired on Vita4you only to fix few issues on the website they had. " +
				"After one month they ask me if i want to work every day for them and improve the website, " +
				"now i am there 3 years ago and we work on many thing like adwords, inbound marketing, improve website."

		}, {
			"employer": "Doca",
			"title": "Web Developer",
			"location": "Oreokatro, Thessaloniki, Greece",
			"dates": "April 2013 - Current",
			"description": "I was hired to work on Doca, i work on Digital marketing  department. " +
				"Every day it is on mine resposipility to create Adwords Campaigns and improve the websites " +
				"now we have create 4 website 2 of them are Eccomerce one for B2B and one for B2C."

		}, {
			"employer": "ImpediMed inc",
			"title": "Web Developer",
			"location": "California, Carlsbad, Usa",
			"dates": "December 2015 - December 2016",
			"description": "I work with ImpediMed for 1 year my resposibility was to fix the old website and create the new. " +
				"In the year i was there i rebuild the impedimed.com, but i create and the hellosozo.com, blog.hellosozo.com and investor.impedimed.com."


		}, {
			"employer": "JensFabuloussStuff",
			"title": "Web Developer",
			"location": "Brooklyn, New York, Usa",
			"dates": "January 2012 - July 2013",
			"description": "I was hired to work on JensFabuloussStuff from the Adoramapix, i work on website to update and fix everyday issues. "


		},

		{
			"employer": "Elecnet S.A.",
			"title": "Web Developer",
			"location": "Oreokatro, Thessaloniki, Greece",
			"dates": "July 2012 - July 2016",
			"description": "I was hired to work on Elecnet S.A.. i work on website to update and fix everyday issues. "

		}, {
			"employer": "Healthypharmacy",
			"title": "Web Developer",
			"location": "Center, Thessaloniki, Greece",
			"dates": "May 2010 - February 2011",
			"description": "I was hired to work on JensFabuloussStuff from the Adoramapix, i work on website to update and fix everyday issues. "

		}


	]
};


work.display = function () {
	if (work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		//	for(i in work.jobs) {
		for (i = 0; i < work.jobs.length; i++) {
			if (work.jobs.hasOwnProperty(i)) {
				var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
				var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

				var EmployerWorkTitle = workEmployer + workTitle;

				$(".work-entry:last").append(EmployerWorkTitle);
				$(".work-entry:last").append(workLocation);
				$(".work-entry:last").append(dates);
				$(".work-entry:last").append(workDescription);
			}
		}

	}

};

work.display();

var projects = {
	"projects": [{
		"title": "Nefeli",
		"dates": "October 2016",
		"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer ",
		"images": ["images/nefeli.jpg"],
	}, {
		"title": "Animal trading cards master",
		"dates": "October 2016",
		"description": "Created an Animal trading cards  of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
		"images": ["images/animal.jpg"],
	}, {
		"title": "Future html template",
		"dates": "September 2016",
		"description": "Created an Future html template. ",
		"images": ["images/future.jpg"],

	}]
};

projects.display = function () {
	if (projects.projects.length > 0) {
		// 	for(i in projects.projects) {
		for (i = 0; i < projects.projects.length; i++) {
			if (projects.projects.hasOwnProperty(i)) {
				$("#projects").append(HTMLprojectStart);

				var ProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
				var ProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				var ProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

				$(".project-entry:last").append(ProjectTitle);
				$(".project-entry:last").append(ProjectDates);
				$(".project-entry:last").append(ProjectDescription);

				// for(img in projects.projects[i].images) {
				for (img = 0; img < projects.projects[i].images.length; img++) {
					if (projects.projects[i].images.hasOwnProperty(img)) {
						var ProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
						$(".project-entry:last").append(ProjectImage);
					}
				}


			}
		}
	}
};

projects.display();


var education = {
	"schools": [{
		"name": "Hellenic Open University",
		"dates": "2013 - Current",
		"location": "Patra, Greece",
		"degree": "B.Sc. Computer Science",
		"majors": ["Computer Science"],
		"url": "http://www.eap.gr"
	}],
	"onlineCourses": [{
			"school": "Udacity",
			"title": "Javascript Basics",
			"dates": "January 2017",
			"url": "https://www.udacity.com/course/ud804"
		}, {
			"school": "Udacity",
			"title": "Intro to jQuery",
			"dates": "December 2016",
			"url": "https://www.udacity.com/course/ud245"
		}, {
			"school": "Udacity",
			"title": "Intro to HTML and CSS",
			"dates": "December 2016",
			"url": "https://www.udacity.com/course/ud304"
		}, {
			"school": "Udacity",
			"title": "Responsive Images",
			"dates": "November 2016",
			"url": "https://www.udacity.com/course/ud882"
		},


	]
};

education.display = function () {
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
		//for(i in education.schools) {
		for (i = 0; i < education.schools.length; i++) {
			if (education.schools.hasOwnProperty(i)) {
				$("#education").append(HTMLschoolStart);

				var SchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
				var SchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var SchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var SchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var SchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);


				$(".education-entry:last").append(SchoolName + SchoolDegree);
				$(".education-entry:last").append(SchoolDates);
				$(".education-entry:last").append(SchoolLocation);
				$(".education-entry:last").append(SchoolMajor);

			}
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			// for(i in education.onlineCourses) {	
			for (i = 0; i < education.onlineCourses.length; i++) {
				if (education.onlineCourses.hasOwnProperty(i)) {
					$("#education").append(HTMLschoolStart);
					var OnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
					var OnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
					var OnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
					var OnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

					$(".education-entry:last").append(OnlineTitle + OnlineSchool);
					$(".education-entry:last").append(OnlineDates);
					$(".education-entry:last").append(OnlineURL);
				}
			}
		}

	}
};

education.display();

$("#mapDiv").append(googleMap);
