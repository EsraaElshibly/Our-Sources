// change color mood
function useStyle(n) {
    $("#styling").attr({ "href" : "css/style" + n + ".css" });
    localStorage.setItem('mood',JSON.stringify(n));
    JSON.parse(localStorage.getItem('mood'));
}

// scroll to the top of the document
var mybutton = document.getElementById("scrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0; 
};