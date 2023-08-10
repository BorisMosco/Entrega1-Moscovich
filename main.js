// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 2) {
//   alert("Consulte con su veterinario");
// } else if (edad >= 3) {
//   alert(nombre + " Continue con los datos de internacion");
// }

// let peso = parseInt(prompt("Ingresa tu peso en kg"));
// let estatura = parseInt(prompt("Ingresa tu estatura en cm"));

// function calcularIMC() {
//   let resultado = peso / ((estatura / 100) * (estatura / 100));
//   return resultado;
// }




//Clases
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Funciones

// Usando el array productos, retorna un string con la información de los productos disponibles
const generarListaProductos = () => {
  let mensaje = "Productos disponibles en nuestra tienda: \n";
  let info = productos.map(
    (prod) => `Id: ${prod.id} - Nombre: ${prod.nombre} - Precio: ${prod.precio}`
  );
  mensaje += info.join("\n");
  mensaje +=
    "\nIngrese el Id del producto que desea comprar. De otro modo ingrese 0 para salir";
  return mensaje;
};

// array de objetos
const productos = [
  new Producto(1, "Alimento para perros", 36580),
  new Producto(2, "Alimento para gatos", 48350),
  new Producto(3, "Antipulga", 10500),
  new Producto(4, "Gotita para ojos", 2000),
  new Producto(5, "Pouch", 8900),
  new Producto(6, "Corta uñas", 25000),
  new Producto(7, "Insulina", 6000),
];

alert("Bienvenido a Patitas");

let usuario = prompt("Ingrese su nombre");

if (usuario == "Julian" || usuario == "Julian") {
  alert("Binvenido a Patitas Julian!");
}

let precioTotal = 0;

let idProducto = Number(prompt(generarListaProductos()));

while (idProducto !== 0) {
  let productoInfo = productos.find((prod) => prod.id === idProducto);

  if (productoInfo) {
    precioTotal += productoInfo.precio;
    alert(
      `Se agregó el producto ${productoInfo.nombre} con precio: $${productoInfo.precio} ARS`
    );
  } else {
    alert(`Error! el ID es inexistente`);
  }

  idProducto = Number(prompt(generarListaProductos()));
}

//Final de la compra. Muestra precio final
alert(`Finalizaste tu compra!. 
Tu precio total es de: ${precioTotal} ARS`);
