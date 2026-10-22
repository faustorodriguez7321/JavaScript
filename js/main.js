function clasificarEdad(edad) {
   if (edad <= 17) {
      return "niño/adolescente";
   } else if (edad <= 59) {
      return "adulto";
   } else {
      return "adulto mayor";
   }
}

function verificarJubilacion(edad, sexo) {
   if (sexo == "femenino" && edad >= 60) {
      return "puede jubilarse";
   } else if (sexo == "masculino" && edad >= 65) {
      return "puede jubilarse";
   } else {
      return "todavía no puede jubilarse";
   }
}

function calcularAños(edad, sexo) {
   if (sexo == "femenino" && edad < 60) {
      return 60 - edad;
   } else if (sexo == "masculino" && edad < 65) {
      return 65 - edad;
   } else {
      return 0;
   }
}

const mostrarResultado = (nombre, apellido, sexo, edad, categoria, jubilacion, años) => {
   let mensaje = "Persona: " + nombre + " " + apellido + "\n" +
                 "Sexo: " + sexo + "\n" +
                 "Edad: " + edad + "\n" +
                 "Categoría: " + categoria + "\n" +
                 "Jubilación: " + jubilacion;

   if (años > 0) {
      mensaje = mensaje + "\n" + "Años que le faltan: " + años;
   }
   alert(mensaje);
}

const personasRegistradas = ["Laura Gómez", "Nicolás Pérez", "Marta Díaz", "Juan Gimenez", "Carla Ruiz"];

function listarRegistrados(lista) {
   console.log("Personas registradas:");
   for (const persona of lista) {
      console.log("Persona: " + persona);
   }
}

let continuar = "si";
while (continuar == "si") {

   let nombre = prompt("Ingrese su nombre:");
   let apellido = prompt("Ingrese su apellido:");
   let sexo = prompt("Ingrese su sexo (masculino o femenino):").toLowerCase();
   let edad = prompt("Ingrese su edad:");

   const categoria = clasificarEdad(edad);
   const jubilacion = verificarJubilacion(edad, sexo);
   const años = calcularAños(edad, sexo);

   mostrarResultado(nombre, apellido, sexo, edad, categoria, jubilacion, años);

   const nombreCompleto = nombre + " " + apellido;

   if (jubilacion == "puede jubilarse") {
      personasRegistradas.unshift(nombreCompleto);
   } else {
      personasRegistradas.push(nombreCompleto);
   }

   continuar = prompt("¿Desea cargar a otra persona? (si o no)").toLowerCase();
}

listarRegistrados(personasRegistradas);

const corregir = prompt("¿Alguien escribió mal su nombre y quiere corregirlo? (si o no)").toLowerCase();

if (corregir == "si") {

   const nombreIncorrecto = prompt("Ingrese el nombre tal cual está registrado:");

   if (personasRegistradas.includes(nombreIncorrecto)) {
      const posicion = personasRegistradas.indexOf(nombreIncorrecto);
      const nombreNuevo = prompt("Ingrese el nombre corregido:");

      personasRegistradas.splice(posicion, 1, nombreNuevo);
      console.log("Nombre corregido. Registro actualizado:");
      listarRegistrados(personasRegistradas);
   } else {
      console.log(nombreIncorrecto + " no está registrado, no se puede corregir");
   }
} else {
   console.log("No se realizaron correcciones");
}