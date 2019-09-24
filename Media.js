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


const def = document.querySelector(".def")
const enf = document.querySelector(".enf")


function indexRouting(){
	location.href = "./Volunteer.html"
}

def.addEventListener("click",indexRouting)
enf.addEventListener("click",indexRouting)
