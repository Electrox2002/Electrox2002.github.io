// Inicializar el carrito como un array vacío
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    // Agregar el producto y su precio al carrito
    carrito.push({ nombre: producto, precio: precio });
    // Actualizar la visualización del carrito
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoDiv = document.querySelector('.carrito');
    const listaCarrito = document.querySelector('.lista-carrito');
    const totalDiv = document.querySelector('.total-carrito');

    // Actualizar el número de productos en el carrito
    carritoDiv.innerHTML = `🛒 Carrito de compra (${carrito.length} productos)`;

    // Limpiar la lista actual
    listaCarrito.innerHTML = '';
    
    // Calcular el total
    let total = 0;

    // Mostrar los productos en el carrito
    carrito.forEach((item) => {
        const productoItem = document.createElement('li');
        productoItem.textContent = `${item.nombre} - $${item.precio.toLocaleString()} COP`;
        listaCarrito.appendChild(productoItem);
        total += item.precio; // Sumar el precio al total
    });

    // Mostrar el total en el carrito
    totalDiv.textContent = `Total: $${total.toLocaleString()} COP`;
}
