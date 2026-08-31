//comentario en linea


/*comentario en bloque
*/
for (let i = 0; i < 2; i++) {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    const anionaci = parseInt(prompt("Ingrese su año de nacimiento"));
    let edad = 2026 - anionaci;
    
    alert(nombre + " " + apellido + " " + edad);
    if (edad >= 18) {
        console.log("usted es mayor de edad puede realizar la compra " + edad)
    }
    else {
        console.log("usted es menor de edad no puede realizar la compra " + edad)
    }
}