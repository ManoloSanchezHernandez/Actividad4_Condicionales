//Primer ejercicio
//Quiero explicar un poco mas est codigo para que sea mas entendible.
//El java scripr lo hice principalmente pensando tanto para el bakcend como front end, ppor lo cual pondre mensajes usando alert, para que todos los resultados aparezcan siempre tanto en el front end como en el back end.
//mensaje de bienvenida
alert('Bienvenido a la cuarta actividad de javascript. Se tienen comentados todos los ejericios por temas de comodidad, para poder probarlos se puede quitar los comentarios para asi funcionar adecuadamente.');
//declaracion de variables
let edad = prompt('Cual es la edad?');
let edad2 = 18 - edad; 
//declaracion de la condicion usando el if
if (edad >= 18) {
    console.log('Tienes la edad suficiente para conducir.')
    alert('Tienes la edad suficiente para conducir.')
}else if (edad < 18) {
    console.log(`Tienes que esperar ${edad2} para poder conducir.`)
    alert(`Tienes que esperar ${edad2} para poder conducir.`);
}



console.log(''); //Salto de linea


/*
//segundo ejercicio
let miEdad = 25; // Puedes cambiar este valor según tu edad
let tuEdad = parseInt(prompt("Ingresa tu edad:"));

if (tuEdad > miEdad) { //declara la variable condicionada que debe de ser verdadera para que el codigo arranque
    let diferencia = tuEdad - miEdad;
    console.log(`Eres ${diferencia} años mayor que yo.`);
    alert('Eres mayor que yo.')

} else if (tuEdad < miEdad) { //declara la variable condicionada pero a la vez opcional puesto que solo si la primera condicional es falsa, se ejecuta esta condicional.
    let diferencia = miEdad - tuEdad;
    console.log(`Soy ${diferencia} años mayor que tú.`);
    alert(`Soy ${diferencia} años mayor que tú.`)

} else if(tuEdad === miEdad) {
    console.log("Tienes la misma edad que yo.");
    alert('Tienes la misma edad que yo.');
}
    */



console.log(''); //Salto de linea


/*
//tercer ejercicio
let a = prompt('Ingresa el valor de a: '); //Damos la opcion de ingresar el valor de a 
let b = prompt('Ingresa el valor de b: '); //Damos la opcion de ingresar el valor de b

if (a > b) { //declara la variable condicionada que debe de ser verdadera para que el codigo arranque
    console.log('a es mayor que b');
    alert('a es mayor que b'); //En caso de que la primera condicional sea verdadera, se ejecuta esta condicional.
} else {
    console.log('a es menor que b'); //En caso de que la primera condicional sea falsa, se ejecuta esta condicional.
    alert('a es menor que b');
}

// tercer ejercicio
let a = prompt('Ingresa el valor de a: '); // Damos la opción de ingresar el valor de a
let b = prompt('Ingresa el valor de b: '); // Damos la opción de ingresar el valor de b

let resultado = (a > b) ? 'a es mayor que b' : 'a es menor que b';

console.log(resultado);
alert(resultado);
*/



console.log(''); //Salto de linea



/*
//cuarto ejercicio
let estacion = prompt("Ingresa el mes en el que quieras saber a qué estación pertenece").toLowerCase(); //Se usa loweCase para evitar porblemas con las mayusculas o minusculas.
//No use el switch, por que este me daba muchos problemas y su escturcura era muy compleja.

if (estacion === "diciembre" || estacion === "enero" || estacion === "febrero") {
    console.log("La estación es Invierno.");
    alert("La estación es Invierno.");
} else if (estacion === "marzo" || estacion === "abril" || estacion === "mayo") {
    console.log("La estación es Primavera.");
    alert("La estación es Primavera.");
} else if (estacion === "junio" || estacion === "julio" || estacion === "agosto") {
    console.log("La estación es Verano.");
    alert("La estación es Verano.");
} else if (estacion === "septiembre" || estacion === "octubre" || estacion === "noviembre") {
    console.log("La estación es Otoño.");
    alert("La estación es Otoño.");
} else {
    console.log("Valor no válido."); 
    alert("Valor no válido.");
}
*/



console.log(''); //Salto de linea



/*
//quinto ejercicio
let puntuacion = parseInt(prompt("Ingresa la puntuación del estudiante:")); //Se usa parseInt para que el usuario ingrese un numero entero.

if (puntuacion >= 80 && puntuacion <= 100) {
    console.log("Calificación: A");
    alert("Calificación: A");
} else if (puntuacion >= 70 && puntuacion < 80) {
    console.log("Calificación: B");
    alert("Calificación: B");
} else if (puntuacion >= 60 && puntuacion < 70) {
    console.log("Calificación: C");
    alert("Calificación: C");
} else if (puntuacion >= 50 && puntuacion < 60) {
    console.log("Calificación: D");
    alert("Calificación: D");
} else if (puntuacion >= 0 && puntuacion < 50) {
    console.log("Calificación: F");
    alert("Calificación: F");
} else {
    console.log("Puntuación no válida.");
    alert("Puntuación no válida.");
}
*/
