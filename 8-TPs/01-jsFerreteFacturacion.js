/* Altamiranda Emerson 
  -TP 1
               */
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let mensaje;

	  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	  suma = (precioUno + precioDos + precioTres);
	  mensaje = ("La suma es " + suma);

  alert(mensaje);
}


function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;
	let resultado;
	

	  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	  suma = (precioUno + precioDos + precioTres / 3);
	  promedio = (suma / 3);
	  resultado = promedio;


  alert("El promedio es " + resultado.toFixed(2));

}


function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let sumaDos;
	let iva;
	let mensaje;

	  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	  suma = (precioUno + precioDos + precioTres);
	  iva = (suma * 21 / 100);
	  sumaDos = (suma + iva);
      mensaje = ("el precio final es " + sumaDos);

  alert(mensaje);

}