const mensajeEncriptar = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const textoMensaje= document.querySelector(".texto-mensaje");
copiar.style.display = "none"
function validar() {
    let texto = mensajeEncriptar.value;
    let caracteres = (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g);
    let mayuscula = (/[A-Z]/g);
    let vacio = "";
    if (texto.match(caracteres) || texto.match(mayuscula)) {
        alert("No se permiten mayusculas ni caracteres especiales");
        location.reload();
        return false;
    } else if (texto === vacio) {
        alert("Ingrese un mensaje a encriptar");
        location.reload();
        return false;
    } else {
        return true;
    }
}

function encriptar(texto) {
    textoEn = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEn;
}
function desencriptar(texto) {
    textoDesen = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesen;
}

function btnEncriptar() {
    if (validar()) {
        const textoEncriptado = encriptar(mensajeEncriptar.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        mensajeEncriptar.value = "";
        textoMensaje.style.display="none"
        copiar.style.display = "block"
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensajeEncriptar.value);
    mensaje.value = textoDesencriptado;
    mensajeEncriptar.value = "";

}
function btncopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("El texto fue copiado al portapapeles.");
}