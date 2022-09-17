const splash = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
})

//initialize variables
var weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var day = d.getDay();

if (min <= 9) {
	min = "0" + min; 
}
if (sec <= 9) {
	sec = "0" + sec; 
}
if (hour < 10) {
	hour = "0" + hour; 
}

//check to see which liturical hour document to present.
if ((hour >= 17) && (hour <21)){
	day = day + 1;
	if (day > 6 ) {
		day = 0;
	}
	document.getElementById("ramsho").style.display = 'block';
}
else if ((hour >= 21) && (hour <=23)){
	day = day + 1;
	if (day > 6 ) {
		day = 0;
	}
	document.getElementById("compline").style.display = 'block';
}
else if ((hour >= 0) && (hour <6)){
	document.getElementById("lilio").style.display = 'block';
}
else if ((hour >= 6) && (hour <9)){
	document.getElementById("sapro").style.display = 'block';
}
else if ((hour >= 9) && (hour <12)){
    document.getElementById("third").style.display = 'block';
}
else if ((hour >= 12) && (hour <15)){
    document.getElementById("sixth").style.display = 'block';
}
else if ((hour >= 15) && (hour <17)){
    document.getElementById("ninth").style.display = 'block';
}