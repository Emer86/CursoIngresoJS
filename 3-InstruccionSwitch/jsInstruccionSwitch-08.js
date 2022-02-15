/* Altamiranda Emerson 
  -Ejercicio Switch 8
               */
function mostrar()
{
	let destinoIngresado;

	destinoIngresado=document.getElementById("txtIdDestino").value;
    
    switch(destinoIngresado){
    	  case "Bariloche":
    	  case "Ushuaia":
    	                 alert("En esta zona hace frio");
    	                 break;
    	  case "Mar del plata":
    	  case "Cataratas":
    	                   alert("En esta zona hace calor");
    	                   break;
    }

}//FIN DE LA FUNCIÓN