/* Altamiranda Emerson 
  -Ejercicio IF 3
               */
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if( edad > 17 ){

		alert("Usted es mayor de edad");
	}

    if( edad < 18 ){

    	alert("Usted es menor de edad");
    }

}//FIN DE LA FUNCIÓN