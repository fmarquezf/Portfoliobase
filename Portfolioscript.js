//function Move(element) {
//    const y = document.getElementById(element.innerHTML).getBoundingClientRect().top + window.scrollY;
//    window.scroll({
//        top: y,
//        behavior: 'smooth'
//    });
//}

function Move(elemento) {
    const scrollelemento = document.getElementById(elemento.innerHTML);
    scrollelemento.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

let desplazamiento = 0;
let conteo = 0;
var Progreballs = document.getElementsByClassName("Progreso");

var links = ["https://codepen.io/fmarquez/full/OJwrZyr",
    "https://codepen.io/fmarquez/full/eYjMGKe",
    "https://codepen.io/fmarquez/full/JjBBXOW",
    "https://codepen.io/fmarquez/full/PoamKQq",
    "https://codepen.io/fmarquez/full/XWYpyzg"
]
var description = document.getElementById("Description");
var textcription = document.getElementById("textcription");
var boton = document.getElementById("seeproject");

function SlideLeft() {
    
    var carrusel = document.getElementById("carrusel");
    desplazamiento += 21;
    if (desplazamiento > 0) {
        desplazamiento = 0;
    }
    else {
        conteo -= 1;
        Progreballs[conteo].style.backgroundColor = "rgba(255,255,255,1)";
        Progreballs[conteo+1].style.backgroundColor = "rgba(255,255,255,0.5)";

    }
    boton.href = links[conteo];
    textcription.innerHTML = Projectimgs[conteo].alt + ": ";
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}



var Projectimgs = document.getElementsByClassName("Projectimgs");

function SlideRight() {
    var carrusel = document.getElementById("carrusel");
    desplazamiento -= 21;
    if (desplazamiento < -84) {
        desplazamiento = -84;
    }
    else {
        conteo += 1;
        Progreballs[conteo].style.backgroundColor = "rgba(255,255,255,1)";
        Progreballs[conteo - 1].style.backgroundColor = "rgba(255,255,255,0.5)";
    }
    boton.href = links[conteo];
    textcription.innerHTML = Projectimgs[conteo].alt + ": ";
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

function checar(){
    if (window.innerWidth < 480) {
        document.getElementById("menu").classList.add("hidden");
    }
    else {
        document.getElementById("menu").classList.remove("hidden");
    }
}
checar();
window.addEventListener("resize", checar);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (window.innerWidth > 480) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu").classList.remove("hidden");
        } else {
            document.getElementById("menu").classList.add("hidden");
        }
        prevScrollpos = currentScrollPos;
    }
    else {
        return;
    }
}

function mostrar() {
    document.getElementById("menu").classList.remove("hidden");
}

function retirar() {
    if (window.innerWidth < 480) {
        document.getElementById("menu").classList.add("hidden");
    }
}

