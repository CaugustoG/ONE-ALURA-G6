
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo) +1 ;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = numeroMaximo / 10 ;

console.log (numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt (`Me indicas un número por favor entre 1 y ${numeroMaximo}, tienes ${maximosIntentos} intentos para acertar`));

    console.log (numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert (`Acertaste, el número es: ${numeroUsuario}, lo hicite en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ('el numero secreto es menor');
        }else {
            alert ('el numero secreto es mayo');
        }
        //intentos = intentos + 1;
        //intento += 1;
        intentos ++ ;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert (`llegaste al número máximo de ${maximosIntentos} intentos,`);
            break;
        }
    }
    
}


/*
alert ('Bienvenida y bienvenido a nuestro sitio web'); //correcto
let nombre = luna; //incorrecto, falto colocar '' al al palabra luna
let edad = 25; //correcto
let numeroDeVentas = 50; //correcto
let saldoDisponible = 1000; //correcto

alert ('error!, completa todos los campos'); //correcto
let mensajeDeError = prompt('¡Error!, completa todos los campos'); //incorrecto, al asignar el valor de la variable, no se coloca prompt, tampoco parentesis.
Alert (mensajeDeError); //correcto
prompt ('¿cual es su nombre?'); //Incorrecto, la maners correcta es: let nombre = prompt ("digite su nombre");
console.log (nombre); // innecesario, no se esta pidiendo esta información en el enunciado
prompt ('¿cual es su edad?'); //Incorrecto, la maners correcta es: let edad = prompt ("digite su edad");
console.log (edad); // innecesario, no se esta pidiendo esta información en el enunciado

if (edad >= 18) {
    Alert('¡puedes obtener tu licencia de consuccion');
} // correcto


javascript
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
}


alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/