/* Altamiranda Emerson 
  -Ejercicio IF 5
               */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad < 13 || edad > 18 ){

		alert("No sos adolescente");
	}

}//FIN DE LA FUNCIÓN