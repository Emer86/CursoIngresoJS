function mostrar()
{
	let edad;

	    edad = document.getElementById("txtIdEdad").value;

	if ( edad >= 18 ){

            alert("Usted es mayor de edad");
	}

	if ( edad >= 13 && edad <=17 ) {

            alert("Usted es adolescente");
      }

    if (edad <= 12) {

            alert("Usted es niño");
    }




}//FIN DE LA FUNCIÓN