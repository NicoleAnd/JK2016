var changeRed = document.getElementById("red");
var changeYellow = document.getElementById("yellow");
var changeBlue = document.getElementById("blue");
var changeGreen = document.getElementById("green");

changeRed.onclick = function() {
    var color = "#fc605c";
    changeColor(color);
    localStorage.clor = "1";
}
changeYellow.onclick = function() {
    var color = "#fdbd41";
    changeColor(color);
    localStorage.clor = "2";
}
changeBlue.onclick = function() {
    var color = "#33a6ff";
    changeColor(color);
    localStorage.clor = "3";
}
changeGreen.onclick = function() {
        var color = "#0aa770";
        changeColor(color);
        localStorage.clor = "4";
}
window.onload = function() {
    if (localStorage.clor == '1') {
        changeRed.onclick();
    } else if (localStorage.clor == '2') {
        changeYellow.onclick();
    } else if (localStorage.clor == '3') {
        changeBlue.onclick();
    } else if (localStorage.clor == '4') {
        changeGreen.onclick();
    }
};

function changeColor(color) {
    document.getElementById("menu-List").style.borderTopColor = color;
    document.getElementById("menus1-li-first").style.backgroundColor = color;
    document.getElementById("menus2-inner").style.borderColor = color;
    document.getElementById("menus2-title").style.color = color;
    document.getElementById("menu-address-content").style.borderColor = color;
    document.getElementById("sngreen").style.color = color;
    document.getElementById("gmgreen").style.color = color;
    document.getElementById("yhgreen").style.color = color;
    document.getElementById("algreen").style.color = color;
    document.getElementById("tbgreen").style.color = color;
    document.getElementById("gwgreen").style.color = color;
    document.getElementById("sjgreen").style.color = color;
}
