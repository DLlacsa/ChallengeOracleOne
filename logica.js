function encriptar(){
    var frase = document.getElementById("entrada").value.toLowerCase();
    var entrada = frase.replace(/e/img, "enter");
    var entrada = entrada.replace(/o/img, "ober");
    var entrada = entrada.replace(/i/img, "imes");
    var entrada = entrada.replace(/a/img, "ai");
    var entrada = entrada.replace(/u/img, "ufat");
    document.getElementById("salida").innerHTML = entrada;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("salida").style.display = "show";
    document.getElementById("salida").style.display = "inherit";
    document.getElementById("ocultar1").style.display = "none";
    document.getElementById("ocultar2").style.display = "none";
    document.getElementById("ocultar3").style.display = "none";
}
function desencriptar(){
    var frase = document.getElementById("entrada").value.toLowerCase();
    var entrada = frase.replace(/enter/img, "e");
    var entrada = entrada.replace(/ober/img, "o");
    var entrada = entrada.replace(/imes/img, "i");
    var entrada = entrada.replace(/ai/img, "a");
    var entrada = entrada.replace(/ufat/img, "u");
    document.getElementById("salida").innerHTML = entrada;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("salida").style.display = "show";
    document.getElementById("salida").style.display = "inherit";
    document.getElementById("ocultar1").style.display = "none";
    document.getElementById("ocultar2").style.display = "none";
    document.getElementById("ocultar3").style.display = "none";
}
function copiar(){
    var contenido = document.querySelector("#salida");
    contenido.select();
    document.execCommand("copy");
}