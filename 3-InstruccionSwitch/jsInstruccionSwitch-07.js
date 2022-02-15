/* Altamiranda Emerson 
  -Ejercicio Switch 7
               */
function mostrar()
{
	let destinoIngresado;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
		                 alert("Se encuentra al oeste");
		                 break;
		case "Cataratas":
		                 alert("Se encuentra al este");
		                 break;
		case "Mar del plata":
                             alert("Se encuentra al sur");
                             break;
        case "Ushuaia":
                       alert("Se encuentra al sur");
                       break;
	}

}//FIN DE LA FUNCIÓN