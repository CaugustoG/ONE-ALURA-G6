// Practica 2
// Desafio 1: Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let dia1 = 'sabado';
let dia2 = 'domingo';

let diaDeLaSemana = prompt ('escribe que dia es hoy');

console.log (diaDeLaSemana);

if ( diaDeLaSemana == dia1 ){
    alert ('feliz fin de semana');
}
else { alert ('toca trabajar hoy'); 
}

if ( diaDeLaSemana == dia2 ){
    alert ('feliz fin de semana');
}   





//desafio 2: Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroGuardado = 0;
let numeroUsuario = prompt ('por favor ingrese un nuero entre -10 y 10');

console.log (numeroUsuario);

if (numeroUsuario < numeroGuardado){
    alert ('el numero es negativo, elejiste el número' + numeroUsuario);
} else {
    alert ('el número es positivo, elejiste el número' + numeroUsuario);
}




//desafio 3: Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntaje = 100;
let PuntajeIngresado = prompt ('ingresa tu puntaje');

if (PuntajeIngresado >= puntaje) {
    alert ('¡felicidades, has ganado!');
} else {
    alert ('intenta nuevamente para ganar');
}



//desafio 4: Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 50000;

alert (`el saldo de tu cuenta es: ${saldoCuenta}`);



//desafio 5: Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreIngresado = prompt ('Escribe tu nombre');

alert (`¡Bienvenido ${nombreIngresado}!, es un gusto tenerte con nosotros`);
