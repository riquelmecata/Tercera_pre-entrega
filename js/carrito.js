// guardar productos en el carrito

const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

// cargar productos del carrito
const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// verificar si está el producto en el carrito

const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {// si ya está en el carrito
        let pos = productos_carrito.findIndex(item => item.id === id); // posición donde está el producto
        productos_carrito[pos].cantidad += 1;
    } else { 
        // agrega por primera vez
        const producto = productos.find(item => item.id === id) // busco mi array
        producto.cantidad = 1; // primera vez que está agrgando un producto
        productos_carrito.push(producto); // agrega al array de productos
    }
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

// eliminar del carrito 

const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

// agrega cantidad

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

// funcion de botón del carrito

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad, 0); 
}

const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0); 
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn position-relative border border-0">
        <img src="images/bolsa.png" alt="Carrito" class="icon">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
} //devuelve el total de elementos que tiene el carrito

// programando los botones de agregar / eliminar

const agregarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id); // posición donde está el producto
    productos_carrito[pos].cantidad += 1;
    guardarProductosCarrito(productos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();
}

const eliminarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id); // posición donde está el producto
    productos_carrito[pos].cantidad -= 1;

    if (productos_carrito[pos].cantidad == 0) {
        eliminarProducto(id);
    } else {
        guardarProductosCarrito(productos_carrito);
        renderProductosCarrito();
        renderBotonCarrito();
    } 
}

// pagina de productos 

const buscarProducto = (id) => {
    const productos = cargarProductosLS();

    return productos.find(item => item.id === id);
}

const verProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "ver-producto.html";
}

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("producto"));
}