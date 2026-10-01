function generarTablas() {
    let contenedor = document.getElementById("tablaMultiplicar");
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido = contenido +
            "<div class='fila'>" + "<span>5 × " + i + "</span>" + "<strong>" + (5 * i) + "</strong>" + "</div>";
    }

    contenedor.innerHTML = contenido;
}