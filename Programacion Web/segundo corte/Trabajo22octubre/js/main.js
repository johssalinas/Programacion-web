
function ejercio1(){}

function ejercio2(){}

function ejercio3(){}

function ejercio4(){}

function ejercio5(){}

function ejercio6(){}

function ejercio7(){}

function ejercio8(){}

function ejercio9(){}

function ejercio10(){}

function ejercio11(){
    var num;
    var mayor = 0 ;
    var menor = 0;
    for (var i = 0; i< 4; i++){
        num = prompt('Ingrese un numero');
        if(num > mayor) { mayor = num;}
        if(num > menor){menor = num;}
    }
    console.log("MAYOR :",  mayor);
    console.log("MENOR :",  menor);
}

function ejercio12(){
    var suma = 0;
    for (var i = 0; i<= 10; i++){
        suma += i;
    }
    console.log(suma);
}

function ejercio13(){
    var suma = 0;
    for (var i = 0; i<= 100; i+=5){
        suma += i;
    }
    console.log(suma);
}

function ejercio14(){
    var suma = 0;
    for (var i = 0; i<= 100; i+=2){
        suma += i;
    }
    console.log(suma);
}

function ejercio15(){
    var suma ,cont = 0;
    for (var i = 0; i<= 300; i++){
        if(i % 2== 0){
            cont++;
            suma += i;
        }
    }
    console.log("CANTIDAD: ",cont);
    console.log(suma);
}

function ejercio16( ladoA , ladoB){
    return ((ladoA**2)+(ladoB**2 ))**0.5;
}

function ejercio17(radio, altura){
    var area = (2*(Math.PI)*radio*altura);
    var volumen = ((Math.PI*radio)**2)*altura;
    console.log("AREA: ", area);
    console.log("VOLUMEN: ", volumen);
}

function ejercio18(){
    var num = prompt('Ingrese un numero');
    if(num % 2 == 0){
        console.log("ES PAR");
    }else{
        console.log("ES IMPAR");
    }
}

function ejercio19(){
    var lista = [10];
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    for(var i = 0; i < 10; i++){
        lista[i] = prompt('Ingrese un numero');
    }
    for(var j = 0; i < 10; i++){
        if (lista[i] <= 75 && lista[i] >= 50){cont1++;}
        if (lista[i] <= 30){cont2++;}
        if (lista[i] >= 80){cont3++;}
    }
    console.log("ESTAN ENTRE 50 Y 75 : ", cont1);
    console.log("MAYORES A 80 : ", cont2);
    console.log("MENORES A 30 : ", cont3);
}

function ejercio20(){
    var lista = [2];

    for(var i = 0; i<2 ; i++){
        lista[i]= prompt("infrese un numero: ");
    }
    var a ;
    if(lista.length>1){
        for(var i = 1; i<2 ; i++){
            if(lista[i-1] > lista[i]){
                a = lista[i-1];
                lista[i-1] = lista[i];
                lista[i] = a;
            }
        }
    }
    return lista;
}

function ejercio21(){
    var lista = [10];
    var cont = 0;
    while(lista.length < 10){
        if(cont%2 == 0) lista.push(cont);
        cont++;
    }
    return lista;
}

function ejercio22(){
    var horas = prompt("ingrese las horas : ");
    return horas*60;
}

function ejercio23() {
    var horas = prompt("ingrese las horas de estacionamiento : ");
    if (horas > 0){
        if(horas > 1) {
            console.log((horas - 1) * 2000 + 3000);
            return (horas - 1) * 2000 + 3000;
        }
        console.log(horas* 3000);
        return horas* 3000;
    }
}

function ejercio24(){
    while(true) {
        var tickets = prompt("ingrese la cantidad de entradas: ");
        switch (tickets) {
            case 1:
                return tickets*10000;
            case 2:
                return tickets*10000*0.90;
            case 3:
                return tickets*100000.85;
            case 4:
                return tickets*10000*0.80;
            default:
                console.log("cantidad ecxedida")
        }
    }
}

function ejercio25(){
    var velovidad = prompt("ingrese las horas : ");
    return velocidad*(5/18);
}

function ejercio26(){
    var nombre = prompt("ingrese el nombre: ");
    var nota1 = prompt("nota 1: ");
    var nota2 = prompt("nota 2: ");
    var nota3 = prompt("nota 3: ");
    var notaFinal = (nota1*0.33)+(nota2*0.33)+(nota3*0.34);
    console.log("el estudiante "+ nombre);
    console.log("nota final: "+ notaFinal);
    if(notaFinal>=3) console.log("APROVADO");
    else console.log("REPROVADO");
}

function ejercio27(){
    var horas = prompt("ingrese las horas totales trabajadas: ");
    var cantObreros = 50;
    var ValorXHora = 30000;
    return (horas * ValorXHora);
}

function ejercio28(){
    var valor = prompt("ingrese las horas : ");
    var factorial = 1;
    for(var i = 1; i < valor; i++){
        factorial *= i;
    }
    console.log("factorial de "+valor+" es: "+ factorial);
}

function ejercio29(){
    var num = prompt("ingrese un numero: ");
    for(var i = 0; i < 10;i++){
        console.log(i*num);
    }
}

function ejercio30(){
    var num = prompt();
    if(num%2 == 0 || num%3 == 0 || num%5 == 0){
        console.log(" es primo")
    }
}