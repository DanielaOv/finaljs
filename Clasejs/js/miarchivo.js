function contadorClicks() {
    // Si existe contador se incrementa y sino se inicializa
    if (localStorage.contador) {
        // Se convierte el contador a entero porque por defecto es una cadena
        localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
        localStorage.contador = 1;
    }
    document.getElementById("contador").value = localStorage.contador + " En carrito";
}

function resetearClicks() {
    localStorage.removeItem("contador");
    document.getElementById("contador").value = "-";
    document.getElementById("btn_carrito").innerHTML = ("Se eleminaron los elementos.");
    
}

function finalizarcompra(){
    localStorage.removeItem("contador");
    document.getElementById("contador").value = "Mira su Mail";
    document.getElementById("btn_carrito").innerHTML = ("Gracias por su Compra en breve estaremos contactando con usted.");
}


