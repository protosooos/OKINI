function calculaPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
console.log(calculaPrecio(7, 10));
console.log(calculaPrecio(18, 10));
console.log(calculaPrecio(20, 10));

function puedeReservar(cantidad) {
    if(cantidad <= 2) {
        return true;
    } else {
        return false;
    }
}
