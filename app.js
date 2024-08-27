// recolectando datos 
const Controlmayusculas = /[A-Z]/g;
const ControlcaracteresEspeciales = /^[a-z\s]+$/;
let textoUsuario = document.querySelector('textarea');
let mensajeVacio = document.querySelector(".mensaje_vacio");
let cajaTextoFinal = document.querySelector("#textoFinal");
let nuevaCadena = '';
let letraE = 'enter',
letraI = 'imes',
letraA = 'ai',
letraO = 'ober',
letraU = 'ufat';


function validarTexto(cadena, tipoDeFuncion){
	
	let encontroMayus = cadena.match(Controlmayusculas);
	let encontroCaracteresEspeciales = ControlcaracteresEspeciales.test(cadena);

	if (encontroMayus || !encontroCaracteresEspeciales) {
		alert("El texto no debe contener mayúsculas ni caracteres especiales");
		nuevaCadena = '';
	}else{
		if (tipoDeFuncion == 'encriptar') {
			enciptarTexto(cadena);
			
		}else{
			desenciptarTexto(cadena);
		}
		document.querySelector(".boton-copiar").style.display = "block";
		mensajeVacio.style.display = "none";
		cajaTextoFinal.innerHTML = nuevaCadena;
		nuevaCadena = nuevaCadena;
	}
	return;
}

function enciptarTexto(cadena){
	nuevaCadena = cadena
	.replace(/e/g, letraE)
	.replace(/i/g, letraI)
	.replace(/a/g, letraA)
	.replace(/o/g, letraO)
	.replace(/u/g, letraU);
	
	return;
}
function desenciptarTexto(cadena){
	nuevaCadena = cadena
	.replace(/enter/g, 'e')
	.replace(/imes/g, 'i')
	.replace(/ai/g, 'a')
	.replace(/ober/g, 'o')
	.replace(/ufat/g, 'u');
	return;
}

function encrypt(){
	let cadena = textoUsuario.value;
	validarTexto(cadena, 'encriptar');
}
function desencrypt(){
	let cadena = textoUsuario.value;
	validarTexto(cadena);
}

async function copiar() {
    try {
      await navigator.clipboard.writeText(cajaTextoFinal.innerHTML);
      alert("Se copió el texto en el portapapeles");
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }