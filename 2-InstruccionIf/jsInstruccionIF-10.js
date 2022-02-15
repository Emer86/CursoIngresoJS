/* Altamiranda Emerson 
  -Ejercicio IF 10
               */
function mostrar()
{

	const MAXIMO = 10;
	const MINIMO = 1;
	let numero;

		numero = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO  );

		if (numero < 4) {    
           alert("Vamos, la proxima se puede " + numero);
           }
        else if (numero >= 9){         
           alert("EXCELENTE " + numero);
		   }
        else{
        	alert("APROBO " + numero);  
           }
	    

}//FIN DE LA FUNCIÓN