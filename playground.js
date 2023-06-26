function expresion(valor){
    switch (valor) {
        case "computadora":
            return "usted us computadora"
            break;
    
        case "celular":
            return console.log("usted usa celular")

            break;
        case "cable":
            return console.log("cable")
            break;

        default:
        return console.log("nada")
    }
}
expresion("computadora")
