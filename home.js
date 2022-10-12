var tabs = document.querySelectorAll(".tabs button");
var all = document.querySelectorAll(".all-card");
var leadership = document.querySelectorAll(".leadershipmanagement");
var beginnerinternship = document.querySelectorAll(".beginnerinternship");
var identityaccessmanagement = document.querySelectorAll(".identityaccessmanagement");
var cybersecurity = document.querySelectorAll(".cybersecurity");
var webdevelopment = document.querySelectorAll(".webdevelopment");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "leadershipmanagement"){
			leadership.forEach((leadershipmanagement)=>{
				leadershipmanagement.style.display = "block";
			})
		}
		else if(tabval == "beginnerinternship"){
			beginnerinternship.forEach((beginnerinternship)=>{
				beginnerinternship.style.display = "block";
			})
		}
    else if(tabval == "identityaccessmanagement"){
			identityaccessmanagement.forEach((identityaccessmanagement)=>{
				identityaccessmanagement.style.display = "block";
			})
		}
    else if(tabval == "cybersecurity"){
			cybersecurity.forEach((cybersecurity)=>{
				cybersecurity.style.display = "block";
			})
		}
    else if(tabval == "webdevelopment"){
			webdevelopment.forEach((webdevelopment)=>{
				webdevelopment.style.display = "block";
			})
		}



		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})


/* to change prince position on web development team  while changing the teams*/
function change_text(){
    document.getElementById("prince_position").innerHTML = "Back-End Developer";
}

function change_operation(){
    document.getElementById("prince_position").innerHTML = "Operation Manager";
}
