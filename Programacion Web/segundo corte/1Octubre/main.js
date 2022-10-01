var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for(var i = 0; i<7; i++)
   console.log(dias[i]);

  // in en un for
for (i in dias)
    console.log(dias[i]);

//concat
var mensaje1 = "Holaaa";
console.log(mensaje1);
var mensaje2 = mensaje1.concat(" Mundo! que tal?");    
console.log(mensaje2);

//CharAt
var letra = mensaje1.charAt(2);

//IndexOf
var posicion = mensaje1.indexOf('a');
console.log(posicion);
posicion = mensaje1.indexOf('b');
console.log(posicion);

//LastIndexOf
posicion = mensaje1.lastIndexOf('a');
console.log(posicion);
posicion = mensaje1.lastIndexOf('b');
console.log(posicion);

//SubString
var porcion = mensaje2.substring(2);
console.log(porcion);
porcion = mensaje2.substring(1,4);
console.log(porcion);

//Split
var pajabras = mensaje2.split(" ");
console.log(pajabras);
console.log(mensaje1.split(""));

//Join
var mensaje3 = ["Johs", "Brayan"];
console.log(mensaje3);
console.log(mensaje3.join(""));
console.log(mensaje3.join(" "));

//Pop
var mensaje4 = [1,2,3];
console.log(mensaje4);
mensaje4.pop()
console.log(mensaje4);

//Push
mensaje4.push(4)
console.log(mensaje4);

//Shift
mensaje4.shift();
console.log(mensaje4);

//UnShift
mensaje4.unshift(0);
console.log(mensaje4);

//Reverser
mensaje4.reverse();
console.log(mensaje4);

//NaN
var numero1 = 0;
var numero2 = 0;
console.log(numero1/numero2);

//isNaN
if(isNaN(numero1/numero2))
    console.log("La division nnno está definida para los números indicados");
else
    console.log("La división es igual => "+ numero1/numero2);  

//Infinity
numero1 = 10;
console.log(numero1/numero2);

//to Fixed
numero1 = 4564.34567;
console.log(numero1.toFixed(2));
console.log(numero1.toFixed(6));
console.log(numero1.toFixed());