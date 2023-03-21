//Ejercicio 1
let arrayColores = ["Blanco","Rojo","Azul","Negro","Verde"];
console.log(arrayColores);

//Ejercicio 2
let tercerElemento = arrayColores[2];
console.log("Elemento tres del array: " + tercerElemento);

//Ejercicio 3
let elementoCero = arrayColores[0][0];
console.log("Elemento tres del array: " + elementoCero);

//Ejercicio 4
console.log(Math.floor(Math.random() * 100));

//Ejercicio 5
const arrayUnoADiez = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayUnoADiez);

//Ejercicio 6
let arrayAleatorio = [];
for (let i=0; i<=9; i++) {
    arrayAleatorio [i]= Math.floor(Math.random() * 9);
}
console.log(arrayAleatorio);

//Ejercicio 7
let arrayAleatorioCopiado = arrayAleatorio;
console.log("Array aleatorio copiado " + arrayAleatorioCopiado);

//Ejercicio 8
let ingresoText = "", Concateno = ""; 
do {
    ingresoText = prompt("Ingrese texto, ingrese la palabra cancelar para terminar");
     ingresoText = ingresoText.toLocaleLowerCase();
     
         if (ingresoText != "cancelar") {
            Concateno = Concateno.concat(ingresoText) + "-";
         }
} while ( ingresoText != "cancelar");
Concateno = Concateno.slice(0,-1);
console.log(Concateno);


let ingresoTextOtro = "", arrayWhile = [], i = 0; 
do {
    ingresoTextOtro = prompt("Ingrese texto, ingrese la palabra cancelar para terminar");
     ingresoTextOtro = ingresoTextOtro.toLocaleLowerCase();
         if (ingresoTextOtro != "cancelar") {
            arrayWhile[i]= ingresoTextOtro;
            i++;
        }
} while ( ingresoTextOtro != "cancelar");
console.log(arrayWhile);

//Ejercicio 9 Y 10
function calculaValorHtml (tipoMoneda)
{
    let valorCalculo=0
     
    if ( tipoMoneda == "Dl") {
        valorCalculo = document.getElementById("Dolares").value;
        valorCalculo = valorCalculo * 300;
        document.getElementById("resultadoDolares").innerHTML = valorCalculo;
       
    }
    if ( tipoMoneda == "Ps") {
        valorCalculo = document.getElementById("Pesos").value;
        valorCalculo = valorCalculo / 300;
        document.getElementById("resultadoPesos").innerHTML = valorCalculo.toFixed(3);
       
    } 
}

//Ejercicio 11
function calculaValorTemp ()
{
    let valorCalculoTem=0
    
        valorCalculoTem = document.getElementById("grados").value;
        valorCalculoTem = (valorCalculoTem * 1.8) + 32;
        document.getElementById("resultadoTemperatura").innerHTML = valorCalculoTem.toFixed(4);
       
     
}

//Ejercicio 12
function checkForm ()
{
        let acumulador = "";
        
        acumulador = acumulador.concat(document.getElementById("nombreCliente").value);
        acumulador = acumulador.concat(" ha pedido una caja de " + document.getElementById("tipoCaja").value);
        
           if (document.getElementById("cajaDiminuta").checked) {
            acumulador = acumulador.concat(" con dimensiones Diminuta.");
           }
           if (document.getElementById("cajaMediana").checked) {
            acumulador = acumulador.concat(" de dimensiones  Mediana.");
           }
           if (document.getElementById("cajaGrande").checked) {
            acumulador = acumulador.concat(" de dimensiones Grande.");
           }
        acumulador = acumulador.concat(document.getElementById("comentario").value);
        
        document.getElementById("descripcion").value = acumulador;
       //alert(acumulador);
     
}

//Ejercicio 13
function intentosForm ()
{
        let numCorrecto = 3, numIntentos = 0;
        
        let numeroForm = document.getElementById("numeroSecreto").value;
        numIntentos = document.getElementById("intentos").value;
    if ( numIntentos === '') { numIntentos = 0; }
        if ( numIntentos <= 2 ) {
            if (parseInt(numeroForm) === numCorrecto) {
                alert("Numero " + numeroForm + " Correcto");
            }
            else {
               alert("Numero " + numeroForm + " Incorrecto")
               numIntentos++;
               document.getElementById("intentos").value = numIntentos;
               document.getElementById("numeroSecreto").value = "";
               if ( numIntentos === 3 ) {
                     alert ("se superaron los 3 intentos"); 
               } 
           }
        }   
        else {
            alert ("se superaron los 3 intentos");
        }
}

//Ejercicio 14
function agregaPersonas ()
{
    let nombrePersona = document.getElementById("Persona").value;
        if ( nombrePersona != '') {
            var node = document.createElement('li');
            node.appendChild(document.createTextNode(nombrePersona));
            //document.querySelector('ul').appendChild(node);
            document.getElementById('lista-ul').appendChild(node);
            document.getElementById("Persona").value = "";
        }    
}










