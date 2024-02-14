
$(".juego").hide();

// Variable para guardar el número de jugadas ingresadas por el usuario
let NumeroJugadas;

// Se pedirá ingresar el número de jugadas luego de presionar el botón
$("#comenzar").click(NumeroJugadas = function () {
    $(".comienzos").hide();
    NumeroJugadas = Number(prompt("¿Cuantas veces deseas jugar?"));
    $(".juego").show();

});

// Inicialización de contadores
let contador = 0;
let Jugador = 0;
let Maquina = 0;

// Función que contiene las instrucciones del juego
function cachipun(Jugada, N, cont) {
    // Se genera un número aleatorio 0, 1 o 2
    const NumeroAleatorio = Math.floor(Math.random() * 3);
    let JugadaOrdenador;

    // Se le asigna un significado al número aleatorio
    switch (NumeroAleatorio) {
        case 0:
            JugadaOrdenador = "piedra";
            break;
        case 1:
            JugadaOrdenador = "papel";
            break;
        case 2:
            JugadaOrdenador = "tijera";
            break;

    }

    // Se evaluan las distintas combinaciones para determinar el resultado del juego
    let Resultado;
    if (JugadaOrdenador == Jugada) {
        Resultado = "Empataron";
    } else if (JugadaOrdenador == "tijera") {
        if (Jugada == "papel") {
            Resultado = "Ordenador gana";
        } else {
            Resultado = "Ganaste";
        }
    } else if (JugadaOrdenador == "piedra") {
        if (Jugada == "tijera") {
            Resultado = "Ordenador gana";

        } else {
            Resultado = "Ganaste";
        }
    } else if (JugadaOrdenador == "papel") {
        if (Jugada == "piedra") {
            Resultado = "Ordenador gana";
        } else {
            Resultado = "Ganaste";
        }

    }
    if (Resultado == "Ganaste") {
        Jugador++;
    } else if (Resultado == "Ordenador gana") {
        Maquina++;
    }

    // Se anuncia el resultado de cada jugada
    alert("La máquina jugó " + JugadaOrdenador + ", entonces " + Resultado);
    // Se cuenta la jugada realizada y se evalúa si es la última
    cont++;
    if (cont == N) {
        // Se anuncia el resultado final de la partida y se ocultan los botones de juego
        if (Maquina < Jugador) {
            alert("Has ganado la partida!!!")
        } else if (Maquina > Jugador) {
            alert("Has perdido la partida :c")
        } else {
            alert("Empate ._.")
        }
        $(".juego").hide();
    }

    return cont;
}

