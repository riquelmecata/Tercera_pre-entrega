const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";

    for (let producto of productos) {
        salida += `<div class="col-md-4 mb-3">
            <a href="#" onClick="verProducto(${producto.id});" class="link-dark">
                <div class="card">
                    <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h6 class="card-title">${producto.nombre}</h6>
                    <p class="card-text">$${producto.precio}</p>
                    </div>
                </div>
            </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();