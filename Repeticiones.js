const reservasDelDia = [2, 1, 2, 1, 2, 2, 1, 2, 1, 2];
let totalReservas = 0;

for (const cantidad of reservasDelDia) {
    totalReservas = totalReservas + cantidad;
}

//for (const cantidad of reservasDelDia) {
//  totalTazas = cantidad;
// }

    console.log(totalReservas);