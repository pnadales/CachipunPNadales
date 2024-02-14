
$(".juego").hide();
let NumeroJugadas
$("#comenzar").click(NumeroJugadas = function () {
    $(".comienzos").hide();
    NumeroJugadas = Number(prompt("¿Cuantas veces deseas jugar?"));
    $(".juego").show();

});

let contador = 0;
let Jugador = 0;
let Maquina = 0;

function cachipun(Jugada, N, cont) {

    const NumeroAleatorio = Math.floor(Math.random() * 3);
    let JugadaOrdenador;
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

    alert("La máquina jugó" + JugadaOrdenador + ", entonces " + Resultado);

    cont++;
    if (cont == N) {
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

