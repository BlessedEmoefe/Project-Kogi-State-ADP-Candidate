"use strict"
let rex;
const menuNav = document.querySelector(".sideMenuNav")
const menu = document.querySelector(".sidemenu")
const eventFired =()=>{



menu.addEventListener("click",()=>{
if(menuNav.style.display!="flex"){
		menuNav.style.display="flex"
}
else{
	menuNav.style.display="none"
}
})
}
eventFired()



const joke = document.querySelector(".joke")
const kate = document.querySelector(".kate")

function indexRouting(){
	location.href = "./Volunteer.html"
}
joke.addEventListener("click",indexRouting)
kate.addEventListener("click",indexRouting)




