let rex;
const menuNav = document.querySelector(".sideMenuNav")
const menu = document.querySelector(".sidemenu")
let vague = document.querySelector(".vagueText")
const eventFired =()=>{

menu.addEventListener("click",()=>{
if(menuNav.style.display!="flex"){
		menuNav.style.display="flex";
		vague.style.display = "none"

}
else{
	menuNav.style.display="none"
	vague.style.display = "block"
}
})
}
eventFired()
var deadline = new Date("Nov 2, 2019 7:00:00").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("demo").innerHTML = days + "d : " 
+ hours + "h : " + minutes + "m : " + seconds + "s"; 
	if (t < 0) { 
		clearInterval(x); 
		document.getElementById("demo").innerHTML = "EXPIRED"; 
	} 
}, 1000); 

let slideContainer = document.querySelector(".sliderContainer");
let number=600
var count = 0;
const mainSlide=() => {

	var slideShow = () => {
	if(new Date().getSeconds()%9 && count<3){
		if(window.screen.width>480){
			slideContainer.style.transform = `translateX(-${600*count}px)`
			}
			else if(window.screen.width>360 && window.screen.width<=480){
				slideContainer.style.transform = `translateX(-${330*count}px)`
				}
	
			else if(window.screen.width<=360){
					slideContainer.style.transform = `translateX(-${329*count}px)`
					}

					else{
						slideContainer.style.transform = `translateX(-${269*count}px)`
					}

		count++;
		if(count==3){
			count=0
		}
	}
	// else{
	// 	count=0
	// }
		
	};
	
	setInterval(slideShow,3000)
}
// slideShow()
mainSlide()


const bioButton = document.querySelector(".button6")
const bio = document.querySelector(".container2")
function blessed(){
	bio.style.overflow = "scroll";
	
}

bioButton.addEventListener("click",blessed)



const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")


const slide1 = document.querySelector(".secondSectionOfSliderImage1")
const slide2 = document.querySelector(".secondSectionOfSliderImage2")
const slide3 = document.querySelector(".secondSectionOfSliderImage3")
const slide4 = document.querySelector(".secondSectionOfSliderImage4")


function emoefe1(){
	slide1.style.overflow = "scroll"
	
}

function emoefe2(){
	slide2.style.overflow = "scroll"
}

function emoefe3(){
	slide3.style.overflow = "scroll"
}

function emoefe4(){
	slide4.style.overflow = "scroll"
}


button1.addEventListener("click",emoefe1)

button2.addEventListener("click",emoefe2)

button3.addEventListener("click",emoefe3)

button4.addEventListener("click",emoefe4)


const b = document.querySelector(".b")
const c = document.querySelector(".c")
function indexRouting(){
	location.href = "./Volunteer.html"
}
b.addEventListener("click",indexRouting)

c.addEventListener("click",indexRouting)
