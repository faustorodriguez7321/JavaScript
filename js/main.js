function pelicula(peli){
    switch(peli){
        case "1": return "Avengers";
        break;
        
        case "2": return "La odisea";
        break;
        
        case "3": return "Troya";
        break;
        
        case "4": return "Cars";
        break;
        
        default: break;
    }
}

function calculotot(cantentradas){
    let total=cantentradas*9000;
    return total;
}


function verificardescuento(total,descuento){
    if(descuento){
        total=total*0.85;
    }
    return total;
}
const enpantalla=(peliculaelegida,cantentradas,descuento,total) =>{
    console.log("Pelicula: "+ peliculaelegida);
    console.log("Cantidad de entradas: "+ cantentradas);
    console.log("¿Descuento aplicado?: " + descuento);
    console.log("Total a pagar: "+ total);
}

let continuar = confirm("¿Desea realizar una compra?");
while(continuar){
    
    let peli=prompt("¿De que pelicula quiere comprar entradas? (1=Avenger, 2=La odisea, 3=Troya, 4=Cars)")
    
    let cantentradas=parseInt(prompt("¿Cuantas entradas desea comprar?"));
    
    let descuento=confirm("¿Va a realizar el pago en transferencia/efectivo?");
    
    let peliculaelegida=pelicula(peli);
    let total=calculotot(cantentradas);
    total=verificardescuento(total,descuento);
    
    enpantalla(peliculaelegida, cantentradas, descuento, total);
    
    continuar = confirm("¿Desea realizar otra compra?");
}

