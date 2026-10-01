function generarTablas() {
    let numero = parseInt(document.getElementById("txtNumero").value);
    let contenedor = document.getElementById("tablaMultiplicar");
    let mensaje = document.getElementById("mensaje");
    let contenido = "";

    if (isNaN(numero) || numero <= 0) {
        mensaje.innerHTML = "Ingresa un número mayor que 0.";
        return;
    }

    mensaje.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        contenido = contenido + "<div class='fila'>" + "<span>" + numero + " × " + i + "</span>" + "<strong>" + (numero * i) + "</strong>" + "</div>";
    }

    contenedor.innerHTML = contenido;
}