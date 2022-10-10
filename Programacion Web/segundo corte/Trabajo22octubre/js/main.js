
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

function ejercio20(){}

function ejercio21(){}

function ejercio22(){}

function ejercio23(){}

function ejercio24(){}

function ejercio25(){}

function ejercio26(){}

function ejercio27(){}

function ejercio28(){}

function ejercio29(){}

function ejercio30(){}