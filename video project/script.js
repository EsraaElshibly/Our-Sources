var myButton=document.getElement("goub");
window.onscroll=function () {
	"use strict"
	if (window.pageYoffset >= 400){
		myButton.style.display ="block";

	}else{
		myButton.style.display ="none";

	}
};
myButton.onclick=function(){
	"use strict"
	window.scrollTo(0,0);
};
