//1 Pido que se ingrese algo y muestro que es
let parametroEj1 = prompt("ingrese un valor para ver que tipo de dato es: ")
 if (!isNaN(parametroEj1) && parametroEj1 != "" && parametroEj1 != null) {
        console.log(typeof(parseInt(parametroEj1)))
    }
else {
        console.log(typeof(parametroEj1))
    }

//Ejercicio 2
var resta = 0, parametroEj2_2 = "", ejecuta = 0;
let parametroEj2_1 = prompt("ingrese un numero: ");
        if (isNaN(parametroEj2_1) || parametroEj2_1 == "") {
            alert("No es un numero parametro 1")
            ejecuta = 1;
            }
        else {
            parametroEj2_2 = prompt("ingrese otro numero: ");
            if (isNaN(parametroEj2_2) || parametroEj2_2 == "") {
                alert("No es un numero parametro 2")
                ejecuta = 1;
            }
        } 
    if (ejecuta == 0) {     
        resta = parseInt(parametroEj2_1) - parseInt(parametroEj2_2);
        console.log(resta)  
    }
    
//Ejercicio 3

var valor1a = 10, valor2b = 20;
console.log("Valor de a es " + valor1a + ", el valor de b es " + valor2b);
console.log(cambio_valor(valor1a,valor2b));

function cambio_valor(valor1a, valor2b) {
var cambio_a = 0, cambio_b = 0;
cambio_b = valor2b;
cambio_a = valor1a;
return("Valor de a en b " + cambio_b + ", Valor de b en a " + cambio_a);
}

//Ejercicio 4 perimetro valor * 4, superficie lado * lado
var ladoEj4 = 5;
console.log(perimetro_superficie(ladoEj4));

function perimetro_superficie(ladoEj4) {
let perimetro = 0, superficie = 0;
perimetro = ladoEj4 * 4;
superficie = ladoEj4 * ladoEj4;
return("El perimetro de 5 es: " + perimetro + ", el cuadrado de 5 es: " + superficie);
}

//Ejercicio 5

var temperaturaFahrenheit = 110;
console.log(temperatura_Conversor(temperaturaFahrenheit));

function temperatura_Conversor(temperaturaFahrenheit) {
let valorTemperaturaFarenheit = 1.8, retorno = 0;
retorno = (temperaturaFahrenheit - 32) / valorTemperaturaFarenheit;  
let retornoCorto = retorno.toFixed(4);
return("La temperatura Fahrenheit de 110 en Celsius es : " + retornoCorto);
} 

//Ejercicio 6

//variable para comenzar a multiplicar, no se pone en cero porque me daria siempre 
//cero la multiplicacion
var total
//variable que va a multiplica en decremento 
var j;

let paraWhile = "b", factorial_De = 0;
while (paraWhile != "a") {
    factorial_De = prompt("Ingrese el factorial menor a 11 o 0 para salir")
    j=factorial_De, total = 1;

	if (factorial_De <=10)  {
		if (factorial_De > 1) {
			for (i=1; i<=factorial_De - 1; i++) {
        		total = total * j;
        		j--;     
        		console.log(total + " " + j)
				}
				console.log(total)
				alert("Calculo factorial"); 
			}	
	}
	if (factorial_De > 10 )  {
		 	alert("Debe ingresar un numero menor a 11");
		}
	if (factorial_De == 0)  {
			alert("Me voy, salgo");
			paraWhile = "a"; 
	 	}
} //del while

//Ejercicio 7

var cadena_1 = "Somos o no somos";
var reemplazo;
var i=0,j=0; 
var largo = 0;

var pasoAMinuscula1 = "", pasoAMinuscula2 = "";
reemplazo = cadena_1.replace(/\s+/g, '');
var alReves =""; 
largo = reemplazo.length;
j = largo - 1;

for ( i=0 ; i < largo ; i++ ) {
       alReves = alReves.concat(reemplazo[j]);
                   j--;
    }
    pasoAMinuscula1 = reemplazo.toLocaleLowerCase();
    pasoAMinuscula2 = alReves.toLocaleLowerCase();
    
    if ( pasoAMinuscula1 == pasoAMinuscula2 ) {
        console.log("Es palíndromo")
    }


//Ejerccio 8
var pasarAMayusculas = prompt("Ingrese una cadena de caracteres");
var pasoAMayusculas_1 = pasarAMayusculas.toLocaleLowerCase();
var pasoAMinusculas_1 = pasarAMayusculas.toLocaleUpperCase();
console.log(pasoAMayusculas_1);
console.log(pasoAMinusculas_1);



//Ejercicio 9
//0 1 2.99  muy deficiente
//3 a 4.99    insuficiente
//5 a 5.99      suficiente
//6 a 7.99    bien
//8 a 9.99    notable
//10     sobresaliente
let notaCase = "", notaEntero = 0;
notaCase = prompt("Ingrese la nota para saber su calificacion ");
notaEntero = notaCase;

    if ( notaEntero < 3) {
            alert("Nota muy deficiente");
        }
    else if ( notaEntero >= 3 && notaEntero < 5) {
            alert("Nota insuficiente"); 
        }
    else if ( notaEntero >= 5 && notaEntero < 6) {
            alert("Nota suficiente");
        }
    else if ( notaEntero >= 6 && notaEntero < 8) {    
            alert("Nota = Bien");
        }
    else if ( notaEntero >= 8 && notaEntero < 10) {    
            alert("Nota notable");
        }
    else if ( notaEntero === 10 ) {        
            alert("Nota sobresaliente")
        }
    else {
            alert("Calificacion no encontrada sugun la nota");
        }
     

//Ejercicio 10

var mesesDias = "";
mesesDias = prompt("Ingrese el mes para saber la cantidad de dias");
//31 dias Enero, marzo, mayo, julio, agosto, octubre, dic
//30 dias Abril, junio, septiembre, noviembre
//28 febrero

switch (parseInt(mesesDias)) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
        alert("Mes con 31 dias")
        break;
	case 4:
	case 6:
	case 9:
    case 11:    
		 alert("Mes con 30 dias");
	break;
	case 2:
        alert("Mes con 28 dias");
        break;
    default:
	alert("Debe ingresar un numero menor de 1 a 12");
	 break;
  }  //del switch
     

  //Ejercicio 11

    var numeroPiramide = 5, incremental = 0, concatenado = "";
    numeroPiramide = prompt("Ingrese un numero menor a 11");
       if(parseInt(numeroPiramide) > 10) {
            alert("EL valor debe ser menor a 11")
       }
       else {
            for (i=1; i<=numeroPiramide; i++) {
                concatenado = concatenado.concat(i);
                console.log(concatenado);

            }
        }      

//Ejercicio 12

let cantBultos = 108, cantBultosEnCajas = 5;
let total_cajas = 0, total_cajas_entero = 0, sobranBultos = 0;
total_cajas = (cantBultos / cantBultosEnCajas);
total_cajas = Math.trunc(total_cajas);
console.log("Cantidad de cajas a utilizar: " + total_cajas); 
sobranBultos = cantBultos - (cantBultosEnCajas * parseInt(total_cajas))   
console.log("Cantidad de bultos que sobran: " + sobranBultos); 


//Ejercicio 13

var producto = "";
producto = prompt("Ingrese el producto para saber el descuento: ");
if (producto != null) {
    switch (producto.toLocaleLowerCase()) {
	    case 'fiesta' :
        alert("Fiesta, descuento del 5%")
	    break;
        case 'focus' :
        alert("Focus, descuento del 10%")
	    break;
        default:
	    alert("Producto no encontrado");
	    break;
    }  
}   

















