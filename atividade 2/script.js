function sistema_operacional(){
let sistema = prompt("Digite o Sistema Operacional")
switch (sistema) {
    
    case 'Linux':
    console.log("O Linux é um sistema operacional de código aberto.");
    break;

    case 'Windows':
    console.log("O Windows é um sistema operacional da empresa Microsoft.");
    break;

    case 'macOS':
    console.log(" O macOS é um sistema operacional da empresa Apple.");
    break;

    case 'Chrome OS':
    console.log("O Chrome OS é um sistema operacional da empresa Google.");
    break;

    default: ("Há a possibilidade de você estar utilizando um sistema mobile.");

}
}
