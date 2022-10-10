var acumulador = 0;

function suma(){
    for (var i=1; i <=5; i++){
        var valorPorPrompt = Number(prompt('Ingrese el valor del producto, por favor: '));
        acumulador+= valorPorPrompt;
    }
}

suma();

console.log('la suma de los cinco numeros es de: ', acumulador);

