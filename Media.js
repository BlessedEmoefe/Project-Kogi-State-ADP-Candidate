"use strict"


const def = document.querySelector(".def")
const enf = document.querySelector(".enf")


function indexRouting(){
	location.href = "./Volunteer.html"
}

def.addEventListener("click",indexRouting)
enf.addEventListener("click",indexRouting)
