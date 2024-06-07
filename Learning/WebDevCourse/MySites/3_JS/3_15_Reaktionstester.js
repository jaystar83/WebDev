var size_min = 50;
var size_max = 250;

var formColor_min = 0;
var formColor_max = 220;

var pgb_size = 500;
var pgb_left_min = 10;    // links
var pgb_left_max = pgb_left_min + pgb_size;   // rechts
//var pgb_top_min = 155;     // oben
var pgb_top_min = 180;     // oben
var pgb_top_max = pgb_top_min + pgb_size;//  + size_max;   // unten

// border around playground ////////////////////////////////////////////////////////////////
function setPlayground()
{
document.getElementById("playground").style.position = "absolute";
document.getElementById("playground").style.left = pgb_left_min-3+"px";
document.getElementById("playground").style.top = pgb_top_min-3+"px";
document.getElementById("playground").style.width = pgb_size+size_max+2+"px";
document.getElementById("playground").style.height = pgb_size+size_max+2+"px";
document.getElementById("playground").style.border = "2px black solid";
}
// random values    ////////////////////////////////////////////////////////////////////////
function setRandomNewForm()
{
var posiLeft = Math.floor(Math.random() * (pgb_left_max - pgb_left_min + 1)) + pgb_left_min;
var posiTop = Math.floor(Math.random() * (pgb_top_max - pgb_top_min + 1)) + pgb_top_min;

var size = Math.floor(Math.random() * (size_max - size_min + 1)) + size_min;

// test
//posiLeft = pgb_left_max;
//posiTop =  pgb_top_max;
//size = size_max;
//posiLeft = pgb_left_min;
//posiTop =  pgb_top_min;
//size = size_max;

var red =  Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;
var blue = Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;
var yellow =  Math.floor(Math.random() * (formColor_max - formColor_min + 1)) + formColor_min;

var formColor = `rgb(${red},${blue},${yellow})`;

var look = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

// border around playground ////////////////////////////////////////////////////////////////
document.getElementById("formToClick").style.left = posiLeft+"px";
document.getElementById("formToClick").style.top = posiTop+"px";

document.getElementById("formToClick").style.width = size+"px";
document.getElementById("formToClick").style.height = size+"px";
if( look == 1)
    document.getElementById("formToClick").style.borderRadius = size/2+"px";
document.getElementById("formToClick").style.backgroundColor = formColor;
document.getElementById("formToClick").style.position = "absolute";
document.getElementById("formToClick").style.left = posiLeft+"px";
document.getElementById("formToClick").style.top = posiTop+"px";
}
setPlayground();
setRandomNewForm();


document.getElementById("formToClick").onClick = function()
{
	alert("klick");
	setRandomNewForm();
}

document.getElementById("einButton").onClick = function()
{
	alert("klick");
	//setRandomNewForm();
}



//alert("formColor: " + formColor + "\r\n.style.backgroundColor: " + document.getElementById("formToClick").style.backgroundColor );
/*
var myLayer = document.createElement('div');
myLayer.id = 'bookingLayer';
myLayer.style.position = 'absolute';
myLayer.style.left = '10px';
myLayer.style.top = '10px';
myLayer.style.width = '300px';
myLayer.style.height = '300px';
myLayer.style.padding = '10px';
myLayer.style.background = '#00ff00';
myLayer.innerHTML = 'This is the layer created by the JavaScript.';
document.body.appendChild(myLayer);

*/