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


const c = document.querySelector(".c")
const d = document.querySelector(".d")
const e = document.querySelector(".e")
const f = document.querySelector(".f")
const g = document.querySelector(".g")
const h = document.querySelector(".h")
const i = document.querySelector(".i")
const j = document.querySelector(".j")
const k = document.querySelector(".k")
const m = document.querySelector(".m")
const n = document.querySelector(".n")

c.addEventListener("click",indexRouting)
d.addEventListener("click",indexRouting)
e.addEventListener("click",indexRouting)
f.addEventListener("click",indexRouting)
g.addEventListener("click",indexRouting)
g.addEventListener("click",indexRouting)
h.addEventListener("click",indexRouting)
i.addEventListener("click",indexRouting)
j.addEventListener("click",indexRouting)
k.addEventListener("click",indexRouting)
m.addEventListener("click",indexRouting)
n.addEventListener("click",indexRouting)