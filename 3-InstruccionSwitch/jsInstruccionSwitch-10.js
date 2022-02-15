/* Altamiranda Emerson 
  -Ejercicio Switch 10
               */
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	if (estacionIngresada=="Invierno") {
       switch(destinoIngresado){
       	     case "Bariloche":
       	                      alert("Se viaja");
       	                      break;
       	     default:
       	             alert("No se viaja");
       	             break;
       }
	}
	else if (estacionIngresada=="Verano") {
	   switch(destinoIngresado){
	   	     case "Mar del plata":
	   	     case "Cataratas":
	   	                      alert("Se viaja");
	   	                      break;
	   	     default:
	   	             alert("No se viaja");
	   	             break;
	    }
	}
	else if (estacionIngresada=="Otoño"){
	   switch(destinoIngresado){
		   	 case "Bariloche":
		   	 case "Cataratas":
		     case "Cordoba":
		     case "Mar del plata":
		   	                      alert("Se viaja");
		   	                      break;

		   }
	}
	else{
		switch(destinoIngresado){
			  case "Bariloche":
			                   alert("No se viaja");
			                   break;
			  default:
			          alert("Se viaja");
			          break;
		}
	}


}//FIN DE LA FUNCIÓN