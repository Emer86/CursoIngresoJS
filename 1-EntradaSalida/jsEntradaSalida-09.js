/* Altamiranda Emerson 
  -Ejercicio 9
               */
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
     let sueldo;
     let resultado;
     let porcentaje;


         sueldo = parseInt(document.getElementById("txtIdSueldo").value);
     
         porcentaje = (sueldo * 10 / 100);

         resultado = porcentaje;
           
            document.getElementById("txtIdResultado").value = resultado;


}
