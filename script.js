function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

//function puedeReservar(cantidad) {
//  return cantidad <= 2;
//}

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
    }

//botonReservar.addEventListener("click", function() {
//  console.log("El usuario hizo clic");
//});

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector(".contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasDisponibles = parseInt(contadorTazas.textContent);

    if (puedeReservar(tazasDisponibles)) {
        contadorTazas.textContent = tazasDisponibles - 1;
        } else {
        botonReservar.textContent = "No hay tazas disponibles";
        botonReservar.disabled = true;
      }
})

