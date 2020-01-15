var button = document.querySelector("button");
var body = document.querySelector("body");
isPink= false;

button.addEventListener("click", function () {
	if (!isPink)  {
		body.style.background= "pink";
	    button.style.color= "blue";
	    isPink=true
     }
     else {
     	body.style.background= "white";
	    button.style.color= "black";

     }
});

