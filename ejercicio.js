function listar() {
    for (let i=0  ; i<=3; i++){
        console.log(i);
    }
}

function ejecutar(numeroEjercicio) {
    if (numeroEjercicio == 1) {
        listar();
    } else if (numeroEjercicio == 2) {
        listarNumeroReversa();
    } else if (numeroEjercicio == 3) {
        listarPares();
    }
}

function listarNumeroReversa() {
    for (let i=3 ; i>0; i--){
        console.log(i);
    }
}

function listarPares() {
    for (let i=0 ; i<10 ; i+=2){
        console.log(i);
    }
}