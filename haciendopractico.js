










////////////////////////4️.Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log(dineroReal)



//////////////////////////////////////2️.Convierte el siguiente código en una función, pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "George";
const lastname = "Gutierrez";
const completeName = name + lastname;
const nickname = "georgegg";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}

/////////2️.Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
/////////////////2️.Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//RESOLUCION
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
////////////////3️.Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
// 2️.Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

    function imprimirPrimerElementoArray(arr) {
    console.log(arr[1])
}
// 3️.Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

// 4️.Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
    // 3️.Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
let typeSuscripción = [
"Free",
"Basic", 
"Expert", 
"ExpertDuo"
];
let infoSuscripción = [
"solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "ExpertDuo";
for (let i=0; i < typeSuscripción.length; i++) {
  if (userSuscription == typeSuscripción[i]) {
  	console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
  }
}


