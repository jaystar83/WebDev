var size_min = 50;
var size_max = 200;

var formColor_min = 0;
var formColor_max = 220;

var pgb_width = 600;
var pgb_height = 290;
var pgb_left_min = 10;    // links
var pgb_left_max = pgb_left_min + pgb_width;   // rechts
var pgb_top_min = 155;     // oben
var pgb_top_max = pgb_top_min + pgb_height;//  + size_max;   // unten

var startTime = new Date();
// CODE, der gemessen werden soll
var minTime = new Date();

// border around playground ////////////////////////////////////////////////////////////////
function setPlayground()
{
	document.getElementById("playground").style.position = "absolute";
	document.getElementById("playground").style.left = pgb_left_min-3+"px";
	document.getElementById("playground").style.top = pgb_top_min-3+"px";
	document.getElementById("playground").style.width = pgb_width+size_max+2+"px";
	document.getElementById("playground").style.height = pgb_height+size_max+2+"px";
	document.getElementById("playground").style.border = "2px black solid";
}
// random values    ////////////////////////////////////////////////////////////////////////
function setRandomNewForm()
{
	var posiLeft = Math.floor(Math.random() * (pgb_left_max - pgb_left_min + 1)) + pgb_left_min;
	var posiTop = Math.floor(Math.random() * (pgb_top_max - pgb_top_min + 1)) + pgb_top_min;

	var size = Math.floor(Math.random() * (size_max - size_min + 1)) + size_min;
	var red =  Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;
	var blue = Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;
	var yellow =  Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;

//	posiLeft = pgb_left_max;
//	posiLeft = pgb_left_min;
//	posiTop = pgb_top_max;
//	posiTop = pgb_top_min;
//	size = size_max;

	var formColor = `rgb(${red},${blue},${yellow})`;

	var look = Math.random();
	console.log(look);
	// border around playground ////////////////////////////////////////////////////////////////
	document.getElementById("formToClick").style.left = posiLeft+"px";
	document.getElementById("formToClick").style.top = posiTop+"px";

	document.getElementById("formToClick").style.width = size+"px";
	document.getElementById("formToClick").style.height = size+"px";
	if( look > 0.5)
		document.getElementById("formToClick").style.borderRadius = "50%";
	else
		document.getElementById("formToClick").style.borderRadius = "0%";
	document.getElementById("formToClick").style.backgroundColor = formColor;
	document.getElementById("formToClick").style.position = "absolute";
	document.getElementById("formToClick").style.left = posiLeft+"px";
	document.getElementById("formToClick").style.top = posiTop+"px";
	document.getElementById("formToClick").style.display = "block";
}

function restartTimeAndResetForm()
{
	setRandomNewForm();
	startTime = new Date();
}

setPlayground();
setRandomNewForm();


document.getElementById("formToClick").onclick = function ()
{
	
	var elapsedTime = new Date() - startTime;
	document.getElementById("formToClick").style.display = "none";
	if(elapsedTime < minTime)
		minTime = elapsedTime;
	document.getElementById("elapsedTime").innerHTML = "Benötigte Zeit: " +	elapsedTime + "ms; Schnellste: " + minTime + "ms";

	// time is the number of milliseconds it takes to execute the script
	setTimeout(restartTimeAndResetForm, Math.random() * 2000);
}