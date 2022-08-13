let producto = document.getElementById("product-name");
let precio = document.getElementById("price-value");
let agregar = document.getElementById("btn-add");
/*let calcular = document.getElementById("btn-calcular");*/
let lista = document.getElementById("lista");
/*let total = document.getElementById("precio-total");*/
/*let precios: number[] = [];*/
/*let suma: number = 0;*/
let cantidad: number = 0;

const agregarProducto = () => {
  if (cantidad === 0) {
    console.log("Primer producto en la sesta");
  }
  lista?.innerHTML += `<li> ${producto?.value}   $ ${precio?.value}</li>`;
  precio?.value = "";
  producto?.value = "";
  cantidad++;
};

/*const calcularPrecioTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML =
    "La suma total de la lista de Precios ingresados es " + suma;
};*/

agregar.addEventListener("click", agregarProducto);
/*calcular.addEventListener("click", calcularPrecioTotal);*/
