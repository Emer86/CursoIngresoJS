/* Altamiranda Emerson 
  -Ejercicio 6
               */
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
