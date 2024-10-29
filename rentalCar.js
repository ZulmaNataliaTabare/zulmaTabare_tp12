
//  2. Crea una función llamada rentalCar() que permita calcular el monto a pagar por
//  el alquiler de un vehículo, que reciba como parámetros: “tipo de vehículo”, “Días
//  de alquiler” y “silla para bebe”.
//  3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
//  siguientes consideraciones:
//  a. De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
//  
//  i. Compacto:$14000
//  ii.Mediano: $17000
//  iii.Camioneta: $28000
// 
//  b. Si adicionalmente el cliente requiere la silla para niños, se le cobra un
//  adicional por día de $1200
//  4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
//  5. Para probar las diferentes respuestas invoca a la función, asigna diferentes
//  valores o argumentos. Usando el console.log(), muestra los resultados al usuario:
//  “Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando
//  los 3 días utilizados, el monto total a pagar es de $42000”.
//  (Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el
//  mensaje final)
//  Luego de hacer las pruebas todos los console.log() deben quedar comentados.


const tipoDeVehiculo = {
    Compacto: 14000,
    Mediano: 17000,
    Camioneta: 28000
};

function rentalCar(tipoDeVehiculo, diasAlquiler, sillaBebe) {
    let costoSilla = sillaBebe ? 1200 * diasAlquiler : 0;
    return (tipoDeVehiculo * diasAlquiler) + costoSilla;
}


let diasAlquiler = 3;

let precioCompacto = rentalCar(tipoDeVehiculo.Compacto, diasAlquiler, true);
// console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${precioCompacto}.`);

let precioMediano = rentalCar(tipoDeVehiculo.Mediano, diasAlquiler, false);
// console.log(`Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${precioMediano}.`);

let precioCamioneta = rentalCar(tipoDeVehiculo.Camioneta, diasAlquiler, true);
// console.log(`Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${precioCamioneta}.`);


