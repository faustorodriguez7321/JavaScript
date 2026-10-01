
const catalogoPerfumes = [
  "Sauvage",
  "Chanel N°5",
  "Light Blue",
  "Acqua di Giò",
  "Black Opium"
];

function listarCatalogo(titulo) {
  console.log("--- " + titulo + " ---");
  for (const perfume of catalogoPerfumes) {
    console.log("Perfume: " + perfume);
  }
}

function agregarPerfumeNuevo(nombre) {
  catalogoPerfumes.push(nombre);
  console.log("Se agregó al final del catálogo: " + nombre);
}

function agregarPerfumeDestacado(nombre) {
  catalogoPerfumes.unshift(nombre);
  console.log("Se agregó al principio del catálogo: " + nombre);
}

function retirarUltimoPerfume() {
  const eliminado = catalogoPerfumes.pop();
  console.log("Se ha eliminado el elemento: " + eliminado);
  return eliminado;
}

function reemplazarPerfume(indice, nuevoNombre) {
  if (indice >= 0 && indice < catalogoPerfumes.length) {
    catalogoPerfumes.splice(indice, 1, nuevoNombre);
    console.log("Se reemplazó el perfume en la posición " + indice + " por: " + nuevoNombre);
  } else {
    console.log("El índice " + indice + " no existe en el catálogo");
  }
}

function pedirPerfume(nombre) {
  if (catalogoPerfumes.includes(nombre)) {
    const posicion = catalogoPerfumes.indexOf(nombre);
    console.log("El cliente pidió: " + nombre + " (posición " + posicion + " del catálogo)");
  } else {
    alert("Lo sentimos, " + nombre + " no está disponible.");
  }
}

agregarPerfumeNuevo("Invictus");
agregarPerfumeDestacado("Good Girl");
retirarUltimoPerfume();
reemplazarPerfume(2, "Eros");
listarCatalogo("Catálogo disponible");

let pedido = prompt("¿Qué perfume querés? (escribí 'salir' para terminar)");
while (pedido !== null && pedido.trim().toLowerCase() !== "salir") {
  if (pedido.trim() !== "") {
    pedirPerfume(pedido.trim());
  }
  pedido = prompt("¿Querés otro perfume? (escribí 'salir' para terminar)");
}