










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
