/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
    let alambre;
    let mensaje;

	    largo = parseInt(document.getElementById("txtIdLargo").value);
	    ancho = parseInt(document.getElementById("txtIdAncho").value);
        
    alambre = (largo * 2 + ancho * 2) * 3;

    mensaje = ("Usted debe comprar " + alambre);


    alert(mensaje);


}
function Circulo () 
{
	let radio;
	let mensaje;
	let alambre;
	const PI = 3.1416;


	    radio = parseInt(document.getElementById("txtIdRadio").value);

	alambre = (2 * PI * radio) * 3; 

	mensaje = ("Usted debe comprar " + alambre.toFixed(2));

	alert(mensaje);

	
}
function Materiales () 
{
	
}