/* Altamiranda Emerson 
  -Ejercicio 8
               */
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	    let suma;
    let dividendo;
    let divisor;
    let mensaje;
    
        
                dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
                divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);


                          suma = (dividendo % divisor); 

                          mensaje = "El resto es " + suma;

    alert(mensaje); 
}
