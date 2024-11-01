//Primer ejercicio
alert('Bienvenido a la cuarta actividad de javascript');
let age = prompt('Cual es la edad?');
let newAge = 18 - age; 

if (age >= 18) {
    console.log('Tienes la edad suficiente para conducir.')
}else if (age < 18) {
    console.log(`Tienes que esperar ${newAge} para poder conducir.`)
}
console.log(''); //Salto de linea

//segundo ejercicio
let miEdad = 25; // Puedes cambiar este valor según tu edad
let tuEdad = parseInt(prompt("Ingresa tu edad:"));

if (tuEdad > miEdad) {
    let diferencia = tuEdad - miEdad;
    console.log(`Eres ${diferencia} años mayor que yo.`);
} else if (tuEdad < miEdad) {
    let diferencia = miEdad - tuEdad;
    console.log(`Soy ${diferencia} años mayor que tú.`);
} else {
    console.log("Tienes la misma edad que yo.");
}
console.log(''); //Salto de linea

//tercer ejercicio
let a = 10; // Cambia este valor según necesites
let b = 5; // Cambia este valor según necesites

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor que b');
}
console.log(''); //Salto de linea

//cuarto ejercicio
let estacion = prompt("Ingresa el nombre de una estación (Otoño, Invierno, Primavera, Verano):");

if (estacion === "Septiembre" || estacion === "Octubre" || estacion === "Noviembre") {
    console.log("La estación es Otoño.");
} else if (estacion === "Diciembre" || estacion === "Enero" || estacion === "Febrero") {
    console.log("La estación es Invierno.");
} else if (estacion === "Marzo" || estacion === "Abril" || estacion === "Mayo") {
    console.log("La estación es Primavera.");
} else if (estacion === "Junio" || estacion === "Julio" || estacion === "Agosto") {
    console.log("La estación es Verano.");
} else {
    console.log("Estación no válida.");
}
console.log(''); //Salto de linea

//quinto ejercicio
let puntuacion = parseInt(prompt("Ingresa la puntuación del estudiante:"));

if (puntuacion >= 80 && puntuacion <= 100) {
    console.log("Calificación: A");
} else if (puntuacion >= 70 && puntuacion < 80) {
    console.log("Calificación: B");
} else if (puntuacion >= 60 && puntuacion < 70) {
    console.log("Calificación: C");
} else if (puntuacion >= 50 && puntuacion < 60) {
    console.log("Calificación: D");
} else if (puntuacion >= 0 && puntuacion < 50) {
    console.log("Calificación: F");
} else {
    console.log("Puntuación no válida.");
}

