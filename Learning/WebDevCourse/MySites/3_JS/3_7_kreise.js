document.getElementById("kreis-rot").onclick = function() {
    document.getElementById("kreis-rot").style.display = "none";
}

document.getElementById("kreis-blau").onclick = function() {
    document.getElementById("kreis-blau").style.display = "none";
}

document.getElementById("kreis-gelb").onclick = function() {
    document.getElementById("kreis-gelb").style.display = "none";
}

document.getElementById("reset").onclick = function() {
    document.getElementById("kreis-rot").style.display = "inline";
    document.getElementById("kreis-blau").style.display = "inline";
    document.getElementById("kreis-gelb").style.display = "inline";
}
