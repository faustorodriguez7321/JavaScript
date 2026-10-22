class Perfume {
   constructor(id, nombre, precio, stock) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
   }

   vender(cantidad) {
      if (cantidad > 0 && cantidad <= this.stock) {
         this.stock = this.stock - cantidad;
         return true;
      } else {
         return false;
      }
   }
}

const perfume1 = new Perfume(1, "Perfume floral", 45000, 10);
const perfume2 = new Perfume(2, "Perfume cítrico", 38000, 8);
const perfume3 = new Perfume(3, "Perfume amaderado", 52000, 5);

const perfumes = [perfume1, perfume2, perfume3];

function buscarPerfume(lista, id) {
   for (const perfume of lista) {
      if (perfume.id == id) {
         return perfume;
      }
   }
   return null;
}

function verificarStock(perfume, cantidad) {
   if (perfume.stock == 0) {
      return "sin stock";
   } else if (cantidad > perfume.stock) {
      return "stock insuficiente";
   } else {
      return "se puede vender";
   }
}

function calcularTotal(precio, cantidad) {
   return precio * cantidad;
}

const mostrarResultado = (nombre, precio, cantidad, estado, total, stockRestante) => {
   let mensaje = "Perfume: " + nombre + "\n" +
                 "Precio: $" + precio + "\n" +
                 "Cantidad: " + cantidad + "\n" +
                 "Estado: " + estado;

   if (total > 0) {
      mensaje = mensaje + "\n" + "Total a pagar: $" + total + "\n" + "Stock restante: " + stockRestante;
   }
   alert(mensaje);
}

const perfumesVendidos = ["Perfume floral", "Perfume cítrico"];

function listarVendidos(lista) {
   console.log("Perfumes vendidos:");
   for (const nombre of lista) {
      console.log("Perfume: " + nombre);
   }
}

function listarPerfumes(lista) {
   console.log("Perfumes disponibles:");
   for (const perfume of lista) {
      console.log(perfume.id + " - " + perfume.nombre + " | Precio: $" + perfume.precio + " | Stock: " + perfume.stock);
   }
}

let continuar = "si";
while (continuar == "si") {

   let menu = "Perfumes disponibles:\n";
   for (const perfume of perfumes) {
      menu = menu + perfume.id + " - " + perfume.nombre + " ($" + perfume.precio + ", stock: " + perfume.stock + ")\n";
   }

   const idElegido = prompt(menu + "Ingrese el número del perfume:");
   const perfumeElegido = buscarPerfume(perfumes, idElegido);

   if (perfumeElegido) {
      const cantidad = Number(prompt("Ingrese la cantidad:"));

      const estado = verificarStock(perfumeElegido, cantidad);
      let total = 0;

      if (estado == "se puede vender" && perfumeElegido.vender(cantidad)) {
         total = calcularTotal(perfumeElegido.precio, cantidad);
         perfumesVendidos.push(perfumeElegido.nombre);
      }

      mostrarResultado(perfumeElegido.nombre, perfumeElegido.precio, cantidad, estado, total, perfumeElegido.stock);
   } else {
      alert("El perfume elegido no existe");
   }

   continuar = prompt("¿Desea realizar otra compra? (si o no)").toLowerCase();
}

listarVendidos(perfumesVendidos);
listarPerfumes(perfumes);

const corregir = prompt("¿Se anotó mal algún perfume vendido y quiere corregirlo? (si o no)").toLowerCase();

if (corregir == "si") {

   const nombreIncorrecto = prompt("Ingrese el nombre tal cual está registrado:");

   if (perfumesVendidos.includes(nombreIncorrecto)) {
      const posicion = perfumesVendidos.indexOf(nombreIncorrecto);
      const nombreNuevo = prompt("Ingrese el nombre corregido:");

      perfumesVendidos.splice(posicion, 1, nombreNuevo);
      console.log("Nombre corregido. Registro actualizado:");
      listarVendidos(perfumesVendidos);
   } else {
      console.log(nombreIncorrecto + " no está registrado, no se puede corregir");
   }
} else {
   console.log("No se realizaron correcciones");
}