const renderProducto = () => {

    const producto = cargarProducto();
    let salida = `<div class="col-md-4 offset-md-2">
            <img src="images/${producto.imagen}" alt="${producto.imagen}" class="img-fluid">
        </div>
        <div class="col-md-4">
            <h2>${producto.nombre}</h2>
            <h3>$${producto.precio}</h3>
            <p>${producto.descripcion}</p>
            <p><a href="#" class="btn btn-warning" onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar al carrito</a></p>

        </div>`;

    document.getElementById("producto").innerHTML = salida;
}

renderProducto();
renderBotonCarrito();