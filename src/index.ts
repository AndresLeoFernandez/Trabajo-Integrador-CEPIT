/**
 * Declaracion global de Variables
 */
let producto = document.getElementById("product-name");
let precio = document.getElementById("price-value");
let agregar = document.getElementById("btn-add");
let promocion = document.getElementById("btn-desc");
let visor = document.getElementById("resultado-compras");
let visorOfertas = document.getElementById("resultado-ofertas");
let suma: number = 0;
let cantidad: number = 0;

/**
 *  funcion que dado un string str me indica si es
 * vacio o no previa limpieza de caracteres en blanco.
 */
function isEmpty(str: string): boolean {
  return !str.trim().length;
}
/**
 * funcion que agrega el producto al carrito siempre y cuando los valores
 * en los inputs producto y precio tengan un contenido!!
 */
const agregarProducto = () => {
  if (isEmpty(precio?.value) || isEmpty(producto?.value)) {
    return;
  } else {
    if (cantidad === 0) {
      visor?.innerHTML = "<table class='table table-bordered'><thead class='text-center'><tr><th style='width:7%'>Orden</th><th>Producto</th><th style='width:13%'>Precio unitario</th><th style='width:13%'>Total</th></tr></thead><tbody id='lista-compras'></tbody></table>";
    }
    cantidad++;
    let valorUnitario: string = Number(precio?.value).toFixed(2);
    suma += Number(valorUnitario);
    let valorSumaTotal: string = Number(suma).toFixed(2);
    let cuerpo = document.getElementById("lista-compras");
    cuerpo.innerHTML += `<tr><td class='text-end'>${cantidad}</td><td class='text-start'>${producto?.value}</td><td class='text-end'>${valorUnitario}</td><td class='text-end'>${valorSumaTotal}</td></tr>`;
    precio?.value = "";
    producto?.value = "";
    visorOfertas?.innerHTML = "";
    producto?.focus();
  }
};
/**
 * funcion que genera mensaje conforme al valor total de la compra
 * que se esta procesando en ese momento.
 */
const chequearPromocionesVigentes = () => {
  if (suma > 2500) {
    let valorDescuento: string = Number(suma * 0.1).toFixed(2);
    let valorTotal: string = Number(suma - suma * 0.1).toFixed(2);
    visorOfertas?.innerHTML = `<div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Felicitaciones!!!</strong> Al momento contas con un descuento del 10% sobre tu compra que reprensenta un importe de $ ${valorDescuento}. Solo deberas abonar $${valorTotal}. <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>`;
  } else {
    visorOfertas?.innerHTML = `<div class='alert alert-warning alert-dismissible fade show' role='alert'> Con su compra de $2500 o mas podes acceder a un descuento.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>`;
    console.log("Con su compra de $2500 puede acceder a un descuento.");
  }
};
/**
 * Vinculo los eventos
 */
agregar.addEventListener("click", agregarProducto);
promocion.addEventListener("click", chequearPromocionesVigentes);
