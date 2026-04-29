let tablero = [1,2,3,4,5,6,7,8,""];

mezclarSeguro();
render();

function mezclarSeguro() {
    for (let i = 0; i < 50; i++) {
        let vacio = tablero.indexOf("");

        let movimientos = [
            vacio - 1,
            vacio + 1,
            vacio - 3,
            vacio + 3
        ];

        let validos = movimientos.filter(m => m >= 0 && m < 9);

        let random = validos[Math.floor(Math.random() * validos.length)];

        [tablero[vacio], tablero[random]] = [tablero[random], tablero[vacio]];
    }
}

function mover(index) {
    let vacio = tablero.indexOf("");

    // posiciones válidas (arriba, abajo, izquierda, derecha)
    let movimientos = [index - 1, index + 1, index - 3, index + 3];

    if (movimientos.includes(vacio)) {
        [tablero[index], tablero[vacio]] = [tablero[vacio], tablero[index]];
        render();
        verificarVictoria();
    }
}

function render() {
    let celdas = document.getElementsByClassName("cell");

    for (let i = 0; i < tablero.length; i++) {
        celdas[i].textContent = tablero[i];
        celdas[i].classList.toggle("empty", tablero[i] === "");
    }
}

function verificarVictoria() {
    let correcto = "1,2,3,4,5,6,7,8,";

    if (tablero.toString() === correcto) {
        document.getElementById("mensaje").textContent = "🎉 ¡Ganaste!";
    }
}

function reiniciar(){
    mezclarSeguro();
    render();
}