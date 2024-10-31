

// 1. Crear la función upperConverter() que recibe un string en minúscula, lo
// convierte en mayúsculas y lo retorna. Investiga qué hace el método de strings.toUpperCase()

function upperConverter(cadena){
        return cadena.toUpperCase();
} 

// console.log(upperConverter("esta frase está en mayúsculas"));

// 2. Crear la función dataType() que recibe un parámetro y devuelve qué tipo de dato
// es ese parámetro. Investiga qué hace la palabra reservada typeof().

function dataType(parametro){
    return typeof(parametro);
}

// let number = 8574;
// console.log(dataType(number));




// 3. Crear la función dogAge() que calcule la edad de los perros, considerando que 1
// año para nosotros son 7 de ellos.

function dogAge(edadPerro) {
        return edadPerro * 7    
};

// console.log(`Su perro en años de humanos tiene: ${dogAge(5)} años`);




// 4. Crear la función hourPrice() que calcule el valor de una hora de trabajo,
// teniendo en cuenta que dicha función recibe tres parámetros: El salario mensual,
// la cantidad de días trabajados y la cantidad de horas que regularmente trabajada por día.




function hourPrice(salarioMensual, diasTrabajados, horasxdia){
    return salarioMensual / (diasTrabajados * horasxdia)
};

// console.log(`El precio de su hora de trabajo es: $ ${hourPrice(800000, 20, 8)}`);

// 5. Pueden hacer las pruebas ejecutando las funciones dentro de un console.log(),
// por ejemplo: console.log(dogAge(4)) Luego todos los console.log() deben quedar comentados.
// Al final del archivo debes exportar un objeto literal con todas las funciones que hayas
// creado. En el caso que las hayas creado todas debería quedar así:
// module.exports = {upperConverter, dataType, dogAge, hourPrice}

module.exports = { upperConverter, dataType, dogAge, hourPrice };
