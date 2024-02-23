/*la letra "e" es converitda para "enter"*/
            // "i ---- "imes;
            // "a " ---- "ai";
            // "o"-- "ober";
            // "u"--- "ufat";  

let mensaje= "Mensaje Encriptado";
let mensajeDesencriptado = "Mensaje Desencriptado ";


function encriptar() {
  var texto = document.getElementById("textarea1").value;
  textoCifrado = texto.replace(/e/gim, "enter");
  textoCifrado = textoCifrado.replace(/i/gim, "imes");
  textoCifrado = textoCifrado.replace(/a/gim, "ai");
  textoCifrado = textoCifrado.replace(/o/gim, "ober");
  textoCifrado = textoCifrado.replace(/u/gim, "ufat");
  texto = document.getElementById("textarea1").value = textoCifrado;

  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("parrafo").style.display = "none";
  document.getElementById("avisodemensaje").textContent = mensaje;


  

}  
 


function desencriptar() {
   texto = document.getElementById("textarea1").value;
  textoCifrado = texto.replace(/enter/gim, "e");
  textoCifrado = textoCifrado.replace(/imes/gim, "i");
  textoCifrado = textoCifrado.replace(/ai/gim, "a");
  textoCifrado = textoCifrado.replace(/ober/gim, "o");
  textoCifrado = textoCifrado.replace(/ufat/gim, "u");
  texto = document.getElementById("textarea1").value= textoCifrado;

  document.getElementById("avisodemensaje").textContent = mensajeDesencriptado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  document.getElementById("parrafo").style.display= "none";


}

function copiar() {
  var contenido = document.querySelector("#textarea1");
  contenido.select();
  document.execCommand("cut");
  alert("se copio el texto");
}


