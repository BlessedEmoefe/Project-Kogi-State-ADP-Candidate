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
		slideContainer.style.transform = `translateX(-${325*count}px)`
		count++;
		if(count==3){
			count=0
		}
	}
	// else{
	// 	count=0
	// }
		
	};
	
	setInterval(slideShow,10000)
}
// slideShow()
mainSlide()


const bioButton = document.querySelector(".button6")
const bio = document.querySelector(".container2")
function blessed(){
	bio.style.overflow = "scroll";
	
}

bioButton.addEventListener("click",blessed)



const b = document.querySelector(".b")
function indexRouting(){
	location.href = "./Volunteer.html"
}
b.addEventListener("click",indexRouting)

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


const button1 = document.querySelector(".button1")

const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")



const slide1 = document.querySelector(".secondSectionOfSliderImage1")
const slide2 = document.querySelector(".secondSectionOfSliderImage2")
const slide3 = document.querySelector(".secondSectionOfSliderImage3")
const slide4 = document.querySelector(".secondSectionOfSliderImage4")
const slide5 = document.querySelector(".secondSectionOfSliderImage5")



function emoefe(){
	slide1.style.overflow = "scroll"
	
}

function emoefe1(){
	slide2.style.overflow = "scroll"
}

function emoefe2(){
	slide3.style.overflow = "scroll"
}

function emoefe3(){
	slide4.style.overflow = "scroll"
}

function emoefe4(){
	slide5.style.overflow = "scroll"
}




button1.addEventListener("click",emoefe)

button2.addEventListener("click",emoefe1)

button3.addEventListener("click",emoefe2)

button4.addEventListener("click",emoefe3)

button5.addEventListener("click",emoefe4)

