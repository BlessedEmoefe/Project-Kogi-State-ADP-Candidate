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


function indexRouting(){
	location.href = "./Volunteer.html"
}


const father = document.querySelector(".father")
const girl = document.querySelector(".girl")

father.addEventListener("click",indexRouting)
girl.addEventListener("click",indexRouting)


