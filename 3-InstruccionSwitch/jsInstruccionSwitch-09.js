/* Altamiranda Emerson 
  -Ejercicio Switch 9
               */
function mostrar()
{
	let estacionIngresada;
    let destinoIngresado;
    let suma10;
    let suma20;
    let resta10;
    let resta20;
    const PRECIO=15000;

    estacionIngresada=document.getElementById("txtIdEstacion").value;
    destinoIngresado=document.getElementById("txtIdDestino").value;

    suma10= (PRECIO*10/100) + PRECIO;
    suma20= (PRECIO*20/100) + PRECIO;
    resta10= PRECIO -(PRECIO*10/100);
    resta20= PRECIO-(PRECIO*20/100);


    if (estacionIngresada=="Invierno") {
    	switch(destinoIngresado){
    		case "Bariloche":
    		                 alert("El precio es "+suma20);
    		                 break;
    		case "Mar del plata":
                                 alert("El precio es "+resta20);
                                 break;
            default:
                    alert("El precio es "+resta10);
                    break;
    	}
    }
    else if (estacionIngresada=="Verano"){
        switch(destinoIngresado){
    		 case "Bariloche":
    		                  alert("El precio es "+resta20);
    		                  break;
    		 case "Mar del plata":
                                  alert("El precio es "+suma20);
                                  break;
             default:
                     alert("El precio es "+suma10);
                     break;
         }
    }
    else{
    	 switch(destinoIngresado){
    		  case "Bariloche":
    		                   alert("El precio es "+suma10);
    		                   break;
    		  case "Mar del plata":
                                   alert("El precio es "+suma10);
                                   break;
              case "Cataratas":
                               alert("El precio es "+suma10);
                               break;
              default:
                      alert("El precio es "+PRECIO);
                      break;
          }
    }

}//FIN DE LA FUNCIÓN*/