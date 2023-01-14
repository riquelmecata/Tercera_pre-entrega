const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida = "";

    if(totalCarrito() > 0) {
        salida = `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-end"><a href="#" class="btn btn-warning" onClick="vaciarCarrito()">Vaciar carrito <img src="images/delete.png" alt="Vaciar carrito" width="24" ></a></td>
        </tr>`;

        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">
            <div class="btn-group" role="group" aria-label="productos">
            <button type="button" class="btn btn-primary" title="Agregar item" onClick="eliminarItemProducto(${producto.id});">-</button>
                <button type="button" class="btn btn-primary">${producto.cantidad}</button>
                <button type="button" class="btn btn-primary" title="Agregar item" onClick="agregarItemProducto(${producto.id});">+</button>
            </div>
            </td>
            <td class="align-middle">${producto.cantidad} X $${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle"><a href="#" title="Eliminar producto" onClick="eliminarProducto(${producto.id});"><img src="images/close.png" alt="Eliminar producto" width="24" /></a></td>`;

        }

        salida += `<tr>
        <td colspan="4" class="border border-0"><h6>Subtotal</h6></td>
        <td class="text-center border border-0"><h6>$${sumaCarrito()}</h6></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        salida = `<div class="alert alert-danger" role="alert">
        No hay productos en el carrito
      </div>`;
    }

    document.getElementById("productos_seleccionados").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();