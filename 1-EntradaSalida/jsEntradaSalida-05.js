/* Altamiranda Emerson 
  -Ejercicio 5
               */
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;


	         nombre = "Usted se llama " + document.getElementById("txtIdNombre").value;
	         edad = " y tiene " + document.getElementById("txtIdEdad").value + " años";


	 alert(nombre + edad);


}
