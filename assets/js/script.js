const NumeroJugadas = Number(prompt("¿Cuantas veces deseas jugar?"));

// for (let i = 0; i < NumeroJugadas; i++) {
//     Jugada = prompt("¿Piedra, papel o tijera? Escribe tu jugada").toLowerCase();
//     const NumeroAleatorio = Math.floor(Math.random() * 3);
//     let JugadaOrdenador;
//     switch (NumeroAleatorio) {
//         case 0:
//             JugadaOrdenador = "piedra";
//             break;
//         case 1:
//             JugadaOrdenador = "papel";
//             break;
//         case 2:
//             JugadaOrdenador = "tijera";
//             break;

//     }

//     let Resultado;
//     if (JugadaOrdenador == Jugada) {
//         Resultado = "Empataron";
//     } else if (JugadaOrdenador == "tijera") {
//         if (Jugada == "papel") {
//             Resultado = "Ordenador gana";
//         } else {
//             Resultado = "Ganaste";
//         }
//     } else if (JugadaOrdenador == "piedra") {
//         if (Jugada == "tijera") {
//             Resultado = "Ordenador gana";

//         } else {
//             Resultado = "Ganaste";
//         }
//     } else if (JugadaOrdenador == "papel") {
//         if (Jugada == "piedra") {
//             Resultado = "Ordenador gana";
//         } else {
//             Resultado = "Ganaste";
//         }

//     }

//     document.write("Tu jugada fue " + Jugada + " la jugada del ordenador fue " + JugadaOrdenador + ", entonces " + Resultado + "<br>");
// }


// let i = 0;

// while (i < NumeroJugadas) {
//     Jugada = prompt("¿Piedra, papel o tijera? Escribe tu jugada").toLowerCase();
//     const NumeroAleatorio = Math.floor(Math.random() * 3);
//     let JugadaOrdenador;
//     switch (NumeroAleatorio) {
//         case 0:
//             JugadaOrdenador = "piedra";
//             break;
//         case 1:
//             JugadaOrdenador = "papel";
//             break;
//         case 2:
//             JugadaOrdenador = "tijera";
//             break;

//     }

//     let Resultado;
//     if (JugadaOrdenador == Jugada) {
//         Resultado = "Empataron";
//     } else if (JugadaOrdenador == "tijera") {
//         if (Jugada == "papel") {
//             Resultado = "Ordenador gana";
//         } else {
//             Resultado = "Ganaste";
//         }
//     } else if (JugadaOrdenador == "piedra") {
//         if (Jugada == "tijera") {
//             Resultado = "Ordenador gana";

//         } else {
//             Resultado = "Ganaste";
//         }
//     } else if (JugadaOrdenador == "papel") {
//         if (Jugada == "piedra") {
//             Resultado = "Ordenador gana";
//         } else {
//             Resultado = "Ganaste";
//         }

//     }

//     document.write("Tu jugada fue " + Jugada + " la jugada del ordenador fue " + JugadaOrdenador + ", entonces " + Resultado + "<br>");
//     i++;
// }

let contador = 0;

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

    alert("Tu jugada fue " + Jugada + " la jugada del ordenador fue " + JugadaOrdenador + ", entonces " + Resultado);

    cont++;
    if (cont == N) {

        $(".juego").hide();
    }
    return cont;
}