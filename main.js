/*let nombre = prompt ("ingresa tu nombre");
alert ("Hola," + nombre);

let numero1 = parseFloat (prompt ("ingrese un valor"))
let resultado = ( numero1 + (100))
alert( " Su resultado es" + " " + resultado);

let numero2 = parseFloat ( prompt (" ingrese un valor"))
let  resultado2 = ( numero2 * (2))
alert (resultado2)
console.log (resultado2)

let nombre3 = prompt ("Ingrese su dni")
let nota = parseFloat ( prompt ("Ingrese su nota"))
if (nota >=7) {
    alert ("Felicitaciones estas aprobado")
}
else {
    alert ("Desaprobado") }
    
let menu = ("cafe", "chocolate","te")
console.log (menu);
 

// PESO Y ESTATURA//
let altura = (parseFloat) (prompt ("ingrese su altura"));
let peso = (parseFloat) (prompt ("ingrese su peso"))

let resultado4 = peso / (altura * altura);

if (resultado4 < 18.5){
alert("Peso inferior al normal")
}
else if (resultado4 >= 18.5 && (resultado4 <= 24.9 )){
    alert("Peso inferior al normal")
}
else if (resultado4 >= 25.0 && (resultado4 <= 29.9)){ 
    alert("Peso superior al normal")
}
else {
    alert("deberias hacer dieta tenes obesidad!")
}
*/

// CALCULADORA//
let numero1 = (parseFloat)(prompt("Ingrese un numero"))
let operacion = prompt ("Ingrese operacion")
let numero2 = (parseFloat)(prompt("Ingrese un numero"))

let resultado = numero1 + numero2
let resultado1 = numero1 - numero2
let resultado2 = numero1 * numero2
let resultado3 = numero1 / numero2

if (operacion == "+"){
alert( "tu suma es" + " " + resultado)  
}
else if (operacion == "-") {
    alert ("tu resta es" + " " + resultado1)
}
 else if ( operacion == "*"){
    alert ("tu multiplicacion es" + " " + resultado2)
}
 else if ( operacion == "/") {
    alert(" tu division es" + " " + resultado3)
}
else {
    alert ("No se puede realizar la operacion!!")
}