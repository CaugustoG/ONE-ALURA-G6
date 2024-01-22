//Paractica 4
//Desafio 1: Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

let bienvenida = alert ('Bienvenido a este programa');

console.log (bienvenida);


//Desafia 2: Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre1 = prompt ('Escribe aquí tu nombre');

console.log (`¡Hola ${nombre1}!`);


//Desafio 3: Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre2 = prompt ('Escribe aquí tu nombre');

console.log (`¡Hola, ${nombre2}!`);


// Desafio 4: Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let pregunta = prompt ('¿Cuál es el lenguaje de programación que mas te gusta?');

console.log (pregunta);


//Desafio 5: Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = parseInt ( prompt ('ingresa el valor 1'));
let valor2 = parseInt ( prompt ('ingresa el valor 2'));
let resultado1 = valor1 + valor2;

console.log (resultado1);


//Desafio 6: Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor3 = parseInt (prompt ('ingresa el valor 1'));
let valor4 = parseInt (prompt('ingresa el valor 2'));
let resultado2 = valor3 - valor4 ;

console.log (`la diferencia entre ${valor3} y ${valor4} es ${resultado2}`);


//Desafio 7: Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = parseInt(prompt ('ingresa tu edad'));

if (edad < 18) {
    console.log ('eres menor de edad');
} else{
    console.log ('eres mayor de edad');
}


//Desafio 8: Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero1 = parseInt (prompt ('ingresa un número'));

    if (numero1 == 0 ){
        alert ('el número es cero')
    } else {
        alert (`el número es ${numero1 > 0 ? 'positivo' : 'negativo'}`);
    }

console.log (numero1);


// Desafio 9: Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let numeroUsuario = 0;

while (numeroUsuario < 10){
    if (numeroUsuario < 10){
        numeroUsuario ++;
        alert (numeroUsuario);
        }if (numeroUsuario == 10){
            alert ('el conteo a finalizado');
    }
    console.log (numeroUsuario);     
}


//desafio 10: Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. 

let nota = parseInt (prompt ('ingrese la nota'));

console.log (`el curso fue ${nota >= 7 ? 'aprobado' : 'reprobado'} con ${nota}`);

if (nota >= 7){
    alert ('el curso fue aprobado')
} else {
    alert ('el curso fue reprobado');
    
}


//Desafio 11: Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numero2 = Math.floor(Math.random()*20)+1;

alert (`el número aleatorio es ${numero2}`);

console.log (numero2);


//Desafio 12: Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numero3 = Math.floor(Math.random()*10)+1;

console.log (`el número aleatorio es ${numero3}`);


//Desafio 13: Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numero4 = Math.floor(Math.random()*1000)+1;

console.log (`el número aleatorio es ${numero4}`);

