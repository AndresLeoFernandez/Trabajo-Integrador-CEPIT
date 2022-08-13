let producto = document.getElementById("product-name");
let precio = document.getElementById("price-value");
let agregar = document.getElementById("btn-add");
let promocion = document.getElementById("btn-desc");
let visor = document.getElementById("resultado-compras");
let visorOfertas = document.getElementById("resultado-ofertas");
let suma: number = 0;
let cantidad: number = 0;

function isEmpty(str: string): boolean {
  return !str.trim().length;
}

const agregarProducto = () => {
  if (isEmpty(precio?.value) || isEmpty(producto?.value)) {
    return;
  } else {
    if (cantidad === 0) {
      visor?.innerHTML = "<table class='table table-bordered text-center'><thead><tr><th style='width:7%'>Orden</th><th>Producto</th><th style='width:13%'>Precio unitario</th><th style='width:13%'>Total</th></tr></thead><tbody id='lista-compras'></tbody></table>";
    }
    cantidad++;
    let valor: string = Number(precio?.value).toFixed(2);
    suma += Number(valor);
    let cuerpo = document.getElementById("lista-compras");
    cuerpo.innerHTML += `<tr><td>${cantidad}</td><td>${producto?.value}</td><td>${valor}</td><td>${suma}</td><tr>`;
    precio?.value = "";
    producto?.value = "";
    visorOfertas?.innerHTML = "";
    producto?.focus();
  }
};

const chequearPromocionesVigentes = () => {
  if (suma > 2500) {
    visorOfertas?.innerHTML = `<div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Felicitaciones!!!</strong> Al momento contas con un descuento del 10% sobre tu compra que reprensenta un importe de $ ${
      suma * 0.1
    }. Solo deberas abonar $${
      suma - suma * 0.1
    }. <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>`;
  } else {
    visorOfertas?.innerHTML = `<div class='alert alert-warning alert-dismissible fade show' role='alert'> Con su compra de $2500 o mas podes acceder a un descuento.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>`;
    console.log("Con su compra de $2500 puede acceder a un descuento.");
  }
};

agregar.addEventListener("click", agregarProducto);
promocion.addEventListener("click", chequearPromocionesVigentes);
