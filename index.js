const pizza = ["harina", "agua", "sal", "levadura", "queso", "jamon", "salsa", "salame", "aceitunas", "roquefort", "panceta", "huevo"];
const metodo1Cont = document.getElementById('metodo1');
// Método 1: .filter()
let pares = pizza.filter(item => item.length%2 == 0).join(', ');
let impares = pizza.filter(item => item.length%2 == 1).join(', ');
metodo1Cont.innerHTML = `"Los ingredientes pares son: ${pares}. 
Los ingredientes impares son: ${impares}."`
console.log(pares);
console.log(impares);

//Método 2: .map()

let pares1 = [];
let impares1 = [];

let clasificar = pizza.map(item => {
    if (item.length%2 == 0) {
        pares1.push(item)
    } else {
        impares1.push(item)
    }
});
console.log(pares1);
console.log(impares1);

//Método 3: ciclo for

let pares2 = [];
let impares2 = [];

function clasificar1 (array) {
    for (let i=0; i < array.length; i++) {
        if (array[i].length%2 == 0) {
            pares2.push(array[i]);
            
        } else {
            impares2.push(array[i])
        }
        
    }
    console.log(pares2);
    console.log(impares2);
}
clasificar1(pizza);