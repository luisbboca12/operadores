let jugador =parseInt(prompt("elige 1 para Piedra, 2 para Papel, 3 para Tijera"))
switch (jugador) {
    case 1:
        alert("Elegiste piedra")
        
        break;

    case 2:
        alert("Elegiste papel")
        break;
    
    case 3:
        alert("Elegiste tijera")
        break;

        default:
            alert("no elegiste nada")
            break;
}

let pc= aleatorio(1,4)
switch (pc) {
    case 1:
        alert("Pc eligio piedra")
        
        break;

    case 2:
        alert("Pc eligio papel")
        break;
    
    case 3:
        alert("Pc eligio tijera")
        break;

        default:
            alert("PC no elegiste nada")
            break;
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
    
}

if((jugador==1 && pc==3) || (jugador== 2 && pc == 1) || (jugador==3 && pc== 2)){
    alert("Ganaste")
}else if(jugador===pc){
    alert("Empate")
}else{
    alert("Perdiste")
}
