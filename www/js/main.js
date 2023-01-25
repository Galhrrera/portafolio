document.querySelector(".burguer_menu").addEventListener("click", activeBurguerMenu);

var line1 = document.querySelector(".line1_bar_menu");
var line2 = document.querySelector(".line2_bar_menu");
var line3 = document.querySelector(".line3_bar_menu");
var menu = document.querySelector(".menu");

function activeBurguerMenu() {
    line1.classList.toggle("activeline1_bar_menu");
    line2.classList.toggle("activeline2_bar_menu");
    line3.classList.toggle("activeline3_bar_menu");
    menu.classList.toggle("menu_burguer");
}


/* 
const texto = document.getElementById("texto");

window.onscroll = function() { 
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { 
        texto.classList.add("clase");
    } 
}

*/