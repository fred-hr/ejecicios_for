function generarTablas() {
    let numero = parseInt(document.getElementById("txtNumero").value);
    let contenedor = document.getElementById("tablaMultiplicar");
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido = contenido + "<div class='fila'>" + "<span>" + numero + " × " + i + "</span>" + "<strong>" + (numero * i) + "</strong>" + "</div>";
    }

    contenedor.innerHTML = contenido;
}