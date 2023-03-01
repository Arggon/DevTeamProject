window.addEventListener('load', iniciarPagina)

const seccionEncabezado = document.getElementById('idSeccionEncabezado')
const seccionProductos = document.getElementById('idSeccionProductos')
const seccionVenta = document.getElementById('idSeccionVenta')
const seccionContabilidad = document.getElementById('idSeccionContabilidad')

const botonProductos = document.getElementById('idBotonProductos')
const botonVenta = document.getElementById('idBotonVenta')
const botonContabilidad = document.getElementById('idBotonContabilidad')
const botonNuevoProducto = document.getElementById('idBotonNuevoProducto')

const botonSeleccionarProducto = document.getElementById('idBotonSeleccionarProducto')

const tablaProductos = document.getElementById('idTablaProductos')

let tabla
let productos = []

class Producto {
    constructor(codigo,descripcion,precioCompra,precioVenta,existencia){
        this.codigo= codigo
        this.descripcion= descripcion
        this.precioCompra= precioCompra
        this.precioVenta= precioVenta
        this.existencia= existencia
    }
}

let ejemplo1 = new Producto (1,'producto1','5','10',4)
let ejemplo2 = new Producto (2,'producto2','15','20',6)

productos.push(ejemplo1,ejemplo2)
console.log(productos)

async function iniciarPagina() {
    seccionProductos.style.display='none'
    seccionVenta.style.display='none'
    seccionContabilidad.style.display='none'

    botonProductos.addEventListener('click', mostrarProductos)
    botonVenta.addEventListener('click', mostrarVentas)
    botonContabilidad.addEventListener('click', mostrarContabilidad)
    botonNuevoProducto.addEventListener('click', ingresarNuevoProducto)
    botonSeleccionarProducto.addEventListener('click', seleccionarProducto)

    productos.forEach((Producto) => {
        tabla= `<td>${Producto.codigo} </td>
                <td>${Producto.descripcion}</td>
                <td>${Producto.precioCompra}</td>
                <td>${Producto.precioVenta}</td>
                <td>${Producto.existencia}</td>
                <td><button class="claseBotoncitoEdit" id="idBotoncitoEditar">
                    <img src="./img/edit-icon.jpg">
                    </button>
                </td>
                <td><button class="claseBotoncitoDelete" id="idBotoncitoEliminar">
                    <img src="./img/delete-icon.jpg">
                    </button>
                </td>`
        tablaProductos.innerHTML += tabla
    })
}

function mostrarProductos() {
    seccionProductos.style.display='flex'
    seccionVenta.style.display='none'
    seccionContabilidad.style.display='none'
}

function mostrarVentas() {
    seccionVenta.style.display='flex'
    seccionProductos.style.display='none'
    seccionContabilidad.style.display='none'
}

function mostrarContabilidad() {
    seccionContabilidad.style.display='flex'
    seccionProductos.style.display='none'
    seccionVenta.style.display='none'
}

function ingresarNuevoProducto() {
    //ingresame todo el producto papu
}

function editarColumna() {
    
}

function seleccionarProducto() {
    
}