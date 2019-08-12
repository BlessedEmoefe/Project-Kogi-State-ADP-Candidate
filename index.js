var deadline = new Date("Nov 5, 2019 15:37:25").getTime(); 
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
		slideContainer.style.marginLeft = `-${600*count}px`
		count++;
		if(count==3){
			count=0
		}
	}
	// else{
	// 	count=0
	// }
		
	};
	
	setInterval(slideShow,2000)
}
// slideShow()
// mainSlide()