/* Altamiranda Emerson 
  -Ejercicio 7
               */
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	 
    let suma;
    let datoUno;
    let datoDos;
    let mensaje;
    
        
                datoUno = parseInt(document.getElementById("txtIdNumeroUno").value);
                datoDos = parseInt(document.getElementById("txtIdNumeroDos").value);


                          suma = (datoUno + datoDos); 

                          mensaje = "La suma es " + suma;

    alert(mensaje); 	
}

function restar()
{
	let restar;
    let datoUno;
    let datoDos;
    let mensaje;
    
        
                datoUno = parseInt(document.getElementById("txtIdNumeroUno").value);
                datoDos = parseInt(document.getElementById("txtIdNumeroDos").value);


                          restar = (datoUno - datoDos); 

                          mensaje = "La resta es " + restar;

    alert(mensaje); 
	
}

function multiplicar()
{ 
	let multiplicacion;
    let datoUno;
    let datoDos;
    let mensaje;
    
        
                datoUno = parseInt(document.getElementById("txtIdNumeroUno").value);
                datoDos = parseInt(document.getElementById("txtIdNumeroDos").value);


                          multiplicacion = (datoUno * datoDos); 

                          mensaje = "La multiplicacion es " + multiplicacion;

    alert(mensaje); 
	
}

function dividir()
{
    let division;
    let datoUno;
    let datoDos;
    let mensaje;
    
        
                datoUno = parseInt(document.getElementById("txtIdNumeroUno").value);
                datoDos = parseInt(document.getElementById("txtIdNumeroDos").value);


                          division = (datoUno / datoDos); 

                          mensaje = "La division es " + division;

    alert(mensaje); 
	
}

