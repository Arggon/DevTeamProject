window.addEventListener('load', iniciarPagina)

const seccionEncabezado = document.getElementById('idSeccionEncabezado')
const seccionProductos = document.getElementById('idSeccionProductos')
const seccionVenta = document.getElementById('idSeccionVenta')
const seccionContabilidad = document.getElementById('idSeccionContabilidad')

const botonProductos = document.getElementById('idBotonProductos')
const botonVenta = document.getElementById('idBotonVenta')
const botonContabilidad = document.getElementById('idBotonContabilidad')
const botonNuevoProducto = document.getElementById('idBotonNuevoProducto')
const botonEditarColumna = document.getElementById('idBotonEditarColumna')
const botonSeleccionarProducto = document.getElementById('idBotonSeleccionarProducto')





function iniciarPagina() {
    seccionProductos.style.display='none'
    seccionVenta.style.display='none'
    seccionContabilidad.style.display='none'

    botonProductos.addEventListener('click', mostrarProductos)
    botonVenta.addEventListener('click', mostrarVentas)
    botonContabilidad.addEventListener('click', mostrarContabilidad)
    botonNuevoProducto.addEventListener('click', ingresarNuevoProducto)
    botonEditarColumna.addEventListener('click', editarColumna)
    botonSeleccionarProducto.addEventListener('click', seleccionarProducto)
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