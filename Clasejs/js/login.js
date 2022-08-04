
function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}

function  calculo(){
    let kilometros = prompt("Cuántos kilómetros?");
    let camina = (kilometros*46.22);
    let camina2 = (kilometros*56.22);
    let caminax5 = (camina*5);
    let camina2x5 = (camina2*5);
    let pasos = (kilometros *2000);
    
    let corre = (kilometros*67.9);
    let corre2 = (kilometros*77.9);

    document.getElementById("card-text").innerHTML = "Caminar " + kilometros + "Km significará quemar entre " + camina.toFixed(2) + " y " + camina2.toFixed(2) + " calorías para la mayoría de las personas.<br> Caminar " + kilometros + "Km 5 días a la semana supone entre " + caminax5.toFixed(2) + " y " + camina2x5.toFixed(2) + " calorías por semana. <br> Por lo tanto, realizastes " + pasos + " pasos en " + kilometros + "Km.";
    document.getElementById("card-text2").innerHTML = "Correr " + kilometros + "Km significará quemar entre " + corre.toFixed(2) + " y " + corre2.toFixed(2) + "Km."
    
}