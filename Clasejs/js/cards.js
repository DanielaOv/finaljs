class Producto {
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}

var arrayProductos = [];
   do { var comprobacion = prompt('ingrese un nombre del producto o fin de terminar de agregar');
    if (comprobacion === "fin" || comprobacion == "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP= comprobacion;
        var precioP = prompt ('Ingrese el precio del producto');
        var detalleP = prompt ('Ingrese el detalle del producto');
        var cantidadP = prompt ('Ingrese la cantidad de comprada del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}


while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")


for (var producto of arrayProductos){
    document.write ("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>");
    console.log(producto.nombre);
}

var pocoStock = arrayProductos.filter (producto => producto.cantidad <= 3);
console.log ('Productos con poco stock');
console.log (pocoStock);
document.write("<h3>Lista de producto con poco stock (3 unidades=):</h3>");

for (var prodcuto of pocoStock){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>");
}