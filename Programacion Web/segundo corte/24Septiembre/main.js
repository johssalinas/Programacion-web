var num1 = 10;
var num2 = 5;
var resultado;

console.log("Ls division es "+num1/num2);
console.log("El resultado es "+ ( 3+num1));
console.log("El resultado de la resta es " +(num2-4));   
console.log("La multiplicadcion es "+num1 * num2);
console.log("El modulo es "+num1 % num2);
num1 = 9;
num2 = 5;
console.log("El resultado es " + num1%num2);


var edad;
edad = prompt("Ingrese tu edad");

if (edad<12) {
    alert("Eres muy pequeño");
}else if (edad<19) {
    alert("Eres adolecente");
}else if (edad<35) {
    alert("Aun eres joven");
}
else{
    alert("Estás viejo");
}