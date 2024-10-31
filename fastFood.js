// 2. El teach leader de la empresa nos pide construir un sistema para un local de
// venta de comida rápida. Los clientes eligen el tipo de hamburguesa base con un
// precio base y, por cada selección que el cliente agregue, se le suma el valor de su
// selección al precio.

// Por ejemplo, si partiendo de una hamburguesa base carne a la parrilla con un
// precio “a”, el cliente les incorpora los adicionales: de queso “b” y tomate “c”, el
// total a pagar sería a+b+c. Así sucesivamente con el resto de los ingredientes.
// Es importante tener presente que cada uno de estos adicionales estarán
// representados por valores booleanos, es decir, true o false, dependiendo de si
// aceptan o no cada uno de los adicionales. Así recibiremos un total de ocho
// valores booleanos, uno por cada adicional.

// 3. Tu responsabilidad será la de crear dos funciones:

// a. PRIMERA FUNCIÓN- CALLBACK: 
// Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base 
// a un total de nueve parámetros que recibirá la función:

// i.Un string para el tipo de hamburguesa, teniendo en cuenta los
// siguientes valores:

// 1. Carne a la parrilla: $1800
// 2. Pollo: $1500
// 3. Vegetariana: $1200

const tipoDeHamburguesa = {
    carne: 1800,
    pollo: 1500,
    vegetariana: 1200
};

// ii.Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los siguientes valores:
// 1. Jamón = $30
// 2. Queso = $25
// 3. Salsa de tomate = $5
// 4. Mayonesa = $5
// 5. Mostaza = $5
// 6. Tomate = $15
// 7. Lechuga = $10
// 8. Cebolla = $10

function calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precioBase = 0;

    if (tipoHamburguesa === "carne") {
        precioBase = 1800;
    } else if (tipoHamburguesa === "pollo") {
        precioBase = 1500;
    } else if (tipoHamburguesa === "vegetariana") {
        precioBase = 1200;
    }

    let precioAdicionales = 0;
    if (jamon) precioAdicionales += 30;
    if (queso) precioAdicionales += 25;
    if (salsaTomate) precioAdicionales += 5;
    if (mayonesa) precioAdicionales += 5;
    if (mostaza) precioAdicionales += 5;
    if (tomate) precioAdicionales += 15;
    if (lechuga) precioAdicionales += 10;
    if (cebolla) precioAdicionales += 10;

    return precioBase + precioAdicionales;
}

// b. SEGUNDA FUNCIÓN: 
// Esta función debe llamarse fastFood(), la misma
// tendrá la responsabilidad de devolver un mensaje al usuario donde le
// indique su nombre, su apellido y el total a pagar en base al tipo de
// hamburguesa seleccionado más los adicionales indicados. Tenga en
// cuenta que esta función deberá recibir como parámetros: “nombre del
// usuario”, “apellido del usuario”, “tipo de hamburguesa” y los ocho valores
// booleanos en función a los adicionales que el cliente haya seleccionado.

// 4. La función callback debe retornar el total a pagar y la segunda función el siguiente
// mensaje: Estimado Daniel Fuentes, el monto total a pagar es de: 1905,
// donde 1905 es el valor que devuelve la función callback.

function fastFood(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total = calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}.`;
}

// Pruebas 

// 5. Para hacer las pruebas pueden hacerlo de la siguiente manera:
// let mensaje = fastFood(“carne”,true, false, false, true, true, false, true, false)
// console.log(mensaje)


let mensaje1 = fastFood("Daniel", "Fuentes", "carne", true, false, false, true, true, false, true, false);
console.log(mensaje1); 

let mensaje2 = fastFood("María", "González", "pollo", true, true, true, false, false, true, false, true);
console.log(mensaje2); 

let mensaje3 = fastFood("Juan", "Pérez", "vegetariana", false, false, false, false, false, false, false, false);
console.log(mensaje3);


// 6. Luego de hacer las pruebas todos los console.log() deben quedar comentados.

