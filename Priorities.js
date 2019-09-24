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


const hex = document.querySelector(".hex")
const ind = document.querySelector(".ind")

function indexRouting1(){
	location.href = "./Volunteer.html"
}


hex.addEventListener("click",indexRouting1)
ind.addEventListener("click",indexRouting1)
