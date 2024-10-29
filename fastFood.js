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
// valores booleanos, uno por cadaadicional.

// 3. Tu responsabilidad será la de crear dos funciones:

// a. PRIMERA FUNCIÓN- CALLBACK: Tendrá la responsabilidad de calcular
// el total a pagar por el cliente, en base a un total de nueve parámetros que
// recibirá la función:
// i.Un string para el tipo de hamburguesa, teniendo en cuenta los
// siguientes valores:
// 1. Carnealaparrilla: $1800
// 2. Pollo: $1500
// 3. Vegetariana: $1200

// ii.Y recibirá los ocho valores booleanos de los adicionales, teniendo
// encuentalossiguientes valores:
// 1. Jamón=$30
// 2. Queso=$25
// 3. Salsadetomate=$5
// 4. Mayonesa=$5
// 5. Mostaza=$5
// 6. Tomate=$15
// 7. Lechuga=$10
// 8. Cebolla=$10


// b. SEGUNDA FUNCIÓN: Esta función debe llamarse fastFood(), la misma
// tendrá la responsabilidad de devolver un mensaje al usuario donde le
// indique su nombre, su apellido y el total a pagar en base al tipo de
// hamburguesa seleccionado más los adicionales indicados. Tenga en
// cuenta que esta función deberá recibir como parámetros: “nombre del
// usuario”, “apellido del usuario”, “tipo de hamburguesa” y los ocho valores
// booleanos en función a los adicionales que el cliente haya seleccionado.

// 4. La función callback debe retornar el total a pagar y la segunda función el siguiente
// mensaje: Estimado Daniel Fuentes, el monto total a pagar es de: 1905,
// donde 1905 es el valor que devuelve la función callback.

// 5. Para hacer las pruebas pueden hacerlo de la siguiente manera:
// let mensaje = fastFood(“carne”,true, false, false, true, true, false, true, false)
// console.log(mensaje)

// 6. Luego de hacer las pruebas todos los console.log() deben quedar comentados.