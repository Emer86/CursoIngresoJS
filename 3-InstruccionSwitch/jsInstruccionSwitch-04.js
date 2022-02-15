/* Altamiranda Emerson 
  -Ejercicio Switch 4
               */
function mostrar()
{
	let mesDelAnio;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch(mesDelAnio){

		   case "Abril":
		   case "Junio":
		   case "Septiembre":
		   case "Noviembre":
		                    alert("Tiene 30 dias");
		        break;
		   case "Febrero":
		                  alert("Tiene 28 dias");
		        break;
		   default:  
		           alert("Tiene 31 dias");
		       break;
	}

}//FIN DE LA FUNCIÓN