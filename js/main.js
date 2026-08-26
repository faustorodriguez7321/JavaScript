//comentario en linea
/*comentario en bloque
*/
/* el condicional OR se escribe || el AND se escribe && */
for (let i = 0;i < 2;i++) {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let anionaci = prompt("Ingrese su año de nacimiento");
    let edad = 2026 - anionaci;


    if (edad >= 18) {
        alert("usted es mayor de edad " + edad + " " + nombre + " " + apellido)
    }
    else {
        alert("usted es menor de edad " + edad + " " + nombre + " " + apellido)
    }
}