// To open and close dialog modal.
const dialog = document.getElementById('preface');
const button = document.querySelector('.preface');
button.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Display the splash screen image.
const splash = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 500);
})

// Liturgical hour times
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
	document.querySelector("span.hour").textContent = 'Ramsho';
}
else if ((hour >= 21) && (hour <=23)){
	day = day + 1;
	if (day > 6 ) {
		day = 0;
	}
	document.getElementById("compline").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Soutoro';
}
else if ((hour >= 0) && (hour <6)){
	document.getElementById("lilio").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Lilio';
}
else if ((hour >= 6) && (hour <9)){
	document.getElementById("sapro").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Sapro';
}
else if ((hour >= 9) && (hour <12)){
    document.getElementById("third").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Third Hour';
}
else if ((hour >= 12) && (hour <15)){
    document.getElementById("sixth").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Sixth Hour';
}
else if ((hour >= 15) && (hour <17)){
    document.getElementById("ninth").style.display = 'block';
	document.querySelector("span.hour").textContent = 'Ninth Hour';
}