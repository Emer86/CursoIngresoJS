/* Altamiranda Emerson 
  -Ejercicio Switch 1
               */
function mostrar()
{


	let mesDelAnio;

    mesDelAnio = document.getElementById("txtIdMes").value;
	
	switch(mesDelAnio){

		case "Enero":
		             alert("Que comiences bien el año!!!");
        			 break;
        case "Marzo":
        			 alert("A clases!!!");
       				 break;
        case "Julio":
        			 alert("Se vienen las vacaciones!!!");
     				 break;
        case "Diciembre":
        				 alert("Felices fiesta!!!");
    				     break;

	}



}//FIN DE LA FUNCIÓN