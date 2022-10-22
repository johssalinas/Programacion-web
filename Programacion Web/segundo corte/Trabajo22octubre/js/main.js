function ejercio1(){
    var altura = prompt('Digite la altura: ');
    var area = (altura**2);
    alert(area);
}

function ejercio2(){
    var radio=prompt('Digite el radio: ');
    var area =Math.round((Math.PI)*(radio**2));
    alert(area);
}

function ejercio3(){
    var far=prompt('Digite grado Fahrenheit: ');
    var cel = (far -32)*(5/9);
    alert(cel);
}

function ejercio4(){
    var num1 =prompt('Digite primer número: ');
    var num2 =prompt('Digite segundo número: ');
    var suma = (parseInt(num1) + parseInt(num2));
    var resta = num1-num2;
    alert("Suma: "+suma+ "\n Resta: " + resta);
}

function ejercio5(){
    var num1 = 5,num2 =14;
    if(num1>num2)
        alert(num1 + " es mayor que " + num2);
    else alert(num2 + " es mayor que " + num1);
}

function ejercio6(){
    var base =prompt('Digite la base: ');
    var altura =prompt('Digite la altura: ');
    var area = (base*altura)/2;
    alert(area);
}

function ejercio7(){
    var num1=10,num2=64, num3=4;
    if(num1>num2 && num1>num3)
        alert(num1 + " es el mayor");
    else if(num2>num1 && num2>num3)    
        alert(num2 + " es el mayor");
    else alert(num3 + " es el mayor");
}

function ejercio8(){
    var array= [];
    for(var i=1; i<=7;i++){
        array[i]=i;
        alert(array[i]);
    }
}

function ejercio9(){
    var num1 = prompt('Digite un número: ');
    var num2 = prompt('Digite otro número: ');
    while(num2 ===num1)
        num2 = prompt('Inválido, digite otro número: ');
    if(num1>num2)
        alert(num1 + " es mayor que " + num2 + "\n" + num2 + " es menor que " + num1);
    else alert(num2 + " es mayor que " + num1 + "\n" + num1 + " es menor que " + num2);
}

function ejercio10(){
    var num1 = prompt('Digite un número: ');
    var num2 = prompt('Digite otro número: ');
    while(num2 ===num1)
        num2 = prompt('Inválido, digite otro número: ');
    var num3 = prompt('Digite otro número más: ');
    while(num3 ===num1 || num3 ===num2)
        num3 = prompt('Inválido, digite otro número: ');

    if(num1>num2 && num1>num3)
        alert(num1 + " es el mayor");
    else if(num2>num1 && num2>num3)
        alert(num2 + " es el mayor");
    else alert(num3 + " es el mayor");

    if(num1<num2 && num1<num3)
        alert(num1 + " es el menor");
    else if(num2<num1 && num2<num3)
        alert(num2 + " es el menor");
    else alert(num3 + " es el menor");
}

function ejercio11(){
    var num, mayor = 0, menor =0, numeros=[4], i =0;
    while (i< 4){
        num = prompt('Ingrese un numero');
        numeros[i] = num;
        if(numeros[i]=== numeros[i-1] || numeros[i]=== numeros[i-2] || numeros[i]=== numeros[i-3] || num =='') {alert("Digite un número válido"); continue}
        if(num > mayor) mayor = num;
        if(num < menor || menor === 0) menor = num;
        i++
    }
    alert("MAYOR : " +  mayor);
    alert("MENOR : " +  menor);
}

function ejercio12(){
    var suma = 0;
    for (var i = 0; i<= 10; i++)
        suma += i;
    alert(suma);
}

function ejercio13(){
    var suma = 0;
    for (var i = 5; i<= 100; i+=5) {
        alert(i);
        suma += i;
    }
    alert(suma);
}

function ejercio14(){
    var suma = 0;
    for (var i = 2; i<= 100; i+=2){
        alert(i);
        suma += i;
    }
    alert(suma);
}

function ejercio15(){
    var suma=0 ,cont = 0;
    for (var i = 1; i<= 300; i++){
        if(i % 2!= 0){
            cont++;
            suma += i;
        }
    }
    alert("CANTIDAD: "+cont);
    alert(suma);
}

function ejercio16(){
    var ladoA = prompt("lado a: ");
    var ladoB = prompt("lado b: ");
    alert((((ladoA**2)+(ladoB**2 ))**0.5).toFixed(2));
}

function ejercio17(){
    var radio = prompt('Digite el radio: ');
    var altura = prompt('Digite al altura: ');
    var area = (2*(Math.PI)*radio*altura);
    var volumen = ((Math.PI*radio)**2)*altura;
    alert("AREA: "+ area.toFixed(2));
    alert("VOLUMEN: "+ volumen.toFixed(2));
}

function ejercio18(){
    var num = prompt('Ingrese un numero');
    alert((num%2===0)?"ES PAR" :"ES IMPAR");
}

function ejercio19(){
    var lista = [10];
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    for(var i = 0; i < 10; i++){
        lista[i] = prompt('Ingrese un numero');
        if (lista[i] <= 30) cont1++;
        else if (lista[i] >= 50 && lista[i] <= 75) cont2++;
        else if (lista[i] >= 80) cont3++;
    }
    alert("ESTAN ENTRE 50 Y 75 : "+ cont1);
    alert("MAYORES A 80 : "+ cont2);
    alert("MENORES A 30 : "+ cont3);
}

function ejercio20(){
    var lista = [2];
    for(var i = 0; i<2 ; i++)
        lista[i]= prompt("infrese un numero: ");
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
    alert(lista);
}

function ejercio21(){
    var lista = [10];
    var cont = 0;
    while(lista.length < 10){
        if(cont%2 === 0) lista.push(cont);
            cont++;
    }
    var text=0; 
   for(var i = 0; i< 10; i++)
        text+= " > "+lista[i] +"\n";
   alert(text);
}

function ejercio22(){
    var horas =5;
    alert("En 5 horas hay " +(horas*60)+ " minutos");
}

function ejercio23() {
    while (true) {
    var horas = prompt("ingrese las horas de estacionamiento : ");
        if (horas > 1) {alert((horas - 1) * 2000 + 3000); break} else alert("Digite un digito válido");
    }
}

function ejercio24(){
    var tickets = prompt("ingrese la cantidad de entradas: ");
    switch (tickets) {
        case "1":
            alert("precio: "+tickets*10000);
            break;
        case "2":
            alert("precio"+tickets*10000*0.90);
            break;
        case "3":
            alert("precio"+ tickets*100000.85);
            break;
        case "4":
            alert("precio"+ tickets*10000*0.80);
            break;
        default:
            alert("cantidad no permitido")
    }
    
}

function ejercio25(){
    var velocidad = prompt("ingrese la velocidad : ");
    alert( (velocidad*(5/18)).toFixed(2));
}

function ejercio26(){
    var nombre = prompt("ingrese el nombre: ");
    var nota1 = prompt("nota 1: ");
    var nota2 = prompt("nota 2: ");
    var nota3 = prompt("nota 3: ");
    var notaFinal = (nota1*0.33)+(nota2*0.33)+(nota3*0.34);
    alert("el estudiante "+ nombre +" nota final: "+ notaFinal);
    if(notaFinal>=3) alert("APROVADO");
    else alert("REPROVADO");
}

function ejercio27(){
    var horas = prompt("ingrese las horas totales trabajadas: ");
    var cantObreros = 50;
    var ValorXHora = 30000;
    alert(horas * ValorXHora);
}

function ejercio28(){
    var valor = prompt("ingrese las horas : ");
    var factorial = 1;
    for(var i = 1; i < valor; i++)
        factorial *= i;
    alert("factorial de "+valor+" es: "+ factorial);
}

function ejercio29(){
    var num = 5;
    for(var i = 0; i < 10;i++)
        alert(i*num);
}

function ejercio30(){
    var info = prompt("ingrese un numero: ");
    alert((info % 2 == 0 && info % 3 == 0 && info % 5 == 0 && info % 7 ==0 || (info == 1 || info ==2 || info == 3 || info ==5 || info ==7))? info+" Sí es primo" :  info+" No es primo");
}